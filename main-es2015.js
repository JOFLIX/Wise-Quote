(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-body-fluid\">\n<app-quote></app-quote>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/quote-details/quote-details.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/quote-details/quote-details.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-body card-detail\">\n  <p>{{quote.description}}</p>\n</div>\n<div class=\"card-body card-bodys\">\n  <p>This quote was posted {{quote.completeDate|timeAgo}}</p>\n<section style=\"padding-top:3%\">\n    <app-vote ></app-vote>\n</section>\n\n  <button class=\"btn btn-success\" (click) = 'quoteDelete(true)' >Delete Quote</button>\n  <!-- <button type=\"button\" name=\"button\" button> -->\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/quote-form/quote-form.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/quote-form/quote-form.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <form (ngSubmit)='submitQuote()' #quoteForm='ngForm' >\n            <div class=\"form-group\">\n\n                <label for=\"name\"><b>Original Author</b></label>\n                <input style=\"background-color:transparent\" type=\"text\"  class=\"form-control\" id=\"author\" [(ngModel)]=\"newQuote.author\" author=\"name\" #author=\"ngModel\" required>\n            <!--Testing  to see if we get data-->\n                <b>Display Author</b> {{newQuote.author}}\n                <div  [hidden]=\"author.valid || author.pristine\" class=\"alert alert-danger\">\n                    <p> Author is Required</p>\n\n                </div>\n            </div>\n\n            <div class=\"form-group\">\n\n                <label for=\"name\"><b>Name(Or Nickname)</b></label>\n                <input style=\"background-color:transparent\" type=\"text\"  class=\"form-control\" id=\"name\" [(ngModel)]=\"newQuote.name\" name=\"name\" #name=\"ngModel\" required>\n            <!-- To display the new quote -->\n              <b>Published by {{newQuote.name}}</b>\n                <div [hidden]=\"name.valid || name.pristine\" class=\"alert alert-danger\">\n                    <p> Name is Required</p>\n\n                </div>\n            </div>\n            <div class=\"form-group\">\n\n                <label for=\"description\">Description</label>\n                <textarea style=\"background-color:transparent\" class=\"form-control\" id=\"description\" rows=\"4\" [(ngModel)]=\"newQuote.description\" name=\"description\" #description=\"ngModel\" required></textarea>\n                <div [hidden]=\"description.valid || description.pristine\" class=\"alert alert-danger\">\n                    <p> Quote is required, please!</p>\n\n                </div>\n\n            </div>\n\n            <div class=\"form-group\">\n                <label for=\"complete\">Date of publishing <span font-size:30pxs>:</span> </label>\n                <input style=\"background-color:transparent; color:white\" type='date' id=\"complete\" [(ngModel)]=\"newQuote.completeDate\" name=\"completeDate\" #completeDate=\"ngModel\" required >\n                <div [hidden]=\"completeDate.valid || completeDate.pristine\" class=\"alert alert-danger\">\n                                    <p> Correct date format is required please.</p>\n                </div>\n            </div>\n            <button type=\"submit\" class=\"btn btn-success btn-lg\">Add Quote</button>\n        </form>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/quote/quote.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/quote/quote.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "   <!-- <h1>My quotes</h1> -->\n\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-6\">\n      <app-quote-form (addQuote)=\"addNewQuote($event)\"></app-quote-form>\n    </div>\n\n\n    <div class=\"col-5 my-quotes-page\" >\n      <ul>\n        <div class=\"card\" id=\"crd\" *ngFor='let quote of quotes;let i = index' style=\"justify-content:space-arround; padding:2%\">\n        <div class=\"card-title section\">\n          <li appHighlight>Author: {{quote.name}} <br> Date Published ; {{quote.completeDate|date|lowercase}}</li>\n        </div>\n          <button  (click)='toogleDetails(i)' class=\"btn btn-danger\">Toogle Quote Details</button>\n          <app-quote-details *ngIf=\"quote.showDescription\" [quote]='quote' (isComplete)='deleteQuote($event, i)'></app-quote-details>\n\n\n        </div>\n      </ul>\n    </div>\n\n    <!-- <p *ngIf='quotes.length > 5'>You have too many quotes</p> -->\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/vote/vote.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/vote/vote.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<p>\n    <button class=\"col btn btn-success \" (click)=\"upVote()\"><span class=\"badge\"><b>Like</b></span>{{uvotes}}</button>\n    <button class=\"col btn btn-danger\" (click)=\"downVote()\"><span class=\"badge\"><b>Unlike</b></span>{{dvotes}}</button>\n  </p>\n"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\n  font-family: 'Satisfy', cursive;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQkFBK0I7QUFDakMiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XG4gIGZvbnQtZmFtaWx5OiAnU2F0aXNmeScsIGN1cnNpdmU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


// import {Quote} from './quote'
let AppComponent = class AppComponent {
    // import {Quote} from './quote'
    constructor() {
        this.title = 'Wise Quotes';
        // constructor(){
        //   this.Quotes =[
        //       new Quote(1,'Watch Finding Nemo'),
        //       new Quote(2,'Buy Cookies'),
        //       new Quote(3, 'Get new Phone Case'),
        //       new Quote(4, 'Get Dog Food'),
        //       new Quote(5, 'Solve math homework'),
        //       new Quote(6, 'Plot my world domination plan'),
        //
        //   ];
        //
        //
        // }
        // Quotes = [
        //     new Quotes(1,'Watch Finding Nemo'),
        //     new Quotes(2,'Buy Cookies'),
        //     new Quotes(3, 'Get new Phone Case'),
        //     new Quotes(4, 'Get Dog Food'),
        //     new Quotes(5, 'Solve math homework'),
        //     new Quotes(6, 'Plot my world domination plan'),
        //     new Quotes(7, 'Joflix'),
        //
        // ]
        // }
        // import { Component } from '@angular/core';
        // import {Quote} from './quote'
        //
        // @Component({
        //   selector: 'app-root',
        //   templateUrl: './app.component.html'
        // })
        // export class AppComponent {
        //     quotes = [
        //         new Quotes(1,'Watch Finding Nemo'),
        //         new Quotes(2,'Buy Cookies'),
        //         new Quotes(3, 'Get new Phone Case'),
        //         new Quotes(4, 'Get Dog Food'),
        //         new Quotes(5, 'Solve math homework'),
        //         new Quotes(6, 'Plot my world domination plan'),
        //         new Quotes(7, 'Joflix'),
        //
        //     ]
        // }
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _quote_quote_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./quote/quote.component */ "./src/app/quote/quote.component.ts");
/* harmony import */ var _quote_details_quote_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quote-details/quote-details.component */ "./src/app/quote-details/quote-details.component.ts");
/* harmony import */ var _highlight_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./highlight.directive */ "./src/app/highlight.directive.ts");
/* harmony import */ var _date_count_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./date-count.pipe */ "./src/app/date-count.pipe.ts");
/* harmony import */ var _quote_form_quote_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./quote-form/quote-form.component */ "./src/app/quote-form/quote-form.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _vote_vote_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./vote/vote.component */ "./src/app/vote/vote.component.ts");
/* harmony import */ var time_ago_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! time-ago-pipe */ "./node_modules/time-ago-pipe/esm2015/time-ago-pipe.js");



