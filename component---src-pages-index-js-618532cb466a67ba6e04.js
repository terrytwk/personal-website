"use strict";(self.webpackChunkterrytwk_github_io=self.webpackChunkterrytwk_github_io||[]).push([[678],{8083:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=f(n(3779)),r=f(n(5697)),i=n(7294),u=a(n(2406)),s=a(n(5906));function l(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return l=function(){return t},t}function a(t){if(t&&t.__esModule)return t;if(null===t||"object"!==c(t)&&"function"!=typeof t)return{default:t};var e=l();if(e&&e.has(t))return e.get(t);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){var i=o?Object.getOwnPropertyDescriptor(t,r):null;i&&(i.get||i.set)?Object.defineProperty(n,r,i):n[r]=t[r]}return n.default=t,e&&e.set(t,n),n}function f(t){return t&&t.__esModule?t:{default:t}}function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){m(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function h(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function b(t,e){return b=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},b(t,e)}function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=v(t);if(e){var r=v(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return g(this,n)}}function g(t,e){return!e||"object"!==c(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function v(t){return v=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},v(t)}function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var O=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&b(t,e)}(u,t);var e,n,r,i=y(u);function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t)).introJs=null,e.isConfigured=!1,e.installIntroJs(),e}return e=u,(n=[{key:"componentDidMount",value:function(){this.props.enabled&&(this.configureIntroJs(),this.renderHints())}},{key:"componentDidUpdate",value:function(t){var e=this.props,n=e.enabled,o=e.hints,r=e.options;this.isConfigured&&t.hints===o&&t.options===r||(this.configureIntroJs(),this.renderHints()),t.enabled!==n&&this.renderHints()}},{key:"componentWillUnmount",value:function(){this.introJs.hideHints()}},{key:"installIntroJs",value:function(){this.introJs=(0,o.default)();var t=this.props,e=t.onClick,n=t.onClose;e&&this.introJs.onhintclick(e),n&&this.introJs.onhintclose(n)}},{key:"configureIntroJs",value:function(){var t=this.props,e=t.options,n=t.hints;this.introJs.removeHints(),this.introJs.setOptions(d(d({},e),{},{hints:n})),this.isConfigured=!0}},{key:"renderHints",value:function(){var t=this.props,e=t.enabled,n=t.hints;e&&n.length>0?this.introJs.showHints():e||this.introJs.hideHints()}},{key:"render",value:function(){return null}}])&&h(e.prototype,n),r&&h(e,r),u}(i.Component);e.default=O,m(O,"propTypes",{enabled:r.default.bool,hints:r.default.arrayOf(r.default.shape({element:r.default.string.isRequired,hint:r.default.string.isRequired,hintPosition:u.hintPosition})).isRequired,onClick:r.default.func,onClose:r.default.func,options:u.options}),m(O,"defaultProps",{enabled:!1,onClick:null,onClose:null,options:s.options})},1959:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=c(n(3779)),r=c(n(5697)),i=n(7294),u=n(7762),s=f(n(2406)),l=f(n(5906));function a(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return a=function(){return t},t}function f(t){if(t&&t.__esModule)return t;if(null===t||"object"!==p(t)&&"function"!=typeof t)return{default:t};var e=a();if(e&&e.has(t))return e.get(t);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){var i=o?Object.getOwnPropertyDescriptor(t,r):null;i&&(i.get||i.set)?Object.defineProperty(n,r,i):n[r]=t[r]}return n.default=t,e&&e.set(t,n),n}function c(t){return t&&t.__esModule?t:{default:t}}function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function h(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(Object(n),!0).forEach((function(e){P(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function b(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function y(t,e){return y=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},y(t,e)}function g(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=O(t);if(e){var r=O(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return v(this,n)}}function v(t,e){return!e||"object"!==p(e)&&"function"!=typeof e?m(t):e}function m(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function O(t){return O=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},O(t)}function P(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var j=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&y(t,e)}(l,t);var e,n,r,s=g(l);function l(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,l),P(m(e=s.call(this,t)),"onExit",(function(){var t=e.props.onExit;e.isVisible=!1,t(e.introJs._currentStep)})),P(m(e),"onBeforeExit",(function(){var t=e.props.onBeforeExit;return!t||t(e.introJs._currentStep)})),P(m(e),"onBeforeChange",(function(){if(!e.isVisible)return!0;var t=e.props,n=t.onBeforeChange,o=t.onPreventChange;if(n){var r=n(e.introJs._currentStep);return!1===r&&o&&setTimeout((function(){o(e.introJs._currentStep)}),0),r}return!0})),P(m(e),"onAfterChange",(function(t){if(e.isVisible){var n=e.props.onAfterChange;n&&n(e.introJs._currentStep,t)}})),P(m(e),"onChange",(function(t){if(e.isVisible){var n=e.props.onChange;n&&n(e.introJs._currentStep,t)}})),P(m(e),"onComplete",(function(){var t=e.props.onComplete;t&&t()})),P(m(e),"updateStepElement",(function(t){var n=document.querySelector(e.introJs._options.steps[t].element);n&&(e.introJs._introItems[t].element=n,e.introJs._introItems[t].position=e.introJs._options.steps[t].position||"auto")})),e.introJs=null,e.isConfigured=!1,e.isVisible=!1,e.installIntroJs(),e}return e=l,(n=[{key:"componentDidMount",value:function(){this.props.enabled&&(this.configureIntroJs(),this.renderSteps())}},{key:"componentDidUpdate",value:function(t){var e=this.props,n=e.enabled,o=e.steps,r=e.options;this.isConfigured&&t.steps===o&&t.options===r||(this.configureIntroJs(),this.renderSteps()),t.enabled!==n&&this.renderSteps()}},{key:"componentWillUnmount",value:function(){this.introJs.exit()}},{key:"installIntroJs",value:function(){this.introJs=(0,o.default)(),this.introJs.onexit(this.onExit),this.introJs.onbeforeexit(this.onBeforeExit),this.introJs.onbeforechange(this.onBeforeChange),this.introJs.onafterchange(this.onAfterChange),this.introJs.onchange(this.onChange),this.introJs.oncomplete(this.onComplete)}},{key:"configureIntroJs",value:function(){var t=this.props,e=t.options,n=t.steps.map((function(t){return(0,i.isValidElement)(t.intro)?h(h({},t),{},{intro:(0,u.renderToStaticMarkup)(t.intro)}):t}));this.introJs.setOptions(h(h({},e),{},{steps:n})),this.isConfigured=!0}},{key:"renderSteps",value:function(){var t=this.props,e=t.enabled,n=t.initialStep,o=t.steps,r=t.onStart;e&&o.length>0&&!this.isVisible?(this.introJs.start(),this.isVisible=!0,this.introJs.goToStepNumber(n+1),r&&r(this.introJs._currentStep)):!e&&this.isVisible&&(this.isVisible=!1,this.introJs.exit())}},{key:"render",value:function(){return null}}])&&b(e.prototype,n),r&&b(e,r),l}(i.Component);e.default=j,P(j,"propTypes",{enabled:r.default.bool,initialStep:r.default.number.isRequired,steps:r.default.arrayOf(r.default.shape({element:r.default.string,intro:r.default.node.isRequired,position:s.tooltipPosition,tooltipClass:r.default.string,highlightClass:r.default.string})).isRequired,onStart:r.default.func,onExit:r.default.func.isRequired,onBeforeExit:r.default.func,onBeforeChange:r.default.func,onAfterChange:r.default.func,onChange:r.default.func,onPreventChange:r.default.func,onComplete:r.default.func,options:s.options}),P(j,"defaultProps",{enabled:!1,onStart:null,onBeforeExit:null,onBeforeChange:null,onAfterChange:null,onChange:null,onPreventChange:null,onComplete:null,options:l.options})},5906:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.options=void 0;e.options={hidePrev:!0,hideNext:!0}},2406:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.options=e.hintPosition=e.tooltipPosition=void 0;var o,r=(o=n(5697))&&o.__esModule?o:{default:o};var i=r.default.oneOf(["top","right","bottom","left","bottom-left-aligned","bottom-middle-aligned","bottom-right-aligned","top-left-aligned","top-middle-aligned","top-right-aligned","auto"]);e.tooltipPosition=i;var u=r.default.oneOf(["top-middle","top-left","top-right","bottom-left","bottom-right","bottom-middle","middle-left","middle-right","middle-middle"]);e.hintPosition=u;var s=r.default.shape({nextLabel:r.default.string,prevLabel:r.default.string,skipLabel:r.default.string,doneLabel:r.default.string,hidePrev:r.default.bool,hideNext:r.default.bool,tooltipPosition:i,tooltipClass:r.default.string,highlightClass:r.default.string,exitOnEsc:r.default.bool,exitOnOverlayClick:r.default.bool,showStepNumbers:r.default.bool,keyboardNavigation:r.default.bool,showButtons:r.default.bool,showBullets:r.default.bool,showProgress:r.default.bool,scrollToElement:r.default.bool,overlayOpacity:r.default.number,scrollPadding:r.default.number,positionPrecedence:r.default.arrayOf(r.default.string),disableInteraction:r.default.bool,hintPosition:u,hintButtonLabel:r.default.string,hintAnimation:r.default.bool});e.options=s},2723:function(t,e,n){Object.defineProperty(e,"Rg",{enumerable:!0,get:function(){return o.default}});var o=i(n(1959)),r=i(n(8083));function i(t){return t&&t.__esModule?t:{default:t}}},7704:function(t,e,n){n.r(e);var o=n(7294),r=n(3871),i=n(5414),u=n(2723),s=n(147),l=n(83);e.default=function(){var t=(0,o.useState)(!1),e=t[0],n=t[1];return o.createElement("div",{className:"index-container"},o.createElement(i.q,null,o.createElement("title",null,"Terry")),"undefined"!=typeof window?o.createElement(u.Rg,{enabled:e,steps:[{element:"#tmail-tour",intro:"Send email to Terry using Tmail."},{element:"#links-tour",intro:"Checkout Terry's links."},{element:"#signin-tour",intro:"Let Terry know you visited his website."},{element:"#search-tour",intro:"Search about Terry."}],initialStep:0,onExit:function(){return n(!1)}}):null,o.createElement(s.Z,null),o.createElement("img",{src:r.Z,alt:"terry_logo",height:"15%",className:"logo"}),o.createElement(l.Z,{stepsEnabled:e,setStepsEnabled:n}))}}}]);
//# sourceMappingURL=component---src-pages-index-js-618532cb466a67ba6e04.js.map