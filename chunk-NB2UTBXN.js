import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-23BXOP6M.js";
import {
  AuthService,
  CommonModule,
  Component,
  HttpClient,
  HttpClientModule,
  NgForOf,
  NgIf,
  Router,
  environment,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-BZSMQWJC.js";

// src/app/components/customers/customers.component.ts
function CustomersComponent_div_13_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function CustomersComponent_div_13_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clearSearch());
    });
    \u0275\u0275element(1, "i", 23);
    \u0275\u0275elementEnd();
  }
}
function CustomersComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18);
    \u0275\u0275element(2, "i", 19);
    \u0275\u0275elementStart(3, "input", 20);
    \u0275\u0275twoWayListener("ngModelChange", function CustomersComponent_div_13_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchTerm, $event) || (ctx_r1.searchTerm = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function CustomersComponent_div_13_Template_input_input_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSearchChange());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, CustomersComponent_div_13_button_4_Template, 2, 0, "button", 21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchTerm);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.searchTerm);
  }
}
function CustomersComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1, "Loading customers...");
    \u0275\u0275elementEnd();
  }
}
function CustomersComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 26);
    \u0275\u0275listener("click", function CustomersComponent_div_16_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.refreshCustomers());
    });
    \u0275\u0275text(3, "Try Again");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.error, " ");
  }
}
function CustomersComponent_div_17_article_2_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "strong");
    \u0275\u0275text(2, "Phone:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const customer_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", customer_r5.phone, " ");
  }
}
function CustomersComponent_div_17_article_2_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "strong");
    \u0275\u0275text(2, "Address:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const customer_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", customer_r5.address, " ");
  }
}
function CustomersComponent_div_17_article_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 30)(1, "header", 31)(2, "div", 32);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 33)(5, "span", 34);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 35)(8, "div", 36);
    \u0275\u0275template(9, CustomersComponent_div_17_article_2_div_9_Template, 4, 1, "div", 37)(10, CustomersComponent_div_17_article_2_div_10_Template, 4, 1, "div", 38);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const customer_r5 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(customer_r5.name || "-");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("#", customer_r5.id);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", customer_r5.phone);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", customer_r5.address);
  }
}
function CustomersComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 28);
    \u0275\u0275template(2, CustomersComponent_div_17_article_2_Template, 11, 4, "article", 29);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.paginatedCustomers);
  }
}
function CustomersComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(' No customers found matching "', ctx_r1.searchTerm, '" ');
  }
}
function CustomersComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275text(1, "No customers found");
    \u0275\u0275elementEnd();
  }
}
function CustomersComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 44);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 45)(4, "button", 46);
    \u0275\u0275listener("click", function CustomersComponent_div_20_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToFirstPage());
    });
    \u0275\u0275element(5, "i", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 46);
    \u0275\u0275listener("click", function CustomersComponent_div_20_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.previousPage());
    });
    \u0275\u0275element(7, "i", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 49);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 46);
    \u0275\u0275listener("click", function CustomersComponent_div_20_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.nextPage());
    });
    \u0275\u0275element(11, "i", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 46);
    \u0275\u0275listener("click", function CustomersComponent_div_20_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToLastPage());
    });
    \u0275\u0275element(13, "i", 51);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" Showing ", ctx_r1.getStartIndex() + 1, "-", ctx_r1.getEndIndex(), " of ", ctx_r1.filteredCustomers.length, " customers ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.currentPage === 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.currentPage === 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" Page ", ctx_r1.currentPage, " of ", ctx_r1.totalPages, " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
  }
}
var CustomersComponent = class _CustomersComponent {
  http;
  auth;
  router;
  customers = [];
  filteredCustomers = [];
  paginatedCustomers = [];
  searchTerm = "";
  loading = true;
  error = null;
  // Pagination properties
  currentPage = 1;
  itemsPerPage = 10;
  totalPages = 0;
  constructor(http, auth, router) {
    this.http = http;
    this.auth = auth;
    this.router = router;
  }
  ngOnInit() {
    this.loadCustomers();
  }
  loadCustomers() {
    this.loading = true;
    this.error = null;
    const headers = this.auth.authHeaders();
    this.http.get(`${environment.apiBase}/pos/customer`, { headers }).subscribe({
      next: (response) => {
        if (response.data) {
          this.customers = Array.isArray(response.data) ? response.data : [response.data];
        } else {
          this.customers = Array.isArray(response) ? response : [];
        }
        this.filterCustomers();
        this.loading = false;
      },
      error: (err) => {
        this.error = "Failed to load customers";
        this.loading = false;
        console.error("Error loading customers:", err);
      }
    });
  }
  refreshCustomers() {
    this.loadCustomers();
  }
  goBack() {
    this.router.navigate(["/pos"]);
  }
  filterCustomers() {
    if (!this.searchTerm.trim()) {
      this.filteredCustomers = [...this.customers];
    } else {
      const searchLower = this.searchTerm.toLowerCase().trim();
      this.filteredCustomers = this.customers.filter((customer) => customer.name?.toLowerCase().includes(searchLower) || customer.phone?.toLowerCase().includes(searchLower));
    }
    this.currentPage = 1;
    this.updatePagination();
  }
  onSearchChange() {
    this.filterCustomers();
  }
  clearSearch() {
    this.searchTerm = "";
    this.filterCustomers();
  }
  // Pagination methods
  updatePagination() {
    this.totalPages = Math.ceil(this.filteredCustomers.length / this.itemsPerPage);
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedCustomers = this.filteredCustomers.slice(startIndex, endIndex);
  }
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePagination();
    }
  }
  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagination();
    }
  }
  goToFirstPage() {
    this.currentPage = 1;
    this.updatePagination();
  }
  goToLastPage() {
    this.currentPage = this.totalPages;
    this.updatePagination();
  }
  getStartIndex() {
    return (this.currentPage - 1) * this.itemsPerPage;
  }
  getEndIndex() {
    const endIndex = this.currentPage * this.itemsPerPage;
    return Math.min(endIndex, this.filteredCustomers.length);
  }
  static \u0275fac = function CustomersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CustomersComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CustomersComponent, selectors: [["app-customers"]], decls: 21, vars: 10, consts: [[1, "settings-page"], [1, "fixed-header"], [1, "d-flex", "space-between"], [1, "fa-solid", "fa-users"], [1, "button-group"], [1, "settings-back", "p-0", 3, "click", "disabled"], [1, "fa-solid", "fa-refresh"], [1, "settings-back", "p-0", 3, "click"], [1, "fa-solid", "fa-arrow-left"], ["class", "search-container", 4, "ngIf"], [1, "content-container"], ["class", "loading-message", 4, "ngIf"], ["class", "error-message", 4, "ngIf"], ["class", "scrollable-grid", 4, "ngIf"], ["class", "no-results", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "fixed-pagination", 4, "ngIf"], [1, "search-container"], [1, "search-box"], [1, "fa-solid", "fa-search", "search-icon"], ["type", "text", "placeholder", "Search by name or phone number...", 1, "search-input", 3, "ngModelChange", "input", "ngModel"], ["class", "clear-search", 3, "click", 4, "ngIf"], [1, "clear-search", 3, "click"], [1, "fa-solid", "fa-times"], [1, "loading-message"], [1, "error-message"], [1, "btn", 3, "click"], [1, "scrollable-grid"], [1, "settings-grid"], ["class", "settings-card", 4, "ngFor", "ngForOf"], [1, "settings-card"], [1, "sc-header"], [1, "sc-title"], [1, "sc-sno"], [1, "customer-id"], [1, "sc-body"], [1, "customer-details-row"], ["class", "sc-row left-col", 4, "ngIf"], ["class", "sc-row right-col", 4, "ngIf"], [1, "sc-row", "left-col"], [1, "sc-row", "right-col"], [1, "no-results"], [1, "empty-state"], [1, "fixed-pagination"], [1, "pagination-info"], [1, "pagination-controls"], [1, "page-btn", 3, "click", "disabled"], [1, "fa-solid", "fa-angles-left"], [1, "fa-solid", "fa-chevron-left"], [1, "page-info"], [1, "fa-solid", "fa-chevron-right"], [1, "fa-solid", "fa-angles-right"]], template: function CustomersComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3");
      \u0275\u0275element(4, "i", 3);
      \u0275\u0275text(5, " Customers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 4)(7, "button", 5);
      \u0275\u0275listener("click", function CustomersComponent_Template_button_click_7_listener() {
        return ctx.refreshCustomers();
      });
      \u0275\u0275element(8, "i", 6);
      \u0275\u0275text(9, " Refresh ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "button", 7);
      \u0275\u0275listener("click", function CustomersComponent_Template_button_click_10_listener() {
        return ctx.goBack();
      });
      \u0275\u0275element(11, "i", 8);
      \u0275\u0275text(12, " Back ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(13, CustomersComponent_div_13_Template, 5, 2, "div", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 10);
      \u0275\u0275template(15, CustomersComponent_div_15_Template, 2, 0, "div", 11)(16, CustomersComponent_div_16_Template, 4, 1, "div", 12)(17, CustomersComponent_div_17_Template, 3, 1, "div", 13)(18, CustomersComponent_div_18_Template, 2, 1, "div", 14)(19, CustomersComponent_div_19_Template, 2, 0, "div", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275template(20, CustomersComponent_div_20_Template, 14, 9, "div", 16);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275classProp("spinning", ctx.loading);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", !ctx.loading);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.paginatedCustomers == null ? null : ctx.paginatedCustomers.length);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !(ctx.filteredCustomers == null ? null : ctx.filteredCustomers.length) && !ctx.loading && !ctx.error && (ctx.customers == null ? null : ctx.customers.length));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !(ctx.customers == null ? null : ctx.customers.length) && !ctx.loading && !ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ((ctx.filteredCustomers == null ? null : ctx.filteredCustomers.length) || 0) > ctx.itemsPerPage);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, HttpClientModule], styles: ['\n\n.d-flex[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.space-between[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n.settings-back[_ngcontent-%COMP%] {\n  background: none;\n  border: 0;\n  color: var(--color-primary-bg);\n  margin-bottom: 8px;\n  padding: 6px 0;\n}\n.settings-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  gap: 12px;\n  margin-top: 8px;\n}\n.settings-card[_ngcontent-%COMP%] {\n  background: var(--color-neutral-100);\n  border: 1px solid var(--color-neutral-400);\n  border-radius: 10px;\n  padding: 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.sc-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.sc-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.sc-sno[_ngcontent-%COMP%] {\n  color: var(--color-neutral-600);\n  font-size: 0.9rem;\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n}\n.status-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 8px;\n  border-radius: 999px;\n  font-weight: 600;\n  font-size: 0.85rem;\n}\n.status-badge.active[_ngcontent-%COMP%] {\n  background: var(--color-secondary-bg);\n  color: var(--color-secondary-text);\n}\n.status-badge.inactive[_ngcontent-%COMP%] {\n  background: var(--color-neutral-300);\n  color: var(--color-neutral-600);\n}\n.card-toggle[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  background: transparent;\n  color: var(--color-primary-bg);\n  padding: 4px 6px;\n  border-radius: 6px;\n  border: 1px solid var(--color-primary-border);\n}\n.sc-body[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n}\n.sc-row[_ngcontent-%COMP%] {\n  margin: 6px 0;\n}\n.btn[_ngcontent-%COMP%] {\n  background: var(--color-primary-bg);\n  color: var(--color-primary-text);\n  border: 0;\n  padding: 6px 10px;\n  border-radius: 6px;\n  cursor: pointer;\n}\n.settings-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.fixed-header[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  background: white;\n  z-index: 10;\n  padding: 12px;\n  border-bottom: 1px solid var(--color-neutral-300);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.content-container[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n}\n.content-container[_ngcontent-%COMP%]::before, \n.content-container[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  left: 0;\n  right: 0;\n  height: 20px;\n  pointer-events: none;\n  z-index: 5;\n  transition: opacity 0.3s ease;\n}\n.content-container[_ngcontent-%COMP%]::before {\n  top: 0;\n  background:\n    linear-gradient(\n      to bottom,\n      rgba(255, 255, 255, 0.9),\n      transparent);\n  opacity: 0;\n}\n.content-container[_ngcontent-%COMP%]::after {\n  bottom: 0;\n  background:\n    linear-gradient(\n      to top,\n      rgba(255, 255, 255, 0.9),\n      transparent);\n  opacity: 0;\n}\n.content-container.has-scroll-top[_ngcontent-%COMP%]::before {\n  opacity: 1;\n}\n.content-container.has-scroll-bottom[_ngcontent-%COMP%]::after {\n  opacity: 1;\n}\n.scrollable-grid[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  overflow-x: hidden;\n  padding: 12px;\n  max-height: calc(100vh - 322px);\n  scrollbar-width: thin;\n  scrollbar-color: var(--color-neutral-400) var(--color-neutral-200);\n  scroll-behavior: smooth;\n  scroll-padding-top: 20px;\n  will-change: scroll-position;\n  transform: translateZ(0);\n  -webkit-overflow-scrolling: touch;\n  scroll-snap-type: y proximity;\n}\n.scrollable-grid[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n.scrollable-grid[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: var(--color-neutral-100);\n  border-radius: 4px;\n  margin: 4px 0;\n}\n.scrollable-grid[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--color-neutral-400);\n  border-radius: 4px;\n  transition: background-color 0.3s ease;\n}\n.scrollable-grid[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: var(--color-primary-bg);\n}\n.scrollable-grid[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:active {\n  background: #e6821a;\n}\n.scrollable-grid[_ngcontent-%COMP%]::-webkit-scrollbar-corner {\n  background: var(--color-neutral-100);\n}\n.scrollable-grid[_ngcontent-%COMP%]:focus {\n  outline: 2px solid var(--color-primary-bg);\n  outline-offset: -2px;\n}\n.fixed-pagination[_ngcontent-%COMP%] {\n  position: sticky;\n  bottom: 0;\n  background: white;\n  z-index: 10;\n  border-top: 1px solid var(--color-neutral-300);\n  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px;\n}\n.loading-message[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 20px;\n  text-align: center;\n  color: var(--color-neutral-600);\n}\nh3[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\nh3[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--color-primary-bg);\n}\n.p-0[_ngcontent-%COMP%] {\n  padding: 0 !important;\n}\n.button-group[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  align-items: center;\n}\n.customer-details-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.settings-card[_ngcontent-%COMP%] {\n  scroll-snap-align: start;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.settings-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);\n}\n.left-col[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.right-col[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.search-container[_ngcontent-%COMP%] {\n  margin: 12px 0 0 0;\n  padding-bottom: 8px;\n}\n.search-box[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 400px;\n  width: 100%;\n}\n.search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 40px 10px 36px;\n  border: 1px solid var(--color-neutral-400);\n  border-radius: 8px;\n  font-size: 14px;\n  background: white;\n  transition: border-color 0.3s ease;\n  box-sizing: border-box;\n}\n.search-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--color-primary-bg);\n  box-shadow: 0 0 0 2px rgba(248, 147, 29, 0.1);\n}\n.search-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--color-neutral-500);\n}\n.search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--color-neutral-500);\n  font-size: 14px;\n  pointer-events: none;\n}\n.clear-search[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 8px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  color: var(--color-neutral-500);\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 4px;\n  font-size: 12px;\n}\n.clear-search[_ngcontent-%COMP%]:hover {\n  background: var(--color-neutral-200);\n  color: var(--color-neutral-700);\n}\n.no-results[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 32px;\n  color: var(--color-neutral-600);\n  font-style: italic;\n}\n.customer-id[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--color-neutral-600);\n}\n.error-message[_ngcontent-%COMP%] {\n  padding: 16px;\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  border-radius: 8px;\n  color: #dc2626;\n  margin: 16px 0;\n}\n.error-message[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin-left: 12px;\n  background: #dc2626;\n}\n.error-message[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  background: #b91c1c;\n}\n.spinning[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.pagination-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 20px;\n  padding: 16px;\n  border-top: 1px solid var(--color-neutral-300);\n}\n.pagination-info[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--color-neutral-600);\n}\n.pagination-controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.page-btn[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid var(--color-neutral-400);\n  background: white;\n  color: var(--color-neutral-700);\n  border-radius: 6px;\n  cursor: pointer;\n  font-size: 14px;\n  transition: all 0.3s ease;\n}\n.page-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--color-primary-bg);\n  color: white;\n  border-color: var(--color-primary-bg);\n}\n.page-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  background: var(--color-neutral-200);\n}\n.page-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.page-info[_ngcontent-%COMP%] {\n  padding: 0 16px;\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--color-neutral-700);\n}\n@media (max-width: 768px) {\n  .pagination-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 12px;\n  }\n  .pagination-info[_ngcontent-%COMP%] {\n    order: 2;\n  }\n  .pagination-controls[_ngcontent-%COMP%] {\n    order: 1;\n  }\n  .scrollable-grid[_ngcontent-%COMP%] {\n    padding: 8px;\n    -webkit-overflow-scrolling: touch;\n    overscroll-behavior: contain;\n  }\n  .scrollable-grid[_ngcontent-%COMP%]::-webkit-scrollbar {\n    width: 12px;\n  }\n  .settings-card[_ngcontent-%COMP%] {\n  }\n  .settings-card[_ngcontent-%COMP%]:hover {\n    transform: none;\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  }\n  .content-container[_ngcontent-%COMP%] {\n    -webkit-overflow-scrolling: touch;\n  }\n}\n@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {\n  .scrollable-grid[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n    background-image:\n      linear-gradient(\n        45deg,\n        var(--color-primary-bg) 25%,\n        transparent 25%,\n        transparent 75%,\n        var(--color-primary-bg) 75%);\n    background-size: 4px 4px;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .scrollable-grid[_ngcontent-%COMP%] {\n    scroll-behavior: auto;\n  }\n  .settings-card[_ngcontent-%COMP%] {\n    transition: none;\n  }\n  .content-container[_ngcontent-%COMP%]::before, \n   .content-container[_ngcontent-%COMP%]::after {\n    transition: none;\n  }\n}\n/*# sourceMappingURL=customers.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomersComponent, [{
    type: Component,
    args: [{ selector: "app-customers", standalone: true, imports: [CommonModule, FormsModule, HttpClientModule], template: `<div class="settings-page">\r
    <!-- Fixed Header -->\r
    <div class="fixed-header">\r
        <div class="d-flex space-between">\r
            <h3><i class="fa-solid fa-users"></i> Customers</h3>\r
            <div class="button-group">\r
                <button class="settings-back p-0" (click)="refreshCustomers()" [disabled]="loading">\r
                    <i class="fa-solid fa-refresh" [class.spinning]="loading"></i> Refresh\r
                </button>\r
                <button class="settings-back p-0" (click)="goBack()">\r
                    <i class="fa-solid fa-arrow-left"></i> Back\r
                </button>\r
            </div>\r
        </div>\r
\r
        <!-- Fixed Search Box -->\r
        <div class="search-container" *ngIf="!loading">\r
            <div class="search-box">\r
                <i class="fa-solid fa-search search-icon"></i>\r
                <input type="text" placeholder="Search by name or phone number..." [(ngModel)]="searchTerm"\r
                    (input)="onSearchChange()" class="search-input">\r
                <button *ngIf="searchTerm" class="clear-search" (click)="clearSearch()">\r
                    <i class="fa-solid fa-times"></i>\r
                </button>\r
            </div>\r
        </div>\r
    </div>\r
\r
    <!-- Scrollable Content Area -->\r
    <div class="content-container">\r
        <div *ngIf="loading" class="loading-message">Loading customers...</div>\r
\r
        <div *ngIf="error" class="error-message">\r
            {{ error }}\r
            <button class="btn" (click)="refreshCustomers()">Try Again</button>\r
        </div>\r
\r
        <div *ngIf="paginatedCustomers?.length" class="scrollable-grid">\r
            <div class="settings-grid">\r
                <article *ngFor="let customer of paginatedCustomers; let i = index" class="settings-card">\r
                    <header class="sc-header">\r
                        <div class="sc-title">{{ customer.name || '-' }}</div>\r
                        <div class="sc-sno">\r
                            <span class="customer-id">#{{ customer.id }}</span>\r
                        </div>\r
                    </header>\r
                    <div class="sc-body">\r
                        <div class="customer-details-row">\r
                            <div class="sc-row left-col" *ngIf="customer.phone">\r
                                <strong>Phone:</strong> {{ customer.phone }}\r
                            </div>\r
                            <div class="sc-row right-col" *ngIf="customer.address">\r
                                <strong>Address:</strong> {{ customer.address }}\r
                            </div>\r
                        </div>\r
                    </div>\r
                </article>\r
            </div>\r
        </div>\r
\r
        <div *ngIf="!filteredCustomers?.length && !loading && !error && customers?.length" class="no-results">\r
            No customers found matching "{{ searchTerm }}"\r
        </div>\r
\r
        <div *ngIf="!customers?.length && !loading && !error" class="empty-state">No customers found</div>\r
    </div>\r
\r
    <!-- Fixed Pagination Controls -->\r
    <div *ngIf="(filteredCustomers?.length || 0) > itemsPerPage" class="fixed-pagination">\r
        <div class="pagination-info">\r
            Showing {{ getStartIndex() + 1 }}-{{ getEndIndex() }} of {{ filteredCustomers.length }} customers\r
        </div>\r
        <div class="pagination-controls">\r
            <button class="page-btn" (click)="goToFirstPage()" [disabled]="currentPage === 1">\r
                <i class="fa-solid fa-angles-left"></i>\r
            </button>\r
            <button class="page-btn" (click)="previousPage()" [disabled]="currentPage === 1">\r
                <i class="fa-solid fa-chevron-left"></i>\r
            </button>\r
            <span class="page-info">\r
                Page {{ currentPage }} of {{ totalPages }}\r
            </span>\r
            <button class="page-btn" (click)="nextPage()" [disabled]="currentPage === totalPages">\r
                <i class="fa-solid fa-chevron-right"></i>\r
            </button>\r
            <button class="page-btn" (click)="goToLastPage()" [disabled]="currentPage === totalPages">\r
                <i class="fa-solid fa-angles-right"></i>\r
            </button>\r
        </div>\r
    </div>\r
</div>`, styles: ['/* src/app/components/customers/customers.component.scss */\n.d-flex {\n  display: flex;\n  align-items: center;\n}\n.space-between {\n  justify-content: space-between;\n}\n.settings-back {\n  background: none;\n  border: 0;\n  color: var(--color-primary-bg);\n  margin-bottom: 8px;\n  padding: 6px 0;\n}\n.settings-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  gap: 12px;\n  margin-top: 8px;\n}\n.settings-card {\n  background: var(--color-neutral-100);\n  border: 1px solid var(--color-neutral-400);\n  border-radius: 10px;\n  padding: 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.sc-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.sc-title {\n  font-weight: 700;\n}\n.sc-sno {\n  color: var(--color-neutral-600);\n  font-size: 0.9rem;\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n}\n.status-badge {\n  display: inline-block;\n  padding: 4px 8px;\n  border-radius: 999px;\n  font-weight: 600;\n  font-size: 0.85rem;\n}\n.status-badge.active {\n  background: var(--color-secondary-bg);\n  color: var(--color-secondary-text);\n}\n.status-badge.inactive {\n  background: var(--color-neutral-300);\n  color: var(--color-neutral-600);\n}\n.card-toggle {\n  margin-left: 8px;\n  background: transparent;\n  color: var(--color-primary-bg);\n  padding: 4px 6px;\n  border-radius: 6px;\n  border: 1px solid var(--color-primary-border);\n}\n.sc-body {\n  font-size: 0.95rem;\n}\n.sc-row {\n  margin: 6px 0;\n}\n.btn {\n  background: var(--color-primary-bg);\n  color: var(--color-primary-text);\n  border: 0;\n  padding: 6px 10px;\n  border-radius: 6px;\n  cursor: pointer;\n}\n.settings-page {\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.fixed-header {\n  position: sticky;\n  top: 0;\n  background: white;\n  z-index: 10;\n  padding: 12px;\n  border-bottom: 1px solid var(--color-neutral-300);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.content-container {\n  flex: 1;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n}\n.content-container::before,\n.content-container::after {\n  content: "";\n  position: absolute;\n  left: 0;\n  right: 0;\n  height: 20px;\n  pointer-events: none;\n  z-index: 5;\n  transition: opacity 0.3s ease;\n}\n.content-container::before {\n  top: 0;\n  background:\n    linear-gradient(\n      to bottom,\n      rgba(255, 255, 255, 0.9),\n      transparent);\n  opacity: 0;\n}\n.content-container::after {\n  bottom: 0;\n  background:\n    linear-gradient(\n      to top,\n      rgba(255, 255, 255, 0.9),\n      transparent);\n  opacity: 0;\n}\n.content-container.has-scroll-top::before {\n  opacity: 1;\n}\n.content-container.has-scroll-bottom::after {\n  opacity: 1;\n}\n.scrollable-grid {\n  flex: 1;\n  overflow-y: auto;\n  overflow-x: hidden;\n  padding: 12px;\n  max-height: calc(100vh - 322px);\n  scrollbar-width: thin;\n  scrollbar-color: var(--color-neutral-400) var(--color-neutral-200);\n  scroll-behavior: smooth;\n  scroll-padding-top: 20px;\n  will-change: scroll-position;\n  transform: translateZ(0);\n  -webkit-overflow-scrolling: touch;\n  scroll-snap-type: y proximity;\n}\n.scrollable-grid::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n.scrollable-grid::-webkit-scrollbar-track {\n  background: var(--color-neutral-100);\n  border-radius: 4px;\n  margin: 4px 0;\n}\n.scrollable-grid::-webkit-scrollbar-thumb {\n  background: var(--color-neutral-400);\n  border-radius: 4px;\n  transition: background-color 0.3s ease;\n}\n.scrollable-grid::-webkit-scrollbar-thumb:hover {\n  background: var(--color-primary-bg);\n}\n.scrollable-grid::-webkit-scrollbar-thumb:active {\n  background: #e6821a;\n}\n.scrollable-grid::-webkit-scrollbar-corner {\n  background: var(--color-neutral-100);\n}\n.scrollable-grid:focus {\n  outline: 2px solid var(--color-primary-bg);\n  outline-offset: -2px;\n}\n.fixed-pagination {\n  position: sticky;\n  bottom: 0;\n  background: white;\n  z-index: 10;\n  border-top: 1px solid var(--color-neutral-300);\n  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px;\n}\n.loading-message,\n.empty-state {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 20px;\n  text-align: center;\n  color: var(--color-neutral-600);\n}\nh3 {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\nh3 i {\n  color: var(--color-primary-bg);\n}\n.p-0 {\n  padding: 0 !important;\n}\n.button-group {\n  display: flex;\n  gap: 12px;\n  align-items: center;\n}\n.customer-details-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.settings-card {\n  scroll-snap-align: start;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.settings-card:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);\n}\n.left-col {\n  text-align: left;\n}\n.right-col {\n  text-align: right;\n}\n.search-container {\n  margin: 12px 0 0 0;\n  padding-bottom: 8px;\n}\n.search-box {\n  position: relative;\n  max-width: 400px;\n  width: 100%;\n}\n.search-input {\n  width: 100%;\n  padding: 10px 40px 10px 36px;\n  border: 1px solid var(--color-neutral-400);\n  border-radius: 8px;\n  font-size: 14px;\n  background: white;\n  transition: border-color 0.3s ease;\n  box-sizing: border-box;\n}\n.search-input:focus {\n  outline: none;\n  border-color: var(--color-primary-bg);\n  box-shadow: 0 0 0 2px rgba(248, 147, 29, 0.1);\n}\n.search-input::placeholder {\n  color: var(--color-neutral-500);\n}\n.search-icon {\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--color-neutral-500);\n  font-size: 14px;\n  pointer-events: none;\n}\n.clear-search {\n  position: absolute;\n  right: 8px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  color: var(--color-neutral-500);\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 4px;\n  font-size: 12px;\n}\n.clear-search:hover {\n  background: var(--color-neutral-200);\n  color: var(--color-neutral-700);\n}\n.no-results {\n  text-align: center;\n  padding: 32px;\n  color: var(--color-neutral-600);\n  font-style: italic;\n}\n.customer-id {\n  font-size: 0.85rem;\n  color: var(--color-neutral-600);\n}\n.error-message {\n  padding: 16px;\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  border-radius: 8px;\n  color: #dc2626;\n  margin: 16px 0;\n}\n.error-message .btn {\n  margin-left: 12px;\n  background: #dc2626;\n}\n.error-message .btn:hover {\n  background: #b91c1c;\n}\n.spinning {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.pagination-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 20px;\n  padding: 16px;\n  border-top: 1px solid var(--color-neutral-300);\n}\n.pagination-info {\n  font-size: 14px;\n  color: var(--color-neutral-600);\n}\n.pagination-controls {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.page-btn {\n  padding: 8px 12px;\n  border: 1px solid var(--color-neutral-400);\n  background: white;\n  color: var(--color-neutral-700);\n  border-radius: 6px;\n  cursor: pointer;\n  font-size: 14px;\n  transition: all 0.3s ease;\n}\n.page-btn:hover:not(:disabled) {\n  background: var(--color-primary-bg);\n  color: white;\n  border-color: var(--color-primary-bg);\n}\n.page-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  background: var(--color-neutral-200);\n}\n.page-btn i {\n  font-size: 12px;\n}\n.page-info {\n  padding: 0 16px;\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--color-neutral-700);\n}\n@media (max-width: 768px) {\n  .pagination-container {\n    flex-direction: column;\n    gap: 12px;\n  }\n  .pagination-info {\n    order: 2;\n  }\n  .pagination-controls {\n    order: 1;\n  }\n  .scrollable-grid {\n    padding: 8px;\n    -webkit-overflow-scrolling: touch;\n    overscroll-behavior: contain;\n  }\n  .scrollable-grid::-webkit-scrollbar {\n    width: 12px;\n  }\n  .settings-card {\n  }\n  .settings-card:hover {\n    transform: none;\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  }\n  .content-container {\n    -webkit-overflow-scrolling: touch;\n  }\n}\n@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {\n  .scrollable-grid::-webkit-scrollbar-thumb {\n    background-image:\n      linear-gradient(\n        45deg,\n        var(--color-primary-bg) 25%,\n        transparent 25%,\n        transparent 75%,\n        var(--color-primary-bg) 75%);\n    background-size: 4px 4px;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .scrollable-grid {\n    scroll-behavior: auto;\n  }\n  .settings-card {\n    transition: none;\n  }\n  .content-container::before,\n  .content-container::after {\n    transition: none;\n  }\n}\n/*# sourceMappingURL=customers.component.css.map */\n'] }]
  }], () => [{ type: HttpClient }, { type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CustomersComponent, { className: "CustomersComponent", filePath: "src/app/components/customers/customers.component.ts", lineNumber: 43 });
})();
export {
  CustomersComponent
};
//# sourceMappingURL=chunk-NB2UTBXN.js.map