// ******IMPORTING MODULES, DIRECTIVES & COMPONENTS****









let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _quote_quote_component__WEBPACK_IMPORTED_MODULE_4__["QuoteComponent"],
            _quote_details_quote_details_component__WEBPACK_IMPORTED_MODULE_5__["QuoteDetailsComponent"],
            _highlight_directive__WEBPACK_IMPORTED_MODULE_6__["HighlightDirective"],
            _date_count_pipe__WEBPACK_IMPORTED_MODULE_7__["DateCountPipe"],
            _quote_form_quote_form_component__WEBPACK_IMPORTED_MODULE_8__["QuoteFormComponent"],
            _vote_vote_component__WEBPACK_IMPORTED_MODULE_10__["VoteComponent"],
            time_ago_pipe__WEBPACK_IMPORTED_MODULE_11__["TimeAgoPipe"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/date-count.pipe.ts":
/*!************************************!*\
  !*** ./src/app/date-count.pipe.ts ***!
  \************************************/
/*! exports provided: DateCountPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateCountPipe", function() { return DateCountPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DateCountPipe = class DateCountPipe {
    transform(value) {
        let today = new Date(); //get current date and time
        let todayWithNoTime = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        var dateDifference = Math.abs(value - todayWithNoTime); // returns value in milliseconds
        const secondsInADay = 86400; //60 seconds*60 minutes in an hour *24 hours
        var dateDifferenceSeconds = dateDifference * 0.001; //converts to seconds
        var dateCounter = dateDifferenceSeconds / secondsInADay;
        if (dateCounter >= 1 && value > todayWithNoTime) {
            return dateCounter;
        }
        else {
            return 0;
        }
    }
};
DateCountPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'dateCount'
    })
], DateCountPipe);



/***/ }),

/***/ "./src/app/highlight.directive.ts":
/*!****************************************!*\
  !*** ./src/app/highlight.directive.ts ***!
  \****************************************/
/*! exports provided: HighlightDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightDirective", function() { return HighlightDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HighlightDirective = class HighlightDirective {
    constructor(elem) {
        this.elem = elem;
    }
    onClicks() {
        this.textDeco("yellow");
    }
    onDoubleClicks() {
        this.textDeco("None");
    }
    textDeco(action) {
        this.elem.nativeElement.style.backgroundColor = action;
    }
};
HighlightDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("click")
], HighlightDirective.prototype, "onClicks", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("dblclick")
], HighlightDirective.prototype, "onDoubleClicks", null);
HighlightDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appHighlight]'
    })
], HighlightDirective);



/***/ }),

