(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+lBW":
/*!******************************************!*\
  !*** ./src/app/data/pagel-event-type.ts ***!
  \******************************************/
/*! exports provided: PagelEventType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagelEventType", function() { return PagelEventType; });
var PagelEventType = /*@__PURE__*/ (function (PagelEventType) {
    PagelEventType["Chat"] = "Chat";
    PagelEventType["Mail"] = "Mail";
    return PagelEventType;
})({});



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Hagen\pagel_demo\pagel-demo\src\main.ts */"zUnb");


/***/ }),

/***/ "0n+T":
/*!****************************************************!*\
  !*** ./src/app/desktop/editor/editor.component.ts ***!
  \****************************************************/
/*! exports provided: EditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorComponent", function() { return EditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _window_header_window_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../window-header/window-header.component */ "cARB");



let EditorComponent = /*@__PURE__*/ (() => {
    class EditorComponent {
        constructor() {
            this.windowMinimize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.windowMaximize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.windowClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }
        ngOnInit() {
        }
    }
    EditorComponent.ɵfac = function EditorComponent_Factory(t) { return new (t || EditorComponent)(); };
    EditorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditorComponent, selectors: [["app-editor"]], inputs: { window: "window" }, outputs: { windowMinimize: "windowMinimize", windowMaximize: "windowMaximize", windowClose: "windowClose" }, decls: 4, vars: 1, consts: [[1, "appWindowWrapper"], [3, "icon", "windowClose", "windowMinimize", "windowMaximize"]], template: function EditorComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-window-header", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("windowClose", function EditorComponent_Template_app_window_header_windowClose_1_listener() { return ctx.windowClose.emit(); })("windowMinimize", function EditorComponent_Template_app_window_header_windowMinimize_1_listener() { return ctx.windowMinimize.emit(); })("windowMaximize", function EditorComponent_Template_app_window_header_windowMaximize_1_listener() { return ctx.windowMaximize.emit(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "textarea");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n  ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.window.icon);
            }
        }, directives: [_window_header_window_header_component__WEBPACK_IMPORTED_MODULE_1__["WindowHeaderComponent"]], styles: ["textarea[_ngcontent-%COMP%] {\n  width: calc(100% - 10px);\n  height: calc(100% - 38px);\n  resize: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVza3RvcC9lZGl0b3IvZWRpdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2Rlc2t0b3AvZWRpdG9yL2VkaXRvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRleHRhcmVhIHtcclxuICB3aWR0aDogY2FsYygxMDAlIC0gMTBweCk7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzOHB4KTtcclxuICByZXNpemU6IG5vbmU7XHJcbn1cclxuIl19 */"] });
    return EditorComponent;
})();



/***/ }),

/***/ "8RqE":
/*!************************************************!*\
  !*** ./src/app/desktop/mail/mail.component.ts ***!
  \************************************************/
/*! exports provided: MailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailComponent", function() { return MailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_pagel_event_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/pagel-event-type */ "+lBW");
/* harmony import */ var _game_engine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../game-engine */ "riem");
/* harmony import */ var _window_header_window_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../window-header/window-header.component */ "cARB");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function MailComponent_div_3_div_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 10);
    }
}
function MailComponent_div_3_Template(rf, ctx) {
    if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MailComponent_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const i_r3 = ctx.index; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r5.selectedSender = i_r3; return ctx_r5.readItems.push(i_r3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MailComponent_div_3_div_2_Template, 1, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const e_r2 = ctx.$implicit;
        const i_r3 = ctx.index;
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", e_r2.sender, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.readItems.indexOf(i_r3) < 0);
    }
}
function MailComponent_div_12_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.getVisibleText(), " ");
    }
}
let MailComponent = /*@__PURE__*/ (() => {
    class MailComponent {
        constructor(engine) {
            this.engine = engine;
            this.selectedSender = -1;
            this.readItems = [];
            this.windowMinimize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.windowMaximize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.windowClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }
        ngOnInit() {
        }
        getEvents() {
            return this.engine.getByEventType(_data_pagel_event_type__WEBPACK_IMPORTED_MODULE_1__["PagelEventType"].Mail);
        }
        getVisibleText() {
            if (this.selectedSender < 0) {
                return '';
            }
            return this.getEvents()[this.selectedSender].message;
        }
    }
    MailComponent.ɵfac = function MailComponent_Factory(t) { return new (t || MailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_game_engine__WEBPACK_IMPORTED_MODULE_2__["GameEngine"])); };
    MailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MailComponent, selectors: [["app-mail"]], inputs: { window: "window" }, outputs: { windowMinimize: "windowMinimize", windowMaximize: "windowMaximize", windowClose: "windowClose" }, decls: 13, vars: 3, consts: [[1, "appWindowWrapper"], [3, "icon", "windowClose", "windowMinimize", "windowMaximize"], [1, "senders"], ["class", "sender", 3, "click", 4, "ngFor", "ngForOf"], [1, "message"], [1, "answerBar"], [1, "answerBarItem"], [4, "ngIf"], [1, "sender", 3, "click"], ["class", "unread", 4, "ngIf"], [1, "unread"]], template: function MailComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-window-header", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("windowClose", function MailComponent_Template_app_window_header_windowClose_1_listener() { return ctx.windowClose.emit(); })("windowMinimize", function MailComponent_Template_app_window_header_windowMinimize_1_listener() { return ctx.windowMinimize.emit(); })("windowMaximize", function MailComponent_Template_app_window_header_windowMaximize_1_listener() { return ctx.windowMaximize.emit(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MailComponent_div_3_Template, 3, 2, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Answer ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Forward ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Mark as Spam ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MailComponent_div_12_Template, 2, 1, "div", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.window.icon);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.getEvents());
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedSender >= 0);
            }
        }, directives: [_window_header_window_header_component__WEBPACK_IMPORTED_MODULE_3__["WindowHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".senders[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 200px;\n  height: calc(100% - 80px);\n  overflow-y: scroll;\n  overflow-x: hidden;\n}\n\n.sender[_ngcontent-%COMP%] {\n  background-color: white;\n  border: 1px solid #ccc;\n  height: 30px;\n  width: 100%;\n}\n\n.message[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: calc(100% - 210px);\n  height: calc(100% - 80px);\n  overflow-y: scroll;\n  position: relative;\n}\n\n.answerBar[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 45px;\n  margin-bottom: 10px;\n  border-bottom: 1px solid #ccc;\n}\n\n.answerBarItem[_ngcontent-%COMP%] {\n  margin: 5px;\n  display: inline-block;\n  border: 1px solid #cccccc;\n  background-color: deepskyblue;\n  color: white;\n  padding: 5px;\n  cursor: pointer;\n}\n\n.unread[_ngcontent-%COMP%] {\n  margin: 2px;\n  float: right;\n  width: 1px;\n  height: 1px;\n  border: 3px solid deepskyblue;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVza3RvcC9tYWlsL21haWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFDRjs7QUFHQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0FBQUYiLCJmaWxlIjoic3JjL2FwcC9kZXNrdG9wL21haWwvbWFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZW5kZXJze1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA4MHB4KTtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG59XHJcblxyXG4uc2VuZGVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWVzc2FnZXtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDIxMHB4KTtcclxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDgwcHgpO1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5hbnN3ZXJCYXJ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNDVweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xyXG59XHJcblxyXG4uYW5zd2VyQmFySXRlbXtcclxuICBtYXJnaW46IDVweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjY2NjYztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkZWVwc2t5Ymx1ZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuXHJcbi51bnJlYWR7XHJcbiAgbWFyZ2luOiAycHg7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHdpZHRoOiAxcHg7XHJcbiAgaGVpZ2h0OiAxcHg7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgZGVlcHNreWJsdWU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbiJdfQ== */"] });
    return MailComponent;
})();



/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.



/***/ }),

