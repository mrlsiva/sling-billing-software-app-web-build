import {
  ToastService
} from "./chunk-RP5NUORX.js";
import {
  AuthService,
  CommonModule,
  Component,
  HttpClient,
  HttpClientModule,
  NgClass,
  NgForOf,
  NgIf,
  Router,
  environment,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵtextInterpolate1
} from "./chunk-BZSMQWJC.js";

// src/app/components/settings-pages/staff/staff.component.ts
function StaffComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Loading...");
    \u0275\u0275elementEnd();
  }
}
function StaffComponent_div_8_article_1_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "strong");
    \u0275\u0275text(2, "Phone:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const it_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", it_r2.phone);
  }
}
function StaffComponent_div_8_article_1_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "strong");
    \u0275\u0275text(2, "Role:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const it_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", it_r2.role);
  }
}
function StaffComponent_div_8_article_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 8)(1, "header", 9)(2, "div", 10);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 11)(5, "span", 12);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 13);
    \u0275\u0275listener("click", function StaffComponent_div_8_article_1_Template_button_click_7_listener($event) {
      const it_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r2.toggleItemActive(it_r2));
    });
    \u0275\u0275element(8, "i", 14);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 15);
    \u0275\u0275template(10, StaffComponent_div_8_article_1_div_10_Template, 4, 1, "div", 16)(11, StaffComponent_div_8_article_1_div_11_Template, 4, 1, "div", 16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const it_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(it_r2.name || it_r2.full_name || "-");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", it_r2.is_active === 1)("inactive", it_r2.is_active !== 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", it_r2.is_active === 1 ? "Active" : "Inactive", " ");
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-pressed", it_r2.is_active === 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", it_r2.is_active === 1 ? "fa-toggle-on" : "fa-toggle-off");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", it_r2.phone);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", it_r2.role);
  }
}
function StaffComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275template(1, StaffComponent_div_8_article_1_Template, 12, 10, "article", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.items);
  }
}
function StaffComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "No items");
    \u0275\u0275elementEnd();
  }
}
var StaffComponent = class _StaffComponent {
  http;
  auth;
  router;
  toast;
  items = [];
  loading = false;
  lastUpdated = null;
  pollTimer = null;
  pollingEnabled = true;
  // static toggle default: on
  constructor(http, auth, router, toast) {
    this.http = http;
    this.auth = auth;
    this.router = router;
    this.toast = toast;
  }
  ngOnInit() {
    this.load();
  }
  ngAfterViewInit() {
    if (this.pollingEnabled)
      this.startPolling();
  }
  startPolling() {
    this.stopPolling();
    this.pollTimer = setInterval(() => this.load(false), 1e4);
  }
  stopPolling() {
    if (this.pollTimer) {
      clearInterval(this.pollTimer);
      this.pollTimer = null;
    }
  }
  togglePolling() {
    this.pollingEnabled = !this.pollingEnabled;
    if (this.pollingEnabled)
      this.startPolling();
    else
      this.stopPolling();
  }
  goBack() {
    try {
      this.router.navigate(["/settings"]);
    } catch {
      history.back();
    }
  }
  ngOnDestroy() {
    this.stopPolling();
  }
  load(showLoading = true) {
    if (showLoading)
      this.loading = true;
    const url = `${environment.apiBase.replace(/\/$/, "")}/staff`;
    this.http.get(url, { headers: this.auth.authHeaders() }).subscribe({ next: (r) => {
      this.items = r?.data ?? r;
      this.loading = false;
      this.lastUpdated = /* @__PURE__ */ new Date();
    }, error: (e) => {
      this.loading = false;
      this.toast.show("Failed to load Staff", "error");
    } });
  }
  /**
   * Toggle active state locally for a staff item (UI-only). This does not call the API.
   */
  toggleItemActive(item) {
    if (!item)
      return;
    item.is_active = item.is_active === 1 ? 0 : 1;
    const state = item.is_active === 1 ? "Active" : "Inactive";
    this.toast.show(`Set ${item.name || item.full_name || "staff"} to ${state}`, "info");
  }
  static \u0275fac = function StaffComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StaffComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StaffComponent, selectors: [["app-settings-staff"]], decls: 10, vars: 3, consts: [[1, "settings-page"], [1, "d-flex", "space-between"], [1, "settings-back", "p-0", 3, "click"], [1, "fa-solid", "fa-arrow-left"], [4, "ngIf"], ["class", "settings-grid", 4, "ngIf"], [1, "settings-grid"], ["class", "settings-card", 4, "ngFor", "ngForOf"], [1, "settings-card"], [1, "sc-header"], [1, "sc-title"], [1, "sc-sno"], [1, "status-badge"], ["aria-label", "Toggle active", 1, "btn", "btn-toggle", "card-toggle", "p-0", 3, "click"], [1, "fa-solid", 3, "ngClass"], [1, "sc-body"], ["class", "sc-row", 4, "ngIf"], [1, "sc-row"]], template: function StaffComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h3");
      \u0275\u0275text(3, "Staff");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "button", 2);
      \u0275\u0275listener("click", function StaffComponent_Template_button_click_4_listener() {
        return ctx.goBack();
      });
      \u0275\u0275element(5, "i", 3);
      \u0275\u0275text(6, " Back");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(7, StaffComponent_div_7_Template, 2, 0, "div", 4)(8, StaffComponent_div_8_Template, 2, 1, "div", 5)(9, StaffComponent_div_9_Template, 2, 0, "div", 4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.items == null ? null : ctx.items.length);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !(ctx.items == null ? null : ctx.items.length) && !ctx.loading);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, HttpClientModule], styles: ["\n\n.page[_ngcontent-%COMP%] {\n  padding: 12px;\n}\n/*# sourceMappingURL=staff.component.css.map */", "\n\n.d-flex[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.space-between[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n.settings-back[_ngcontent-%COMP%] {\n  background: none;\n  border: 0;\n  color: var(--color-primary-bg);\n  margin-bottom: 8px;\n  padding: 6px 0;\n}\n.settings-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  gap: 12px;\n  margin-top: 8px;\n}\n.settings-card[_ngcontent-%COMP%] {\n  background: var(--color-neutral-100);\n  border: 1px solid var(--color-neutral-400);\n  border-radius: 10px;\n  padding: 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.sc-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.sc-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.sc-sno[_ngcontent-%COMP%] {\n  color: var(--color-neutral-600);\n  font-size: 0.9rem;\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n}\n.status-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 8px;\n  border-radius: 999px;\n  font-weight: 600;\n  font-size: 0.85rem;\n}\n.status-badge.active[_ngcontent-%COMP%] {\n  background: var(--color-secondary-bg);\n  color: var(--color-secondary-text);\n}\n.status-badge.inactive[_ngcontent-%COMP%] {\n  background: var(--color-neutral-300);\n  color: var(--color-neutral-600);\n}\n.card-toggle[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  background: transparent;\n  color: var(--color-primary-bg);\n  padding: 4px 6px;\n  border-radius: 6px;\n  border: 1px solid var(--color-primary-border);\n}\n.sc-body[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n}\n.sc-row[_ngcontent-%COMP%] {\n  margin: 6px 0;\n}\n.btn[_ngcontent-%COMP%] {\n  background: var(--color-primary-bg);\n  color: var(--color-primary-text);\n  border: 0;\n  padding: 6px 10px;\n  border-radius: 6px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=settings-common.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StaffComponent, [{
    type: Component,
    args: [{ selector: "app-settings-staff", standalone: true, imports: [CommonModule, HttpClientModule], template: `<div class="settings-page">\r
    <div class="d-flex space-between">\r
        <h3>Staff</h3>\r
        <button class="settings-back p-0" (click)="goBack()"><i class="fa-solid fa-arrow-left"></i> Back</button>\r
    </div>\r
    <div *ngIf="loading">Loading...</div>\r
    <div *ngIf="items?.length" class="settings-grid">\r
        <article *ngFor="let it of items; let i = index" class="settings-card">\r
            <header class="sc-header">\r
                <div class="sc-title">{{ it.name || it.full_name || '-' }}</div>\r
                <div class="sc-sno">\r
                    <span class="status-badge" [class.active]="it.is_active === 1"\r
                        [class.inactive]="it.is_active !== 1">\r
                        {{ it.is_active === 1 ? 'Active' : 'Inactive' }}\r
                    </span>\r
                    <button class="btn btn-toggle card-toggle p-0"\r
                        (click)="$event.stopPropagation(); toggleItemActive(it)"\r
                        [attr.aria-pressed]="it.is_active === 1" aria-label="Toggle active">\r
                        <i class="fa-solid" [ngClass]="it.is_active === 1 ? 'fa-toggle-on' : 'fa-toggle-off'"></i>\r
                    </button>\r
                </div>\r
            </header>\r
            <div class="sc-body">\r
                <div class="sc-row" *ngIf="it.phone"><strong>Phone:</strong> {{ it.phone }}</div>\r
                <div class="sc-row" *ngIf="it.role"><strong>Role:</strong> {{ it.role }}</div>\r
            </div>\r
        </article>\r
    </div>\r
    <div *ngIf="!items?.length && !loading">No items</div>\r
</div>`, styles: ["/* src/app/components/settings-pages/staff/staff.component.scss */\n.page {\n  padding: 12px;\n}\n/*# sourceMappingURL=staff.component.css.map */\n", "/* src/app/components/settings-pages/settings-common.scss */\n.d-flex {\n  display: flex;\n  align-items: center;\n}\n.space-between {\n  justify-content: space-between;\n}\n.settings-back {\n  background: none;\n  border: 0;\n  color: var(--color-primary-bg);\n  margin-bottom: 8px;\n  padding: 6px 0;\n}\n.settings-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  gap: 12px;\n  margin-top: 8px;\n}\n.settings-card {\n  background: var(--color-neutral-100);\n  border: 1px solid var(--color-neutral-400);\n  border-radius: 10px;\n  padding: 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.sc-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.sc-title {\n  font-weight: 700;\n}\n.sc-sno {\n  color: var(--color-neutral-600);\n  font-size: 0.9rem;\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n}\n.status-badge {\n  display: inline-block;\n  padding: 4px 8px;\n  border-radius: 999px;\n  font-weight: 600;\n  font-size: 0.85rem;\n}\n.status-badge.active {\n  background: var(--color-secondary-bg);\n  color: var(--color-secondary-text);\n}\n.status-badge.inactive {\n  background: var(--color-neutral-300);\n  color: var(--color-neutral-600);\n}\n.card-toggle {\n  margin-left: 8px;\n  background: transparent;\n  color: var(--color-primary-bg);\n  padding: 4px 6px;\n  border-radius: 6px;\n  border: 1px solid var(--color-primary-border);\n}\n.sc-body {\n  font-size: 0.95rem;\n}\n.sc-row {\n  margin: 6px 0;\n}\n.btn {\n  background: var(--color-primary-bg);\n  color: var(--color-primary-text);\n  border: 0;\n  padding: 6px 10px;\n  border-radius: 6px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=settings-common.css.map */\n"] }]
  }], () => [{ type: HttpClient }, { type: AuthService }, { type: Router }, { type: ToastService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StaffComponent, { className: "StaffComponent", filePath: "src/app/components/settings-pages/staff/staff.component.ts", lineNumber: 16 });
})();
export {
  StaffComponent
};
//# sourceMappingURL=chunk-MVQGME4P.js.map