/***/ "./src/app/quote-details/quote-details.component.css":
/*!***********************************************************!*\
  !*** ./src/app/quote-details/quote-details.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-detail{\n  background-image:url('brat.jpg');\n  color:white;\n  border: 2px solid transparent;\n  border-radius:3%;\n}\n.card-bodys{\n  background-color:transparent;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVvdGUtZGV0YWlscy9xdW90ZS1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBeUM7RUFDekMsV0FBVztFQUNYLDZCQUE2QjtFQUM3QixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLDRCQUE0QjtBQUM5QiIsImZpbGUiOiJzcmMvYXBwL3F1b3RlLWRldGFpbHMvcXVvdGUtZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtZGV0YWlse1xuICBiYWNrZ3JvdW5kLWltYWdlOnVybChzcmMvYXNzZXRzL2JyYXQuanBnKTtcbiAgY29sb3I6d2hpdGU7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOjMlO1xufVxuLmNhcmQtYm9keXN7XG4gIGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/quote-details/quote-details.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/quote-details/quote-details.component.ts ***!
  \**********************************************************/
/*! exports provided: QuoteDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteDetailsComponent", function() { return QuoteDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let QuoteDetailsComponent = class QuoteDetailsComponent {
    constructor() {
        this.isComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    quoteDelete(complete) {
        this.isComplete.emit(complete);
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], QuoteDetailsComponent.prototype, "quote", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], QuoteDetailsComponent.prototype, "isComplete", void 0);
QuoteDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-quote-details',
        template: __webpack_require__(/*! raw-loader!./quote-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/quote-details/quote-details.component.html"),
        styles: [__webpack_require__(/*! ./quote-details.component.css */ "./src/app/quote-details/quote-details.component.css")]
    })
], QuoteDetailsComponent);



/***/ }),

/***/ "./src/app/quote-form/quote-form.component.css":
/*!*****************************************************!*\
  !*** ./src/app/quote-form/quote-form.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label{\n  color:white;\n}\n\n/* form{\n  color:black;\n} */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVvdGUtZm9ybS9xdW90ZS1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7O0dBRUciLCJmaWxlIjoic3JjL2FwcC9xdW90ZS1mb3JtL3F1b3RlLWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImxhYmVse1xuICBjb2xvcjp3aGl0ZTtcbn1cblxuLyogZm9ybXtcbiAgY29sb3I6YmxhY2s7XG59ICovXG4iXX0= */"

/***/ }),

/***/ "./src/app/quote-form/quote-form.component.ts":
/*!****************************************************!*\
  !*** ./src/app/quote-form/quote-form.component.ts ***!
  \****************************************************/
/*! exports provided: QuoteFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteFormComponent", function() { return QuoteFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _quote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../quote */ "./src/app/quote.ts");



let QuoteFormComponent = class QuoteFormComponent {
    constructor() {
        this.newQuote = new _quote__WEBPACK_IMPORTED_MODULE_2__["Quote"](0, "", "", "", new Date());
        this.addQuote = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    submitQuote() {
        this.addQuote.emit(this.newQuote);
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], QuoteFormComponent.prototype, "addQuote", void 0);
QuoteFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-quote-form',
        template: __webpack_require__(/*! raw-loader!./quote-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/quote-form/quote-form.component.html"),
        styles: [__webpack_require__(/*! ./quote-form.component.css */ "./src/app/quote-form/quote-form.component.css")]
    })
], QuoteFormComponent);



/***/ }),

/***/ "./src/app/quote.ts":
/*!**************************!*\
  !*** ./src/app/quote.ts ***!
  \**************************/
/*! exports provided: Quote */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Quote", function() { return Quote; });
class Quote {
    constructor(id, author, name, description, completeDate) {
        this.id = id;
        this.author = author;
        this.name = name;
        this.description = description;
        this.completeDate = completeDate;
        this.showDescription = false;
    }
}
Quote.ctorParameters = () => [
    { type: Number },
    { type: String },
    { type: String },
    { type: String },
    { type: Date }
];


/***/ }),

/***/ "./src/app/quote/quote.component.css":
/*!*******************************************!*\
  !*** ./src/app/quote/quote.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-quotes-page{\n  background-image: url('maxresdefault.jpg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  border-radius: 3% ;\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVvdGUvcXVvdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBDQUFtRDtFQUNuRCxzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9xdW90ZS9xdW90ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15LXF1b3Rlcy1wYWdle1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoc3JjL2Fzc2V0cy9tYXhyZXNkZWZhdWx0LmpwZyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJvcmRlci1yYWRpdXM6IDMlIDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/quote/quote.component.ts":
/*!******************************************!*\
  !*** ./src/app/quote/quote.component.ts ***!
  \******************************************/