/***/ "F/Zq":
/*!************************************************!*\
  !*** ./src/app/desktop/chat/chat.component.ts ***!
  \************************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_pagel_event_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/pagel-event-type */ "+lBW");
/* harmony import */ var _game_engine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../game-engine */ "riem");
/* harmony import */ var _window_header_window_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../window-header/window-header.component */ "cARB");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







function ChatComponent_div_3_div_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 12);
    }
}
function ChatComponent_div_3_Template(rf, ctx) {
    if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const i_r4 = ctx.index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r6.selectedSender = i_r4; ctx_r6.responses = []; return ctx_r6.readItems.push(i_r4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChatComponent_div_3_div_2_Template, 1, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const e_r3 = ctx.$implicit;
        const i_r4 = ctx.index;
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", e_r3.sender, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.readItems.indexOf(i_r4) < 0);
    }
}
function ChatComponent_div_5_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.getVisibleText(), " ");
    }
}
function ChatComponent_div_6_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const a_r8 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", a_r8, " ");
    }
}
let ChatComponent = /*@__PURE__*/ (() => {
    class ChatComponent {
        constructor(engine) {
            this.engine = engine;
            this.selectedSender = -1;
            this.response = '';
            this.responses = [];
            this.readItems = [];
            this.windowMinimize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.windowMaximize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.windowClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }
        ngOnInit() {
        }
        getEvents() {
            return this.engine.getByEventType(_data_pagel_event_type__WEBPACK_IMPORTED_MODULE_1__["PagelEventType"].Chat);
        }
        getVisibleText() {
            if (this.selectedSender < 0) {
                return '';
            }
            return this.getEvents()[this.selectedSender].message;
        }
        send() {
            this.responses.push(this.response);
            this.response = '';
        }
    }
    ChatComponent.ɵfac = function ChatComponent_Factory(t) { return new (t || ChatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_game_engine__WEBPACK_IMPORTED_MODULE_2__["GameEngine"])); };
    ChatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatComponent, selectors: [["app-chat"]], inputs: { window: "window" }, outputs: { windowMinimize: "windowMinimize", windowMaximize: "windowMaximize", windowClose: "windowClose" }, decls: 11, vars: 5, consts: [[1, "appWindowWrapper"], [3, "icon", "windowClose", "windowMinimize", "windowMaximize"], [1, "senders"], ["class", "sender", 3, "click", 4, "ngFor", "ngForOf"], [1, "message"], ["class", "senderbubble", 4, "ngIf"], ["class", "answerbubble", 4, "ngFor", "ngForOf"], [1, "answer"], ["type", "text", 3, "ngModel", "ngModelChange"], [1, "button", 3, "click"], [1, "sender", 3, "click"], ["class", "unread", 4, "ngIf"], [1, "unread"], [1, "senderbubble"], [1, "answerbubble"]], template: function ChatComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-window-header", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("windowClose", function ChatComponent_Template_app_window_header_windowClose_1_listener() { return ctx.windowClose.emit(); })("windowMinimize", function ChatComponent_Template_app_window_header_windowMinimize_1_listener() { return ctx.windowMinimize.emit(); })("windowMaximize", function ChatComponent_Template_app_window_header_windowMaximize_1_listener() { return ctx.windowMaximize.emit(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ChatComponent_div_3_Template, 3, 2, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ChatComponent_div_5_Template, 2, 1, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ChatComponent_div_6_Template, 2, 1, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChatComponent_Template_input_ngModelChange_8_listener($event) { return ctx.response = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_Template_div_click_9_listener() { return ctx.send(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " send ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.window.icon);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.getEvents());
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedSender >= 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.responses);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.response);
            }
        }, directives: [_window_header_window_header_component__WEBPACK_IMPORTED_MODULE_3__["WindowHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], styles: [".senders[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 200px;\n  height: calc(100% - 80px);\n  overflow-y: scroll;\n  overflow-x: hidden;\n}\n\n.sender[_ngcontent-%COMP%] {\n  background-color: white;\n  border: 1px solid #ccc;\n  height: 30px;\n  width: 100%;\n}\n\n.message[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: calc(100% - 210px);\n  height: calc(100% - 80px);\n  overflow-y: scroll;\n  position: relative;\n}\n\n.answer[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0px;\n  width: 100%;\n}\n\n.answer[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  float: left;\n  width: 80%;\n  padding: 10px;\n}\n\n.button[_ngcontent-%COMP%] {\n  background-color: deepskyblue;\n  color: white;\n  float: right;\n  padding: 10px;\n  cursor: pointer;\n}\n\n.senderbubble[_ngcontent-%COMP%] {\n  padding: 10px;\n  margin: 5px;\n  border-radius: 5px;\n  background-color: lightblue;\n}\n\n.answerbubble[_ngcontent-%COMP%] {\n  padding: 10px;\n  margin: 5px;\n  border-radius: 5px;\n  text-align: right;\n  background-color: lightgreen;\n}\n\n.unread[_ngcontent-%COMP%] {\n  margin: 2px;\n  float: right;\n  width: 1px;\n  height: 1px;\n  border: 3px solid deepskyblue;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVza3RvcC9jaGF0L2NoYXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9kZXNrdG9wL2NoYXQvY2hhdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZW5kZXJze1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA4MHB4KTtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG59XHJcblxyXG4uc2VuZGVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWVzc2FnZXtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDIxMHB4KTtcclxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDgwcHgpO1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5hbnN3ZXJ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYW5zd2VyIGlucHV0e1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLmJ1dHRvbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkZWVwc2t5Ymx1ZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uc2VuZGVyYnViYmxle1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcclxufVxyXG5cclxuLmFuc3dlcmJ1YmJsZXtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xyXG59XHJcblxyXG4udW5yZWFke1xyXG4gIG1hcmdpbjogMnB4O1xyXG4gIGZsb2F0OiByaWdodDtcclxuICB3aWR0aDogMXB4O1xyXG4gIGhlaWdodDogMXB4O1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkIGRlZXBza3libHVlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG4iXX0= */"] });
    return ChatComponent;
})();



/***/ }),

