import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-23BXOP6M.js";
import {
  ToastService
} from "./chunk-RP5NUORX.js";
import {
  ANIMATION_MODULE_TYPE,
  APP_INITIALIZER,
  AuthService,
  BrowserModule,
  CartService,
  CommonModule,
  Component,
  DOCUMENT,
  DomRendererFactory2,
  ElementRef,
  HostListener,
  HttpClient,
  Inject,
  Injectable,
  NavigationEnd,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  NgZone,
  Observable,
  RendererFactory2,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
  RuntimeError,
  ViewChild,
  __async,
  __objRest,
  __spreadProps,
  __spreadValues,
  bootstrapApplication,
  catchError,
  environment,
  filter,
  inject,
  map,
  performanceMarkFeature,
  provideHttpClient,
  provideRouter,
  setClassMetadata,
  withComponentInputBinding,
  withInterceptors,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-BZSMQWJC.js";

// src/app/app.component.ts
var AppComponent = class _AppComponent {
  static \u0275fac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "router-outlet");
    }
  }, dependencies: [RouterOutlet], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{
      selector: "app-root",
      standalone: true,
      imports: [RouterOutlet],
      template: `<router-outlet></router-outlet>`
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 11 });
})();

// node_modules/@angular/animations/fesm2022/private_export.mjs
var AnimationMetadataType;
(function(AnimationMetadataType2) {
  AnimationMetadataType2[AnimationMetadataType2["State"] = 0] = "State";
  AnimationMetadataType2[AnimationMetadataType2["Transition"] = 1] = "Transition";
  AnimationMetadataType2[AnimationMetadataType2["Sequence"] = 2] = "Sequence";
  AnimationMetadataType2[AnimationMetadataType2["Group"] = 3] = "Group";
  AnimationMetadataType2[AnimationMetadataType2["Animate"] = 4] = "Animate";
  AnimationMetadataType2[AnimationMetadataType2["Keyframes"] = 5] = "Keyframes";
  AnimationMetadataType2[AnimationMetadataType2["Style"] = 6] = "Style";
  AnimationMetadataType2[AnimationMetadataType2["Trigger"] = 7] = "Trigger";
  AnimationMetadataType2[AnimationMetadataType2["Reference"] = 8] = "Reference";
  AnimationMetadataType2[AnimationMetadataType2["AnimateChild"] = 9] = "AnimateChild";
  AnimationMetadataType2[AnimationMetadataType2["AnimateRef"] = 10] = "AnimateRef";
  AnimationMetadataType2[AnimationMetadataType2["Query"] = 11] = "Query";
  AnimationMetadataType2[AnimationMetadataType2["Stagger"] = 12] = "Stagger";
})(AnimationMetadataType || (AnimationMetadataType = {}));
var AUTO_STYLE = "*";
function sequence(steps, options = null) {
  return { type: AnimationMetadataType.Sequence, steps, options };
}
function style(tokens) {
  return { type: AnimationMetadataType.Style, styles: tokens, offset: null };
}
var NoopAnimationPlayer = class {
  _onDoneFns = [];
  _onStartFns = [];
  _onDestroyFns = [];
  _originalOnDoneFns = [];
  _originalOnStartFns = [];
  _started = false;
  _destroyed = false;
  _finished = false;
  _position = 0;
  parentPlayer = null;
  totalTime;
  constructor(duration = 0, delay = 0) {
    this.totalTime = duration + delay;
  }
  _onFinish() {
    if (!this._finished) {
      this._finished = true;
      this._onDoneFns.forEach((fn) => fn());
      this._onDoneFns = [];
    }
  }
  onStart(fn) {
    this._originalOnStartFns.push(fn);
    this._onStartFns.push(fn);
  }
  onDone(fn) {
    this._originalOnDoneFns.push(fn);
    this._onDoneFns.push(fn);
  }
  onDestroy(fn) {
    this._onDestroyFns.push(fn);
  }
  hasStarted() {
    return this._started;
  }
  init() {
  }
  play() {
    if (!this.hasStarted()) {
      this._onStart();
      this.triggerMicrotask();
    }
    this._started = true;
  }
  /** @internal */
  triggerMicrotask() {
    queueMicrotask(() => this._onFinish());
  }
  _onStart() {
    this._onStartFns.forEach((fn) => fn());
    this._onStartFns = [];
  }
  pause() {
  }
  restart() {
  }
  finish() {
    this._onFinish();
  }
  destroy() {
    if (!this._destroyed) {
      this._destroyed = true;
      if (!this.hasStarted()) {
        this._onStart();
      }
      this.finish();
      this._onDestroyFns.forEach((fn) => fn());
      this._onDestroyFns = [];
    }
  }
  reset() {
    this._started = false;
    this._finished = false;
    this._onStartFns = this._originalOnStartFns;
    this._onDoneFns = this._originalOnDoneFns;
  }
  setPosition(position) {
    this._position = this.totalTime ? position * this.totalTime : 1;
  }
  getPosition() {
    return this.totalTime ? this._position / this.totalTime : 1;
  }
  /** @internal */
  triggerCallback(phaseName) {
    const methods = phaseName == "start" ? this._onStartFns : this._onDoneFns;
    methods.forEach((fn) => fn());
    methods.length = 0;
  }
};
var AnimationGroupPlayer = class {
  _onDoneFns = [];
  _onStartFns = [];
  _finished = false;
  _started = false;
  _destroyed = false;
  _onDestroyFns = [];
  parentPlayer = null;
  totalTime = 0;
  players;
  constructor(_players) {
    this.players = _players;
    let doneCount = 0;
    let destroyCount = 0;
    let startCount = 0;
    const total = this.players.length;
    if (total == 0) {
      queueMicrotask(() => this._onFinish());
    } else {
      this.players.forEach((player) => {
        player.onDone(() => {
          if (++doneCount == total) {
            this._onFinish();
          }
        });
        player.onDestroy(() => {
          if (++destroyCount == total) {
            this._onDestroy();
          }
        });
        player.onStart(() => {
          if (++startCount == total) {
            this._onStart();
          }
        });
      });
    }
    this.totalTime = this.players.reduce((time, player) => Math.max(time, player.totalTime), 0);
  }
  _onFinish() {
    if (!this._finished) {
      this._finished = true;
      this._onDoneFns.forEach((fn) => fn());
      this._onDoneFns = [];
    }
  }
  init() {
    this.players.forEach((player) => player.init());
  }
  onStart(fn) {
    this._onStartFns.push(fn);
  }
  _onStart() {
    if (!this.hasStarted()) {
      this._started = true;
      this._onStartFns.forEach((fn) => fn());
      this._onStartFns = [];
    }
  }
  onDone(fn) {
    this._onDoneFns.push(fn);
  }
  onDestroy(fn) {
    this._onDestroyFns.push(fn);
  }
  hasStarted() {
    return this._started;
  }
  play() {
    if (!this.parentPlayer) {
      this.init();
    }
    this._onStart();
    this.players.forEach((player) => player.play());
  }
  pause() {
    this.players.forEach((player) => player.pause());
  }
  restart() {
    this.players.forEach((player) => player.restart());
  }
  finish() {
    this._onFinish();
    this.players.forEach((player) => player.finish());
  }
  destroy() {
    this._onDestroy();
  }
  _onDestroy() {
    if (!this._destroyed) {
      this._destroyed = true;
      this._onFinish();
      this.players.forEach((player) => player.destroy());
      this._onDestroyFns.forEach((fn) => fn());
      this._onDestroyFns = [];
    }
  }
  reset() {
    this.players.forEach((player) => player.reset());
    this._destroyed = false;
    this._finished = false;
    this._started = false;
  }
  setPosition(p) {
    const timeAtPosition = p * this.totalTime;
    this.players.forEach((player) => {
      const position = player.totalTime ? Math.min(1, timeAtPosition / player.totalTime) : 1;
      player.setPosition(position);
    });
  }
  getPosition() {
    const longestPlayer = this.players.reduce((longestSoFar, player) => {
      const newPlayerIsLongest = longestSoFar === null || player.totalTime > longestSoFar.totalTime;
      return newPlayerIsLongest ? player : longestSoFar;
    }, null);
    return longestPlayer != null ? longestPlayer.getPosition() : 0;
  }
  beforeDestroy() {
    this.players.forEach((player) => {
      if (player.beforeDestroy) {
        player.beforeDestroy();
      }
    });
  }
  /** @internal */
  triggerCallback(phaseName) {
    const methods = phaseName == "start" ? this._onStartFns : this._onDoneFns;
    methods.forEach((fn) => fn());
    methods.length = 0;
  }
};
var \u0275PRE_STYLE = "!";

// node_modules/@angular/animations/fesm2022/util.mjs
var LINE_START = "\n - ";
function invalidTimingValue(exp) {
  return new RuntimeError(3e3, ngDevMode && `The provided timing value "${exp}" is invalid.`);
}
function negativeStepValue() {
  return new RuntimeError(3100, ngDevMode && "Duration values below 0 are not allowed for this animation step.");
}
function negativeDelayValue() {
  return new RuntimeError(3101, ngDevMode && "Delay values below 0 are not allowed for this animation step.");
}
function invalidStyleParams(varName) {
  return new RuntimeError(3001, ngDevMode && `Unable to resolve the local animation param ${varName} in the given list of values`);
}
function invalidParamValue(varName) {
  return new RuntimeError(3003, ngDevMode && `Please provide a value for the animation param ${varName}`);
}
function invalidNodeType(nodeType) {
  return new RuntimeError(3004, ngDevMode && `Unable to resolve animation metadata node #${nodeType}`);
}
function invalidCssUnitValue(userProvidedProperty, value) {
  return new RuntimeError(3005, ngDevMode && `Please provide a CSS unit value for ${userProvidedProperty}:${value}`);
}
function invalidTrigger() {
  return new RuntimeError(3006, ngDevMode && "animation triggers cannot be prefixed with an `@` sign (e.g. trigger('@foo', [...]))");
}
function invalidDefinition() {
  return new RuntimeError(3007, ngDevMode && "only state() and transition() definitions can sit inside of a trigger()");
}
function invalidState(metadataName, missingSubs) {
  return new RuntimeError(3008, ngDevMode && `state("${metadataName}", ...) must define default values for all the following style substitutions: ${missingSubs.join(", ")}`);
}
function invalidStyleValue(value) {
  return new RuntimeError(3002, ngDevMode && `The provided style string value ${value} is not allowed.`);
}
function invalidParallelAnimation(prop, firstStart, firstEnd, secondStart, secondEnd) {
  return new RuntimeError(3010, ngDevMode && `The CSS property "${prop}" that exists between the times of "${firstStart}ms" and "${firstEnd}ms" is also being animated in a parallel animation between the times of "${secondStart}ms" and "${secondEnd}ms"`);
}
function invalidKeyframes() {
  return new RuntimeError(3011, ngDevMode && `keyframes() must be placed inside of a call to animate()`);
}
function invalidOffset() {
  return new RuntimeError(3012, ngDevMode && `Please ensure that all keyframe offsets are between 0 and 1`);
}
function keyframeOffsetsOutOfOrder() {
  return new RuntimeError(3200, ngDevMode && `Please ensure that all keyframe offsets are in order`);
}
function keyframesMissingOffsets() {
  return new RuntimeError(3202, ngDevMode && `Not all style() steps within the declared keyframes() contain offsets`);
}
function invalidStagger() {
  return new RuntimeError(3013, ngDevMode && `stagger() can only be used inside of query()`);
}
function invalidQuery(selector) {
  return new RuntimeError(3014, ngDevMode && `\`query("${selector}")\` returned zero elements. (Use \`query("${selector}", { optional: true })\` if you wish to allow this.)`);
}
function invalidExpression(expr) {
  return new RuntimeError(3015, ngDevMode && `The provided transition expression "${expr}" is not supported`);
}
function invalidTransitionAlias(alias) {
  return new RuntimeError(3016, ngDevMode && `The transition alias value "${alias}" is not supported`);
}
function triggerBuildFailed(name, errors) {
  return new RuntimeError(3404, ngDevMode && `The animation trigger "${name}" has failed to build due to the following errors:
 - ${errors.map((err) => err.message).join("\n - ")}`);
}
function animationFailed(errors) {
  return new RuntimeError(3502, ngDevMode && `Unable to animate due to the following errors:${LINE_START}${errors.map((err) => err.message).join(LINE_START)}`);
}
function registerFailed(errors) {
  return new RuntimeError(3503, ngDevMode && `Unable to build the animation due to the following errors: ${errors.map((err) => err.message).join("\n")}`);
}
function missingOrDestroyedAnimation() {
  return new RuntimeError(3300, ngDevMode && "The requested animation doesn't exist or has already been destroyed");
}
function createAnimationFailed(errors) {
  return new RuntimeError(3504, ngDevMode && `Unable to create the animation due to the following errors:${errors.map((err) => err.message).join("\n")}`);
}
function missingPlayer(id) {
  return new RuntimeError(3301, ngDevMode && `Unable to find the timeline player referenced by ${id}`);
}
function missingTrigger(phase, name) {
  return new RuntimeError(3302, ngDevMode && `Unable to listen on the animation trigger event "${phase}" because the animation trigger "${name}" doesn't exist!`);
}
function missingEvent(name) {
  return new RuntimeError(3303, ngDevMode && `Unable to listen on the animation trigger "${name}" because the provided event is undefined!`);
}
function unsupportedTriggerEvent(phase, name) {
  return new RuntimeError(3400, ngDevMode && `The provided animation trigger event "${phase}" for the animation trigger "${name}" is not supported!`);
}
function unregisteredTrigger(name) {
  return new RuntimeError(3401, ngDevMode && `The provided animation trigger "${name}" has not been registered!`);
}
function triggerTransitionsFailed(errors) {
  return new RuntimeError(3402, ngDevMode && `Unable to process animations due to the following failed trigger transitions
 ${errors.map((err) => err.message).join("\n")}`);
}
function transitionFailed(name, errors) {
  return new RuntimeError(3505, ngDevMode && `@${name} has failed due to:
 ${errors.map((err) => err.message).join("\n- ")}`);
}
var ANIMATABLE_PROP_SET = /* @__PURE__ */ new Set([
  "-moz-outline-radius",
  "-moz-outline-radius-bottomleft",
  "-moz-outline-radius-bottomright",
  "-moz-outline-radius-topleft",
  "-moz-outline-radius-topright",
  "-ms-grid-columns",
  "-ms-grid-rows",
  "-webkit-line-clamp",
  "-webkit-text-fill-color",
  "-webkit-text-stroke",
  "-webkit-text-stroke-color",
  "accent-color",
  "all",
  "backdrop-filter",
  "background",
  "background-color",
  "background-position",
  "background-size",
  "block-size",
  "border",
  "border-block-end",
  "border-block-end-color",
  "border-block-end-width",
  "border-block-start",
  "border-block-start-color",
  "border-block-start-width",
  "border-bottom",
  "border-bottom-color",
  "border-bottom-left-radius",
  "border-bottom-right-radius",
  "border-bottom-width",
  "border-color",
  "border-end-end-radius",
  "border-end-start-radius",
  "border-image-outset",
  "border-image-slice",
  "border-image-width",
  "border-inline-end",
  "border-inline-end-color",
  "border-inline-end-width",
  "border-inline-start",
  "border-inline-start-color",
  "border-inline-start-width",
  "border-left",
  "border-left-color",
  "border-left-width",
  "border-radius",
  "border-right",
  "border-right-color",
  "border-right-width",
  "border-start-end-radius",
  "border-start-start-radius",
  "border-top",
  "border-top-color",
  "border-top-left-radius",
  "border-top-right-radius",
  "border-top-width",
  "border-width",
  "bottom",
  "box-shadow",
  "caret-color",
  "clip",
  "clip-path",
  "color",
  "column-count",
  "column-gap",
  "column-rule",
  "column-rule-color",
  "column-rule-width",
  "column-width",
  "columns",
  "filter",
  "flex",
  "flex-basis",
  "flex-grow",
  "flex-shrink",
  "font",
  "font-size",
  "font-size-adjust",
  "font-stretch",
  "font-variation-settings",
  "font-weight",
  "gap",
  "grid-column-gap",
  "grid-gap",
  "grid-row-gap",
  "grid-template-columns",
  "grid-template-rows",
  "height",
  "inline-size",
  "input-security",
  "inset",
  "inset-block",
  "inset-block-end",
  "inset-block-start",
  "inset-inline",
  "inset-inline-end",
  "inset-inline-start",
  "left",
  "letter-spacing",
  "line-clamp",
  "line-height",
  "margin",
  "margin-block-end",
  "margin-block-start",
  "margin-bottom",
  "margin-inline-end",
  "margin-inline-start",
  "margin-left",
  "margin-right",
  "margin-top",
  "mask",
  "mask-border",
  "mask-position",
  "mask-size",
  "max-block-size",
  "max-height",
  "max-inline-size",
  "max-lines",
  "max-width",
  "min-block-size",
  "min-height",
  "min-inline-size",
  "min-width",
  "object-position",
  "offset",
  "offset-anchor",
  "offset-distance",
  "offset-path",
  "offset-position",
  "offset-rotate",
  "opacity",
  "order",
  "outline",
  "outline-color",
  "outline-offset",
  "outline-width",
  "padding",
  "padding-block-end",
  "padding-block-start",
  "padding-bottom",
  "padding-inline-end",
  "padding-inline-start",
  "padding-left",
  "padding-right",
  "padding-top",
  "perspective",
  "perspective-origin",
  "right",
  "rotate",
  "row-gap",
  "scale",
  "scroll-margin",
  "scroll-margin-block",
  "scroll-margin-block-end",
  "scroll-margin-block-start",
  "scroll-margin-bottom",
  "scroll-margin-inline",
  "scroll-margin-inline-end",
  "scroll-margin-inline-start",
  "scroll-margin-left",
  "scroll-margin-right",
  "scroll-margin-top",
  "scroll-padding",
  "scroll-padding-block",
  "scroll-padding-block-end",
  "scroll-padding-block-start",
  "scroll-padding-bottom",
  "scroll-padding-inline",
  "scroll-padding-inline-end",
  "scroll-padding-inline-start",
  "scroll-padding-left",
  "scroll-padding-right",
  "scroll-padding-top",
  "scroll-snap-coordinate",
  "scroll-snap-destination",
  "scrollbar-color",
  "shape-image-threshold",
  "shape-margin",
  "shape-outside",
  "tab-size",
  "text-decoration",
  "text-decoration-color",
  "text-decoration-thickness",
  "text-emphasis",
  "text-emphasis-color",
  "text-indent",
  "text-shadow",
  "text-underline-offset",
  "top",
  "transform",
  "transform-origin",
  "translate",
  "vertical-align",
  "visibility",
  "width",
  "word-spacing",
  "z-index",
  "zoom"
]);
function optimizeGroupPlayer(players) {
  switch (players.length) {
    case 0:
      return new NoopAnimationPlayer();
    case 1:
      return players[0];
    default:
      return new AnimationGroupPlayer(players);
  }
}
function normalizeKeyframes$1(normalizer, keyframes, preStyles = /* @__PURE__ */ new Map(), postStyles = /* @__PURE__ */ new Map()) {
  const errors = [];
  const normalizedKeyframes = [];
  let previousOffset = -1;
  let previousKeyframe = null;
  keyframes.forEach((kf) => {
    const offset = kf.get("offset");
    const isSameOffset = offset == previousOffset;
    const normalizedKeyframe = isSameOffset && previousKeyframe || /* @__PURE__ */ new Map();
    kf.forEach((val, prop) => {
      let normalizedProp = prop;
      let normalizedValue = val;
      if (prop !== "offset") {
        normalizedProp = normalizer.normalizePropertyName(normalizedProp, errors);
        switch (normalizedValue) {
          case \u0275PRE_STYLE:
            normalizedValue = preStyles.get(prop);
            break;
          case AUTO_STYLE:
            normalizedValue = postStyles.get(prop);
            break;
          default:
            normalizedValue = normalizer.normalizeStyleValue(prop, normalizedProp, normalizedValue, errors);
            break;
        }
      }
      normalizedKeyframe.set(normalizedProp, normalizedValue);
    });
    if (!isSameOffset) {
      normalizedKeyframes.push(normalizedKeyframe);
    }
    previousKeyframe = normalizedKeyframe;
    previousOffset = offset;
  });
  if (errors.length) {
    throw animationFailed(errors);
  }
  return normalizedKeyframes;
}
function listenOnPlayer(player, eventName, event, callback) {
  switch (eventName) {
    case "start":
      player.onStart(() => callback(event && copyAnimationEvent(event, "start", player)));
      break;
    case "done":
      player.onDone(() => callback(event && copyAnimationEvent(event, "done", player)));
      break;
    case "destroy":
      player.onDestroy(() => callback(event && copyAnimationEvent(event, "destroy", player)));
      break;
  }
}
function copyAnimationEvent(e, phaseName, player) {
  const totalTime = player.totalTime;
  const disabled = player.disabled ? true : false;
  const event = makeAnimationEvent(e.element, e.triggerName, e.fromState, e.toState, phaseName || e.phaseName, totalTime == void 0 ? e.totalTime : totalTime, disabled);
  const data = e["_data"];
  if (data != null) {
    event["_data"] = data;
  }
  return event;
}
function makeAnimationEvent(element, triggerName, fromState, toState, phaseName = "", totalTime = 0, disabled) {
  return { element, triggerName, fromState, toState, phaseName, totalTime, disabled: !!disabled };
}
function getOrSetDefaultValue(map2, key, defaultValue) {
  let value = map2.get(key);
  if (!value) {
    map2.set(key, value = defaultValue);
  }
  return value;
}
function parseTimelineCommand(command) {
  const separatorPos = command.indexOf(":");
  const id = command.substring(1, separatorPos);
  const action = command.slice(separatorPos + 1);
  return [id, action];
}
var documentElement = /* @__PURE__ */ (() => typeof document === "undefined" ? null : document.documentElement)();
function getParentElement(element) {
  const parent = element.parentNode || element.host || null;
  if (parent === documentElement) {
    return null;
  }
  return parent;
}
function containsVendorPrefix(prop) {
  return prop.substring(1, 6) == "ebkit";
}
var _CACHED_BODY = null;
var _IS_WEBKIT = false;
function validateStyleProperty(prop) {
  if (!_CACHED_BODY) {
    _CACHED_BODY = getBodyNode() || {};
    _IS_WEBKIT = _CACHED_BODY.style ? "WebkitAppearance" in _CACHED_BODY.style : false;
  }
  let result = true;
  if (_CACHED_BODY.style && !containsVendorPrefix(prop)) {
    result = prop in _CACHED_BODY.style;
    if (!result && _IS_WEBKIT) {
      const camelProp = "Webkit" + prop.charAt(0).toUpperCase() + prop.slice(1);
      result = camelProp in _CACHED_BODY.style;
    }
  }
  return result;
}
function validateWebAnimatableStyleProperty(prop) {
  return ANIMATABLE_PROP_SET.has(prop);
}
function getBodyNode() {
  if (typeof document != "undefined") {
    return document.body;
  }
  return null;
}
function containsElement(elm1, elm2) {
  while (elm2) {
    if (elm2 === elm1) {
      return true;
    }
    elm2 = getParentElement(elm2);
  }
  return false;
}
function invokeQuery(element, selector, multi) {
  if (multi) {
    return Array.from(element.querySelectorAll(selector));
  }
  const elem = element.querySelector(selector);
  return elem ? [elem] : [];
}
var ONE_SECOND = 1e3;
var SUBSTITUTION_EXPR_START = "{{";
var SUBSTITUTION_EXPR_END = "}}";
var ENTER_CLASSNAME = "ng-enter";
var LEAVE_CLASSNAME = "ng-leave";
var NG_TRIGGER_CLASSNAME = "ng-trigger";
var NG_TRIGGER_SELECTOR = ".ng-trigger";
var NG_ANIMATING_CLASSNAME = "ng-animating";
var NG_ANIMATING_SELECTOR = ".ng-animating";
function resolveTimingValue(value) {
  if (typeof value == "number")
    return value;
  const matches = value.match(/^(-?[\.\d]+)(m?s)/);
  if (!matches || matches.length < 2)
    return 0;
  return _convertTimeValueToMS(parseFloat(matches[1]), matches[2]);
}
function _convertTimeValueToMS(value, unit) {
  switch (unit) {
    case "s":
      return value * ONE_SECOND;
    default:
      return value;
  }
}
function resolveTiming(timings, errors, allowNegativeValues) {
  return timings.hasOwnProperty("duration") ? timings : parseTimeExpression(timings, errors, allowNegativeValues);
}
var PARSE_TIME_EXPRESSION_REGEX = /^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i;
function parseTimeExpression(exp, errors, allowNegativeValues) {
  let duration;
  let delay = 0;
  let easing = "";
  if (typeof exp === "string") {
    const matches = exp.match(PARSE_TIME_EXPRESSION_REGEX);
    if (matches === null) {
      errors.push(invalidTimingValue(exp));
      return { duration: 0, delay: 0, easing: "" };
    }
    duration = _convertTimeValueToMS(parseFloat(matches[1]), matches[2]);
    const delayMatch = matches[3];
    if (delayMatch != null) {
      delay = _convertTimeValueToMS(parseFloat(delayMatch), matches[4]);
    }
    const easingVal = matches[5];
    if (easingVal) {
      easing = easingVal;
    }
  } else {
    duration = exp;
  }
  if (!allowNegativeValues) {
    let containsErrors = false;
    let startIndex = errors.length;
    if (duration < 0) {
      errors.push(negativeStepValue());
      containsErrors = true;
    }
    if (delay < 0) {
      errors.push(negativeDelayValue());
      containsErrors = true;
    }
    if (containsErrors) {
      errors.splice(startIndex, 0, invalidTimingValue(exp));
    }
  }
  return { duration, delay, easing };
}
function normalizeKeyframes(keyframes) {
  if (!keyframes.length) {
    return [];
  }
  if (keyframes[0] instanceof Map) {
    return keyframes;
  }
  return keyframes.map((kf) => new Map(Object.entries(kf)));
}
function setStyles(element, styles, formerStyles) {
  styles.forEach((val, prop) => {
    const camelProp = dashCaseToCamelCase(prop);
    if (formerStyles && !formerStyles.has(prop)) {
      formerStyles.set(prop, element.style[camelProp]);
    }
    element.style[camelProp] = val;
  });
}
function eraseStyles(element, styles) {
  styles.forEach((_, prop) => {
    const camelProp = dashCaseToCamelCase(prop);
    element.style[camelProp] = "";
  });
}
function normalizeAnimationEntry(steps) {
  if (Array.isArray(steps)) {
    if (steps.length == 1)
      return steps[0];
    return sequence(steps);
  }
  return steps;
}
function validateStyleParams(value, options, errors) {
  const params = options.params || {};
  const matches = extractStyleParams(value);
  if (matches.length) {
    matches.forEach((varName) => {
      if (!params.hasOwnProperty(varName)) {
        errors.push(invalidStyleParams(varName));
      }
    });
  }
}
var PARAM_REGEX = /* @__PURE__ */ new RegExp(`${SUBSTITUTION_EXPR_START}\\s*(.+?)\\s*${SUBSTITUTION_EXPR_END}`, "g");
function extractStyleParams(value) {
  let params = [];
  if (typeof value === "string") {
    let match;
    while (match = PARAM_REGEX.exec(value)) {
      params.push(match[1]);
    }
    PARAM_REGEX.lastIndex = 0;
  }
  return params;
}
function interpolateParams(value, params, errors) {
  const original = `${value}`;
  const str = original.replace(PARAM_REGEX, (_, varName) => {
    let localVal = params[varName];
    if (localVal == null) {
      errors.push(invalidParamValue(varName));
      localVal = "";
    }
    return localVal.toString();
  });
  return str == original ? value : str;
}
var DASH_CASE_REGEXP = /-+([a-z0-9])/g;
function dashCaseToCamelCase(input) {
  return input.replace(DASH_CASE_REGEXP, (...m) => m[1].toUpperCase());
}
function camelCaseToDashCase(input) {
  return input.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
function allowPreviousPlayerStylesMerge(duration, delay) {
  return duration === 0 || delay === 0;
}
function balancePreviousStylesIntoKeyframes(element, keyframes, previousStyles) {
  if (previousStyles.size && keyframes.length) {
    let startingKeyframe = keyframes[0];
    let missingStyleProps = [];
    previousStyles.forEach((val, prop) => {
      if (!startingKeyframe.has(prop)) {
        missingStyleProps.push(prop);
      }
      startingKeyframe.set(prop, val);
    });
    if (missingStyleProps.length) {
      for (let i = 1; i < keyframes.length; i++) {
        let kf = keyframes[i];
        missingStyleProps.forEach((prop) => kf.set(prop, computeStyle(element, prop)));
      }
    }
  }
  return keyframes;
}
function visitDslNode(visitor, node, context) {
  switch (node.type) {
    case AnimationMetadataType.Trigger:
      return visitor.visitTrigger(node, context);
    case AnimationMetadataType.State:
      return visitor.visitState(node, context);
    case AnimationMetadataType.Transition:
      return visitor.visitTransition(node, context);
    case AnimationMetadataType.Sequence:
      return visitor.visitSequence(node, context);
    case AnimationMetadataType.Group:
      return visitor.visitGroup(node, context);
    case AnimationMetadataType.Animate:
      return visitor.visitAnimate(node, context);
    case AnimationMetadataType.Keyframes:
      return visitor.visitKeyframes(node, context);
    case AnimationMetadataType.Style:
      return visitor.visitStyle(node, context);
    case AnimationMetadataType.Reference:
      return visitor.visitReference(node, context);
    case AnimationMetadataType.AnimateChild:
      return visitor.visitAnimateChild(node, context);
    case AnimationMetadataType.AnimateRef:
      return visitor.visitAnimateRef(node, context);
    case AnimationMetadataType.Query:
      return visitor.visitQuery(node, context);
    case AnimationMetadataType.Stagger:
      return visitor.visitStagger(node, context);
    default:
      throw invalidNodeType(node.type);
  }
}
function computeStyle(element, prop) {
  return window.getComputedStyle(element)[prop];
}

// node_modules/@angular/animations/fesm2022/browser.mjs
var NoopAnimationDriver = class _NoopAnimationDriver {
  /**
   * @returns Whether `prop` is a valid CSS property
   */
  validateStyleProperty(prop) {
    return validateStyleProperty(prop);
  }
  /**
   *
   * @returns Whether elm1 contains elm2.
   */
  containsElement(elm1, elm2) {
    return containsElement(elm1, elm2);
  }
  /**
   * @returns Rhe parent of the given element or `null` if the element is the `document`
   */
  getParentElement(element) {
    return getParentElement(element);
  }
  /**
   * @returns The result of the query selector on the element. The array will contain up to 1 item
   *     if `multi` is  `false`.
   */
  query(element, selector, multi) {
    return invokeQuery(element, selector, multi);
  }
  /**
   * @returns The `defaultValue` or empty string
   */
  computeStyle(element, prop, defaultValue) {
    return defaultValue || "";
  }
  /**
   * @returns An `NoopAnimationPlayer`
   */
  animate(element, keyframes, duration, delay, easing, previousPlayers = [], scrubberAccessRequested) {
    return new NoopAnimationPlayer(duration, delay);
  }
  static \u0275fac = function NoopAnimationDriver_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NoopAnimationDriver)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _NoopAnimationDriver,
    factory: _NoopAnimationDriver.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NoopAnimationDriver, [{
    type: Injectable
  }], null, null);
})();
var AnimationDriver = class {
  /**
   * @deprecated Use the NoopAnimationDriver class.
   */
  static NOOP = new NoopAnimationDriver();
};
var AnimationStyleNormalizer = class {
};
var DIMENSIONAL_PROP_SET = /* @__PURE__ */ new Set(["width", "height", "minWidth", "minHeight", "maxWidth", "maxHeight", "left", "top", "bottom", "right", "fontSize", "outlineWidth", "outlineOffset", "paddingTop", "paddingLeft", "paddingBottom", "paddingRight", "marginTop", "marginLeft", "marginBottom", "marginRight", "borderRadius", "borderWidth", "borderTopWidth", "borderLeftWidth", "borderRightWidth", "borderBottomWidth", "textIndent", "perspective"]);
var WebAnimationsStyleNormalizer = class extends AnimationStyleNormalizer {
  normalizePropertyName(propertyName, errors) {
    return dashCaseToCamelCase(propertyName);
  }
  normalizeStyleValue(userProvidedProperty, normalizedProperty, value, errors) {
    let unit = "";
    const strVal = value.toString().trim();
    if (DIMENSIONAL_PROP_SET.has(normalizedProperty) && value !== 0 && value !== "0") {
      if (typeof value === "number") {
        unit = "px";
      } else {
        const valAndSuffixMatch = value.match(/^[+-]?[\d\.]+([a-z]*)$/);
        if (valAndSuffixMatch && valAndSuffixMatch[1].length == 0) {
          errors.push(invalidCssUnitValue(userProvidedProperty, value));
        }
      }
    }
    return strVal + unit;
  }
};
function createListOfWarnings(warnings) {
  const LINE_START2 = "\n - ";
  return `${LINE_START2}${warnings.filter(Boolean).map((warning) => warning).join(LINE_START2)}`;
}
function warnTriggerBuild(name, warnings) {
  console.warn(`The animation trigger "${name}" has built with the following warnings:${createListOfWarnings(warnings)}`);
}
function warnRegister(warnings) {
  console.warn(`Animation built with the following warnings:${createListOfWarnings(warnings)}`);
}
function pushUnrecognizedPropertiesWarning(warnings, props) {
  if (props.length) {
    warnings.push(`The following provided properties are not recognized: ${props.join(", ")}`);
  }
}
var ANY_STATE = "*";
function parseTransitionExpr(transitionValue, errors) {
  const expressions = [];
  if (typeof transitionValue == "string") {
    transitionValue.split(/\s*,\s*/).forEach((str) => parseInnerTransitionStr(str, expressions, errors));
  } else {
    expressions.push(transitionValue);
  }
  return expressions;
}
function parseInnerTransitionStr(eventStr, expressions, errors) {
  if (eventStr[0] == ":") {
    const result = parseAnimationAlias(eventStr, errors);
    if (typeof result == "function") {
      expressions.push(result);
      return;
    }
    eventStr = result;
  }
  const match = eventStr.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);
  if (match == null || match.length < 4) {
    errors.push(invalidExpression(eventStr));
    return expressions;
  }
  const fromState = match[1];
  const separator = match[2];
  const toState = match[3];
  expressions.push(makeLambdaFromStates(fromState, toState));
  const isFullAnyStateExpr = fromState == ANY_STATE && toState == ANY_STATE;
  if (separator[0] == "<" && !isFullAnyStateExpr) {
    expressions.push(makeLambdaFromStates(toState, fromState));
  }
  return;
}
function parseAnimationAlias(alias, errors) {
  switch (alias) {
    case ":enter":
      return "void => *";
    case ":leave":
      return "* => void";
    case ":increment":
      return (fromState, toState) => parseFloat(toState) > parseFloat(fromState);
    case ":decrement":
      return (fromState, toState) => parseFloat(toState) < parseFloat(fromState);
    default:
      errors.push(invalidTransitionAlias(alias));
      return "* => *";
  }
}
var TRUE_BOOLEAN_VALUES = /* @__PURE__ */ new Set(["true", "1"]);
var FALSE_BOOLEAN_VALUES = /* @__PURE__ */ new Set(["false", "0"]);
function makeLambdaFromStates(lhs, rhs) {
  const LHS_MATCH_BOOLEAN = TRUE_BOOLEAN_VALUES.has(lhs) || FALSE_BOOLEAN_VALUES.has(lhs);
  const RHS_MATCH_BOOLEAN = TRUE_BOOLEAN_VALUES.has(rhs) || FALSE_BOOLEAN_VALUES.has(rhs);
  return (fromState, toState) => {
    let lhsMatch = lhs == ANY_STATE || lhs == fromState;
    let rhsMatch = rhs == ANY_STATE || rhs == toState;
    if (!lhsMatch && LHS_MATCH_BOOLEAN && typeof fromState === "boolean") {
      lhsMatch = fromState ? TRUE_BOOLEAN_VALUES.has(lhs) : FALSE_BOOLEAN_VALUES.has(lhs);
    }
    if (!rhsMatch && RHS_MATCH_BOOLEAN && typeof toState === "boolean") {
      rhsMatch = toState ? TRUE_BOOLEAN_VALUES.has(rhs) : FALSE_BOOLEAN_VALUES.has(rhs);
    }
    return lhsMatch && rhsMatch;
  };
}
var SELF_TOKEN = ":self";
var SELF_TOKEN_REGEX = /* @__PURE__ */ new RegExp(`s*${SELF_TOKEN}s*,?`, "g");
function buildAnimationAst(driver, metadata, errors, warnings) {
  return new AnimationAstBuilderVisitor(driver).build(metadata, errors, warnings);
}
var ROOT_SELECTOR = "";
var AnimationAstBuilderVisitor = class {
  _driver;
  constructor(_driver) {
    this._driver = _driver;
  }
  build(metadata, errors, warnings) {
    const context = new AnimationAstBuilderContext(errors);
    this._resetContextStyleTimingState(context);
    const ast = visitDslNode(this, normalizeAnimationEntry(metadata), context);
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (context.unsupportedCSSPropertiesFound.size) {
        pushUnrecognizedPropertiesWarning(warnings, [...context.unsupportedCSSPropertiesFound.keys()]);
      }
    }
    return ast;
  }
  _resetContextStyleTimingState(context) {
    context.currentQuerySelector = ROOT_SELECTOR;
    context.collectedStyles = /* @__PURE__ */ new Map();
    context.collectedStyles.set(ROOT_SELECTOR, /* @__PURE__ */ new Map());
    context.currentTime = 0;
  }
  visitTrigger(metadata, context) {
    let queryCount = context.queryCount = 0;
    let depCount = context.depCount = 0;
    const states = [];
    const transitions = [];
    if (metadata.name.charAt(0) == "@") {
      context.errors.push(invalidTrigger());
    }
    metadata.definitions.forEach((def) => {
      this._resetContextStyleTimingState(context);
      if (def.type == AnimationMetadataType.State) {
        const stateDef = def;
        const name = stateDef.name;
        name.toString().split(/\s*,\s*/).forEach((n) => {
          stateDef.name = n;
          states.push(this.visitState(stateDef, context));
        });
        stateDef.name = name;
      } else if (def.type == AnimationMetadataType.Transition) {
        const transition = this.visitTransition(def, context);
        queryCount += transition.queryCount;
        depCount += transition.depCount;
        transitions.push(transition);
      } else {
        context.errors.push(invalidDefinition());
      }
    });
    return {
      type: AnimationMetadataType.Trigger,
      name: metadata.name,
      states,
      transitions,
      queryCount,
      depCount,
      options: null
    };
  }
  visitState(metadata, context) {
    const styleAst = this.visitStyle(metadata.styles, context);
    const astParams = metadata.options && metadata.options.params || null;
    if (styleAst.containsDynamicStyles) {
      const missingSubs = /* @__PURE__ */ new Set();
      const params = astParams || {};
      styleAst.styles.forEach((style2) => {
        if (style2 instanceof Map) {
          style2.forEach((value) => {
            extractStyleParams(value).forEach((sub) => {
              if (!params.hasOwnProperty(sub)) {
                missingSubs.add(sub);
              }
            });
          });
        }
      });
      if (missingSubs.size) {
        context.errors.push(invalidState(metadata.name, [...missingSubs.values()]));
      }
    }
    return {
      type: AnimationMetadataType.State,
      name: metadata.name,
      style: styleAst,
      options: astParams ? {
        params: astParams
      } : null
    };
  }
  visitTransition(metadata, context) {
    context.queryCount = 0;
    context.depCount = 0;
    const animation = visitDslNode(this, normalizeAnimationEntry(metadata.animation), context);
    const matchers = parseTransitionExpr(metadata.expr, context.errors);
    return {
      type: AnimationMetadataType.Transition,
      matchers,
      animation,
      queryCount: context.queryCount,
      depCount: context.depCount,
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitSequence(metadata, context) {
    return {
      type: AnimationMetadataType.Sequence,
      steps: metadata.steps.map((s) => visitDslNode(this, s, context)),
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitGroup(metadata, context) {
    const currentTime = context.currentTime;
    let furthestTime = 0;
    const steps = metadata.steps.map((step) => {
      context.currentTime = currentTime;
      const innerAst = visitDslNode(this, step, context);
      furthestTime = Math.max(furthestTime, context.currentTime);
      return innerAst;
    });
    context.currentTime = furthestTime;
    return {
      type: AnimationMetadataType.Group,
      steps,
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitAnimate(metadata, context) {
    const timingAst = constructTimingAst(metadata.timings, context.errors);
    context.currentAnimateTimings = timingAst;
    let styleAst;
    let styleMetadata = metadata.styles ? metadata.styles : style({});
    if (styleMetadata.type == AnimationMetadataType.Keyframes) {
      styleAst = this.visitKeyframes(styleMetadata, context);
    } else {
      let styleMetadata2 = metadata.styles;
      let isEmpty = false;
      if (!styleMetadata2) {
        isEmpty = true;
        const newStyleData = {};
        if (timingAst.easing) {
          newStyleData["easing"] = timingAst.easing;
        }
        styleMetadata2 = style(newStyleData);
      }
      context.currentTime += timingAst.duration + timingAst.delay;
      const _styleAst = this.visitStyle(styleMetadata2, context);
      _styleAst.isEmptyStep = isEmpty;
      styleAst = _styleAst;
    }
    context.currentAnimateTimings = null;
    return {
      type: AnimationMetadataType.Animate,
      timings: timingAst,
      style: styleAst,
      options: null
    };
  }
  visitStyle(metadata, context) {
    const ast = this._makeStyleAst(metadata, context);
    this._validateStyleAst(ast, context);
    return ast;
  }
  _makeStyleAst(metadata, context) {
    const styles = [];
    const metadataStyles = Array.isArray(metadata.styles) ? metadata.styles : [metadata.styles];
    for (let styleTuple of metadataStyles) {
      if (typeof styleTuple === "string") {
        if (styleTuple === AUTO_STYLE) {
          styles.push(styleTuple);
        } else {
          context.errors.push(invalidStyleValue(styleTuple));
        }
      } else {
        styles.push(new Map(Object.entries(styleTuple)));
      }
    }
    let containsDynamicStyles = false;
    let collectedEasing = null;
    styles.forEach((styleData) => {
      if (styleData instanceof Map) {
        if (styleData.has("easing")) {
          collectedEasing = styleData.get("easing");
          styleData.delete("easing");
        }
        if (!containsDynamicStyles) {
          for (let value of styleData.values()) {
            if (value.toString().indexOf(SUBSTITUTION_EXPR_START) >= 0) {
              containsDynamicStyles = true;
              break;
            }
          }
        }
      }
    });
    return {
      type: AnimationMetadataType.Style,
      styles,
      easing: collectedEasing,
      offset: metadata.offset,
      containsDynamicStyles,
      options: null
    };
  }
  _validateStyleAst(ast, context) {
    const timings = context.currentAnimateTimings;
    let endTime = context.currentTime;
    let startTime = context.currentTime;
    if (timings && startTime > 0) {
      startTime -= timings.duration + timings.delay;
    }
    ast.styles.forEach((tuple) => {
      if (typeof tuple === "string") return;
      tuple.forEach((value, prop) => {
        if (typeof ngDevMode === "undefined" || ngDevMode) {
          if (!this._driver.validateStyleProperty(prop)) {
            tuple.delete(prop);
            context.unsupportedCSSPropertiesFound.add(prop);
            return;
          }
        }
        const collectedStyles = context.collectedStyles.get(context.currentQuerySelector);
        const collectedEntry = collectedStyles.get(prop);
        let updateCollectedStyle = true;
        if (collectedEntry) {
          if (startTime != endTime && startTime >= collectedEntry.startTime && endTime <= collectedEntry.endTime) {
            context.errors.push(invalidParallelAnimation(prop, collectedEntry.startTime, collectedEntry.endTime, startTime, endTime));
            updateCollectedStyle = false;
          }
          startTime = collectedEntry.startTime;
        }
        if (updateCollectedStyle) {
          collectedStyles.set(prop, {
            startTime,
            endTime
          });
        }
        if (context.options) {
          validateStyleParams(value, context.options, context.errors);
        }
      });
    });
  }
  visitKeyframes(metadata, context) {
    const ast = {
      type: AnimationMetadataType.Keyframes,
      styles: [],
      options: null
    };
    if (!context.currentAnimateTimings) {
      context.errors.push(invalidKeyframes());
      return ast;
    }
    const MAX_KEYFRAME_OFFSET = 1;
    let totalKeyframesWithOffsets = 0;
    const offsets = [];
    let offsetsOutOfOrder = false;
    let keyframesOutOfRange = false;
    let previousOffset = 0;
    const keyframes = metadata.steps.map((styles) => {
      const style2 = this._makeStyleAst(styles, context);
      let offsetVal = style2.offset != null ? style2.offset : consumeOffset(style2.styles);
      let offset = 0;
      if (offsetVal != null) {
        totalKeyframesWithOffsets++;
        offset = style2.offset = offsetVal;
      }
      keyframesOutOfRange = keyframesOutOfRange || offset < 0 || offset > 1;
      offsetsOutOfOrder = offsetsOutOfOrder || offset < previousOffset;
      previousOffset = offset;
      offsets.push(offset);
      return style2;
    });
    if (keyframesOutOfRange) {
      context.errors.push(invalidOffset());
    }
    if (offsetsOutOfOrder) {
      context.errors.push(keyframeOffsetsOutOfOrder());
    }
    const length = metadata.steps.length;
    let generatedOffset = 0;
    if (totalKeyframesWithOffsets > 0 && totalKeyframesWithOffsets < length) {
      context.errors.push(keyframesMissingOffsets());
    } else if (totalKeyframesWithOffsets == 0) {
      generatedOffset = MAX_KEYFRAME_OFFSET / (length - 1);
    }
    const limit = length - 1;
    const currentTime = context.currentTime;
    const currentAnimateTimings = context.currentAnimateTimings;
    const animateDuration = currentAnimateTimings.duration;
    keyframes.forEach((kf, i) => {
      const offset = generatedOffset > 0 ? i == limit ? 1 : generatedOffset * i : offsets[i];
      const durationUpToThisFrame = offset * animateDuration;
      context.currentTime = currentTime + currentAnimateTimings.delay + durationUpToThisFrame;
      currentAnimateTimings.duration = durationUpToThisFrame;
      this._validateStyleAst(kf, context);
      kf.offset = offset;
      ast.styles.push(kf);
    });
    return ast;
  }
  visitReference(metadata, context) {
    return {
      type: AnimationMetadataType.Reference,
      animation: visitDslNode(this, normalizeAnimationEntry(metadata.animation), context),
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitAnimateChild(metadata, context) {
    context.depCount++;
    return {
      type: AnimationMetadataType.AnimateChild,
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitAnimateRef(metadata, context) {
    return {
      type: AnimationMetadataType.AnimateRef,
      animation: this.visitReference(metadata.animation, context),
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitQuery(metadata, context) {
    const parentSelector = context.currentQuerySelector;
    const options = metadata.options || {};
    context.queryCount++;
    context.currentQuery = metadata;
    const [selector, includeSelf] = normalizeSelector(metadata.selector);
    context.currentQuerySelector = parentSelector.length ? parentSelector + " " + selector : selector;
    getOrSetDefaultValue(context.collectedStyles, context.currentQuerySelector, /* @__PURE__ */ new Map());
    const animation = visitDslNode(this, normalizeAnimationEntry(metadata.animation), context);
    context.currentQuery = null;
    context.currentQuerySelector = parentSelector;
    return {
      type: AnimationMetadataType.Query,
      selector,
      limit: options.limit || 0,
      optional: !!options.optional,
      includeSelf,
      animation,
      originalSelector: metadata.selector,
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitStagger(metadata, context) {
    if (!context.currentQuery) {
      context.errors.push(invalidStagger());
    }
    const timings = metadata.timings === "full" ? {
      duration: 0,
      delay: 0,
      easing: "full"
    } : resolveTiming(metadata.timings, context.errors, true);
    return {
      type: AnimationMetadataType.Stagger,
      animation: visitDslNode(this, normalizeAnimationEntry(metadata.animation), context),
      timings,
      options: null
    };
  }
};
function normalizeSelector(selector) {
  const hasAmpersand = selector.split(/\s*,\s*/).find((token) => token == SELF_TOKEN) ? true : false;
  if (hasAmpersand) {
    selector = selector.replace(SELF_TOKEN_REGEX, "");
  }
  selector = selector.replace(/@\*/g, NG_TRIGGER_SELECTOR).replace(/@\w+/g, (match) => NG_TRIGGER_SELECTOR + "-" + match.slice(1)).replace(/:animating/g, NG_ANIMATING_SELECTOR);
  return [selector, hasAmpersand];
}
function normalizeParams(obj) {
  return obj ? __spreadValues({}, obj) : null;
}
var AnimationAstBuilderContext = class {
  errors;
  queryCount = 0;
  depCount = 0;
  currentTransition = null;
  currentQuery = null;
  currentQuerySelector = null;
  currentAnimateTimings = null;
  currentTime = 0;
  collectedStyles = /* @__PURE__ */ new Map();
  options = null;
  unsupportedCSSPropertiesFound = /* @__PURE__ */ new Set();
  constructor(errors) {
    this.errors = errors;
  }
};
function consumeOffset(styles) {
  if (typeof styles == "string") return null;
  let offset = null;
  if (Array.isArray(styles)) {
    styles.forEach((styleTuple) => {
      if (styleTuple instanceof Map && styleTuple.has("offset")) {
        const obj = styleTuple;
        offset = parseFloat(obj.get("offset"));
        obj.delete("offset");
      }
    });
  } else if (styles instanceof Map && styles.has("offset")) {
    const obj = styles;
    offset = parseFloat(obj.get("offset"));
    obj.delete("offset");
  }
  return offset;
}
function constructTimingAst(value, errors) {
  if (value.hasOwnProperty("duration")) {
    return value;
  }
  if (typeof value == "number") {
    const duration = resolveTiming(value, errors).duration;
    return makeTimingAst(duration, 0, "");
  }
  const strValue = value;
  const isDynamic = strValue.split(/\s+/).some((v) => v.charAt(0) == "{" && v.charAt(1) == "{");
  if (isDynamic) {
    const ast = makeTimingAst(0, 0, "");
    ast.dynamic = true;
    ast.strValue = strValue;
    return ast;
  }
  const timings = resolveTiming(strValue, errors);
  return makeTimingAst(timings.duration, timings.delay, timings.easing);
}
function normalizeAnimationOptions(options) {
  if (options) {
    options = __spreadValues({}, options);
    if (options["params"]) {
      options["params"] = normalizeParams(options["params"]);
    }
  } else {
    options = {};
  }
  return options;
}
function makeTimingAst(duration, delay, easing) {
  return {
    duration,
    delay,
    easing
  };
}
function createTimelineInstruction(element, keyframes, preStyleProps, postStyleProps, duration, delay, easing = null, subTimeline = false) {
  return {
    type: 1,
    element,
    keyframes,
    preStyleProps,
    postStyleProps,
    duration,
    delay,
    totalTime: duration + delay,
    easing,
    subTimeline
  };
}
var ElementInstructionMap = class {
  _map = /* @__PURE__ */ new Map();
  get(element) {
    return this._map.get(element) || [];
  }
  append(element, instructions) {
    let existingInstructions = this._map.get(element);
    if (!existingInstructions) {
      this._map.set(element, existingInstructions = []);
    }
    existingInstructions.push(...instructions);
  }
  has(element) {
    return this._map.has(element);
  }
  clear() {
    this._map.clear();
  }
};
var ONE_FRAME_IN_MILLISECONDS = 1;
var ENTER_TOKEN = ":enter";
var ENTER_TOKEN_REGEX = /* @__PURE__ */ new RegExp(ENTER_TOKEN, "g");
var LEAVE_TOKEN = ":leave";
var LEAVE_TOKEN_REGEX = /* @__PURE__ */ new RegExp(LEAVE_TOKEN, "g");
function buildAnimationTimelines(driver, rootElement, ast, enterClassName, leaveClassName, startingStyles = /* @__PURE__ */ new Map(), finalStyles = /* @__PURE__ */ new Map(), options, subInstructions, errors = []) {
  return new AnimationTimelineBuilderVisitor().buildKeyframes(driver, rootElement, ast, enterClassName, leaveClassName, startingStyles, finalStyles, options, subInstructions, errors);
}
var AnimationTimelineBuilderVisitor = class {
  buildKeyframes(driver, rootElement, ast, enterClassName, leaveClassName, startingStyles, finalStyles, options, subInstructions, errors = []) {
    subInstructions = subInstructions || new ElementInstructionMap();
    const context = new AnimationTimelineContext(driver, rootElement, subInstructions, enterClassName, leaveClassName, errors, []);
    context.options = options;
    const delay = options.delay ? resolveTimingValue(options.delay) : 0;
    context.currentTimeline.delayNextStep(delay);
    context.currentTimeline.setStyles([startingStyles], null, context.errors, options);
    visitDslNode(this, ast, context);
    const timelines = context.timelines.filter((timeline) => timeline.containsAnimation());
    if (timelines.length && finalStyles.size) {
      let lastRootTimeline;
      for (let i = timelines.length - 1; i >= 0; i--) {
        const timeline = timelines[i];
        if (timeline.element === rootElement) {
          lastRootTimeline = timeline;
          break;
        }
      }
      if (lastRootTimeline && !lastRootTimeline.allowOnlyTimelineStyles()) {
        lastRootTimeline.setStyles([finalStyles], null, context.errors, options);
      }
    }
    return timelines.length ? timelines.map((timeline) => timeline.buildKeyframes()) : [createTimelineInstruction(rootElement, [], [], [], 0, delay, "", false)];
  }
  visitTrigger(ast, context) {
  }
  visitState(ast, context) {
  }
  visitTransition(ast, context) {
  }
  visitAnimateChild(ast, context) {
    const elementInstructions = context.subInstructions.get(context.element);
    if (elementInstructions) {
      const innerContext = context.createSubContext(ast.options);
      const startTime = context.currentTimeline.currentTime;
      const endTime = this._visitSubInstructions(elementInstructions, innerContext, innerContext.options);
      if (startTime != endTime) {
        context.transformIntoNewTimeline(endTime);
      }
    }
    context.previousNode = ast;
  }
  visitAnimateRef(ast, context) {
    const innerContext = context.createSubContext(ast.options);
    innerContext.transformIntoNewTimeline();
    this._applyAnimationRefDelays([ast.options, ast.animation.options], context, innerContext);
    this.visitReference(ast.animation, innerContext);
    context.transformIntoNewTimeline(innerContext.currentTimeline.currentTime);
    context.previousNode = ast;
  }
  _applyAnimationRefDelays(animationsRefsOptions, context, innerContext) {
    for (const animationRefOptions of animationsRefsOptions) {
      const animationDelay = animationRefOptions?.delay;
      if (animationDelay) {
        const animationDelayValue = typeof animationDelay === "number" ? animationDelay : resolveTimingValue(interpolateParams(animationDelay, animationRefOptions?.params ?? {}, context.errors));
        innerContext.delayNextStep(animationDelayValue);
      }
    }
  }
  _visitSubInstructions(instructions, context, options) {
    const startTime = context.currentTimeline.currentTime;
    let furthestTime = startTime;
    const duration = options.duration != null ? resolveTimingValue(options.duration) : null;
    const delay = options.delay != null ? resolveTimingValue(options.delay) : null;
    if (duration !== 0) {
      instructions.forEach((instruction) => {
        const instructionTimings = context.appendInstructionToTimeline(instruction, duration, delay);
        furthestTime = Math.max(furthestTime, instructionTimings.duration + instructionTimings.delay);
      });
    }
    return furthestTime;
  }
  visitReference(ast, context) {
    context.updateOptions(ast.options, true);
    visitDslNode(this, ast.animation, context);
    context.previousNode = ast;
  }
  visitSequence(ast, context) {
    const subContextCount = context.subContextCount;
    let ctx = context;
    const options = ast.options;
    if (options && (options.params || options.delay)) {
      ctx = context.createSubContext(options);
      ctx.transformIntoNewTimeline();
      if (options.delay != null) {
        if (ctx.previousNode.type == AnimationMetadataType.Style) {
          ctx.currentTimeline.snapshotCurrentStyles();
          ctx.previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
        }
        const delay = resolveTimingValue(options.delay);
        ctx.delayNextStep(delay);
      }
    }
    if (ast.steps.length) {
      ast.steps.forEach((s) => visitDslNode(this, s, ctx));
      ctx.currentTimeline.applyStylesToKeyframe();
      if (ctx.subContextCount > subContextCount) {
        ctx.transformIntoNewTimeline();
      }
    }
    context.previousNode = ast;
  }
  visitGroup(ast, context) {
    const innerTimelines = [];
    let furthestTime = context.currentTimeline.currentTime;
    const delay = ast.options && ast.options.delay ? resolveTimingValue(ast.options.delay) : 0;
    ast.steps.forEach((s) => {
      const innerContext = context.createSubContext(ast.options);
      if (delay) {
        innerContext.delayNextStep(delay);
      }
      visitDslNode(this, s, innerContext);
      furthestTime = Math.max(furthestTime, innerContext.currentTimeline.currentTime);
      innerTimelines.push(innerContext.currentTimeline);
    });
    innerTimelines.forEach((timeline) => context.currentTimeline.mergeTimelineCollectedStyles(timeline));
    context.transformIntoNewTimeline(furthestTime);
    context.previousNode = ast;
  }
  _visitTiming(ast, context) {
    if (ast.dynamic) {
      const strValue = ast.strValue;
      const timingValue = context.params ? interpolateParams(strValue, context.params, context.errors) : strValue;
      return resolveTiming(timingValue, context.errors);
    } else {
      return {
        duration: ast.duration,
        delay: ast.delay,
        easing: ast.easing
      };
    }
  }
  visitAnimate(ast, context) {
    const timings = context.currentAnimateTimings = this._visitTiming(ast.timings, context);
    const timeline = context.currentTimeline;
    if (timings.delay) {
      context.incrementTime(timings.delay);
      timeline.snapshotCurrentStyles();
    }
    const style2 = ast.style;
    if (style2.type == AnimationMetadataType.Keyframes) {
      this.visitKeyframes(style2, context);
    } else {
      context.incrementTime(timings.duration);
      this.visitStyle(style2, context);
      timeline.applyStylesToKeyframe();
    }
    context.currentAnimateTimings = null;
    context.previousNode = ast;
  }
  visitStyle(ast, context) {
    const timeline = context.currentTimeline;
    const timings = context.currentAnimateTimings;
    if (!timings && timeline.hasCurrentStyleProperties()) {
      timeline.forwardFrame();
    }
    const easing = timings && timings.easing || ast.easing;
    if (ast.isEmptyStep) {
      timeline.applyEmptyStep(easing);
    } else {
      timeline.setStyles(ast.styles, easing, context.errors, context.options);
    }
    context.previousNode = ast;
  }
  visitKeyframes(ast, context) {
    const currentAnimateTimings = context.currentAnimateTimings;
    const startTime = context.currentTimeline.duration;
    const duration = currentAnimateTimings.duration;
    const innerContext = context.createSubContext();
    const innerTimeline = innerContext.currentTimeline;
    innerTimeline.easing = currentAnimateTimings.easing;
    ast.styles.forEach((step) => {
      const offset = step.offset || 0;
      innerTimeline.forwardTime(offset * duration);
      innerTimeline.setStyles(step.styles, step.easing, context.errors, context.options);
      innerTimeline.applyStylesToKeyframe();
    });
    context.currentTimeline.mergeTimelineCollectedStyles(innerTimeline);
    context.transformIntoNewTimeline(startTime + duration);
    context.previousNode = ast;
  }
  visitQuery(ast, context) {
    const startTime = context.currentTimeline.currentTime;
    const options = ast.options || {};
    const delay = options.delay ? resolveTimingValue(options.delay) : 0;
    if (delay && (context.previousNode.type === AnimationMetadataType.Style || startTime == 0 && context.currentTimeline.hasCurrentStyleProperties())) {
      context.currentTimeline.snapshotCurrentStyles();
      context.previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
    }
    let furthestTime = startTime;
    const elms = context.invokeQuery(ast.selector, ast.originalSelector, ast.limit, ast.includeSelf, options.optional ? true : false, context.errors);
    context.currentQueryTotal = elms.length;
    let sameElementTimeline = null;
    elms.forEach((element, i) => {
      context.currentQueryIndex = i;
      const innerContext = context.createSubContext(ast.options, element);
      if (delay) {
        innerContext.delayNextStep(delay);
      }
      if (element === context.element) {
        sameElementTimeline = innerContext.currentTimeline;
      }
      visitDslNode(this, ast.animation, innerContext);
      innerContext.currentTimeline.applyStylesToKeyframe();
      const endTime = innerContext.currentTimeline.currentTime;
      furthestTime = Math.max(furthestTime, endTime);
    });
    context.currentQueryIndex = 0;
    context.currentQueryTotal = 0;
    context.transformIntoNewTimeline(furthestTime);
    if (sameElementTimeline) {
      context.currentTimeline.mergeTimelineCollectedStyles(sameElementTimeline);
      context.currentTimeline.snapshotCurrentStyles();
    }
    context.previousNode = ast;
  }
  visitStagger(ast, context) {
    const parentContext = context.parentContext;
    const tl = context.currentTimeline;
    const timings = ast.timings;
    const duration = Math.abs(timings.duration);
    const maxTime = duration * (context.currentQueryTotal - 1);
    let delay = duration * context.currentQueryIndex;
    let staggerTransformer = timings.duration < 0 ? "reverse" : timings.easing;
    switch (staggerTransformer) {
      case "reverse":
        delay = maxTime - delay;
        break;
      case "full":
        delay = parentContext.currentStaggerTime;
        break;
    }
    const timeline = context.currentTimeline;
    if (delay) {
      timeline.delayNextStep(delay);
    }
    const startingTime = timeline.currentTime;
    visitDslNode(this, ast.animation, context);
    context.previousNode = ast;
    parentContext.currentStaggerTime = tl.currentTime - startingTime + (tl.startTime - parentContext.currentTimeline.startTime);
  }
};
var DEFAULT_NOOP_PREVIOUS_NODE = {};
var AnimationTimelineContext = class _AnimationTimelineContext {
  _driver;
  element;
  subInstructions;
  _enterClassName;
  _leaveClassName;
  errors;
  timelines;
  parentContext = null;
  currentTimeline;
  currentAnimateTimings = null;
  previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
  subContextCount = 0;
  options = {};
  currentQueryIndex = 0;
  currentQueryTotal = 0;
  currentStaggerTime = 0;
  constructor(_driver, element, subInstructions, _enterClassName, _leaveClassName, errors, timelines, initialTimeline) {
    this._driver = _driver;
    this.element = element;
    this.subInstructions = subInstructions;
    this._enterClassName = _enterClassName;
    this._leaveClassName = _leaveClassName;
    this.errors = errors;
    this.timelines = timelines;
    this.currentTimeline = initialTimeline || new TimelineBuilder(this._driver, element, 0);
    timelines.push(this.currentTimeline);
  }
  get params() {
    return this.options.params;
  }
  updateOptions(options, skipIfExists) {
    if (!options) return;
    const newOptions = options;
    let optionsToUpdate = this.options;
    if (newOptions.duration != null) {
      optionsToUpdate.duration = resolveTimingValue(newOptions.duration);
    }
    if (newOptions.delay != null) {
      optionsToUpdate.delay = resolveTimingValue(newOptions.delay);
    }
    const newParams = newOptions.params;
    if (newParams) {
      let paramsToUpdate = optionsToUpdate.params;
      if (!paramsToUpdate) {
        paramsToUpdate = this.options.params = {};
      }
      Object.keys(newParams).forEach((name) => {
        if (!skipIfExists || !paramsToUpdate.hasOwnProperty(name)) {
          paramsToUpdate[name] = interpolateParams(newParams[name], paramsToUpdate, this.errors);
        }
      });
    }
  }
  _copyOptions() {
    const options = {};
    if (this.options) {
      const oldParams = this.options.params;
      if (oldParams) {
        const params = options["params"] = {};
        Object.keys(oldParams).forEach((name) => {
          params[name] = oldParams[name];
        });
      }
    }
    return options;
  }
  createSubContext(options = null, element, newTime) {
    const target = element || this.element;
    const context = new _AnimationTimelineContext(this._driver, target, this.subInstructions, this._enterClassName, this._leaveClassName, this.errors, this.timelines, this.currentTimeline.fork(target, newTime || 0));
    context.previousNode = this.previousNode;
    context.currentAnimateTimings = this.currentAnimateTimings;
    context.options = this._copyOptions();
    context.updateOptions(options);
    context.currentQueryIndex = this.currentQueryIndex;
    context.currentQueryTotal = this.currentQueryTotal;
    context.parentContext = this;
    this.subContextCount++;
    return context;
  }
  transformIntoNewTimeline(newTime) {
    this.previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
    this.currentTimeline = this.currentTimeline.fork(this.element, newTime);
    this.timelines.push(this.currentTimeline);
    return this.currentTimeline;
  }
  appendInstructionToTimeline(instruction, duration, delay) {
    const updatedTimings = {
      duration: duration != null ? duration : instruction.duration,
      delay: this.currentTimeline.currentTime + (delay != null ? delay : 0) + instruction.delay,
      easing: ""
    };
    const builder = new SubTimelineBuilder(this._driver, instruction.element, instruction.keyframes, instruction.preStyleProps, instruction.postStyleProps, updatedTimings, instruction.stretchStartingKeyframe);
    this.timelines.push(builder);
    return updatedTimings;
  }
  incrementTime(time) {
    this.currentTimeline.forwardTime(this.currentTimeline.duration + time);
  }
  delayNextStep(delay) {
    if (delay > 0) {
      this.currentTimeline.delayNextStep(delay);
    }
  }
  invokeQuery(selector, originalSelector, limit, includeSelf, optional, errors) {
    let results = [];
    if (includeSelf) {
      results.push(this.element);
    }
    if (selector.length > 0) {
      selector = selector.replace(ENTER_TOKEN_REGEX, "." + this._enterClassName);
      selector = selector.replace(LEAVE_TOKEN_REGEX, "." + this._leaveClassName);
      const multi = limit != 1;
      let elements = this._driver.query(this.element, selector, multi);
      if (limit !== 0) {
        elements = limit < 0 ? elements.slice(elements.length + limit, elements.length) : elements.slice(0, limit);
      }
      results.push(...elements);
    }
    if (!optional && results.length == 0) {
      errors.push(invalidQuery(originalSelector));
    }
    return results;
  }
};
var TimelineBuilder = class _TimelineBuilder {
  _driver;
  element;
  startTime;
  _elementTimelineStylesLookup;
  duration = 0;
  easing = null;
  _previousKeyframe = /* @__PURE__ */ new Map();
  _currentKeyframe = /* @__PURE__ */ new Map();
  _keyframes = /* @__PURE__ */ new Map();
  _styleSummary = /* @__PURE__ */ new Map();
  _localTimelineStyles = /* @__PURE__ */ new Map();
  _globalTimelineStyles;
  _pendingStyles = /* @__PURE__ */ new Map();
  _backFill = /* @__PURE__ */ new Map();
  _currentEmptyStepKeyframe = null;
  constructor(_driver, element, startTime, _elementTimelineStylesLookup) {
    this._driver = _driver;
    this.element = element;
    this.startTime = startTime;
    this._elementTimelineStylesLookup = _elementTimelineStylesLookup;
    if (!this._elementTimelineStylesLookup) {
      this._elementTimelineStylesLookup = /* @__PURE__ */ new Map();
    }
    this._globalTimelineStyles = this._elementTimelineStylesLookup.get(element);
    if (!this._globalTimelineStyles) {
      this._globalTimelineStyles = this._localTimelineStyles;
      this._elementTimelineStylesLookup.set(element, this._localTimelineStyles);
    }
    this._loadKeyframe();
  }
  containsAnimation() {
    switch (this._keyframes.size) {
      case 0:
        return false;
      case 1:
        return this.hasCurrentStyleProperties();
      default:
        return true;
    }
  }
  hasCurrentStyleProperties() {
    return this._currentKeyframe.size > 0;
  }
  get currentTime() {
    return this.startTime + this.duration;
  }
  delayNextStep(delay) {
    const hasPreStyleStep = this._keyframes.size === 1 && this._pendingStyles.size;
    if (this.duration || hasPreStyleStep) {
      this.forwardTime(this.currentTime + delay);
      if (hasPreStyleStep) {
        this.snapshotCurrentStyles();
      }
    } else {
      this.startTime += delay;
    }
  }
  fork(element, currentTime) {
    this.applyStylesToKeyframe();
    return new _TimelineBuilder(this._driver, element, currentTime || this.currentTime, this._elementTimelineStylesLookup);
  }
  _loadKeyframe() {
    if (this._currentKeyframe) {
      this._previousKeyframe = this._currentKeyframe;
    }
    this._currentKeyframe = this._keyframes.get(this.duration);
    if (!this._currentKeyframe) {
      this._currentKeyframe = /* @__PURE__ */ new Map();
      this._keyframes.set(this.duration, this._currentKeyframe);
    }
  }
  forwardFrame() {
    this.duration += ONE_FRAME_IN_MILLISECONDS;
    this._loadKeyframe();
  }
  forwardTime(time) {
    this.applyStylesToKeyframe();
    this.duration = time;
    this._loadKeyframe();
  }
  _updateStyle(prop, value) {
    this._localTimelineStyles.set(prop, value);
    this._globalTimelineStyles.set(prop, value);
    this._styleSummary.set(prop, {
      time: this.currentTime,
      value
    });
  }
  allowOnlyTimelineStyles() {
    return this._currentEmptyStepKeyframe !== this._currentKeyframe;
  }
  applyEmptyStep(easing) {
    if (easing) {
      this._previousKeyframe.set("easing", easing);
    }
    for (let [prop, value] of this._globalTimelineStyles) {
      this._backFill.set(prop, value || AUTO_STYLE);
      this._currentKeyframe.set(prop, AUTO_STYLE);
    }
    this._currentEmptyStepKeyframe = this._currentKeyframe;
  }
  setStyles(input, easing, errors, options) {
    if (easing) {
      this._previousKeyframe.set("easing", easing);
    }
    const params = options && options.params || {};
    const styles = flattenStyles(input, this._globalTimelineStyles);
    for (let [prop, value] of styles) {
      const val = interpolateParams(value, params, errors);
      this._pendingStyles.set(prop, val);
      if (!this._localTimelineStyles.has(prop)) {
        this._backFill.set(prop, this._globalTimelineStyles.get(prop) ?? AUTO_STYLE);
      }
      this._updateStyle(prop, val);
    }
  }
  applyStylesToKeyframe() {
    if (this._pendingStyles.size == 0) return;
    this._pendingStyles.forEach((val, prop) => {
      this._currentKeyframe.set(prop, val);
    });
    this._pendingStyles.clear();
    this._localTimelineStyles.forEach((val, prop) => {
      if (!this._currentKeyframe.has(prop)) {
        this._currentKeyframe.set(prop, val);
      }
    });
  }
  snapshotCurrentStyles() {
    for (let [prop, val] of this._localTimelineStyles) {
      this._pendingStyles.set(prop, val);
      this._updateStyle(prop, val);
    }
  }
  getFinalKeyframe() {
    return this._keyframes.get(this.duration);
  }
  get properties() {
    const properties = [];
    for (let prop in this._currentKeyframe) {
      properties.push(prop);
    }
    return properties;
  }
  mergeTimelineCollectedStyles(timeline) {
    timeline._styleSummary.forEach((details1, prop) => {
      const details0 = this._styleSummary.get(prop);
      if (!details0 || details1.time > details0.time) {
        this._updateStyle(prop, details1.value);
      }
    });
  }
  buildKeyframes() {
    this.applyStylesToKeyframe();
    const preStyleProps = /* @__PURE__ */ new Set();
    const postStyleProps = /* @__PURE__ */ new Set();
    const isEmpty = this._keyframes.size === 1 && this.duration === 0;
    let finalKeyframes = [];
    this._keyframes.forEach((keyframe, time) => {
      const finalKeyframe = new Map([...this._backFill, ...keyframe]);
      finalKeyframe.forEach((value, prop) => {
        if (value === \u0275PRE_STYLE) {
          preStyleProps.add(prop);
        } else if (value === AUTO_STYLE) {
          postStyleProps.add(prop);
        }
      });
      if (!isEmpty) {
        finalKeyframe.set("offset", time / this.duration);
      }
      finalKeyframes.push(finalKeyframe);
    });
    const preProps = [...preStyleProps.values()];
    const postProps = [...postStyleProps.values()];
    if (isEmpty) {
      const kf0 = finalKeyframes[0];
      const kf1 = new Map(kf0);
      kf0.set("offset", 0);
      kf1.set("offset", 1);
      finalKeyframes = [kf0, kf1];
    }
    return createTimelineInstruction(this.element, finalKeyframes, preProps, postProps, this.duration, this.startTime, this.easing, false);
  }
};
var SubTimelineBuilder = class extends TimelineBuilder {
  keyframes;
  preStyleProps;
  postStyleProps;
  _stretchStartingKeyframe;
  timings;
  constructor(driver, element, keyframes, preStyleProps, postStyleProps, timings, _stretchStartingKeyframe = false) {
    super(driver, element, timings.delay);
    this.keyframes = keyframes;
    this.preStyleProps = preStyleProps;
    this.postStyleProps = postStyleProps;
    this._stretchStartingKeyframe = _stretchStartingKeyframe;
    this.timings = {
      duration: timings.duration,
      delay: timings.delay,
      easing: timings.easing
    };
  }
  containsAnimation() {
    return this.keyframes.length > 1;
  }
  buildKeyframes() {
    let keyframes = this.keyframes;
    let {
      delay,
      duration,
      easing
    } = this.timings;
    if (this._stretchStartingKeyframe && delay) {
      const newKeyframes = [];
      const totalTime = duration + delay;
      const startingGap = delay / totalTime;
      const newFirstKeyframe = new Map(keyframes[0]);
      newFirstKeyframe.set("offset", 0);
      newKeyframes.push(newFirstKeyframe);
      const oldFirstKeyframe = new Map(keyframes[0]);
      oldFirstKeyframe.set("offset", roundOffset(startingGap));
      newKeyframes.push(oldFirstKeyframe);
      const limit = keyframes.length - 1;
      for (let i = 1; i <= limit; i++) {
        let kf = new Map(keyframes[i]);
        const oldOffset = kf.get("offset");
        const timeAtKeyframe = delay + oldOffset * duration;
        kf.set("offset", roundOffset(timeAtKeyframe / totalTime));
        newKeyframes.push(kf);
      }
      duration = totalTime;
      delay = 0;
      easing = "";
      keyframes = newKeyframes;
    }
    return createTimelineInstruction(this.element, keyframes, this.preStyleProps, this.postStyleProps, duration, delay, easing, true);
  }
};
function roundOffset(offset, decimalPoints = 3) {
  const mult = Math.pow(10, decimalPoints - 1);
  return Math.round(offset * mult) / mult;
}
function flattenStyles(input, allStyles) {
  const styles = /* @__PURE__ */ new Map();
  let allProperties;
  input.forEach((token) => {
    if (token === "*") {
      allProperties ??= allStyles.keys();
      for (let prop of allProperties) {
        styles.set(prop, AUTO_STYLE);
      }
    } else {
      for (let [prop, val] of token) {
        styles.set(prop, val);
      }
    }
  });
  return styles;
}
function createTransitionInstruction(element, triggerName, fromState, toState, isRemovalTransition, fromStyles, toStyles, timelines, queriedElements, preStyleProps, postStyleProps, totalTime, errors) {
  return {
    type: 0,
    element,
    triggerName,
    isRemovalTransition,
    fromState,
    fromStyles,
    toState,
    toStyles,
    timelines,
    queriedElements,
    preStyleProps,
    postStyleProps,
    totalTime,
    errors
  };
}
var EMPTY_OBJECT = {};
var AnimationTransitionFactory = class {
  _triggerName;
  ast;
  _stateStyles;
  constructor(_triggerName, ast, _stateStyles) {
    this._triggerName = _triggerName;
    this.ast = ast;
    this._stateStyles = _stateStyles;
  }
  match(currentState, nextState, element, params) {
    return oneOrMoreTransitionsMatch(this.ast.matchers, currentState, nextState, element, params);
  }
  buildStyles(stateName, params, errors) {
    let styler = this._stateStyles.get("*");
    if (stateName !== void 0) {
      styler = this._stateStyles.get(stateName?.toString()) || styler;
    }
    return styler ? styler.buildStyles(params, errors) : /* @__PURE__ */ new Map();
  }
  build(driver, element, currentState, nextState, enterClassName, leaveClassName, currentOptions, nextOptions, subInstructions, skipAstBuild) {
    const errors = [];
    const transitionAnimationParams = this.ast.options && this.ast.options.params || EMPTY_OBJECT;
    const currentAnimationParams = currentOptions && currentOptions.params || EMPTY_OBJECT;
    const currentStateStyles = this.buildStyles(currentState, currentAnimationParams, errors);
    const nextAnimationParams = nextOptions && nextOptions.params || EMPTY_OBJECT;
    const nextStateStyles = this.buildStyles(nextState, nextAnimationParams, errors);
    const queriedElements = /* @__PURE__ */ new Set();
    const preStyleMap = /* @__PURE__ */ new Map();
    const postStyleMap = /* @__PURE__ */ new Map();
    const isRemoval = nextState === "void";
    const animationOptions = {
      params: applyParamDefaults(nextAnimationParams, transitionAnimationParams),
      delay: this.ast.options?.delay
    };
    const timelines = skipAstBuild ? [] : buildAnimationTimelines(driver, element, this.ast.animation, enterClassName, leaveClassName, currentStateStyles, nextStateStyles, animationOptions, subInstructions, errors);
    let totalTime = 0;
    timelines.forEach((tl) => {
      totalTime = Math.max(tl.duration + tl.delay, totalTime);
    });
    if (errors.length) {
      return createTransitionInstruction(element, this._triggerName, currentState, nextState, isRemoval, currentStateStyles, nextStateStyles, [], [], preStyleMap, postStyleMap, totalTime, errors);
    }
    timelines.forEach((tl) => {
      const elm = tl.element;
      const preProps = getOrSetDefaultValue(preStyleMap, elm, /* @__PURE__ */ new Set());
      tl.preStyleProps.forEach((prop) => preProps.add(prop));
      const postProps = getOrSetDefaultValue(postStyleMap, elm, /* @__PURE__ */ new Set());
      tl.postStyleProps.forEach((prop) => postProps.add(prop));
      if (elm !== element) {
        queriedElements.add(elm);
      }
    });
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      checkNonAnimatableInTimelines(timelines, this._triggerName, driver);
    }
    return createTransitionInstruction(element, this._triggerName, currentState, nextState, isRemoval, currentStateStyles, nextStateStyles, timelines, [...queriedElements.values()], preStyleMap, postStyleMap, totalTime);
  }
};
function checkNonAnimatableInTimelines(timelines, triggerName, driver) {
  if (!driver.validateAnimatableStyleProperty) {
    return;
  }
  const allowedNonAnimatableProps = /* @__PURE__ */ new Set([
    // 'easing' is a utility/synthetic prop we use to represent
    // easing functions, it represents a property of the animation
    // which is not animatable but different values can be used
    // in different steps
    "easing"
  ]);
  const invalidNonAnimatableProps = /* @__PURE__ */ new Set();
  timelines.forEach(({
    keyframes
  }) => {
    const nonAnimatablePropsInitialValues = /* @__PURE__ */ new Map();
    keyframes.forEach((keyframe) => {
      const entriesToCheck = Array.from(keyframe.entries()).filter(([prop]) => !allowedNonAnimatableProps.has(prop));
      for (const [prop, value] of entriesToCheck) {
        if (!driver.validateAnimatableStyleProperty(prop)) {
          if (nonAnimatablePropsInitialValues.has(prop) && !invalidNonAnimatableProps.has(prop)) {
            const propInitialValue = nonAnimatablePropsInitialValues.get(prop);
            if (propInitialValue !== value) {
              invalidNonAnimatableProps.add(prop);
            }
          } else {
            nonAnimatablePropsInitialValues.set(prop, value);
          }
        }
      }
    });
  });
  if (invalidNonAnimatableProps.size > 0) {
    console.warn(`Warning: The animation trigger "${triggerName}" is attempting to animate the following not animatable properties: ` + Array.from(invalidNonAnimatableProps).join(", ") + "\n(to check the list of all animatable properties visit https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties)");
  }
}
function oneOrMoreTransitionsMatch(matchFns, currentState, nextState, element, params) {
  return matchFns.some((fn) => fn(currentState, nextState, element, params));
}
function applyParamDefaults(userParams, defaults) {
  const result = __spreadValues({}, defaults);
  Object.entries(userParams).forEach(([key, value]) => {
    if (value != null) {
      result[key] = value;
    }
  });
  return result;
}
var AnimationStateStyles = class {
  styles;
  defaultParams;
  normalizer;
  constructor(styles, defaultParams, normalizer) {
    this.styles = styles;
    this.defaultParams = defaultParams;
    this.normalizer = normalizer;
  }
  buildStyles(params, errors) {
    const finalStyles = /* @__PURE__ */ new Map();
    const combinedParams = applyParamDefaults(params, this.defaultParams);
    this.styles.styles.forEach((value) => {
      if (typeof value !== "string") {
        value.forEach((val, prop) => {
          if (val) {
            val = interpolateParams(val, combinedParams, errors);
          }
          const normalizedProp = this.normalizer.normalizePropertyName(prop, errors);
          val = this.normalizer.normalizeStyleValue(prop, normalizedProp, val, errors);
          finalStyles.set(prop, val);
        });
      }
    });
    return finalStyles;
  }
};
function buildTrigger(name, ast, normalizer) {
  return new AnimationTrigger(name, ast, normalizer);
}
var AnimationTrigger = class {
  name;
  ast;
  _normalizer;
  transitionFactories = [];
  fallbackTransition;
  states = /* @__PURE__ */ new Map();
  constructor(name, ast, _normalizer) {
    this.name = name;
    this.ast = ast;
    this._normalizer = _normalizer;
    ast.states.forEach((ast2) => {
      const defaultParams = ast2.options && ast2.options.params || {};
      this.states.set(ast2.name, new AnimationStateStyles(ast2.style, defaultParams, _normalizer));
    });
    balanceProperties(this.states, "true", "1");
    balanceProperties(this.states, "false", "0");
    ast.transitions.forEach((ast2) => {
      this.transitionFactories.push(new AnimationTransitionFactory(name, ast2, this.states));
    });
    this.fallbackTransition = createFallbackTransition(name, this.states);
  }
  get containsQueries() {
    return this.ast.queryCount > 0;
  }
  matchTransition(currentState, nextState, element, params) {
    const entry = this.transitionFactories.find((f) => f.match(currentState, nextState, element, params));
    return entry || null;
  }
  matchStyles(currentState, params, errors) {
    return this.fallbackTransition.buildStyles(currentState, params, errors);
  }
};
function createFallbackTransition(triggerName, states, normalizer) {
  const matchers = [(fromState, toState) => true];
  const animation = {
    type: AnimationMetadataType.Sequence,
    steps: [],
    options: null
  };
  const transition = {
    type: AnimationMetadataType.Transition,
    animation,
    matchers,
    options: null,
    queryCount: 0,
    depCount: 0
  };
  return new AnimationTransitionFactory(triggerName, transition, states);
}
function balanceProperties(stateMap, key1, key2) {
  if (stateMap.has(key1)) {
    if (!stateMap.has(key2)) {
      stateMap.set(key2, stateMap.get(key1));
    }
  } else if (stateMap.has(key2)) {
    stateMap.set(key1, stateMap.get(key2));
  }
}
var EMPTY_INSTRUCTION_MAP = /* @__PURE__ */ new ElementInstructionMap();
var TimelineAnimationEngine = class {
  bodyNode;
  _driver;
  _normalizer;
  _animations = /* @__PURE__ */ new Map();
  _playersById = /* @__PURE__ */ new Map();
  players = [];
  constructor(bodyNode, _driver, _normalizer) {
    this.bodyNode = bodyNode;
    this._driver = _driver;
    this._normalizer = _normalizer;
  }
  register(id, metadata) {
    const errors = [];
    const warnings = [];
    const ast = buildAnimationAst(this._driver, metadata, errors, warnings);
    if (errors.length) {
      throw registerFailed(errors);
    } else {
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        if (warnings.length) {
          warnRegister(warnings);
        }
      }
      this._animations.set(id, ast);
    }
  }
  _buildPlayer(i, preStyles, postStyles) {
    const element = i.element;
    const keyframes = normalizeKeyframes$1(this._normalizer, i.keyframes, preStyles, postStyles);
    return this._driver.animate(element, keyframes, i.duration, i.delay, i.easing, [], true);
  }
  create(id, element, options = {}) {
    const errors = [];
    const ast = this._animations.get(id);
    let instructions;
    const autoStylesMap = /* @__PURE__ */ new Map();
    if (ast) {
      instructions = buildAnimationTimelines(this._driver, element, ast, ENTER_CLASSNAME, LEAVE_CLASSNAME, /* @__PURE__ */ new Map(), /* @__PURE__ */ new Map(), options, EMPTY_INSTRUCTION_MAP, errors);
      instructions.forEach((inst) => {
        const styles = getOrSetDefaultValue(autoStylesMap, inst.element, /* @__PURE__ */ new Map());
        inst.postStyleProps.forEach((prop) => styles.set(prop, null));
      });
    } else {
      errors.push(missingOrDestroyedAnimation());
      instructions = [];
    }
    if (errors.length) {
      throw createAnimationFailed(errors);
    }
    autoStylesMap.forEach((styles, element2) => {
      styles.forEach((_, prop) => {
        styles.set(prop, this._driver.computeStyle(element2, prop, AUTO_STYLE));
      });
    });
    const players = instructions.map((i) => {
      const styles = autoStylesMap.get(i.element);
      return this._buildPlayer(i, /* @__PURE__ */ new Map(), styles);
    });
    const player = optimizeGroupPlayer(players);
    this._playersById.set(id, player);
    player.onDestroy(() => this.destroy(id));
    this.players.push(player);
    return player;
  }
  destroy(id) {
    const player = this._getPlayer(id);
    player.destroy();
    this._playersById.delete(id);
    const index = this.players.indexOf(player);
    if (index >= 0) {
      this.players.splice(index, 1);
    }
  }
  _getPlayer(id) {
    const player = this._playersById.get(id);
    if (!player) {
      throw missingPlayer(id);
    }
    return player;
  }
  listen(id, element, eventName, callback) {
    const baseEvent = makeAnimationEvent(element, "", "", "");
    listenOnPlayer(this._getPlayer(id), eventName, baseEvent, callback);
    return () => {
    };
  }
  command(id, element, command, args) {
    if (command == "register") {
      this.register(id, args[0]);
      return;
    }
    if (command == "create") {
      const options = args[0] || {};
      this.create(id, element, options);
      return;
    }
    const player = this._getPlayer(id);
    switch (command) {
      case "play":
        player.play();
        break;
      case "pause":
        player.pause();
        break;
      case "reset":
        player.reset();
        break;
      case "restart":
        player.restart();
        break;
      case "finish":
        player.finish();
        break;
      case "init":
        player.init();
        break;
      case "setPosition":
        player.setPosition(parseFloat(args[0]));
        break;
      case "destroy":
        this.destroy(id);
        break;
    }
  }
};
var QUEUED_CLASSNAME = "ng-animate-queued";
var QUEUED_SELECTOR = ".ng-animate-queued";
var DISABLED_CLASSNAME = "ng-animate-disabled";
var DISABLED_SELECTOR = ".ng-animate-disabled";
var STAR_CLASSNAME = "ng-star-inserted";
var STAR_SELECTOR = ".ng-star-inserted";
var EMPTY_PLAYER_ARRAY = [];
var NULL_REMOVAL_STATE = {
  namespaceId: "",
  setForRemoval: false,
  setForMove: false,
  hasAnimation: false,
  removedBeforeQueried: false
};
var NULL_REMOVED_QUERIED_STATE = {
  namespaceId: "",
  setForMove: false,
  setForRemoval: false,
  hasAnimation: false,
  removedBeforeQueried: true
};
var REMOVAL_FLAG = "__ng_removed";
var StateValue = class {
  namespaceId;
  value;
  options;
  get params() {
    return this.options.params;
  }
  constructor(input, namespaceId = "") {
    this.namespaceId = namespaceId;
    const isObj = input && input.hasOwnProperty("value");
    const value = isObj ? input["value"] : input;
    this.value = normalizeTriggerValue(value);
    if (isObj) {
      const _a = input, {
        value: value2
      } = _a, options = __objRest(_a, [
        "value"
      ]);
      this.options = options;
    } else {
      this.options = {};
    }
    if (!this.options.params) {
      this.options.params = {};
    }
  }
  absorbOptions(options) {
    const newParams = options.params;
    if (newParams) {
      const oldParams = this.options.params;
      Object.keys(newParams).forEach((prop) => {
        if (oldParams[prop] == null) {
          oldParams[prop] = newParams[prop];
        }
      });
    }
  }
};
var VOID_VALUE = "void";
var DEFAULT_STATE_VALUE = /* @__PURE__ */ new StateValue(VOID_VALUE);
var AnimationTransitionNamespace = class {
  id;
  hostElement;
  _engine;
  players = [];
  _triggers = /* @__PURE__ */ new Map();
  _queue = [];
  _elementListeners = /* @__PURE__ */ new Map();
  _hostClassName;
  constructor(id, hostElement, _engine) {
    this.id = id;
    this.hostElement = hostElement;
    this._engine = _engine;
    this._hostClassName = "ng-tns-" + id;
    addClass(hostElement, this._hostClassName);
  }
  listen(element, name, phase, callback) {
    if (!this._triggers.has(name)) {
      throw missingTrigger(phase, name);
    }
    if (phase == null || phase.length == 0) {
      throw missingEvent(name);
    }
    if (!isTriggerEventValid(phase)) {
      throw unsupportedTriggerEvent(phase, name);
    }
    const listeners = getOrSetDefaultValue(this._elementListeners, element, []);
    const data = {
      name,
      phase,
      callback
    };
    listeners.push(data);
    const triggersWithStates = getOrSetDefaultValue(this._engine.statesByElement, element, /* @__PURE__ */ new Map());
    if (!triggersWithStates.has(name)) {
      addClass(element, NG_TRIGGER_CLASSNAME);
      addClass(element, NG_TRIGGER_CLASSNAME + "-" + name);
      triggersWithStates.set(name, DEFAULT_STATE_VALUE);
    }
    return () => {
      this._engine.afterFlush(() => {
        const index = listeners.indexOf(data);
        if (index >= 0) {
          listeners.splice(index, 1);
        }
        if (!this._triggers.has(name)) {
          triggersWithStates.delete(name);
        }
      });
    };
  }
  register(name, ast) {
    if (this._triggers.has(name)) {
      return false;
    } else {
      this._triggers.set(name, ast);
      return true;
    }
  }
  _getTrigger(name) {
    const trigger = this._triggers.get(name);
    if (!trigger) {
      throw unregisteredTrigger(name);
    }
    return trigger;
  }
  trigger(element, triggerName, value, defaultToFallback = true) {
    const trigger = this._getTrigger(triggerName);
    const player = new TransitionAnimationPlayer(this.id, triggerName, element);
    let triggersWithStates = this._engine.statesByElement.get(element);
    if (!triggersWithStates) {
      addClass(element, NG_TRIGGER_CLASSNAME);
      addClass(element, NG_TRIGGER_CLASSNAME + "-" + triggerName);
      this._engine.statesByElement.set(element, triggersWithStates = /* @__PURE__ */ new Map());
    }
    let fromState = triggersWithStates.get(triggerName);
    const toState = new StateValue(value, this.id);
    const isObj = value && value.hasOwnProperty("value");
    if (!isObj && fromState) {
      toState.absorbOptions(fromState.options);
    }
    triggersWithStates.set(triggerName, toState);
    if (!fromState) {
      fromState = DEFAULT_STATE_VALUE;
    }
    const isRemoval = toState.value === VOID_VALUE;
    if (!isRemoval && fromState.value === toState.value) {
      if (!objEquals(fromState.params, toState.params)) {
        const errors = [];
        const fromStyles = trigger.matchStyles(fromState.value, fromState.params, errors);
        const toStyles = trigger.matchStyles(toState.value, toState.params, errors);
        if (errors.length) {
          this._engine.reportError(errors);
        } else {
          this._engine.afterFlush(() => {
            eraseStyles(element, fromStyles);
            setStyles(element, toStyles);
          });
        }
      }
      return;
    }
    const playersOnElement = getOrSetDefaultValue(this._engine.playersByElement, element, []);
    playersOnElement.forEach((player2) => {
      if (player2.namespaceId == this.id && player2.triggerName == triggerName && player2.queued) {
        player2.destroy();
      }
    });
    let transition = trigger.matchTransition(fromState.value, toState.value, element, toState.params);
    let isFallbackTransition = false;
    if (!transition) {
      if (!defaultToFallback) return;
      transition = trigger.fallbackTransition;
      isFallbackTransition = true;
    }
    this._engine.totalQueuedPlayers++;
    this._queue.push({
      element,
      triggerName,
      transition,
      fromState,
      toState,
      player,
      isFallbackTransition
    });
    if (!isFallbackTransition) {
      addClass(element, QUEUED_CLASSNAME);
      player.onStart(() => {
        removeClass(element, QUEUED_CLASSNAME);
      });
    }
    player.onDone(() => {
      let index = this.players.indexOf(player);
      if (index >= 0) {
        this.players.splice(index, 1);
      }
      const players = this._engine.playersByElement.get(element);
      if (players) {
        let index2 = players.indexOf(player);
        if (index2 >= 0) {
          players.splice(index2, 1);
        }
      }
    });
    this.players.push(player);
    playersOnElement.push(player);
    return player;
  }
  deregister(name) {
    this._triggers.delete(name);
    this._engine.statesByElement.forEach((stateMap) => stateMap.delete(name));
    this._elementListeners.forEach((listeners, element) => {
      this._elementListeners.set(element, listeners.filter((entry) => {
        return entry.name != name;
      }));
    });
  }
  clearElementCache(element) {
    this._engine.statesByElement.delete(element);
    this._elementListeners.delete(element);
    const elementPlayers = this._engine.playersByElement.get(element);
    if (elementPlayers) {
      elementPlayers.forEach((player) => player.destroy());
      this._engine.playersByElement.delete(element);
    }
  }
  _signalRemovalForInnerTriggers(rootElement, context) {
    const elements = this._engine.driver.query(rootElement, NG_TRIGGER_SELECTOR, true);
    elements.forEach((elm) => {
      if (elm[REMOVAL_FLAG]) return;
      const namespaces = this._engine.fetchNamespacesByElement(elm);
      if (namespaces.size) {
        namespaces.forEach((ns) => ns.triggerLeaveAnimation(elm, context, false, true));
      } else {
        this.clearElementCache(elm);
      }
    });
    this._engine.afterFlushAnimationsDone(() => elements.forEach((elm) => this.clearElementCache(elm)));
  }
  triggerLeaveAnimation(element, context, destroyAfterComplete, defaultToFallback) {
    const triggerStates = this._engine.statesByElement.get(element);
    const previousTriggersValues = /* @__PURE__ */ new Map();
    if (triggerStates) {
      const players = [];
      triggerStates.forEach((state, triggerName) => {
        previousTriggersValues.set(triggerName, state.value);
        if (this._triggers.has(triggerName)) {
          const player = this.trigger(element, triggerName, VOID_VALUE, defaultToFallback);
          if (player) {
            players.push(player);
          }
        }
      });
      if (players.length) {
        this._engine.markElementAsRemoved(this.id, element, true, context, previousTriggersValues);
        if (destroyAfterComplete) {
          optimizeGroupPlayer(players).onDone(() => this._engine.processLeaveNode(element));
        }
        return true;
      }
    }
    return false;
  }
  prepareLeaveAnimationListeners(element) {
    const listeners = this._elementListeners.get(element);
    const elementStates = this._engine.statesByElement.get(element);
    if (listeners && elementStates) {
      const visitedTriggers = /* @__PURE__ */ new Set();
      listeners.forEach((listener) => {
        const triggerName = listener.name;
        if (visitedTriggers.has(triggerName)) return;
        visitedTriggers.add(triggerName);
        const trigger = this._triggers.get(triggerName);
        const transition = trigger.fallbackTransition;
        const fromState = elementStates.get(triggerName) || DEFAULT_STATE_VALUE;
        const toState = new StateValue(VOID_VALUE);
        const player = new TransitionAnimationPlayer(this.id, triggerName, element);
        this._engine.totalQueuedPlayers++;
        this._queue.push({
          element,
          triggerName,
          transition,
          fromState,
          toState,
          player,
          isFallbackTransition: true
        });
      });
    }
  }
  removeNode(element, context) {
    const engine = this._engine;
    if (element.childElementCount) {
      this._signalRemovalForInnerTriggers(element, context);
    }
    if (this.triggerLeaveAnimation(element, context, true)) return;
    let containsPotentialParentTransition = false;
    if (engine.totalAnimations) {
      const currentPlayers = engine.players.length ? engine.playersByQueriedElement.get(element) : [];
      if (currentPlayers && currentPlayers.length) {
        containsPotentialParentTransition = true;
      } else {
        let parent = element;
        while (parent = parent.parentNode) {
          const triggers = engine.statesByElement.get(parent);
          if (triggers) {
            containsPotentialParentTransition = true;
            break;
          }
        }
      }
    }
    this.prepareLeaveAnimationListeners(element);
    if (containsPotentialParentTransition) {
      engine.markElementAsRemoved(this.id, element, false, context);
    } else {
      const removalFlag = element[REMOVAL_FLAG];
      if (!removalFlag || removalFlag === NULL_REMOVAL_STATE) {
        engine.afterFlush(() => this.clearElementCache(element));
        engine.destroyInnerAnimations(element);
        engine._onRemovalComplete(element, context);
      }
    }
  }
  insertNode(element, parent) {
    addClass(element, this._hostClassName);
  }
  drainQueuedTransitions(microtaskId) {
    const instructions = [];
    this._queue.forEach((entry) => {
      const player = entry.player;
      if (player.destroyed) return;
      const element = entry.element;
      const listeners = this._elementListeners.get(element);
      if (listeners) {
        listeners.forEach((listener) => {
          if (listener.name == entry.triggerName) {
            const baseEvent = makeAnimationEvent(element, entry.triggerName, entry.fromState.value, entry.toState.value);
            baseEvent["_data"] = microtaskId;
            listenOnPlayer(entry.player, listener.phase, baseEvent, listener.callback);
          }
        });
      }
      if (player.markedForDestroy) {
        this._engine.afterFlush(() => {
          player.destroy();
        });
      } else {
        instructions.push(entry);
      }
    });
    this._queue = [];
    return instructions.sort((a, b) => {
      const d0 = a.transition.ast.depCount;
      const d1 = b.transition.ast.depCount;
      if (d0 == 0 || d1 == 0) {
        return d0 - d1;
      }
      return this._engine.driver.containsElement(a.element, b.element) ? 1 : -1;
    });
  }
  destroy(context) {
    this.players.forEach((p) => p.destroy());
    this._signalRemovalForInnerTriggers(this.hostElement, context);
  }
};
var TransitionAnimationEngine = class {
  bodyNode;
  driver;
  _normalizer;
  players = [];
  newHostElements = /* @__PURE__ */ new Map();
  playersByElement = /* @__PURE__ */ new Map();
  playersByQueriedElement = /* @__PURE__ */ new Map();
  statesByElement = /* @__PURE__ */ new Map();
  disabledNodes = /* @__PURE__ */ new Set();
  totalAnimations = 0;
  totalQueuedPlayers = 0;
  _namespaceLookup = {};
  _namespaceList = [];
  _flushFns = [];
  _whenQuietFns = [];
  namespacesByHostElement = /* @__PURE__ */ new Map();
  collectedEnterElements = [];
  collectedLeaveElements = [];
  // this method is designed to be overridden by the code that uses this engine
  onRemovalComplete = (element, context) => {
  };
  /** @internal */
  _onRemovalComplete(element, context) {
    this.onRemovalComplete(element, context);
  }
  constructor(bodyNode, driver, _normalizer) {
    this.bodyNode = bodyNode;
    this.driver = driver;
    this._normalizer = _normalizer;
  }
  get queuedPlayers() {
    const players = [];
    this._namespaceList.forEach((ns) => {
      ns.players.forEach((player) => {
        if (player.queued) {
          players.push(player);
        }
      });
    });
    return players;
  }
  createNamespace(namespaceId, hostElement) {
    const ns = new AnimationTransitionNamespace(namespaceId, hostElement, this);
    if (this.bodyNode && this.driver.containsElement(this.bodyNode, hostElement)) {
      this._balanceNamespaceList(ns, hostElement);
    } else {
      this.newHostElements.set(hostElement, ns);
      this.collectEnterElement(hostElement);
    }
    return this._namespaceLookup[namespaceId] = ns;
  }
  _balanceNamespaceList(ns, hostElement) {
    const namespaceList = this._namespaceList;
    const namespacesByHostElement = this.namespacesByHostElement;
    const limit = namespaceList.length - 1;
    if (limit >= 0) {
      let found = false;
      let ancestor = this.driver.getParentElement(hostElement);
      while (ancestor) {
        const ancestorNs = namespacesByHostElement.get(ancestor);
        if (ancestorNs) {
          const index = namespaceList.indexOf(ancestorNs);
          namespaceList.splice(index + 1, 0, ns);
          found = true;
          break;
        }
        ancestor = this.driver.getParentElement(ancestor);
      }
      if (!found) {
        namespaceList.unshift(ns);
      }
    } else {
      namespaceList.push(ns);
    }
    namespacesByHostElement.set(hostElement, ns);
    return ns;
  }
  register(namespaceId, hostElement) {
    let ns = this._namespaceLookup[namespaceId];
    if (!ns) {
      ns = this.createNamespace(namespaceId, hostElement);
    }
    return ns;
  }
  registerTrigger(namespaceId, name, trigger) {
    let ns = this._namespaceLookup[namespaceId];
    if (ns && ns.register(name, trigger)) {
      this.totalAnimations++;
    }
  }
  destroy(namespaceId, context) {
    if (!namespaceId) return;
    this.afterFlush(() => {
    });
    this.afterFlushAnimationsDone(() => {
      const ns = this._fetchNamespace(namespaceId);
      this.namespacesByHostElement.delete(ns.hostElement);
      const index = this._namespaceList.indexOf(ns);
      if (index >= 0) {
        this._namespaceList.splice(index, 1);
      }
      ns.destroy(context);
      delete this._namespaceLookup[namespaceId];
    });
  }
  _fetchNamespace(id) {
    return this._namespaceLookup[id];
  }
  fetchNamespacesByElement(element) {
    const namespaces = /* @__PURE__ */ new Set();
    const elementStates = this.statesByElement.get(element);
    if (elementStates) {
      for (let stateValue of elementStates.values()) {
        if (stateValue.namespaceId) {
          const ns = this._fetchNamespace(stateValue.namespaceId);
          if (ns) {
            namespaces.add(ns);
          }
        }
      }
    }
    return namespaces;
  }
  trigger(namespaceId, element, name, value) {
    if (isElementNode(element)) {
      const ns = this._fetchNamespace(namespaceId);
      if (ns) {
        ns.trigger(element, name, value);
        return true;
      }
    }
    return false;
  }
  insertNode(namespaceId, element, parent, insertBefore) {
    if (!isElementNode(element)) return;
    const details = element[REMOVAL_FLAG];
    if (details && details.setForRemoval) {
      details.setForRemoval = false;
      details.setForMove = true;
      const index = this.collectedLeaveElements.indexOf(element);
      if (index >= 0) {
        this.collectedLeaveElements.splice(index, 1);
      }
    }
    if (namespaceId) {
      const ns = this._fetchNamespace(namespaceId);
      if (ns) {
        ns.insertNode(element, parent);
      }
    }
    if (insertBefore) {
      this.collectEnterElement(element);
    }
  }
  collectEnterElement(element) {
    this.collectedEnterElements.push(element);
  }
  markElementAsDisabled(element, value) {
    if (value) {
      if (!this.disabledNodes.has(element)) {
        this.disabledNodes.add(element);
        addClass(element, DISABLED_CLASSNAME);
      }
    } else if (this.disabledNodes.has(element)) {
      this.disabledNodes.delete(element);
      removeClass(element, DISABLED_CLASSNAME);
    }
  }
  removeNode(namespaceId, element, context) {
    if (isElementNode(element)) {
      const ns = namespaceId ? this._fetchNamespace(namespaceId) : null;
      if (ns) {
        ns.removeNode(element, context);
      } else {
        this.markElementAsRemoved(namespaceId, element, false, context);
      }
      const hostNS = this.namespacesByHostElement.get(element);
      if (hostNS && hostNS.id !== namespaceId) {
        hostNS.removeNode(element, context);
      }
    } else {
      this._onRemovalComplete(element, context);
    }
  }
  markElementAsRemoved(namespaceId, element, hasAnimation, context, previousTriggersValues) {
    this.collectedLeaveElements.push(element);
    element[REMOVAL_FLAG] = {
      namespaceId,
      setForRemoval: context,
      hasAnimation,
      removedBeforeQueried: false,
      previousTriggersValues
    };
  }
  listen(namespaceId, element, name, phase, callback) {
    if (isElementNode(element)) {
      return this._fetchNamespace(namespaceId).listen(element, name, phase, callback);
    }
    return () => {
    };
  }
  _buildInstruction(entry, subTimelines, enterClassName, leaveClassName, skipBuildAst) {
    return entry.transition.build(this.driver, entry.element, entry.fromState.value, entry.toState.value, enterClassName, leaveClassName, entry.fromState.options, entry.toState.options, subTimelines, skipBuildAst);
  }
  destroyInnerAnimations(containerElement) {
    let elements = this.driver.query(containerElement, NG_TRIGGER_SELECTOR, true);
    elements.forEach((element) => this.destroyActiveAnimationsForElement(element));
    if (this.playersByQueriedElement.size == 0) return;
    elements = this.driver.query(containerElement, NG_ANIMATING_SELECTOR, true);
    elements.forEach((element) => this.finishActiveQueriedAnimationOnElement(element));
  }
  destroyActiveAnimationsForElement(element) {
    const players = this.playersByElement.get(element);
    if (players) {
      players.forEach((player) => {
        if (player.queued) {
          player.markedForDestroy = true;
        } else {
          player.destroy();
        }
      });
    }
  }
  finishActiveQueriedAnimationOnElement(element) {
    const players = this.playersByQueriedElement.get(element);
    if (players) {
      players.forEach((player) => player.finish());
    }
  }
  whenRenderingDone() {
    return new Promise((resolve) => {
      if (this.players.length) {
        return optimizeGroupPlayer(this.players).onDone(() => resolve());
      } else {
        resolve();
      }
    });
  }
  processLeaveNode(element) {
    const details = element[REMOVAL_FLAG];
    if (details && details.setForRemoval) {
      element[REMOVAL_FLAG] = NULL_REMOVAL_STATE;
      if (details.namespaceId) {
        this.destroyInnerAnimations(element);
        const ns = this._fetchNamespace(details.namespaceId);
        if (ns) {
          ns.clearElementCache(element);
        }
      }
      this._onRemovalComplete(element, details.setForRemoval);
    }
    if (element.classList?.contains(DISABLED_CLASSNAME)) {
      this.markElementAsDisabled(element, false);
    }
    this.driver.query(element, DISABLED_SELECTOR, true).forEach((node) => {
      this.markElementAsDisabled(node, false);
    });
  }
  flush(microtaskId = -1) {
    let players = [];
    if (this.newHostElements.size) {
      this.newHostElements.forEach((ns, element) => this._balanceNamespaceList(ns, element));
      this.newHostElements.clear();
    }
    if (this.totalAnimations && this.collectedEnterElements.length) {
      for (let i = 0; i < this.collectedEnterElements.length; i++) {
        const elm = this.collectedEnterElements[i];
        addClass(elm, STAR_CLASSNAME);
      }
    }
    if (this._namespaceList.length && (this.totalQueuedPlayers || this.collectedLeaveElements.length)) {
      const cleanupFns = [];
      try {
        players = this._flushAnimations(cleanupFns, microtaskId);
      } finally {
        for (let i = 0; i < cleanupFns.length; i++) {
          cleanupFns[i]();
        }
      }
    } else {
      for (let i = 0; i < this.collectedLeaveElements.length; i++) {
        const element = this.collectedLeaveElements[i];
        this.processLeaveNode(element);
      }
    }
    this.totalQueuedPlayers = 0;
    this.collectedEnterElements.length = 0;
    this.collectedLeaveElements.length = 0;
    this._flushFns.forEach((fn) => fn());
    this._flushFns = [];
    if (this._whenQuietFns.length) {
      const quietFns = this._whenQuietFns;
      this._whenQuietFns = [];
      if (players.length) {
        optimizeGroupPlayer(players).onDone(() => {
          quietFns.forEach((fn) => fn());
        });
      } else {
        quietFns.forEach((fn) => fn());
      }
    }
  }
  reportError(errors) {
    throw triggerTransitionsFailed(errors);
  }
  _flushAnimations(cleanupFns, microtaskId) {
    const subTimelines = new ElementInstructionMap();
    const skippedPlayers = [];
    const skippedPlayersMap = /* @__PURE__ */ new Map();
    const queuedInstructions = [];
    const queriedElements = /* @__PURE__ */ new Map();
    const allPreStyleElements = /* @__PURE__ */ new Map();
    const allPostStyleElements = /* @__PURE__ */ new Map();
    const disabledElementsSet = /* @__PURE__ */ new Set();
    this.disabledNodes.forEach((node) => {
      disabledElementsSet.add(node);
      const nodesThatAreDisabled = this.driver.query(node, QUEUED_SELECTOR, true);
      for (let i2 = 0; i2 < nodesThatAreDisabled.length; i2++) {
        disabledElementsSet.add(nodesThatAreDisabled[i2]);
      }
    });
    const bodyNode = this.bodyNode;
    const allTriggerElements = Array.from(this.statesByElement.keys());
    const enterNodeMap = buildRootMap(allTriggerElements, this.collectedEnterElements);
    const enterNodeMapIds = /* @__PURE__ */ new Map();
    let i = 0;
    enterNodeMap.forEach((nodes, root) => {
      const className = ENTER_CLASSNAME + i++;
      enterNodeMapIds.set(root, className);
      nodes.forEach((node) => addClass(node, className));
    });
    const allLeaveNodes = [];
    const mergedLeaveNodes = /* @__PURE__ */ new Set();
    const leaveNodesWithoutAnimations = /* @__PURE__ */ new Set();
    for (let i2 = 0; i2 < this.collectedLeaveElements.length; i2++) {
      const element = this.collectedLeaveElements[i2];
      const details = element[REMOVAL_FLAG];
      if (details && details.setForRemoval) {
        allLeaveNodes.push(element);
        mergedLeaveNodes.add(element);
        if (details.hasAnimation) {
          this.driver.query(element, STAR_SELECTOR, true).forEach((elm) => mergedLeaveNodes.add(elm));
        } else {
          leaveNodesWithoutAnimations.add(element);
        }
      }
    }
    const leaveNodeMapIds = /* @__PURE__ */ new Map();
    const leaveNodeMap = buildRootMap(allTriggerElements, Array.from(mergedLeaveNodes));
    leaveNodeMap.forEach((nodes, root) => {
      const className = LEAVE_CLASSNAME + i++;
      leaveNodeMapIds.set(root, className);
      nodes.forEach((node) => addClass(node, className));
    });
    cleanupFns.push(() => {
      enterNodeMap.forEach((nodes, root) => {
        const className = enterNodeMapIds.get(root);
        nodes.forEach((node) => removeClass(node, className));
      });
      leaveNodeMap.forEach((nodes, root) => {
        const className = leaveNodeMapIds.get(root);
        nodes.forEach((node) => removeClass(node, className));
      });
      allLeaveNodes.forEach((element) => {
        this.processLeaveNode(element);
      });
    });
    const allPlayers = [];
    const erroneousTransitions = [];
    for (let i2 = this._namespaceList.length - 1; i2 >= 0; i2--) {
      const ns = this._namespaceList[i2];
      ns.drainQueuedTransitions(microtaskId).forEach((entry) => {
        const player = entry.player;
        const element = entry.element;
        allPlayers.push(player);
        if (this.collectedEnterElements.length) {
          const details = element[REMOVAL_FLAG];
          if (details && details.setForMove) {
            if (details.previousTriggersValues && details.previousTriggersValues.has(entry.triggerName)) {
              const previousValue = details.previousTriggersValues.get(entry.triggerName);
              const triggersWithStates = this.statesByElement.get(entry.element);
              if (triggersWithStates && triggersWithStates.has(entry.triggerName)) {
                const state = triggersWithStates.get(entry.triggerName);
                state.value = previousValue;
                triggersWithStates.set(entry.triggerName, state);
              }
            }
            player.destroy();
            return;
          }
        }
        const nodeIsOrphaned = !bodyNode || !this.driver.containsElement(bodyNode, element);
        const leaveClassName = leaveNodeMapIds.get(element);
        const enterClassName = enterNodeMapIds.get(element);
        const instruction = this._buildInstruction(entry, subTimelines, enterClassName, leaveClassName, nodeIsOrphaned);
        if (instruction.errors && instruction.errors.length) {
          erroneousTransitions.push(instruction);
          return;
        }
        if (nodeIsOrphaned) {
          player.onStart(() => eraseStyles(element, instruction.fromStyles));
          player.onDestroy(() => setStyles(element, instruction.toStyles));
          skippedPlayers.push(player);
          return;
        }
        if (entry.isFallbackTransition) {
          player.onStart(() => eraseStyles(element, instruction.fromStyles));
          player.onDestroy(() => setStyles(element, instruction.toStyles));
          skippedPlayers.push(player);
          return;
        }
        const timelines = [];
        instruction.timelines.forEach((tl) => {
          tl.stretchStartingKeyframe = true;
          if (!this.disabledNodes.has(tl.element)) {
            timelines.push(tl);
          }
        });
        instruction.timelines = timelines;
        subTimelines.append(element, instruction.timelines);
        const tuple = {
          instruction,
          player,
          element
        };
        queuedInstructions.push(tuple);
        instruction.queriedElements.forEach((element2) => getOrSetDefaultValue(queriedElements, element2, []).push(player));
        instruction.preStyleProps.forEach((stringMap, element2) => {
          if (stringMap.size) {
            let setVal = allPreStyleElements.get(element2);
            if (!setVal) {
              allPreStyleElements.set(element2, setVal = /* @__PURE__ */ new Set());
            }
            stringMap.forEach((_, prop) => setVal.add(prop));
          }
        });
        instruction.postStyleProps.forEach((stringMap, element2) => {
          let setVal = allPostStyleElements.get(element2);
          if (!setVal) {
            allPostStyleElements.set(element2, setVal = /* @__PURE__ */ new Set());
          }
          stringMap.forEach((_, prop) => setVal.add(prop));
        });
      });
    }
    if (erroneousTransitions.length) {
      const errors = [];
      erroneousTransitions.forEach((instruction) => {
        errors.push(transitionFailed(instruction.triggerName, instruction.errors));
      });
      allPlayers.forEach((player) => player.destroy());
      this.reportError(errors);
    }
    const allPreviousPlayersMap = /* @__PURE__ */ new Map();
    const animationElementMap = /* @__PURE__ */ new Map();
    queuedInstructions.forEach((entry) => {
      const element = entry.element;
      if (subTimelines.has(element)) {
        animationElementMap.set(element, element);
        this._beforeAnimationBuild(entry.player.namespaceId, entry.instruction, allPreviousPlayersMap);
      }
    });
    skippedPlayers.forEach((player) => {
      const element = player.element;
      const previousPlayers = this._getPreviousPlayers(element, false, player.namespaceId, player.triggerName, null);
      previousPlayers.forEach((prevPlayer) => {
        getOrSetDefaultValue(allPreviousPlayersMap, element, []).push(prevPlayer);
        prevPlayer.destroy();
      });
    });
    const replaceNodes = allLeaveNodes.filter((node) => {
      return replacePostStylesAsPre(node, allPreStyleElements, allPostStyleElements);
    });
    const postStylesMap = /* @__PURE__ */ new Map();
    const allLeaveQueriedNodes = cloakAndComputeStyles(postStylesMap, this.driver, leaveNodesWithoutAnimations, allPostStyleElements, AUTO_STYLE);
    allLeaveQueriedNodes.forEach((node) => {
      if (replacePostStylesAsPre(node, allPreStyleElements, allPostStyleElements)) {
        replaceNodes.push(node);
      }
    });
    const preStylesMap = /* @__PURE__ */ new Map();
    enterNodeMap.forEach((nodes, root) => {
      cloakAndComputeStyles(preStylesMap, this.driver, new Set(nodes), allPreStyleElements, \u0275PRE_STYLE);
    });
    replaceNodes.forEach((node) => {
      const post = postStylesMap.get(node);
      const pre = preStylesMap.get(node);
      postStylesMap.set(node, new Map([...post?.entries() ?? [], ...pre?.entries() ?? []]));
    });
    const rootPlayers = [];
    const subPlayers = [];
    const NO_PARENT_ANIMATION_ELEMENT_DETECTED = {};
    queuedInstructions.forEach((entry) => {
      const {
        element,
        player,
        instruction
      } = entry;
      if (subTimelines.has(element)) {
        if (disabledElementsSet.has(element)) {
          player.onDestroy(() => setStyles(element, instruction.toStyles));
          player.disabled = true;
          player.overrideTotalTime(instruction.totalTime);
          skippedPlayers.push(player);
          return;
        }
        let parentWithAnimation = NO_PARENT_ANIMATION_ELEMENT_DETECTED;
        if (animationElementMap.size > 1) {
          let elm = element;
          const parentsToAdd = [];
          while (elm = elm.parentNode) {
            const detectedParent = animationElementMap.get(elm);
            if (detectedParent) {
              parentWithAnimation = detectedParent;
              break;
            }
            parentsToAdd.push(elm);
          }
          parentsToAdd.forEach((parent) => animationElementMap.set(parent, parentWithAnimation));
        }
        const innerPlayer = this._buildAnimation(player.namespaceId, instruction, allPreviousPlayersMap, skippedPlayersMap, preStylesMap, postStylesMap);
        player.setRealPlayer(innerPlayer);
        if (parentWithAnimation === NO_PARENT_ANIMATION_ELEMENT_DETECTED) {
          rootPlayers.push(player);
        } else {
          const parentPlayers = this.playersByElement.get(parentWithAnimation);
          if (parentPlayers && parentPlayers.length) {
            player.parentPlayer = optimizeGroupPlayer(parentPlayers);
          }
          skippedPlayers.push(player);
        }
      } else {
        eraseStyles(element, instruction.fromStyles);
        player.onDestroy(() => setStyles(element, instruction.toStyles));
        subPlayers.push(player);
        if (disabledElementsSet.has(element)) {
          skippedPlayers.push(player);
        }
      }
    });
    subPlayers.forEach((player) => {
      const playersForElement = skippedPlayersMap.get(player.element);
      if (playersForElement && playersForElement.length) {
        const innerPlayer = optimizeGroupPlayer(playersForElement);
        player.setRealPlayer(innerPlayer);
      }
    });
    skippedPlayers.forEach((player) => {
      if (player.parentPlayer) {
        player.syncPlayerEvents(player.parentPlayer);
      } else {
        player.destroy();
      }
    });
    for (let i2 = 0; i2 < allLeaveNodes.length; i2++) {
      const element = allLeaveNodes[i2];
      const details = element[REMOVAL_FLAG];
      removeClass(element, LEAVE_CLASSNAME);
      if (details && details.hasAnimation) continue;
      let players = [];
      if (queriedElements.size) {
        let queriedPlayerResults = queriedElements.get(element);
        if (queriedPlayerResults && queriedPlayerResults.length) {
          players.push(...queriedPlayerResults);
        }
        let queriedInnerElements = this.driver.query(element, NG_ANIMATING_SELECTOR, true);
        for (let j = 0; j < queriedInnerElements.length; j++) {
          let queriedPlayers = queriedElements.get(queriedInnerElements[j]);
          if (queriedPlayers && queriedPlayers.length) {
            players.push(...queriedPlayers);
          }
        }
      }
      const activePlayers = players.filter((p) => !p.destroyed);
      if (activePlayers.length) {
        removeNodesAfterAnimationDone(this, element, activePlayers);
      } else {
        this.processLeaveNode(element);
      }
    }
    allLeaveNodes.length = 0;
    rootPlayers.forEach((player) => {
      this.players.push(player);
      player.onDone(() => {
        player.destroy();
        const index = this.players.indexOf(player);
        this.players.splice(index, 1);
      });
      player.play();
    });
    return rootPlayers;
  }
  afterFlush(callback) {
    this._flushFns.push(callback);
  }
  afterFlushAnimationsDone(callback) {
    this._whenQuietFns.push(callback);
  }
  _getPreviousPlayers(element, isQueriedElement, namespaceId, triggerName, toStateValue) {
    let players = [];
    if (isQueriedElement) {
      const queriedElementPlayers = this.playersByQueriedElement.get(element);
      if (queriedElementPlayers) {
        players = queriedElementPlayers;
      }
    } else {
      const elementPlayers = this.playersByElement.get(element);
      if (elementPlayers) {
        const isRemovalAnimation = !toStateValue || toStateValue == VOID_VALUE;
        elementPlayers.forEach((player) => {
          if (player.queued) return;
          if (!isRemovalAnimation && player.triggerName != triggerName) return;
          players.push(player);
        });
      }
    }
    if (namespaceId || triggerName) {
      players = players.filter((player) => {
        if (namespaceId && namespaceId != player.namespaceId) return false;
        if (triggerName && triggerName != player.triggerName) return false;
        return true;
      });
    }
    return players;
  }
  _beforeAnimationBuild(namespaceId, instruction, allPreviousPlayersMap) {
    const triggerName = instruction.triggerName;
    const rootElement = instruction.element;
    const targetNameSpaceId = instruction.isRemovalTransition ? void 0 : namespaceId;
    const targetTriggerName = instruction.isRemovalTransition ? void 0 : triggerName;
    for (const timelineInstruction of instruction.timelines) {
      const element = timelineInstruction.element;
      const isQueriedElement = element !== rootElement;
      const players = getOrSetDefaultValue(allPreviousPlayersMap, element, []);
      const previousPlayers = this._getPreviousPlayers(element, isQueriedElement, targetNameSpaceId, targetTriggerName, instruction.toState);
      previousPlayers.forEach((player) => {
        const realPlayer = player.getRealPlayer();
        if (realPlayer.beforeDestroy) {
          realPlayer.beforeDestroy();
        }
        player.destroy();
        players.push(player);
      });
    }
    eraseStyles(rootElement, instruction.fromStyles);
  }
  _buildAnimation(namespaceId, instruction, allPreviousPlayersMap, skippedPlayersMap, preStylesMap, postStylesMap) {
    const triggerName = instruction.triggerName;
    const rootElement = instruction.element;
    const allQueriedPlayers = [];
    const allConsumedElements = /* @__PURE__ */ new Set();
    const allSubElements = /* @__PURE__ */ new Set();
    const allNewPlayers = instruction.timelines.map((timelineInstruction) => {
      const element = timelineInstruction.element;
      allConsumedElements.add(element);
      const details = element[REMOVAL_FLAG];
      if (details && details.removedBeforeQueried) return new NoopAnimationPlayer(timelineInstruction.duration, timelineInstruction.delay);
      const isQueriedElement = element !== rootElement;
      const previousPlayers = flattenGroupPlayers((allPreviousPlayersMap.get(element) || EMPTY_PLAYER_ARRAY).map((p) => p.getRealPlayer())).filter((p) => {
        const pp = p;
        return pp.element ? pp.element === element : false;
      });
      const preStyles = preStylesMap.get(element);
      const postStyles = postStylesMap.get(element);
      const keyframes = normalizeKeyframes$1(this._normalizer, timelineInstruction.keyframes, preStyles, postStyles);
      const player2 = this._buildPlayer(timelineInstruction, keyframes, previousPlayers);
      if (timelineInstruction.subTimeline && skippedPlayersMap) {
        allSubElements.add(element);
      }
      if (isQueriedElement) {
        const wrappedPlayer = new TransitionAnimationPlayer(namespaceId, triggerName, element);
        wrappedPlayer.setRealPlayer(player2);
        allQueriedPlayers.push(wrappedPlayer);
      }
      return player2;
    });
    allQueriedPlayers.forEach((player2) => {
      getOrSetDefaultValue(this.playersByQueriedElement, player2.element, []).push(player2);
      player2.onDone(() => deleteOrUnsetInMap(this.playersByQueriedElement, player2.element, player2));
    });
    allConsumedElements.forEach((element) => addClass(element, NG_ANIMATING_CLASSNAME));
    const player = optimizeGroupPlayer(allNewPlayers);
    player.onDestroy(() => {
      allConsumedElements.forEach((element) => removeClass(element, NG_ANIMATING_CLASSNAME));
      setStyles(rootElement, instruction.toStyles);
    });
    allSubElements.forEach((element) => {
      getOrSetDefaultValue(skippedPlayersMap, element, []).push(player);
    });
    return player;
  }
  _buildPlayer(instruction, keyframes, previousPlayers) {
    if (keyframes.length > 0) {
      return this.driver.animate(instruction.element, keyframes, instruction.duration, instruction.delay, instruction.easing, previousPlayers);
    }
    return new NoopAnimationPlayer(instruction.duration, instruction.delay);
  }
};
var TransitionAnimationPlayer = class {
  namespaceId;
  triggerName;
  element;
  _player = new NoopAnimationPlayer();
  _containsRealPlayer = false;
  _queuedCallbacks = /* @__PURE__ */ new Map();
  destroyed = false;
  parentPlayer = null;
  markedForDestroy = false;
  disabled = false;
  queued = true;
  totalTime = 0;
  constructor(namespaceId, triggerName, element) {
    this.namespaceId = namespaceId;
    this.triggerName = triggerName;
    this.element = element;
  }
  setRealPlayer(player) {
    if (this._containsRealPlayer) return;
    this._player = player;
    this._queuedCallbacks.forEach((callbacks, phase) => {
      callbacks.forEach((callback) => listenOnPlayer(player, phase, void 0, callback));
    });
    this._queuedCallbacks.clear();
    this._containsRealPlayer = true;
    this.overrideTotalTime(player.totalTime);
    this.queued = false;
  }
  getRealPlayer() {
    return this._player;
  }
  overrideTotalTime(totalTime) {
    this.totalTime = totalTime;
  }
  syncPlayerEvents(player) {
    const p = this._player;
    if (p.triggerCallback) {
      player.onStart(() => p.triggerCallback("start"));
    }
    player.onDone(() => this.finish());
    player.onDestroy(() => this.destroy());
  }
  _queueEvent(name, callback) {
    getOrSetDefaultValue(this._queuedCallbacks, name, []).push(callback);
  }
  onDone(fn) {
    if (this.queued) {
      this._queueEvent("done", fn);
    }
    this._player.onDone(fn);
  }
  onStart(fn) {
    if (this.queued) {
      this._queueEvent("start", fn);
    }
    this._player.onStart(fn);
  }
  onDestroy(fn) {
    if (this.queued) {
      this._queueEvent("destroy", fn);
    }
    this._player.onDestroy(fn);
  }
  init() {
    this._player.init();
  }
  hasStarted() {
    return this.queued ? false : this._player.hasStarted();
  }
  play() {
    !this.queued && this._player.play();
  }
  pause() {
    !this.queued && this._player.pause();
  }
  restart() {
    !this.queued && this._player.restart();
  }
  finish() {
    this._player.finish();
  }
  destroy() {
    this.destroyed = true;
    this._player.destroy();
  }
  reset() {
    !this.queued && this._player.reset();
  }
  setPosition(p) {
    if (!this.queued) {
      this._player.setPosition(p);
    }
  }
  getPosition() {
    return this.queued ? 0 : this._player.getPosition();
  }
  /** @internal */
  triggerCallback(phaseName) {
    const p = this._player;
    if (p.triggerCallback) {
      p.triggerCallback(phaseName);
    }
  }
};
function deleteOrUnsetInMap(map2, key, value) {
  let currentValues = map2.get(key);
  if (currentValues) {
    if (currentValues.length) {
      const index = currentValues.indexOf(value);
      currentValues.splice(index, 1);
    }
    if (currentValues.length == 0) {
      map2.delete(key);
    }
  }
  return currentValues;
}
function normalizeTriggerValue(value) {
  return value != null ? value : null;
}
function isElementNode(node) {
  return node && node["nodeType"] === 1;
}
function isTriggerEventValid(eventName) {
  return eventName == "start" || eventName == "done";
}
function cloakElement(element, value) {
  const oldValue = element.style.display;
  element.style.display = value != null ? value : "none";
  return oldValue;
}
function cloakAndComputeStyles(valuesMap, driver, elements, elementPropsMap, defaultStyle) {
  const cloakVals = [];
  elements.forEach((element) => cloakVals.push(cloakElement(element)));
  const failedElements = [];
  elementPropsMap.forEach((props, element) => {
    const styles = /* @__PURE__ */ new Map();
    props.forEach((prop) => {
      const value = driver.computeStyle(element, prop, defaultStyle);
      styles.set(prop, value);
      if (!value || value.length == 0) {
        element[REMOVAL_FLAG] = NULL_REMOVED_QUERIED_STATE;
        failedElements.push(element);
      }
    });
    valuesMap.set(element, styles);
  });
  let i = 0;
  elements.forEach((element) => cloakElement(element, cloakVals[i++]));
  return failedElements;
}
function buildRootMap(roots, nodes) {
  const rootMap = /* @__PURE__ */ new Map();
  roots.forEach((root) => rootMap.set(root, []));
  if (nodes.length == 0) return rootMap;
  const NULL_NODE = 1;
  const nodeSet = new Set(nodes);
  const localRootMap = /* @__PURE__ */ new Map();
  function getRoot(node) {
    if (!node) return NULL_NODE;
    let root = localRootMap.get(node);
    if (root) return root;
    const parent = node.parentNode;
    if (rootMap.has(parent)) {
      root = parent;
    } else if (nodeSet.has(parent)) {
      root = NULL_NODE;
    } else {
      root = getRoot(parent);
    }
    localRootMap.set(node, root);
    return root;
  }
  nodes.forEach((node) => {
    const root = getRoot(node);
    if (root !== NULL_NODE) {
      rootMap.get(root).push(node);
    }
  });
  return rootMap;
}
function addClass(element, className) {
  element.classList?.add(className);
}
function removeClass(element, className) {
  element.classList?.remove(className);
}
function removeNodesAfterAnimationDone(engine, element, players) {
  optimizeGroupPlayer(players).onDone(() => engine.processLeaveNode(element));
}
function flattenGroupPlayers(players) {
  const finalPlayers = [];
  _flattenGroupPlayersRecur(players, finalPlayers);
  return finalPlayers;
}
function _flattenGroupPlayersRecur(players, finalPlayers) {
  for (let i = 0; i < players.length; i++) {
    const player = players[i];
    if (player instanceof AnimationGroupPlayer) {
      _flattenGroupPlayersRecur(player.players, finalPlayers);
    } else {
      finalPlayers.push(player);
    }
  }
}
function objEquals(a, b) {
  const k1 = Object.keys(a);
  const k2 = Object.keys(b);
  if (k1.length != k2.length) return false;
  for (let i = 0; i < k1.length; i++) {
    const prop = k1[i];
    if (!b.hasOwnProperty(prop) || a[prop] !== b[prop]) return false;
  }
  return true;
}
function replacePostStylesAsPre(element, allPreStyleElements, allPostStyleElements) {
  const postEntry = allPostStyleElements.get(element);
  if (!postEntry) return false;
  let preEntry = allPreStyleElements.get(element);
  if (preEntry) {
    postEntry.forEach((data) => preEntry.add(data));
  } else {
    allPreStyleElements.set(element, postEntry);
  }
  allPostStyleElements.delete(element);
  return true;
}
var AnimationEngine = class {
  _driver;
  _normalizer;
  _transitionEngine;
  _timelineEngine;
  _triggerCache = {};
  // this method is designed to be overridden by the code that uses this engine
  onRemovalComplete = (element, context) => {
  };
  constructor(doc, _driver, _normalizer) {
    this._driver = _driver;
    this._normalizer = _normalizer;
    this._transitionEngine = new TransitionAnimationEngine(doc.body, _driver, _normalizer);
    this._timelineEngine = new TimelineAnimationEngine(doc.body, _driver, _normalizer);
    this._transitionEngine.onRemovalComplete = (element, context) => this.onRemovalComplete(element, context);
  }
  registerTrigger(componentId, namespaceId, hostElement, name, metadata) {
    const cacheKey = componentId + "-" + name;
    let trigger = this._triggerCache[cacheKey];
    if (!trigger) {
      const errors = [];
      const warnings = [];
      const ast = buildAnimationAst(this._driver, metadata, errors, warnings);
      if (errors.length) {
        throw triggerBuildFailed(name, errors);
      }
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        if (warnings.length) {
          warnTriggerBuild(name, warnings);
        }
      }
      trigger = buildTrigger(name, ast, this._normalizer);
      this._triggerCache[cacheKey] = trigger;
    }
    this._transitionEngine.registerTrigger(namespaceId, name, trigger);
  }
  register(namespaceId, hostElement) {
    this._transitionEngine.register(namespaceId, hostElement);
  }
  destroy(namespaceId, context) {
    this._transitionEngine.destroy(namespaceId, context);
  }
  onInsert(namespaceId, element, parent, insertBefore) {
    this._transitionEngine.insertNode(namespaceId, element, parent, insertBefore);
  }
  onRemove(namespaceId, element, context) {
    this._transitionEngine.removeNode(namespaceId, element, context);
  }
  disableAnimations(element, disable) {
    this._transitionEngine.markElementAsDisabled(element, disable);
  }
  process(namespaceId, element, property, value) {
    if (property.charAt(0) == "@") {
      const [id, action] = parseTimelineCommand(property);
      const args = value;
      this._timelineEngine.command(id, element, action, args);
    } else {
      this._transitionEngine.trigger(namespaceId, element, property, value);
    }
  }
  listen(namespaceId, element, eventName, eventPhase, callback) {
    if (eventName.charAt(0) == "@") {
      const [id, action] = parseTimelineCommand(eventName);
      return this._timelineEngine.listen(id, element, action, callback);
    }
    return this._transitionEngine.listen(namespaceId, element, eventName, eventPhase, callback);
  }
  flush(microtaskId = -1) {
    this._transitionEngine.flush(microtaskId);
  }
  get players() {
    return [...this._transitionEngine.players, ...this._timelineEngine.players];
  }
  whenRenderingDone() {
    return this._transitionEngine.whenRenderingDone();
  }
  afterFlushAnimationsDone(cb) {
    this._transitionEngine.afterFlushAnimationsDone(cb);
  }
};
function packageNonAnimatableStyles(element, styles) {
  let startStyles = null;
  let endStyles = null;
  if (Array.isArray(styles) && styles.length) {
    startStyles = filterNonAnimatableStyles(styles[0]);
    if (styles.length > 1) {
      endStyles = filterNonAnimatableStyles(styles[styles.length - 1]);
    }
  } else if (styles instanceof Map) {
    startStyles = filterNonAnimatableStyles(styles);
  }
  return startStyles || endStyles ? new SpecialCasedStyles(element, startStyles, endStyles) : null;
}
var SpecialCasedStyles = class _SpecialCasedStyles {
  _element;
  _startStyles;
  _endStyles;
  static initialStylesByElement = /* @__PURE__ */ new WeakMap();
  _state = 0;
  _initialStyles;
  constructor(_element, _startStyles, _endStyles) {
    this._element = _element;
    this._startStyles = _startStyles;
    this._endStyles = _endStyles;
    let initialStyles = _SpecialCasedStyles.initialStylesByElement.get(_element);
    if (!initialStyles) {
      _SpecialCasedStyles.initialStylesByElement.set(_element, initialStyles = /* @__PURE__ */ new Map());
    }
    this._initialStyles = initialStyles;
  }
  start() {
    if (this._state < 1) {
      if (this._startStyles) {
        setStyles(this._element, this._startStyles, this._initialStyles);
      }
      this._state = 1;
    }
  }
  finish() {
    this.start();
    if (this._state < 2) {
      setStyles(this._element, this._initialStyles);
      if (this._endStyles) {
        setStyles(this._element, this._endStyles);
        this._endStyles = null;
      }
      this._state = 1;
    }
  }
  destroy() {
    this.finish();
    if (this._state < 3) {
      _SpecialCasedStyles.initialStylesByElement.delete(this._element);
      if (this._startStyles) {
        eraseStyles(this._element, this._startStyles);
        this._endStyles = null;
      }
      if (this._endStyles) {
        eraseStyles(this._element, this._endStyles);
        this._endStyles = null;
      }
      setStyles(this._element, this._initialStyles);
      this._state = 3;
    }
  }
};
function filterNonAnimatableStyles(styles) {
  let result = null;
  styles.forEach((val, prop) => {
    if (isNonAnimatableStyle(prop)) {
      result = result || /* @__PURE__ */ new Map();
      result.set(prop, val);
    }
  });
  return result;
}
function isNonAnimatableStyle(prop) {
  return prop === "display" || prop === "position";
}
var WebAnimationsPlayer = class {
  element;
  keyframes;
  options;
  _specialStyles;
  _onDoneFns = [];
  _onStartFns = [];
  _onDestroyFns = [];
  _duration;
  _delay;
  _initialized = false;
  _finished = false;
  _started = false;
  _destroyed = false;
  _finalKeyframe;
  // the following original fns are persistent copies of the _onStartFns and _onDoneFns
  // and are used to reset the fns to their original values upon reset()
  // (since the _onStartFns and _onDoneFns get deleted after they are called)
  _originalOnDoneFns = [];
  _originalOnStartFns = [];
  // using non-null assertion because it's re(set) by init();
  domPlayer;
  time = 0;
  parentPlayer = null;
  currentSnapshot = /* @__PURE__ */ new Map();
  constructor(element, keyframes, options, _specialStyles) {
    this.element = element;
    this.keyframes = keyframes;
    this.options = options;
    this._specialStyles = _specialStyles;
    this._duration = options["duration"];
    this._delay = options["delay"] || 0;
    this.time = this._duration + this._delay;
  }
  _onFinish() {
    if (!this._finished) {
      this._finished = true;
      this._onDoneFns.forEach((fn) => fn());
      this._onDoneFns = [];
    }
  }
  init() {
    this._buildPlayer();
    this._preparePlayerBeforeStart();
  }
  _buildPlayer() {
    if (this._initialized) return;
    this._initialized = true;
    const keyframes = this.keyframes;
    this.domPlayer = this._triggerWebAnimation(this.element, keyframes, this.options);
    this._finalKeyframe = keyframes.length ? keyframes[keyframes.length - 1] : /* @__PURE__ */ new Map();
    const onFinish = () => this._onFinish();
    this.domPlayer.addEventListener("finish", onFinish);
    this.onDestroy(() => {
      this.domPlayer.removeEventListener("finish", onFinish);
    });
  }
  _preparePlayerBeforeStart() {
    if (this._delay) {
      this._resetDomPlayerState();
    } else {
      this.domPlayer.pause();
    }
  }
  _convertKeyframesToObject(keyframes) {
    const kfs = [];
    keyframes.forEach((frame) => {
      kfs.push(Object.fromEntries(frame));
    });
    return kfs;
  }
  /** @internal */
  _triggerWebAnimation(element, keyframes, options) {
    return element.animate(this._convertKeyframesToObject(keyframes), options);
  }
  onStart(fn) {
    this._originalOnStartFns.push(fn);
    this._onStartFns.push(fn);
  }
  onDone(fn) {
    this._originalOnDoneFns.push(fn);
    this._onDoneFns.push(fn);
  }
  onDestroy(fn) {
    this._onDestroyFns.push(fn);
  }
  play() {
    this._buildPlayer();
    if (!this.hasStarted()) {
      this._onStartFns.forEach((fn) => fn());
      this._onStartFns = [];
      this._started = true;
      if (this._specialStyles) {
        this._specialStyles.start();
      }
    }
    this.domPlayer.play();
  }
  pause() {
    this.init();
    this.domPlayer.pause();
  }
  finish() {
    this.init();
    if (this._specialStyles) {
      this._specialStyles.finish();
    }
    this._onFinish();
    this.domPlayer.finish();
  }
  reset() {
    this._resetDomPlayerState();
    this._destroyed = false;
    this._finished = false;
    this._started = false;
    this._onStartFns = this._originalOnStartFns;
    this._onDoneFns = this._originalOnDoneFns;
  }
  _resetDomPlayerState() {
    if (this.domPlayer) {
      this.domPlayer.cancel();
    }
  }
  restart() {
    this.reset();
    this.play();
  }
  hasStarted() {
    return this._started;
  }
  destroy() {
    if (!this._destroyed) {
      this._destroyed = true;
      this._resetDomPlayerState();
      this._onFinish();
      if (this._specialStyles) {
        this._specialStyles.destroy();
      }
      this._onDestroyFns.forEach((fn) => fn());
      this._onDestroyFns = [];
    }
  }
  setPosition(p) {
    if (this.domPlayer === void 0) {
      this.init();
    }
    this.domPlayer.currentTime = p * this.time;
  }
  getPosition() {
    return +(this.domPlayer.currentTime ?? 0) / this.time;
  }
  get totalTime() {
    return this._delay + this._duration;
  }
  beforeDestroy() {
    const styles = /* @__PURE__ */ new Map();
    if (this.hasStarted()) {
      const finalKeyframe = this._finalKeyframe;
      finalKeyframe.forEach((val, prop) => {
        if (prop !== "offset") {
          styles.set(prop, this._finished ? val : computeStyle(this.element, prop));
        }
      });
    }
    this.currentSnapshot = styles;
  }
  /** @internal */
  triggerCallback(phaseName) {
    const methods = phaseName === "start" ? this._onStartFns : this._onDoneFns;
    methods.forEach((fn) => fn());
    methods.length = 0;
  }
};
var WebAnimationsDriver = class {
  validateStyleProperty(prop) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      return validateStyleProperty(prop);
    }
    return true;
  }
  validateAnimatableStyleProperty(prop) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      const cssProp = camelCaseToDashCase(prop);
      return validateWebAnimatableStyleProperty(cssProp);
    }
    return true;
  }
  containsElement(elm1, elm2) {
    return containsElement(elm1, elm2);
  }
  getParentElement(element) {
    return getParentElement(element);
  }
  query(element, selector, multi) {
    return invokeQuery(element, selector, multi);
  }
  computeStyle(element, prop, defaultValue) {
    return computeStyle(element, prop);
  }
  animate(element, keyframes, duration, delay, easing, previousPlayers = []) {
    const fill = delay == 0 ? "both" : "forwards";
    const playerOptions = {
      duration,
      delay,
      fill
    };
    if (easing) {
      playerOptions["easing"] = easing;
    }
    const previousStyles = /* @__PURE__ */ new Map();
    const previousWebAnimationPlayers = previousPlayers.filter((player) => player instanceof WebAnimationsPlayer);
    if (allowPreviousPlayerStylesMerge(duration, delay)) {
      previousWebAnimationPlayers.forEach((player) => {
        player.currentSnapshot.forEach((val, prop) => previousStyles.set(prop, val));
      });
    }
    let _keyframes = normalizeKeyframes(keyframes).map((styles) => new Map(styles));
    _keyframes = balancePreviousStylesIntoKeyframes(element, _keyframes, previousStyles);
    const specialStyles = packageNonAnimatableStyles(element, _keyframes);
    return new WebAnimationsPlayer(element, _keyframes, playerOptions, specialStyles);
  }
};
var ANIMATION_PREFIX = "@";
var DISABLE_ANIMATIONS_FLAG = "@.disabled";
var BaseAnimationRenderer = class {
  namespaceId;
  delegate;
  engine;
  _onDestroy;
  // We need to explicitly type this property because of an api-extractor bug
  // See https://github.com/microsoft/rushstack/issues/4390
  \u0275type = 0;
  constructor(namespaceId, delegate, engine, _onDestroy) {
    this.namespaceId = namespaceId;
    this.delegate = delegate;
    this.engine = engine;
    this._onDestroy = _onDestroy;
  }
  get data() {
    return this.delegate.data;
  }
  destroyNode(node) {
    this.delegate.destroyNode?.(node);
  }
  destroy() {
    this.engine.destroy(this.namespaceId, this.delegate);
    this.engine.afterFlushAnimationsDone(() => {
      queueMicrotask(() => {
        this.delegate.destroy();
      });
    });
    this._onDestroy?.();
  }
  createElement(name, namespace) {
    return this.delegate.createElement(name, namespace);
  }
  createComment(value) {
    return this.delegate.createComment(value);
  }
  createText(value) {
    return this.delegate.createText(value);
  }
  appendChild(parent, newChild) {
    this.delegate.appendChild(parent, newChild);
    this.engine.onInsert(this.namespaceId, newChild, parent, false);
  }
  insertBefore(parent, newChild, refChild, isMove = true) {
    this.delegate.insertBefore(parent, newChild, refChild);
    this.engine.onInsert(this.namespaceId, newChild, parent, isMove);
  }
  // TODO(thePunderWoman): remove the requireSynchronousElementRemoval flag after the
  // animations package has been fully deleted post v23.
  removeChild(parent, oldChild, isHostElement, requireSynchronousElementRemoval) {
    if (requireSynchronousElementRemoval) {
      this.delegate.removeChild(parent, oldChild, isHostElement);
      return;
    }
    if (this.parentNode(oldChild)) {
      this.engine.onRemove(this.namespaceId, oldChild, this.delegate);
    }
  }
  selectRootElement(selectorOrNode, preserveContent) {
    return this.delegate.selectRootElement(selectorOrNode, preserveContent);
  }
  parentNode(node) {
    return this.delegate.parentNode(node);
  }
  nextSibling(node) {
    return this.delegate.nextSibling(node);
  }
  setAttribute(el, name, value, namespace) {
    this.delegate.setAttribute(el, name, value, namespace);
  }
  removeAttribute(el, name, namespace) {
    this.delegate.removeAttribute(el, name, namespace);
  }
  addClass(el, name) {
    this.delegate.addClass(el, name);
  }
  removeClass(el, name) {
    this.delegate.removeClass(el, name);
  }
  setStyle(el, style2, value, flags) {
    this.delegate.setStyle(el, style2, value, flags);
  }
  removeStyle(el, style2, flags) {
    this.delegate.removeStyle(el, style2, flags);
  }
  setProperty(el, name, value) {
    if (name.charAt(0) == ANIMATION_PREFIX && name == DISABLE_ANIMATIONS_FLAG) {
      this.disableAnimations(el, !!value);
    } else {
      this.delegate.setProperty(el, name, value);
    }
  }
  setValue(node, value) {
    this.delegate.setValue(node, value);
  }
  listen(target, eventName, callback, options) {
    return this.delegate.listen(target, eventName, callback, options);
  }
  disableAnimations(element, value) {
    this.engine.disableAnimations(element, value);
  }
};
var AnimationRenderer = class extends BaseAnimationRenderer {
  factory;
  constructor(factory, namespaceId, delegate, engine, onDestroy) {
    super(namespaceId, delegate, engine, onDestroy);
    this.factory = factory;
    this.namespaceId = namespaceId;
  }
  setProperty(el, name, value) {
    if (name.charAt(0) == ANIMATION_PREFIX) {
      if (name.charAt(1) == "." && name == DISABLE_ANIMATIONS_FLAG) {
        value = value === void 0 ? true : !!value;
        this.disableAnimations(el, value);
      } else {
        this.engine.process(this.namespaceId, el, name.slice(1), value);
      }
    } else {
      this.delegate.setProperty(el, name, value);
    }
  }
  listen(target, eventName, callback, options) {
    if (eventName.charAt(0) == ANIMATION_PREFIX) {
      const element = resolveElementFromTarget(target);
      let name = eventName.slice(1);
      let phase = "";
      if (name.charAt(0) != ANIMATION_PREFIX) {
        [name, phase] = parseTriggerCallbackName(name);
      }
      return this.engine.listen(this.namespaceId, element, name, phase, (event) => {
        const countId = event["_data"] || -1;
        this.factory.scheduleListenerCallback(countId, callback, event);
      });
    }
    return this.delegate.listen(target, eventName, callback, options);
  }
};
function resolveElementFromTarget(target) {
  switch (target) {
    case "body":
      return document.body;
    case "document":
      return document;
    case "window":
      return window;
    default:
      return target;
  }
}
function parseTriggerCallbackName(triggerName) {
  const dotIndex = triggerName.indexOf(".");
  const trigger = triggerName.substring(0, dotIndex);
  const phase = triggerName.slice(dotIndex + 1);
  return [trigger, phase];
}
var AnimationRendererFactory = class {
  delegate;
  engine;
  _zone;
  _currentId = 0;
  _microtaskId = 1;
  _animationCallbacksBuffer = [];
  _rendererCache = /* @__PURE__ */ new Map();
  _cdRecurDepth = 0;
  constructor(delegate, engine, _zone) {
    this.delegate = delegate;
    this.engine = engine;
    this._zone = _zone;
    engine.onRemovalComplete = (element, delegate2) => {
      delegate2?.removeChild(null, element);
    };
  }
  createRenderer(hostElement, type) {
    const EMPTY_NAMESPACE_ID = "";
    const delegate = this.delegate.createRenderer(hostElement, type);
    if (!hostElement || !type?.data?.["animation"]) {
      const cache = this._rendererCache;
      let renderer = cache.get(delegate);
      if (!renderer) {
        const onRendererDestroy = () => cache.delete(delegate);
        renderer = new BaseAnimationRenderer(EMPTY_NAMESPACE_ID, delegate, this.engine, onRendererDestroy);
        cache.set(delegate, renderer);
      }
      return renderer;
    }
    const componentId = type.id;
    const namespaceId = type.id + "-" + this._currentId;
    this._currentId++;
    this.engine.register(namespaceId, hostElement);
    const registerTrigger = (trigger) => {
      if (Array.isArray(trigger)) {
        trigger.forEach(registerTrigger);
      } else {
        this.engine.registerTrigger(componentId, namespaceId, hostElement, trigger.name, trigger);
      }
    };
    const animationTriggers = type.data["animation"];
    animationTriggers.forEach(registerTrigger);
    return new AnimationRenderer(this, namespaceId, delegate, this.engine);
  }
  begin() {
    this._cdRecurDepth++;
    if (this.delegate.begin) {
      this.delegate.begin();
    }
  }
  _scheduleCountTask() {
    queueMicrotask(() => {
      this._microtaskId++;
    });
  }
  /** @internal */
  scheduleListenerCallback(count, fn, data) {
    if (count >= 0 && count < this._microtaskId) {
      this._zone.run(() => fn(data));
      return;
    }
    const animationCallbacksBuffer = this._animationCallbacksBuffer;
    if (animationCallbacksBuffer.length == 0) {
      queueMicrotask(() => {
        this._zone.run(() => {
          animationCallbacksBuffer.forEach((tuple) => {
            const [fn2, data2] = tuple;
            fn2(data2);
          });
          this._animationCallbacksBuffer = [];
        });
      });
    }
    animationCallbacksBuffer.push([fn, data]);
  }
  end() {
    this._cdRecurDepth--;
    if (this._cdRecurDepth == 0) {
      this._zone.runOutsideAngular(() => {
        this._scheduleCountTask();
        this.engine.flush(this._microtaskId);
      });
    }
    if (this.delegate.end) {
      this.delegate.end();
    }
  }
  whenRenderingDone() {
    return this.engine.whenRenderingDone();
  }
  /**
   * Used during HMR to clear any cached data about a component.
   * @param componentId ID of the component that is being replaced.
   */
  componentReplaced(componentId) {
    this.engine.flush();
    this.delegate.componentReplaced?.(componentId);
  }
};

// node_modules/@angular/platform-browser/fesm2022/animations.mjs
var InjectableAnimationEngine = class _InjectableAnimationEngine extends AnimationEngine {
  // The `ApplicationRef` is injected here explicitly to force the dependency ordering.
  // Since the `ApplicationRef` should be created earlier before the `AnimationEngine`, they
  // both have `ngOnDestroy` hooks and `flush()` must be called after all views are destroyed.
  constructor(doc, driver, normalizer) {
    super(doc, driver, normalizer);
  }
  ngOnDestroy() {
    this.flush();
  }
  static \u0275fac = function InjectableAnimationEngine_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InjectableAnimationEngine)(\u0275\u0275inject(DOCUMENT), \u0275\u0275inject(AnimationDriver), \u0275\u0275inject(AnimationStyleNormalizer));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _InjectableAnimationEngine,
    factory: _InjectableAnimationEngine.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InjectableAnimationEngine, [{
    type: Injectable
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: AnimationDriver
  }, {
    type: AnimationStyleNormalizer
  }], null);
})();
function instantiateDefaultStyleNormalizer() {
  return new WebAnimationsStyleNormalizer();
}
function instantiateRendererFactory(renderer, engine, zone) {
  return new AnimationRendererFactory(renderer, engine, zone);
}
var SHARED_ANIMATION_PROVIDERS = [{
  provide: AnimationStyleNormalizer,
  useFactory: instantiateDefaultStyleNormalizer
}, {
  provide: AnimationEngine,
  useClass: InjectableAnimationEngine
}, {
  provide: RendererFactory2,
  useFactory: instantiateRendererFactory,
  deps: [DomRendererFactory2, AnimationEngine, NgZone]
}];
var BROWSER_NOOP_ANIMATIONS_PROVIDERS = [{
  provide: AnimationDriver,
  useClass: NoopAnimationDriver
}, {
  provide: ANIMATION_MODULE_TYPE,
  useValue: "NoopAnimations"
}, ...SHARED_ANIMATION_PROVIDERS];
var BROWSER_ANIMATIONS_PROVIDERS = [
  // Note: the `ngServerMode` happen inside factories to give the variable time to initialize.
  {
    provide: AnimationDriver,
    useFactory: () => false ? new NoopAnimationDriver() : new WebAnimationsDriver()
  },
  {
    provide: ANIMATION_MODULE_TYPE,
    useFactory: () => false ? "NoopAnimations" : "BrowserAnimations"
  },
  ...SHARED_ANIMATION_PROVIDERS
];
var BrowserAnimationsModule = class _BrowserAnimationsModule {
  /**
   * Configures the module based on the specified object.
   *
   * @param config Object used to configure the behavior of the `BrowserAnimationsModule`.
   * @see {@link BrowserAnimationsModuleConfig}
   *
   * @usageNotes
   * When registering the `BrowserAnimationsModule`, you can use the `withConfig`
   * function as follows:
   * ```ts
   * @NgModule({
   *   imports: [BrowserAnimationsModule.withConfig(config)]
   * })
   * class MyNgModule {}
   * ```
   */
  static withConfig(config) {
    return {
      ngModule: _BrowserAnimationsModule,
      providers: config.disableAnimations ? BROWSER_NOOP_ANIMATIONS_PROVIDERS : BROWSER_ANIMATIONS_PROVIDERS
    };
  }
  static \u0275fac = function BrowserAnimationsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BrowserAnimationsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _BrowserAnimationsModule,
    exports: [BrowserModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: BROWSER_ANIMATIONS_PROVIDERS,
    imports: [BrowserModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrowserAnimationsModule, [{
    type: NgModule,
    args: [{
      exports: [BrowserModule],
      providers: BROWSER_ANIMATIONS_PROVIDERS
    }]
  }], null, null);
})();
function provideAnimations() {
  performanceMarkFeature("NgEagerAnimations");
  return [...BROWSER_ANIMATIONS_PROVIDERS];
}
var NoopAnimationsModule = class _NoopAnimationsModule {
  static \u0275fac = function NoopAnimationsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NoopAnimationsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _NoopAnimationsModule,
    exports: [BrowserModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: BROWSER_NOOP_ANIMATIONS_PROVIDERS,
    imports: [BrowserModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NoopAnimationsModule, [{
    type: NgModule,
    args: [{
      exports: [BrowserModule],
      providers: BROWSER_NOOP_ANIMATIONS_PROVIDERS
    }]
  }], null, null);
})();

// src/app/components/login/login.component.ts
function LoginComponent_div_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
var LoginComponent = class _LoginComponent {
  fb;
  auth;
  router;
  form;
  loading = false;
  error = "";
  showPassword = false;
  constructor(fb, auth, router) {
    this.fb = fb;
    this.auth = auth;
    this.router = router;
    this.form = this.fb.group({
      slug_name: ["", Validators.required],
      password: ["", Validators.required]
    });
  }
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  submit() {
    if (this.form.invalid)
      return;
    this.loading = true;
    this.error = "";
    const { slug_name, password } = this.form.value;
    this.auth.login(slug_name, password).subscribe({
      next: (res) => {
        this.loading = false;
        console.log("Login Response:", res);
        const userDetail = res?.data?.user_detail;
        const paymentMethod = userDetail?.payment_method;
        if (paymentMethod === "1") {
          this.error = "Payment expired. Please Contact Admin.";
          return;
        }
        const token = res?.token || res?.access_token || res?.auth_token || res?.data?.token || res?.data?.access_token || res?.data?.auth_token;
        if (token) {
          sessionStorage.setItem("auth_token", token);
          this.router.navigate(["/pos"]);
          return;
        }
        if (res?.success) {
          this.router.navigate(["/pos"]);
          return;
        }
        this.error = "Invalid login response";
      },
      error: (err) => {
        this.loading = false;
        this.error = err?.error?.message || "Invalid credentials";
      }
    });
  }
  static \u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 47, vars: 7, consts: [[1, "login-container"], [1, "pos-icons-container"], [1, "pos-icon", "pos-icon-1"], [1, "fas", "fa-cash-register"], [1, "pos-icon", "pos-icon-2"], [1, "fas", "fa-credit-card"], [1, "pos-icon", "pos-icon-3"], [1, "fas", "fa-receipt"], [1, "pos-icon", "pos-icon-4"], [1, "fas", "fa-barcode"], [1, "pos-icon", "pos-icon-5"], [1, "fas", "fa-shopping-cart"], [1, "pos-icon", "pos-icon-6"], [1, "fas", "fa-coins"], [1, "pos-icon", "pos-icon-7"], [1, "fas", "fa-calculator"], [1, "pos-icon", "pos-icon-8"], [1, "fas", "fa-tag"], [1, "pos-icon", "pos-icon-9"], [1, "fas", "fa-wallet"], [1, "pos-icon", "pos-icon-10"], [1, "fas", "fa-money-bill"], [1, "pos-icon", "pos-icon-11"], [1, "fas", "fa-store"], [1, "pos-icon", "pos-icon-12"], [1, "fas", "fa-cart-plus"], [1, "pos-brand"], ["src", "assets/images/sling-logo.png", "alt", "POS Logo", 2, "width", "280px"], [1, "login-card"], [1, "login-title"], [1, "login-underline"], [3, "ngSubmit", "formGroup"], [1, "input-group"], [1, "far", "fa-user", "input-icon"], ["type", "text", "formControlName", "slug_name", "placeholder", "Enter User Name", 1, "form-input"], [1, "fas", "fa-shield-alt", "input-icon"], ["formControlName", "password", "placeholder", "Password", 1, "form-input", 3, "type"], [1, "eye-icon", 3, "click"], [1, "forgot-password"], ["href", "#"], ["type", "submit", 1, "login-btn", 3, "disabled"], [1, "fas", "fa-arrow-right"], ["class", "error-message", 4, "ngIf"], [1, "error-message"]], template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "i", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 4);
      \u0275\u0275element(5, "i", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 6);
      \u0275\u0275element(7, "i", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 8);
      \u0275\u0275element(9, "i", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 10);
      \u0275\u0275element(11, "i", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 12);
      \u0275\u0275element(13, "i", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 14);
      \u0275\u0275element(15, "i", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 16);
      \u0275\u0275element(17, "i", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 18);
      \u0275\u0275element(19, "i", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 20);
      \u0275\u0275element(21, "i", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 22);
      \u0275\u0275element(23, "i", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 24);
      \u0275\u0275element(25, "i", 25);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "div", 26);
      \u0275\u0275element(27, "img", 27);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 28)(29, "h2", 29);
      \u0275\u0275text(30, "Login");
      \u0275\u0275elementEnd();
      \u0275\u0275element(31, "div", 30);
      \u0275\u0275elementStart(32, "form", 31);
      \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_32_listener() {
        return ctx.submit();
      });
      \u0275\u0275elementStart(33, "div", 32);
      \u0275\u0275element(34, "i", 33)(35, "input", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "div", 32);
      \u0275\u0275element(37, "i", 35)(38, "input", 36);
      \u0275\u0275elementStart(39, "i", 37);
      \u0275\u0275listener("click", function LoginComponent_Template_i_click_39_listener() {
        return ctx.togglePasswordVisibility();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "div", 38)(41, "a", 39);
      \u0275\u0275text(42, "Forgot Password ?");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "button", 40);
      \u0275\u0275text(44);
      \u0275\u0275element(45, "i", 41);
      \u0275\u0275elementEnd();
      \u0275\u0275template(46, LoginComponent_div_46_Template, 2, 1, "div", 42);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(32);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(6);
      \u0275\u0275property("type", ctx.showPassword ? "text" : "password");
      \u0275\u0275advance();
      \u0275\u0275classMap(ctx.showPassword ? "fas fa-eye-slash" : "fas fa-eye");
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.loading ? "Logging in..." : "Login", " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.error);
    }
  }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ['\n\n.login-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100vw;\n  height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      var(--color-primary-bg-light) 0%,\n      var(--color-neutral-300) 100%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n.back-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 20px;\n  left: 20px;\n  z-index: 10;\n}\n.back-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: var(--color-neutral-600);\n  cursor: pointer;\n  transition: color 0.3s ease;\n}\n.back-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\n  color: var(--color-neutral-800);\n}\n.pos-icons-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n}\n.pos-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 1;\n  color: var(--color-primary-bg);\n}\n.pos-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 40px;\n  animation: _ngcontent-%COMP%_float 20s infinite ease-in-out;\n}\n.pos-icon-1[_ngcontent-%COMP%] {\n  top: 15%;\n  left: 10%;\n  animation-delay: 0s;\n}\n.pos-icon-1[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 35px;\n}\n.pos-icon-2[_ngcontent-%COMP%] {\n  top: 20%;\n  right: 15%;\n  animation-delay: -5s;\n}\n.pos-icon-2[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\n.pos-icon-3[_ngcontent-%COMP%] {\n  top: 60%;\n  left: 20%;\n  animation-delay: -10s;\n}\n.pos-icon-3[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 28px;\n}\n.pos-icon-4[_ngcontent-%COMP%] {\n  top: 70%;\n  right: 25%;\n  animation-delay: -15s;\n}\n.pos-icon-4[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 32px;\n}\n.pos-icon-5[_ngcontent-%COMP%] {\n  top: 35%;\n  left: 5%;\n  animation-delay: -20s;\n}\n.pos-icon-5[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 26px;\n}\n.pos-icon-6[_ngcontent-%COMP%] {\n  top: 45%;\n  right: 8%;\n  animation-delay: -25s;\n}\n.pos-icon-6[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.pos-icon-7[_ngcontent-%COMP%] {\n  top: 10%;\n  right: 35%;\n  animation-delay: -30s;\n}\n.pos-icon-7[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n.pos-icon-8[_ngcontent-%COMP%] {\n  top: 55%;\n  right: 40%;\n  animation-delay: -35s;\n}\n.pos-icon-8[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.pos-icon-9[_ngcontent-%COMP%] {\n  top: 80%;\n  left: 8%;\n  animation-delay: -40s;\n}\n.pos-icon-9[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 26px;\n}\n.pos-icon-10[_ngcontent-%COMP%] {\n  top: 25%;\n  left: 45%;\n  animation-delay: -45s;\n}\n.pos-icon-10[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.pos-icon-11[_ngcontent-%COMP%] {\n  top: 85%;\n  right: 10%;\n  animation-delay: -50s;\n}\n.pos-icon-11[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\n.pos-icon-12[_ngcontent-%COMP%] {\n  top: 40%;\n  left: 65%;\n  animation-delay: -55s;\n}\n.pos-icon-12[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 25px;\n}\n@keyframes _ngcontent-%COMP%_float {\n  0%, 100% {\n    transform: translateY(0px) rotate(0deg);\n    opacity: 0.15;\n  }\n  25% {\n    transform: translateY(-15px) rotate(5deg);\n    opacity: 0.25;\n  }\n  50% {\n    transform: translateY(0px) rotate(0deg);\n    opacity: 0.15;\n  }\n  75% {\n    transform: translateY(-8px) rotate(-5deg);\n    opacity: 0.2;\n  }\n}\n.pos-brand[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100px;\n  text-align: center;\n  z-index: 2;\n}\n.pos-brand[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 40px;\n  color: var(--color-primary-bg);\n  margin-bottom: 10px;\n  display: block;\n}\n.pos-brand[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 42px;\n  font-weight: bold;\n  color: var(--color-primary-bg);\n  margin: 0;\n  text-shadow: 0 2px 4px var(--shadow-xxs);\n}\n.login-card[_ngcontent-%COMP%] {\n  background: var(--color-neutral-100);\n  border-radius: 16px;\n  padding: 30px;\n  width: 320px;\n  box-shadow: 0 8px 32px var(--shadow-xxs);\n  position: relative;\n  z-index: 2;\n  margin-top: 80px;\n}\n.login-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n  color: var(--color-neutral-800);\n  margin: 0 0 8px 0;\n  text-align: left;\n}\n.login-underline[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 3px;\n  background: var(--color-primary-bg);\n  margin-bottom: 25px;\n}\n.nfc-login-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px;\n  border: 2px solid var(--color-primary-bg);\n  background: var(--color-neutral-100);\n  color: var(--color-primary-bg);\n  border-radius: 25px;\n  font-size: 14px;\n  font-weight: 500;\n  margin-bottom: 20px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n.nfc-login-btn[_ngcontent-%COMP%]:hover {\n  background: var(--color-primary-bg);\n  color: var(--color-primary-text);\n}\n.nfc-login-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.divider[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 20px 0;\n  position: relative;\n}\n.divider[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: 0;\n  right: 0;\n  height: 1px;\n  background: var(--color-neutral-400);\n}\n.divider[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: var(--color-neutral-100);\n  padding: 0 15px;\n  color: var(--color-neutral-600);\n  font-size: 12px;\n  position: relative;\n  z-index: 1;\n}\n.input-group[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 16px;\n}\n.input-group[_ngcontent-%COMP%]   .input-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 15px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--color-neutral-600);\n  font-size: 14px;\n  z-index: 1;\n}\n.input-group[_ngcontent-%COMP%]   .eye-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 15px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--color-neutral-600);\n  font-size: 16px;\n  cursor: pointer;\n  z-index: 1;\n  transition: all 0.3s ease;\n  padding: 2px;\n  border-radius: 4px;\n}\n.input-group[_ngcontent-%COMP%]   .eye-icon[_ngcontent-%COMP%]:hover {\n  color: var(--color-primary-bg);\n  background: rgba(248, 147, 29, 0.1);\n  transform: translateY(-50%) scale(1.1);\n}\n.input-group[_ngcontent-%COMP%]   .eye-icon[_ngcontent-%COMP%]:active {\n  color: var(--color-secondary-bg);\n  background: rgba(25, 173, 159, 0.1);\n  transform: translateY(-50%) scale(0.95);\n}\n.input-group[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 45px 12px 45px;\n  border: 1px solid var(--color-neutral-400);\n  border-radius: 8px;\n  font-size: 14px;\n  background: var(--color-neutral-200);\n  transition: all 0.3s ease;\n  box-sizing: border-box;\n}\n.input-group[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--color-primary-bg);\n  background: var(--color-neutral-100);\n}\n.input-group[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--color-neutral-600);\n}\n.forgot-password[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 16px 0 24px 0;\n}\n.forgot-password[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--color-primary-bg);\n  text-decoration: none;\n  font-size: 13px;\n}\n.forgot-password[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.login-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px;\n  background: var(--color-primary-bg);\n  color: var(--color-primary-text);\n  border: none;\n  border-radius: 25px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  margin-bottom: 16px;\n}\n.login-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--color-secondary-bg);\n  transform: translateY(-1px);\n}\n.login-btn[_ngcontent-%COMP%]:hover:not(:disabled)   i[_ngcontent-%COMP%] {\n  transform: translateX(5px);\n}\n.login-btn[_ngcontent-%COMP%]:disabled {\n  background: var(--color-neutral-500);\n  cursor: not-allowed;\n  transform: none;\n}\n.login-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n  transition: transform 0.3s ease;\n}\n.error-message[_ngcontent-%COMP%] {\n  background: var(--color-danger-bg);\n  color: var(--color-neutral-800);\n  padding: 10px;\n  border-radius: 6px;\n  text-align: center;\n  font-size: 13px;\n  border: 1px solid var(--color-danger-border);\n}\n/*# sourceMappingURL=login.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{ selector: "app-login", standalone: true, imports: [CommonModule, ReactiveFormsModule], template: `<div class="login-container">\r
    <!-- POS Icons Background -->\r
    <div class="pos-icons-container">\r
        <div class="pos-icon pos-icon-1">\r
            <i class="fas fa-cash-register"></i>\r
        </div>\r
        <div class="pos-icon pos-icon-2">\r
            <i class="fas fa-credit-card"></i>\r
        </div>\r
        <div class="pos-icon pos-icon-3">\r
            <i class="fas fa-receipt"></i>\r
        </div>\r
        <div class="pos-icon pos-icon-4">\r
            <i class="fas fa-barcode"></i>\r
        </div>\r
        <div class="pos-icon pos-icon-5">\r
            <i class="fas fa-shopping-cart"></i>\r
        </div>\r
        <div class="pos-icon pos-icon-6">\r
            <i class="fas fa-coins"></i>\r
        </div>\r
        <div class="pos-icon pos-icon-7">\r
            <i class="fas fa-calculator"></i>\r
        </div>\r
        <div class="pos-icon pos-icon-8">\r
            <i class="fas fa-tag"></i>\r
        </div>\r
        <div class="pos-icon pos-icon-9">\r
            <i class="fas fa-wallet"></i>\r
        </div>\r
        <div class="pos-icon pos-icon-10">\r
            <i class="fas fa-money-bill"></i>\r
        </div>\r
        <div class="pos-icon pos-icon-11">\r
            <i class="fas fa-store"></i>\r
        </div>\r
        <div class="pos-icon pos-icon-12">\r
            <i class="fas fa-cart-plus"></i>\r
        </div>\r
    </div>\r
\r
    <!-- POS Branding -->\r
    <div class="pos-brand">\r
        <img src="assets/images/sling-logo.png" alt="POS Logo" style="    width: 280px;" />\r
        <!-- <h1>Sling Billings</h1> -->\r
    </div>\r
\r
    <!-- Login Form Card -->\r
    <div class="login-card">\r
        <h2 class="login-title">Login</h2>\r
        <div class="login-underline"></div>\r
\r
        <form [formGroup]="form" (ngSubmit)="submit()">\r
\r
\r
            <!-- Email Field -->\r
            <div class="input-group">\r
                <i class="far fa-user input-icon"></i>\r
                <input type="text" formControlName="slug_name" class="form-input" placeholder="Enter User Name" />\r
            </div>\r
\r
            <!-- Password Field -->\r
            <div class="input-group">\r
                <i class="fas fa-shield-alt input-icon"></i>\r
                <input [type]="showPassword ? 'text' : 'password'" formControlName="password" class="form-input"\r
                    placeholder="Password" />\r
                <i class="eye-icon" [class]="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"\r
                    (click)="togglePasswordVisibility()"></i>\r
            </div>\r
\r
            <!-- Forgot Password Link -->\r
            <div class="forgot-password">\r
                <a href="#">Forgot Password ?</a>\r
            </div>\r
\r
            <!-- Login Button -->\r
            <button type="submit" [disabled]="loading" class="login-btn">\r
                {{ loading ? 'Logging in...' : 'Login' }}\r
                <i class="fas fa-arrow-right"></i>\r
\r
            </button>\r
\r
            <!-- Error Message -->\r
            <div *ngIf="error" class="error-message">{{ error }}</div>\r
        </form>\r
    </div>\r
</div>`, styles: ['/* src/app/components/login/login.component.scss */\n.login-container {\n  position: relative;\n  width: 100vw;\n  height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      var(--color-primary-bg-light) 0%,\n      var(--color-neutral-300) 100%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n.back-button {\n  position: absolute;\n  top: 20px;\n  left: 20px;\n  z-index: 10;\n}\n.back-button i {\n  font-size: 20px;\n  color: var(--color-neutral-600);\n  cursor: pointer;\n  transition: color 0.3s ease;\n}\n.back-button i:hover {\n  color: var(--color-neutral-800);\n}\n.pos-icons-container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n}\n.pos-icon {\n  position: absolute;\n  opacity: 1;\n  color: var(--color-primary-bg);\n}\n.pos-icon i {\n  font-size: 40px;\n  animation: float 20s infinite ease-in-out;\n}\n.pos-icon-1 {\n  top: 15%;\n  left: 10%;\n  animation-delay: 0s;\n}\n.pos-icon-1 i {\n  font-size: 35px;\n}\n.pos-icon-2 {\n  top: 20%;\n  right: 15%;\n  animation-delay: -5s;\n}\n.pos-icon-2 i {\n  font-size: 30px;\n}\n.pos-icon-3 {\n  top: 60%;\n  left: 20%;\n  animation-delay: -10s;\n}\n.pos-icon-3 i {\n  font-size: 28px;\n}\n.pos-icon-4 {\n  top: 70%;\n  right: 25%;\n  animation-delay: -15s;\n}\n.pos-icon-4 i {\n  font-size: 32px;\n}\n.pos-icon-5 {\n  top: 35%;\n  left: 5%;\n  animation-delay: -20s;\n}\n.pos-icon-5 i {\n  font-size: 26px;\n}\n.pos-icon-6 {\n  top: 45%;\n  right: 8%;\n  animation-delay: -25s;\n}\n.pos-icon-6 i {\n  font-size: 24px;\n}\n.pos-icon-7 {\n  top: 10%;\n  right: 35%;\n  animation-delay: -30s;\n}\n.pos-icon-7 i {\n  font-size: 22px;\n}\n.pos-icon-8 {\n  top: 55%;\n  right: 40%;\n  animation-delay: -35s;\n}\n.pos-icon-8 i {\n  font-size: 20px;\n}\n.pos-icon-9 {\n  top: 80%;\n  left: 8%;\n  animation-delay: -40s;\n}\n.pos-icon-9 i {\n  font-size: 26px;\n}\n.pos-icon-10 {\n  top: 25%;\n  left: 45%;\n  animation-delay: -45s;\n}\n.pos-icon-10 i {\n  font-size: 18px;\n}\n.pos-icon-11 {\n  top: 85%;\n  right: 10%;\n  animation-delay: -50s;\n}\n.pos-icon-11 i {\n  font-size: 30px;\n}\n.pos-icon-12 {\n  top: 40%;\n  left: 65%;\n  animation-delay: -55s;\n}\n.pos-icon-12 i {\n  font-size: 25px;\n}\n@keyframes float {\n  0%, 100% {\n    transform: translateY(0px) rotate(0deg);\n    opacity: 0.15;\n  }\n  25% {\n    transform: translateY(-15px) rotate(5deg);\n    opacity: 0.25;\n  }\n  50% {\n    transform: translateY(0px) rotate(0deg);\n    opacity: 0.15;\n  }\n  75% {\n    transform: translateY(-8px) rotate(-5deg);\n    opacity: 0.2;\n  }\n}\n.pos-brand {\n  position: absolute;\n  top: 100px;\n  text-align: center;\n  z-index: 2;\n}\n.pos-brand i {\n  font-size: 40px;\n  color: var(--color-primary-bg);\n  margin-bottom: 10px;\n  display: block;\n}\n.pos-brand h1 {\n  font-size: 42px;\n  font-weight: bold;\n  color: var(--color-primary-bg);\n  margin: 0;\n  text-shadow: 0 2px 4px var(--shadow-xxs);\n}\n.login-card {\n  background: var(--color-neutral-100);\n  border-radius: 16px;\n  padding: 30px;\n  width: 320px;\n  box-shadow: 0 8px 32px var(--shadow-xxs);\n  position: relative;\n  z-index: 2;\n  margin-top: 80px;\n}\n.login-title {\n  font-size: 24px;\n  font-weight: 600;\n  color: var(--color-neutral-800);\n  margin: 0 0 8px 0;\n  text-align: left;\n}\n.login-underline {\n  width: 40px;\n  height: 3px;\n  background: var(--color-primary-bg);\n  margin-bottom: 25px;\n}\n.nfc-login-btn {\n  width: 100%;\n  padding: 12px;\n  border: 2px solid var(--color-primary-bg);\n  background: var(--color-neutral-100);\n  color: var(--color-primary-bg);\n  border-radius: 25px;\n  font-size: 14px;\n  font-weight: 500;\n  margin-bottom: 20px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n.nfc-login-btn:hover {\n  background: var(--color-primary-bg);\n  color: var(--color-primary-text);\n}\n.nfc-login-btn i {\n  font-size: 16px;\n}\n.divider {\n  text-align: center;\n  margin: 20px 0;\n  position: relative;\n}\n.divider::before {\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: 0;\n  right: 0;\n  height: 1px;\n  background: var(--color-neutral-400);\n}\n.divider span {\n  background: var(--color-neutral-100);\n  padding: 0 15px;\n  color: var(--color-neutral-600);\n  font-size: 12px;\n  position: relative;\n  z-index: 1;\n}\n.input-group {\n  position: relative;\n  margin-bottom: 16px;\n}\n.input-group .input-icon {\n  position: absolute;\n  left: 15px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--color-neutral-600);\n  font-size: 14px;\n  z-index: 1;\n}\n.input-group .eye-icon {\n  position: absolute;\n  right: 15px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--color-neutral-600);\n  font-size: 16px;\n  cursor: pointer;\n  z-index: 1;\n  transition: all 0.3s ease;\n  padding: 2px;\n  border-radius: 4px;\n}\n.input-group .eye-icon:hover {\n  color: var(--color-primary-bg);\n  background: rgba(248, 147, 29, 0.1);\n  transform: translateY(-50%) scale(1.1);\n}\n.input-group .eye-icon:active {\n  color: var(--color-secondary-bg);\n  background: rgba(25, 173, 159, 0.1);\n  transform: translateY(-50%) scale(0.95);\n}\n.input-group .form-input {\n  width: 100%;\n  padding: 12px 45px 12px 45px;\n  border: 1px solid var(--color-neutral-400);\n  border-radius: 8px;\n  font-size: 14px;\n  background: var(--color-neutral-200);\n  transition: all 0.3s ease;\n  box-sizing: border-box;\n}\n.input-group .form-input:focus {\n  outline: none;\n  border-color: var(--color-primary-bg);\n  background: var(--color-neutral-100);\n}\n.input-group .form-input::placeholder {\n  color: var(--color-neutral-600);\n}\n.forgot-password {\n  text-align: center;\n  margin: 16px 0 24px 0;\n}\n.forgot-password a {\n  color: var(--color-primary-bg);\n  text-decoration: none;\n  font-size: 13px;\n}\n.forgot-password a:hover {\n  text-decoration: underline;\n}\n.login-btn {\n  width: 100%;\n  padding: 14px;\n  background: var(--color-primary-bg);\n  color: var(--color-primary-text);\n  border: none;\n  border-radius: 25px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  margin-bottom: 16px;\n}\n.login-btn:hover:not(:disabled) {\n  background: var(--color-secondary-bg);\n  transform: translateY(-1px);\n}\n.login-btn:hover:not(:disabled) i {\n  transform: translateX(5px);\n}\n.login-btn:disabled {\n  background: var(--color-neutral-500);\n  cursor: not-allowed;\n  transform: none;\n}\n.login-btn i {\n  font-size: 14px;\n  transition: transform 0.3s ease;\n}\n.error-message {\n  background: var(--color-danger-bg);\n  color: var(--color-neutral-800);\n  padding: 10px;\n  border-radius: 6px;\n  text-align: center;\n  font-size: 13px;\n  border: 1px solid var(--color-danger-border);\n}\n/*# sourceMappingURL=login.component.css.map */\n'] }]
  }], () => [{ type: FormBuilder }, { type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/components/login/login.component.ts", lineNumber: 14 });
})();

// src/app/services/product.service.ts
var ProductService = class _ProductService {
  http;
  url = `${environment.apiBase}/pos/product`;
  constructor(http) {
    this.http = http;
  }
  /**
   * Fetch product list using POS API.
   * Optional filters: { category, sub_category, product, filter }
   */
  list(filters) {
    const params = {};
    if (filters) {
      if (filters.category)
        params.category = filters.category;
      if (filters.sub_category)
        params.sub_category = filters.sub_category;
      if (filters.product)
        params.product = filters.product;
      if (filters.filter)
        params.filter = filters.filter;
    }
    return this.http.get(this.url, { params });
  }
  /** Fetch single product by id using POS detail endpoint, fallback to list lookup */
  getById(id) {
    const detailUrl = `${environment.apiBase}/pos/${id}/get_product_detail`;
    return this.http.get(detailUrl).pipe(map((res) => {
      const raw = res && res.data ? res.data : res;
      return raw?.product ? raw.product : raw;
    }), catchError(() => {
      return this.searchPagesForId(id);
    }));
  }
  /**
   * Walks paginated pos/product pages following next_page_url until the product is found
   */
  searchPagesForId(id) {
    const startUrl = this.url;
    return new Observable((observer) => {
      const httpGet = (url) => {
        this.http.get(url).subscribe({
          next: (res) => {
            const pageItems = res && res.data ? res.data : Array.isArray(res) ? res : [];
            if (Array.isArray(pageItems)) {
              const found = pageItems.find((p) => {
                const candidate = p?.product ? p.product : p;
                return String(candidate?.id) === String(id) || candidate?.unique_id === id || candidate?.unique_number === id;
              });
              if (found) {
                const product = found?.product ? found.product : found;
                observer.next(product);
                observer.complete();
                return;
              }
            }
            const nextUrl = res?.next_page_url || res?.links?.find?.((l) => l?.label?.toString().includes("Next"))?.url;
            if (nextUrl) {
              httpGet(nextUrl);
            } else {
              observer.error(new Error("Product not found"));
            }
          },
          error: (err) => {
            observer.error(err);
          }
        });
      };
      httpGet(startUrl);
    });
  }
  /** Resolve image URL: if value already looks like a URL, return it; otherwise prefix with environment.assetsBase */
  resolveImageUrl(img) {
    if (!img)
      return null;
    try {
      if (/^https?:\/\//i.test(img))
        return img;
      return `${environment.assetsBase.replace(/\/$/, "")}/${img.replace(/^\//, "")}`;
    } catch {
      return null;
    }
  }
  static \u0275fac = function ProductService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProductService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProductService, factory: _ProductService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/components/product-list/product-list.component.ts
var _c0 = (a0, a1) => ({ "qty-warning": a0, "qty-danger": a1 });
function ProductListComponent_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function ProductListComponent_button_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearSearch());
    });
    \u0275\u0275elementStart(1, "i", 21);
    \u0275\u0275text(2, "\u2715");
    \u0275\u0275elementEnd()();
  }
}
function ProductListComponent_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (ctx_r1.selectedCategory ? 1 : 0) + (ctx_r1.selectedSubCategory ? 1 : 0), " ");
  }
}
function ProductListComponent_div_14_div_4_span_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 32);
    \u0275\u0275listener("click", function ProductListComponent_div_14_div_4_span_3_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.clearCategoryFilter());
    });
    \u0275\u0275text(3, "\u2715");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedCategory.name, " ");
  }
}
function ProductListComponent_div_14_div_4_span_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 32);
    \u0275\u0275listener("click", function ProductListComponent_div_14_div_4_span_4_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.clearSubCategoryFilter());
    });
    \u0275\u0275text(3, "\u2715");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedSubCategory.name, " ");
  }
}
function ProductListComponent_div_14_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "span", 28);
    \u0275\u0275text(2, "Active Filters:");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ProductListComponent_div_14_div_4_span_3_Template, 4, 1, "span", 29)(4, ProductListComponent_div_14_div_4_span_4_Template, 4, 1, "span", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.selectedCategory);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedSubCategory);
  }
}
function ProductListComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 24)(2, "span", 25);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, ProductListComponent_div_14_div_4_Template, 5, 2, "div", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("Showing ", ctx_r1.filteredProducts.length, " of ", ctx_r1.products.length, " products");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedCategory || ctx_r1.selectedSubCategory);
  }
}
function ProductListComponent_div_15_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 55);
    \u0275\u0275text(1, "Select Category");
    \u0275\u0275elementEnd();
  }
}
function ProductListComponent_div_15_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.selectedCategory.name);
  }
}
function ProductListComponent_div_15_div_19_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 68);
    \u0275\u0275listener("click", function ProductListComponent_div_15_div_19_button_7_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(3);
      ctx_r1.clearCategorySearch();
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 39);
    \u0275\u0275element(2, "line", 40)(3, "line", 41);
    \u0275\u0275elementEnd()();
  }
}
function ProductListComponent_div_15_div_19__svg_svg_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 69);
    \u0275\u0275element(1, "polyline", 70);
    \u0275\u0275elementEnd();
  }
}
function ProductListComponent_div_15_div_19_div_12__svg_svg_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 69);
    \u0275\u0275element(1, "polyline", 70);
    \u0275\u0275elementEnd();
  }
}
function ProductListComponent_div_15_div_19_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275listener("click", function ProductListComponent_div_15_div_19_div_12_Template_div_click_0_listener($event) {
      const category_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      ctx_r1.selectCategory(category_r9);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "span", 64);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ProductListComponent_div_15_div_19_div_12__svg_svg_3_Template, 2, 0, "svg", 65);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const category_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("selected", (ctx_r1.selectedCategory == null ? null : ctx_r1.selectedCategory.id) === category_r9.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(category_r9.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.selectedCategory == null ? null : ctx_r1.selectedCategory.id) === category_r9.id);
  }
}
function ProductListComponent_div_15_div_19_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(' No categories found matching "', ctx_r1.categorySearchTerm, '" ');
  }
}
function ProductListComponent_div_15_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 57)(1, "div", 58)(2, "div", 59);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 60);
    \u0275\u0275element(4, "circle", 4)(5, "path", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "input", 61);
    \u0275\u0275twoWayListener("ngModelChange", function ProductListComponent_div_15_div_19_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.categorySearchTerm, $event) || (ctx_r1.categorySearchTerm = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function ProductListComponent_div_15_div_19_Template_input_input_6_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onCategorySearch());
    })("click", function ProductListComponent_div_15_div_19_Template_input_click_6_listener($event) {
      \u0275\u0275restoreView(_r6);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, ProductListComponent_div_15_div_19_button_7_Template, 4, 0, "button", 62);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 63);
    \u0275\u0275listener("click", function ProductListComponent_div_15_div_19_Template_div_click_8_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.selectCategory(null);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(9, "span", 64);
    \u0275\u0275text(10, "All Categories");
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, ProductListComponent_div_15_div_19__svg_svg_11_Template, 2, 0, "svg", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, ProductListComponent_div_15_div_19_div_12_Template, 4, 4, "div", 66)(13, ProductListComponent_div_15_div_19_div_13_Template, 2, 1, "div", 67);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.categorySearchTerm);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.categorySearchTerm);
    \u0275\u0275advance();
    \u0275\u0275classProp("selected", !ctx_r1.selectedCategory);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r1.selectedCategory);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.filteredCategories);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.categorySearchTerm && ctx_r1.filteredCategories.length === 0);
  }
}
function ProductListComponent_div_15_span_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 55);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", !ctx_r1.selectedCategory ? "Select category first" : "Select Sub-Category", " ");
  }
}
function ProductListComponent_div_15_span_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.selectedSubCategory.name);
  }
}
function ProductListComponent_div_15_div_29_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 68);
    \u0275\u0275listener("click", function ProductListComponent_div_15_div_29_button_7_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(3);
      ctx_r1.clearSubCategorySearch();
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 39);
    \u0275\u0275element(2, "line", 40)(3, "line", 41);
    \u0275\u0275elementEnd()();
  }
}
function ProductListComponent_div_15_div_29__svg_svg_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 69);
    \u0275\u0275element(1, "polyline", 70);
    \u0275\u0275elementEnd();
  }
}
function ProductListComponent_div_15_div_29_div_12__svg_svg_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 69);
    \u0275\u0275element(1, "polyline", 70);
    \u0275\u0275elementEnd();
  }
}
function ProductListComponent_div_15_div_29_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275listener("click", function ProductListComponent_div_15_div_29_div_12_Template_div_click_0_listener($event) {
      const subCategory_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      ctx_r1.selectSubCategory(subCategory_r13);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "span", 64);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ProductListComponent_div_15_div_29_div_12__svg_svg_3_Template, 2, 0, "svg", 65);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const subCategory_r13 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("selected", (ctx_r1.selectedSubCategory == null ? null : ctx_r1.selectedSubCategory.id) === subCategory_r13.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(subCategory_r13.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.selectedSubCategory == null ? null : ctx_r1.selectedSubCategory.id) === subCategory_r13.id);
  }
}
function ProductListComponent_div_15_div_29_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(' No sub-categories found matching "', ctx_r1.subCategorySearchTerm, '" ');
  }
}
function ProductListComponent_div_15_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 57)(1, "div", 58)(2, "div", 59);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 60);
    \u0275\u0275element(4, "circle", 4)(5, "path", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "input", 72);
    \u0275\u0275twoWayListener("ngModelChange", function ProductListComponent_div_15_div_29_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.subCategorySearchTerm, $event) || (ctx_r1.subCategorySearchTerm = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function ProductListComponent_div_15_div_29_Template_input_input_6_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onSubCategorySearch());
    })("click", function ProductListComponent_div_15_div_29_Template_input_click_6_listener($event) {
      \u0275\u0275restoreView(_r10);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, ProductListComponent_div_15_div_29_button_7_Template, 4, 0, "button", 62);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 63);
    \u0275\u0275listener("click", function ProductListComponent_div_15_div_29_Template_div_click_8_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.selectSubCategory(null);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(9, "span", 64);
    \u0275\u0275text(10, "All Sub-Categories");
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, ProductListComponent_div_15_div_29__svg_svg_11_Template, 2, 0, "svg", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, ProductListComponent_div_15_div_29_div_12_Template, 4, 4, "div", 66)(13, ProductListComponent_div_15_div_29_div_13_Template, 2, 1, "div", 67);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.subCategorySearchTerm);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.subCategorySearchTerm);
    \u0275\u0275advance();
    \u0275\u0275classProp("selected", !ctx_r1.selectedSubCategory);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r1.selectedSubCategory);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.filteredSubCategories);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.subCategorySearchTerm && ctx_r1.filteredSubCategories.length === 0);
  }
}
function ProductListComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275listener("click", function ProductListComponent_div_15_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeFilterModal());
    });
    \u0275\u0275elementStart(1, "div", 35);
    \u0275\u0275listener("click", function ProductListComponent_div_15_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 36)(3, "h3", 37);
    \u0275\u0275text(4, "Filter Products");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 38);
    \u0275\u0275listener("click", function ProductListComponent_div_15_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeFilterModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 39);
    \u0275\u0275element(7, "line", 40)(8, "line", 41);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "div", 42)(10, "div", 43)(11, "label", 44);
    \u0275\u0275text(12, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 45);
    \u0275\u0275listener("click", function ProductListComponent_div_15_Template_div_click_13_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleCategoryDropdown());
    });
    \u0275\u0275elementStart(14, "div", 46);
    \u0275\u0275template(15, ProductListComponent_div_15_span_15_Template, 2, 0, "span", 47)(16, ProductListComponent_div_15_span_16_Template, 2, 1, "span", 48);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(17, "svg", 49);
    \u0275\u0275element(18, "polyline", 50);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(19, ProductListComponent_div_15_div_19_Template, 14, 7, "div", 51);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(20, "div", 43)(21, "label", 44);
    \u0275\u0275text(22, "Sub-Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 45);
    \u0275\u0275listener("click", function ProductListComponent_div_15_Template_div_click_23_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectedCategory && ctx_r1.toggleSubCategoryDropdown());
    });
    \u0275\u0275elementStart(24, "div", 46);
    \u0275\u0275template(25, ProductListComponent_div_15_span_25_Template, 2, 1, "span", 47)(26, ProductListComponent_div_15_span_26_Template, 2, 1, "span", 48);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(27, "svg", 49);
    \u0275\u0275element(28, "polyline", 50);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(29, ProductListComponent_div_15_div_29_Template, 14, 7, "div", 51);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(30, "div", 52)(31, "button", 53);
    \u0275\u0275listener("click", function ProductListComponent_div_15_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearAllFilters());
    });
    \u0275\u0275text(32, " Clear All ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "button", 54);
    \u0275\u0275listener("click", function ProductListComponent_div_15_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyFilters());
    });
    \u0275\u0275text(34, " Apply Filters ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(15);
    \u0275\u0275property("ngIf", !ctx_r1.selectedCategory);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedCategory);
    \u0275\u0275advance();
    \u0275\u0275classProp("open", ctx_r1.showCategoryDropdown);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.showCategoryDropdown);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("disabled", !ctx_r1.selectedCategory);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.selectedSubCategory);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedSubCategory);
    \u0275\u0275advance();
    \u0275\u0275classProp("open", ctx_r1.showSubCategoryDropdown);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.showSubCategoryDropdown && ctx_r1.selectedCategory);
  }
}
function ProductListComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275element(1, "div", 74);
    \u0275\u0275elementStart(2, "div", 75);
    \u0275\u0275text(3, "Loading POS items...");
    \u0275\u0275elementEnd()();
  }
}
function ProductListComponent_div_17_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 80);
    \u0275\u0275listener("click", function ProductListComponent_div_17_button_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToLogin());
    });
    \u0275\u0275text(1, " Go to Login ");
    \u0275\u0275elementEnd();
  }
}
function ProductListComponent_div_17_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 80);
    \u0275\u0275listener("click", function ProductListComponent_div_17_button_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.fetchProducts());
    });
    \u0275\u0275text(1, " Retry ");
    \u0275\u0275elementEnd();
  }
}
function ProductListComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 76)(1, "div", 77);
    \u0275\u0275text(2, "\u26A0\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 78);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ProductListComponent_div_17_button_5_Template, 2, 0, "button", 79)(6, ProductListComponent_div_17_button_6_Template, 2, 0, "button", 79);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.error);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.error.includes("Unauthenticated") || ctx_r1.error.includes("authenticated"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.error.includes("Unauthenticated") && !ctx_r1.error.includes("authenticated"));
  }
}
function ProductListComponent_ul_18_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 83);
    \u0275\u0275listener("click", function ProductListComponent_ul_18_li_1_Template_li_click_0_listener() {
      const p_r17 = \u0275\u0275restoreView(_r16).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addToCart(p_r17));
    });
    \u0275\u0275elementStart(1, "div", 84)(2, "div", 85)(3, "div", 86);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 85)(6, "div", 87);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 85)(9, "div", 86);
    \u0275\u0275text(10, "Rs. ");
    \u0275\u0275elementStart(11, "strong");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 88);
    \u0275\u0275text(14);
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16, "Qty");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const p_r17 = ctx.$implicit;
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(7, _c0, p_r17.quantity > 0 && p_r17.quantity < 5, p_r17.quantity === 0));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", p_r17.product.name, " (", p_r17.product.code, ")");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", p_r17.product.category.name, " \u2022 ", p_r17.product.sub_category.name, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(p_r17.product.price);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", p_r17.quantity, " ");
  }
}
function ProductListComponent_ul_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 81);
    \u0275\u0275template(1, ProductListComponent_ul_18_li_1_Template, 17, 10, "li", 82);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.filteredProducts);
  }
}
function ProductListComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 89)(1, "div", 90);
    \u0275\u0275text(2, "\u{1F4E6}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 91);
    \u0275\u0275text(4, "No POS Items Found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 92);
    \u0275\u0275text(6, "There are currently no products available in the system.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 80);
    \u0275\u0275listener("click", function ProductListComponent_div_19_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.fetchProducts());
    });
    \u0275\u0275text(8, "Refresh");
    \u0275\u0275elementEnd()();
  }
}
function ProductListComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 93)(1, "div", 94);
    \u0275\u0275text(2, "\u{1F50D}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 95);
    \u0275\u0275text(4, "No Results Found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 96);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 97);
    \u0275\u0275listener("click", function ProductListComponent_div_20_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearSearch());
    });
    \u0275\u0275text(8, "Clear Search");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1('No products found matching "', ctx_r1.searchTerm, '"');
  }
}
var ProductListComponent = class _ProductListComponent {
  productService;
  auth;
  cart;
  router;
  products = [];
  filteredProducts = [];
  loading = false;
  error = null;
  username = null;
  userEmail = null;
  logoUrl = null;
  // Search functionality
  searchTerm = "";
  searchTimeout;
  // Filter functionality
  showFilterModal = false;
  showCategoryDropdown = false;
  showSubCategoryDropdown = false;
  categories = [];
  subCategories = [];
  filteredCategories = [];
  filteredSubCategories = [];
  selectedCategory = null;
  selectedSubCategory = null;
  categorySearchTerm = "";
  subCategorySearchTerm = "";
  placeholderUrl = `${environment.assetsBase.replace(/\/$/, "")}/no-image-icon.jpg`;
  subs = null;
  // previously used for inline expansion; removed when details page was deprecated
  constructor(productService, auth, cart, router) {
    this.productService = productService;
    this.auth = auth;
    this.cart = cart;
    this.router = router;
  }
  ngOnInit() {
    this.subs = this.auth.user$.subscribe((u) => {
      this.username = u?.name || u?.full_name || u?.username || null;
      this.userEmail = u?.email || u?.email_address || null;
      const logoVal = u?.logo || u?.fav_icon || u?.logo_url || null;
      if (logoVal) {
        if (/^https?:\/\//i.test(logoVal)) {
          this.logoUrl = logoVal;
        } else {
          this.logoUrl = `${environment.assetsBase.replace(/\/$/, "")}/${logoVal.replace(/^\//, "")}`;
        }
      } else {
        this.logoUrl = `${environment.assetsBase.replace(/\/$/, "")}/no-image-icon.jpg`;
      }
    });
    this.fetchProducts();
  }
  ngOnDestroy() {
    this.subs?.unsubscribe();
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }
  }
  fetchProducts() {
    this.loading = true;
    this.error = null;
    if (!this.auth.isLoggedIn()) {
      this.error = "You are not authenticated. Please log in.";
      this.loading = false;
      return;
    }
    this.productService.list().subscribe({
      next: (res) => {
        this.products = res.data?.data ?? res.data ?? res;
        this.normalizeProductQuantities();
        this.extractCategoriesAndSubCategories();
        this.filteredProducts = [...this.products];
        this.loading = false;
      },
      error: (err) => {
        console.error("Product fetch error:", err);
        if (err.status === 401) {
          this.error = "Unauthenticated. Please log in again.";
          this.auth.clearSession();
        } else if (err.status === 403) {
          this.error = "Access denied. You do not have permission to view POS items.";
        } else if (err.status === 404) {
          this.error = "POS endpoint not found. Please check your configuration.";
        } else {
          this.error = err?.error?.message || "Failed to load POS items. Please try again.";
        }
        this.loading = false;
      }
    });
  }
  // Ensure each product has a safe numeric `quantity` (integer >= 0)
  normalizeProductQuantities() {
    if (!Array.isArray(this.products))
      return;
    this.products = this.products.map((p) => {
      const raw = p?.quantity ?? p?.product?.quantity ?? 0;
      const num = Number(raw);
      const safe = Number.isFinite(num) ? Math.max(0, Math.floor(num)) : 0;
      return __spreadProps(__spreadValues({}, p), { quantity: safe });
    });
  }
  // Search functionality methods
  onSearch() {
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }
    this.searchTimeout = setTimeout(() => {
      this.filterProducts();
    }, 300);
  }
  filterProducts() {
    if (!this.searchTerm.trim()) {
      this.filteredProducts = [...this.products];
      return;
    }
    const searchLower = this.searchTerm.toLowerCase().trim();
    this.filteredProducts = this.products.filter((item) => {
      const product = item.product || item;
      const productCode = (product.code || "").toLowerCase();
      if (productCode.includes(searchLower))
        return true;
      const productName = (product.name || "").toLowerCase();
      if (productName.includes(searchLower))
        return true;
      const categoryName = (product.category?.name || "").toLowerCase();
      if (categoryName.includes(searchLower))
        return true;
      const subCategoryName = (product.sub_category?.name || "").toLowerCase();
      if (subCategoryName.includes(searchLower))
        return true;
      return false;
    });
  }
  clearSearch() {
    this.searchTerm = "";
    this.applyAllFilters();
  }
  // Extract unique categories and sub-categories from products
  extractCategoriesAndSubCategories() {
    const categoryMap = /* @__PURE__ */ new Map();
    const subCategoryMap = /* @__PURE__ */ new Map();
    this.products.forEach((item) => {
      const product = item.product || item;
      if (product.category && product.category.id) {
        categoryMap.set(product.category.id, product.category);
      }
      if (product.sub_category && product.sub_category.id) {
        subCategoryMap.set(product.sub_category.id, product.sub_category);
      }
    });
    this.categories = Array.from(categoryMap.values()).sort((a, b) => a.name.localeCompare(b.name));
    this.subCategories = Array.from(subCategoryMap.values()).sort((a, b) => a.name.localeCompare(b.name));
    this.filteredCategories = [...this.categories];
    this.filteredSubCategories = [...this.subCategories];
    console.log("Categories extracted:", this.categories.length, this.categories);
    console.log("Sub-categories extracted:", this.subCategories.length, this.subCategories);
  }
  // Filter modal methods
  openFilterModal() {
    this.showFilterModal = true;
    this.categorySearchTerm = "";
    this.subCategorySearchTerm = "";
    this.filteredCategories = [...this.categories];
    this.filteredSubCategories = this.selectedCategory ? this.subCategories.filter((sub) => this.products.some((item) => (item.product || item).category?.id === this.selectedCategory.id && (item.product || item).sub_category?.id === sub.id)) : [...this.subCategories];
  }
  closeFilterModal() {
    this.showFilterModal = false;
    this.showCategoryDropdown = false;
    this.showSubCategoryDropdown = false;
    this.categorySearchTerm = "";
    this.subCategorySearchTerm = "";
  }
  // Dropdown toggle methods
  toggleCategoryDropdown() {
    this.showCategoryDropdown = !this.showCategoryDropdown;
    this.showSubCategoryDropdown = false;
    if (this.showCategoryDropdown) {
      this.categorySearchTerm = "";
      this.filteredCategories = [...this.categories];
    }
  }
  toggleSubCategoryDropdown() {
    this.showSubCategoryDropdown = !this.showSubCategoryDropdown;
    this.showCategoryDropdown = false;
    if (this.showSubCategoryDropdown) {
      this.subCategorySearchTerm = "";
      this.filteredSubCategories = this.selectedCategory ? this.subCategories.filter((sub) => this.products.some((item) => (item.product || item).category?.id === this.selectedCategory.id && (item.product || item).sub_category?.id === sub.id)) : [...this.subCategories];
    }
  }
  // Category search methods
  onCategorySearch() {
    if (!this.categorySearchTerm.trim()) {
      this.filteredCategories = [...this.categories];
      return;
    }
    const searchLower = this.categorySearchTerm.toLowerCase();
    this.filteredCategories = this.categories.filter((category) => category.name.toLowerCase().includes(searchLower));
  }
  clearCategorySearch() {
    this.categorySearchTerm = "";
    this.filteredCategories = [...this.categories];
  }
  selectCategory(category) {
    this.selectedCategory = category;
    this.selectedSubCategory = null;
    this.subCategorySearchTerm = "";
    this.showCategoryDropdown = false;
    if (category) {
      this.filteredSubCategories = this.subCategories.filter((sub) => this.products.some((item) => (item.product || item).category?.id === category.id && (item.product || item).sub_category?.id === sub.id));
    } else {
      this.filteredSubCategories = [...this.subCategories];
    }
  }
  // Sub-category search methods
  onSubCategorySearch() {
    if (!this.subCategorySearchTerm.trim()) {
      this.filteredSubCategories = this.selectedCategory ? this.subCategories.filter((sub) => this.products.some((item) => (item.product || item).category?.id === this.selectedCategory.id && (item.product || item).sub_category?.id === sub.id)) : [...this.subCategories];
      return;
    }
    const searchLower = this.subCategorySearchTerm.toLowerCase();
    const availableSubCategories = this.selectedCategory ? this.subCategories.filter((sub) => this.products.some((item) => (item.product || item).category?.id === this.selectedCategory.id && (item.product || item).sub_category?.id === sub.id)) : this.subCategories;
    this.filteredSubCategories = availableSubCategories.filter((subCategory) => subCategory.name.toLowerCase().includes(searchLower));
  }
  clearSubCategorySearch() {
    this.subCategorySearchTerm = "";
    this.filteredSubCategories = this.selectedCategory ? this.subCategories.filter((sub) => this.products.some((item) => (item.product || item).category?.id === this.selectedCategory.id && (item.product || item).sub_category?.id === sub.id)) : [...this.subCategories];
  }
  selectSubCategory(subCategory) {
    this.selectedSubCategory = subCategory;
    this.showSubCategoryDropdown = false;
  }
  // Filter management methods
  clearCategoryFilter() {
    this.selectedCategory = null;
    this.selectedSubCategory = null;
    this.applyAllFilters();
  }
  clearSubCategoryFilter() {
    this.selectedSubCategory = null;
    this.applyAllFilters();
  }
  clearAllFilters() {
    this.selectedCategory = null;
    this.selectedSubCategory = null;
    this.searchTerm = "";
    this.applyAllFilters();
    this.closeFilterModal();
  }
  applyFilters() {
    this.applyAllFilters();
    this.closeFilterModal();
  }
  // Combined filtering method
  applyAllFilters() {
    let filtered = [...this.products];
    if (this.searchTerm.trim()) {
      const searchLower = this.searchTerm.toLowerCase().trim();
      filtered = filtered.filter((item) => {
        const product = item.product || item;
        const productCode = (product.code || "").toLowerCase();
        const productName = (product.name || "").toLowerCase();
        const categoryName = (product.category?.name || "").toLowerCase();
        const subCategoryName = (product.sub_category?.name || "").toLowerCase();
        return productCode.includes(searchLower) || productName.includes(searchLower) || categoryName.includes(searchLower) || subCategoryName.includes(searchLower);
      });
    }
    if (this.selectedCategory) {
      filtered = filtered.filter((item) => {
        const product = item.product || item;
        return product.category?.id === this.selectedCategory.id;
      });
    }
    if (this.selectedSubCategory) {
      filtered = filtered.filter((item) => {
        const product = item.product || item;
        return product.sub_category?.id === this.selectedSubCategory.id;
      });
    }
    this.filteredProducts = filtered;
  }
  logout() {
    this.auth.logout().subscribe({
      error: () => this.auth.clearSession()
    });
  }
  // derive id from the list item wrapper
  productIdOf(item) {
    return String(item?.product?.id ?? item?.id ?? item?.product?.unique_id ?? "");
  }
  // toggleDetails removed — details are no longer fetched/expanded inline
  imgUrl(d) {
    if (!d)
      return null;
    const img = d.image || d.file || d.image_path || d.photo || null;
    return this.productService.resolveImageUrl(img);
  }
  addToCart(item) {
    this.cart.add(item.product ?? item);
  }
  goToLogin() {
    this.router.navigate(["/login"]);
  }
  static \u0275fac = function ProductListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProductListComponent)(\u0275\u0275directiveInject(ProductService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(CartService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductListComponent, selectors: [["app-product-list"]], decls: 21, vars: 12, consts: [[1, "search-container"], [1, "search-input-wrapper"], [1, "search-input-group"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "input-search-icon"], ["cx", "11", "cy", "11", "r", "8"], ["d", "m21 21-4.35-4.35"], ["type", "text", "placeholder", "Search by product code, name, category or sub-category...", "autocomplete", "off", 1, "search-input", 3, "ngModelChange", "input", "ngModel"], ["class", "clear-search-btn", "type", "button", "aria-label", "Clear search", 3, "click", 4, "ngIf"], ["type", "button", "aria-label", "Filter products", 1, "filter-btn", 3, "click"], [1, "filter-icon-wrapper"], ["viewBox", "0 0 24 24", "fill", "currentColor", 1, "filter-icon"], ["d", "M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"], ["class", "filter-badge", 4, "ngIf"], ["class", "search-results-info", 4, "ngIf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], ["class", "loading-container", 4, "ngIf"], ["class", "error-container", 4, "ngIf"], ["class", "product-list", 4, "ngIf"], ["class", "no-products-container", 4, "ngIf"], ["class", "no-results-container", 4, "ngIf"], ["type", "button", "aria-label", "Clear search", 1, "clear-search-btn", 3, "click"], [1, "clear-icon"], [1, "filter-badge"], [1, "search-results-info"], [1, "results-summary"], [1, "results-text"], ["class", "active-filters", 4, "ngIf"], [1, "active-filters"], [1, "filters-label"], ["class", "filter-chip category-chip", 4, "ngIf"], ["class", "filter-chip subcategory-chip", 4, "ngIf"], [1, "filter-chip", "category-chip"], ["type", "button", 1, "chip-remove", 3, "click"], [1, "filter-chip", "subcategory-chip"], [1, "modal-overlay", 3, "click"], [1, "modal-content", 3, "click"], [1, "modal-header"], [1, "modal-title"], ["type", "button", 1, "modal-close-btn", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], [1, "modal-body"], [1, "filter-group"], [1, "filter-label"], [1, "custom-select-wrapper", 3, "click"], [1, "custom-select-display"], ["class", "placeholder", 4, "ngIf"], ["class", "selected-value", 4, "ngIf"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "dropdown-arrow"], ["points", "6,9 12,15 18,9"], ["class", "custom-dropdown", 4, "ngIf"], [1, "modal-footer"], ["type", "button", 1, "btn-secondary", 3, "click"], ["type", "button", 1, "btn-primary", 3, "click"], [1, "placeholder"], [1, "selected-value"], [1, "custom-dropdown"], [1, "dropdown-search"], [1, "search-input-container"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "search-icon"], ["type", "text", "placeholder", "Search categories...", "autocomplete", "off", 1, "dropdown-search-input", 3, "ngModelChange", "input", "click", "ngModel"], ["class", "clear-search-btn", "type", "button", 3, "click", 4, "ngIf"], [1, "dropdown-option", 3, "click"], [1, "option-text"], ["class", "check-icon", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 4, "ngIf"], ["class", "dropdown-option", 3, "selected", "click", 4, "ngFor", "ngForOf"], ["class", "no-options-message", 4, "ngIf"], ["type", "button", 1, "clear-search-btn", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "check-icon"], ["points", "20,6 9,17 4,12"], [1, "no-options-message"], ["type", "text", "placeholder", "Search sub-categories...", "autocomplete", "off", 1, "dropdown-search-input", 3, "ngModelChange", "input", "click", "ngModel"], [1, "loading-container"], [1, "loading-spinner"], [1, "loading-text"], [1, "error-container"], [1, "error-icon"], [1, "error-message"], ["class", "retry-btn", 3, "click", 4, "ngIf"], [1, "retry-btn", 3, "click"], [1, "product-list"], ["class", "product-item", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "product-item", 3, "click", "ngClass"], [1, "product-item-listing"], [1, "product-main"], [1, "product-title"], [1, "product-meta", "mb-3"], [1, "product-meta"], [1, "no-products-container"], [1, "no-products-icon"], [1, "no-products-title"], [1, "no-products-message"], [1, "no-results-container"], [1, "no-results-icon"], [1, "no-results-title"], [1, "no-results-message"], [1, "clear-btn", 3, "click"]], template: function ProductListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div")(1, "div", 0)(2, "div", 1)(3, "div", 2);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(4, "svg", 3);
      \u0275\u0275element(5, "circle", 4)(6, "path", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(7, "input", 6);
      \u0275\u0275twoWayListener("ngModelChange", function ProductListComponent_Template_input_ngModelChange_7_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return $event;
      });
      \u0275\u0275listener("input", function ProductListComponent_Template_input_input_7_listener() {
        return ctx.onSearch();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(8, ProductListComponent_button_8_Template, 3, 0, "button", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "button", 8);
      \u0275\u0275listener("click", function ProductListComponent_Template_button_click_9_listener() {
        return ctx.openFilterModal();
      });
      \u0275\u0275elementStart(10, "div", 9);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(11, "svg", 10);
      \u0275\u0275element(12, "path", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275template(13, ProductListComponent_span_13_Template, 2, 1, "span", 12);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(14, ProductListComponent_div_14_Template, 5, 3, "div", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275template(15, ProductListComponent_div_15_Template, 35, 12, "div", 14)(16, ProductListComponent_div_16_Template, 4, 0, "div", 15)(17, ProductListComponent_div_17_Template, 7, 3, "div", 16)(18, ProductListComponent_ul_18_Template, 2, 1, "ul", 17)(19, ProductListComponent_div_19_Template, 9, 0, "div", 18)(20, ProductListComponent_div_20_Template, 9, 1, "div", 19);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.searchTerm);
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.selectedCategory || ctx.selectedSubCategory);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.selectedCategory || ctx.selectedSubCategory);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.searchTerm || ctx.selectedCategory || ctx.selectedSubCategory);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showFilterModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.filteredProducts == null ? null : ctx.filteredProducts.length);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !(ctx.filteredProducts == null ? null : ctx.filteredProducts.length) && !ctx.loading && !ctx.error && (ctx.products == null ? null : ctx.products.length) === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !(ctx.filteredProducts == null ? null : ctx.filteredProducts.length) && !ctx.loading && !ctx.error && ctx.searchTerm);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, RouterModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  padding: 0.75rem;\n  background-color: color-mix(in srgb, var(--color-primary-bg) 5%, white 95%);\n  font-size: 13px;\n  line-height: 1.35;\n}\n.search-container[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  padding: 1rem 0;\n  margin-bottom: 1rem;\n  border: 1px solid var(--color-neutral-300);\n}\n.search-container[_ngcontent-%COMP%]   .search-input-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  align-items: stretch;\n}\n.search-container[_ngcontent-%COMP%]   .search-input-wrapper[_ngcontent-%COMP%]   .search-input-group[_ngcontent-%COMP%] {\n  flex: 1;\n  position: relative;\n  display: flex;\n  align-items: center;\n  background: white;\n  border-radius: 6px;\n  border: 1px solid var(--color-neutral-400);\n  transition: border-color 0.2s ease;\n}\n.search-container[_ngcontent-%COMP%]   .search-input-wrapper[_ngcontent-%COMP%]   .search-input-group[_ngcontent-%COMP%]:focus-within {\n  border-color: var(--color-primary-bg);\n}\n.search-container[_ngcontent-%COMP%]   .search-input-wrapper[_ngcontent-%COMP%]   .search-input-group[_ngcontent-%COMP%]   .input-search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0.75rem;\n  width: 16px;\n  height: 16px;\n  color: var(--color-neutral-500);\n  z-index: 1;\n}\n.search-container[_ngcontent-%COMP%]   .search-input-wrapper[_ngcontent-%COMP%]   .search-input-group[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem 2.5rem 0.75rem 2.25rem;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  background: transparent;\n  color: var(--color-neutral-800);\n}\n.search-container[_ngcontent-%COMP%]   .search-input-wrapper[_ngcontent-%COMP%]   .search-input-group[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.search-container[_ngcontent-%COMP%]   .search-input-wrapper[_ngcontent-%COMP%]   .search-input-group[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--color-neutral-500);\n}\n.search-container[_ngcontent-%COMP%]   .search-input-wrapper[_ngcontent-%COMP%]   .search-input-group[_ngcontent-%COMP%]   .clear-search-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0.5rem;\n  background: var(--color-neutral-200);\n  border: none;\n  color: var(--color-neutral-600);\n  cursor: pointer;\n  padding: 0.25rem;\n  border-radius: 4px;\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background-color 0.2s ease;\n}\n.search-container[_ngcontent-%COMP%]   .search-input-wrapper[_ngcontent-%COMP%]   .search-input-group[_ngcontent-%COMP%]   .clear-search-btn[_ngcontent-%COMP%]:hover {\n  background: var(--color-neutral-300);\n}\n.search-container[_ngcontent-%COMP%]   .search-input-wrapper[_ngcontent-%COMP%]   .search-input-group[_ngcontent-%COMP%]   .clear-search-btn[_ngcontent-%COMP%]   .clear-icon[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.search-container[_ngcontent-%COMP%]   .search-input-wrapper[_ngcontent-%COMP%]   .filter-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.75rem;\n  background: var(--color-primary-bg);\n  color: white;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n  min-width: 48px;\n}\n.search-container[_ngcontent-%COMP%]   .search-input-wrapper[_ngcontent-%COMP%]   .filter-btn[_ngcontent-%COMP%]:hover {\n  background: color-mix(in srgb, var(--color-primary-bg) 90%, black);\n}\n.search-container[_ngcontent-%COMP%]   .search-input-wrapper[_ngcontent-%COMP%]   .filter-btn.active[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--color-primary-bg) 50%, white);\n}\n.search-container[_ngcontent-%COMP%]   .search-input-wrapper[_ngcontent-%COMP%]   .filter-btn.active[_ngcontent-%COMP%]   .filter-icon[_ngcontent-%COMP%] {\n  color: white;\n}\n.search-container[_ngcontent-%COMP%]   .search-input-wrapper[_ngcontent-%COMP%]   .filter-btn[_ngcontent-%COMP%]   .filter-icon-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.search-container[_ngcontent-%COMP%]   .search-input-wrapper[_ngcontent-%COMP%]   .filter-btn[_ngcontent-%COMP%]   .filter-icon-wrapper[_ngcontent-%COMP%]   .filter-icon[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n}\n.search-container[_ngcontent-%COMP%]   .search-input-wrapper[_ngcontent-%COMP%]   .filter-btn[_ngcontent-%COMP%]   .filter-icon-wrapper[_ngcontent-%COMP%]   .filter-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -6px;\n  right: -6px;\n  background: #dc3545;\n  color: white;\n  border-radius: 50%;\n  width: 16px;\n  height: 16px;\n  font-size: 10px;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.search-container[_ngcontent-%COMP%]   .search-input-wrapper[_ngcontent-%COMP%]   .filter-btn[_ngcontent-%COMP%]:focus {\n  outline: 2px solid var(--color-primary-bg-light);\n  outline-offset: 2px;\n}\n.search-container[_ngcontent-%COMP%]   .search-results-info[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  padding-top: 1rem;\n  border-top: 1px solid var(--color-neutral-200);\n}\n.search-container[_ngcontent-%COMP%]   .search-results-info[_ngcontent-%COMP%]   .results-summary[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 14px;\n  color: var(--color-neutral-700);\n  margin-bottom: 0.75rem;\n}\n.search-container[_ngcontent-%COMP%]   .search-results-info[_ngcontent-%COMP%]   .results-summary[_ngcontent-%COMP%]   .results-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  opacity: 0.8;\n}\n.search-container[_ngcontent-%COMP%]   .search-results-info[_ngcontent-%COMP%]   .results-summary[_ngcontent-%COMP%]   .results-text[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.search-container[_ngcontent-%COMP%]   .search-results-info[_ngcontent-%COMP%]   .active-filters[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.5rem;\n}\n.search-container[_ngcontent-%COMP%]   .search-results-info[_ngcontent-%COMP%]   .active-filters[_ngcontent-%COMP%]   .filters-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--color-neutral-600);\n  font-weight: 500;\n  margin-right: 0.25rem;\n}\n.search-container[_ngcontent-%COMP%]   .search-results-info[_ngcontent-%COMP%]   .active-filters[_ngcontent-%COMP%]   .filter-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n  padding: 0.25rem 0.75rem;\n  border-radius: 16px;\n  font-size: 12px;\n  font-weight: 500;\n  border: 1px solid;\n}\n.search-container[_ngcontent-%COMP%]   .search-results-info[_ngcontent-%COMP%]   .active-filters[_ngcontent-%COMP%]   .filter-chip.category-chip[_ngcontent-%COMP%] {\n  background: var(--color-primary-bg-light);\n  color: var(--color-primary-bg);\n  border-color: var(--color-primary-bg);\n}\n.search-container[_ngcontent-%COMP%]   .search-results-info[_ngcontent-%COMP%]   .active-filters[_ngcontent-%COMP%]   .filter-chip.subcategory-chip[_ngcontent-%COMP%] {\n  background: var(--color-info-bg);\n  color: var(--color-info-text);\n  border-color: var(--color-info-border);\n}\n.search-container[_ngcontent-%COMP%]   .search-results-info[_ngcontent-%COMP%]   .active-filters[_ngcontent-%COMP%]   .filter-chip[_ngcontent-%COMP%]   .chip-remove[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  color: currentColor;\n  cursor: pointer;\n  padding: 0.125rem;\n  border-radius: 2px;\n  width: 14px;\n  height: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 10px;\n  margin-left: 0.25rem;\n}\n.search-container[_ngcontent-%COMP%]   .search-results-info[_ngcontent-%COMP%]   .active-filters[_ngcontent-%COMP%]   .filter-chip[_ngcontent-%COMP%]   .chip-remove[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.1);\n}\n.search-input-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem 1rem;\n  border: 2px solid var(--color-neutral-400);\n  border-radius: 6px;\n  font-size: 14px;\n  background-color: white;\n  transition: border-color 0.2s ease;\n}\n.search-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--color-primary-bg);\n}\n.search-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--color-neutral-500);\n}\n.clear-search-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0.75rem;\n  background: none;\n  border: none;\n  font-size: 16px;\n  color: var(--color-neutral-600);\n  cursor: pointer;\n  padding: 0.25rem;\n  border-radius: 50%;\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background-color 0.2s ease;\n}\n.clear-search-btn[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-neutral-200);\n  color: var(--color-neutral-800);\n}\n.clear-search-btn[_ngcontent-%COMP%]:focus {\n  outline: 2px solid var(--color-primary-bg-light);\n  outline-offset: 2px;\n}\n.search-results-info[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  font-size: 12px;\n  color: var(--color-neutral-600);\n  text-align: center;\n}\n.no-results[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2rem;\n  color: var(--color-neutral-600);\n  font-style: italic;\n  background: var(--color-neutral-100);\n  border-radius: 6px;\n  margin: 1rem 0;\n}\nh2[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n[_nghost-%COMP%] {\n  display: block;\n  padding: 0;\n  background-color: color-mix(in srgb, var(--color-primary-bg) 5%, white 95%);\n  min-height: calc(100vh - 150px);\n  font-size: 13px;\n  line-height: 1.35;\n}\n[_nghost-%COMP%]   *[_ngcontent-%COMP%], \n[_nghost-%COMP%]   *[_ngcontent-%COMP%]::before, \n[_nghost-%COMP%]   *[_ngcontent-%COMP%]::after {\n  box-sizing: border-box;\n}\nh2[_ngcontent-%COMP%] {\n  margin-bottom: 0.6rem;\n  font-size: 1.05rem;\n  margin-top: 0;\n}\nul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0.5rem;\n  margin: 0;\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 0.75rem;\n  box-sizing: border-box;\n}\nli.product-item[_ngcontent-%COMP%] {\n  background: var(--color-neutral-100);\n  border-radius: 6px;\n  border: 1px solid var(--color-neutral-300);\n}\nli[_ngcontent-%COMP%]   .product-item-listing[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n}\nli.product-item.qty-warning[_ngcontent-%COMP%] {\n  background: var(--color-warning-bg);\n  border: 1px solid var(--color-warning-border);\n}\nli.product-item.qty-danger[_ngcontent-%COMP%] {\n  background: var(--color-danger-bg);\n  border: 1px solid var(--color-danger-border);\n}\n.product-main[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n.product-main[role=button][_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.product-main[role=button][_ngcontent-%COMP%]:hover {\n  background: var(--color-neutral-200);\n}\n.product-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.product-title[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  min-width: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.product-meta[_ngcontent-%COMP%] {\n  color: var(--color-neutral-600);\n  font-size: 0.75rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding: 4px 0px;\n}\n.product-meta.mb-3[_ngcontent-%COMP%] {\n  margin-bottom: 0.25rem;\n}\n.product-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background-color: var(--color-primary-bg-light);\n  border: 1px solid var(--color-primary-bg);\n  color: var(--color-primary-bg);\n  padding: 0 4px;\n  border-radius: 4px;\n}\n.product-footer[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  color: var(--color-neutral-800);\n}\n.expanded[_ngcontent-%COMP%] {\n  margin-top: 0.75rem;\n}\n.expanded-cards[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n}\n.card[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  align-items: flex-start;\n  padding: 0.5rem;\n  border: 1px solid var(--color-neutral-400);\n  border-radius: 6px;\n  background: var(--color-neutral-200);\n  min-width: 0;\n}\n.card-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  object-fit: cover;\n  border-radius: 4px;\n}\nimg[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: auto;\n  display: block;\n}\n.card-body[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.expanded-loading[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  color: var(--color-neutral-600);\n}\n.loading[_ngcontent-%COMP%], \n.error[_ngcontent-%COMP%], \n.no-products[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 1rem 0;\n  font-weight: bold;\n  color: var(--color-neutral-700);\n}\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem 1rem;\n  text-align: center;\n}\n.loading-container[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 4px solid var(--color-neutral-300);\n  border-top: 4px solid var(--color-primary-bg);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin-bottom: 1rem;\n}\n.loading-container[_ngcontent-%COMP%]   .loading-text[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--color-neutral-600);\n  font-weight: 500;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.error-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem 1rem;\n  text-align: center;\n  background: var(--color-danger-bg);\n  border: 1px solid var(--color-danger-border);\n  border-radius: 8px;\n  margin: 1rem;\n}\n.error-container[_ngcontent-%COMP%]   .error-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  margin-bottom: 1rem;\n}\n.error-container[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--color-danger-text);\n  font-weight: 500;\n  margin-bottom: 1.5rem;\n  max-width: 500px;\n}\n.error-container[_ngcontent-%COMP%]   .retry-btn[_ngcontent-%COMP%] {\n  background: var(--color-primary-bg);\n  color: white;\n  border: none;\n  padding: 0.75rem 1.5rem;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n}\n.error-container[_ngcontent-%COMP%]   .retry-btn[_ngcontent-%COMP%]:hover {\n  background: color-mix(in srgb, var(--color-primary-bg) 90%, black);\n}\n.no-products-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem 1rem;\n  text-align: center;\n  background: var(--color-neutral-50);\n  border: 1px solid var(--color-neutral-200);\n  border-radius: 8px;\n  margin: 1rem;\n}\n.no-products-container[_ngcontent-%COMP%]   .no-products-icon[_ngcontent-%COMP%] {\n  font-size: 64px;\n  margin-bottom: 1rem;\n  opacity: 0.6;\n}\n.no-products-container[_ngcontent-%COMP%]   .no-products-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--color-neutral-800);\n  margin-bottom: 0.5rem;\n}\n.no-products-container[_ngcontent-%COMP%]   .no-products-message[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--color-neutral-600);\n  margin-bottom: 1.5rem;\n  max-width: 400px;\n}\n.no-products-container[_ngcontent-%COMP%]   .retry-btn[_ngcontent-%COMP%] {\n  background: var(--color-primary-bg);\n  color: white;\n  border: none;\n  padding: 0.75rem 1.5rem;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n}\n.no-products-container[_ngcontent-%COMP%]   .retry-btn[_ngcontent-%COMP%]:hover {\n  background: color-mix(in srgb, var(--color-primary-bg) 90%, black);\n}\n.no-results-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem 1rem;\n  text-align: center;\n  background: var(--color-warning-bg);\n  border: 1px solid var(--color-warning-border);\n  border-radius: 8px;\n  margin: 1rem;\n}\n.no-results-container[_ngcontent-%COMP%]   .no-results-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  margin-bottom: 1rem;\n  opacity: 0.7;\n}\n.no-results-container[_ngcontent-%COMP%]   .no-results-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--color-warning-text);\n  margin-bottom: 0.5rem;\n}\n.no-results-container[_ngcontent-%COMP%]   .no-results-message[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--color-warning-text);\n  margin-bottom: 1.5rem;\n}\n.no-results-container[_ngcontent-%COMP%]   .clear-btn[_ngcontent-%COMP%] {\n  background: var(--color-neutral-600);\n  color: white;\n  border: none;\n  padding: 0.75rem 1.5rem;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n}\n.no-results-container[_ngcontent-%COMP%]   .clear-btn[_ngcontent-%COMP%]:hover {\n  background: var(--color-neutral-700);\n}\nbutton.logout[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  padding: 0.5rem 1rem;\n  background-color: var(--color-primary-bg);\n  color: var(--color-primary-text);\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n@media (min-width: 0px) {\n  ul[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (min-width: 420px) {\n  ul[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (min-width: 800px) {\n  ul[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n}\n@media (min-width: 1100px) {\n  ul[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n}\n@media (min-width: 1280px) {\n  ul[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(5, minmax(0, 1fr));\n  }\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1100;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  max-width: 400px;\n  width: 90%;\n  max-height: 80vh;\n  overflow: visible;\n  border: 1px solid var(--color-neutral-300);\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border-bottom: 1px solid var(--color-neutral-200);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--color-neutral-900);\n  margin: 0;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .modal-close-btn[_ngcontent-%COMP%] {\n  background: var(--color-neutral-100);\n  border: none;\n  border-radius: 4px;\n  width: 32px;\n  height: 32px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--color-neutral-600);\n  transition: background-color 0.2s ease;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .modal-close-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .modal-close-btn[_ngcontent-%COMP%]:hover {\n  background: var(--color-neutral-200);\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  overflow: visible;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem;\n  border: 1px solid var(--color-neutral-400);\n  border-radius: 6px;\n  font-size: 14px;\n  background: white;\n  color: var(--color-neutral-800);\n  cursor: pointer;\n  transition: border-color 0.2s ease;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--color-primary-bg);\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%]:disabled {\n  background: var(--color-neutral-100);\n  color: var(--color-neutral-500);\n  cursor: not-allowed;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%] {\n  padding: 1rem 1.5rem 1.5rem;\n  background: var(--color-neutral-50);\n  display: flex;\n  gap: 0.75rem;\n  justify-content: flex-end;\n  border-top: 1px solid var(--color-neutral-200);\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%], \n.modal-overlay[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  background: var(--color-neutral-600);\n  color: white;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover {\n  background: var(--color-neutral-700);\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  background: var(--color-primary-bg);\n  color: white;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover {\n  background: color-mix(in srgb, var(--color-primary-bg) 90%, black);\n}\n.filter-group[_ngcontent-%COMP%]   .filter-label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.5rem;\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--color-neutral-700);\n}\n.custom-select-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  overflow: visible;\n}\n.custom-select-wrapper.disabled[_ngcontent-%COMP%]   .custom-select-display[_ngcontent-%COMP%] {\n  background: var(--color-neutral-100);\n  color: var(--color-neutral-500);\n  cursor: not-allowed;\n}\n.custom-select-wrapper.disabled[_ngcontent-%COMP%]   .custom-select-display[_ngcontent-%COMP%]   .placeholder[_ngcontent-%COMP%] {\n  color: var(--color-neutral-400);\n}\n.custom-select-wrapper[_ngcontent-%COMP%]   .custom-select-display[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem 3rem 0.75rem 0.75rem;\n  border: 1px solid var(--color-neutral-400);\n  border-radius: 6px;\n  background: white;\n  color: var(--color-neutral-800);\n  font-size: 14px;\n  cursor: pointer;\n  transition: border-color 0.2s ease;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  min-height: 48px;\n}\n.custom-select-wrapper[_ngcontent-%COMP%]   .custom-select-display[_ngcontent-%COMP%]:hover:not(.disabled) {\n  border-color: var(--color-primary-bg);\n}\n.custom-select-wrapper[_ngcontent-%COMP%]   .custom-select-display[_ngcontent-%COMP%]   .placeholder[_ngcontent-%COMP%] {\n  color: var(--color-neutral-500);\n}\n.custom-select-wrapper[_ngcontent-%COMP%]   .custom-select-display[_ngcontent-%COMP%]   .selected-value[_ngcontent-%COMP%] {\n  color: var(--color-neutral-800);\n  font-weight: 500;\n}\n.custom-select-wrapper[_ngcontent-%COMP%]   .custom-select-display[_ngcontent-%COMP%]   .dropdown-arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0.75rem;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 16px;\n  height: 16px;\n  transition: transform 0.2s ease;\n  color: var(--color-neutral-600);\n}\n.custom-select-wrapper[_ngcontent-%COMP%]   .custom-select-display[_ngcontent-%COMP%]   .dropdown-arrow.open[_ngcontent-%COMP%] {\n  transform: translateY(-50%) rotate(180deg);\n}\n.custom-select-wrapper[_ngcontent-%COMP%]   .custom-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background: white;\n  border: 1px solid var(--color-primary-bg);\n  border-top: none;\n  border-radius: 0 0 6px 6px;\n  max-height: 250px;\n  overflow-y: auto;\n  z-index: 1050;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  display: block;\n}\n.custom-select-wrapper[_ngcontent-%COMP%]   .custom-dropdown[_ngcontent-%COMP%]   .dropdown-search[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  border-bottom: 1px solid var(--color-neutral-200);\n  background: var(--color-neutral-50);\n  position: sticky;\n  top: 0;\n  z-index: 1051;\n}\n.custom-select-wrapper[_ngcontent-%COMP%]   .custom-dropdown[_ngcontent-%COMP%]   .dropdown-search[_ngcontent-%COMP%]   .search-input-container[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.custom-select-wrapper[_ngcontent-%COMP%]   .custom-dropdown[_ngcontent-%COMP%]   .dropdown-search[_ngcontent-%COMP%]   .search-input-container[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0.75rem;\n  width: 14px;\n  height: 14px;\n  color: var(--color-neutral-500);\n  z-index: 1;\n}\n.custom-select-wrapper[_ngcontent-%COMP%]   .custom-dropdown[_ngcontent-%COMP%]   .dropdown-search[_ngcontent-%COMP%]   .search-input-container[_ngcontent-%COMP%]   .dropdown-search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.5rem 2.25rem 0.5rem 2rem;\n  border: 1px solid var(--color-neutral-300);\n  border-radius: 4px;\n  font-size: 13px;\n  background: white;\n  color: var(--color-neutral-800);\n}\n.custom-select-wrapper[_ngcontent-%COMP%]   .custom-dropdown[_ngcontent-%COMP%]   .dropdown-search[_ngcontent-%COMP%]   .search-input-container[_ngcontent-%COMP%]   .dropdown-search-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--color-primary-bg);\n}\n.custom-select-wrapper[_ngcontent-%COMP%]   .custom-dropdown[_ngcontent-%COMP%]   .dropdown-search[_ngcontent-%COMP%]   .search-input-container[_ngcontent-%COMP%]   .dropdown-search-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--color-neutral-400);\n  font-size: 12px;\n}\n.custom-select-wrapper[_ngcontent-%COMP%]   .custom-dropdown[_ngcontent-%COMP%]   .dropdown-search[_ngcontent-%COMP%]   .search-input-container[_ngcontent-%COMP%]   .clear-search-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0.5rem;\n  background: none;\n  border: none;\n  color: var(--color-neutral-500);\n  cursor: pointer;\n  padding: 0.25rem;\n  border-radius: 2px;\n  width: 20px;\n  height: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background-color 0.2s ease;\n}\n.custom-select-wrapper[_ngcontent-%COMP%]   .custom-dropdown[_ngcontent-%COMP%]   .dropdown-search[_ngcontent-%COMP%]   .search-input-container[_ngcontent-%COMP%]   .clear-search-btn[_ngcontent-%COMP%]:hover {\n  background: var(--color-neutral-200);\n  color: var(--color-neutral-700);\n}\n.custom-select-wrapper[_ngcontent-%COMP%]   .custom-dropdown[_ngcontent-%COMP%]   .dropdown-search[_ngcontent-%COMP%]   .search-input-container[_ngcontent-%COMP%]   .clear-search-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n}\n.custom-select-wrapper[_ngcontent-%COMP%]   .custom-dropdown[_ngcontent-%COMP%]   .dropdown-option[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid var(--color-neutral-100);\n  font-size: 14px;\n  color: var(--color-neutral-800);\n}\n.custom-select-wrapper[_ngcontent-%COMP%]   .custom-dropdown[_ngcontent-%COMP%]   .dropdown-option[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.custom-select-wrapper[_ngcontent-%COMP%]   .custom-dropdown[_ngcontent-%COMP%]   .dropdown-option[_ngcontent-%COMP%]:hover {\n  background: var(--color-neutral-50);\n}\n.custom-select-wrapper[_ngcontent-%COMP%]   .custom-dropdown[_ngcontent-%COMP%]   .dropdown-option.selected[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--color-primary-bg) 10%, white);\n  color: var(--color-primary-bg);\n  font-weight: 500;\n}\n.custom-select-wrapper[_ngcontent-%COMP%]   .custom-dropdown[_ngcontent-%COMP%]   .dropdown-option.selected[_ngcontent-%COMP%]   .option-text[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.custom-select-wrapper[_ngcontent-%COMP%]   .custom-dropdown[_ngcontent-%COMP%]   .dropdown-option[_ngcontent-%COMP%]   .option-text[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.custom-select-wrapper[_ngcontent-%COMP%]   .custom-dropdown[_ngcontent-%COMP%]   .dropdown-option[_ngcontent-%COMP%]   .check-icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  color: var(--color-primary-bg);\n  flex-shrink: 0;\n}\n.custom-select-wrapper[_ngcontent-%COMP%]   .custom-dropdown[_ngcontent-%COMP%]   .no-options-message[_ngcontent-%COMP%] {\n  padding: 1rem 0.75rem;\n  text-align: center;\n  color: var(--color-neutral-500);\n  font-size: 13px;\n  font-style: italic;\n  border-bottom: none;\n}\n/*# sourceMappingURL=product-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductListComponent, [{
    type: Component,
    args: [{ selector: "app-product-list", standalone: true, imports: [CommonModule, RouterModule, FormsModule], template: `<div>\r
    <!-- Search Section -->\r
    <div class="search-container">\r
        <div class="search-input-wrapper">\r
            <div class="search-input-group">\r
                <svg class="input-search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                    <circle cx="11" cy="11" r="8"></circle>\r
                    <path d="m21 21-4.35-4.35"></path>\r
                </svg>\r
                <input type="text" class="search-input"\r
                    placeholder="Search by product code, name, category or sub-category..." [(ngModel)]="searchTerm"\r
                    (input)="onSearch()" autocomplete="off">\r
                <button *ngIf="searchTerm" class="clear-search-btn" (click)="clearSearch()" type="button"\r
                    aria-label="Clear search">\r
                    <i class="clear-icon">\u2715</i>\r
                </button>\r
            </div>\r
            <button class="filter-btn" (click)="openFilterModal()" type="button" aria-label="Filter products"\r
                [class.active]="selectedCategory || selectedSubCategory">\r
                <div class="filter-icon-wrapper">\r
                    <svg class="filter-icon" viewBox="0 0 24 24" fill="currentColor">\r
                        <path\r
                            d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z" />\r
                    </svg>\r
                    <span *ngIf="selectedCategory || selectedSubCategory" class="filter-badge">\r
                        {{(selectedCategory ? 1 : 0) + (selectedSubCategory ? 1 : 0)}}\r
                    </span>\r
                </div>\r
            </button>\r
        </div>\r
        <div *ngIf="searchTerm || selectedCategory || selectedSubCategory" class="search-results-info">\r
            <div class="results-summary">\r
                <span class="results-text">Showing {{filteredProducts.length}} of {{products.length}} products</span>\r
            </div>\r
            <div *ngIf="selectedCategory || selectedSubCategory" class="active-filters">\r
                <span class="filters-label">Active Filters:</span>\r
                <span *ngIf="selectedCategory" class="filter-chip category-chip">\r
                    {{selectedCategory.name}}\r
                    <button class="chip-remove" (click)="clearCategoryFilter()" type="button">\u2715</button>\r
                </span>\r
                <span *ngIf="selectedSubCategory" class="filter-chip subcategory-chip">\r
                    {{selectedSubCategory.name}}\r
                    <button class="chip-remove" (click)="clearSubCategoryFilter()" type="button">\u2715</button>\r
                </span>\r
            </div>\r
        </div>\r
    </div>\r
\r
    <!-- Professional Filter Modal -->\r
    <div *ngIf="showFilterModal" class="modal-overlay" (click)="closeFilterModal()">\r
        <div class="modal-content" (click)="$event.stopPropagation()">\r
            <div class="modal-header">\r
                <h3 class="modal-title">Filter Products</h3>\r
                <button class="modal-close-btn" (click)="closeFilterModal()" type="button">\r
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                        <line x1="18" y1="6" x2="6" y2="18"></line>\r
                        <line x1="6" y1="6" x2="18" y2="18"></line>\r
                    </svg>\r
                </button>\r
            </div>\r
            <div class="modal-body">\r
                <!-- Category Selection -->\r
                <div class="filter-group">\r
                    <label class="filter-label">Category</label>\r
                    <div class="custom-select-wrapper" (click)="toggleCategoryDropdown()">\r
                        <div class="custom-select-display">\r
                            <span *ngIf="!selectedCategory" class="placeholder">Select Category</span>\r
                            <span *ngIf="selectedCategory" class="selected-value">{{selectedCategory.name}}</span>\r
                            <svg class="dropdown-arrow" [class.open]="showCategoryDropdown" viewBox="0 0 24 24"\r
                                fill="none" stroke="currentColor" stroke-width="2">\r
                                <polyline points="6,9 12,15 18,9"></polyline>\r
                            </svg>\r
                        </div>\r
                        <div *ngIf="showCategoryDropdown" class="custom-dropdown">\r
                            <!-- Search input for categories -->\r
                            <div class="dropdown-search">\r
                                <div class="search-input-container">\r
                                    <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"\r
                                        stroke-width="2">\r
                                        <circle cx="11" cy="11" r="8"></circle>\r
                                        <path d="m21 21-4.35-4.35"></path>\r
                                    </svg>\r
                                    <input type="text" class="dropdown-search-input" placeholder="Search categories..."\r
                                        [(ngModel)]="categorySearchTerm" (input)="onCategorySearch()"\r
                                        (click)="$event.stopPropagation()" autocomplete="off">\r
                                    <button *ngIf="categorySearchTerm" class="clear-search-btn"\r
                                        (click)="clearCategorySearch(); $event.stopPropagation()" type="button">\r
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                                            <line x1="18" y1="6" x2="6" y2="18"></line>\r
                                            <line x1="6" y1="6" x2="18" y2="18"></line>\r
                                        </svg>\r
                                    </button>\r
                                </div>\r
                            </div>\r
\r
                            <!-- "All Categories" option -->\r
                            <div class="dropdown-option" (click)="selectCategory(null); $event.stopPropagation()"\r
                                [class.selected]="!selectedCategory">\r
                                <span class="option-text">All Categories</span>\r
                                <svg *ngIf="!selectedCategory" class="check-icon" viewBox="0 0 24 24" fill="none"\r
                                    stroke="currentColor" stroke-width="2">\r
                                    <polyline points="20,6 9,17 4,12"></polyline>\r
                                </svg>\r
                            </div>\r
\r
                            <!-- Category options -->\r
                            <div *ngFor="let category of filteredCategories" class="dropdown-option"\r
                                (click)="selectCategory(category); $event.stopPropagation()"\r
                                [class.selected]="selectedCategory?.id === category.id">\r
                                <span class="option-text">{{category.name}}</span>\r
                                <svg *ngIf="selectedCategory?.id === category.id" class="check-icon" viewBox="0 0 24 24"\r
                                    fill="none" stroke="currentColor" stroke-width="2">\r
                                    <polyline points="20,6 9,17 4,12"></polyline>\r
                                </svg>\r
                            </div>\r
\r
                            <!-- No results message for category search -->\r
                            <div *ngIf="categorySearchTerm && filteredCategories.length === 0"\r
                                class="no-options-message">\r
                                No categories found matching "{{categorySearchTerm}}"\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
\r
                <!-- Sub-Category Selection -->\r
                <div class="filter-group">\r
                    <label class="filter-label">Sub-Category</label>\r
                    <div class="custom-select-wrapper" [class.disabled]="!selectedCategory"\r
                        (click)="selectedCategory && toggleSubCategoryDropdown()">\r
                        <div class="custom-select-display">\r
                            <span *ngIf="!selectedSubCategory" class="placeholder">\r
                                {{!selectedCategory ? 'Select category first' : 'Select Sub-Category'}}\r
                            </span>\r
                            <span *ngIf="selectedSubCategory" class="selected-value">{{selectedSubCategory.name}}</span>\r
                            <svg class="dropdown-arrow" [class.open]="showSubCategoryDropdown" viewBox="0 0 24 24"\r
                                fill="none" stroke="currentColor" stroke-width="2">\r
                                <polyline points="6,9 12,15 18,9"></polyline>\r
                            </svg>\r
                        </div>\r
                        <div *ngIf="showSubCategoryDropdown && selectedCategory" class="custom-dropdown">\r
                            <!-- Search input for sub-categories -->\r
                            <div class="dropdown-search">\r
                                <div class="search-input-container">\r
                                    <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"\r
                                        stroke-width="2">\r
                                        <circle cx="11" cy="11" r="8"></circle>\r
                                        <path d="m21 21-4.35-4.35"></path>\r
                                    </svg>\r
                                    <input type="text" class="dropdown-search-input"\r
                                        placeholder="Search sub-categories..." [(ngModel)]="subCategorySearchTerm"\r
                                        (input)="onSubCategorySearch()" (click)="$event.stopPropagation()"\r
                                        autocomplete="off">\r
                                    <button *ngIf="subCategorySearchTerm" class="clear-search-btn"\r
                                        (click)="clearSubCategorySearch(); $event.stopPropagation()" type="button">\r
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                                            <line x1="18" y1="6" x2="6" y2="18"></line>\r
                                            <line x1="6" y1="6" x2="18" y2="18"></line>\r
                                        </svg>\r
                                    </button>\r
                                </div>\r
                            </div>\r
\r
                            <!-- "All Sub-Categories" option -->\r
                            <div class="dropdown-option" (click)="selectSubCategory(null); $event.stopPropagation()"\r
                                [class.selected]="!selectedSubCategory">\r
                                <span class="option-text">All Sub-Categories</span>\r
                                <svg *ngIf="!selectedSubCategory" class="check-icon" viewBox="0 0 24 24" fill="none"\r
                                    stroke="currentColor" stroke-width="2">\r
                                    <polyline points="20,6 9,17 4,12"></polyline>\r
                                </svg>\r
                            </div>\r
\r
                            <!-- Sub-category options -->\r
                            <div *ngFor="let subCategory of filteredSubCategories" class="dropdown-option"\r
                                (click)="selectSubCategory(subCategory); $event.stopPropagation()"\r
                                [class.selected]="selectedSubCategory?.id === subCategory.id">\r
                                <span class="option-text">{{subCategory.name}}</span>\r
                                <svg *ngIf="selectedSubCategory?.id === subCategory.id" class="check-icon"\r
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                                    <polyline points="20,6 9,17 4,12"></polyline>\r
                                </svg>\r
                            </div>\r
\r
                            <!-- No results message for sub-category search -->\r
                            <div *ngIf="subCategorySearchTerm && filteredSubCategories.length === 0"\r
                                class="no-options-message">\r
                                No sub-categories found matching "{{subCategorySearchTerm}}"\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
            <div class="modal-footer">\r
                <button class="btn-secondary" (click)="clearAllFilters()" type="button">\r
                    Clear All\r
                </button>\r
                <button class="btn-primary" (click)="applyFilters()" type="button">\r
                    Apply Filters\r
                </button>\r
            </div>\r
        </div>\r
    </div>\r
\r
    <div *ngIf="loading" class="loading-container">\r
        <div class="loading-spinner"></div>\r
        <div class="loading-text">Loading POS items...</div>\r
    </div>\r
\r
    <div *ngIf="error" class="error-container">\r
        <div class="error-icon">\u26A0\uFE0F</div>\r
        <div class="error-message">{{error}}</div>\r
        <button *ngIf="error.includes('Unauthenticated') || error.includes('authenticated')" class="retry-btn"\r
            (click)="goToLogin()">\r
            Go to Login\r
        </button>\r
        <button *ngIf="!error.includes('Unauthenticated') && !error.includes('authenticated')" class="retry-btn"\r
            (click)="fetchProducts()">\r
            Retry\r
        </button>\r
    </div>\r
    <ul *ngIf="filteredProducts?.length" class="product-list">\r
        <li *ngFor="let p of filteredProducts" class="product-item" (click)="addToCart(p)"\r
            [ngClass]="{ 'qty-warning': p.quantity > 0 && p.quantity < 5, 'qty-danger': p.quantity === 0 }">\r
            <div class="product-item-listing">\r
                <div class="product-main">\r
                    <div class="product-title">{{ p.product.name }} ({{ p.product.code }})</div>\r
\r
                </div>\r
                <div class="product-main">\r
\r
                    <div class="product-meta mb-3">{{ p.product.category.name }} \u2022 {{ p.product.sub_category.name }}\r
                    </div>\r
                </div>\r
                <div class="product-main">\r
                    <div class="product-title">Rs. <strong>{{ p.product.price }}</strong> </div>\r
                    <div class="product-meta">{{ p.quantity }} <span>Qty</span></div>\r
                </div>\r
            </div>\r
\r
        </li>\r
    </ul>\r
    <div *ngIf="!filteredProducts?.length && !loading && !error && products?.length === 0"\r
        class="no-products-container">\r
        <div class="no-products-icon">\u{1F4E6}</div>\r
        <div class="no-products-title">No POS Items Found</div>\r
        <div class="no-products-message">There are currently no products available in the system.</div>\r
        <button class="retry-btn" (click)="fetchProducts()">Refresh</button>\r
    </div>\r
\r
    <div *ngIf="!filteredProducts?.length && !loading && !error && searchTerm" class="no-results-container">\r
        <div class="no-results-icon">\u{1F50D}</div>\r
        <div class="no-results-title">No Results Found</div>\r
        <div class="no-results-message">No products found matching "{{searchTerm}}"</div>\r
        <button class="clear-btn" (click)="clearSearch()">Clear Search</button>\r
    </div>\r
</div>`, styles: ["/* src/app/components/product-list/product-list.component.scss */\n:host {\n  display: block;\n  padding: 0.75rem;\n  background-color: color-mix(in srgb, var(--color-primary-bg) 5%, white 95%);\n  font-size: 13px;\n  line-height: 1.35;\n}\n.search-container {\n  background: white;\n  border-radius: 8px;\n  padding: 1rem 0;\n  margin-bottom: 1rem;\n  border: 1px solid var(--color-neutral-300);\n}\n.search-container .search-input-wrapper {\n  display: flex;\n  gap: 0.75rem;\n  align-items: stretch;\n}\n.search-container .search-input-wrapper .search-input-group {\n  flex: 1;\n  position: relative;\n  display: flex;\n  align-items: center;\n  background: white;\n  border-radius: 6px;\n  border: 1px solid var(--color-neutral-400);\n  transition: border-color 0.2s ease;\n}\n.search-container .search-input-wrapper .search-input-group:focus-within {\n  border-color: var(--color-primary-bg);\n}\n.search-container .search-input-wrapper .search-input-group .input-search-icon {\n  position: absolute;\n  left: 0.75rem;\n  width: 16px;\n  height: 16px;\n  color: var(--color-neutral-500);\n  z-index: 1;\n}\n.search-container .search-input-wrapper .search-input-group .search-input {\n  width: 100%;\n  padding: 0.75rem 2.5rem 0.75rem 2.25rem;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  background: transparent;\n  color: var(--color-neutral-800);\n}\n.search-container .search-input-wrapper .search-input-group .search-input:focus {\n  outline: none;\n}\n.search-container .search-input-wrapper .search-input-group .search-input::placeholder {\n  color: var(--color-neutral-500);\n}\n.search-container .search-input-wrapper .search-input-group .clear-search-btn {\n  position: absolute;\n  right: 0.5rem;\n  background: var(--color-neutral-200);\n  border: none;\n  color: var(--color-neutral-600);\n  cursor: pointer;\n  padding: 0.25rem;\n  border-radius: 4px;\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background-color 0.2s ease;\n}\n.search-container .search-input-wrapper .search-input-group .clear-search-btn:hover {\n  background: var(--color-neutral-300);\n}\n.search-container .search-input-wrapper .search-input-group .clear-search-btn .clear-icon {\n  font-size: 12px;\n}\n.search-container .search-input-wrapper .filter-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.75rem;\n  background: var(--color-primary-bg);\n  color: white;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n  min-width: 48px;\n}\n.search-container .search-input-wrapper .filter-btn:hover {\n  background: color-mix(in srgb, var(--color-primary-bg) 90%, black);\n}\n.search-container .search-input-wrapper .filter-btn.active {\n  background: color-mix(in srgb, var(--color-primary-bg) 50%, white);\n}\n.search-container .search-input-wrapper .filter-btn.active .filter-icon {\n  color: white;\n}\n.search-container .search-input-wrapper .filter-btn .filter-icon-wrapper {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.search-container .search-input-wrapper .filter-btn .filter-icon-wrapper .filter-icon {\n  width: 18px;\n  height: 18px;\n}\n.search-container .search-input-wrapper .filter-btn .filter-icon-wrapper .filter-badge {\n  position: absolute;\n  top: -6px;\n  right: -6px;\n  background: #dc3545;\n  color: white;\n  border-radius: 50%;\n  width: 16px;\n  height: 16px;\n  font-size: 10px;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.search-container .search-input-wrapper .filter-btn:focus {\n  outline: 2px solid var(--color-primary-bg-light);\n  outline-offset: 2px;\n}\n.search-container .search-results-info {\n  margin-top: 1rem;\n  padding-top: 1rem;\n  border-top: 1px solid var(--color-neutral-200);\n}\n.search-container .search-results-info .results-summary {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 14px;\n  color: var(--color-neutral-700);\n  margin-bottom: 0.75rem;\n}\n.search-container .search-results-info .results-summary .results-icon {\n  font-size: 16px;\n  opacity: 0.8;\n}\n.search-container .search-results-info .results-summary .results-text {\n  font-weight: 500;\n}\n.search-container .search-results-info .active-filters {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.5rem;\n}\n.search-container .search-results-info .active-filters .filters-label {\n  font-size: 12px;\n  color: var(--color-neutral-600);\n  font-weight: 500;\n  margin-right: 0.25rem;\n}\n.search-container .search-results-info .active-filters .filter-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n  padding: 0.25rem 0.75rem;\n  border-radius: 16px;\n  font-size: 12px;\n  font-weight: 500;\n  border: 1px solid;\n}\n.search-container .search-results-info .active-filters .filter-chip.category-chip {\n  background: var(--color-primary-bg-light);\n  color: var(--color-primary-bg);\n  border-color: var(--color-primary-bg);\n}\n.search-container .search-results-info .active-filters .filter-chip.subcategory-chip {\n  background: var(--color-info-bg);\n  color: var(--color-info-text);\n  border-color: var(--color-info-border);\n}\n.search-container .search-results-info .active-filters .filter-chip .chip-remove {\n  background: transparent;\n  border: none;\n  color: currentColor;\n  cursor: pointer;\n  padding: 0.125rem;\n  border-radius: 2px;\n  width: 14px;\n  height: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 10px;\n  margin-left: 0.25rem;\n}\n.search-container .search-results-info .active-filters .filter-chip .chip-remove:hover {\n  background: rgba(0, 0, 0, 0.1);\n}\n.search-input-wrapper {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.search-input {\n  width: 100%;\n  padding: 0.75rem 1rem;\n  border: 2px solid var(--color-neutral-400);\n  border-radius: 6px;\n  font-size: 14px;\n  background-color: white;\n  transition: border-color 0.2s ease;\n}\n.search-input:focus {\n  outline: none;\n  border-color: var(--color-primary-bg);\n}\n.search-input::placeholder {\n  color: var(--color-neutral-500);\n}\n.clear-search-btn {\n  position: absolute;\n  right: 0.75rem;\n  background: none;\n  border: none;\n  font-size: 16px;\n  color: var(--color-neutral-600);\n  cursor: pointer;\n  padding: 0.25rem;\n  border-radius: 50%;\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background-color 0.2s ease;\n}\n.clear-search-btn:hover {\n  background-color: var(--color-neutral-200);\n  color: var(--color-neutral-800);\n}\n.clear-search-btn:focus {\n  outline: 2px solid var(--color-primary-bg-light);\n  outline-offset: 2px;\n}\n.search-results-info {\n  margin-top: 0.5rem;\n  font-size: 12px;\n  color: var(--color-neutral-600);\n  text-align: center;\n}\n.no-results {\n  text-align: center;\n  padding: 2rem;\n  color: var(--color-neutral-600);\n  font-style: italic;\n  background: var(--color-neutral-100);\n  border-radius: 6px;\n  margin: 1rem 0;\n}\nh2 {\n  margin-bottom: 1rem;\n}\n:host {\n  display: block;\n  padding: 0;\n  background-color: color-mix(in srgb, var(--color-primary-bg) 5%, white 95%);\n  min-height: calc(100vh - 150px);\n  font-size: 13px;\n  line-height: 1.35;\n}\n:host *,\n:host *::before,\n:host *::after {\n  box-sizing: border-box;\n}\nh2 {\n  margin-bottom: 0.6rem;\n  font-size: 1.05rem;\n  margin-top: 0;\n}\nul {\n  list-style: none;\n  padding: 0.5rem;\n  margin: 0;\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 0.75rem;\n  box-sizing: border-box;\n}\nli.product-item {\n  background: var(--color-neutral-100);\n  border-radius: 6px;\n  border: 1px solid var(--color-neutral-300);\n}\nli .product-item-listing {\n  padding: 0.75rem 1rem;\n}\nli.product-item.qty-warning {\n  background: var(--color-warning-bg);\n  border: 1px solid var(--color-warning-border);\n}\nli.product-item.qty-danger {\n  background: var(--color-danger-bg);\n  border: 1px solid var(--color-danger-border);\n}\n.product-main {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n.product-main[role=button] {\n  cursor: pointer;\n}\n.product-main[role=button]:hover {\n  background: var(--color-neutral-200);\n}\n.product-title {\n  font-weight: 600;\n}\n.product-title {\n  flex: 1 1 auto;\n  min-width: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.product-meta {\n  color: var(--color-neutral-600);\n  font-size: 0.75rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding: 4px 0px;\n}\n.product-meta.mb-3 {\n  margin-bottom: 0.25rem;\n}\n.product-meta span {\n  background-color: var(--color-primary-bg-light);\n  border: 1px solid var(--color-primary-bg);\n  color: var(--color-primary-bg);\n  padding: 0 4px;\n  border-radius: 4px;\n}\n.product-footer {\n  margin-top: 0.5rem;\n  color: var(--color-neutral-800);\n}\n.expanded {\n  margin-top: 0.75rem;\n}\n.expanded-cards {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n}\n.card {\n  display: flex;\n  gap: 0.75rem;\n  align-items: flex-start;\n  padding: 0.5rem;\n  border: 1px solid var(--color-neutral-400);\n  border-radius: 6px;\n  background: var(--color-neutral-200);\n  min-width: 0;\n}\n.card-image img {\n  width: 80px;\n  height: 80px;\n  object-fit: cover;\n  border-radius: 4px;\n}\nimg {\n  max-width: 100%;\n  height: auto;\n  display: block;\n}\n.card-body {\n  flex: 1;\n}\n.expanded-loading {\n  padding: 0.5rem;\n  color: var(--color-neutral-600);\n}\n.loading,\n.error,\n.no-products {\n  text-align: center;\n  margin: 1rem 0;\n  font-weight: bold;\n  color: var(--color-neutral-700);\n}\n.loading-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem 1rem;\n  text-align: center;\n}\n.loading-container .loading-spinner {\n  width: 40px;\n  height: 40px;\n  border: 4px solid var(--color-neutral-300);\n  border-top: 4px solid var(--color-primary-bg);\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin-bottom: 1rem;\n}\n.loading-container .loading-text {\n  font-size: 16px;\n  color: var(--color-neutral-600);\n  font-weight: 500;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.error-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem 1rem;\n  text-align: center;\n  background: var(--color-danger-bg);\n  border: 1px solid var(--color-danger-border);\n  border-radius: 8px;\n  margin: 1rem;\n}\n.error-container .error-icon {\n  font-size: 48px;\n  margin-bottom: 1rem;\n}\n.error-container .error-message {\n  font-size: 16px;\n  color: var(--color-danger-text);\n  font-weight: 500;\n  margin-bottom: 1.5rem;\n  max-width: 500px;\n}\n.error-container .retry-btn {\n  background: var(--color-primary-bg);\n  color: white;\n  border: none;\n  padding: 0.75rem 1.5rem;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n}\n.error-container .retry-btn:hover {\n  background: color-mix(in srgb, var(--color-primary-bg) 90%, black);\n}\n.no-products-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem 1rem;\n  text-align: center;\n  background: var(--color-neutral-50);\n  border: 1px solid var(--color-neutral-200);\n  border-radius: 8px;\n  margin: 1rem;\n}\n.no-products-container .no-products-icon {\n  font-size: 64px;\n  margin-bottom: 1rem;\n  opacity: 0.6;\n}\n.no-products-container .no-products-title {\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--color-neutral-800);\n  margin-bottom: 0.5rem;\n}\n.no-products-container .no-products-message {\n  font-size: 14px;\n  color: var(--color-neutral-600);\n  margin-bottom: 1.5rem;\n  max-width: 400px;\n}\n.no-products-container .retry-btn {\n  background: var(--color-primary-bg);\n  color: white;\n  border: none;\n  padding: 0.75rem 1.5rem;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n}\n.no-products-container .retry-btn:hover {\n  background: color-mix(in srgb, var(--color-primary-bg) 90%, black);\n}\n.no-results-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem 1rem;\n  text-align: center;\n  background: var(--color-warning-bg);\n  border: 1px solid var(--color-warning-border);\n  border-radius: 8px;\n  margin: 1rem;\n}\n.no-results-container .no-results-icon {\n  font-size: 48px;\n  margin-bottom: 1rem;\n  opacity: 0.7;\n}\n.no-results-container .no-results-title {\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--color-warning-text);\n  margin-bottom: 0.5rem;\n}\n.no-results-container .no-results-message {\n  font-size: 14px;\n  color: var(--color-warning-text);\n  margin-bottom: 1.5rem;\n}\n.no-results-container .clear-btn {\n  background: var(--color-neutral-600);\n  color: white;\n  border: none;\n  padding: 0.75rem 1.5rem;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n}\n.no-results-container .clear-btn:hover {\n  background: var(--color-neutral-700);\n}\nbutton.logout {\n  margin-top: 1rem;\n  padding: 0.5rem 1rem;\n  background-color: var(--color-primary-bg);\n  color: var(--color-primary-text);\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n@media (min-width: 0px) {\n  ul {\n    grid-template-columns: 1fr;\n  }\n}\n@media (min-width: 420px) {\n  ul {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (min-width: 800px) {\n  ul {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n}\n@media (min-width: 1100px) {\n  ul {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n}\n@media (min-width: 1280px) {\n  ul {\n    grid-template-columns: repeat(5, minmax(0, 1fr));\n  }\n}\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1100;\n}\n.modal-overlay .modal-content {\n  background: white;\n  border-radius: 8px;\n  max-width: 400px;\n  width: 90%;\n  max-height: 80vh;\n  overflow: visible;\n  border: 1px solid var(--color-neutral-300);\n}\n.modal-overlay .modal-content .modal-header {\n  padding: 1rem;\n  border-bottom: 1px solid var(--color-neutral-200);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.modal-overlay .modal-content .modal-header .modal-title {\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--color-neutral-900);\n  margin: 0;\n}\n.modal-overlay .modal-content .modal-header .modal-close-btn {\n  background: var(--color-neutral-100);\n  border: none;\n  border-radius: 4px;\n  width: 32px;\n  height: 32px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--color-neutral-600);\n  transition: background-color 0.2s ease;\n}\n.modal-overlay .modal-content .modal-header .modal-close-btn svg {\n  width: 16px;\n  height: 16px;\n}\n.modal-overlay .modal-content .modal-header .modal-close-btn:hover {\n  background: var(--color-neutral-200);\n}\n.modal-overlay .modal-content .modal-body {\n  padding: 1.5rem;\n  overflow: visible;\n}\n.modal-overlay .modal-content .modal-body .filter-group {\n  margin-bottom: 1.5rem;\n}\n.modal-overlay .modal-content .modal-body .filter-group:last-child {\n  margin-bottom: 0;\n}\n.modal-overlay .modal-content .modal-body .filter-group .form-select {\n  width: 100%;\n  padding: 0.75rem;\n  border: 1px solid var(--color-neutral-400);\n  border-radius: 6px;\n  font-size: 14px;\n  background: white;\n  color: var(--color-neutral-800);\n  cursor: pointer;\n  transition: border-color 0.2s ease;\n}\n.modal-overlay .modal-content .modal-body .filter-group .form-select:focus {\n  outline: none;\n  border-color: var(--color-primary-bg);\n}\n.modal-overlay .modal-content .modal-body .filter-group .form-select:disabled {\n  background: var(--color-neutral-100);\n  color: var(--color-neutral-500);\n  cursor: not-allowed;\n}\n.modal-overlay .modal-content .modal-body .filter-group .form-select option {\n  padding: 0.5rem;\n}\n.modal-overlay .modal-content .modal-footer {\n  padding: 1rem 1.5rem 1.5rem;\n  background: var(--color-neutral-50);\n  display: flex;\n  gap: 0.75rem;\n  justify-content: flex-end;\n  border-top: 1px solid var(--color-neutral-200);\n}\n.modal-overlay .modal-content .modal-footer .btn-secondary,\n.modal-overlay .modal-content .modal-footer .btn-primary {\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n}\n.modal-overlay .modal-content .modal-footer .btn-secondary {\n  background: var(--color-neutral-600);\n  color: white;\n}\n.modal-overlay .modal-content .modal-footer .btn-secondary:hover {\n  background: var(--color-neutral-700);\n}\n.modal-overlay .modal-content .modal-footer .btn-primary {\n  background: var(--color-primary-bg);\n  color: white;\n}\n.modal-overlay .modal-content .modal-footer .btn-primary:hover {\n  background: color-mix(in srgb, var(--color-primary-bg) 90%, black);\n}\n.filter-group .filter-label {\n  display: block;\n  margin-bottom: 0.5rem;\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--color-neutral-700);\n}\n.custom-select-wrapper {\n  position: relative;\n  width: 100%;\n  overflow: visible;\n}\n.custom-select-wrapper.disabled .custom-select-display {\n  background: var(--color-neutral-100);\n  color: var(--color-neutral-500);\n  cursor: not-allowed;\n}\n.custom-select-wrapper.disabled .custom-select-display .placeholder {\n  color: var(--color-neutral-400);\n}\n.custom-select-wrapper .custom-select-display {\n  width: 100%;\n  padding: 0.75rem 3rem 0.75rem 0.75rem;\n  border: 1px solid var(--color-neutral-400);\n  border-radius: 6px;\n  background: white;\n  color: var(--color-neutral-800);\n  font-size: 14px;\n  cursor: pointer;\n  transition: border-color 0.2s ease;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  min-height: 48px;\n}\n.custom-select-wrapper .custom-select-display:hover:not(.disabled) {\n  border-color: var(--color-primary-bg);\n}\n.custom-select-wrapper .custom-select-display .placeholder {\n  color: var(--color-neutral-500);\n}\n.custom-select-wrapper .custom-select-display .selected-value {\n  color: var(--color-neutral-800);\n  font-weight: 500;\n}\n.custom-select-wrapper .custom-select-display .dropdown-arrow {\n  position: absolute;\n  right: 0.75rem;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 16px;\n  height: 16px;\n  transition: transform 0.2s ease;\n  color: var(--color-neutral-600);\n}\n.custom-select-wrapper .custom-select-display .dropdown-arrow.open {\n  transform: translateY(-50%) rotate(180deg);\n}\n.custom-select-wrapper .custom-dropdown {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background: white;\n  border: 1px solid var(--color-primary-bg);\n  border-top: none;\n  border-radius: 0 0 6px 6px;\n  max-height: 250px;\n  overflow-y: auto;\n  z-index: 1050;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  display: block;\n}\n.custom-select-wrapper .custom-dropdown .dropdown-search {\n  padding: 0.75rem;\n  border-bottom: 1px solid var(--color-neutral-200);\n  background: var(--color-neutral-50);\n  position: sticky;\n  top: 0;\n  z-index: 1051;\n}\n.custom-select-wrapper .custom-dropdown .dropdown-search .search-input-container {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.custom-select-wrapper .custom-dropdown .dropdown-search .search-input-container .search-icon {\n  position: absolute;\n  left: 0.75rem;\n  width: 14px;\n  height: 14px;\n  color: var(--color-neutral-500);\n  z-index: 1;\n}\n.custom-select-wrapper .custom-dropdown .dropdown-search .search-input-container .dropdown-search-input {\n  width: 100%;\n  padding: 0.5rem 2.25rem 0.5rem 2rem;\n  border: 1px solid var(--color-neutral-300);\n  border-radius: 4px;\n  font-size: 13px;\n  background: white;\n  color: var(--color-neutral-800);\n}\n.custom-select-wrapper .custom-dropdown .dropdown-search .search-input-container .dropdown-search-input:focus {\n  outline: none;\n  border-color: var(--color-primary-bg);\n}\n.custom-select-wrapper .custom-dropdown .dropdown-search .search-input-container .dropdown-search-input::placeholder {\n  color: var(--color-neutral-400);\n  font-size: 12px;\n}\n.custom-select-wrapper .custom-dropdown .dropdown-search .search-input-container .clear-search-btn {\n  position: absolute;\n  right: 0.5rem;\n  background: none;\n  border: none;\n  color: var(--color-neutral-500);\n  cursor: pointer;\n  padding: 0.25rem;\n  border-radius: 2px;\n  width: 20px;\n  height: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background-color 0.2s ease;\n}\n.custom-select-wrapper .custom-dropdown .dropdown-search .search-input-container .clear-search-btn:hover {\n  background: var(--color-neutral-200);\n  color: var(--color-neutral-700);\n}\n.custom-select-wrapper .custom-dropdown .dropdown-search .search-input-container .clear-search-btn svg {\n  width: 12px;\n  height: 12px;\n}\n.custom-select-wrapper .custom-dropdown .dropdown-option {\n  padding: 0.75rem;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid var(--color-neutral-100);\n  font-size: 14px;\n  color: var(--color-neutral-800);\n}\n.custom-select-wrapper .custom-dropdown .dropdown-option:last-child {\n  border-bottom: none;\n}\n.custom-select-wrapper .custom-dropdown .dropdown-option:hover {\n  background: var(--color-neutral-50);\n}\n.custom-select-wrapper .custom-dropdown .dropdown-option.selected {\n  background: color-mix(in srgb, var(--color-primary-bg) 10%, white);\n  color: var(--color-primary-bg);\n  font-weight: 500;\n}\n.custom-select-wrapper .custom-dropdown .dropdown-option.selected .option-text {\n  font-weight: 500;\n}\n.custom-select-wrapper .custom-dropdown .dropdown-option .option-text {\n  flex: 1;\n}\n.custom-select-wrapper .custom-dropdown .dropdown-option .check-icon {\n  width: 16px;\n  height: 16px;\n  color: var(--color-primary-bg);\n  flex-shrink: 0;\n}\n.custom-select-wrapper .custom-dropdown .no-options-message {\n  padding: 1rem 0.75rem;\n  text-align: center;\n  color: var(--color-neutral-500);\n  font-size: 13px;\n  font-style: italic;\n  border-bottom: none;\n}\n/*# sourceMappingURL=product-list.component.css.map */\n"] }]
  }], () => [{ type: ProductService }, { type: AuthService }, { type: CartService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductListComponent, { className: "ProductListComponent", filePath: "src/app/components/product-list/product-list.component.ts", lineNumber: 18 });
})();

// src/app/components/profile/profile.component.ts
function ProfileComponent_ng_container_6_p_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p")(1, "span", 11);
    \u0275\u0275text(2, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 12);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.user.email);
  }
}
function ProfileComponent_ng_container_6_p_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p")(1, "span", 11);
    \u0275\u0275text(2, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 12);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.user.phone);
  }
}
function ProfileComponent_ng_container_6_p_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p")(1, "span", 11);
    \u0275\u0275text(2, "Company");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 12);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.user.company);
  }
}
function ProfileComponent_ng_container_6_p_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p")(1, "span", 11);
    \u0275\u0275text(2, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 12);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.user.user_detail.address);
  }
}
function ProfileComponent_ng_container_6_p_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p")(1, "span", 11);
    \u0275\u0275text(2, "Next Payment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 12);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.user.user_detail.plan_end);
  }
}
function ProfileComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "section", 6)(2, "div", 7);
    \u0275\u0275element(3, "img", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 9)(5, "h2");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, ProfileComponent_ng_container_6_p_7_Template, 5, 1, "p", 10)(8, ProfileComponent_ng_container_6_p_8_Template, 5, 1, "p", 10)(9, ProfileComponent_ng_container_6_p_9_Template, 5, 1, "p", 10)(10, ProfileComponent_ng_container_6_p_10_Template, 5, 1, "p", 10)(11, ProfileComponent_ng_container_6_p_11_Template, 5, 1, "p", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx_r1.imgUrl || ((ctx_r1.user == null ? null : ctx_r1.user.avatar) || (ctx_r1.user == null ? null : ctx_r1.user.logo) || "assets/no-avatar.png"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.user.name || ctx_r1.user.full_name || ctx_r1.user.username);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.user.email);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.user.phone);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.user.company);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.user.user_detail.address);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.user.user_detail.plan_end);
  }
}
function ProfileComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1, "Not logged in");
    \u0275\u0275elementEnd();
  }
}
var ProfileComponent = class _ProfileComponent {
  auth;
  router;
  user = null;
  imgUrl = "";
  constructor(auth, router) {
    this.auth = auth;
    this.router = router;
    this.auth.user$.subscribe((u) => {
      this.user = u;
      const candidate = u && (u.fav_icon || u.favicon || u.avatar || u.logo || u.logo_url) || "";
      this.imgUrl = this.resolveImage(candidate) || "assets/no-avatar.png";
    });
  }
  goBack() {
    try {
      this.router.navigate(["/pos"]);
    } catch {
      history.back();
    }
  }
  editProfile() {
    try {
      this.router.navigate(["/profile/edit"]);
    } catch {
    }
  }
  resolveImage(path) {
    if (!path)
      return null;
    const p = String(path).trim();
    if (!p)
      return null;
    if (/^(data:|https?:)\/\//i.test(p))
      return p;
    const base = (environment.assetsBase || "").replace(/\/$/, "");
    return base ? `${base}/${p.replace(/^\//, "")}` : p;
  }
  static \u0275fac = function ProfileComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProfileComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfileComponent, selectors: [["app-profile"]], decls: 9, vars: 2, consts: [["noUser", ""], [1, "profile-page"], [1, "profile-nav"], ["aria-label", "Back", 1, "nav-icon", 3, "click"], [1, "fa-solid", "fa-arrow-left"], [4, "ngIf", "ngIfElse"], [1, "profile-card"], [1, "profile-avatar"], ["alt", "avatar", 3, "src"], [1, "profile-main"], [4, "ngIf"], [1, "label"], [1, "value"], [1, "no-user"]], template: function ProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "button", 3);
      \u0275\u0275listener("click", function ProfileComponent_Template_button_click_2_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.goBack());
      });
      \u0275\u0275element(3, "i", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "h2");
      \u0275\u0275text(5, "Profile");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(6, ProfileComponent_ng_container_6_Template, 12, 7, "ng-container", 5)(7, ProfileComponent_ng_template_7_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const noUser_r3 = \u0275\u0275reference(8);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", ctx.user)("ngIfElse", noUser_r3);
    }
  }, dependencies: [CommonModule, NgIf, RouterModule], styles: ["\n\n.profile-card[_ngcontent-%COMP%] {\n  max-width: 900px;\n  margin: 1rem auto;\n  background: var(--color-neutral-100);\n  border-radius: 12px;\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);\n  padding: 1rem;\n  display: grid;\n  grid-template-columns: 120px 1fr;\n  gap: 1rem;\n  align-items: center;\n}\n.profile-avatar[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  border-radius: 12px;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--color-neutral-200);\n  margin: 0 auto;\n}\n.profile-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.profile-main[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 1rem 0;\n  font-size: 1.25rem;\n}\n.profile-main[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.75rem 0;\n  color: var(--color-neutral-600);\n  display: flex;\n  justify-content: space-between;\n  gap: 1rem;\n  align-items: center;\n  padding-bottom: 0.5rem;\n  border-bottom: 1px solid var(--color-neutral-500);\n}\n.profile-main[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-of-type {\n  border-bottom: none;\n  padding-bottom: 0;\n}\n.profile-main[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--color-neutral-800);\n}\n.profile-main[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  color: var(--color-neutral-600);\n  text-align: right;\n}\n.profile-actions[_ngcontent-%COMP%] {\n  margin-top: 0.75rem;\n  display: flex;\n  gap: 0.5rem;\n}\n.button-primary[_ngcontent-%COMP%] {\n  background: var(--color-primary-bg);\n  color: var(--color-primary-text);\n  padding: 8px 12px;\n  border-radius: 8px;\n  border: none;\n  cursor: pointer;\n}\n.button-outline[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1px solid var(--color-neutral-300);\n  padding: 8px 12px;\n  border-radius: 8px;\n  cursor: pointer;\n}\n.profile-nav[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n  margin-bottom: 0.75rem;\n}\n.profile-nav[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: var(--color-neutral-700);\n  background-color: transparent;\n  border: 1px solid var(--color-neutral-500);\n  padding: 8px;\n  border-radius: 50%;\n  width: 36px;\n  height: 36px;\n}\n@media (max-width: 640px) {\n  .profile-card[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    text-align: center;\n  }\n  .profile-actions[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=profile.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfileComponent, [{
    type: Component,
    args: [{ selector: "app-profile", standalone: true, imports: [CommonModule, RouterModule], template: `<div class="profile-page">\r
    <div class="profile-nav">\r
        <button class="nav-icon" aria-label="Back" (click)="goBack()"><i class="fa-solid fa-arrow-left"></i></button>\r
        <h2>Profile</h2>\r
    </div>\r
\r
    <ng-container *ngIf="user; else noUser">\r
        <section class="profile-card">\r
            <div class="profile-avatar">\r
                <img [src]="imgUrl || (user?.avatar || user?.logo || 'assets/no-avatar.png')" alt="avatar" />\r
            </div>\r
            <div class="profile-main">\r
                <h2>{{ user.name || user.full_name || user.username }}</h2>\r
                <p *ngIf="user.email"><span class="label">Email</span><span class="value">{{ user.email }}</span></p>\r
                <p *ngIf="user.phone"><span class="label">Phone</span><span class="value">{{ user.phone }}</span></p>\r
                <p *ngIf="user.company"><span class="label">Company</span><span class="value">{{ user.company }}</span>\r
                </p>\r
                <p *ngIf="user.user_detail.address"><span class="label">Address</span><span class="value">{{\r
                        user.user_detail.address }}</span></p>\r
                <p *ngIf="user.user_detail.plan_end"><span class="label">Next Payment</span><span class="value">{{\r
                        user.user_detail.plan_end }}</span></p>\r
                <!-- <div class="profile-actions">\r
                    <button class="button-primary" (click)="editProfile()"><i\r
                            class="fa-solid fa-pen-to-square"></i>&nbsp;Edit</button>\r
                    <button class="button-outline" (click)="goBack()"><i\r
                            class="fa-solid fa-home"></i>&nbsp;Home</button>\r
                </div> -->\r
            </div>\r
        </section>\r
    </ng-container>\r
\r
    <ng-template #noUser>\r
        <div class="no-user">Not logged in</div>\r
    </ng-template>\r
</div>`, styles: ["/* src/app/components/profile/profile.component.scss */\n.profile-card {\n  max-width: 900px;\n  margin: 1rem auto;\n  background: var(--color-neutral-100);\n  border-radius: 12px;\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);\n  padding: 1rem;\n  display: grid;\n  grid-template-columns: 120px 1fr;\n  gap: 1rem;\n  align-items: center;\n}\n.profile-avatar {\n  width: 120px;\n  height: 120px;\n  border-radius: 12px;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--color-neutral-200);\n  margin: 0 auto;\n}\n.profile-avatar img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.profile-main h2 {\n  margin: 0 0 1rem 0;\n  font-size: 1.25rem;\n}\n.profile-main p {\n  margin: 0.75rem 0;\n  color: var(--color-neutral-600);\n  display: flex;\n  justify-content: space-between;\n  gap: 1rem;\n  align-items: center;\n  padding-bottom: 0.5rem;\n  border-bottom: 1px solid var(--color-neutral-500);\n}\n.profile-main p:last-of-type {\n  border-bottom: none;\n  padding-bottom: 0;\n}\n.profile-main p .label {\n  font-weight: 600;\n  color: var(--color-neutral-800);\n}\n.profile-main p .value {\n  color: var(--color-neutral-600);\n  text-align: right;\n}\n.profile-actions {\n  margin-top: 0.75rem;\n  display: flex;\n  gap: 0.5rem;\n}\n.button-primary {\n  background: var(--color-primary-bg);\n  color: var(--color-primary-text);\n  padding: 8px 12px;\n  border-radius: 8px;\n  border: none;\n  cursor: pointer;\n}\n.button-outline {\n  background: transparent;\n  border: 1px solid var(--color-neutral-300);\n  padding: 8px 12px;\n  border-radius: 8px;\n  cursor: pointer;\n}\n.profile-nav {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n  margin-bottom: 0.75rem;\n}\n.profile-nav .nav-icon {\n  cursor: pointer;\n  color: var(--color-neutral-700);\n  background-color: transparent;\n  border: 1px solid var(--color-neutral-500);\n  padding: 8px;\n  border-radius: 50%;\n  width: 36px;\n  height: 36px;\n}\n@media (max-width: 640px) {\n  .profile-card {\n    grid-template-columns: 1fr;\n    text-align: center;\n  }\n  .profile-actions {\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=profile.component.css.map */\n"] }]
  }], () => [{ type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfileComponent, { className: "ProfileComponent", filePath: "src/app/components/profile/profile.component.ts", lineNumber: 15 });
})();

// src/app/components/settings/settings.component.ts
var SettingsComponent = class _SettingsComponent {
  static \u0275fac = function SettingsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SettingsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingsComponent, selectors: [["app-settings"]], decls: 17, vars: 0, consts: [[1, "settings-grid"], ["routerLink", "/settings/gender", 1, "setting-card"], ["aria-hidden", "true", 1, "fa-solid", "fa-venus-mars", "fa-2x"], [1, "label"], ["routerLink", "/settings/payment-list", 1, "setting-card"], ["aria-hidden", "true", 1, "fa-solid", "fa-credit-card", "fa-2x"], ["routerLink", "/settings/finance", 1, "setting-card"], ["aria-hidden", "true", 1, "fa-solid", "fa-wallet", "fa-2x"], ["routerLink", "/settings/staff", 1, "setting-card"], ["aria-hidden", "true", 1, "fa-solid", "fa-users", "fa-2x"]], template: function SettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "a", 1);
      \u0275\u0275element(2, "i", 2);
      \u0275\u0275elementStart(3, "div", 3);
      \u0275\u0275text(4, "Gender");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "a", 4);
      \u0275\u0275element(6, "i", 5);
      \u0275\u0275elementStart(7, "div", 3);
      \u0275\u0275text(8, "Payment List");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "a", 6);
      \u0275\u0275element(10, "i", 7);
      \u0275\u0275elementStart(11, "div", 3);
      \u0275\u0275text(12, "Finance");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "a", 8);
      \u0275\u0275element(14, "i", 9);
      \u0275\u0275elementStart(15, "div", 3);
      \u0275\u0275text(16, "Staff");
      \u0275\u0275elementEnd()()();
    }
  }, dependencies: [CommonModule, RouterModule, RouterLink], styles: ["\n\n.settings-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 12px;\n  padding: 12px;\n}\n.setting-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 16px;\n  border-radius: 10px;\n  background: #fff2e2;\n  border: 1px solid #eee;\n  color: var(--text, #222);\n  text-decoration: none;\n}\n.setting-card[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  font-weight: 600;\n}\n/*# sourceMappingURL=settings.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SettingsComponent, [{
    type: Component,
    args: [{ selector: "app-settings", standalone: true, imports: [CommonModule, RouterModule], template: '<div class="settings-grid">\r\n    <a routerLink="/settings/gender" class="setting-card">\r\n        <i class="fa-solid fa-venus-mars fa-2x" aria-hidden="true"></i>\r\n        <div class="label">Gender</div>\r\n    </a>\r\n\r\n    <a routerLink="/settings/payment-list" class="setting-card">\r\n        <i class="fa-solid fa-credit-card fa-2x" aria-hidden="true"></i>\r\n        <div class="label">Payment List</div>\r\n    </a>\r\n\r\n    <a routerLink="/settings/finance" class="setting-card">\r\n        <i class="fa-solid fa-wallet fa-2x" aria-hidden="true"></i>\r\n        <div class="label">Finance</div>\r\n    </a>\r\n\r\n    <a routerLink="/settings/staff" class="setting-card">\r\n        <i class="fa-solid fa-users fa-2x" aria-hidden="true"></i>\r\n        <div class="label">Staff</div>\r\n    </a>\r\n</div>\r\n<!-- <div class="page page-settings" style="padding:1rem;">\r\n    <h3>Settings</h3>\r\n    <p>Placeholder settings page.</p>\r\n</div> -->', styles: ["/* src/app/components/settings/settings.component.scss */\n.settings-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 12px;\n  padding: 12px;\n}\n.setting-card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 16px;\n  border-radius: 10px;\n  background: #fff2e2;\n  border: 1px solid #eee;\n  color: var(--text, #222);\n  text-decoration: none;\n}\n.setting-card .label {\n  margin-top: 8px;\n  font-weight: 600;\n}\n/*# sourceMappingURL=settings.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsComponent, { className: "SettingsComponent", filePath: "src/app/components/settings/settings.component.ts", lineNumber: 12 });
})();

// src/app/components/order/order.component.ts
var OrderComponent = class _OrderComponent {
  static \u0275fac = function OrderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OrderComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrderComponent, selectors: [["app-order"]], decls: 5, vars: 0, consts: [[1, "page", "page-order", 2, "padding", "1rem"]], template: function OrderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "h3");
      \u0275\u0275text(2, "Orders");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(3, "p");
      \u0275\u0275text(4, "Placeholder order page.");
      \u0275\u0275domElementEnd()();
    }
  }, styles: ["\n\n.page-order[_ngcontent-%COMP%] {\n  padding: 12px;\n}\n/*# sourceMappingURL=order.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderComponent, [{
    type: Component,
    args: [{ selector: "app-order", standalone: true, template: '<div class="page page-order" style="padding:1rem;">\r\n    <h3>Orders</h3>\r\n    <p>Placeholder order page.</p>\r\n</div>', styles: ["/* src/app/components/order/order.component.scss */\n.page-order {\n  padding: 12px;\n}\n/*# sourceMappingURL=order.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrderComponent, { className: "OrderComponent", filePath: "src/app/components/order/order.component.ts", lineNumber: 9 });
})();

// src/app/components/header/header.component.ts
var _c02 = ["sideMenu"];
function HeaderComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275listener("click", function HeaderComponent_div_8_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.close());
    });
    \u0275\u0275elementEnd();
  }
}
var HeaderComponent = class _HeaderComponent {
  auth;
  router;
  open = false;
  userName = "";
  logoUrl = `${environment.assetsBase.replace(/\/$/, "")}/no-image-icon.jpg`;
  isFullscreen = false;
  previousFocus = null;
  sideMenuRef;
  onKeydown = (e) => {
    if (!this.open)
      return;
    if (e.key === "Escape") {
      this.close();
      e.preventDefault();
    }
    if (e.key === "Tab") {
      this.maintainFocus(e);
    }
  };
  constructor(auth, router) {
    this.auth = auth;
    this.router = router;
    this.auth.user$.subscribe((u) => {
      this.userName = u?.name || u?.full_name || u?.username || "";
      const logoVal = u?.logo || u?.fav_icon || u?.logo_url || null;
      if (logoVal) {
        this.logoUrl = /^https?:\/\//i.test(logoVal) ? logoVal : `${environment.assetsBase.replace(/\/$/, "")}/${logoVal.replace(/^\//, "")}`;
      }
    });
  }
  toggle() {
    this.open = !this.open;
    if (this.open) {
      this.onOpen();
    } else {
      this.onClose();
    }
  }
  onOpen() {
    this.previousFocus = document.activeElement;
    setTimeout(() => this.focusFirstInMenu(), 0);
  }
  close() {
    this.open = false;
    this.onClose();
  }
  onClose() {
    try {
      this.previousFocus?.focus?.();
    } catch {
    }
  }
  focusFirstInMenu() {
    const menu = this.sideMenuRef?.nativeElement;
    if (!menu)
      return;
    const focusable = Array.from(menu.querySelectorAll("a, button, [tabindex]:not([tabindex='-1'])")).filter((el) => !el.hasAttribute("disabled"));
    if (focusable.length)
      focusable[0].focus();
  }
  ngOnInit() {
    document.addEventListener("keydown", this.onKeydown);
  }
  ngOnDestroy() {
    document.removeEventListener("keydown", this.onKeydown);
  }
  onFsChange() {
    const doc = document;
    this.isFullscreen = !!(doc.fullscreenElement || doc.webkitFullscreenElement || doc.mozFullScreenElement || doc.msFullscreenElement);
  }
  toggleFullscreen() {
    return __async(this, null, function* () {
      try {
        const doc = document;
        if (this.isFullscreen) {
          if (doc.exitFullscreen)
            yield doc.exitFullscreen();
          else if (doc.webkitExitFullscreen)
            yield doc.webkitExitFullscreen();
          else if (doc.mozCancelFullScreen)
            yield doc.mozCancelFullScreen();
          else if (doc.msExitFullscreen)
            yield doc.msExitFullscreen();
          this.isFullscreen = false;
        } else {
          const el = document.documentElement;
          if (el.requestFullscreen)
            yield el.requestFullscreen();
          else if (el.webkitRequestFullscreen)
            yield el.webkitRequestFullscreen();
          else if (el.mozRequestFullScreen)
            yield el.mozRequestFullScreen();
          else if (el.msRequestFullscreen)
            yield el.msRequestFullscreen();
          this.isFullscreen = true;
        }
      } catch (e) {
      }
    });
  }
  // Keep focus inside the side menu when it's open
  maintainFocus(e) {
    const menu = this.sideMenuRef?.nativeElement;
    if (!menu)
      return;
    const focusable = Array.from(menu.querySelectorAll("a, button, [tabindex]:not([tabindex='-1'])")).filter((el) => !el.hasAttribute("disabled"));
    if (!focusable.length)
      return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const active = document.activeElement;
    if (!e.shiftKey && active === last) {
      first.focus();
      e.preventDefault();
    } else if (e.shiftKey && active === first) {
      last.focus();
      e.preventDefault();
    }
  }
  onLogout() {
    this.auth.logout().subscribe({
      complete: () => {
        this.auth.clearSession();
        this.router.navigate(["/login"]);
      }
    });
  }
  static \u0275fac = function HeaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HeaderComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeaderComponent, selectors: [["app-header"]], viewQuery: function HeaderComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c02, 5, ElementRef);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sideMenuRef = _t.first);
    }
  }, hostBindings: function HeaderComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("fullscreenchange", function HeaderComponent_fullscreenchange_HostBindingHandler() {
        return ctx.onFsChange();
      }, \u0275\u0275resolveDocument)("webkitfullscreenchange", function HeaderComponent_webkitfullscreenchange_HostBindingHandler() {
        return ctx.onFsChange();
      }, \u0275\u0275resolveDocument)("mozfullscreenchange", function HeaderComponent_mozfullscreenchange_HostBindingHandler() {
        return ctx.onFsChange();
      }, \u0275\u0275resolveDocument)("MSFullscreenChange", function HeaderComponent_MSFullscreenChange_HostBindingHandler() {
        return ctx.onFsChange();
      }, \u0275\u0275resolveDocument);
    }
  }, decls: 37, vars: 8, consts: [["sideMenu", ""], [1, "app-header"], [1, "hamburger", 3, "click"], ["aria-hidden", "true", 1, "fa-solid", "fa-bars"], [1, "logo-wrap"], ["alt", "logo", "width", "120", 3, "src"], [1, "spacer"], [1, "fullscreen-btn", 3, "click"], ["aria-hidden", "true"], ["class", "menu-backdrop", 3, "click", 4, "ngIf"], [1, "side-menu"], [1, "side-head"], [1, "side-title"], ["aria-label", "Close menu", 1, "side-close", 3, "click"], ["aria-hidden", "true", 1, "fa-solid", "fa-xmark"], ["routerLink", "/pos", "aria-label", "POS", 3, "click"], ["aria-hidden", "true", 1, "fa-solid", "fa-desktop"], ["routerLink", "/customers", "aria-label", "Customers", 3, "click"], ["aria-hidden", "true", 1, "fa-solid", "fa-users"], ["routerLink", "/profile", 3, "click"], [1, "fa-solid", "fa-user"], [3, "click"], [1, "fa-solid", "fa-right-from-bracket"], [1, "menu-backdrop", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "header", 1)(1, "button", 2);
      \u0275\u0275listener("click", function HeaderComponent_Template_button_click_1_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.toggle());
      });
      \u0275\u0275element(2, "i", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 4);
      \u0275\u0275element(4, "img", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275element(5, "div", 6);
      \u0275\u0275elementStart(6, "button", 7);
      \u0275\u0275listener("click", function HeaderComponent_Template_button_click_6_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.toggleFullscreen());
      });
      \u0275\u0275element(7, "i", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(8, HeaderComponent_div_8_Template, 1, 0, "div", 9);
      \u0275\u0275elementStart(9, "nav", 10, 0)(11, "div", 11)(12, "strong", 12);
      \u0275\u0275text(13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "button", 13);
      \u0275\u0275listener("click", function HeaderComponent_Template_button_click_14_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.close());
      });
      \u0275\u0275element(15, "i", 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "ul")(17, "li")(18, "a", 15);
      \u0275\u0275listener("click", function HeaderComponent_Template_a_click_18_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.close());
      });
      \u0275\u0275element(19, "i", 16);
      \u0275\u0275elementStart(20, "span");
      \u0275\u0275text(21, "POS");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(22, "li")(23, "a", 17);
      \u0275\u0275listener("click", function HeaderComponent_Template_a_click_23_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.close());
      });
      \u0275\u0275element(24, "i", 18);
      \u0275\u0275elementStart(25, "span");
      \u0275\u0275text(26, "Customers");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(27, "li")(28, "a", 19);
      \u0275\u0275listener("click", function HeaderComponent_Template_a_click_28_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.close());
      });
      \u0275\u0275element(29, "i", 20);
      \u0275\u0275elementStart(30, "span");
      \u0275\u0275text(31, "Profile");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(32, "li")(33, "a", 21);
      \u0275\u0275listener("click", function HeaderComponent_Template_a_click_33_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onLogout());
      });
      \u0275\u0275element(34, "i", 22);
      \u0275\u0275elementStart(35, "span");
      \u0275\u0275text(36, "Logout");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("src", ctx.logoUrl, \u0275\u0275sanitizeUrl);
      \u0275\u0275advance(2);
      \u0275\u0275attribute("title", ctx.isFullscreen ? "Exit fullscreen" : "Enter fullscreen");
      \u0275\u0275advance();
      \u0275\u0275classMap(ctx.isFullscreen ? "fa-solid fa-compress" : "fa-solid fa-expand");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.open);
      \u0275\u0275advance();
      \u0275\u0275classProp("open", ctx.open);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.userName);
    }
  }, dependencies: [CommonModule, NgIf, RouterModule, RouterLink], styles: ["\n\n.app-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0.7rem 0.75rem;\n  border-bottom: 1px solid var(--color-neutral-400);\n  background: var(--color-primary-bg, var(--color-neutral-100));\n  color: var(--color-primary-text, var(--color-neutral-800));\n}\n.hamburger[_ngcontent-%COMP%] {\n  font-size: 20px;\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n}\n.app-header[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.app-header[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: var(--color-primary-text, var(--color-neutral-100));\n}\n.fullscreen-btn[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n  background: transparent;\n  border: 0;\n  color: var(--color-primary-text, var(--color-neutral-100));\n  font-size: 18px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 6px;\n  cursor: pointer;\n}\n.logo-wrap[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 8px;\n  padding: 0px 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.logo-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 40px;\n  object-fit: contain;\n}\n.spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.side-menu[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: -280px;\n  width: 280px;\n  height: 100%;\n  background: var(--color-neutral-100);\n  box-shadow: 2px 0 10px var(--shadow-xxs);\n  transition: left 0.22s ease;\n  z-index: 1000;\n  padding: 1rem 0;\n}\n.side-menu.open[_ngcontent-%COMP%] {\n  left: 0;\n  padding: 1rem;\n}\n.side-head[_ngcontent-%COMP%] {\n  padding-bottom: 0.75rem;\n  border-bottom: 1px solid var(--color-neutral-400);\n  margin-bottom: 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.side-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.menu-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: var(--overlay-dark-35);\n  z-index: 900;\n}\n.side-close[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 0;\n  font-size: 20px;\n  cursor: pointer;\n}\n.side-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 0.4rem 0;\n}\n.side-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: var(--color-neutral-800);\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.6rem 0rem;\n  border-radius: 8px;\n  transition: all 0.3s ease;\n}\n.side-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 28px;\n  text-align: center;\n  font-size: 18px;\n  color: var(--color-primary-bg);\n  transition: all 0.3s ease;\n}\n.side-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.side-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      90deg,\n      var(--color-primary-bg) 0%,\n      #ffffff 100%);\n  transform: translateX(5px);\n  padding-left: 16px;\n  color: var(--color-primary-text);\n}\n.side-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  color: var(--color-primary-text);\n  transform: scale(1.1);\n}\n/*# sourceMappingURL=header.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeaderComponent, [{
    type: Component,
    args: [{ selector: "app-header", standalone: true, imports: [CommonModule, RouterModule], template: `<header class="app-header">\r
    <button class="hamburger" (click)="toggle()"><i class="fa-solid fa-bars" aria-hidden="true"></i></button>\r
    <div class="logo-wrap">\r
        <img [src]="logoUrl" alt="logo" width="120" />\r
    </div>\r
    <div class="spacer"></div>\r
    <button class="fullscreen-btn" (click)="toggleFullscreen()"\r
        [attr.title]="isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'">\r
        <i [class]="isFullscreen ? 'fa-solid fa-compress' : 'fa-solid fa-expand'" aria-hidden="true"></i>\r
    </button>\r
</header>\r
\r
<div class="menu-backdrop" *ngIf="open" (click)="close()"></div>\r
\r
<nav #sideMenu class="side-menu" [class.open]="open">\r
    <div class="side-head">\r
        <strong class="side-title">{{ userName }}</strong>\r
        <button class="side-close" (click)="close()" aria-label="Close menu"><i class="fa-solid fa-xmark"\r
                aria-hidden="true"></i></button>\r
    </div>\r
    <ul>\r
        <li>\r
            <a routerLink="/pos" (click)="close()" aria-label="POS">\r
                <i class="fa-solid fa-desktop" aria-hidden="true"></i>\r
                <span>POS</span>\r
            </a>\r
        </li>\r
        <li>\r
            <a routerLink="/customers" (click)="close()" aria-label="Customers">\r
                <i class="fa-solid fa-users" aria-hidden="true"></i>\r
                <span>Customers</span>\r
            </a>\r
        </li>\r
        <li>\r
            <a routerLink="/profile" (click)="close()">\r
                <i class="fa-solid fa-user"></i>\r
                <span>Profile</span>\r
            </a>\r
        </li>\r
        <li>\r
            <a (click)="onLogout()">\r
                <i class="fa-solid fa-right-from-bracket"></i>\r
                <span>Logout</span>\r
            </a>\r
        </li>\r
    </ul>\r
</nav>`, styles: ["/* src/app/components/header/header.component.scss */\n.app-header {\n  display: flex;\n  align-items: center;\n  padding: 0.7rem 0.75rem;\n  border-bottom: 1px solid var(--color-neutral-400);\n  background: var(--color-primary-bg, var(--color-neutral-100));\n  color: var(--color-primary-text, var(--color-neutral-800));\n}\n.hamburger {\n  font-size: 20px;\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n}\n.app-header .hamburger i,\n.app-header .hamburger svg {\n  color: var(--color-primary-text, var(--color-neutral-100));\n}\n.fullscreen-btn {\n  margin-left: 0.5rem;\n  background: transparent;\n  border: 0;\n  color: var(--color-primary-text, var(--color-neutral-100));\n  font-size: 18px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 6px;\n  cursor: pointer;\n}\n.logo-wrap {\n  background: #fff;\n  border-radius: 8px;\n  padding: 0px 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.logo-wrap img {\n  height: 40px;\n  object-fit: contain;\n}\n.spacer {\n  flex: 1;\n}\n.side-menu {\n  position: fixed;\n  top: 0;\n  left: -280px;\n  width: 280px;\n  height: 100%;\n  background: var(--color-neutral-100);\n  box-shadow: 2px 0 10px var(--shadow-xxs);\n  transition: left 0.22s ease;\n  z-index: 1000;\n  padding: 1rem 0;\n}\n.side-menu.open {\n  left: 0;\n  padding: 1rem;\n}\n.side-head {\n  padding-bottom: 0.75rem;\n  border-bottom: 1px solid var(--color-neutral-400);\n  margin-bottom: 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.side-menu ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.menu-backdrop {\n  position: fixed;\n  inset: 0;\n  background: var(--overlay-dark-35);\n  z-index: 900;\n}\n.side-close {\n  background: transparent;\n  border: 0;\n  font-size: 20px;\n  cursor: pointer;\n}\n.side-menu li {\n  margin: 0.4rem 0;\n}\n.side-menu a {\n  cursor: pointer;\n  color: var(--color-neutral-800);\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.6rem 0rem;\n  border-radius: 8px;\n  transition: all 0.3s ease;\n}\n.side-menu a i {\n  width: 28px;\n  text-align: center;\n  font-size: 18px;\n  color: var(--color-primary-bg);\n  transition: all 0.3s ease;\n}\n.side-menu a span {\n  flex: 1;\n}\n.side-menu a:hover {\n  background:\n    linear-gradient(\n      90deg,\n      var(--color-primary-bg) 0%,\n      #ffffff 100%);\n  transform: translateX(5px);\n  padding-left: 16px;\n  color: var(--color-primary-text);\n}\n.side-menu a:hover i {\n  color: var(--color-primary-text);\n  transform: scale(1.1);\n}\n/*# sourceMappingURL=header.component.css.map */\n"] }]
  }], () => [{ type: AuthService }, { type: Router }], { sideMenuRef: [{
    type: ViewChild,
    args: ["sideMenu", { read: ElementRef, static: false }]
  }], onFsChange: [{
    type: HostListener,
    args: ["document:fullscreenchange", []]
  }, {
    type: HostListener,
    args: ["document:webkitfullscreenchange", []]
  }, {
    type: HostListener,
    args: ["document:mozfullscreenchange", []]
  }, {
    type: HostListener,
    args: ["document:MSFullscreenChange", []]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeaderComponent, { className: "HeaderComponent", filePath: "src/app/components/header/header.component.ts", lineNumber: 16 });
})();

// src/app/components/footer/footer.component.ts
var FooterComponent = class _FooterComponent {
  router;
  constructor(router) {
    this.router = router;
  }
  go(path) {
    try {
      this.router.navigate([path]);
    } catch {
    }
  }
  static \u0275fac = function FooterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FooterComponent)(\u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FooterComponent, selectors: [["app-footer"]], decls: 9, vars: 0, consts: [["role", "navigation", "aria-label", "Footer navigation", 1, "app-footer"], ["routerLink", "/pos", "routerLinkActive", "active", "aria-label", "POS", 1, "btn"], ["aria-hidden", "true", 1, "fa-solid", "fa-desktop", "fa-lg"], ["routerLink", "/profile", "routerLinkActive", "active", "aria-label", "Profile", 1, "btn"], ["aria-hidden", "true", 1, "fa-solid", "fa-user", "fa-lg"], ["routerLink", "/settings", "routerLinkActive", "active", "aria-label", "Settings", 1, "btn"], ["aria-hidden", "true", 1, "fa-solid", "fa-gear", "fa-lg"], ["routerLink", "/order", "routerLinkActive", "active", "aria-label", "Orders", 1, "btn"], ["aria-hidden", "true", 1, "fa-solid", "fa-receipt", "fa-lg"]], template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "nav", 0)(1, "a", 1);
      \u0275\u0275element(2, "i", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "a", 3);
      \u0275\u0275element(4, "i", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "a", 5);
      \u0275\u0275element(6, "i", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "a", 7);
      \u0275\u0275element(8, "i", 8);
      \u0275\u0275elementEnd()();
    }
  }, dependencies: [CommonModule, RouterModule, RouterLink, RouterLinkActive], styles: ["\n\n.app-footer[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 64px;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  background: var(--color-primary-bg);\n  color: var(--color-primary-text);\n  border-top: 1px solid rgba(255, 255, 255, 0.06);\n  z-index: 1000;\n}\n.app-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  color: rgba(255, 255, 255, 0.9);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 52px;\n  height: 52px;\n  padding: 6px;\n  text-decoration: none;\n  border-radius: 12px;\n  transition:\n    background 0.12s ease,\n    color 0.12s ease,\n    transform 0.08s ease;\n}\n.app-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  display: block;\n  width: 24px;\n  height: 24px;\n}\n.app-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.app-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  line-height: 0;\n  vertical-align: middle;\n  display: inline-block;\n  color: inherit;\n}\n.app-footer[_ngcontent-%COMP%]   .btn.router-link-active[_ngcontent-%COMP%], \n.app-footer[_ngcontent-%COMP%]   .btn.router-link-active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.app-footer[_ngcontent-%COMP%]   .btn.router-link-active[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  background: var(--color-primary-bg);\n  color: var(--color-primary-text);\n  box-shadow: 0 6px 16px rgba(13, 110, 253, 0.12);\n  transform: translateY(-2px);\n}\n.app-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06);\n  color: var(--color-primary-text);\n}\n.with-footer[_nghost-%COMP%] {\n  padding-bottom: 56px;\n}\n/*# sourceMappingURL=footer.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FooterComponent, [{
    type: Component,
    args: [{ selector: "app-footer", standalone: true, imports: [CommonModule, RouterModule], template: '<nav class="app-footer" role="navigation" aria-label="Footer navigation">\r\n    <a class="btn" routerLink="/pos" routerLinkActive="active" aria-label="POS">\r\n        <i class="fa-solid fa-desktop fa-lg" aria-hidden="true"></i>\r\n    </a>\r\n    <a class="btn" routerLink="/profile" routerLinkActive="active" aria-label="Profile">\r\n        <i class="fa-solid fa-user fa-lg" aria-hidden="true"></i>\r\n    </a>\r\n\r\n    <a class="btn" routerLink="/settings" routerLinkActive="active" aria-label="Settings">\r\n        <i class="fa-solid fa-gear fa-lg" aria-hidden="true"></i>\r\n    </a>\r\n    <a class="btn" routerLink="/order" routerLinkActive="active" aria-label="Orders">\r\n        <i class="fa-solid fa-receipt fa-lg" aria-hidden="true"></i>\r\n    </a>\r\n</nav>', styles: ["/* src/app/components/footer/footer.component.scss */\n.app-footer {\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 64px;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  background: var(--color-primary-bg);\n  color: var(--color-primary-text);\n  border-top: 1px solid rgba(255, 255, 255, 0.06);\n  z-index: 1000;\n}\n.app-footer .btn {\n  background: transparent;\n  border: none;\n  color: rgba(255, 255, 255, 0.9);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 52px;\n  height: 52px;\n  padding: 6px;\n  text-decoration: none;\n  border-radius: 12px;\n  transition:\n    background 0.12s ease,\n    color 0.12s ease,\n    transform 0.08s ease;\n}\n.app-footer .btn svg {\n  display: block;\n  width: 24px;\n  height: 24px;\n}\n.app-footer .btn i,\n.app-footer .btn svg {\n  line-height: 0;\n  vertical-align: middle;\n  display: inline-block;\n  color: inherit;\n}\n.app-footer .btn.router-link-active,\n.app-footer .btn.router-link-active i,\n.app-footer .btn.router-link-active svg {\n  background: var(--color-primary-bg);\n  color: var(--color-primary-text);\n  box-shadow: 0 6px 16px rgba(13, 110, 253, 0.12);\n  transform: translateY(-2px);\n}\n.app-footer .btn:hover {\n  background: rgba(255, 255, 255, 0.06);\n  color: var(--color-primary-text);\n}\n:host(.with-footer) {\n  padding-bottom: 56px;\n}\n/*# sourceMappingURL=footer.component.css.map */\n"] }]
  }], () => [{ type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FooterComponent, { className: "FooterComponent", filePath: "src/app/components/footer/footer.component.ts", lineNumber: 12 });
})();

// src/app/components/cart/cart.component.ts
function CartComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1, "Added");
    \u0275\u0275elementEnd();
  }
}
function CartComponent_div_11_li_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 20)(1, "div", 21)(2, "div", 22);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 23);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 24)(7, "button", 25);
    \u0275\u0275listener("click", function CartComponent_div_11_li_2_Template_button_click_7_listener() {
      const it_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.inc(it_r2.id));
    });
    \u0275\u0275element(8, "i", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 27);
    \u0275\u0275listener("click", function CartComponent_div_11_li_2_Template_button_click_9_listener() {
      const it_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.dec(it_r2.id));
    });
    \u0275\u0275element(10, "i", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 29);
    \u0275\u0275listener("click", function CartComponent_div_11_li_2_Template_button_click_11_listener() {
      const it_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.del(it_r2.id));
    });
    \u0275\u0275element(12, "i", 30);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const it_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((it_r2.product.product == null ? null : it_r2.product.product.name) || it_r2.product.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("Qty: ", it_r2.qty, " \u2022 Price: Rs. ", (it_r2.product.product == null ? null : it_r2.product.product.price) || it_r2.product.price);
  }
}
function CartComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "ul", 18);
    \u0275\u0275template(2, CartComponent_div_11_li_2_Template, 13, 3, "li", 19);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.items);
  }
}
function CartComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1, "Cart is empty");
    \u0275\u0275elementEnd();
  }
}
function CartComponent_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 32);
    \u0275\u0275listener("click", function CartComponent_button_18_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggle());
    });
    \u0275\u0275element(1, "i", 33);
    \u0275\u0275elementStart(2, "span", 34);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.cart.totalItems());
  }
}
function CartComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.toast);
  }
}
var CartComponent = class _CartComponent {
  cart;
  router;
  open = false;
  items = [];
  toast = "";
  toastTimer = null;
  pulse = false;
  constructor(cart, router) {
    this.cart = cart;
    this.router = router;
    this.cart.cart$.subscribe((i) => {
      this.items = i;
      if (!this.items || this.items.length === 0) {
        this.open = false;
      }
    });
    this.cart.added$.subscribe(() => {
      if (this.cart.totalItems() > 0) {
        this.open = true;
        this.pulse = true;
        setTimeout(() => this.pulse = false, 350);
        this.showToast("Added to cart");
      }
    });
  }
  toggle() {
    if (!this.items?.length) {
      this.showToast("No items available in cart");
      return;
    }
    this.open = !this.open;
  }
  close() {
    this.open = false;
  }
  inc(id) {
    this.cart.increment(id);
  }
  dec(id) {
    this.cart.decrement(id);
  }
  del(id) {
    this.cart.remove(id);
  }
  clear() {
    this.cart.clear();
  }
  goToCheckout() {
    if (!this.items?.length) {
      this.showToast("Cart is empty");
      return;
    }
    this.router.navigate(["/checkout"]);
  }
  showToast(msg) {
    this.toast = msg;
    if (this.toastTimer)
      clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => {
      this.toast = "";
      this.toastTimer = null;
    }, 2e3);
  }
  static \u0275fac = function CartComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CartComponent)(\u0275\u0275directiveInject(CartService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CartComponent, selectors: [["app-cart"]], decls: 20, vars: 11, consts: [["role", "dialog", "aria-label", "Cart", 1, "cart-panel"], [1, "cart-header"], [1, "cart-controls"], ["title", "Clear cart", "aria-label", "Clear cart", 3, "click"], [1, "fa-solid", "fa-trash-can"], ["title", "Close", "aria-label", "Close cart", 3, "click"], [1, "fa-solid", "fa-chevron-down"], ["class", "cart-added", 4, "ngIf"], [1, "cart-body"], ["class", "has-items", 4, "ngIf"], ["class", "empty", 4, "ngIf"], [1, "cart-footer"], [1, "cart-summary"], ["title", "Checkout", 1, "checkout", 3, "click"], ["class", "cart-toggle", "aria-label", "Open cart", 3, "click", 4, "ngIf"], ["class", "cart-toast", 4, "ngIf"], [1, "cart-added"], [1, "has-items"], [1, "cart-items"], ["class", "cart-item", 4, "ngFor", "ngForOf"], [1, "cart-item"], [1, "ci-main"], [1, "ci-title"], [1, "ci-meta"], [1, "ci-actions"], ["aria-label", "Increase", 3, "click"], [1, "fa-solid", "fa-plus"], ["aria-label", "Decrease", 3, "click"], [1, "fa-solid", "fa-minus"], ["aria-label", "Remove", 3, "click"], [1, "fa-solid", "fa-trash"], [1, "empty"], ["aria-label", "Open cart", 1, "cart-toggle", 3, "click"], [1, "fa-solid", "fa-cart-shopping"], [1, "badge"], [1, "cart-toast"]], template: function CartComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "strong");
      \u0275\u0275text(3, "Cart");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 2)(5, "button", 3);
      \u0275\u0275listener("click", function CartComponent_Template_button_click_5_listener() {
        return ctx.clear();
      });
      \u0275\u0275element(6, "i", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "button", 5);
      \u0275\u0275listener("click", function CartComponent_Template_button_click_7_listener() {
        return ctx.close();
      });
      \u0275\u0275element(8, "i", 6);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(9, CartComponent_div_9_Template, 2, 0, "div", 7);
      \u0275\u0275elementStart(10, "div", 8);
      \u0275\u0275template(11, CartComponent_div_11_Template, 3, 1, "div", 9)(12, CartComponent_div_12_Template, 2, 0, "div", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "footer", 11)(14, "div", 12);
      \u0275\u0275text(15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "button", 13);
      \u0275\u0275listener("click", function CartComponent_Template_button_click_16_listener() {
        return ctx.goToCheckout();
      });
      \u0275\u0275text(17, "Checkout");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(18, CartComponent_button_18_Template, 4, 1, "button", 14)(19, CartComponent_div_19_Template, 2, 1, "div", 15);
    }
    if (rf & 2) {
      \u0275\u0275classProp("open", ctx.open)("pulse", ctx.pulse);
      \u0275\u0275advance(9);
      \u0275\u0275property("ngIf", ctx.pulse);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.items == null ? null : ctx.items.length);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !(ctx.items == null ? null : ctx.items.length));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2("Total: Rs. ", ctx.cart.totalPrice(), " \u2014 Items: ", ctx.cart.totalItems());
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.cart.totalItems() > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.toast);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf], styles: ["\n\n[_ngcontent-%COMP%]:root {\n  --cart-bg: #fffbe6;\n  --cart-shadow: 0 -6px 24px rgba(0, 0, 0, .12);\n}\n.cart-toggle[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 4rem;\n  top: 10px;\n  z-index: 1200;\n  background: var(--color-neutral-100);\n  color: var(--color-primary-bg);\n  border-radius: 999px;\n  padding: 0.6rem 0.8rem;\n  border: none;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.cart-toggle[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  background: var(--danger, #ff4d4f);\n  padding: 0.15rem 0.4rem;\n  border-radius: 999px;\n  color: #fff;\n  font-weight: 600;\n}\n.cart-panel[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  transform: translateY(100%);\n  transition: transform 0.28s ease;\n  z-index: 1100;\n  background: var(--cart-bg);\n  box-shadow: var(--cart-shadow);\n  border-top-left-radius: 12px;\n  border-top-right-radius: 12px;\n  max-height: 70vh;\n  display: flex;\n  flex-direction: column;\n}\n.cart-panel.open[_ngcontent-%COMP%] {\n  transform: translateY(0);\n  background: var(--color-neutral-100);\n}\n.cart-panel.open[_ngcontent-%COMP%]   .cart-panel.open.pulse[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_cart-pulse 0.28s ease;\n}\n@keyframes _ngcontent-%COMP%_cart-pulse {\n  0% {\n    transform: translateY(0) scaleY(1);\n  }\n  50% {\n    transform: translateY(0) scaleY(1.02);\n  }\n  100% {\n    transform: translateY(0) scaleY(1);\n  }\n}\n.cart-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 16px;\n  border-bottom: 1px solid #eee;\n}\n.cart-body[_ngcontent-%COMP%] {\n  overflow: auto;\n  padding: 12px;\n}\n.cart-items[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.cart-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 8px;\n  border-radius: 8px;\n  border: 1px solid #f0f0f0;\n}\n.ci-main[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.ci-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n.cart-footer[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  border-top: 1px solid #eee;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.checkout[_ngcontent-%COMP%] {\n  background: var(--primary, #0b5cff);\n  color: #fff;\n  border: none;\n  padding: 8px 12px;\n  border-radius: 8px;\n}\n.cart-toast[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 50%;\n  transform: translateX(-50%);\n  bottom: 5.5rem;\n  background: rgba(0, 0, 0, 0.85);\n  color: #fff;\n  padding: 0.5rem 0.8rem;\n  border-radius: 6px;\n  z-index: 1300;\n}\n.cart-added[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 1rem;\n  top: -2rem;\n  background: var(--primary, #0b5cff);\n  color: #fff;\n  padding: 0.25rem 0.5rem;\n  border-radius: 6px;\n  font-size: 0.85rem;\n}\n/*# sourceMappingURL=cart.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartComponent, [{
    type: Component,
    args: [{ selector: "app-cart", standalone: true, imports: [CommonModule], template: '<div class="cart-panel" [class.open]="open" [class.pulse]="pulse" role="dialog" aria-label="Cart">\r\n    <header class="cart-header">\r\n        <strong>Cart</strong>\r\n        <div class="cart-controls">\r\n            <button (click)="clear()" title="Clear cart" aria-label="Clear cart"><i\r\n                    class="fa-solid fa-trash-can"></i></button>\r\n            <button (click)="close()" title="Close" aria-label="Close cart"><i\r\n                    class="fa-solid fa-chevron-down"></i></button>\r\n        </div>\r\n    </header>\r\n    <div *ngIf="pulse" class="cart-added">Added</div>\r\n\r\n    <div class="cart-body">\r\n        <div *ngIf="items?.length" class="has-items">\r\n            <ul class="cart-items">\r\n                <li *ngFor="let it of items" class="cart-item">\r\n                    <div class="ci-main">\r\n                        <div class="ci-title">{{ it.product.product?.name || it.product.name }}</div>\r\n                        <div class="ci-meta">Qty: {{ it.qty }} \u2022 Price: Rs. {{ (it.product.product?.price ||\r\n                            it.product.price) }}</div>\r\n                    </div>\r\n                    <div class="ci-actions">\r\n                        <button (click)="inc(it.id)" aria-label="Increase"><i class="fa-solid fa-plus"></i></button>\r\n                        <button (click)="dec(it.id)" aria-label="Decrease"><i class="fa-solid fa-minus"></i></button>\r\n                        <button (click)="del(it.id)" aria-label="Remove"><i class="fa-solid fa-trash"></i></button>\r\n                    </div>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n        <div *ngIf="!items?.length" class="empty">Cart is empty</div>\r\n    </div>\r\n\r\n    <footer class="cart-footer">\r\n        <div class="cart-summary">Total: Rs. {{ cart.totalPrice() }} \u2014 Items: {{ cart.totalItems() }}</div>\r\n        <button class="checkout" title="Checkout" (click)="goToCheckout()">Checkout</button>\r\n    </footer>\r\n</div>\r\n\r\n<button *ngIf="cart.totalItems() > 0" class="cart-toggle" (click)="toggle()" aria-label="Open cart">\r\n    <i class="fa-solid fa-cart-shopping"></i>\r\n    <span class="badge">{{ cart.totalItems() }}</span>\r\n</button>\r\n\r\n<div class="cart-toast" *ngIf="toast">{{ toast }}</div>', styles: ["/* src/app/components/cart/cart.component.scss */\n:root {\n  --cart-bg: #fffbe6;\n  --cart-shadow: 0 -6px 24px rgba(0, 0, 0, .12);\n}\n.cart-toggle {\n  position: fixed;\n  right: 4rem;\n  top: 10px;\n  z-index: 1200;\n  background: var(--color-neutral-100);\n  color: var(--color-primary-bg);\n  border-radius: 999px;\n  padding: 0.6rem 0.8rem;\n  border: none;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.cart-toggle .badge {\n  background: var(--danger, #ff4d4f);\n  padding: 0.15rem 0.4rem;\n  border-radius: 999px;\n  color: #fff;\n  font-weight: 600;\n}\n.cart-panel {\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  transform: translateY(100%);\n  transition: transform 0.28s ease;\n  z-index: 1100;\n  background: var(--cart-bg);\n  box-shadow: var(--cart-shadow);\n  border-top-left-radius: 12px;\n  border-top-right-radius: 12px;\n  max-height: 70vh;\n  display: flex;\n  flex-direction: column;\n}\n.cart-panel.open {\n  transform: translateY(0);\n  background: var(--color-neutral-100);\n}\n.cart-panel.open .cart-panel.open.pulse {\n  animation: cart-pulse 0.28s ease;\n}\n@keyframes cart-pulse {\n  0% {\n    transform: translateY(0) scaleY(1);\n  }\n  50% {\n    transform: translateY(0) scaleY(1.02);\n  }\n  100% {\n    transform: translateY(0) scaleY(1);\n  }\n}\n.cart-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 16px;\n  border-bottom: 1px solid #eee;\n}\n.cart-body {\n  overflow: auto;\n  padding: 12px;\n}\n.cart-items {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.cart-item {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 8px;\n  border-radius: 8px;\n  border: 1px solid #f0f0f0;\n}\n.ci-main {\n  flex: 1;\n}\n.ci-actions {\n  display: flex;\n  gap: 6px;\n}\n.cart-footer {\n  padding: 12px 16px;\n  border-top: 1px solid #eee;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.checkout {\n  background: var(--primary, #0b5cff);\n  color: #fff;\n  border: none;\n  padding: 8px 12px;\n  border-radius: 8px;\n}\n.cart-toast {\n  position: fixed;\n  left: 50%;\n  transform: translateX(-50%);\n  bottom: 5.5rem;\n  background: rgba(0, 0, 0, 0.85);\n  color: #fff;\n  padding: 0.5rem 0.8rem;\n  border-radius: 6px;\n  z-index: 1300;\n}\n.cart-added {\n  position: absolute;\n  right: 1rem;\n  top: -2rem;\n  background: var(--primary, #0b5cff);\n  color: #fff;\n  padding: 0.25rem 0.5rem;\n  border-radius: 6px;\n  font-size: 0.85rem;\n}\n/*# sourceMappingURL=cart.component.css.map */\n"] }]
  }], () => [{ type: CartService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CartComponent, { className: "CartComponent", filePath: "src/app/components/cart/cart.component.ts", lineNumber: 13 });
})();

// src/app/components/toast/toast.component.ts
function ToastComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classMap("toast-inner " + (ctx_r0.t.type || ""));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.t.message);
  }
}
var ToastComponent = class _ToastComponent {
  toast;
  t = null;
  constructor(toast) {
    this.toast = toast;
    this.toast.toast$.subscribe((s) => this.t = s);
  }
  static \u0275fac = function ToastComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToastComponent)(\u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ToastComponent, selectors: [["app-toast"]], decls: 1, vars: 1, consts: [["class", "toast", 4, "ngIf"], [1, "toast"]], template: function ToastComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, ToastComponent_div_0_Template, 3, 3, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.t);
    }
  }, dependencies: [CommonModule, NgIf], styles: ["\n\n.toast[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 50%;\n  transform: translateX(-50%);\n  bottom: 1.5rem;\n  z-index: 2000;\n}\n.toast-inner[_ngcontent-%COMP%] {\n  padding: 0.6rem 1rem;\n  border-radius: 6px;\n  color: #fff;\n}\n.toast-inner.error[_ngcontent-%COMP%] {\n  background: #ff4d4f;\n}\n.toast-inner.success[_ngcontent-%COMP%] {\n  background: #28a745;\n}\n.toast-inner.info[_ngcontent-%COMP%] {\n  background: #333;\n}\n/*# sourceMappingURL=toast.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastComponent, [{
    type: Component,
    args: [{ selector: "app-toast", standalone: true, imports: [CommonModule], template: `<div class="toast" *ngIf="t">
    <div [class]="'toast-inner '+(t.type||'')">{{ t.message }}</div>
</div>`, styles: ["/* src/app/components/toast/toast.component.scss */\n.toast {\n  position: fixed;\n  left: 50%;\n  transform: translateX(-50%);\n  bottom: 1.5rem;\n  z-index: 2000;\n}\n.toast-inner {\n  padding: 0.6rem 1rem;\n  border-radius: 6px;\n  color: #fff;\n}\n.toast-inner.error {\n  background: #ff4d4f;\n}\n.toast-inner.success {\n  background: #28a745;\n}\n.toast-inner.info {\n  background: #333;\n}\n/*# sourceMappingURL=toast.component.css.map */\n"] }]
  }], () => [{ type: ToastService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ToastComponent, { className: "ToastComponent", filePath: "src/app/components/toast/toast.component.ts", lineNumber: 14 });
})();

// src/app/components/layout/layout.component.ts
function LayoutComponent_app_cart_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-cart");
  }
}
var LayoutComponent = class _LayoutComponent {
  router;
  showCart = true;
  routerSubscription;
  constructor(router) {
    this.router = router;
  }
  ngOnInit() {
    this.routerSubscription = this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((event) => {
      this.showCart = !event.url.includes("/checkout");
    });
    this.showCart = !this.router.url.includes("/checkout");
  }
  ngOnDestroy() {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }
  static \u0275fac = function LayoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LayoutComponent)(\u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LayoutComponent, selectors: [["app-layout"]], decls: 7, vars: 1, consts: [[1, "app-layout"], [1, "app-header-sticky"], [1, "app-main"], [4, "ngIf"]], template: function LayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-header", 1);
      \u0275\u0275elementStart(2, "main", 2);
      \u0275\u0275element(3, "router-outlet");
      \u0275\u0275elementEnd();
      \u0275\u0275element(4, "app-footer");
      \u0275\u0275template(5, LayoutComponent_app_cart_5_Template, 1, 0, "app-cart", 3);
      \u0275\u0275element(6, "app-toast");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.showCart);
    }
  }, dependencies: [CommonModule, NgIf, RouterModule, RouterOutlet, HeaderComponent, FooterComponent, CartComponent, ToastComponent], styles: ["\n\n.app-main[_ngcontent-%COMP%] {\n  padding: 1rem;\n  padding-bottom: 72px;\n  min-height: calc(100vh - 150px);\n  max-height: calc(100vh - 150px);\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n.app-layout[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\napp-header[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n}\n.app-main[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n}\napp-footer[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n}\n/*# sourceMappingURL=layout.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LayoutComponent, [{
    type: Component,
    args: [{ selector: "app-layout", standalone: true, imports: [CommonModule, RouterModule, HeaderComponent, FooterComponent, CartComponent, ToastComponent], template: '<div class="app-layout">\r\n    <app-header class="app-header-sticky"></app-header>\r\n    <main class="app-main">\r\n        <router-outlet></router-outlet>\r\n    </main>\r\n    <app-footer></app-footer>\r\n    <app-cart *ngIf="showCart"></app-cart>\r\n    <app-toast></app-toast>\r\n</div>', styles: ["/* src/app/components/layout/layout.component.scss */\n.app-main {\n  padding: 1rem;\n  padding-bottom: 72px;\n  min-height: calc(100vh - 150px);\n  max-height: calc(100vh - 150px);\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n.app-layout {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\napp-header {\n  flex: 0 0 auto;\n}\n.app-main {\n  flex: 1 1 auto;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n}\napp-footer {\n  flex: 0 0 auto;\n}\n/*# sourceMappingURL=layout.component.css.map */\n"] }]
  }], () => [{ type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LayoutComponent, { className: "LayoutComponent", filePath: "src/app/components/layout/layout.component.ts", lineNumber: 18 });
})();

// src/app/guards/auth.guard.ts
var AuthGuard = class _AuthGuard {
  auth;
  router;
  constructor(auth, router) {
    this.auth = auth;
    this.router = router;
  }
  canActivate() {
    if (this.auth.isLoggedIn()) {
      return true;
    } else {
      return this.router.createUrlTree(["/login"]);
    }
  }
  static \u0275fac = function AuthGuard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthGuard)(\u0275\u0275inject(AuthService), \u0275\u0275inject(Router));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthGuard, factory: _AuthGuard.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthGuard, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: AuthService }, { type: Router }], null);
})();

// src/app/app.routes.ts
var routes = [
  { path: "login", component: LoginComponent },
  {
    path: "",
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: "pos", component: ProductListComponent },
      { path: "customers", loadComponent: () => import("./chunk-NB2UTBXN.js").then((m) => m.CustomersComponent) },
      { path: "profile", component: ProfileComponent },
      { path: "settings", component: SettingsComponent },
      { path: "settings/gender", loadComponent: () => import("./chunk-OELNRPEL.js").then((m) => m.GenderComponent) },
      { path: "settings/payment-list", loadComponent: () => import("./chunk-OAZKJWZL.js").then((m) => m.PaymentListComponent) },
      { path: "settings/finance", loadComponent: () => import("./chunk-YMHEDDBO.js").then((m) => m.FinanceComponent) },
      { path: "settings/staff", loadComponent: () => import("./chunk-MVQGME4P.js").then((m) => m.StaffComponent) },
      { path: "order", component: OrderComponent },
      { path: "checkout", loadComponent: () => import("./chunk-2PSNBYKC.js").then((m) => m.CheckoutComponent) },
      { path: "", redirectTo: "pos", pathMatch: "full" }
    ]
  },
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "**", redirectTo: "/login" }
];

// src/app/interceptors/auth.interceptor.ts
var authInterceptor = (req, next) => {
  const auth = inject(AuthService);
  const token = auth.getToken();
  if (token) {
    const cloned = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next(cloned);
  }
  return next(req);
};

// src/app/app.config.ts
function initializeAuth(authService) {
  return () => {
    authService.initFromStorage();
  };
}
var appConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(withInterceptors([authInterceptor])),
    provideAnimations(),
    {
      provide: APP_INITIALIZER,
      useFactory: initializeAuth,
      deps: [AuthService],
      multi: true
    }
  ]
};

// src/main.ts
bootstrapApplication(AppComponent, __spreadProps(__spreadValues({}, appConfig), {
  providers: [
    // keep existing providers from appConfig (if any) and add/override safely
    ...appConfig && appConfig.providers || [],
    provideAnimations()
  ]
})).catch((err) => console.error(err));
/*! Bundled license information:

@angular/animations/fesm2022/private_export.mjs:
@angular/animations/fesm2022/util.mjs:
@angular/animations/fesm2022/browser.mjs:
@angular/platform-browser/fesm2022/animations.mjs:
  (**
   * @license Angular v20.3.6
   * (c) 2010-2025 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
//# sourceMappingURL=main.js.map