/*! exports provided: QuoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteComponent", function() { return QuoteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _quote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../quote */ "./src/app/quote.ts");



let QuoteComponent = class QuoteComponent {
    constructor() {
        this.quotes = [
            new _quote__WEBPACK_IMPORTED_MODULE_2__["Quote"](1, 'Joflix(Dr.Prof.Eng.CGHE)', "", 'Success is determined first by the belief system then hardwork and determination', new Date(2018, 3, 14)),
            new _quote__WEBPACK_IMPORTED_MODULE_2__["Quote"](2, 'Joflix', "", 'Respect is not give, respect is earned!', new Date(2018, 6, 9)),
            new _quote__WEBPACK_IMPORTED_MODULE_2__["Quote"](3, 'Joflix(Dr.Prof.Eng.CGHE)', "", 'True sapience is when one falls in love, but do not get into confluence, but even truest, is when one do not fall in love!', new Date(2018, 1, 12)),
            new _quote__WEBPACK_IMPORTED_MODULE_2__["Quote"](4, 'Joflix(Dr.Prof.Eng.CGHE)', "", 'Mistakes are good, you should make more!', new Date(2018, 0, 18)),
            new _quote__WEBPACK_IMPORTED_MODULE_2__["Quote"](5, 'Joflix(Dr.Prof.Eng.CGHE)', "", 'Most of the time we fear to fail, forgetting that we are not judged by how much we fail but by how much stronger we come out of the failure!', new Date(2018, 2, 14)),
            new _quote__WEBPACK_IMPORTED_MODULE_2__["Quote"](6, 'Joflix(Dr.Prof.Eng.CGHE)', "", 'We only have one true friend, a universal friend, the our shadow!', new Date(2019, 7, 14)),
        ];
    }
    addNewQuote(quote) {
        let quoteLength = this.quotes.length;
        quote.id = quoteLength++;
        quote.completeDate = new Date(quote.completeDate);
        this.quotes.push(quote);
        alert('quote added successfully');
    }
    deleteQuote(isComplete, index) {
        if (isComplete) {
            let toDelete = confirm(`Are you sure you wanna delete' ${this.quotes[index.name]}`);
            if (toDelete) {
                this.quotes.splice(index, 1);
            }
        }
    }
    toogleDetails(index) {
        this.quotes[index].showDescription = !this.quotes[index].showDescription;
    }
    completeQuote(isComplete, index) {
        if (isComplete) {
            this.quotes.splice(index, 1);
        }
    }
    ngOnInit() {
    }
};
QuoteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-quote',
        template: __webpack_require__(/*! raw-loader!./quote.component.html */ "./node_modules/raw-loader/index.js!./src/app/quote/quote.component.html"),
        styles: [__webpack_require__(/*! ./quote.component.css */ "./src/app/quote/quote.component.css")]
    })
], QuoteComponent);



/***/ }),

/***/ "./src/app/vote/vote.component.css":
/*!*****************************************!*\
  !*** ./src/app/vote/vote.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".col {\n  padding: 4px;\n  margin: 4px;\n  border: none;\n  color: white;\n  float: left;\n  width:60px;\n  height:50%;\n  /* border-radius: 50%; */\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdm90ZS92b3RlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBQ1osV0FBVztFQUNYLFVBQVU7RUFDVixVQUFVO0VBQ1Ysd0JBQXdCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvdm90ZS92b3RlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sIHtcbiAgcGFkZGluZzogNHB4O1xuICBtYXJnaW46IDRweDtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDo2MHB4O1xuICBoZWlnaHQ6NTAlO1xuICAvKiBib3JkZXItcmFkaXVzOiA1MCU7ICovXG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/vote/vote.component.ts":
/*!****************************************!*\
  !*** ./src/app/vote/vote.component.ts ***!
  \****************************************/
/*! exports provided: VoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoteComponent", function() { return VoteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let VoteComponent = class VoteComponent {
    constructor() {
        this.isComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); //listens to button click to display results
        //starting point for votes in two variables with 0 as default
        this.uvotes = 0;
        this.dvotes = 0;
    }
    upVote() {
        this.uvotes = this.uvotes + 1; //adds one vote on mouse click
    }
    downVote() {
        this.dvotes = this.dvotes + 1; //adds one vote on mouse click
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], VoteComponent.prototype, "isComplete", void 0);
VoteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vote',
        template: __webpack_require__(/*! raw-loader!./vote.component.html */ "./node_modules/raw-loader/index.js!./src/app/vote/vote.component.html"),
        styles: [__webpack_require__(/*! ./vote.component.css */ "./src/app/vote/vote.component.css")]
    })
], VoteComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/moringa/Desktop/Wise-Quote/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map