/***/ "MDIZ":
/*!******************************!*\
  !*** ./src/app/data/icon.ts ***!
  \******************************/
/*! exports provided: Icon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return Icon; });
class Icon {
    constructor(position, size, icon, name, application) {
        this.position = position;
        this.size = size;
        this.icon = icon;
        this.name = name;
        this.application = application;
    }
}



/***/ }),

/***/ "MHyr":
/*!************************************************!*\
  !*** ./src/app/desktop/icon/icon.component.ts ***!
  \************************************************/
/*! exports provided: IconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconComponent", function() { return IconComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


let IconComponent = /*@__PURE__*/ (() => {
    class IconComponent {
        constructor() {
        }
        ngOnInit() {
        }
        get iconUrl() {
            return 'assets/icons/' + this.icon + '.png';
        }
        get width() {
            if (this.size) {
                return this.size.width + '';
            }
            return 80 + '';
        }
        get height() {
            if (this.size) {
                return this.size.height + '';
            }
            return 100 + '';
        }
    }
    IconComponent.ɵfac = function IconComponent_Factory(t) { return new (t || IconComponent)(); };
    IconComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IconComponent, selectors: [["app-icon"]], inputs: { icon: "icon", name: "name", size: "size" }, decls: 5, vars: 6, consts: [[1, "iconwrapper"], [1, "image"], [3, "src"], [1, "text"]], template: function IconComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.width, "px")("height", ctx.height, "px");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.iconUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.name, " ");
            }
        }, styles: [".iconwrapper[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.iconwrapper[_ngcontent-%COMP%]:hover {\n  background-color: rgba(100, 100, 100, 0.3);\n}\n\n.image[_ngcontent-%COMP%] {\n  height: calc(100% - 30px);\n  max-width: 100%;\n  padding: 5px;\n}\n\n.image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 100%;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.text[_ngcontent-%COMP%] {\n  color: white;\n  height: 20px;\n  line-height: 20px;\n  width: 100%;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVza3RvcC9pY29uL2ljb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSwwQ0FBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2Rlc2t0b3AvaWNvbi9pY29uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb253cmFwcGVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5pY29ud3JhcHBlcjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDAsIDEwMCwgMTAwLCAwLjMpO1xyXG59XHJcblxyXG4uaW1hZ2Uge1xyXG4gIGhlaWdodDogY2FsYygxMDAlIC0gMzBweCk7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLmltYWdlIGltZyB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvXHJcbn1cclxuXHJcbi50ZXh0IHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbiJdfQ== */"] });
    return IconComponent;
})();



/***/ }),

/***/ "QNBY":
/*!********************************************************!*\
  !*** ./src/app/desktop/products/products.component.ts ***!
  \********************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _model_product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/product */ "ZVwo");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _window_header_window_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../window-header/window-header.component */ "cARB");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function ProductsComponent_tr_6_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const p_r1 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/products/", p_r1.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r1.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r1.description);
    }
}
let ProductsComponent = /*@__PURE__*/ (() => {
    class ProductsComponent {
        constructor(http) {
            this.http = http;
            this.windowMinimize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.windowMaximize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.windowClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.products = [];
        }
        ngOnInit() {
            this.http.get('assets/products/products.csv', { responseType: 'text' })
                .subscribe(data => {
                const rows = data.split('\r\n');
                for (let i = 0; i < rows.length; i++) {
                    const line = rows[i].split(';');
                    if (line.length === 3) {
                        this.products.push(new _model_product__WEBPACK_IMPORTED_MODULE_1__["Product"](line[0], line[1], line[2]));
                    }
                }
                console.log(this.products);
            }, error => {
                console.log(error);
            });
        }
    }
    ProductsComponent.ɵfac = function ProductsComponent_Factory(t) { return new (t || ProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
    ProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductsComponent, selectors: [["app-products"]], inputs: { window: "window" }, outputs: { windowMinimize: "windowMinimize", windowMaximize: "windowMaximize", windowClose: "windowClose" }, decls: 7, vars: 2, consts: [[1, "appWindowWrapper"], [3, "icon", "windowClose", "windowMinimize", "windowMaximize"], [4, "ngFor", "ngForOf"], [1, "productImg"], [3, "src"]], template: function ProductsComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-window-header", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("windowClose", function ProductsComponent_Template_app_window_header_windowClose_1_listener() { return ctx.windowClose.emit(); })("windowMinimize", function ProductsComponent_Template_app_window_header_windowMinimize_1_listener() { return ctx.windowMinimize.emit(); })("windowMaximize", function ProductsComponent_Template_app_window_header_windowMaximize_1_listener() { return ctx.windowMaximize.emit(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Products");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProductsComponent_tr_6_Template, 8, 3, "tr", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.window.icon);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);
            }
        }, directives: [_window_header_window_header_component__WEBPACK_IMPORTED_MODULE_3__["WindowHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".productImg[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 100px;\n  overflow: hidden;\n}\n\n.productImg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntd[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVza3RvcC9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUNFLHNCQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9kZXNrdG9wL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2R1Y3RJbWd7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnByb2R1Y3RJbWcgaW1ne1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG50ZHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG59XHJcbiJdfQ== */"] });
    return ProductsComponent;
})();



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/icon */ "MDIZ");
/* harmony import */ var _data_size__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/size */ "viku");
/* harmony import */ var _data_position__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data/position */ "fKte");
/* harmony import */ var _data_application__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data/application */ "klx0");
/* harmony import */ var _data_appWindow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data/appWindow */ "d2YT");
/* harmony import */ var _game_engine__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./game-engine */ "riem");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _desktop_icon_icon_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./desktop/icon/icon.component */ "MHyr");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _desktop_chat_chat_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./desktop/chat/chat.component */ "F/Zq");
/* harmony import */ var _desktop_editor_editor_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./desktop/editor/editor.component */ "0n+T");
/* harmony import */ var _desktop_explorer_explorer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./desktop/explorer/explorer.component */ "kUto");
/* harmony import */ var _desktop_mail_mail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./desktop/mail/mail.component */ "8RqE");
/* harmony import */ var _desktop_products_products_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./desktop/products/products.component */ "QNBY");

















