import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-23BXOP6M.js";
import {
  ToastService
} from "./chunk-RP5NUORX.js";
import {
  AuthService,
  CartService,
  CommonModule,
  Component,
  DecimalPipe,
  HttpClient,
  HttpClientModule,
  Injectable,
  NgForOf,
  NgIf,
  Router,
  __async,
  environment,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-BZSMQWJC.js";

// src/app/components/pdf-generator/pdf-generator.component.ts
var PdfGeneratorComponent = class _PdfGeneratorComponent {
  auth;
  toast;
  http;
  logoUrl = `${environment.assetsBase.replace(/\/$/, "")}/no-image-icon.jpg`;
  user = null;
  templateCache = null;
  constructor(auth, toast, http) {
    this.auth = auth;
    this.toast = toast;
    this.http = http;
    this.auth.user$.subscribe((u) => {
      this.user = u;
      const logoVal = u?.logo || u?.fav_icon || u?.logo_url || null;
      if (logoVal) {
        this.logoUrl = /^https?:\/\//i.test(logoVal) ? logoVal : `${environment.assetsBase.replace(/\/$/, "")}/${logoVal.replace(/^\//, "")}`;
      }
    });
  }
  generateInvoicePdf(invoiceData) {
    return __async(this, null, function* () {
      try {
        if (!invoiceData.customer) {
          this.toast.show("Customer information is required", "error");
          return;
        }
        if (!invoiceData.staff) {
          this.toast.show("Staff information is required", "error");
          return;
        }
        if (!invoiceData.items || invoiceData.items.length === 0) {
          this.toast.show("Cannot generate PDF for empty cart", "error");
          return;
        }
        if (!invoiceData.payments || invoiceData.payments.length === 0) {
          this.toast.show("Payment information is required", "error");
          return;
        }
        const logoBase64 = this.logoUrl ? yield this.convertImageToBase64(this.logoUrl) : "";
        const printWindow = window.open("", "_blank");
        if (!printWindow) {
          this.toast.show("Unable to open print window. Please check popup settings.", "error");
          return;
        }
        const html = yield this.buildInvoiceHtml(invoiceData, logoBase64);
        printWindow.document.write(html);
        printWindow.document.close();
        printWindow.onload = function() {
          printWindow.focus();
          printWindow.print();
        };
        this.toast.show("PDF generated successfully", "success");
      } catch (error) {
        console.error("Error generating PDF:", error);
        this.toast.show("Error generating PDF", "error");
      }
    });
  }
  convertImageToBase64(url) {
    return new Promise((resolve, reject) => {
      if (!url) {
        resolve("");
        return;
      }
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx?.drawImage(img, 0, 0);
        try {
          const dataURL = canvas.toDataURL("image/png");
          resolve(dataURL);
        } catch (error) {
          console.error("Error converting image to base64:", error);
          resolve("");
        }
      };
      img.onerror = () => {
        console.error("Error loading image:", url);
        resolve("");
      };
      img.src = url;
    });
  }
  loadTemplate() {
    return __async(this, null, function* () {
      if (this.templateCache) {
        return this.templateCache;
      }
      try {
        const templatePath = "./assets/templates/invoice-template.html";
        this.templateCache = (yield this.http.get(templatePath, { responseType: "text" }).toPromise()) || "";
        return this.templateCache;
      } catch (error) {
        console.error("Error loading template:", error);
        return this.getInlineTemplate();
      }
    });
  }
  getInlineTemplate() {
    return `
<!DOCTYPE html>
<html>
<head>
  <title>Invoice - {{customerName}}</title>
  <style>
    * { box-sizing: border-box; }
    body { 
      font-family: 'Arial', 'Helvetica', sans-serif; 
      padding: 0; margin: 0; color: #333; 
      background: white; line-height: 1.4;
    }
    .invoice-container { max-width: 800px; margin: 20px auto; background: white; border: 1px solid #ddd; }
    .header { background: #f8f9fa; border-bottom: 2px solid #333; padding: 30px; }
    .header-content { display: flex; align-items: center; gap: 25px; }
    .logo-container { width: 80px; height: 80px; border: 1px solid #ddd; display: flex; align-items: center; justify-content: center; overflow: hidden; }
    .logo { width: 70px; height: 70px; object-fit: cover; }
    .logo-fallback { width: 60px; height: 60px; background: #333; color: white; display: flex; align-items: center; justify-content: center; font-size: 20px; font-weight: bold; }
    .shop-info { flex: 1; }
    .shop-name { font-size: 24px; font-weight: 700; margin: 0 0 10px 0; color: #333; }
    .shop-details { font-size: 14px; margin: 5px 0; color: #666; }
    .shop-details strong { margin-right: 8px; color: #333; }
    .invoice-meta { position: absolute; top: 30px; right: 30px; text-align: right; }
    .invoice-title { font-size: 16px; font-weight: 600; color: #333; margin: 0; }
    .invoice-number { font-size: 20px; font-weight: 700; margin: 5px 0; color: #333; }
    .content { padding: 30px; }
    .customer-staff-row { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin-bottom: 30px; }
    .info-card { border: 1px solid #ddd; padding: 20px; background: #f8f9fa; }
    .info-card h3 { margin: 0 0 15px 0; font-size: 16px; font-weight: 600; color: #333; border-bottom: 1px solid #ddd; padding-bottom: 8px; }
    .info-card .detail { font-size: 14px; margin: 8px 0; display: flex; justify-content: space-between; }
    .info-card .detail .label { font-weight: 600; color: #333; }
    .products-table, .payment-table { width: 100%; border-collapse: collapse; margin: 20px 0; border: 1px solid #ddd; }
    .products-table th, .payment-table th { background: #333; color: white; padding: 15px 12px; font-weight: 600; text-align: left; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; }
    .products-table td, .payment-table td { padding: 12px; border-bottom: 1px solid #e0e0e0; font-size: 14px; }
    .products-table tbody tr:nth-child(even), .payment-table tbody tr:nth-child(even) { background: #f8f9fa; }
    .total-row { background: #333 !important; color: white !important; font-weight: 700; font-size: 16px; }
    .total-row td { padding: 18px 12px !important; border: none !important; }
    .payment-section { margin-top: 30px; }
    .section-title { font-size: 18px; font-weight: 700; color: #333; margin: 0 0 15px 0; padding-bottom: 8px; border-bottom: 2px solid #333; }
    .footer { background: #f8f9fa; border-top: 2px solid #333; text-align: center; padding: 25px; margin-top: 30px; }
    .footer h4 { margin: 0 0 10px 0; font-size: 16px; font-weight: 600; color: #333; }
    .footer p { margin: 5px 0; color: #666; font-size: 14px; }
    .right { text-align: right; }
    .center { text-align: center; }
    .currency { font-weight: 600; color: #333; }
    @media print { body { background: white; padding: 0; } .invoice-container { border: none; margin: 0; max-width: none; } }
    @media (max-width: 768px) { .customer-staff-row { grid-template-columns: 1fr; gap: 20px; } .header-content { flex-direction: column; text-align: center; } .invoice-meta { position: static; margin-top: 20px; } }
  </style>
</head>
<body>
  <div class="invoice-container">
    <div class="header">
      <div class="header-content">
        <div class="logo-container">{{logoHtml}}</div>
        <div class="shop-info">
          <h1 class="shop-name">{{shopName}}</h1>
          {{shopPhoneHtml}}{{shopAddressHtml}}{{shopGstHtml}}
        </div>
      </div>
      <div class="invoice-meta">
        <div class="invoice-title">INVOICE</div>
        <div class="invoice-number">{{invoiceNumber}}</div>
        <div style="font-size: 12px; margin-top: 8px; color: #666;">{{currentDate}} \u2022 {{currentTime}}</div>
      </div>
    </div>
    <div class="content">
      <div class="customer-staff-row">
        <div class="info-card">
          <h3>Customer Information</h3>
          <div class="detail"><span class="label">Name:</span><span>{{customerName}}</span></div>
          {{customerPhoneHtml}}
        </div>
        <div class="info-card">
          <h3>Staff Information</h3>
          <div class="detail"><span class="label">Served by:</span><span>{{staffName}}</span></div>
          <div class="detail"><span class="label">Date:</span><span>{{currentDate}}</span></div>
        </div>
      </div>
      <h2 class="section-title">Products</h2>
      <table class="products-table">
        <thead><tr><th>Product</th><th style="text-align: center">Qty</th><th style="text-align: right">Price</th><th style="text-align: right">Total</th></tr></thead>
        <tbody>{{itemsHtml}}</tbody>
        <tfoot><tr class="total-row"><td colspan="3" class="right"><strong>TOTAL AMOUNT</strong></td><td class="right"><strong>\u20B9{{totalAmount}}</strong></td></tr></tfoot>
      </table>
      <div class="payment-section">
        <h2 class="section-title">Payment Details</h2>
        <table class="payment-table">
          <thead><tr><th>Payment Method</th><th style="text-align: right">Amount</th><th>Details</th></tr></thead>
          <tbody>{{paymentsHtml}}</tbody>
        </table>
      </div>
    </div>
    <div class="footer">
      <h4>Thank you for your business!</h4>
      <p>We appreciate your trust and look forward to serving you again.</p>
      <p style="margin-top: 15px; font-size: 12px;">Generated on {{currentDate}} at {{currentTime}}</p>
    </div>
  </div>
</body>
</html>`;
  }
  buildInvoiceHtml(invoiceData, logoBase64 = "") {
    return __async(this, null, function* () {
      let template = yield this.loadTemplate();
      const itemsHtml = invoiceData.items.map((i) => `
            <tr>
                <td>${i.product?.name || i.product?.title || i.id}</td>
                <td style="text-align: center">${i.qty}</td>
                <td style="text-align: right">\u20B9${Number(i.product?.price || 0).toFixed(2)}</td>
                <td style="text-align: right">\u20B9${(Number(i.product?.price || 0) * i.qty).toFixed(2)}</td>
            </tr>
        `).join("");
      const staffName = invoiceData.staff?.name || invoiceData.staff?.full_name || "-";
      const customerName = invoiceData.customer?.name || "Walk-in Customer";
      const customerPhone = invoiceData.customer?.phone || "";
      const shopName = this.user?.business_name || this.user?.name || "Shop Name";
      const shopPhone = this.user?.phone || this.user?.mobile || "";
      const shopAddress = this.user?.user_detail?.address || this.user?.address || "";
      const shopGst = this.user?.user_detail?.gst_number || this.user?.gst_number || "";
      const paymentsHtml = invoiceData.payments.map((payment) => {
        const methodName = payment.method.name;
        const amount = `\u20B9${Number(payment.amount || 0).toFixed(2)}`;
        let details = "";
        if (payment.method.name.toLowerCase() === "finance") {
          details = `Ref: ${payment.financeRefNo || "N/A"}, Finance: ${payment.selectedFinance?.name || "N/A"}`;
        } else if (payment.method.name.toLowerCase() === "card") {
          details = `Card: ${payment.cardNo || "N/A"}, Name: ${payment.cardName || "N/A"}`;
        } else if (payment.method.name.toLowerCase() === "cheque") {
          details = `Cheque No: ${payment.chequeNo || "N/A"}`;
        }
        return `
                <tr>
                    <td>${methodName}</td>
                    <td style="text-align: right">${amount}</td>
                    <td>${details}</td>
                </tr>
            `;
      }).join("");
      const currentDate = (/* @__PURE__ */ new Date()).toLocaleDateString();
      const currentTime = (/* @__PURE__ */ new Date()).toLocaleTimeString();
      const logoHtml = logoBase64 ? `<img src="${logoBase64}" alt="${shopName}" class="logo">` : `<div class="logo-fallback">${shopName.charAt(0)}</div>`;
      const shopPhoneHtml = shopPhone ? `<div class="shop-details"><strong>Phone:</strong> ${shopPhone}</div>` : "";
      const shopAddressHtml = shopAddress ? `<div class="shop-details"><strong>Address:</strong> ${shopAddress}</div>` : "";
      const shopGstHtml = shopGst ? `<div class="shop-details"><strong>GST No:</strong> ${shopGst}</div>` : "";
      const customerPhoneHtml = customerPhone ? `
            <div class="detail">
                <span class="label">Phone:</span>
                <span>${customerPhone}</span>
            </div>
        ` : "";
      const replacements = {
        "{{customerName}}": customerName,
        "{{staffName}}": staffName,
        "{{shopName}}": shopName,
        "{{logoHtml}}": logoHtml,
        "{{shopPhoneHtml}}": shopPhoneHtml,
        "{{shopAddressHtml}}": shopAddressHtml,
        "{{shopGstHtml}}": shopGstHtml,
        "{{customerPhoneHtml}}": customerPhoneHtml,
        "{{invoiceNumber}}": `#INV-${Date.now().toString().slice(-6)}`,
        "{{currentDate}}": currentDate,
        "{{currentTime}}": currentTime,
        "{{itemsHtml}}": itemsHtml,
        "{{paymentsHtml}}": paymentsHtml,
        "{{totalAmount}}": invoiceData.total.toFixed(2)
      };
      Object.entries(replacements).forEach(([placeholder, value]) => {
        template = template.replace(new RegExp(placeholder, "g"), value);
      });
      return template;
    });
  }
  static \u0275fac = function PdfGeneratorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PdfGeneratorComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(HttpClient));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PdfGeneratorComponent, selectors: [["app-pdf-generator"]], decls: 0, vars: 0, template: function PdfGeneratorComponent_Template(rf, ctx) {
  }, styles: ["\n\n.invoice-container[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 20px auto;\n  background: white;\n  border: 1px solid #ddd;\n}\n.header[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border-bottom: 2px solid #333;\n  padding: 30px;\n  position: relative;\n}\n.header-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 25px;\n}\n.logo-container[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border: 1px solid #ddd;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n.logo[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 70px;\n  object-fit: cover;\n}\n.logo-fallback[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  background: #333;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  font-weight: bold;\n}\n.shop-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.shop-name[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  margin: 0 0 10px 0;\n  color: #333;\n}\n.shop-details[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin: 5px 0;\n  color: #666;\n}\n.shop-details[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  color: #333;\n}\n.invoice-meta[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 30px;\n  right: 30px;\n  text-align: right;\n}\n.invoice-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #333;\n  margin: 0;\n}\n.invoice-number[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  margin: 5px 0;\n  color: #333;\n}\n.content[_ngcontent-%COMP%] {\n  padding: 30px;\n}\n.customer-staff-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 30px;\n  margin-bottom: 30px;\n}\n.info-card[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  padding: 20px;\n  background: #f8f9fa;\n}\n.info-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 15px 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: #333;\n  border-bottom: 1px solid #ddd;\n  padding-bottom: 8px;\n}\n.info-card[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin: 8px 0;\n  display: flex;\n  justify-content: space-between;\n}\n.info-card[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #333;\n}\n.products-table[_ngcontent-%COMP%], \n.payment-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  margin: 20px 0;\n  border: 1px solid #ddd;\n}\n.products-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.payment-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #333;\n  color: white;\n  padding: 15px 12px;\n  font-weight: 600;\n  text-align: left;\n  font-size: 13px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.products-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], \n.payment-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px;\n  border-bottom: 1px solid #e0e0e0;\n  font-size: 14px;\n}\n.products-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even), \n.payment-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background: #f8f9fa;\n}\n.total-row[_ngcontent-%COMP%] {\n  background: #333 !important;\n  color: white !important;\n  font-weight: 700;\n  font-size: 16px;\n}\n.total-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 18px 12px !important;\n  border: none !important;\n}\n.payment-section[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #333;\n  margin: 0 0 15px 0;\n  padding-bottom: 8px;\n  border-bottom: 2px solid #333;\n}\n.footer[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border-top: 2px solid #333;\n  text-align: center;\n  padding: 25px;\n  margin-top: 30px;\n}\n.footer[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 10px 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: #333;\n}\n.footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 5px 0;\n  color: #666;\n  font-size: 14px;\n}\n.right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.currency[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #333;\n}\n@media print {\n  body[_ngcontent-%COMP%] {\n    background: white;\n    padding: 0;\n  }\n  .invoice-container[_ngcontent-%COMP%] {\n    border: none;\n    margin: 0;\n    max-width: none;\n  }\n}\n@media (max-width: 768px) {\n  .customer-staff-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 20px;\n  }\n  .header-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n  }\n  .invoice-meta[_ngcontent-%COMP%] {\n    position: static;\n    margin-top: 20px;\n  }\n}\n/*# sourceMappingURL=pdf-generator.component.css.map */"] });
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PdfGeneratorComponent, factory: _PdfGeneratorComponent.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PdfGeneratorComponent, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }, {
    type: Component,
    args: [{ selector: "app-pdf-generator", standalone: true, imports: [], template: "", styles: ["/* src/app/components/pdf-generator/pdf-generator.component.scss */\n.invoice-container {\n  max-width: 800px;\n  margin: 20px auto;\n  background: white;\n  border: 1px solid #ddd;\n}\n.header {\n  background: #f8f9fa;\n  border-bottom: 2px solid #333;\n  padding: 30px;\n  position: relative;\n}\n.header-content {\n  display: flex;\n  align-items: center;\n  gap: 25px;\n}\n.logo-container {\n  width: 80px;\n  height: 80px;\n  border: 1px solid #ddd;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n.logo {\n  width: 70px;\n  height: 70px;\n  object-fit: cover;\n}\n.logo-fallback {\n  width: 60px;\n  height: 60px;\n  background: #333;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  font-weight: bold;\n}\n.shop-info {\n  flex: 1;\n}\n.shop-name {\n  font-size: 24px;\n  font-weight: 700;\n  margin: 0 0 10px 0;\n  color: #333;\n}\n.shop-details {\n  font-size: 14px;\n  margin: 5px 0;\n  color: #666;\n}\n.shop-details strong {\n  margin-right: 8px;\n  color: #333;\n}\n.invoice-meta {\n  position: absolute;\n  top: 30px;\n  right: 30px;\n  text-align: right;\n}\n.invoice-title {\n  font-size: 16px;\n  font-weight: 600;\n  color: #333;\n  margin: 0;\n}\n.invoice-number {\n  font-size: 20px;\n  font-weight: 700;\n  margin: 5px 0;\n  color: #333;\n}\n.content {\n  padding: 30px;\n}\n.customer-staff-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 30px;\n  margin-bottom: 30px;\n}\n.info-card {\n  border: 1px solid #ddd;\n  padding: 20px;\n  background: #f8f9fa;\n}\n.info-card h3 {\n  margin: 0 0 15px 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: #333;\n  border-bottom: 1px solid #ddd;\n  padding-bottom: 8px;\n}\n.info-card .detail {\n  font-size: 14px;\n  margin: 8px 0;\n  display: flex;\n  justify-content: space-between;\n}\n.info-card .detail .label {\n  font-weight: 600;\n  color: #333;\n}\n.products-table,\n.payment-table {\n  width: 100%;\n  border-collapse: collapse;\n  margin: 20px 0;\n  border: 1px solid #ddd;\n}\n.products-table th,\n.payment-table th {\n  background: #333;\n  color: white;\n  padding: 15px 12px;\n  font-weight: 600;\n  text-align: left;\n  font-size: 13px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.products-table td,\n.payment-table td {\n  padding: 12px;\n  border-bottom: 1px solid #e0e0e0;\n  font-size: 14px;\n}\n.products-table tbody tr:nth-child(even),\n.payment-table tbody tr:nth-child(even) {\n  background: #f8f9fa;\n}\n.total-row {\n  background: #333 !important;\n  color: white !important;\n  font-weight: 700;\n  font-size: 16px;\n}\n.total-row td {\n  padding: 18px 12px !important;\n  border: none !important;\n}\n.payment-section {\n  margin-top: 30px;\n}\n.section-title {\n  font-size: 18px;\n  font-weight: 700;\n  color: #333;\n  margin: 0 0 15px 0;\n  padding-bottom: 8px;\n  border-bottom: 2px solid #333;\n}\n.footer {\n  background: #f8f9fa;\n  border-top: 2px solid #333;\n  text-align: center;\n  padding: 25px;\n  margin-top: 30px;\n}\n.footer h4 {\n  margin: 0 0 10px 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: #333;\n}\n.footer p {\n  margin: 5px 0;\n  color: #666;\n  font-size: 14px;\n}\n.right {\n  text-align: right;\n}\n.center {\n  text-align: center;\n}\n.currency {\n  font-weight: 600;\n  color: #333;\n}\n@media print {\n  body {\n    background: white;\n    padding: 0;\n  }\n  .invoice-container {\n    border: none;\n    margin: 0;\n    max-width: none;\n  }\n}\n@media (max-width: 768px) {\n  .customer-staff-row {\n    grid-template-columns: 1fr;\n    gap: 20px;\n  }\n  .header-content {\n    flex-direction: column;\n    text-align: center;\n  }\n  .invoice-meta {\n    position: static;\n    margin-top: 20px;\n  }\n}\n/*# sourceMappingURL=pdf-generator.component.css.map */\n"] }]
  }], () => [{ type: AuthService }, { type: ToastService }, { type: HttpClient }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PdfGeneratorComponent, { className: "PdfGeneratorComponent", filePath: "src/app/components/pdf-generator/pdf-generator.component.ts", lineNumber: 17 });
})();

