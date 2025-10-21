import {
  BehaviorSubject,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-BZSMQWJC.js";

// src/app/services/toast.service.ts
var ToastService = class _ToastService {
  subj = new BehaviorSubject(null);
  toast$ = this.subj.asObservable();
  lastId = 0;
  show(message, type = "info", ms = 3e3) {
    const id = ++this.lastId;
    this.subj.next({ message, type, id });
    if (ms > 0)
      setTimeout(() => {
        if (this.lastId === id)
          this.clear();
      }, ms);
  }
  clear() {
    this.subj.next(null);
  }
  static \u0275fac = function ToastService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToastService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ToastService, factory: _ToastService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  ToastService
};
//# sourceMappingURL=chunk-RP5NUORX.js.map