function AppComponent_app_icon_3_Template(rf, ctx) {
    if (rf & 1) {
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dblclick", function AppComponent_app_icon_3_Template_app_icon_dblclick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const i_r9 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.startApplication(i_r9); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const i_r9 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("top", i_r9.position.y, "px")("left", i_r9.position.x, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "", i_r9.name, "_icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", i_r9.name)("icon", i_r9.icon)("size", i_r9.size);
    }
}
function AppComponent_app_chat_4_Template(rf, ctx) {
    if (rf & 1) {
        const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-chat", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("windowClose", function AppComponent_app_chat_4_Template_app_chat_windowClose_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.stopApplication(ctx_r12.Application.chat); })("windowMaximize", function AppComponent_app_chat_4_Template_app_chat_windowMaximize_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.maximizeApplication(ctx_r14.Application.chat); })("windowMinimize", function AppComponent_app_chat_4_Template_app_chat_windowMinimize_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.minimizeApplication(ctx_r15.Application.chat); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx_r1.getApplicationWindowWidth(ctx_r1.Application.chat), "px")("height", ctx_r1.getApplicationWindowHeight(ctx_r1.Application.chat), "px")("z-index", ctx_r1.getApplicationWindowZIndex(ctx_r1.Application.chat));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("window", ctx_r1.getApplicationWindow(ctx_r1.Application.chat));
    }
}
function AppComponent_app_editor_5_Template(rf, ctx) {
    if (rf & 1) {
        const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-editor", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("windowClose", function AppComponent_app_editor_5_Template_app_editor_windowClose_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.stopApplication(ctx_r16.Application.editor); })("windowMaximize", function AppComponent_app_editor_5_Template_app_editor_windowMaximize_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.maximizeApplication(ctx_r18.Application.editor); })("windowMinimize", function AppComponent_app_editor_5_Template_app_editor_windowMinimize_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.minimizeApplication(ctx_r19.Application.editor); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx_r2.getApplicationWindowWidth(ctx_r2.Application.editor), "px")("height", ctx_r2.getApplicationWindowHeight(ctx_r2.Application.editor), "px")("z-index", ctx_r2.getApplicationWindowZIndex(ctx_r2.Application.editor));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("window", ctx_r2.getApplicationWindow(ctx_r2.Application.editor));
    }
}
function AppComponent_app_explorer_6_Template(rf, ctx) {
    if (rf & 1) {
        const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-explorer", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("windowClose", function AppComponent_app_explorer_6_Template_app_explorer_windowClose_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.stopApplication(ctx_r20.Application.explorer); })("windowMaximize", function AppComponent_app_explorer_6_Template_app_explorer_windowMaximize_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.maximizeApplication(ctx_r22.Application.explorer); })("windowMinimize", function AppComponent_app_explorer_6_Template_app_explorer_windowMinimize_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.minimizeApplication(ctx_r23.Application.explorer); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx_r3.getApplicationWindowWidth(ctx_r3.Application.explorer), "px")("height", ctx_r3.getApplicationWindowHeight(ctx_r3.Application.explorer), "px")("z-index", ctx_r3.getApplicationWindowZIndex(ctx_r3.Application.explorer));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("window", ctx_r3.getApplicationWindow(ctx_r3.Application.explorer));
    }
}
function AppComponent_app_mail_7_Template(rf, ctx) {
    if (rf & 1) {
        const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-mail", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("windowClose", function AppComponent_app_mail_7_Template_app_mail_windowClose_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.stopApplication(ctx_r24.Application.mail); })("windowMaximize", function AppComponent_app_mail_7_Template_app_mail_windowMaximize_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.maximizeApplication(ctx_r26.Application.mail); })("windowMinimize", function AppComponent_app_mail_7_Template_app_mail_windowMinimize_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.minimizeApplication(ctx_r27.Application.mail); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx_r4.getApplicationWindowWidth(ctx_r4.Application.mail), "px")("height", ctx_r4.getApplicationWindowHeight(ctx_r4.Application.mail), "px")("z-index", ctx_r4.getApplicationWindowZIndex(ctx_r4.Application.mail));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("window", ctx_r4.getApplicationWindow(ctx_r4.Application.mail));
    }
}
function AppComponent_app_products_8_Template(rf, ctx) {
    if (rf & 1) {
        const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-products", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("windowClose", function AppComponent_app_products_8_Template_app_products_windowClose_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.stopApplication(ctx_r28.Application.products); })("windowMaximize", function AppComponent_app_products_8_Template_app_products_windowMaximize_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.maximizeApplication(ctx_r30.Application.products); })("windowMinimize", function AppComponent_app_products_8_Template_app_products_windowMinimize_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r31.minimizeApplication(ctx_r31.Application.products); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx_r5.getApplicationWindowWidth(ctx_r5.Application.products), "px")("height", ctx_r5.getApplicationWindowHeight(ctx_r5.Application.products), "px")("z-index", ctx_r5.getApplicationWindowZIndex(ctx_r5.Application.products));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("window", ctx_r5.getApplicationWindow(ctx_r5.Application.products));
    }
}
function AppComponent_section_9_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Explorer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Systemsteuerung");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Shutdown");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function AppComponent_div_11_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" A new ", ctx_r7.getNewEvent().eventType, " message appeared! ");
    }
}
function AppComponent_div_16_Template(rf, ctx) {
    if (rf & 1) {
        const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_16_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const app_r32 = ctx.$implicit; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r33.focusApplication(app_r32.app); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const app_r32 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "assets/icons/" + app_r32.icon.icon + ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    }
}
let AppComponent = /*@__PURE__*/ (() => {
    class AppComponent {
        constructor(engine) {
            this.engine = engine;
            this.title = 'PAGEL Simulation';
            this.standardIconWidth = 100;
            this.standardIconHeight = 80;
            this.standardWindowWidth = 600;
            this.standardWindowHeight = 540;
            this.icons = [];
            this.appWindows = [];
            this.Application = _data_application__WEBPACK_IMPORTED_MODULE_4__["Application"];
            this.homeOpen = false;
        }
        ngOnInit() {
            // init icons
            this.icons.push(new _data_icon__WEBPACK_IMPORTED_MODULE_1__["Icon"](new _data_position__WEBPACK_IMPORTED_MODULE_3__["Position"](0, 0), this.getIconStandardSize(), 'mail', 'E-Mail', _data_application__WEBPACK_IMPORTED_MODULE_4__["Application"].mail));
            this.icons.push(new _data_icon__WEBPACK_IMPORTED_MODULE_1__["Icon"](new _data_position__WEBPACK_IMPORTED_MODULE_3__["Position"](0, 100), this.getIconStandardSize(), 'chat', 'Chat', _data_application__WEBPACK_IMPORTED_MODULE_4__["Application"].chat));
            this.icons.push(new _data_icon__WEBPACK_IMPORTED_MODULE_1__["Icon"](new _data_position__WEBPACK_IMPORTED_MODULE_3__["Position"](0, 200), this.getIconStandardSize(), 'editor', 'Editor', _data_application__WEBPACK_IMPORTED_MODULE_4__["Application"].editor));
            this.icons.push(new _data_icon__WEBPACK_IMPORTED_MODULE_1__["Icon"](new _data_position__WEBPACK_IMPORTED_MODULE_3__["Position"](0, 300), this.getIconStandardSize(), 'explorer', 'Bibliothek', _data_application__WEBPACK_IMPORTED_MODULE_4__["Application"].explorer));
            this.icons.push(new _data_icon__WEBPACK_IMPORTED_MODULE_1__["Icon"](new _data_position__WEBPACK_IMPORTED_MODULE_3__["Position"](0, 400), this.getIconStandardSize(), 'products', 'Bibliothek', _data_application__WEBPACK_IMPORTED_MODULE_4__["Application"].products));
        }
        getIconStandardSize() {
            return new _data_size__WEBPACK_IMPORTED_MODULE_2__["Size"](this.standardIconHeight, this.standardIconWidth);
        }
        getWindowStandardSize() {
            return new _data_size__WEBPACK_IMPORTED_MODULE_2__["Size"](this.standardWindowHeight, this.standardWindowWidth);
        }
        get screenSize() {
            const height = document.getElementById('desktop_content').getBoundingClientRect().height;
            const width = document.getElementById('desktop_content').getBoundingClientRect().width;
            return new _data_size__WEBPACK_IMPORTED_MODULE_2__["Size"](height, width);
        }
        getApplicationWindow(application) {
            const app = this.appWindows.filter(a => a.app === application);
            if (app.length === 0) {
                return null;
            }
            return app[0];
        }
        getApplicationWindowZIndex(application) {
            const app = this.getApplicationWindow(application);
            return app.zIndex;
        }
        getApplicationWindowWidth(application) {
            const app = this.getApplicationWindow(application);
            if (app.maximized) {
                return this.screenSize.width;
            }
            return app.size.width;
        }
        getApplicationWindowHeight(application) {
            const app = this.getApplicationWindow(application);
            if (app.maximized) {
                return this.screenSize.height;
            }
            return app.size.height;
        }
        startApplication(i) {
            if (!this.getApplicationWindow(i.application)) {
                this.appWindows.push(new _data_appWindow__WEBPACK_IMPORTED_MODULE_5__["AppWindow"](10, i.application, this.getWindowStandardSize(), i));
            }
            this.focusApplication(i.application);
        }
        stopApplication(application) {
            this.appWindows = this.appWindows.filter(a => a.app !== application);
        }
        maximizeApplication(application) {
            this.getApplicationWindow(application).maximized = !this.getApplicationWindow(application).maximized;
        }
        minimizeApplication(application) {
            this.getApplicationWindow(application).zIndex = -1;
        }
        focusApplication(application) {
            const app = this.getApplicationWindow(application);
            this.appWindows.forEach(a => {
                if (a.zIndex > 0) {
                    a.zIndex = a.zIndex - 1;
                }
            });
            app.zIndex = 10;
        }
        // *********** DESKTOP FUNCTIONS************************
        get background() {
            return 'url(\'assets/backgrounds/windows10.jpg\')';
        }
        get lang() {
            return 'DE';
        }
        getNow() {
            return Date.now();
        }
        get timeformat() {
            return 'hh:mm';
        }
        get dateformat() {
            return 'dd.MM.yyyy';
        }
        getNewEvent() {
            return this.engine.getNewEvent();
        }
    }
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_game_engine__WEBPACK_IMPORTED_MODULE_6__["GameEngine"])); };
    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 25, vars: 20, consts: [[1, "desktop"], ["id", "desktop_content", 1, "desktop_content", 3, "click"], ["class", "desktop_icon", "cdkDragBoundary", ".desktop_content", "cdkDrag", "", 3, "top", "left", "name", "icon", "size", "id", "dblclick", 4, "ngFor", "ngForOf"], ["class", "appwindow", "cdkDragBoundary", ".desktop_content", "cdkDrag", "", 3, "width", "height", "z-index", "window", "windowClose", "windowMaximize", "windowMinimize", 4, "ngIf"], ["class", "homeMenu", 4, "ngIf"], [1, "events"], ["class", "eventInfo", 4, "ngIf"], [1, "taskbar"], [1, "home", 3, "click"], ["src", "assets/icons/home.png"], [1, "applications"], ["class", "application_tab", 3, "click", 4, "ngFor", "ngForOf"], [1, "time", "right"], [1, "language", "right"], ["cdkDragBoundary", ".desktop_content", "cdkDrag", "", 1, "desktop_icon", 3, "name", "icon", "size", "id", "dblclick"], ["cdkDragBoundary", ".desktop_content", "cdkDrag", "", 1, "appwindow", 3, "window", "windowClose", "windowMaximize", "windowMinimize"], [1, "homeMenu"], [1, "homeMenuItem"], [1, "eventInfo"], [1, "application_tab", 3, "click"], [3, "src"]], template: function AppComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_section_click_2_listener() { return ctx.homeOpen = false; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_app_icon_3_Template, 1, 8, "app-icon", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_app_chat_4_Template, 1, 7, "app-chat", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_app_editor_5_Template, 1, 7, "app-editor", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_app_explorer_6_Template, 1, 7, "app-explorer", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_app_mail_7_Template, 1, 7, "app-mail", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AppComponent_app_products_8_Template, 1, 7, "app-products", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AppComponent_section_9_Template, 7, 0, "section", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "section", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AppComponent_div_11_Template, 2, 1, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "section", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_13_listener() { return ctx.homeOpen = true; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AppComponent_div_16_Template, 2, 1, "div", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "date");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "date");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", ctx.background);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.icons);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getApplicationWindow(ctx.Application.chat) && ctx.getApplicationWindow(ctx.Application.chat).zIndex > 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getApplicationWindow(ctx.Application.editor) && ctx.getApplicationWindow(ctx.Application.editor).zIndex > 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getApplicationWindow(ctx.Application.explorer) && ctx.getApplicationWindow(ctx.Application.explorer).zIndex > 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getApplicationWindow(ctx.Application.mail) && ctx.getApplicationWindow(ctx.Application.mail).zIndex > 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getApplicationWindow(ctx.Application.products) && ctx.getApplicationWindow(ctx.Application.products).zIndex > 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.homeOpen);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getNewEvent());
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.appWindows);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](19, 14, ctx.getNow(), ctx.timeformat), " ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](22, 17, ctx.getNow(), ctx.dateformat), " ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.lang, " ");
            }
        }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _desktop_icon_icon_component__WEBPACK_IMPORTED_MODULE_9__["IconComponent"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__["CdkDrag"], _desktop_chat_chat_component__WEBPACK_IMPORTED_MODULE_11__["ChatComponent"], _desktop_editor_editor_component__WEBPACK_IMPORTED_MODULE_12__["EditorComponent"], _desktop_explorer_explorer_component__WEBPACK_IMPORTED_MODULE_13__["ExplorerComponent"], _desktop_mail_mail_component__WEBPACK_IMPORTED_MODULE_14__["MailComponent"], _desktop_products_products_component__WEBPACK_IMPORTED_MODULE_15__["ProductsComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]], styles: [".desktop[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  bottom: 0px;\n}\n\n.desktop_content[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  bottom: 50px;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-position: center;\n  background-size: cover;\n}\n\n.desktop_icon[_ngcontent-%COMP%] {\n  position: fixed;\n}\n\n.taskbar[_ngcontent-%COMP%] {\n  position: fixed;\n  background-color: darkgrey;\n  width: 100%;\n  bottom: 0px;\n  height: 50px;\n}\n\n.taskbar[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 46px;\n  margin: 2px;\n  text-align: center;\n}\n\n.time[_ngcontent-%COMP%] {\n  line-height: 23px;\n}\n\n.language[_ngcontent-%COMP%] {\n  line-height: 46px;\n}\n\n.right[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.homeMenu[_ngcontent-%COMP%] {\n  z-index: 20;\n  position: fixed;\n  width: 300px;\n  bottom: 50px;\n  background-color: lightgrey;\n}\n\n.homeMenuItem[_ngcontent-%COMP%] {\n  height: 20px;\n  text-align: left;\n  border: 1px gray solid;\n  padding: 5px;\n  cursor: pointer;\n}\n\n.homeMenuItem[_ngcontent-%COMP%]:hover {\n  background-color: gray;\n}\n\n.appwindow[_ngcontent-%COMP%] {\n  position: fixed;\n}\n\n.applications[_ngcontent-%COMP%] {\n  padding-left: 30px;\n}\n\n.application_tab[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 46px;\n  width: 60px;\n  line-height: 46px;\n  margin: 2px;\n  background-color: gray;\n}\n\n.application_tab[_ngcontent-%COMP%]:hover {\n  background-color: dimgrey;\n}\n\n.application_tab[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 20px;\n  padding: 13px;\n}\n\n.eventInfo[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 53px;\n  right: 0px;\n  background-color: darkgrey;\n  text-align: center;\n  padding: 40px;\n  opacity: 0.8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBRUEsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUFGOztBQUdBO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBQUY7O0FBR0E7RUFDRSxpQkFBQTtBQUFGOztBQUdBO0VBQ0UsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLFlBQUE7QUFBRjs7QUFHQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtBQUFGOztBQUdBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUFGOztBQUdBO0VBQ0Usc0JBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0FBQUY7O0FBR0E7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUFBRjs7QUFHQTtFQUNFLHlCQUFBO0FBQUY7O0FBR0E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQUFGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlc2t0b3Age1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDBweDtcclxuICBsZWZ0OiAwcHg7XHJcbiAgcmlnaHQ6IDBweDtcclxuICBib3R0b206IDBweDtcclxufVxyXG5cclxuLmRlc2t0b3BfY29udGVudCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMHB4O1xyXG4gIGxlZnQ6IDBweDtcclxuICByaWdodDogMHB4O1xyXG4gIGJvdHRvbTogNTBweDtcclxuXHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4uZGVza3RvcF9pY29uIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbn1cclxuXHJcbi50YXNrYmFyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyZXk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm90dG9tOiAwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG4udGFza2JhciBkaXYge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBoZWlnaHQ6IDQ2cHg7XHJcbiAgbWFyZ2luOiAycHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udGltZSB7XHJcbiAgbGluZS1oZWlnaHQ6IDIzcHg7XHJcbn1cclxuXHJcbi5sYW5ndWFnZSB7XHJcbiAgbGluZS1oZWlnaHQ6IDQ2cHg7XHJcbn1cclxuXHJcbi5yaWdodCB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4uaG9tZU1lbnUge1xyXG4gIHotaW5kZXg6IDIwO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgYm90dG9tOiA1MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcclxufVxyXG5cclxuLmhvbWVNZW51SXRlbSB7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgYm9yZGVyOiAxcHggZ3JheSBzb2xpZDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uaG9tZU1lbnVJdGVtOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG59XHJcblxyXG4uYXBwd2luZG93e1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxufVxyXG5cclxuLmFwcGxpY2F0aW9uc3tcclxuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbn1cclxuXHJcbi5hcHBsaWNhdGlvbl90YWJ7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGhlaWdodDogNDZweDtcclxuICB3aWR0aDogNjBweDtcclxuICBsaW5lLWhlaWdodDogNDZweDtcclxuICBtYXJnaW46IDJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG59XHJcblxyXG4uYXBwbGljYXRpb25fdGFiOmhvdmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGRpbWdyZXk7XHJcbn1cclxuXHJcbi5hcHBsaWNhdGlvbl90YWIgaW1ne1xyXG4gIGhlaWdodDogMjBweDtcclxuICBwYWRkaW5nOiAxM3B4O1xyXG59XHJcblxyXG4uZXZlbnRJbmZve1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDUzcHg7XHJcbiAgcmlnaHQ6IDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JleTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogNDBweDtcclxuICBvcGFjaXR5OiAwLjg7XHJcbn1cclxuIl19 */"] });
    return AppComponent;
})();



/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _desktop_icon_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./desktop/icon/icon.component */ "MHyr");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _desktop_chat_chat_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./desktop/chat/chat.component */ "F/Zq");
/* harmony import */ var _desktop_window_header_window_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./desktop/window-header/window-header.component */ "cARB");
/* harmony import */ var _desktop_explorer_explorer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./desktop/explorer/explorer.component */ "kUto");
/* harmony import */ var _desktop_mail_mail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./desktop/mail/mail.component */ "8RqE");
/* harmony import */ var _desktop_editor_editor_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./desktop/editor/editor.component */ "0n+T");
/* harmony import */ var _desktop_products_products_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./desktop/products/products.component */ "QNBY");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _game_engine__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./game-engine */ "riem");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
