// src/app/components/checkout/checkout.component.ts
function CheckoutComponent_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 32);
    \u0275\u0275listener("click", function CheckoutComponent_button_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearStaffSearch());
    });
    \u0275\u0275element(1, "i", 33);
    \u0275\u0275elementEnd();
  }
}
function CheckoutComponent_div_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275element(1, "i", 39);
    \u0275\u0275text(2, " Searching staff... ");
    \u0275\u0275elementEnd();
  }
}
function CheckoutComponent_div_12_div_2_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const staff_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(staff_r4.email);
  }
}
function CheckoutComponent_div_12_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275listener("click", function CheckoutComponent_div_12_div_2_Template_div_click_0_listener() {
      const staff_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectStaff(staff_r4));
    });
    \u0275\u0275elementStart(1, "div", 41);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, CheckoutComponent_div_12_div_2_div_3_Template, 2, 1, "div", 42);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const staff_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(staff_r4.name || staff_r4.full_name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", staff_r4.email);
  }
}
function CheckoutComponent_div_12_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275text(1, " No staff found ");
    \u0275\u0275elementEnd();
  }
}
function CheckoutComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275template(1, CheckoutComponent_div_12_div_1_Template, 3, 0, "div", 35)(2, CheckoutComponent_div_12_div_2_Template, 4, 2, "div", 36)(3, CheckoutComponent_div_12_div_3_Template, 2, 0, "div", 37);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.staffSearchLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.searchedStaff);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.staffSearchLoading && (ctx_r1.searchedStaff == null ? null : ctx_r1.searchedStaff.length) === 0 && ctx_r1.staffSearchTerm);
  }
}
function CheckoutComponent_div_13_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u2022 ", ctx_r1.selectedStaff.email);
  }
}
function CheckoutComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 45)(1, "div", 46)(2, "span", 41);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, CheckoutComponent_div_13_span_4_Template, 2, 1, "span", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 47);
    \u0275\u0275listener("click", function CheckoutComponent_div_13_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearSelectedStaff());
    });
    \u0275\u0275element(6, "i", 33);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.selectedStaff.name || ctx_r1.selectedStaff.full_name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedStaff.email);
  }
}
function CheckoutComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275element(1, "i", 49);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "No staff selected. Search and select a staff member above.");
    \u0275\u0275elementEnd()();
  }
}
function CheckoutComponent_button_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 32);
    \u0275\u0275listener("click", function CheckoutComponent_button_22_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearCustomerSearch());
    });
    \u0275\u0275element(1, "i", 33);
    \u0275\u0275elementEnd();
  }
}
function CheckoutComponent_div_23_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275element(1, "i", 39);
    \u0275\u0275text(2, " Searching customers... ");
    \u0275\u0275elementEnd();
  }
}
function CheckoutComponent_div_23_div_2_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const customer_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(customer_r8.phone);
  }
}
function CheckoutComponent_div_23_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275listener("click", function CheckoutComponent_div_23_div_2_Template_div_click_0_listener() {
      const customer_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectCustomer(customer_r8));
    });
    \u0275\u0275elementStart(1, "div", 54);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, CheckoutComponent_div_23_div_2_div_3_Template, 2, 1, "div", 55);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const customer_r8 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(customer_r8.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", customer_r8.phone);
  }
}
function CheckoutComponent_div_23_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275text(1, " No customers found ");
    \u0275\u0275elementEnd();
  }
}
function CheckoutComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275template(1, CheckoutComponent_div_23_div_1_Template, 3, 0, "div", 35)(2, CheckoutComponent_div_23_div_2_Template, 4, 2, "div", 51)(3, CheckoutComponent_div_23_div_3_Template, 2, 0, "div", 52);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.customerSearchLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.searchedCustomers);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.customerSearchLoading && (ctx_r1.searchedCustomers == null ? null : ctx_r1.searchedCustomers.length) === 0 && ctx_r1.customerSearchTerm);
  }
}
function CheckoutComponent_div_24_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u2022 ", ctx_r1.selectedCustomer.phone);
  }
}
function CheckoutComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 58)(1, "div", 59)(2, "span", 54);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, CheckoutComponent_div_24_span_4_Template, 2, 1, "span", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 60);
    \u0275\u0275listener("click", function CheckoutComponent_div_24_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearSelectedCustomer());
    });
    \u0275\u0275element(6, "i", 33);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.selectedCustomer.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedCustomer.phone);
  }
}
function CheckoutComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61);
    \u0275\u0275element(1, "i", 49);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "No customer selected. Search and select a customer above.");
    \u0275\u0275elementEnd()();
  }
}
function CheckoutComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Remaining Amount: ", \u0275\u0275pipeBind2(3, 1, ctx_r1.getRemainingAmount(), "1.2-2"));
  }
}
function CheckoutComponent_button_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 32);
    \u0275\u0275listener("click", function CheckoutComponent_button_40_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearPaymentSearch());
    });
    \u0275\u0275element(1, "i", 33);
    \u0275\u0275elementEnd();
  }
}
function CheckoutComponent_div_41_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275element(1, "i", 39);
    \u0275\u0275text(2, " Loading payment methods... ");
    \u0275\u0275elementEnd();
  }
}
function CheckoutComponent_div_41_div_2_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const method_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(method_r12.description);
  }
}
function CheckoutComponent_div_41_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 66);
    \u0275\u0275listener("click", function CheckoutComponent_div_41_div_2_Template_div_click_0_listener() {
      const method_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addPaymentMethod(method_r12));
    });
    \u0275\u0275elementStart(1, "div", 67);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, CheckoutComponent_div_41_div_2_div_3_Template, 2, 1, "div", 68);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const method_r12 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(method_r12.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", method_r12.description);
  }
}
function CheckoutComponent_div_41_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70);
    \u0275\u0275text(1, " No payment methods found ");
    \u0275\u0275elementEnd();
  }
}
function CheckoutComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275template(1, CheckoutComponent_div_41_div_1_Template, 3, 0, "div", 35)(2, CheckoutComponent_div_41_div_2_Template, 4, 2, "div", 64)(3, CheckoutComponent_div_41_div_3_Template, 2, 0, "div", 65);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.paymentSearchLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.searchedPaymentMethods);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.paymentSearchLoading && (ctx_r1.searchedPaymentMethods == null ? null : ctx_r1.searchedPaymentMethods.length) === 0 && ctx_r1.paymentSearchTerm);
  }
}
function CheckoutComponent_div_42_div_3_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 78)(1, "label");
    \u0275\u0275text(2, "Amount:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 79);
    \u0275\u0275twoWayListener("ngModelChange", function CheckoutComponent_div_42_div_3_div_4_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r14);
      const payment_r15 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(payment_r15.amount, $event) || (payment_r15.amount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function CheckoutComponent_div_42_div_3_div_4_Template_input_input_3_listener() {
      \u0275\u0275restoreView(_r14);
      const i_r16 = \u0275\u0275nextContext().index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updatePaymentAmount(i_r16));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 80)(5, "input", 81);
    \u0275\u0275twoWayListener("ngModelChange", function CheckoutComponent_div_42_div_3_div_4_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r14);
      const payment_r15 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(payment_r15.useRemainingAmount, $event) || (payment_r15.useRemainingAmount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function CheckoutComponent_div_42_div_3_div_4_Template_input_change_5_listener() {
      \u0275\u0275restoreView(_r14);
      const i_r16 = \u0275\u0275nextContext().index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleRemainingAmount(i_r16));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "label", 82);
    \u0275\u0275text(7, "Remaining Amount");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r16 = \u0275\u0275nextContext();
    const payment_r15 = ctx_r16.$implicit;
    const i_r16 = ctx_r16.index;
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", payment_r15.amount);
    \u0275\u0275advance(2);
    \u0275\u0275property("id", \u0275\u0275interpolate1("remaining-cash-", i_r16));
    \u0275\u0275twoWayProperty("ngModel", payment_r15.useRemainingAmount);
    \u0275\u0275advance();
    \u0275\u0275property("for", \u0275\u0275interpolate1("remaining-cash-", i_r16));
  }
}
function CheckoutComponent_div_42_div_3_div_5_option_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 89);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const finance_r19 = ctx.$implicit;
    \u0275\u0275property("ngValue", finance_r19);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", finance_r19.name, " ");
  }
}
function CheckoutComponent_div_42_div_3_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 78)(1, "div", 83)(2, "label");
    \u0275\u0275text(3, "Amount:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 84);
    \u0275\u0275twoWayListener("ngModelChange", function CheckoutComponent_div_42_div_3_div_5_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r18);
      const payment_r15 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(payment_r15.amount, $event) || (payment_r15.amount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function CheckoutComponent_div_42_div_3_div_5_Template_input_input_4_listener() {
      \u0275\u0275restoreView(_r18);
      const i_r16 = \u0275\u0275nextContext().index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updatePaymentAmount(i_r16));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 80)(6, "input", 81);
    \u0275\u0275twoWayListener("ngModelChange", function CheckoutComponent_div_42_div_3_div_5_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r18);
      const payment_r15 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(payment_r15.useRemainingAmount, $event) || (payment_r15.useRemainingAmount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function CheckoutComponent_div_42_div_3_div_5_Template_input_change_6_listener() {
      \u0275\u0275restoreView(_r18);
      const i_r16 = \u0275\u0275nextContext().index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleRemainingAmount(i_r16));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "label", 82);
    \u0275\u0275text(8, "Remaining Amount");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 83)(10, "label");
    \u0275\u0275text(11, "Finance Reference Number:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 85);
    \u0275\u0275twoWayListener("ngModelChange", function CheckoutComponent_div_42_div_3_div_5_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r18);
      const payment_r15 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(payment_r15.financeRefNo, $event) || (payment_r15.financeRefNo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 83)(14, "label");
    \u0275\u0275text(15, "Finance:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "select", 86);
    \u0275\u0275twoWayListener("ngModelChange", function CheckoutComponent_div_42_div_3_div_5_Template_select_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r18);
      const payment_r15 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(payment_r15.selectedFinance, $event) || (payment_r15.selectedFinance = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(17, "option", 87);
    \u0275\u0275text(18, "Select Finance Option");
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, CheckoutComponent_div_42_div_3_div_5_option_19_Template, 2, 2, "option", 88);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r16 = \u0275\u0275nextContext();
    const payment_r15 = ctx_r16.$implicit;
    const i_r16 = ctx_r16.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", payment_r15.amount);
    \u0275\u0275advance(2);
    \u0275\u0275property("id", \u0275\u0275interpolate1("remaining-finance-", i_r16));
    \u0275\u0275twoWayProperty("ngModel", payment_r15.useRemainingAmount);
    \u0275\u0275advance();
    \u0275\u0275property("for", \u0275\u0275interpolate1("remaining-finance-", i_r16));
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", payment_r15.financeRefNo);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", payment_r15.selectedFinance);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.financeOptions);
  }
}
function CheckoutComponent_div_42_div_3_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 78)(1, "div", 83)(2, "label");
    \u0275\u0275text(3, "Amount:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 90);
    \u0275\u0275twoWayListener("ngModelChange", function CheckoutComponent_div_42_div_3_div_6_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r20);
      const payment_r15 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(payment_r15.amount, $event) || (payment_r15.amount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function CheckoutComponent_div_42_div_3_div_6_Template_input_input_4_listener() {
      \u0275\u0275restoreView(_r20);
      const i_r16 = \u0275\u0275nextContext().index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updatePaymentAmount(i_r16));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 80)(6, "input", 81);
    \u0275\u0275twoWayListener("ngModelChange", function CheckoutComponent_div_42_div_3_div_6_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r20);
      const payment_r15 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(payment_r15.useRemainingAmount, $event) || (payment_r15.useRemainingAmount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function CheckoutComponent_div_42_div_3_div_6_Template_input_change_6_listener() {
      \u0275\u0275restoreView(_r20);
      const i_r16 = \u0275\u0275nextContext().index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleRemainingAmount(i_r16));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "label", 82);
    \u0275\u0275text(8, "Remaining Amount");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 83)(10, "label");
    \u0275\u0275text(11, "Card Number:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 91);
    \u0275\u0275twoWayListener("ngModelChange", function CheckoutComponent_div_42_div_3_div_6_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r20);
      const payment_r15 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(payment_r15.cardNo, $event) || (payment_r15.cardNo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 83)(14, "label");
    \u0275\u0275text(15, "Card Name:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 92);
    \u0275\u0275twoWayListener("ngModelChange", function CheckoutComponent_div_42_div_3_div_6_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r20);
      const payment_r15 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(payment_r15.cardName, $event) || (payment_r15.cardName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r16 = \u0275\u0275nextContext();
    const payment_r15 = ctx_r16.$implicit;
    const i_r16 = ctx_r16.index;
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", payment_r15.amount);
    \u0275\u0275advance(2);
    \u0275\u0275property("id", \u0275\u0275interpolate1("remaining-card-", i_r16));
    \u0275\u0275twoWayProperty("ngModel", payment_r15.useRemainingAmount);
    \u0275\u0275advance();
    \u0275\u0275property("for", \u0275\u0275interpolate1("remaining-card-", i_r16));
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", payment_r15.cardNo);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", payment_r15.cardName);
  }
}
function CheckoutComponent_div_42_div_3_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 78)(1, "div", 83)(2, "label");
    \u0275\u0275text(3, "Amount:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 93);
    \u0275\u0275twoWayListener("ngModelChange", function CheckoutComponent_div_42_div_3_div_7_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r21);
      const payment_r15 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(payment_r15.amount, $event) || (payment_r15.amount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function CheckoutComponent_div_42_div_3_div_7_Template_input_input_4_listener() {
      \u0275\u0275restoreView(_r21);
      const i_r16 = \u0275\u0275nextContext().index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updatePaymentAmount(i_r16));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 80)(6, "input", 81);
    \u0275\u0275twoWayListener("ngModelChange", function CheckoutComponent_div_42_div_3_div_7_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r21);
      const payment_r15 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(payment_r15.useRemainingAmount, $event) || (payment_r15.useRemainingAmount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function CheckoutComponent_div_42_div_3_div_7_Template_input_change_6_listener() {
      \u0275\u0275restoreView(_r21);
      const i_r16 = \u0275\u0275nextContext().index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleRemainingAmount(i_r16));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "label", 82);
    \u0275\u0275text(8, "Remaining Amount");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 83)(10, "label");
    \u0275\u0275text(11, "Cheque Number:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 94);
    \u0275\u0275twoWayListener("ngModelChange", function CheckoutComponent_div_42_div_3_div_7_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r21);
      const payment_r15 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(payment_r15.chequeNo, $event) || (payment_r15.chequeNo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r16 = \u0275\u0275nextContext();
    const payment_r15 = ctx_r16.$implicit;
    const i_r16 = ctx_r16.index;
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", payment_r15.amount);
    \u0275\u0275advance(2);
    \u0275\u0275property("id", \u0275\u0275interpolate1("remaining-cheque-", i_r16));
    \u0275\u0275twoWayProperty("ngModel", payment_r15.useRemainingAmount);
    \u0275\u0275advance();
    \u0275\u0275property("for", \u0275\u0275interpolate1("remaining-cheque-", i_r16));
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", payment_r15.chequeNo);
  }
}
function CheckoutComponent_div_42_div_3_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 78)(1, "label");
    \u0275\u0275text(2, "Amount:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 95);
    \u0275\u0275twoWayListener("ngModelChange", function CheckoutComponent_div_42_div_3_div_8_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r22);
      const payment_r15 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(payment_r15.amount, $event) || (payment_r15.amount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function CheckoutComponent_div_42_div_3_div_8_Template_input_input_3_listener() {
      \u0275\u0275restoreView(_r22);
      const i_r16 = \u0275\u0275nextContext().index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updatePaymentAmount(i_r16));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 80)(5, "input", 81);
    \u0275\u0275twoWayListener("ngModelChange", function CheckoutComponent_div_42_div_3_div_8_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r22);
      const payment_r15 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(payment_r15.useRemainingAmount, $event) || (payment_r15.useRemainingAmount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function CheckoutComponent_div_42_div_3_div_8_Template_input_change_5_listener() {
      \u0275\u0275restoreView(_r22);
      const i_r16 = \u0275\u0275nextContext().index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleRemainingAmount(i_r16));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "label", 82);
    \u0275\u0275text(7, "Remaining Amount");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r16 = \u0275\u0275nextContext();
    const payment_r15 = ctx_r16.$implicit;
    const i_r16 = ctx_r16.index;
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", payment_r15.amount);
    \u0275\u0275advance(2);
    \u0275\u0275property("id", \u0275\u0275interpolate1("remaining-other-", i_r16));
    \u0275\u0275twoWayProperty("ngModel", payment_r15.useRemainingAmount);
    \u0275\u0275advance();
    \u0275\u0275property("for", \u0275\u0275interpolate1("remaining-other-", i_r16));
  }
}
function CheckoutComponent_div_42_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 73)(1, "div", 74)(2, "div", 75);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, CheckoutComponent_div_42_div_3_div_4_Template, 8, 6, "div", 76)(5, CheckoutComponent_div_42_div_3_div_5_Template, 20, 9, "div", 76)(6, CheckoutComponent_div_42_div_3_div_6_Template, 17, 8, "div", 76)(7, CheckoutComponent_div_42_div_3_div_7_Template, 13, 7, "div", 76)(8, CheckoutComponent_div_42_div_3_div_8_Template, 8, 6, "div", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 77);
    \u0275\u0275listener("click", function CheckoutComponent_div_42_div_3_Template_button_click_9_listener() {
      const i_r16 = \u0275\u0275restoreView(_r13).index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removePaymentMethod(i_r16));
    });
    \u0275\u0275element(10, "i", 33);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const payment_r15 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(payment_r15.method.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", payment_r15.method.name.toLowerCase() === "cash");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", payment_r15.method.name.toLowerCase() === "finance");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", payment_r15.method.name.toLowerCase() === "card");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", payment_r15.method.name.toLowerCase() === "cheque");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", payment_r15.method.name.toLowerCase() !== "cash" && payment_r15.method.name.toLowerCase() !== "finance" && payment_r15.method.name.toLowerCase() !== "card" && payment_r15.method.name.toLowerCase() !== "cheque");
  }
}
function CheckoutComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71)(1, "h4");
    \u0275\u0275text(2, "Selected Payment Methods");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, CheckoutComponent_div_42_div_3_Template, 11, 6, "div", 72);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.selectedPayments);
  }
}
function CheckoutComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 96);
    \u0275\u0275element(1, "i", 97);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "No payment methods selected. Choose payment methods above.");
    \u0275\u0275elementEnd()();
  }
}
function CheckoutComponent_tr_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const it_r23 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((it_r23.product == null ? null : it_r23.product.name) || (it_r23.product == null ? null : it_r23.product.title) || it_r23.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(it_r23.qty);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 4, (it_r23.product == null ? null : it_r23.product.price) || 0, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 7, ((it_r23.product == null ? null : it_r23.product.price) || 0) * it_r23.qty, "1.2-2"));
  }
}
var CheckoutComponent = class _CheckoutComponent {
  cart;
  auth;
  router;
  http;
  toast;
  pdfGenerator;
  items = [];
  staffList = [];
  customerList = [];
  searchedCustomers = [];
  selectedStaff = null;
  selectedCustomer = null;
  loading = false;
  user = null;
  // Customer search properties
  customerSearchTerm = "";
  customerSearchLoading = false;
  showCustomerDropdown = false;
  searchTimeout;
  // Staff search properties
  staffSearchTerm = "";
  staffSearchLoading = false;
  showStaffDropdown = false;
  searchedStaff = [];
  staffSearchTimeout;
  // Payment methods properties
  paymentMethods = [];
  selectedPayments = [];
  paymentSearchTerm = "";
  paymentSearchLoading = false;
  showPaymentDropdown = false;
  searchedPaymentMethods = [];
  paymentSearchTimeout;
  // Finance options properties
  financeOptions = [];
  financeLoading = false;
  constructor(cart, auth, router, http, toast, pdfGenerator) {
    this.cart = cart;
    this.auth = auth;
    this.router = router;
    this.http = http;
    this.toast = toast;
    this.pdfGenerator = pdfGenerator;
    this.cart.cart$.subscribe((i) => this.items = i || []);
    this.auth.user$.subscribe((u) => this.user = u);
    this.selectedCustomer = null;
    this.selectedStaff = null;
    document.addEventListener("click", (e) => {
      if (!e.target?.closest(".customer-search-container")) {
        this.showCustomerDropdown = false;
      }
      if (!e.target?.closest(".staff-search-container")) {
        this.showStaffDropdown = false;
      }
      if (!e.target?.closest(".payment-methods-container")) {
        this.showPaymentDropdown = false;
      }
    });
  }
  ngOnInit() {
    this.loadStaff();
    this.loadDefaultCustomers();
    this.loadPaymentMethods();
    this.loadFinanceOptions();
  }
  loadDefaultCustomers() {
    const headers = this.auth.authHeaders();
    const url = `${environment.apiBase}/pos/customer`;
    this.http.get(url, { headers }).subscribe({
      next: (response) => {
        let customers = [];
        if (response.data) {
          customers = Array.isArray(response.data) ? response.data : [response.data];
        } else {
          customers = Array.isArray(response) ? response : [];
        }
        this.searchedCustomers = customers.slice(0, 5);
      },
      error: (error) => {
        console.error("Failed to load default customers:", error);
        this.searchedCustomers = [];
      }
    });
  }
  loadStaff() {
    this.loading = true;
    const url = `${environment.apiBase.replace(/\/$/, "")}/staff`;
    const headers = this.auth.authHeaders();
    this.http.get(url, { headers }).subscribe({
      next: (response) => {
        this.staffList = response?.data ?? response ?? [];
        this.searchedStaff = this.staffList.slice(0, 5);
        this.loading = false;
      },
      error: (error) => {
        console.error("Failed to load staff:", error);
        this.staffList = [
          { id: 1, name: "Default Staff", email: "staff@example.com" }
        ];
        this.searchedStaff = this.staffList.slice(0, 5);
        this.loading = false;
      }
    });
  }
  back() {
    this.router.navigate(["/pos"]);
  }
  clearCart() {
    this.cart.clear();
  }
  // Customer search methods
  onCustomerSearch() {
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }
    this.searchTimeout = setTimeout(() => {
      if (this.customerSearchTerm.trim()) {
        this.searchCustomers();
      } else {
        this.loadDefaultCustomers();
      }
    }, 300);
  }
  searchCustomers() {
    const searchTerm = this.customerSearchTerm.trim();
    if (!searchTerm)
      return;
    this.customerSearchLoading = true;
    const headers = this.auth.authHeaders();
    const url = `${environment.apiBase}/pos/customer`;
    this.http.get(url, { headers }).subscribe({
      next: (response) => {
        let customers = [];
        if (response.data) {
          customers = Array.isArray(response.data) ? response.data : [response.data];
        } else {
          customers = Array.isArray(response) ? response : [];
        }
        this.searchedCustomers = customers.filter((customer) => {
          const searchLower = searchTerm.toLowerCase();
          return customer.name?.toLowerCase().includes(searchLower) || customer.phone?.includes(searchTerm);
        });
        this.customerSearchLoading = false;
      },
      error: (error) => {
        console.error("Failed to search customers:", error);
        this.searchedCustomers = [];
        this.customerSearchLoading = false;
      }
    });
  }
  selectCustomer(customer) {
    this.selectedCustomer = customer;
    this.customerSearchTerm = "";
    this.showCustomerDropdown = false;
  }
  clearSelectedCustomer() {
    this.selectedCustomer = null;
    this.customerSearchTerm = "";
  }
  clearCustomerSearch() {
    this.customerSearchTerm = "";
    this.loadDefaultCustomers();
  }
  // Staff search methods
  onStaffSearch() {
    if (this.staffSearchTimeout) {
      clearTimeout(this.staffSearchTimeout);
    }
    this.staffSearchTimeout = setTimeout(() => {
      if (this.staffSearchTerm.trim()) {
        this.searchStaff();
      } else {
        this.searchedStaff = this.staffList.slice(0, 5);
      }
    }, 300);
  }
  searchStaff() {
    const searchTerm = this.staffSearchTerm.trim();
    if (!searchTerm)
      return;
    this.staffSearchLoading = true;
    this.searchedStaff = this.staffList.filter((staff) => {
      const searchLower = searchTerm.toLowerCase();
      return staff.name?.toLowerCase().includes(searchLower) || staff.full_name?.toLowerCase().includes(searchLower) || staff.email?.toLowerCase().includes(searchLower);
    });
    this.staffSearchLoading = false;
  }
  selectStaff(staff) {
    this.selectedStaff = staff;
    this.staffSearchTerm = "";
    this.showStaffDropdown = false;
  }
  clearSelectedStaff() {
    this.selectedStaff = null;
    this.staffSearchTerm = "";
  }
  clearStaffSearch() {
    this.staffSearchTerm = "";
    this.searchedStaff = this.staffList.slice(0, 5);
  }
  // Payment methods methods
  loadPaymentMethods() {
    this.paymentSearchLoading = true;
    const headers = this.auth.authHeaders();
    const url = `${environment.apiBase}/payment_list`;
    this.http.get(url, { headers }).subscribe({
      next: (response) => {
        let methods = [];
        if (response.data) {
          methods = Array.isArray(response.data) ? response.data : [response.data];
        } else {
          methods = Array.isArray(response) ? response : [];
        }
        this.paymentMethods = methods;
        this.searchedPaymentMethods = this.paymentMethods.slice(0, 5);
        this.paymentSearchLoading = false;
      },
      error: (error) => {
        console.error("Failed to load payment methods:", error);
        this.paymentMethods = [
          { id: 1, name: "Cash", description: "Cash payment" },
          { id: 2, name: "Finance", description: "Card/Finance payment" },
          { id: 3, name: "Card", description: "Credit/Debit card payment" },
          { id: 4, name: "Cheque", description: "Cheque payment" }
        ];
        this.searchedPaymentMethods = this.paymentMethods.slice(0, 5);
        this.paymentSearchLoading = false;
      }
    });
  }
  loadFinanceOptions() {
    this.financeLoading = true;
    const headers = this.auth.authHeaders();
    const url = `${environment.apiBase}/finance`;
    this.http.get(url, { headers }).subscribe({
      next: (response) => {
        let options = [];
        if (response.data) {
          options = Array.isArray(response.data) ? response.data : [response.data];
        } else {
          options = Array.isArray(response) ? response : [];
        }
        this.financeOptions = options;
        this.financeLoading = false;
      },
      error: (error) => {
        console.error("Failed to load finance options:", error);
        this.financeOptions = [
          { id: 1, name: "Bank Transfer", description: "Bank transfer finance" },
          { id: 2, name: "Credit Line", description: "Credit line finance" },
          { id: 3, name: "Installment", description: "Installment finance" }
        ];
        this.financeLoading = false;
      }
    });
  }
  onPaymentSearch() {
    if (this.paymentSearchTimeout) {
      clearTimeout(this.paymentSearchTimeout);
    }
    this.paymentSearchTimeout = setTimeout(() => {
      if (this.paymentSearchTerm.trim()) {
        this.searchPaymentMethods();
      } else {
        this.searchedPaymentMethods = this.paymentMethods.slice(0, 5);
      }
    }, 300);
  }
  searchPaymentMethods() {
    const searchTerm = this.paymentSearchTerm.trim();
    if (!searchTerm)
      return;
    this.paymentSearchLoading = true;
    this.searchedPaymentMethods = this.paymentMethods.filter((method) => {
      const searchLower = searchTerm.toLowerCase();
      return method.name?.toLowerCase().includes(searchLower) || method.description?.toLowerCase().includes(searchLower);
    });
    this.paymentSearchLoading = false;
  }
  addPaymentMethod(method) {
    const exists = this.selectedPayments.find((p) => p.method.id === method.id);
    if (exists) {
      this.toast.show("Payment method already added", "error");
      return;
    }
    const newPayment = {
      method,
      amount: null,
      cardNo: "",
      cardName: "",
      chequeNo: "",
      financeRefNo: "",
      selectedFinance: null,
      useRemainingAmount: false
    };
    this.selectedPayments.push(newPayment);
    this.paymentSearchTerm = "";
    this.showPaymentDropdown = false;
  }
  removePaymentMethod(index) {
    this.selectedPayments.splice(index, 1);
  }
  updatePaymentAmount(index) {
    if (this.selectedPayments[index].amount == null || this.selectedPayments[index].amount < 0) {
      this.selectedPayments[index].amount = 0;
    }
    const totalBill = this.cart.totalPrice();
    const totalPaid = this.getTotalPaidAmount();
    if (totalPaid > totalBill) {
      this.toast.show("you enter exceed amount", "error");
      const excessAmount = totalPaid - totalBill;
      this.selectedPayments[index].amount = Math.max(0, (this.selectedPayments[index].amount || 0) - excessAmount);
    }
  }
  clearPaymentSearch() {
    this.paymentSearchTerm = "";
    this.searchedPaymentMethods = this.paymentMethods.slice(0, 5);
  }
  getRemainingAmount() {
    const totalBill = this.cart.totalPrice();
    const paidAmount = this.selectedPayments.reduce((sum, payment) => sum + (Number(payment.amount) || 0), 0);
    return Math.max(0, totalBill - paidAmount);
  }
  getTotalPaidAmount() {
    return this.selectedPayments.reduce((sum, payment) => sum + (Number(payment.amount) || 0), 0);
  }
  toggleRemainingAmount(index) {
    const payment = this.selectedPayments[index];
    if (payment.useRemainingAmount) {
      const remainingAmount = this.getRemainingAmount() + (Number(payment.amount) || 0);
      if (remainingAmount <= 0) {
        this.removePaymentMethod(index);
        this.toast.show("Payment method removed - no remaining amount", "info");
        return;
      }
      payment.amount = remainingAmount;
      this.updatePaymentAmount(index);
    } else {
      payment.amount = null;
    }
  }
  generatePdf() {
    console.log("Generate PDF clicked. Selected customer:", this.selectedCustomer);
    if (!this.selectedCustomer) {
      console.log("No customer selected, showing toast");
      this.toast.show("u didnot select customer", "error");
      return;
    }
    if (!this.selectedStaff) {
      console.log("No staff selected, showing toast");
      this.toast.show("u didnot select staff", "error");
      return;
    }
    if (!this.selectedPayments || this.selectedPayments.length === 0) {
      this.toast.show("u didnot select payment method", "error");
      return;
    }
    const totalBill = this.cart.totalPrice();
    const totalPaid = this.getTotalPaidAmount();
    if (totalPaid < totalBill) {
      this.toast.show(`Payment incomplete. Remaining amount: ${(totalBill - totalPaid).toFixed(2)}`, "error");
      return;
    }
    for (let payment of this.selectedPayments) {
      if (!payment.amount || payment.amount <= 0) {
        this.toast.show(`Please enter valid amount for ${payment.method.name}`, "error");
        return;
      }
      const methodName = payment.method.name.toLowerCase();
      if (methodName === "finance") {
        if (!payment.financeRefNo || !payment.selectedFinance) {
          this.toast.show("Please enter finance reference number and select finance option", "error");
          return;
        }
      }
      if (methodName === "card") {
        if (!payment.cardNo || !payment.cardName) {
          this.toast.show("Please enter card number and card name for card payment", "error");
          return;
        }
      }
      if (methodName === "cheque") {
        if (!payment.chequeNo) {
          this.toast.show("Please enter cheque number for cheque payment", "error");
          return;
        }
      }
    }
    if (!this.items || this.items.length === 0) {
      this.toast.show("Cannot generate PDF for empty cart", "error");
      return;
    }
    const invoiceData = {
      customer: this.selectedCustomer,
      staff: this.selectedStaff,
      items: this.items,
      payments: this.selectedPayments,
      total: totalBill
    };
    this.pdfGenerator.generateInvoicePdf(invoiceData);
  }
  static \u0275fac = function CheckoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CheckoutComponent)(\u0275\u0275directiveInject(CartService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(PdfGeneratorComponent));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CheckoutComponent, selectors: [["app-checkout"]], decls: 72, vars: 25, consts: [[1, "checkout-container"], [1, "selectors"], [1, "selector-group"], [1, "selector-label"], [1, "staff-search-container"], [1, "search-input-wrapper"], ["type", "text", "placeholder", "Search staff by name or email...", 1, "staff-search-input", 3, "ngModelChange", "input", "focus", "ngModel"], [1, "fas", "fa-search", "search-icon"], ["class", "clear-search", 3, "click", 4, "ngIf"], ["class", "staff-dropdown", 4, "ngIf"], ["class", "selected-staff", 4, "ngIf"], ["class", "no-staff-selected", 4, "ngIf"], [1, "customer-search-container"], ["type", "text", "placeholder", "Search by mobile number or name...", 1, "customer-search-input", 3, "ngModelChange", "input", "focus", "ngModel"], ["class", "customer-dropdown", 4, "ngIf"], ["class", "selected-customer", 4, "ngIf"], ["class", "no-customer-selected", 4, "ngIf"], [1, "payment-section"], [1, "payment-summary"], [1, "total-amount"], ["class", "remaining-amount", 4, "ngIf"], [1, "payment-methods-container"], [1, "payment-method-search"], ["type", "text", "placeholder", "Search payment methods...", 1, "payment-search-input", 3, "ngModelChange", "input", "focus", "ngModel"], ["class", "payment-dropdown", 4, "ngIf"], ["class", "selected-payments", 4, "ngIf"], ["class", "no-payments-selected", 4, "ngIf"], [1, "order-items"], [4, "ngFor", "ngForOf"], ["colspan", "3", 1, "right"], [1, "actions"], [3, "click"], [1, "clear-search", 3, "click"], [1, "fas", "fa-times"], [1, "staff-dropdown"], ["class", "dropdown-loading", 4, "ngIf"], ["class", "staff-option", 3, "click", 4, "ngFor", "ngForOf"], ["class", "no-staff", 4, "ngIf"], [1, "dropdown-loading"], [1, "fas", "fa-spinner", "fa-spin"], [1, "staff-option", 3, "click"], [1, "staff-name"], ["class", "staff-email", 4, "ngIf"], [1, "staff-email"], [1, "no-staff"], [1, "selected-staff"], [1, "staff-info"], [1, "remove-staff", 3, "click"], [1, "no-staff-selected"], [1, "fas", "fa-info-circle"], [1, "customer-dropdown"], ["class", "customer-option", 3, "click", 4, "ngFor", "ngForOf"], ["class", "no-customers", 4, "ngIf"], [1, "customer-option", 3, "click"], [1, "customer-name"], ["class", "customer-phone", 4, "ngIf"], [1, "customer-phone"], [1, "no-customers"], [1, "selected-customer"], [1, "customer-info"], [1, "remove-customer", 3, "click"], [1, "no-customer-selected"], [1, "remaining-amount"], [1, "payment-dropdown"], ["class", "payment-option", 3, "click", 4, "ngFor", "ngForOf"], ["class", "no-payments", 4, "ngIf"], [1, "payment-option", 3, "click"], [1, "payment-name"], ["class", "payment-description", 4, "ngIf"], [1, "payment-description"], [1, "no-payments"], [1, "selected-payments"], ["class", "payment-item", 4, "ngFor", "ngForOf"], [1, "payment-item"], [1, "payment-details"], [1, "payment-method-name"], ["class", "payment-inputs", 4, "ngIf"], [1, "remove-payment", 3, "click"], [1, "payment-inputs"], ["type", "number", "placeholder", "Enter cash amount", 1, "amount-input", 3, "ngModelChange", "input", "ngModel"], [1, "remaining-amount-checkbox"], ["type", "checkbox", 1, "checkbox-input", 3, "ngModelChange", "change", "ngModel", "id"], [1, "checkbox-label", 3, "for"], [1, "input-group"], ["type", "number", "placeholder", "Enter finance amount", 1, "amount-input", 3, "ngModelChange", "input", "ngModel"], ["type", "text", "placeholder", "Enter finance reference number", 1, "card-input", 3, "ngModelChange", "ngModel"], [1, "finance-select", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "ngValue", 4, "ngFor", "ngForOf"], [3, "ngValue"], ["type", "number", "placeholder", "Enter card amount", 1, "amount-input", 3, "ngModelChange", "input", "ngModel"], ["type", "text", "placeholder", "Enter card number", 1, "card-input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Enter card holder name", 1, "card-input", 3, "ngModelChange", "ngModel"], ["type", "number", "placeholder", "Enter cheque amount", 1, "amount-input", 3, "ngModelChange", "input", "ngModel"], ["type", "text", "placeholder", "Enter cheque number", 1, "card-input", 3, "ngModelChange", "ngModel"], ["type", "number", "placeholder", "Enter amount", 1, "amount-input", 3, "ngModelChange", "input", "ngModel"], [1, "no-payments-selected"], [1, "fas", "fa-credit-card"]], template: function CheckoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h2");
      \u0275\u0275text(2, "Checkout");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "section", 1)(4, "div", 2)(5, "label", 3);
      \u0275\u0275text(6, "Assign Staff");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 4)(8, "div", 5)(9, "input", 6);
      \u0275\u0275twoWayListener("ngModelChange", function CheckoutComponent_Template_input_ngModelChange_9_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.staffSearchTerm, $event) || (ctx.staffSearchTerm = $event);
        return $event;
      });
      \u0275\u0275listener("input", function CheckoutComponent_Template_input_input_9_listener() {
        return ctx.onStaffSearch();
      })("focus", function CheckoutComponent_Template_input_focus_9_listener() {
        return ctx.showStaffDropdown = true;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(10, "i", 7);
      \u0275\u0275template(11, CheckoutComponent_button_11_Template, 2, 0, "button", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275template(12, CheckoutComponent_div_12_Template, 4, 3, "div", 9)(13, CheckoutComponent_div_13_Template, 7, 2, "div", 10)(14, CheckoutComponent_div_14_Template, 4, 0, "div", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 2)(16, "label", 3);
      \u0275\u0275text(17, "Choose Customer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 12)(19, "div", 5)(20, "input", 13);
      \u0275\u0275twoWayListener("ngModelChange", function CheckoutComponent_Template_input_ngModelChange_20_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.customerSearchTerm, $event) || (ctx.customerSearchTerm = $event);
        return $event;
      });
      \u0275\u0275listener("input", function CheckoutComponent_Template_input_input_20_listener() {
        return ctx.onCustomerSearch();
      })("focus", function CheckoutComponent_Template_input_focus_20_listener() {
        return ctx.showCustomerDropdown = true;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(21, "i", 7);
      \u0275\u0275template(22, CheckoutComponent_button_22_Template, 2, 0, "button", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275template(23, CheckoutComponent_div_23_Template, 4, 3, "div", 14)(24, CheckoutComponent_div_24_Template, 7, 2, "div", 15)(25, CheckoutComponent_div_25_Template, 4, 0, "div", 16);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(26, "section", 17)(27, "h3");
      \u0275\u0275text(28, "Payment Methods");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 18)(30, "div", 19)(31, "span");
      \u0275\u0275text(32);
      \u0275\u0275pipe(33, "number");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(34, CheckoutComponent_div_34_Template, 4, 4, "div", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "div", 21)(36, "div", 22)(37, "div", 5)(38, "input", 23);
      \u0275\u0275twoWayListener("ngModelChange", function CheckoutComponent_Template_input_ngModelChange_38_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.paymentSearchTerm, $event) || (ctx.paymentSearchTerm = $event);
        return $event;
      });
      \u0275\u0275listener("input", function CheckoutComponent_Template_input_input_38_listener() {
        return ctx.onPaymentSearch();
      })("focus", function CheckoutComponent_Template_input_focus_38_listener() {
        return ctx.showPaymentDropdown = true;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(39, "i", 7);
      \u0275\u0275template(40, CheckoutComponent_button_40_Template, 2, 0, "button", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275template(41, CheckoutComponent_div_41_Template, 4, 3, "div", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275template(42, CheckoutComponent_div_42_Template, 4, 1, "div", 25)(43, CheckoutComponent_div_43_Template, 4, 0, "div", 26);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "section", 27)(45, "table")(46, "thead")(47, "tr")(48, "th");
      \u0275\u0275text(49, "Product");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "th");
      \u0275\u0275text(51, "Qty");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "th");
      \u0275\u0275text(53, "Price");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "th");
      \u0275\u0275text(55, "Total");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(56, "tbody");
      \u0275\u0275template(57, CheckoutComponent_tr_57_Template, 11, 10, "tr", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "tfoot")(59, "tr")(60, "td", 29);
      \u0275\u0275text(61, "Total");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "td");
      \u0275\u0275text(63);
      \u0275\u0275pipe(64, "number");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(65, "section", 30)(66, "button", 31);
      \u0275\u0275listener("click", function CheckoutComponent_Template_button_click_66_listener() {
        return ctx.clearCart();
      });
      \u0275\u0275text(67, "Clear Cart");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "button", 31);
      \u0275\u0275listener("click", function CheckoutComponent_Template_button_click_68_listener() {
        return ctx.generatePdf();
      });
      \u0275\u0275text(69, "Generate PDF");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "button", 31);
      \u0275\u0275listener("click", function CheckoutComponent_Template_button_click_70_listener() {
        return ctx.back();
      });
      \u0275\u0275text(71, "Back to POS");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275twoWayProperty("ngModel", ctx.staffSearchTerm);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.staffSearchTerm);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showStaffDropdown && ((ctx.searchedStaff == null ? null : ctx.searchedStaff.length) || ctx.staffSearchLoading));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedStaff);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.selectedStaff && !ctx.showStaffDropdown);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.customerSearchTerm);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.customerSearchTerm);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showCustomerDropdown && ((ctx.searchedCustomers == null ? null : ctx.searchedCustomers.length) || ctx.customerSearchLoading));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedCustomer);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.selectedCustomer && !ctx.showCustomerDropdown);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1("Total Bill Amount: ", \u0275\u0275pipeBind2(33, 19, ctx.cart.totalPrice(), "1.2-2"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.getRemainingAmount() > 0);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.paymentSearchTerm);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.paymentSearchTerm);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showPaymentDropdown && ((ctx.searchedPaymentMethods == null ? null : ctx.searchedPaymentMethods.length) || ctx.paymentSearchLoading));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedPayments == null ? null : ctx.selectedPayments.length);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !(ctx.selectedPayments == null ? null : ctx.selectedPayments.length));
      \u0275\u0275advance(14);
      \u0275\u0275property("ngForOf", ctx.items);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(64, 22, ctx.cart.totalPrice(), "1.2-2"));
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, HttpClientModule, DecimalPipe], styles: ["\n\n.checkout-container[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n}\n.checkout-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: var(--color-neutral-800);\n  margin-bottom: 24px;\n  font-size: 22px;\n  font-weight: 600;\n  margin: 0;\n}\n.order-items[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  margin: 24px 0;\n  border-radius: 8px;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.order-items[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.order-items[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border-bottom: 1px solid var(--color-neutral-300);\n  font-size: 13px;\n}\n.order-items[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: var(--color-primary-bg);\n  color: white;\n  font-weight: 600;\n  text-align: left;\n}\n.order-items[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: var(--color-neutral-100);\n}\n.order-items[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  background: var(--color-neutral-200);\n  font-weight: 600;\n}\n.order-items[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.selectors[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n  margin: 24px 0;\n}\n.selector-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.selector-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 12px;\n  color: var(--color-neutral-800);\n  margin-bottom: 4px;\n}\n.select-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n}\n.custom-select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 32px 8px 12px;\n  border: 2px solid var(--color-neutral-400);\n  border-radius: 8px;\n  background: var(--color-neutral-100);\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--color-neutral-800);\n  appearance: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  outline: none;\n}\n.custom-select[_ngcontent-%COMP%]:focus {\n  border-color: var(--color-primary-bg);\n  box-shadow: 0 0 0 3px rgba(248, 147, 29, 0.1);\n  background: var(--color-neutral-100);\n}\n.custom-select[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: var(--color-primary-bg);\n}\n.custom-select[_ngcontent-%COMP%]:disabled {\n  background: var(--color-neutral-200);\n  color: var(--color-neutral-500);\n  cursor: not-allowed;\n  opacity: 0.7;\n}\n.select-arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--color-neutral-600);\n  font-size: 12px;\n  pointer-events: none;\n  transition: all 0.3s ease;\n}\n.select-wrapper[_ngcontent-%COMP%]:hover   .select-arrow[_ngcontent-%COMP%] {\n  color: var(--color-primary-bg);\n}\n.custom-select[_ngcontent-%COMP%]:focus    + .select-arrow[_ngcontent-%COMP%] {\n  color: var(--color-primary-bg);\n  transform: translateY(-50%) rotate(180deg);\n}\n.custom-select[_ngcontent-%COMP%]:disabled    + .select-arrow[_ngcontent-%COMP%] {\n  color: var(--color-neutral-400);\n}\n@media (max-width: 768px) {\n  .selectors[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 16px;\n  }\n}\n.actions[_ngcontent-%COMP%] {\n  margin-top: 32px;\n  display: flex;\n  gap: 16px;\n  justify-content: flex-end;\n}\n.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 10px 14px;\n  border-radius: 8px;\n  border: none;\n  font-weight: 600;\n  font-size: 13px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  min-height: 34px;\n}\n.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(1) {\n  background: var(--color-neutral-600);\n  color: white;\n}\n.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(1):hover {\n  background: var(--color-neutral-700);\n}\n.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(2) {\n  background: var(--color-secondary-bg);\n  color: white;\n}\n.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(2):hover {\n  background: #16967f;\n}\n.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(3) {\n  background: var(--color-primary-bg);\n  color: white;\n}\n.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(3):hover {\n  background: #e6821a;\n}\n.customer-search-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n}\n.search-input-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n}\n.customer-search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 40px 10px 14px;\n  border: 2px solid var(--color-neutral-400);\n  border-radius: 8px;\n  background: var(--color-neutral-100);\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--color-neutral-800);\n  transition: all 0.3s ease;\n  outline: none;\n  box-sizing: border-box;\n}\n.customer-search-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--color-primary-bg);\n  box-shadow: 0 0 0 3px rgba(248, 147, 29, 0.1);\n  background: var(--color-neutral-100);\n}\n.customer-search-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--color-neutral-500);\n}\n.search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 32px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--color-neutral-600);\n  font-size: 12px;\n  pointer-events: none;\n}\n.clear-search[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 8px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  color: var(--color-neutral-500);\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 4px;\n  font-size: 10px;\n}\n.clear-search[_ngcontent-%COMP%]:hover {\n  background: var(--color-neutral-300);\n  color: var(--color-neutral-700);\n}\n.customer-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background: white;\n  border: 2px solid var(--color-primary-bg);\n  border-top: none;\n  border-radius: 0 0 8px 8px;\n  max-height: 200px;\n  overflow-y: auto;\n  z-index: 1000;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.dropdown-loading[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  text-align: center;\n  color: var(--color-neutral-600);\n  font-size: 13px;\n}\n.dropdown-loading[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n.customer-option[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  cursor: pointer;\n  border-bottom: 1px solid var(--color-neutral-200);\n  transition: background-color 0.2s ease;\n}\n.customer-option[_ngcontent-%COMP%]:hover {\n  background: var(--color-neutral-100);\n}\n.customer-option[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.customer-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--color-neutral-800);\n  font-size: 13px;\n}\n.customer-phone[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--color-neutral-600);\n  margin-top: 2px;\n}\n.no-customers[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  text-align: center;\n  color: var(--color-neutral-500);\n  font-style: italic;\n  font-size: 13px;\n}\n.selected-customer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 14px;\n  background: var(--color-primary-light);\n  border: 2px solid var(--color-primary-bg);\n  border-radius: 8px;\n  margin-top: 8px;\n}\n.customer-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n}\n.customer-info[_ngcontent-%COMP%]   .customer-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--color-primary-bg);\n}\n.customer-info[_ngcontent-%COMP%]   .customer-phone[_ngcontent-%COMP%] {\n  color: var(--color-neutral-600);\n}\n.remove-customer[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: var(--color-neutral-500);\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 4px;\n  font-size: 10px;\n}\n.remove-customer[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.5);\n  color: var(--color-neutral-700);\n}\n.no-customer-selected[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 14px;\n  background: var(--color-neutral-100);\n  border: 2px dashed var(--color-neutral-400);\n  border-radius: 8px;\n  margin-top: 8px;\n  color: var(--color-neutral-600);\n  font-size: 13px;\n  font-style: italic;\n}\n.no-customer-selected[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--color-neutral-500);\n  font-size: 14px;\n}\n.staff-search-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n}\n.staff-search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 40px 10px 14px;\n  border: 2px solid var(--color-neutral-400);\n  border-radius: 8px;\n  background: var(--color-neutral-100);\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--color-neutral-800);\n  transition: all 0.3s ease;\n  outline: none;\n  box-sizing: border-box;\n}\n.staff-search-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--color-secondary-bg);\n  box-shadow: 0 0 0 3px rgba(25, 173, 159, 0.1);\n  background: var(--color-neutral-100);\n}\n.staff-search-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--color-neutral-500);\n}\n.staff-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background: white;\n  border: 2px solid var(--color-secondary-bg);\n  border-top: none;\n  border-radius: 0 0 8px 8px;\n  max-height: 200px;\n  overflow-y: auto;\n  z-index: 1000;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.staff-option[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  cursor: pointer;\n  border-bottom: 1px solid var(--color-neutral-200);\n  transition: background-color 0.2s ease;\n}\n.staff-option[_ngcontent-%COMP%]:hover {\n  background: var(--color-neutral-100);\n}\n.staff-option[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.staff-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--color-neutral-800);\n  font-size: 13px;\n}\n.staff-email[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--color-neutral-600);\n  margin-top: 2px;\n}\n.no-staff[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  text-align: center;\n  color: var(--color-neutral-500);\n  font-style: italic;\n  font-size: 13px;\n}\n.selected-staff[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 14px;\n  background: var(--color-secondary-light);\n  border: 2px solid var(--color-secondary-bg);\n  border-radius: 8px;\n  margin-top: 8px;\n}\n.staff-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n}\n.staff-info[_ngcontent-%COMP%]   .staff-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--color-secondary-bg);\n}\n.staff-info[_ngcontent-%COMP%]   .staff-email[_ngcontent-%COMP%] {\n  color: var(--color-neutral-600);\n}\n.remove-staff[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: var(--color-neutral-500);\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 4px;\n  font-size: 10px;\n}\n.remove-staff[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.5);\n  color: var(--color-neutral-700);\n}\n.no-staff-selected[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 14px;\n  background: var(--color-neutral-100);\n  border: 2px dashed var(--color-neutral-400);\n  border-radius: 8px;\n  margin-top: 8px;\n  color: var(--color-neutral-600);\n  font-size: 13px;\n  font-style: italic;\n}\n.no-staff-selected[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--color-neutral-500);\n  font-size: 14px;\n}\n.payment-section[_ngcontent-%COMP%] {\n  margin: 24px 0;\n  padding: 20px;\n  background: rgba(248, 147, 29, 0.1);\n  border-radius: 12px;\n  border: 1px solid var(--color-neutral-300);\n}\n.payment-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--color-neutral-800);\n  font-size: 18px;\n  font-weight: 600;\n  margin: 0 0 16px 0;\n}\n.payment-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: var(--color-neutral-700);\n  font-size: 14px;\n  font-weight: 600;\n  margin: 16px 0 12px 0;\n}\n.payment-summary[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 16px;\n  background: var(--color-neutral-100);\n  border-radius: 8px;\n  margin-bottom: 16px;\n  font-weight: 600;\n}\n.payment-summary[_ngcontent-%COMP%]   .total-amount[_ngcontent-%COMP%] {\n  color: var(--color-neutral-800);\n  font-size: 14px;\n}\n.payment-summary[_ngcontent-%COMP%]   .remaining-amount[_ngcontent-%COMP%] {\n  color: var(--color-danger-600);\n  font-size: 14px;\n}\n.payment-methods-container[_ngcontent-%COMP%]   .payment-method-search[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 16px;\n}\n.payment-search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 40px 10px 14px;\n  border: 2px solid var(--color-neutral-400);\n  border-radius: 8px;\n  background: var(--color-neutral-100);\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--color-neutral-800);\n  transition: all 0.3s ease;\n  outline: none;\n  box-sizing: border-box;\n}\n.payment-search-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--color-success-500);\n  box-shadow: 0 0 0 3px rgba(40, 167, 69, 0.1);\n  background: var(--color-neutral-100);\n}\n.payment-search-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--color-neutral-500);\n}\n.payment-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background: white;\n  border: 2px solid var(--color-success-500);\n  border-top: none;\n  border-radius: 0 0 8px 8px;\n  max-height: 200px;\n  overflow-y: auto;\n  z-index: 1000;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.payment-option[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  cursor: pointer;\n  border-bottom: 1px solid var(--color-neutral-200);\n  transition: background-color 0.2s ease;\n}\n.payment-option[_ngcontent-%COMP%]:hover {\n  background: var(--color-neutral-100);\n}\n.payment-option[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.payment-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--color-neutral-800);\n  font-size: 13px;\n}\n.payment-description[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--color-neutral-600);\n  margin-top: 2px;\n}\n.no-payments[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  text-align: center;\n  color: var(--color-neutral-500);\n  font-style: italic;\n  font-size: 13px;\n}\n.selected-payments[_ngcontent-%COMP%]   .payment-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  padding: 16px;\n  background: white;\n  border: 2px solid var(--color-success-300);\n  border-radius: 8px;\n  margin-bottom: 12px;\n}\n.selected-payments[_ngcontent-%COMP%]   .payment-item[_ngcontent-%COMP%]   .payment-details[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.selected-payments[_ngcontent-%COMP%]   .payment-item[_ngcontent-%COMP%]   .payment-details[_ngcontent-%COMP%]   .payment-method-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--color-success-600);\n  font-size: 14px;\n  margin-bottom: 8px;\n}\n.selected-payments[_ngcontent-%COMP%]   .payment-item[_ngcontent-%COMP%]   .payment-details[_ngcontent-%COMP%]   .payment-inputs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.selected-payments[_ngcontent-%COMP%]   .payment-item[_ngcontent-%COMP%]   .payment-details[_ngcontent-%COMP%]   .payment-inputs[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.selected-payments[_ngcontent-%COMP%]   .payment-item[_ngcontent-%COMP%]   .payment-details[_ngcontent-%COMP%]   .payment-inputs[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--color-neutral-700);\n}\n.selected-payments[_ngcontent-%COMP%]   .payment-item[_ngcontent-%COMP%]   .payment-details[_ngcontent-%COMP%]   .payment-inputs[_ngcontent-%COMP%]   .amount-input[_ngcontent-%COMP%], \n.selected-payments[_ngcontent-%COMP%]   .payment-item[_ngcontent-%COMP%]   .payment-details[_ngcontent-%COMP%]   .payment-inputs[_ngcontent-%COMP%]   .card-input[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid var(--color-neutral-400);\n  border-radius: 6px;\n  background: var(--color-neutral-100);\n  font-size: 13px;\n  transition: all 0.3s ease;\n  outline: none;\n}\n.selected-payments[_ngcontent-%COMP%]   .payment-item[_ngcontent-%COMP%]   .payment-details[_ngcontent-%COMP%]   .payment-inputs[_ngcontent-%COMP%]   .amount-input[_ngcontent-%COMP%]:focus, \n.selected-payments[_ngcontent-%COMP%]   .payment-item[_ngcontent-%COMP%]   .payment-details[_ngcontent-%COMP%]   .payment-inputs[_ngcontent-%COMP%]   .card-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--color-success-500);\n  box-shadow: 0 0 0 2px rgba(40, 167, 69, 0.1);\n}\n.selected-payments[_ngcontent-%COMP%]   .payment-item[_ngcontent-%COMP%]   .payment-details[_ngcontent-%COMP%]   .payment-inputs[_ngcontent-%COMP%]   .finance-select[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid var(--color-neutral-400);\n  border-radius: 6px;\n  background: var(--color-neutral-100);\n  font-size: 13px;\n  transition: all 0.3s ease;\n  outline: none;\n  cursor: pointer;\n  width: 100%;\n}\n.selected-payments[_ngcontent-%COMP%]   .payment-item[_ngcontent-%COMP%]   .payment-details[_ngcontent-%COMP%]   .payment-inputs[_ngcontent-%COMP%]   .finance-select[_ngcontent-%COMP%]:focus {\n  border-color: var(--color-success-500);\n  box-shadow: 0 0 0 2px rgba(40, 167, 69, 0.1);\n}\n.selected-payments[_ngcontent-%COMP%]   .payment-item[_ngcontent-%COMP%]   .payment-details[_ngcontent-%COMP%]   .payment-inputs[_ngcontent-%COMP%]   .finance-select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  padding: 8px;\n  background: white;\n  color: var(--color-neutral-800);\n}\n.selected-payments[_ngcontent-%COMP%]   .payment-item[_ngcontent-%COMP%]   .payment-details[_ngcontent-%COMP%]   .payment-inputs[_ngcontent-%COMP%]   .remaining-amount-checkbox[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.selected-payments[_ngcontent-%COMP%]   .payment-item[_ngcontent-%COMP%]   .payment-details[_ngcontent-%COMP%]   .payment-inputs[_ngcontent-%COMP%]   .remaining-amount-checkbox[_ngcontent-%COMP%]   .checkbox-input[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  cursor: pointer;\n  accent-color: var(--color-success-500);\n}\n.selected-payments[_ngcontent-%COMP%]   .payment-item[_ngcontent-%COMP%]   .payment-details[_ngcontent-%COMP%]   .payment-inputs[_ngcontent-%COMP%]   .remaining-amount-checkbox[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--color-neutral-700);\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.selected-payments[_ngcontent-%COMP%]   .payment-item[_ngcontent-%COMP%]   .payment-details[_ngcontent-%COMP%]   .payment-inputs[_ngcontent-%COMP%]   .remaining-amount-checkbox[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]:hover {\n  color: var(--color-success-600);\n}\n.selected-payments[_ngcontent-%COMP%]   .payment-item[_ngcontent-%COMP%]   .remove-payment[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: var(--color-neutral-500);\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 4px;\n  font-size: 12px;\n  margin-left: 12px;\n}\n.selected-payments[_ngcontent-%COMP%]   .payment-item[_ngcontent-%COMP%]   .remove-payment[_ngcontent-%COMP%]:hover {\n  background: var(--color-neutral-200);\n  color: var(--color-neutral-700);\n}\n.no-payments-selected[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 16px;\n  background: var(--color-neutral-100);\n  border: 2px dashed var(--color-neutral-400);\n  border-radius: 8px;\n  color: var(--color-neutral-600);\n  font-size: 13px;\n  font-style: italic;\n  text-align: center;\n  justify-content: center;\n}\n.no-payments-selected[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--color-neutral-500);\n  font-size: 16px;\n}\n/*# sourceMappingURL=checkout.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutComponent, [{
    type: Component,
    args: [{ selector: "app-checkout", standalone: true, imports: [CommonModule, FormsModule, HttpClientModule], template: `<div class="checkout-container">\r
    <h2>Checkout</h2>\r
    <section class="selectors">\r
        <div class="selector-group">\r
            <label class="selector-label">Assign Staff</label>\r
            <div class="staff-search-container">\r
                <div class="search-input-wrapper">\r
                    <input type="text" placeholder="Search staff by name or email..." [(ngModel)]="staffSearchTerm"\r
                        (input)="onStaffSearch()" (focus)="showStaffDropdown = true" class="staff-search-input">\r
                    <i class="fas fa-search search-icon"></i>\r
                    <button *ngIf="staffSearchTerm" class="clear-search" (click)="clearStaffSearch()">\r
                        <i class="fas fa-times"></i>\r
                    </button>\r
                </div>\r
\r
                <!-- Staff Dropdown -->\r
                <div *ngIf="showStaffDropdown && (searchedStaff?.length || staffSearchLoading)" class="staff-dropdown">\r
                    <div *ngIf="staffSearchLoading" class="dropdown-loading">\r
                        <i class="fas fa-spinner fa-spin"></i> Searching staff...\r
                    </div>\r
                    <div *ngFor="let staff of searchedStaff" class="staff-option" (click)="selectStaff(staff)">\r
                        <div class="staff-name">{{ staff.name || staff.full_name }}</div>\r
                        <div class="staff-email" *ngIf="staff.email">{{ staff.email }}</div>\r
                    </div>\r
                    <div *ngIf="!staffSearchLoading && searchedStaff?.length === 0 && staffSearchTerm" class="no-staff">\r
                        No staff found\r
                    </div>\r
                </div>\r
\r
                <!-- Selected Staff Display -->\r
                <div *ngIf="selectedStaff" class="selected-staff">\r
                    <div class="staff-info">\r
                        <span class="staff-name">{{ selectedStaff.name || selectedStaff.full_name }}</span>\r
                        <span class="staff-email" *ngIf="selectedStaff.email">\u2022 {{ selectedStaff.email }}</span>\r
                    </div>\r
                    <button class="remove-staff" (click)="clearSelectedStaff()">\r
                        <i class="fas fa-times"></i>\r
                    </button>\r
                </div>\r
\r
                <!-- No Staff Selected Message -->\r
                <div *ngIf="!selectedStaff && !showStaffDropdown" class="no-staff-selected">\r
                    <i class="fas fa-info-circle"></i>\r
                    <span>No staff selected. Search and select a staff member above.</span>\r
                </div>\r
            </div>\r
        </div>\r
\r
        <div class="selector-group">\r
            <label class="selector-label">Choose Customer</label>\r
            <div class="customer-search-container">\r
                <div class="search-input-wrapper">\r
                    <input type="text" placeholder="Search by mobile number or name..." [(ngModel)]="customerSearchTerm"\r
                        (input)="onCustomerSearch()" (focus)="showCustomerDropdown = true"\r
                        class="customer-search-input">\r
                    <i class="fas fa-search search-icon"></i>\r
                    <button *ngIf="customerSearchTerm" class="clear-search" (click)="clearCustomerSearch()">\r
                        <i class="fas fa-times"></i>\r
                    </button>\r
                </div>\r
\r
                <!-- Customer Dropdown -->\r
                <div *ngIf="showCustomerDropdown && (searchedCustomers?.length || customerSearchLoading)"\r
                    class="customer-dropdown">\r
                    <div *ngIf="customerSearchLoading" class="dropdown-loading">\r
                        <i class="fas fa-spinner fa-spin"></i> Searching customers...\r
                    </div>\r
                    <div *ngFor="let customer of searchedCustomers" class="customer-option"\r
                        (click)="selectCustomer(customer)">\r
                        <div class="customer-name">{{ customer.name }}</div>\r
                        <div class="customer-phone" *ngIf="customer.phone">{{ customer.phone }}</div>\r
                    </div>\r
                    <div *ngIf="!customerSearchLoading && searchedCustomers?.length === 0 && customerSearchTerm"\r
                        class="no-customers">\r
                        No customers found\r
                    </div>\r
                </div>\r
\r
                <!-- Selected Customer Display -->\r
                <div *ngIf="selectedCustomer" class="selected-customer">\r
                    <div class="customer-info">\r
                        <span class="customer-name">{{ selectedCustomer.name }}</span>\r
                        <span class="customer-phone" *ngIf="selectedCustomer.phone">\u2022 {{ selectedCustomer.phone\r
                            }}</span>\r
                    </div>\r
                    <button class="remove-customer" (click)="clearSelectedCustomer()">\r
                        <i class="fas fa-times"></i>\r
                    </button>\r
                </div>\r
\r
                <!-- No Customer Selected Message -->\r
                <div *ngIf="!selectedCustomer && !showCustomerDropdown" class="no-customer-selected">\r
                    <i class="fas fa-info-circle"></i>\r
                    <span>No customer selected. Search and select a customer above.</span>\r
                </div>\r
            </div>\r
        </div>\r
    </section>\r
\r
    <!-- Payment Methods Section -->\r
    <section class="payment-section">\r
        <h3>Payment Methods</h3>\r
        <div class="payment-summary">\r
            <div class="total-amount">\r
                <span>Total Bill Amount: {{ cart.totalPrice() | number:'1.2-2' }}</span>\r
            </div>\r
            <div class="remaining-amount" *ngIf="getRemainingAmount() > 0">\r
                <span>Remaining Amount: {{ getRemainingAmount() | number:'1.2-2' }}</span>\r
            </div>\r
        </div>\r
\r
        <!-- Payment Methods List -->\r
        <div class="payment-methods-container">\r
            <div class="payment-method-search">\r
                <div class="search-input-wrapper">\r
                    <input type="text" placeholder="Search payment methods..." [(ngModel)]="paymentSearchTerm"\r
                        (input)="onPaymentSearch()" (focus)="showPaymentDropdown = true" class="payment-search-input">\r
                    <i class="fas fa-search search-icon"></i>\r
                    <button *ngIf="paymentSearchTerm" class="clear-search" (click)="clearPaymentSearch()">\r
                        <i class="fas fa-times"></i>\r
                    </button>\r
                </div>\r
\r
                <!-- Payment Methods Dropdown -->\r
                <div *ngIf="showPaymentDropdown && (searchedPaymentMethods?.length || paymentSearchLoading)"\r
                    class="payment-dropdown">\r
                    <div *ngIf="paymentSearchLoading" class="dropdown-loading">\r
                        <i class="fas fa-spinner fa-spin"></i> Loading payment methods...\r
                    </div>\r
                    <div *ngFor="let method of searchedPaymentMethods" class="payment-option"\r
                        (click)="addPaymentMethod(method)">\r
                        <div class="payment-name">{{ method.name }}</div>\r
                        <div class="payment-description" *ngIf="method.description">{{ method.description }}</div>\r
                    </div>\r
                    <div *ngIf="!paymentSearchLoading && searchedPaymentMethods?.length === 0 && paymentSearchTerm"\r
                        class="no-payments">\r
                        No payment methods found\r
                    </div>\r
                </div>\r
            </div>\r
\r
            <!-- Selected Payment Methods -->\r
            <div class="selected-payments" *ngIf="selectedPayments?.length">\r
                <h4>Selected Payment Methods</h4>\r
                <div class="payment-item" *ngFor="let payment of selectedPayments; let i = index">\r
                    <div class="payment-details">\r
                        <div class="payment-method-name">{{ payment.method.name }}</div>\r
\r
                        <!-- Cash Payment -->\r
                        <div *ngIf="payment.method.name.toLowerCase() === 'cash'" class="payment-inputs">\r
                            <label>Amount:</label>\r
                            <input type="number" [(ngModel)]="payment.amount" (input)="updatePaymentAmount(i)"\r
                                placeholder="Enter cash amount" class="amount-input">\r
                            <div class="remaining-amount-checkbox">\r
                                <input type="checkbox" [(ngModel)]="payment.useRemainingAmount"\r
                                    (change)="toggleRemainingAmount(i)" id="remaining-cash-{{i}}"\r
                                    class="checkbox-input">\r
                                <label for="remaining-cash-{{i}}" class="checkbox-label">Remaining Amount</label>\r
                            </div>\r
                        </div>\r
\r
                        <!-- Finance Payment -->\r
                        <div *ngIf="payment.method.name.toLowerCase() === 'finance'" class="payment-inputs">\r
                            <div class="input-group">\r
                                <label>Amount:</label>\r
                                <input type="number" [(ngModel)]="payment.amount" (input)="updatePaymentAmount(i)"\r
                                    placeholder="Enter finance amount" class="amount-input">\r
                                <div class="remaining-amount-checkbox">\r
                                    <input type="checkbox" [(ngModel)]="payment.useRemainingAmount"\r
                                        (change)="toggleRemainingAmount(i)" id="remaining-finance-{{i}}"\r
                                        class="checkbox-input">\r
                                    <label for="remaining-finance-{{i}}" class="checkbox-label">Remaining Amount</label>\r
                                </div>\r
                            </div>\r
                            <div class="input-group">\r
                                <label>Finance Reference Number:</label>\r
                                <input type="text" [(ngModel)]="payment.financeRefNo"\r
                                    placeholder="Enter finance reference number" class="card-input">\r
                            </div>\r
                            <div class="input-group">\r
                                <label>Finance:</label>\r
                                <select [(ngModel)]="payment.selectedFinance" class="finance-select">\r
                                    <option value="">Select Finance Option</option>\r
                                    <option *ngFor="let finance of financeOptions" [ngValue]="finance">\r
                                        {{ finance.name }}\r
                                    </option>\r
                                </select>\r
                            </div>\r
                        </div>\r
\r
                        <!-- Card Payment -->\r
                        <div *ngIf="payment.method.name.toLowerCase() === 'card'" class="payment-inputs">\r
                            <div class="input-group">\r
                                <label>Amount:</label>\r
                                <input type="number" [(ngModel)]="payment.amount" (input)="updatePaymentAmount(i)"\r
                                    placeholder="Enter card amount" class="amount-input">\r
                                <div class="remaining-amount-checkbox">\r
                                    <input type="checkbox" [(ngModel)]="payment.useRemainingAmount"\r
                                        (change)="toggleRemainingAmount(i)" id="remaining-card-{{i}}"\r
                                        class="checkbox-input">\r
                                    <label for="remaining-card-{{i}}" class="checkbox-label">Remaining Amount</label>\r
                                </div>\r
                            </div>\r
                            <div class="input-group">\r
                                <label>Card Number:</label>\r
                                <input type="text" [(ngModel)]="payment.cardNo" placeholder="Enter card number"\r
                                    class="card-input">\r
                            </div>\r
                            <div class="input-group">\r
                                <label>Card Name:</label>\r
                                <input type="text" [(ngModel)]="payment.cardName" placeholder="Enter card holder name"\r
                                    class="card-input">\r
                            </div>\r
                        </div>\r
\r
                        <!-- Cheque Payment -->\r
                        <div *ngIf="payment.method.name.toLowerCase() === 'cheque'" class="payment-inputs">\r
                            <div class="input-group">\r
                                <label>Amount:</label>\r
                                <input type="number" [(ngModel)]="payment.amount" (input)="updatePaymentAmount(i)"\r
                                    placeholder="Enter cheque amount" class="amount-input">\r
                                <div class="remaining-amount-checkbox">\r
                                    <input type="checkbox" [(ngModel)]="payment.useRemainingAmount"\r
                                        (change)="toggleRemainingAmount(i)" id="remaining-cheque-{{i}}"\r
                                        class="checkbox-input">\r
                                    <label for="remaining-cheque-{{i}}" class="checkbox-label">Remaining Amount</label>\r
                                </div>\r
                            </div>\r
                            <div class="input-group">\r
                                <label>Cheque Number:</label>\r
                                <input type="text" [(ngModel)]="payment.chequeNo" placeholder="Enter cheque number"\r
                                    class="card-input">\r
                            </div>\r
                        </div>\r
\r
                        <!-- Other Payment Methods -->\r
                        <div *ngIf="payment.method.name.toLowerCase() !== 'cash' && \r
                                   payment.method.name.toLowerCase() !== 'finance' && \r
                                   payment.method.name.toLowerCase() !== 'card' && \r
                                   payment.method.name.toLowerCase() !== 'cheque'" class="payment-inputs">\r
                            <label>Amount:</label>\r
                            <input type="number" [(ngModel)]="payment.amount" (input)="updatePaymentAmount(i)"\r
                                placeholder="Enter amount" class="amount-input">\r
                            <div class="remaining-amount-checkbox">\r
                                <input type="checkbox" [(ngModel)]="payment.useRemainingAmount"\r
                                    (change)="toggleRemainingAmount(i)" id="remaining-other-{{i}}"\r
                                    class="checkbox-input">\r
                                <label for="remaining-other-{{i}}" class="checkbox-label">Remaining Amount</label>\r
                            </div>\r
                        </div>\r
                    </div>\r
\r
                    <button class="remove-payment" (click)="removePaymentMethod(i)">\r
                        <i class="fas fa-times"></i>\r
                    </button>\r
                </div>\r
            </div>\r
\r
            <!-- No Payment Methods Selected -->\r
            <div *ngIf="!selectedPayments?.length" class="no-payments-selected">\r
                <i class="fas fa-credit-card"></i>\r
                <span>No payment methods selected. Choose payment methods above.</span>\r
            </div>\r
        </div>\r
    </section>\r
\r
    <section class="order-items">\r
        <table>\r
            <thead>\r
                <tr>\r
                    <th>Product</th>\r
                    <th>Qty</th>\r
                    <th>Price</th>\r
                    <th>Total</th>\r
                </tr>\r
            </thead>\r
            <tbody>\r
                <tr *ngFor="let it of items">\r
                    <td>{{ it.product?.name || it.product?.title || it.id }}</td>\r
                    <td>{{ it.qty }}</td>\r
                    <td>{{ (it.product?.price || 0) | number:'1.2-2' }}</td>\r
                    <td>{{ ((it.product?.price || 0) * it.qty) | number:'1.2-2' }}</td>\r
                </tr>\r
            </tbody>\r
            <tfoot>\r
                <tr>\r
                    <td colspan="3" class="right">Total</td>\r
                    <td>{{ cart.totalPrice() | number:'1.2-2' }}</td>\r
                </tr>\r
            </tfoot>\r
        </table>\r
    </section>\r
\r
\r
\r
    <section class="actions">\r
        <button (click)="clearCart()">Clear Cart</button>\r
        <button (click)="generatePdf()">Generate PDF</button>\r
        <button (click)="back()">Back to POS</button>\r
    </section>\r
</div>`, styles: ["/* src/app/components/checkout/checkout.component.scss */\n.checkout-container {\n  max-width: 800px;\n  margin: 0 auto;\n}\n.checkout-container h2 {\n  color: var(--color-neutral-800);\n  margin-bottom: 24px;\n  font-size: 22px;\n  font-weight: 600;\n  margin: 0;\n}\n.order-items table {\n  width: 100%;\n  border-collapse: collapse;\n  margin: 24px 0;\n  border-radius: 8px;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.order-items th,\n.order-items td {\n  padding: 8px 12px;\n  border-bottom: 1px solid var(--color-neutral-300);\n  font-size: 13px;\n}\n.order-items th {\n  background: var(--color-primary-bg);\n  color: white;\n  font-weight: 600;\n  text-align: left;\n}\n.order-items tbody tr:hover {\n  background: var(--color-neutral-100);\n}\n.order-items tfoot tr {\n  background: var(--color-neutral-200);\n  font-weight: 600;\n}\n.order-items .right {\n  text-align: right;\n}\n.selectors {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n  margin: 24px 0;\n}\n.selector-group {\n  display: flex;\n  flex-direction: column;\n}\n.selector-label {\n  font-weight: 600;\n  font-size: 12px;\n  color: var(--color-neutral-800);\n  margin-bottom: 4px;\n}\n.select-wrapper {\n  position: relative;\n  width: 100%;\n}\n.custom-select {\n  width: 100%;\n  padding: 8px 32px 8px 12px;\n  border: 2px solid var(--color-neutral-400);\n  border-radius: 8px;\n  background: var(--color-neutral-100);\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--color-neutral-800);\n  appearance: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  outline: none;\n}\n.custom-select:focus {\n  border-color: var(--color-primary-bg);\n  box-shadow: 0 0 0 3px rgba(248, 147, 29, 0.1);\n  background: var(--color-neutral-100);\n}\n.custom-select:hover:not(:disabled) {\n  border-color: var(--color-primary-bg);\n}\n.custom-select:disabled {\n  background: var(--color-neutral-200);\n  color: var(--color-neutral-500);\n  cursor: not-allowed;\n  opacity: 0.7;\n}\n.select-arrow {\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--color-neutral-600);\n  font-size: 12px;\n  pointer-events: none;\n  transition: all 0.3s ease;\n}\n.select-wrapper:hover .select-arrow {\n  color: var(--color-primary-bg);\n}\n.custom-select:focus + .select-arrow {\n  color: var(--color-primary-bg);\n  transform: translateY(-50%) rotate(180deg);\n}\n.custom-select:disabled + .select-arrow {\n  color: var(--color-neutral-400);\n}\n@media (max-width: 768px) {\n  .selectors {\n    grid-template-columns: 1fr;\n    gap: 16px;\n  }\n}\n.actions {\n  margin-top: 32px;\n  display: flex;\n  gap: 16px;\n  justify-content: flex-end;\n}\n.actions button {\n  flex: 1;\n  padding: 10px 14px;\n  border-radius: 8px;\n  border: none;\n  font-weight: 600;\n  font-size: 13px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  min-height: 34px;\n}\n.actions button:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.actions button:active {\n  transform: translateY(0);\n}\n.actions button:nth-child(1) {\n  background: var(--color-neutral-600);\n  color: white;\n}\n.actions button:nth-child(1):hover {\n  background: var(--color-neutral-700);\n}\n.actions button:nth-child(2) {\n  background: var(--color-secondary-bg);\n  color: white;\n}\n.actions button:nth-child(2):hover {\n  background: #16967f;\n}\n.actions button:nth-child(3) {\n  background: var(--color-primary-bg);\n  color: white;\n}\n.actions button:nth-child(3):hover {\n  background: #e6821a;\n}\n.customer-search-container {\n  position: relative;\n  width: 100%;\n}\n.search-input-wrapper {\n  position: relative;\n  width: 100%;\n}\n.customer-search-input {\n  width: 100%;\n  padding: 10px 40px 10px 14px;\n  border: 2px solid var(--color-neutral-400);\n  border-radius: 8px;\n  background: var(--color-neutral-100);\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--color-neutral-800);\n  transition: all 0.3s ease;\n  outline: none;\n  box-sizing: border-box;\n}\n.customer-search-input:focus {\n  border-color: var(--color-primary-bg);\n  box-shadow: 0 0 0 3px rgba(248, 147, 29, 0.1);\n  background: var(--color-neutral-100);\n}\n.customer-search-input::placeholder {\n  color: var(--color-neutral-500);\n}\n.search-icon {\n  position: absolute;\n  right: 32px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--color-neutral-600);\n  font-size: 12px;\n  pointer-events: none;\n}\n.clear-search {\n  position: absolute;\n  right: 8px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  color: var(--color-neutral-500);\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 4px;\n  font-size: 10px;\n}\n.clear-search:hover {\n  background: var(--color-neutral-300);\n  color: var(--color-neutral-700);\n}\n.customer-dropdown {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background: white;\n  border: 2px solid var(--color-primary-bg);\n  border-top: none;\n  border-radius: 0 0 8px 8px;\n  max-height: 200px;\n  overflow-y: auto;\n  z-index: 1000;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.dropdown-loading {\n  padding: 12px 16px;\n  text-align: center;\n  color: var(--color-neutral-600);\n  font-size: 13px;\n}\n.dropdown-loading i {\n  margin-right: 8px;\n}\n.customer-option {\n  padding: 12px 16px;\n  cursor: pointer;\n  border-bottom: 1px solid var(--color-neutral-200);\n  transition: background-color 0.2s ease;\n}\n.customer-option:hover {\n  background: var(--color-neutral-100);\n}\n.customer-option:last-child {\n  border-bottom: none;\n}\n.customer-name {\n  font-weight: 600;\n  color: var(--color-neutral-800);\n  font-size: 13px;\n}\n.customer-phone {\n  font-size: 12px;\n  color: var(--color-neutral-600);\n  margin-top: 2px;\n}\n.no-customers {\n  padding: 12px 16px;\n  text-align: center;\n  color: var(--color-neutral-500);\n  font-style: italic;\n  font-size: 13px;\n}\n.selected-customer {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 14px;\n  background: var(--color-primary-light);\n  border: 2px solid var(--color-primary-bg);\n  border-radius: 8px;\n  margin-top: 8px;\n}\n.customer-info {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n}\n.customer-info .customer-name {\n  font-weight: 600;\n  color: var(--color-primary-bg);\n}\n.customer-info .customer-phone {\n  color: var(--color-neutral-600);\n}\n.remove-customer {\n  background: none;\n  border: none;\n  color: var(--color-neutral-500);\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 4px;\n  font-size: 10px;\n}\n.remove-customer:hover {\n  background: rgba(255, 255, 255, 0.5);\n  color: var(--color-neutral-700);\n}\n.no-customer-selected {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 14px;\n  background: var(--color-neutral-100);\n  border: 2px dashed var(--color-neutral-400);\n  border-radius: 8px;\n  margin-top: 8px;\n  color: var(--color-neutral-600);\n  font-size: 13px;\n  font-style: italic;\n}\n.no-customer-selected i {\n  color: var(--color-neutral-500);\n  font-size: 14px;\n}\n.staff-search-container {\n  position: relative;\n  width: 100%;\n}\n.staff-search-input {\n  width: 100%;\n  padding: 10px 40px 10px 14px;\n  border: 2px solid var(--color-neutral-400);\n  border-radius: 8px;\n  background: var(--color-neutral-100);\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--color-neutral-800);\n  transition: all 0.3s ease;\n  outline: none;\n  box-sizing: border-box;\n}\n.staff-search-input:focus {\n  border-color: var(--color-secondary-bg);\n  box-shadow: 0 0 0 3px rgba(25, 173, 159, 0.1);\n  background: var(--color-neutral-100);\n}\n.staff-search-input::placeholder {\n  color: var(--color-neutral-500);\n}\n.staff-dropdown {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background: white;\n  border: 2px solid var(--color-secondary-bg);\n  border-top: none;\n  border-radius: 0 0 8px 8px;\n  max-height: 200px;\n  overflow-y: auto;\n  z-index: 1000;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.staff-option {\n  padding: 12px 16px;\n  cursor: pointer;\n  border-bottom: 1px solid var(--color-neutral-200);\n  transition: background-color 0.2s ease;\n}\n.staff-option:hover {\n  background: var(--color-neutral-100);\n}\n.staff-option:last-child {\n  border-bottom: none;\n}\n.staff-name {\n  font-weight: 600;\n  color: var(--color-neutral-800);\n  font-size: 13px;\n}\n.staff-email {\n  font-size: 12px;\n  color: var(--color-neutral-600);\n  margin-top: 2px;\n}\n.no-staff {\n  padding: 12px 16px;\n  text-align: center;\n  color: var(--color-neutral-500);\n  font-style: italic;\n  font-size: 13px;\n}\n.selected-staff {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 14px;\n  background: var(--color-secondary-light);\n  border: 2px solid var(--color-secondary-bg);\n  border-radius: 8px;\n  margin-top: 8px;\n}\n.staff-info {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n}\n.staff-info .staff-name {\n  font-weight: 600;\n  color: var(--color-secondary-bg);\n}\n.staff-info .staff-email {\n  color: var(--color-neutral-600);\n}\n.remove-staff {\n  background: none;\n  border: none;\n  color: var(--color-neutral-500);\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 4px;\n  font-size: 10px;\n}\n.remove-staff:hover {\n  background: rgba(255, 255, 255, 0.5);\n  color: var(--color-neutral-700);\n}\n.no-staff-selected {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 14px;\n  background: var(--color-neutral-100);\n  border: 2px dashed var(--color-neutral-400);\n  border-radius: 8px;\n  margin-top: 8px;\n  color: var(--color-neutral-600);\n  font-size: 13px;\n  font-style: italic;\n}\n.no-staff-selected i {\n  color: var(--color-neutral-500);\n  font-size: 14px;\n}\n.payment-section {\n  margin: 24px 0;\n  padding: 20px;\n  background: rgba(248, 147, 29, 0.1);\n  border-radius: 12px;\n  border: 1px solid var(--color-neutral-300);\n}\n.payment-section h3 {\n  color: var(--color-neutral-800);\n  font-size: 18px;\n  font-weight: 600;\n  margin: 0 0 16px 0;\n}\n.payment-section h4 {\n  color: var(--color-neutral-700);\n  font-size: 14px;\n  font-weight: 600;\n  margin: 16px 0 12px 0;\n}\n.payment-summary {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 16px;\n  background: var(--color-neutral-100);\n  border-radius: 8px;\n  margin-bottom: 16px;\n  font-weight: 600;\n}\n.payment-summary .total-amount {\n  color: var(--color-neutral-800);\n  font-size: 14px;\n}\n.payment-summary .remaining-amount {\n  color: var(--color-danger-600);\n  font-size: 14px;\n}\n.payment-methods-container .payment-method-search {\n  position: relative;\n  margin-bottom: 16px;\n}\n.payment-search-input {\n  width: 100%;\n  padding: 10px 40px 10px 14px;\n  border: 2px solid var(--color-neutral-400);\n  border-radius: 8px;\n  background: var(--color-neutral-100);\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--color-neutral-800);\n  transition: all 0.3s ease;\n  outline: none;\n  box-sizing: border-box;\n}\n.payment-search-input:focus {\n  border-color: var(--color-success-500);\n  box-shadow: 0 0 0 3px rgba(40, 167, 69, 0.1);\n  background: var(--color-neutral-100);\n}\n.payment-search-input::placeholder {\n  color: var(--color-neutral-500);\n}\n.payment-dropdown {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background: white;\n  border: 2px solid var(--color-success-500);\n  border-top: none;\n  border-radius: 0 0 8px 8px;\n  max-height: 200px;\n  overflow-y: auto;\n  z-index: 1000;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.payment-option {\n  padding: 12px 16px;\n  cursor: pointer;\n  border-bottom: 1px solid var(--color-neutral-200);\n  transition: background-color 0.2s ease;\n}\n.payment-option:hover {\n  background: var(--color-neutral-100);\n}\n.payment-option:last-child {\n  border-bottom: none;\n}\n.payment-name {\n  font-weight: 600;\n  color: var(--color-neutral-800);\n  font-size: 13px;\n}\n.payment-description {\n  font-size: 12px;\n  color: var(--color-neutral-600);\n  margin-top: 2px;\n}\n.no-payments {\n  padding: 12px 16px;\n  text-align: center;\n  color: var(--color-neutral-500);\n  font-style: italic;\n  font-size: 13px;\n}\n.selected-payments .payment-item {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  padding: 16px;\n  background: white;\n  border: 2px solid var(--color-success-300);\n  border-radius: 8px;\n  margin-bottom: 12px;\n}\n.selected-payments .payment-item .payment-details {\n  flex: 1;\n}\n.selected-payments .payment-item .payment-details .payment-method-name {\n  font-weight: 600;\n  color: var(--color-success-600);\n  font-size: 14px;\n  margin-bottom: 8px;\n}\n.selected-payments .payment-item .payment-details .payment-inputs {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.selected-payments .payment-item .payment-details .payment-inputs .input-group {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.selected-payments .payment-item .payment-details .payment-inputs label {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--color-neutral-700);\n}\n.selected-payments .payment-item .payment-details .payment-inputs .amount-input,\n.selected-payments .payment-item .payment-details .payment-inputs .card-input {\n  padding: 8px 12px;\n  border: 1px solid var(--color-neutral-400);\n  border-radius: 6px;\n  background: var(--color-neutral-100);\n  font-size: 13px;\n  transition: all 0.3s ease;\n  outline: none;\n}\n.selected-payments .payment-item .payment-details .payment-inputs .amount-input:focus,\n.selected-payments .payment-item .payment-details .payment-inputs .card-input:focus {\n  border-color: var(--color-success-500);\n  box-shadow: 0 0 0 2px rgba(40, 167, 69, 0.1);\n}\n.selected-payments .payment-item .payment-details .payment-inputs .finance-select {\n  padding: 8px 12px;\n  border: 1px solid var(--color-neutral-400);\n  border-radius: 6px;\n  background: var(--color-neutral-100);\n  font-size: 13px;\n  transition: all 0.3s ease;\n  outline: none;\n  cursor: pointer;\n  width: 100%;\n}\n.selected-payments .payment-item .payment-details .payment-inputs .finance-select:focus {\n  border-color: var(--color-success-500);\n  box-shadow: 0 0 0 2px rgba(40, 167, 69, 0.1);\n}\n.selected-payments .payment-item .payment-details .payment-inputs .finance-select option {\n  padding: 8px;\n  background: white;\n  color: var(--color-neutral-800);\n}\n.selected-payments .payment-item .payment-details .payment-inputs .remaining-amount-checkbox {\n  margin-top: 8px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.selected-payments .payment-item .payment-details .payment-inputs .remaining-amount-checkbox .checkbox-input {\n  width: 16px;\n  height: 16px;\n  cursor: pointer;\n  accent-color: var(--color-success-500);\n}\n.selected-payments .payment-item .payment-details .payment-inputs .remaining-amount-checkbox .checkbox-label {\n  font-size: 12px;\n  color: var(--color-neutral-700);\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.selected-payments .payment-item .payment-details .payment-inputs .remaining-amount-checkbox .checkbox-label:hover {\n  color: var(--color-success-600);\n}\n.selected-payments .payment-item .remove-payment {\n  background: none;\n  border: none;\n  color: var(--color-neutral-500);\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 4px;\n  font-size: 12px;\n  margin-left: 12px;\n}\n.selected-payments .payment-item .remove-payment:hover {\n  background: var(--color-neutral-200);\n  color: var(--color-neutral-700);\n}\n.no-payments-selected {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 16px;\n  background: var(--color-neutral-100);\n  border: 2px dashed var(--color-neutral-400);\n  border-radius: 8px;\n  color: var(--color-neutral-600);\n  font-size: 13px;\n  font-style: italic;\n  text-align: center;\n  justify-content: center;\n}\n.no-payments-selected i {\n  color: var(--color-neutral-500);\n  font-size: 16px;\n}\n/*# sourceMappingURL=checkout.component.css.map */\n"] }]
  }], () => [{ type: CartService }, { type: AuthService }, { type: Router }, { type: HttpClient }, { type: ToastService }, { type: PdfGeneratorComponent }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CheckoutComponent, { className: "CheckoutComponent", filePath: "src/app/components/checkout/checkout.component.ts", lineNumber: 19 });
})();
export {
  CheckoutComponent
};
//# sourceMappingURL=chunk-2PSNBYKC.js.map