let AppModule = /*@__PURE__*/ (() => {
    class AppModule {
    }
    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
            _game_engine__WEBPACK_IMPORTED_MODULE_13__["GameEngine"]
        ], imports: [[
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["DragDropModule"]
            ]] });
    return AppModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _desktop_icon_icon_component__WEBPACK_IMPORTED_MODULE_4__["IconComponent"],
            _desktop_chat_chat_component__WEBPACK_IMPORTED_MODULE_6__["ChatComponent"],
            _desktop_window_header_window_header_component__WEBPACK_IMPORTED_MODULE_7__["WindowHeaderComponent"],
            _desktop_explorer_explorer_component__WEBPACK_IMPORTED_MODULE_8__["ExplorerComponent"],
            _desktop_mail_mail_component__WEBPACK_IMPORTED_MODULE_9__["MailComponent"],
            _desktop_editor_editor_component__WEBPACK_IMPORTED_MODULE_10__["EditorComponent"],
            _desktop_products_products_component__WEBPACK_IMPORTED_MODULE_11__["ProductsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["DragDropModule"]] });
})();



/***/ }),

/***/ "ZVwo":
/*!***************************************************!*\
  !*** ./src/app/desktop/products/model/product.ts ***!
  \***************************************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
class Product {
    constructor(image, title, description) {
        this.image = image;
        this.title = title;
        this.description = description;
    }
}



/***/ }),

/***/ "cARB":
/*!******************************************************************!*\
  !*** ./src/app/desktop/window-header/window-header.component.ts ***!
  \******************************************************************/
/*! exports provided: WindowHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowHeaderComponent", function() { return WindowHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


let WindowHeaderComponent = /*@__PURE__*/ (() => {
    class WindowHeaderComponent {
        constructor() {
            this.windowMinimize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.windowMaximize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.windowClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }
        ngOnInit() {
        }
    }
    WindowHeaderComponent.ɵfac = function WindowHeaderComponent_Factory(t) { return new (t || WindowHeaderComponent)(); };
    WindowHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WindowHeaderComponent, selectors: [["app-window-header"]], inputs: { icon: "icon" }, outputs: { windowMinimize: "windowMinimize", windowMaximize: "windowMaximize", windowClose: "windowClose" }, decls: 9, vars: 2, consts: [[1, "bar"], [1, "barItem"], [3, "src"], [1, "barItem", 2, "padding", "5px"], [1, "actions"], ["src", "assets/img/window-minimize-solid.svg", 3, "click"], ["src", "assets/img/window-maximize-solid.svg", 3, "click"], ["src", "assets/img/rectangle-xmark-solid.svg", 3, "click"]], template: function WindowHeaderComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "img", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WindowHeaderComponent_Template_img_click_6_listener() { return ctx.windowMinimize.emit(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "img", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WindowHeaderComponent_Template_img_click_7_listener() { return ctx.windowMaximize.emit(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "img", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WindowHeaderComponent_Template_img_click_8_listener() { return ctx.windowClose.emit(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "assets/icons/" + ctx.icon.icon + ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.icon.name, " ");
            }
        }, styles: [".bar[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 30px;\n  background-color: lightskyblue;\n}\n\n.bar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 22px;\n  padding: 1px;\n}\n\n.barItem[_ngcontent-%COMP%] {\n  float: left;\n}\n\n.actions[_ngcontent-%COMP%] {\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVza3RvcC93aW5kb3ctaGVhZGVyL3dpbmRvdy1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZGVza3RvcC93aW5kb3ctaGVhZGVyL3dpbmRvdy1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFye1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMzBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNreWJsdWU7XHJcbn1cclxuXHJcbi5iYXIgaW1ne1xyXG4gIGhlaWdodDogMjJweDtcclxuICBwYWRkaW5nOjFweDtcclxufVxyXG5cclxuLmJhckl0ZW17XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5hY3Rpb25ze1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG4iXX0= */"] });
    return WindowHeaderComponent;
})();



/***/ }),

/***/ "d2YT":
/*!***********************************!*\
  !*** ./src/app/data/appWindow.ts ***!
  \***********************************/
/*! exports provided: AppWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppWindow", function() { return AppWindow; });
class AppWindow {
    constructor(zIndex, app, size, icon) {
        this.maximized = false;
        this.zIndex = zIndex;
        this.app = app;
        this.size = size;
        this.icon = icon;
    }
}



/***/ }),

/***/ "fKte":
/*!**********************************!*\
  !*** ./src/app/data/position.ts ***!
  \**********************************/
/*! exports provided: Position */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Position", function() { return Position; });
class Position {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}



/***/ }),

/***/ "kUto":
/*!********************************************************!*\
  !*** ./src/app/desktop/explorer/explorer.component.ts ***!
  \********************************************************/
/*! exports provided: ExplorerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExplorerComponent", function() { return ExplorerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _window_header_window_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../window-header/window-header.component */ "cARB");



let ExplorerComponent = /*@__PURE__*/ (() => {
    class ExplorerComponent {
        constructor() {
            this.windowMinimize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.windowMaximize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.windowClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }
        ngOnInit() {
        }
    }
    ExplorerComponent.ɵfac = function ExplorerComponent_Factory(t) { return new (t || ExplorerComponent)(); };
    ExplorerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExplorerComponent, selectors: [["app-explorer"]], inputs: { window: "window" }, outputs: { windowMinimize: "windowMinimize", windowMaximize: "windowMaximize", windowClose: "windowClose" }, decls: 2, vars: 1, consts: [[1, "appWindowWrapper"], [3, "icon", "windowClose", "windowMinimize", "windowMaximize"]], template: function ExplorerComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-window-header", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("windowClose", function ExplorerComponent_Template_app_window_header_windowClose_1_listener() { return ctx.windowClose.emit(); })("windowMinimize", function ExplorerComponent_Template_app_window_header_windowMinimize_1_listener() { return ctx.windowMinimize.emit(); })("windowMaximize", function ExplorerComponent_Template_app_window_header_windowMaximize_1_listener() { return ctx.windowMaximize.emit(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.window.icon);
            }
        }, directives: [_window_header_window_header_component__WEBPACK_IMPORTED_MODULE_1__["WindowHeaderComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rlc2t0b3AvZXhwbG9yZXIvZXhwbG9yZXIuY29tcG9uZW50LnNjc3MifQ== */"] });
    return ExplorerComponent;
})();



/***/ }),

/***/ "klx0":
/*!*************************************!*\
  !*** ./src/app/data/application.ts ***!
  \*************************************/
/*! exports provided: Application */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Application", function() { return Application; });
var Application = /*@__PURE__*/ (function (Application) {
    Application["mail"] = "mail";
    Application["chat"] = "chat";
    Application["editor"] = "editor";
    Application["explorer"] = "explorer";
    Application["products"] = "products";
    return Application;
})({});



/***/ }),

/***/ "qH6Q":
/*!*************************************!*\
  !*** ./src/app/data/pagel-event.ts ***!
  \*************************************/
/*! exports provided: PagelEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagelEvent", function() { return PagelEvent; });
class PagelEvent {
    constructor(eventType, sender, message) {
        this.creationDate = new Date();
        this.eventType = eventType;
        this.sender = sender;
        this.message = message;
    }
}



/***/ }),

/***/ "riem":
/*!********************************!*\
  !*** ./src/app/game-engine.ts ***!
  \********************************/
/*! exports provided: GameEngine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameEngine", function() { return GameEngine; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_pagel_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/pagel-event */ "qH6Q");
/* harmony import */ var _data_pagel_event_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/pagel-event-type */ "+lBW");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





let GameEngine = /*@__PURE__*/ (() => {
    class GameEngine {
        constructor(http) {
            this.http = http;
            this.messageProbability = 50; // Wahrscheinlichkeit, das eine Message innerhalb von 10 Sekunden auftaucht
            this.possibleEvents = [];
            this.http.get('assets/event/event.csv', { responseType: 'text' })
                .subscribe(data => {
                const rows = data.split('\r\n');
                for (let i = 0; i < rows.length; i++) {
                    const line = rows[i].split(';');
                    if (line.length === 3) {
                        if (line[0] === 'Mail') {
                            this.possibleEvents.push(new _data_pagel_event__WEBPACK_IMPORTED_MODULE_1__["PagelEvent"](_data_pagel_event_type__WEBPACK_IMPORTED_MODULE_2__["PagelEventType"].Mail, line[1], line[2]));
                        }
                        else {
                            this.possibleEvents.push(new _data_pagel_event__WEBPACK_IMPORTED_MODULE_1__["PagelEvent"](_data_pagel_event_type__WEBPACK_IMPORTED_MODULE_2__["PagelEventType"].Chat, line[1], line[2]));
                        }
                    }
                }
                console.log(this.possibleEvents);
            }, error => {
                console.log(error);
            });
            this.interval = setInterval(() => {
                if (this.possibleEvents.length > 0) {
                    const throwEvent = Math.floor(Math.random() * 100) < this.messageProbability;
                    if (throwEvent) {
                        const eventToThrow = Math.floor(Math.random() * this.possibleEvents.length);
                        const newEvent = this.possibleEvents[eventToThrow];
                        newEvent.creationDate = new Date();
                        GameEngine.thrownEvents.push(newEvent);
                        GameEngine.newEvent = newEvent;
                    }
                    else {
                        GameEngine.newEvent = null;
                    }
                }
            }, 5000);
        }
        getByEventType(type) {
            return GameEngine.thrownEvents.filter(e => e.eventType === type);
        }
        getNewEvent() {
            if (GameEngine.newEvent && GameEngine.newEvent.creationDate.getTime() > (new Date().getTime() - 1000)) {
                return GameEngine.newEvent;
            }
            else {
                return null;
            }
        }
    }
    GameEngine.thrownEvents = [];
    GameEngine.newEvent = null;
    GameEngine.ɵfac = function GameEngine_Factory(t) { return new (t || GameEngine)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
    GameEngine.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GameEngine, factory: GameEngine.ɵfac });
    return GameEngine;
})();



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
let AppRoutingModule = /*@__PURE__*/ (() => {
    class AppRoutingModule {
    }
    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return AppRoutingModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();



/***/ }),

/***/ "viku":
/*!******************************!*\
  !*** ./src/app/data/size.ts ***!
  \******************************/
/*! exports provided: Size */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Size", function() { return Size; });
class Size {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}



/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));



/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map