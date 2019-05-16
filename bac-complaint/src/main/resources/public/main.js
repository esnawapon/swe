(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _complaints_complaints_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./complaints/complaints.component */ "./src/app/complaints/complaints.component.ts");
/* harmony import */ var _complaint_create_complaint_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./complaint-create/complaint-create.component */ "./src/app/complaint-create/complaint-create.component.ts");
/* harmony import */ var _complaint_detail_complaint_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./complaint-detail/complaint-detail.component */ "./src/app/complaint-detail/complaint-detail.component.ts");
/* harmony import */ var _complaint_log_complaint_log_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./complaint-log/complaint-log.component */ "./src/app/complaint-log/complaint-log.component.ts");
/* harmony import */ var _complaint_categories_complaint_categories_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./complaint-categories/complaint-categories.component */ "./src/app/complaint-categories/complaint-categories.component.ts");
/* harmony import */ var _complaint_category_detail_complaint_category_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./complaint-category-detail/complaint-category-detail.component */ "./src/app/complaint-category-detail/complaint-category-detail.component.ts");
/* harmony import */ var _staff_mapping_staff_mapping_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./staff-mapping/staff-mapping.component */ "./src/app/staff-mapping/staff-mapping.component.ts");
/* harmony import */ var _staff_mapping_detail_staff_mapping_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./staff-mapping-detail/staff-mapping-detail.component */ "./src/app/staff-mapping-detail/staff-mapping-detail.component.ts");
/* harmony import */ var _report_report_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./report/report.component */ "./src/app/report/report.component.ts");
/* harmony import */ var _report_complaint_number_report_complaint_number_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./report-complaint-number/report-complaint-number.component */ "./src/app/report-complaint-number/report-complaint-number.component.ts");
/* harmony import */ var _report_auto_forwarder_success_rate_report_auto_forwarder_success_rate_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./report-auto-forwarder-success-rate/report-auto-forwarder-success-rate.component */ "./src/app/report-auto-forwarder-success-rate/report-auto-forwarder-success-rate.component.ts");
/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./resolvers */ "./src/app/resolvers/index.ts");
/* harmony import */ var _blank_page_blank_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./blank-page/blank-page.component */ "./src/app/blank-page/blank-page.component.ts");
/* harmony import */ var _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./error-page/error-page.component */ "./src/app/error-page/error-page.component.ts");

















var routes = [
    { path: '', redirectTo: '/complaints', pathMatch: 'full' },
    { path: 'blank', component: _blank_page_blank_page_component__WEBPACK_IMPORTED_MODULE_15__["BlankPageComponent"] },
    { path: 'error', component: _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_16__["ErrorPageComponent"] },
    {
        path: 'complaints',
        component: _complaints_complaints_component__WEBPACK_IMPORTED_MODULE_3__["ComplaintsComponent"],
        resolve: {
            categoryOptions: _resolvers__WEBPACK_IMPORTED_MODULE_14__["ComplaintCategoriesResolveService"]
        }
    },
    {
        path: 'complaints/create',
        component: _complaint_create_complaint_create_component__WEBPACK_IMPORTED_MODULE_4__["ComplaintCreateComponent"],
        resolve: {
            complaint: _resolvers__WEBPACK_IMPORTED_MODULE_14__["ComplaintResolveService"],
            categoryOptions: _resolvers__WEBPACK_IMPORTED_MODULE_14__["ComplaintCategoriesResolveService"]
        }
    },
    {
        path: 'complaints/:complaintId',
        component: _complaint_detail_complaint_detail_component__WEBPACK_IMPORTED_MODULE_5__["ComplaintDetailComponent"],
        resolve: {
            complaint: _resolvers__WEBPACK_IMPORTED_MODULE_14__["ComplaintResolveService"],
            currentUser: _resolvers__WEBPACK_IMPORTED_MODULE_14__["CurrentUserResolveService"],
            staffOptions: _resolvers__WEBPACK_IMPORTED_MODULE_14__["StaffsResolveService"]
        }
    },
    {
        path: 'complaints/:complaintId/logs',
        component: _complaint_log_complaint_log_component__WEBPACK_IMPORTED_MODULE_6__["ComplaintLogComponent"],
        resolve: {
            complaintLogs: _resolvers__WEBPACK_IMPORTED_MODULE_14__["ComplaintLogsResolveService"],
            complaint: _resolvers__WEBPACK_IMPORTED_MODULE_14__["ComplaintResolveService"]
        }
    },
    {
        path: 'complaint-categories',
        component: _complaint_categories_complaint_categories_component__WEBPACK_IMPORTED_MODULE_7__["ComplaintCategoriesComponent"],
        resolve: {
            categoryOptions: _resolvers__WEBPACK_IMPORTED_MODULE_14__["ComplaintCategoriesResolveService"]
        }
    },
    {
        path: 'complaint-categories/create',
        component: _complaint_category_detail_complaint_category_detail_component__WEBPACK_IMPORTED_MODULE_8__["ComplaintCategoryDetailComponent"],
        resolve: {
            complaintCategory: _resolvers__WEBPACK_IMPORTED_MODULE_14__["ComplaintCategoryResolveService"]
        }
    },
    {
        path: 'complaint-categories/:complaintCategoryId',
        component: _complaint_category_detail_complaint_category_detail_component__WEBPACK_IMPORTED_MODULE_8__["ComplaintCategoryDetailComponent"],
        resolve: {
            complaintCategory: _resolvers__WEBPACK_IMPORTED_MODULE_14__["ComplaintCategoryResolveService"]
        }
    },
    {
        path: 'staff-mapping',
        component: _staff_mapping_staff_mapping_component__WEBPACK_IMPORTED_MODULE_9__["StaffMappingComponent"],
        resolve: {
            staffMappings: _resolvers__WEBPACK_IMPORTED_MODULE_14__["StaffMappingsResolveService"]
        }
    },
    {
        path: 'staff-mapping/create',
        component: _staff_mapping_detail_staff_mapping_detail_component__WEBPACK_IMPORTED_MODULE_10__["StaffMappingDetailComponent"],
        resolve: {
            staffMapping: _resolvers__WEBPACK_IMPORTED_MODULE_14__["StaffMappingResolveService"],
            categoryOptions: _resolvers__WEBPACK_IMPORTED_MODULE_14__["ComplaintCategoriesResolveService"],
            staffOptions: _resolvers__WEBPACK_IMPORTED_MODULE_14__["StaffsResolveService"]
        }
    },
    {
        path: 'staff-mapping/:staffId',
        component: _staff_mapping_detail_staff_mapping_detail_component__WEBPACK_IMPORTED_MODULE_10__["StaffMappingDetailComponent"],
        resolve: {
            staffMapping: _resolvers__WEBPACK_IMPORTED_MODULE_14__["StaffMappingResolveService"],
            categoryOptions: _resolvers__WEBPACK_IMPORTED_MODULE_14__["ComplaintCategoriesResolveService"],
            staffOptions: _resolvers__WEBPACK_IMPORTED_MODULE_14__["StaffsResolveService"]
        }
    },
    {
        path: 'report',
        component: _report_report_component__WEBPACK_IMPORTED_MODULE_11__["ReportComponent"]
    },
    {
        path: 'report/complaint-number',
        component: _report_complaint_number_report_complaint_number_component__WEBPACK_IMPORTED_MODULE_12__["ReportComplaintNumberComponent"],
        resolve: {
            categoryOptions: _resolvers__WEBPACK_IMPORTED_MODULE_14__["ComplaintCategoriesResolveService"]
        }
    },
    {
        path: 'report/auto-forwarder-success-rate',
        component: _report_auto_forwarder_success_rate_report_auto_forwarder_success_rate_component__WEBPACK_IMPORTED_MODULE_13__["ReportAutoForwarderSuccessRateComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar navbar-dark bg-primary navbar-expand-sm\">\n  <a class=\"navbar-brand\" routerLink=\"/\">Book a Course</a>\n  <!-- <button class=\"navbar-toggler\" type=\"button\"><span class=\"navbar-toggler-icon\"></span></button> -->\n  <ul class=\"navbar-nav mr-auto\">\n    <li class=\"nav-item\"><a class=\"text-white nav-link\" routerLink=\"/complaints\">\n      <fa-icon [icon]=\"faFileAlt\"></fa-icon>\n      {{user && user.type === 'ADMIN' ? 'Complaints' : 'My complaints' }}\n    </a></li>\n    <li class=\"nav-item\" *ngIf=\"user && user.type === 'ADMIN'\"><a class=\"text-white nav-link\" routerLink=\"/complaint-categories\">\n      <fa-icon [icon]=\"faClipboard\"></fa-icon>\n      Complaint categories\n    </a></li>\n    <li class=\"nav-item\" *ngIf=\"user && user.type === 'ADMIN'\"><a class=\"text-white nav-link\" routerLink=\"/staff-mapping\">\n      <fa-icon [icon]=\"faBookReader\"></fa-icon>\n      Staff mapping\n    </a></li>\n    <li class=\"nav-item\" *ngIf=\"user && user.type === 'ADMIN'\"><a class=\"text-white nav-link\" routerLink=\"/report\">\n      <fa-icon [icon]=\"faChartBar\"></fa-icon>\n      Report\n    </a></li>\n    <li class=\"nav-item\" *ngIf=\"user && user.type === 'STUDENT'\"><a class=\"text-white nav-link\" routerLink=\"/complaints/create\">\n      <fa-icon [icon]=\"faPencilAlt\"></fa-icon>\n      Create complaint\n    </a></li>\n    <li class=\"nav-item\"><a class=\"text-white nav-link\" href=\"/user/logout\">\n      <fa-icon [icon]=\"faSignOutAlt\"></fa-icon>\n      Logout\n    </a></li>\n  </ul>\n  <span class=\"navbar-text text-white\">\n    <fa-icon [icon]=\"faUser\"></fa-icon>\n    {{user && user.name}}\n  </span>\n</div>\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n<div class=\"footer\">\n  <div class=\"footer\">\n    <div class=\"text-right\">\n      <h4>Complaints all about Book a Course</h4>\n      <h6>School of Information Technology, King Mongkut's University of Technology Thonburi</h6>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  padding-top: 1rem;\n  min-height: 27.5rem; }\n\n.footer {\n  margin-top: 2rem;\n  background-color: #212529;\n  color: #fff;\n  padding: 1rem 1rem 2rem 1rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VzL1NpdGVzL3N3ZS9zd2Uvc3dlLWNvbXBsYWludC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsIi9ob21lL2VzL1NpdGVzL3N3ZS9zd2Uvc3dlLWNvbXBsYWludC9zcmMvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsaUJBQXNCO0VBQ3RCLG1CQUFzQixFQUFBOztBQUd4QjtFQUNFLGdCQUFxQjtFQUNyQix5QkNBZ0I7RURDaEIsV0NWYTtFRFdiLDRCQUFnRCxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uL192YXJpYWJsZXNcIjtcblxuLmNvbnRhaW5lciB7XG4gIHBhZGRpbmctdG9wOiAkc3BhY2VyKjI7XG4gIG1pbi1oZWlnaHQ6ICRzcGFjZXIqNTU7XG59XG5cbi5mb290ZXIge1xuICBtYXJnaW4tdG9wOiAkc3BhY2VyKjQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICRncmF5LTkwMDtcbiAgY29sb3I6ICR3aGl0ZTtcbiAgcGFkZGluZzogJHNwYWNlcioyICRzcGFjZXIqMiAkc3BhY2VyKjQgJHNwYWNlcioyO1xufVxuIiwiJHdoaXRlOiAgICAjZmZmO1xuJGdyYXktMTAwOiAjZjhmOWZhO1xuJGdyYXktMjAwOiAjZTllY2VmO1xuJGdyYXktMzAwOiAjZGVlMmU2O1xuJGdyYXktNDAwOiAjY2VkNGRhO1xuJGdyYXktNTAwOiAjYWRiNWJkO1xuJGdyYXktNjAwOiAjNmM3NTdkO1xuJGdyYXktNzAwOiAjNDk1MDU3O1xuJGdyYXktODAwOiAjMzQzYTQwO1xuJGdyYXktOTAwOiAjMjEyNTI5O1xuJGJsYWNrOiAgICAjMDAwO1xuXG4kYmx1ZTogICAgIzAwN2JmZjtcbiRpbmRpZ286ICAjNjYxMGYyO1xuJHB1cnBsZTogICM2ZjQyYzE7XG4kcGluazogICAgI2U4M2U4YztcbiRyZWQ6ICAgICAjZGMzNTQ1O1xuJG9yYW5nZTogICNmZDdlMTQ7XG4keWVsbG93OiAgI2ZmYzEwNztcbiRncmVlbjogICAjMjhhNzQ1O1xuJHRlYWw6ICAgICMyMGM5OTc7XG4kY3lhbjogICAgIzE3YTJiODtcblxuJHByaW1hcnk6ICNGRjQ2MTI7XG4kc3BhY2VyOiAwLjVyZW07XG4iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services */ "./src/app/services/index.ts");





var AppComponent = /** @class */ (function () {
    function AppComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.title = 'swe-complaint';
        this.faFileAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faFileAlt"];
        this.faClipboard = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faClipboard"];
        this.faBookReader = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faBookReader"];
        this.faChartBar = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faChartBar"];
        this.faSignOutAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faSignOutAlt"];
        this.faPencilAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faPencilAlt"];
        this.faUser = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faUser"];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
        this.userService.getCurrentUser()
            .subscribe(function (response) {
            _this.user = response;
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pipes_severity__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pipes/severity */ "./src/app/pipes/severity.ts");
/* harmony import */ var _pipes_status__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pipes/status */ "./src/app/pipes/status.ts");
/* harmony import */ var _pipes_fullname__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pipes/fullname */ "./src/app/pipes/fullname.ts");
/* harmony import */ var _complaints_complaints_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./complaints/complaints.component */ "./src/app/complaints/complaints.component.ts");
/* harmony import */ var _utils_empty_results_empty_results_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utils/empty-results/empty-results.component */ "./src/app/utils/empty-results/empty-results.component.ts");
/* harmony import */ var _complaint_create_complaint_create_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./complaint-create/complaint-create.component */ "./src/app/complaint-create/complaint-create.component.ts");
/* harmony import */ var _blank_page_blank_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./blank-page/blank-page.component */ "./src/app/blank-page/blank-page.component.ts");
/* harmony import */ var _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./error-page/error-page.component */ "./src/app/error-page/error-page.component.ts");
/* harmony import */ var _utils_form_control_error_form_control_error_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./utils/form-control-error/form-control-error.component */ "./src/app/utils/form-control-error/form-control-error.component.ts");
/* harmony import */ var _complaint_detail_complaint_detail_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./complaint-detail/complaint-detail.component */ "./src/app/complaint-detail/complaint-detail.component.ts");
/* harmony import */ var _complaint_log_complaint_log_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./complaint-log/complaint-log.component */ "./src/app/complaint-log/complaint-log.component.ts");
/* harmony import */ var _complaint_categories_complaint_categories_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./complaint-categories/complaint-categories.component */ "./src/app/complaint-categories/complaint-categories.component.ts");
/* harmony import */ var _complaint_category_detail_complaint_category_detail_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./complaint-category-detail/complaint-category-detail.component */ "./src/app/complaint-category-detail/complaint-category-detail.component.ts");
/* harmony import */ var _staff_mapping_staff_mapping_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./staff-mapping/staff-mapping.component */ "./src/app/staff-mapping/staff-mapping.component.ts");
/* harmony import */ var _staff_mapping_detail_staff_mapping_detail_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./staff-mapping-detail/staff-mapping-detail.component */ "./src/app/staff-mapping-detail/staff-mapping-detail.component.ts");
/* harmony import */ var _report_report_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./report/report.component */ "./src/app/report/report.component.ts");
/* harmony import */ var _report_complaint_number_report_complaint_number_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./report-complaint-number/report-complaint-number.component */ "./src/app/report-complaint-number/report-complaint-number.component.ts");
/* harmony import */ var _report_auto_forwarder_success_rate_report_auto_forwarder_success_rate_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./report-auto-forwarder-success-rate/report-auto-forwarder-success-rate.component */ "./src/app/report-auto-forwarder-success-rate/report-auto-forwarder-success-rate.component.ts");



























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _pipes_severity__WEBPACK_IMPORTED_MODULE_9__["severityPipe"],
                _pipes_status__WEBPACK_IMPORTED_MODULE_10__["statusPipe"],
                _pipes_fullname__WEBPACK_IMPORTED_MODULE_11__["fullnamePipe"],
                _complaints_complaints_component__WEBPACK_IMPORTED_MODULE_12__["ComplaintsComponent"],
                _utils_empty_results_empty_results_component__WEBPACK_IMPORTED_MODULE_13__["EmptyResultsComponent"],
                _complaint_create_complaint_create_component__WEBPACK_IMPORTED_MODULE_14__["ComplaintCreateComponent"],
                _blank_page_blank_page_component__WEBPACK_IMPORTED_MODULE_15__["BlankPageComponent"],
                _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_16__["ErrorPageComponent"],
                _utils_form_control_error_form_control_error_component__WEBPACK_IMPORTED_MODULE_17__["FormControlErrorComponent"],
                _complaint_detail_complaint_detail_component__WEBPACK_IMPORTED_MODULE_18__["ComplaintDetailComponent"],
                _complaint_log_complaint_log_component__WEBPACK_IMPORTED_MODULE_19__["ComplaintLogComponent"],
                _complaint_categories_complaint_categories_component__WEBPACK_IMPORTED_MODULE_20__["ComplaintCategoriesComponent"],
                _complaint_category_detail_complaint_category_detail_component__WEBPACK_IMPORTED_MODULE_21__["ComplaintCategoryDetailComponent"],
                _staff_mapping_staff_mapping_component__WEBPACK_IMPORTED_MODULE_22__["StaffMappingComponent"],
                _staff_mapping_detail_staff_mapping_detail_component__WEBPACK_IMPORTED_MODULE_23__["StaffMappingDetailComponent"],
                _report_report_component__WEBPACK_IMPORTED_MODULE_24__["ReportComponent"],
                _report_complaint_number_report_complaint_number_component__WEBPACK_IMPORTED_MODULE_25__["ReportComplaintNumberComponent"],
                _report_auto_forwarder_success_rate_report_auto_forwarder_success_rate_component__WEBPACK_IMPORTED_MODULE_26__["ReportAutoForwarderSuccessRateComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDatepickerModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/blank-page/blank-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/blank-page/blank-page.component.ts ***!
  \****************************************************/
/*! exports provided: BlankPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlankPageComponent", function() { return BlankPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BlankPageComponent = /** @class */ (function () {
    function BlankPageComponent() {
    }
    BlankPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blank-page',
            template: ''
        })
    ], BlankPageComponent);
    return BlankPageComponent;
}());



/***/ }),

/***/ "./src/app/complaint-categories/complaint-categories.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/complaint-categories/complaint-categories.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h5 class=\"card-header\">Complaint Categories</h5>\n<h6 class=\"mt-4\"><a routerLink=\"/complaint-categories/create\">+ Create Category</a></h6>\n\n<table class=\"table table-hover table-sm mt-4\" *ngIf=\"results && results.length\">\n  <thead>\n    <tr>\n      <th>Category name</th>\n      <th>Default topic</th>\n      <th>Default content</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let result of results\">\n      <td><a routerLink=\"/complaint-categories/{{result.id}}\">{{result.name}}</a></td>\n      <td>{{result.defaultTopic}}</td>\n      <td>{{result.defaultContent}}</td>\n    </tr>\n  </tbody>\n</table>\n<app-empty-results *ngIf=\"results && !results.length\"></app-empty-results>\n"

/***/ }),

/***/ "./src/app/complaint-categories/complaint-categories.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/complaint-categories/complaint-categories.component.ts ***!
  \************************************************************************/
/*! exports provided: ComplaintCategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplaintCategoriesComponent", function() { return ComplaintCategoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ComplaintCategoriesComponent = /** @class */ (function () {
    function ComplaintCategoriesComponent(route) {
        this.route = route;
    }
    ComplaintCategoriesComponent.prototype.ngOnInit = function () {
        this.results = this.route.snapshot.data['categoryOptions'];
    };
    ComplaintCategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-complaint-categories',
            template: __webpack_require__(/*! ./complaint-categories.component.html */ "./src/app/complaint-categories/complaint-categories.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ComplaintCategoriesComponent);
    return ComplaintCategoriesComponent;
}());



/***/ }),

/***/ "./src/app/complaint-category-detail/complaint-category-detail.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/complaint-category-detail/complaint-category-detail.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card bg-white\">\n  <h5 class=\"card-header\">{{complaintCategory.id ? complaintCategory.name : 'Create Category complaint'}}</h5>\n  <div class=\"card-body\">\n    <form [formGroup]=\"form\" (submit)=\"onSubmit()\" autocomplete=\"off\" novalidate>\n    <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <label for=\"name\">Complaint name</label>\n            <input id=\"name\" type=\"text\" class=\"form-control\" formControlName=\"name\" placeholder=\"Complaint name\">\n            <utils-form-control-error [control]=\"form.controls['name']\" error=\"required\">This field is required.</utils-form-control-error>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <label for=\"default-topic\">Default topic</label>\n            <input id=\"default-topic\" type=\"text\" class=\"form-control\" formControlName=\"defaultTopic\" placeholder=\"Default topic\">\n            <utils-form-control-error [control]=\"form.controls['defaultTopic']\" error=\"required\">This field is required.</utils-form-control-error>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"default-content\">Default content</label>\n        <textarea id=\"default-content\" class=\"form-control\" formControlName=\"defaultContent\" placeholder=\"Default content\"></textarea>\n        <utils-form-control-error [control]=\"form.controls['defaultContent']\" error=\"required\">This field is required.</utils-form-control-error>\n      </div>\n      <div class=\"form-group-btn text-right\">\n        <button type=\"submit\" class=\"btn btn-dark\">Save</button>\n        <button *ngIf=\"complaintCategory.id\" type=\"button\" class=\"btn btn-danger\" (click)=\"delete()\">Delete</button>\n        <a routerLink=\"/complaints\" class=\"btn btn-light\">Back</a>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/complaint-category-detail/complaint-category-detail.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/complaint-category-detail/complaint-category-detail.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ComplaintCategoryDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplaintCategoryDetailComponent", function() { return ComplaintCategoryDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services */ "./src/app/services/index.ts");





var ComplaintCategoryDetailComponent = /** @class */ (function () {
    function ComplaintCategoryDetailComponent(route, complaintCategoryService, router, formService) {
        this.route = route;
        this.complaintCategoryService = complaintCategoryService;
        this.router = router;
        this.formService = formService;
    }
    ComplaintCategoryDetailComponent.prototype.ngOnInit = function () {
        this.complaintCategory = this.route.snapshot.data['complaintCategory'];
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.complaintCategory.id),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.complaintCategory.name, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            defaultTopic: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.complaintCategory.defaultTopic),
            defaultContent: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.complaintCategory.defaultContent),
        });
    };
    ComplaintCategoryDetailComponent.prototype.onSubmit = function () {
        var _this = this;
        this.formService.markAsTouched(this.form);
        if (this.form.valid) {
            var complaintCategory = this.form.value;
            this.submitting = true;
            this.form.disable();
            this.complaintCategoryService.save(complaintCategory)
                .subscribe(function (response) {
                _this.router.navigate(['/complaint-categories']);
            }, function (error) {
                console.log('error', error);
                var message = error.error;
                window.alert(message);
                _this.submitting = false;
                _this.form.enable();
            });
        }
        else {
            this.formService.focusInvalid();
            console.log('invalid form');
        }
    };
    ComplaintCategoryDetailComponent.prototype.delete = function () {
        var _this = this;
        var confirm = window.confirm('Confirm deleting this category');
        if (confirm) {
            this.complaintCategoryService.delete(this.complaintCategory.id)
                .subscribe(function () {
                _this.router.navigate(['/complaint-categories']);
            }, function (error) {
                console.log('error', error);
                var message = error.error;
                window.alert(message);
            });
        }
    };
    ComplaintCategoryDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-complaint-category-detail',
            template: __webpack_require__(/*! ./complaint-category-detail.component.html */ "./src/app/complaint-category-detail/complaint-category-detail.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services__WEBPACK_IMPORTED_MODULE_4__["ComplaintCategoryService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services__WEBPACK_IMPORTED_MODULE_4__["FormService"]])
    ], ComplaintCategoryDetailComponent);
    return ComplaintCategoryDetailComponent;
}());



/***/ }),

/***/ "./src/app/complaint-create/complaint-create.component.html":
/*!******************************************************************!*\
  !*** ./src/app/complaint-create/complaint-create.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card bg-white\">\n  <h5 class=\"card-header\">Create complaint</h5>\n  <div class=\"card-body\">\n    <form [formGroup]=\"form\" (submit)=\"onSubmit()\" autocomplete=\"off\" novalidate>\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <label for=\"category\">Category</label>\n            <!-- <input id=\"category\" type=\"text\" class=\"form-control\" formControlName=\"category\"> -->\n            <select id=\"category\" class=\"form-control\" formControlName=\"category\">\n              <option [ngValue]=\"null\">Others</option>\n              <option *ngFor=\"let option of categoryOptions\" [ngValue]=\"option\">{{option.name}}</option>\n            </select>\n            <utils-form-control-error [control]=\"form.controls['category']\" error=\"required\">This field is required.</utils-form-control-error>\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <label for=\"severity\">Severity level</label>\n            <select id=\"severity\" class=\"form-control\" formControlName=\"severity\">\n              <option *ngFor=\"let option of severityOptions\" [ngValue]=\"option.level\">{{option.name}}</option>\n            </select>\n            <utils-form-control-error [control]=\"form.controls['category']\" error=\"required\">This field is required.</utils-form-control-error>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <label for=\"topic\">Topic</label>\n            <input id=\"topic\" type=\"text\" class=\"form-control\" formControlName=\"topic\" placeholder=\"Topic\">\n            <utils-form-control-error [control]=\"form.controls['topic']\" error=\"required\">This field is required.</utils-form-control-error>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"content\">Content</label>\n        <textarea id=\"content\" class=\"form-control\" formControlName=\"content\" placeholder=\"Content\"></textarea>\n        <utils-form-control-error [control]=\"form.controls['content']\" error=\"required\">This field is required.</utils-form-control-error>\n      </div>\n      <div class=\"form-inline\">\n        <input id=\"incognito\" type=\"checkbox\" class=\"mr-2\" formControlName=\"incognito\" [value]=\"true\" [checked]=\"form.controls['incognito'].value === true\">\n        <label for=\"incognito\">Keep my identity secret</label>\n      </div>\n      <div class=\"form-group-btn text-right\">\n        <button type=\"submit\" class=\"btn btn-dark\">Save</button>\n        <a routerLink=\"/complaints\" class=\"btn btn-light\">Back</a>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/complaint-create/complaint-create.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/complaint-create/complaint-create.component.ts ***!
  \****************************************************************/
/*! exports provided: ComplaintCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplaintCreateComponent", function() { return ComplaintCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../types */ "./src/app/types/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services */ "./src/app/services/index.ts");







var ComplaintCreateComponent = /** @class */ (function () {
    function ComplaintCreateComponent(route, complaintService, router, formService) {
        this.route = route;
        this.complaintService = complaintService;
        this.router = router;
        this.formService = formService;
        this.submitting = false;
        this.severityOptions = _types__WEBPACK_IMPORTED_MODULE_5__["SERVERITY_LEVELS"];
    }
    ComplaintCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.complaint = this.route.snapshot.data['complaint'];
        this.categoryOptions = this.route.snapshot.data['categoryOptions'];
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            topic: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            content: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            severity: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](1, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            incognito: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false)
        });
        this.categoryControl = this.form.controls['category'];
        this.topicControl = this.form.controls['topic'];
        this.contentControl = this.form.controls['content'];
        this.categoryChangeSubs = this.categoryControl.valueChanges.subscribe(function (value) {
            if (!value) {
                return;
            }
            if (!_this.topicControl.value || _this.topicControl.untouched || !_this.topicControl.dirty) {
                _this.topicControl.setValue(value.defaultTopic);
            }
            if (!_this.contentControl.value || _this.contentControl.untouched || !_this.contentControl.dirty) {
                _this.contentControl.setValue(value.defaultContent);
            }
        });
    };
    ComplaintCreateComponent.prototype.ngOnDestroy = function () {
        this.categoryChangeSubs.unsubscribe();
    };
    ComplaintCreateComponent.prototype.onSubmit = function () {
        var _this = this;
        this.formService.markAsTouched(this.form);
        if (this.form.valid) {
            var complaint = this.form.value;
            this.submitting = true;
            this.form.disable();
            this.complaintService.create(complaint).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
                _this.submitting = false;
                _this.form.enable();
            })).subscribe(function (response) {
                _this.router.navigate(['blank'], { replaceUrl: true }).then(function () {
                    _this.router.navigate(['/complaints', response.id], {
                        replaceUrl: true
                    });
                });
            }, function (error) {
                console.log('error', error);
                var message = error.error;
                window.alert(message);
            });
        }
        else {
            this.formService.focusInvalid();
            console.log('invalid form');
        }
    };
    ComplaintCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-complaint-create',
            template: __webpack_require__(/*! ./complaint-create.component.html */ "./src/app/complaint-create/complaint-create.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services__WEBPACK_IMPORTED_MODULE_6__["ComplaintService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services__WEBPACK_IMPORTED_MODULE_6__["FormService"]])
    ], ComplaintCreateComponent);
    return ComplaintCreateComponent;
}());



/***/ }),

/***/ "./src/app/complaint-detail/complaint-detail.component.html":
/*!******************************************************************!*\
  !*** ./src/app/complaint-detail/complaint-detail.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card bg-white\">\n  <h5 class=\"card-header\">[{{complaint.severity | severity}}] {{complaint.topic}}</h5>\n  <div class=\"card-body\">\n    <div class=\"row\">\n      <div class=\"col-md-8\">\n        <p style=\"white-space: pre-line\">{{complaint.content}}</p>\n      </div>\n      <div class=\"col-md-4\">\n        <table class=\"table table-sm\">\n          <tbody>\n            <tr>\n              <th>Status</th>\n              <td>\n                <div>{{complaint.status | status}}</div>\n                <div *ngIf=\"isAbleToChangeStatus()\">\n                  <button *ngIf=\"complaint.status === 'CREATED'\"\n                    type=\"button\" class=\"btn btn-sm btn-outline-info mr-2\"(click)=\"acknowledge()\">Acknowledge</button>\n                  <button *ngIf=\"complaint.status === 'TO_DO'\"\n                    type=\"button\" class=\"btn btn-sm btn-outline-primary mr-2\"(click)=\"working()\">Working</button>\n                  <button *ngIf=\"complaint.status === 'WORKING'\"\n                    type=\"button\" class=\"btn btn-sm btn-outline-success mr-2\"(click)=\"complete()\">Complete</button>\n                  <button\n                    type=\"button\" class=\"btn btn-sm btn-outline-secondary mr-2\" (click)=\"close()\">Close</button>\n                </div>\n              </td>\n            </tr>\n            <tr>\n              <th>Staff</th>\n              <td [ngSwitch]=\"!!complaint.assignee\">\n                <div *ngSwitchCase=\"true\">\n                  <div *ngIf=\"!selectingAnotherStaff\">\n                    {{complaint.assignee | fullname}}\n                  </div>\n                </div>\n                <div *ngSwitchCase=\"false\" class=\"text-muted\">\n                  <div *ngIf=\"!selectingAnotherStaff\">\n                    Waiting for relevant staff\n                  </div>\n                </div>\n                <div *ngIf=\"isAbleToChangeAssignee()\">\n                  <div *ngIf=\"selectingAnotherStaff\" class=\"input-group\">\n                    <select #selectStaff class=\"form-control input-sm\">\n                      <option [value]=\"null\">Select another staff</option>\n                      <option *ngFor=\"let option of staffOptions\" [value]=\"option.id\">{{option | fullname}}</option>\n                    </select>\n                    <div class=\"input-group-append\">\n                      <button class=\"btn btn-outline-secondary\" type=\"button\" (click)=\"assignTo(selectStaff.value)\">Assign</button>\n                    </div>\n                  </div>\n                  <button type=\"button\" class=\"btn btn-sm btn-link mr-2\"(click)=\"selectingAnotherStaff = !selectingAnotherStaff\">Change to another staff</button>\n                  <button *ngIf=\"complaint.assignee\" type=\"button\" class=\"btn btn-sm btn-link mr-2\"(click)=\"backToAdmin()\">Send back to admin</button>\n                </div>\n              </td>\n            <tr>\n              <th>Owner</th>\n              <td [class.text-muted]=\"complaint.incognito\">{{complaint.incognito ? 'Not revealing' : complaint.ownerId}}</td>\n            </tr>\n            <tr>\n              <th>Create</th>\n              <td>{{complaint.created}}</td>\n            </tr>\n            <tr>\n              <th>Logs</th>\n              <td>\n                  <a routerLink=\"/complaints/{{complaint.id}}/logs\">see all logs</a>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n    <div class=\"form-group-btn text-right\">\n      <a routerLink=\"/complaints\" class=\"btn btn-light\">Back</a>\n    </div>\n  </div>\n</div>\n<small *ngIf=\"isAbleToClose()\">If you want to <u>close</u> this complaint you can click <a href=\"javascript:void(0);\" (click)=\"close()\">here</a> before staff get this complaint</small>\n<h5 class=\"mt-5\">Comments</h5>\n<div class=\"row\">\n  <div class=\"col-md-6\">\n    <small class=\"text-muted\" *ngIf=\"comments && !comments.length\">No comments</small>\n    <div *ngIf=\"comments && comments.length\">\n      <div class=\"card bg-white\" *ngFor=\"let comment of comments\">\n        <div class=\"card-body\">\n          <p>{{comment.comment}}</p>\n          <small class=\"text-muted\">\n            <span>By </span>\n            <span *ngIf=\"comment.actionStudentId\">\n              <span [class.text-muted]=\"complaint.incognito\">{{complaint.incognito ? 'Not revealing' : comment.actionStudentId}}</span>\n            </span>\n            <span *ngIf=\"comment.actionStaff\">{{comment.actionStaff | fullname}}</span>\n            <span *ngIf=\"comment.actionAdmin\">{{comment.actionAdmin | fullname}}</span>\n            <span> at {{comment.timestamp}}</span>\n          </small>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6\">\n    <div class=\"form-group\">\n      <textarea id=\"comment\" #comment class=\"form-control\" placeholder=\"comment...\"></textarea>\n    </div>\n    <div class=\"text-right\">\n      <button type=\"button\" class=\"btn btn-light\" (click)=\"addComment(comment.value); comment.value = ''\">Add comment</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/complaint-detail/complaint-detail.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/complaint-detail/complaint-detail.component.ts ***!
  \****************************************************************/
/*! exports provided: ComplaintDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplaintDetailComponent", function() { return ComplaintDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services */ "./src/app/services/index.ts");




var ComplaintDetailComponent = /** @class */ (function () {
    function ComplaintDetailComponent(route, complaintService, router) {
        this.route = route;
        this.complaintService = complaintService;
        this.router = router;
        this.selectingAnotherStaff = false;
    }
    ComplaintDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.complaint = this.route.snapshot.data['complaint'];
        this.currentUser = this.route.snapshot.data['currentUser'];
        this.staffOptions = this.route.snapshot.data['staffOptions'];
        if (this.complaint.assignee) {
            this.staffOptions = this.staffOptions.filter(function (each) { return each.id !== _this.complaint.assignee.id; });
        }
        this.loadComments();
    };
    ComplaintDetailComponent.prototype.loadComments = function () {
        var _this = this;
        this.complaintService.findCommentsByComplaintId(this.complaint.id)
            .subscribe(function (response) {
            _this.comments = response;
        });
    };
    ComplaintDetailComponent.prototype.addComment = function (comment) {
        var _this = this;
        if (!comment || !comment.length)
            return;
        this.complaintService.addComment(this.complaint.id, { comment: comment })
            .subscribe(function () { return _this.loadComments(); });
    };
    ComplaintDetailComponent.prototype.close = function () {
        var _this = this;
        var confirm = window.confirm('Confirm closing this complaint');
        if (confirm) {
            this.complaintService.close(this.complaint.id)
                .subscribe(function () {
                _this.router.navigate(['/complaints']);
            }, function (error) {
                console.log('error', error);
                var message = error.error;
                window.alert(message);
            });
        }
    };
    ComplaintDetailComponent.prototype.complete = function () {
        var _this = this;
        var confirm = window.confirm('Confirm complete this complaint');
        if (confirm) {
            this.complaintService.complete(this.complaint.id)
                .subscribe(function () {
                _this.router.navigate(['blank'], { replaceUrl: true }).then(function () {
                    _this.router.navigate(['/complaints', _this.complaint.id], {
                        replaceUrl: true
                    });
                });
            }, function (error) {
                console.log('error', error);
                var message = error.error;
                window.alert(message);
            });
        }
    };
    ComplaintDetailComponent.prototype.working = function () {
        var _this = this;
        var confirm = window.confirm('Confirm working this complaint');
        if (confirm) {
            this.complaintService.working(this.complaint.id)
                .subscribe(function () {
                _this.router.navigate(['blank'], { replaceUrl: true }).then(function () {
                    _this.router.navigate(['/complaints', _this.complaint.id], {
                        replaceUrl: true
                    });
                });
            }, function (error) {
                console.log('error', error);
                var message = error.error;
                window.alert(message);
            });
        }
    };
    ComplaintDetailComponent.prototype.acknowledge = function () {
        var _this = this;
        var confirm = window.confirm('Confirm acknowledge this complaint');
        if (confirm) {
            this.complaintService.acknowledge(this.complaint.id)
                .subscribe(function () {
                _this.router.navigate(['blank'], { replaceUrl: true }).then(function () {
                    _this.router.navigate(['/complaints', _this.complaint.id], {
                        replaceUrl: true
                    });
                });
            }, function (error) {
                console.log('error', error);
                var message = error.error;
                window.alert(message);
            });
        }
    };
    ComplaintDetailComponent.prototype.backToAdmin = function () {
        var _this = this;
        var confirm = window.confirm('Confirm send this complaint back to admin');
        if (confirm) {
            this.complaintService.backToAdmin(this.complaint.id)
                .subscribe(function () {
                _this.router.navigate(['/complaints'], {
                    replaceUrl: true
                });
            }, function (error) {
                console.log('error', error);
                var message = error.error;
                window.alert(message);
            });
        }
    };
    ComplaintDetailComponent.prototype.assignTo = function (staffId) {
        var _this = this;
        var confirm = window.confirm('Confirm assign this complaint to that staff');
        if (confirm) {
            this.complaintService.assigeTo(this.complaint.id, staffId)
                .subscribe(function () {
                _this.router.navigate(['/complaints'], {
                    replaceUrl: true
                });
            }, function (error) {
                console.log('error', error);
                var message = error.error;
                window.alert(message);
            });
        }
    };
    ComplaintDetailComponent.prototype.isAbleToClose = function () {
        return this.currentUser.type === 'STUDENT' && this.complaint.status === 'CREATED';
    };
    ComplaintDetailComponent.prototype.isAbleToChangeStatus = function () {
        return (this.currentUser.type === 'STAFF' || this.currentUser.type === 'ADMIN') && (this.complaint.status === 'CREATED' ||
            this.complaint.status === 'TO_DO' ||
            this.complaint.status === 'WORKING');
    };
    ComplaintDetailComponent.prototype.isAbleToChangeAssignee = function () {
        return this.isAbleToChangeStatus();
    };
    ComplaintDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-complaint-detail',
            template: __webpack_require__(/*! ./complaint-detail.component.html */ "./src/app/complaint-detail/complaint-detail.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services__WEBPACK_IMPORTED_MODULE_3__["ComplaintService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ComplaintDetailComponent);
    return ComplaintDetailComponent;
}());



/***/ }),

/***/ "./src/app/complaint-log/complaint-log.component.html":
/*!************************************************************!*\
  !*** ./src/app/complaint-log/complaint-log.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-hover table-sm\" *ngIf=\"complaintLogs && complaintLogs.length\">\n  <thead>\n    <tr>\n      <th>Timestamp</th>\n      <th>Type</th>\n      <th>Details</th>\n      <th>By</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let log of complaintLogs\">\n      <td>{{log.timestamp}}</td>\n      <td>{{log.type}}</td>\n      <td [ngSwitch]=\"log.type\">\n        <div *ngSwitchCase=\"'CREATE'\">Complaint was created</div>\n        <div *ngSwitchCase=\"'STATUS_CHANGE'\">\n          <div>Status was changed</div>\n          <div>from '{{log.statusFrom | status}}'</div>\n          <div>to '{{log.statusTo | status}}'</div>\n        </div>\n        <div *ngSwitchCase=\"'ASSIGNEE_CHANGE'\">\n          <div>Assignee was changed</div>\n          <div>from '{{log.assigneeFrom | fullname}}'</div>\n          <div>to '{{log.assigneeTo | fullname}}'</div>\n        </div>\n        <div *ngSwitchCase=\"'COMMENT'\">\n            <div>Comment added</div>\n            <div text-muted>{{log.comment}}</div>\n        </div>\n      </td>\n      <td>\n        <div *ngIf=\"log.actionStudentId\">\n          <div [class.text-muted]=\"complaint.incognito\">{{complaint.incognito ? 'Not revealing' : log.actionStudentId}}</div>\n        </div>\n        <div *ngIf=\"log.actionStaff\">{{log.actionStaff | fullname}}</div>\n        <div *ngIf=\"log.actionAdmin\">{{log.actionAdmin | fullname}}</div>\n      </td>\n    </tr>\n  </tbody>\n</table>\n<div class=\"form-group-btn text-right\">\n    <a [routerLink]=\"['/complaints', complaint.id]\" class=\"btn btn-light\">Back</a>\n</div>\n"

/***/ }),

/***/ "./src/app/complaint-log/complaint-log.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/complaint-log/complaint-log.component.ts ***!
  \**********************************************************/
/*! exports provided: ComplaintLogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplaintLogComponent", function() { return ComplaintLogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ComplaintLogComponent = /** @class */ (function () {
    function ComplaintLogComponent(route) {
        this.route = route;
    }
    ComplaintLogComponent.prototype.ngOnInit = function () {
        this.complaintLogs = this.route.snapshot.data['complaintLogs'];
        this.complaint = this.route.snapshot.data['complaint'];
        console.log(this.complaintLogs);
    };
    ComplaintLogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-complaint-log',
            template: __webpack_require__(/*! ./complaint-log.component.html */ "./src/app/complaint-log/complaint-log.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ComplaintLogComponent);
    return ComplaintLogComponent;
}());



/***/ }),

/***/ "./src/app/complaints/complaints.component.html":
/*!******************************************************!*\
  !*** ./src/app/complaints/complaints.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card bg-white\">\n  <h5 class=\"card-header\">Complaints</h5>\n  <div class=\"card-body\">\n    <form [formGroup]=\"form\" (submit)=\"onSearch()\" autocomplete=\"off\">\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <label for=\"keyword\">Search by topic or details</label>\n            <input id=\"keyword\" type=\"text\" class=\"form-control\" placeholder=\"Search by topic or details\" formControlName=\"keyword\">\n          </div>\n        </div>\n        <div class=\"col-md-3\">\n          <div class=\"form-group\">\n            <label for=\"date-from\">Created date from</label>\n            <div class=\"input-group\">\n              <input class=\"form-control\" placeholder=\"Created date from\" formControlName=\"dateFrom\" ngbDatepicker #dateFrom=\"ngbDatepicker\">\n              <div class=\"input-group-append\">\n                <button class=\"btn btn-outline-secondary\" (click)=\"dateFrom.toggle()\" type=\"button\">\n                  <fa-icon [icon]=\"faCalendar\"></fa-icon>\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-3\">\n          <div class=\"form-group\">\n            <label for=\"date-to\">Created date to</label>\n            <div class=\"input-group\">\n                <input class=\"form-control\" placeholder=\"Created date to\" formControlName=\"dateTo\" ngbDatepicker #dateTo=\"ngbDatepicker\">\n                <div class=\"input-group-append\">\n                  <button class=\"btn btn-outline-secondary\" (click)=\"dateTo.toggle()\" type=\"button\">\n                    <fa-icon [icon]=\"faCalendar\"></fa-icon>\n                  </button>\n                </div>\n              </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-3\">\n          <div class=\"form-group\">\n            <label for=\"categoryId\">Category</label>\n            <select id=\"categoryId\" class=\"form-control\" formControlName=\"categoryId\">\n              <option [ngValue]=\"null\">All categories</option>\n              <option *ngFor=\"let option of categoryOptions\" [ngValue]=\"option.id\">{{option.name}}</option>\n              <option [ngValue]=\"'others'\">Others</option>\n            </select>\n          </div>\n        </div>\n        <div class=\"col-md-3\">\n          <div class=\"form-group\">\n            <label for=\"status\">Status</label>\n            <select id=\"status\" class=\"form-control\" formControlName=\"status\">\n              <option [ngValue]=\"null\">All statuses</option>\n              <option *ngFor=\"let option of statusOptions\" [ngValue]=\"option.value\">{{option.name}}</option>\n            </select>\n          </div>\n        </div>\n        <div class=\"col-md-3\">\n          <div class=\"form-group\">\n            <label for=\"severity\">Severity level</label>\n            <select id=\"severity\" class=\"form-control\" formControlName=\"severity\">\n              <option [ngValue]=\"null\">All levels</option>\n              <option *ngFor=\"let option of severityOptions\" [ngValue]=\"option.level\">{{option.name}}</option>\n            </select>\n          </div>\n        </div>\n      </div>\n      <div class=\"text-right\">\n        <button type=\"submit\" class=\"btn btn-dark\">Search</button>\n      </div>\n    </form>\n  </div>\n</div>\n<table class=\"table table-hover table-sm\" *ngIf=\"results && results.length\">\n  <thead>\n    <tr>\n      <th>Complaint</th>\n      <th>Severity level</th>\n      <th>Created Date</th>\n      <th>Status</th>\n      <th>Assignee</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let result of results\">\n      <td>\n        <a routerLink=\"/complaints/{{result.id}}\">{{result.topic}}</a>\n      </td>\n      <td [class.text-danger]=\"result.severity === 3\">{{result.severity | severity}}</td>\n      <td>{{result.created}}</td>\n      <td>{{result.status | status}}</td>\n      <td [ngSwitch]=\"!!result.assignee\">\n        <div *ngSwitchCase=\"true\">{{result.assignee | fullname}}</div>\n        <div *ngSwitchCase=\"false\" class=\"text-muted\">Waiting for relevant staff</div>\n      </td>\n    </tr>\n  </tbody>\n</table>\n<app-empty-results *ngIf=\"results && !results.length\"></app-empty-results>\n"

/***/ }),

/***/ "./src/app/complaints/complaints.component.ts":
/*!****************************************************!*\
  !*** ./src/app/complaints/complaints.component.ts ***!
  \****************************************************/
/*! exports provided: ComplaintsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplaintsComponent", function() { return ComplaintsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../types */ "./src/app/types/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services */ "./src/app/services/index.ts");
/* harmony import */ var _utils_date_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/date-util */ "./src/app/utils/date-util.ts");









var ComplaintsComponent = /** @class */ (function () {
    function ComplaintsComponent(complaintService, route) {
        this.complaintService = complaintService;
        this.route = route;
        this.faCalendar = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faCalendar"];
        this.severityOptions = _types__WEBPACK_IMPORTED_MODULE_6__["SERVERITY_LEVELS"];
        this.statusOptions = _types__WEBPACK_IMPORTED_MODULE_6__["STATUSES"];
    }
    ComplaintsComponent.prototype.ngOnInit = function () {
        this.categoryOptions = this.route.snapshot.data['categoryOptions'];
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            keyword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            dateFrom: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            dateTo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            categoryId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            severity: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
        });
        this.onSearch();
    };
    ComplaintsComponent.prototype.onSearch = function () {
        var _this = this;
        if (this.form.valid) {
            var params = this.form.value;
            params['dateFrom'] = Object(_utils_date_util__WEBPACK_IMPORTED_MODULE_8__["formatNgbDate"])(params['dateFrom']);
            params['dateTo'] = Object(_utils_date_util__WEBPACK_IMPORTED_MODULE_8__["formatNgbDate"])(params['dateTo']);
            this.form.disable();
            this.complaintService.query(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () {
                _this.form.enable();
            })).subscribe(function (response) {
                _this.results = response;
            }, function (error) {
                // this.modal.alert(error);
                console.log('error', error);
            });
        }
    };
    ComplaintsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-complaints',
            template: __webpack_require__(/*! ./complaints.component.html */ "./src/app/complaints/complaints.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_7__["ComplaintService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ComplaintsComponent);
    return ComplaintsComponent;
}());



/***/ }),

/***/ "./src/app/error-page/error-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/error-page/error-page.component.ts ***!
  \****************************************************/
/*! exports provided: ErrorPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPageComponent", function() { return ErrorPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ErrorPageComponent = /** @class */ (function () {
    function ErrorPageComponent() {
    }
    ErrorPageComponent.prototype.ngOnInit = function () {
    };
    ErrorPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-error-page',
            template: "\n    <h1 class=\"text-center\">Opps... Something went wrong.</h1>\n  ",
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ErrorPageComponent);
    return ErrorPageComponent;
}());



/***/ }),

/***/ "./src/app/pipes/fullname.ts":
/*!***********************************!*\
  !*** ./src/app/pipes/fullname.ts ***!
  \***********************************/
/*! exports provided: fullnamePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fullnamePipe", function() { return fullnamePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var fullnamePipe = /** @class */ (function () {
    function fullnamePipe() {
    }
    fullnamePipe.prototype.transform = function (value) {
        if (!value)
            return 'N/A';
        return value.firstname + " " + value.lastname;
    };
    fullnamePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'fullname' })
    ], fullnamePipe);
    return fullnamePipe;
}());



/***/ }),

/***/ "./src/app/pipes/severity.ts":
/*!***********************************!*\
  !*** ./src/app/pipes/severity.ts ***!
  \***********************************/
/*! exports provided: severityPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "severityPipe", function() { return severityPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SEVERITIES = ['', 'Suggestion', 'Normal', 'High impact'];
var severityPipe = /** @class */ (function () {
    function severityPipe() {
    }
    severityPipe.prototype.transform = function (value) {
        return SEVERITIES[value];
    };
    severityPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'severity' })
    ], severityPipe);
    return severityPipe;
}());



/***/ }),

/***/ "./src/app/pipes/status.ts":
/*!*********************************!*\
  !*** ./src/app/pipes/status.ts ***!
  \*********************************/
/*! exports provided: statusPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "statusPipe", function() { return statusPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var STATUSES = {
    CREATED: 'Waiting for relevant staff',
    TO_DO: 'Acknowledged, waiting for processing',
    WORKING: 'In processing',
    DONE_COMPLETED: 'Completed',
    DONE_DELETED: 'Close by owner',
    DONE_UNSOLVED: 'Close by staff',
};
var statusPipe = /** @class */ (function () {
    function statusPipe() {
    }
    statusPipe.prototype.transform = function (value) {
        return STATUSES[value];
    };
    statusPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'status' })
    ], statusPipe);
    return statusPipe;
}());



/***/ }),

/***/ "./src/app/report-auto-forwarder-success-rate/report-auto-forwarder-success-rate.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/report-auto-forwarder-success-rate/report-auto-forwarder-success-rate.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card bg-white\">\n  <h5 class=\"card-header\">Auto forwarder success rate report</h5>\n  <div class=\"card-body\">\n    <form [formGroup]=\"form\" (submit)=\"onGenerateReport()\" autocomplete=\"off\">\n      <div class=\"row\">\n        <div class=\"col-5\">\n          <div class=\"form-group\">\n            <label for=\"date-from\">Date from</label>\n            <div class=\"input-group\">\n              <input class=\"form-control\" placeholder=\"Created date from\" formControlName=\"dateFrom\" ngbDatepicker #dateFrom=\"ngbDatepicker\">\n              <div class=\"input-group-append\">\n                <button class=\"btn btn-outline-secondary\" (click)=\"dateFrom.toggle()\" type=\"button\">\n                  <fa-icon [icon]=\"faCalendar\"></fa-icon>\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-5\">\n          <div class=\"form-group\">\n            <label for=\"date-to\">Date to</label>\n            <div class=\"input-group\">\n                <input class=\"form-control\" placeholder=\"Created date to\" formControlName=\"dateTo\" ngbDatepicker #dateTo=\"ngbDatepicker\">\n                <div class=\"input-group-append\">\n                  <button class=\"btn btn-outline-secondary\" (click)=\"dateTo.toggle()\" type=\"button\">\n                    <fa-icon [icon]=\"faCalendar\"></fa-icon>\n                  </button>\n                </div>\n              </div>\n          </div>\n        </div>\n        <div class=\"col-2 text-right\">\n          <div class=\"form-group\">\n            <label>&nbsp;</label>\n            <div>\n              <button type=\"submit\" class=\"btn btn-dark\">Generate</button>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group-btn text-right\">\n        <a routerLink=\"/report\" class=\"btn btn-light\">Back</a>\n      </div>\n    </form>\n  </div>\n</div>\n<div [class.hidden]=\"rawReportData && !rawReportData.length\" id=\"chart\" style=\"min-width: 310px; height: 400px; max-width: 600px; margin: 0 auto\"></div>\n<app-empty-results *ngIf=\"rawReportData && !rawReportData.length\"></app-empty-results>\n"

/***/ }),

/***/ "./src/app/report-auto-forwarder-success-rate/report-auto-forwarder-success-rate.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/report-auto-forwarder-success-rate/report-auto-forwarder-success-rate.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: ReportAutoForwarderSuccessRateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportAutoForwarderSuccessRateComponent", function() { return ReportAutoForwarderSuccessRateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services */ "./src/app/services/index.ts");
/* harmony import */ var _utils_date_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/date-util */ "./src/app/utils/date-util.ts");







var ReportAutoForwarderSuccessRateComponent = /** @class */ (function () {
    function ReportAutoForwarderSuccessRateComponent(reportService) {
        this.reportService = reportService;
        this.faCalendar = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faCalendar"];
    }
    ReportAutoForwarderSuccessRateComponent.prototype.ngOnInit = function () {
        var currentYear = new Date().getFullYear();
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            dateFrom: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({
                year: currentYear,
                month: 1,
                day: 1
            }),
            dateTo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({
                year: currentYear,
                month: 12,
                day: 31
            })
        });
    };
    ReportAutoForwarderSuccessRateComponent.prototype.onGenerateReport = function () {
        var _this = this;
        var params = this.form.value;
        params['dateFrom'] = Object(_utils_date_util__WEBPACK_IMPORTED_MODULE_6__["formatNgbDate"])(params['dateFrom']);
        params['dateTo'] = Object(_utils_date_util__WEBPACK_IMPORTED_MODULE_6__["formatNgbDate"])(params['dateTo']);
        this.form.disable();
        this.reportService.autoForwarderSuccessRate(params)
            .subscribe(function (response) {
            _this.rawReportData = response;
            _this.generateHighChart();
            _this.form.enable();
        }, function (error) {
            console.log('error', error);
            var message = error.error;
            window.alert(message);
            _this.form.enable();
        });
    };
    ReportAutoForwarderSuccessRateComponent.prototype.generateHighChart = function () {
        highcharts__WEBPACK_IMPORTED_MODULE_4__["chart"]('chart', {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Auto forwarding success rate'
            },
            tooltip: {
                pointFormat: '<b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                    }
                },
            },
            series: [{
                    type: 'pie',
                    data: [
                        {
                            name: 'Successful',
                            y: this.rawReportData.filter(function (each) { return each.success; }).length
                        },
                        {
                            name: 'Failure',
                            y: this.rawReportData.filter(function (each) { return !each.success; }).length
                        }
                    ]
                }]
        });
    };
    ReportAutoForwarderSuccessRateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-report-auto-forwarder-success-rate',
            template: __webpack_require__(/*! ./report-auto-forwarder-success-rate.component.html */ "./src/app/report-auto-forwarder-success-rate/report-auto-forwarder-success-rate.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_5__["ReportService"]])
    ], ReportAutoForwarderSuccessRateComponent);
    return ReportAutoForwarderSuccessRateComponent;
}());



/***/ }),

/***/ "./src/app/report-complaint-number/report-complaint-number.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/report-complaint-number/report-complaint-number.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card bg-white\">\n  <h5 class=\"card-header\">Complaint number</h5>\n  <div class=\"card-body\">\n    <form [formGroup]=\"form\" (submit)=\"onGenerateReport()\" autocomplete=\"off\">\n      <div class=\"row\">\n        <div class=\"col-5\">\n          <div class=\"form-group\">\n            <label for=\"date-from\">Date from</label>\n            <div class=\"input-group\">\n              <input class=\"form-control\" placeholder=\"Created date from\" formControlName=\"dateFrom\" ngbDatepicker #dateFrom=\"ngbDatepicker\">\n              <div class=\"input-group-append\">\n                <button class=\"btn btn-outline-secondary\" (click)=\"dateFrom.toggle()\" type=\"button\">\n                  <fa-icon [icon]=\"faCalendar\"></fa-icon>\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-5\">\n          <div class=\"form-group\">\n            <label for=\"date-to\">Date to</label>\n            <div class=\"input-group\">\n                <input class=\"form-control\" placeholder=\"Created date to\" formControlName=\"dateTo\" ngbDatepicker #dateTo=\"ngbDatepicker\">\n                <div class=\"input-group-append\">\n                  <button class=\"btn btn-outline-secondary\" (click)=\"dateTo.toggle()\" type=\"button\">\n                    <fa-icon [icon]=\"faCalendar\"></fa-icon>\n                  </button>\n                </div>\n              </div>\n          </div>\n        </div>\n        <div class=\"col-2 text-right\">\n          <div class=\"form-group\">\n            <label>&nbsp;</label>\n            <div>\n              <button type=\"submit\" class=\"btn btn-dark\">Generate</button>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group-btn text-right\">\n        <a routerLink=\"/report\" class=\"btn btn-light\">Back</a>\n      </div>\n    </form>\n  </div>\n</div>\n<div [class.hidden]=\"rawReportData && !rawReportData.length\" id=\"chart\" style=\"min-width: 310px; height: 400px; max-width: 600px; margin: 0 auto\"></div>\n<app-empty-results *ngIf=\"rawReportData && !rawReportData.length\"></app-empty-results>\n"

/***/ }),

/***/ "./src/app/report-complaint-number/report-complaint-number.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/report-complaint-number/report-complaint-number.component.ts ***!
  \******************************************************************************/
/*! exports provided: ReportComplaintNumberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportComplaintNumberComponent", function() { return ReportComplaintNumberComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services */ "./src/app/services/index.ts");
/* harmony import */ var _utils_date_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/date-util */ "./src/app/utils/date-util.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var ReportComplaintNumberComponent = /** @class */ (function () {
    function ReportComplaintNumberComponent(route, reportService) {
        this.route = route;
        this.reportService = reportService;
        this.faCalendar = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faCalendar"];
    }
    ReportComplaintNumberComponent.prototype.ngOnInit = function () {
        this.categoryOptions = this.route.snapshot.data['categoryOptions'];
        var currentYear = new Date().getFullYear();
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            dateFrom: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({
                year: currentYear,
                month: 1,
                day: 1
            }),
            dateTo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({
                year: currentYear,
                month: 12,
                day: 31
            })
        });
    };
    ReportComplaintNumberComponent.prototype.onGenerateReport = function () {
        var _this = this;
        var params = this.form.value;
        params['dateFrom'] = Object(_utils_date_util__WEBPACK_IMPORTED_MODULE_6__["formatNgbDate"])(params['dateFrom']);
        params['dateTo'] = Object(_utils_date_util__WEBPACK_IMPORTED_MODULE_6__["formatNgbDate"])(params['dateTo']);
        this.form.disable();
        this.reportService.complaintNumber(params)
            .subscribe(function (response) {
            _this.rawReportData = response;
            _this.generateHighChart();
            _this.form.enable();
        }, function (error) {
            console.log('error', error);
            var message = error.error;
            window.alert(message);
            _this.form.enable();
        });
    };
    ReportComplaintNumberComponent.prototype.generateHighChart = function () {
        var _this = this;
        this.sumReportData = this.rawReportData.map(function (each) { return each.count; }).reduce(function (a, b) { return a += b; });
        var categories = [];
        var data = [];
        this.categoryOptions.forEach(function (each, i) {
            categories.push(i + 1 + ". " + each.name);
            var foundInReport = _this.rawReportData.find(function (r) { return r.categoryId === each.id; });
            if (foundInReport) {
                data.push(foundInReport.count);
            }
            else {
                data.push(0);
            }
        });
        categories.push(categories.length + 1 + ". Others");
        var otherCount = this.rawReportData.find(function (r) { return !r.categoryId; });
        if (otherCount) {
            data.push(otherCount.count);
        }
        else {
            data.push(0);
        }
        highcharts__WEBPACK_IMPORTED_MODULE_4__["chart"]('chart', {
            chart: {
                type: 'column'
            },
            title: {
                text: "Total complaint number: " + this.sumReportData
            },
            subtitle: {
                text: ''
            },
            xAxis: {
                categories: categories,
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Number'
                }
            },
            tooltip: {
                pointFormat: '<b>{point.y:.0f}',
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                    type: 'column',
                    name: 'Complaint number',
                    data: data
                }]
        });
    };
    ReportComplaintNumberComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-report-complaint-number',
            template: __webpack_require__(/*! ./report-complaint-number.component.html */ "./src/app/report-complaint-number/report-complaint-number.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _services__WEBPACK_IMPORTED_MODULE_5__["ReportService"]])
    ], ReportComplaintNumberComponent);
    return ReportComplaintNumberComponent;
}());



/***/ }),

/***/ "./src/app/report/report.component.html":
/*!**********************************************!*\
  !*** ./src/app/report/report.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-6\">\n    <div class=\"card\">\n      <div class=\"card-body text-center\">\n        <h1 class=\"card-img-top\"><fa-icon [icon]=\"faChartBar\"></fa-icon></h1>\n        <h5 class=\"card-title\">Complaint number</h5>\n        <a routerLink=\"/report/complaint-number\" class=\"card-link\">View report</a>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-6\">\n    <div class=\"card\">\n      <div class=\"card-body text-center\">\n        <h1 class=\"card-img-top\"><fa-icon [icon]=\"faChartPie\"></fa-icon></h1>\n        <h5 class=\"card-title\">Auto forwarder success rate</h5>\n        <a routerLink=\"/report/auto-forwarder-success-rate\" class=\"card-link\">View report</a>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/report/report.component.ts":
/*!********************************************!*\
  !*** ./src/app/report/report.component.ts ***!
  \********************************************/
/*! exports provided: ReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportComponent", function() { return ReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");



var ReportComponent = /** @class */ (function () {
    function ReportComponent() {
        this.faChartBar = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faChartBar"];
        this.faChartPie = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faChartPie"];
    }
    ReportComponent.prototype.ngOnInit = function () {
    };
    ReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-report',
            template: __webpack_require__(/*! ./report.component.html */ "./src/app/report/report.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ReportComponent);
    return ReportComponent;
}());



/***/ }),

/***/ "./src/app/resolvers/complaint-categories-resolve.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/resolvers/complaint-categories-resolve.service.ts ***!
  \*******************************************************************/
/*! exports provided: ComplaintCategoriesResolveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplaintCategoriesResolveService", function() { return ComplaintCategoriesResolveService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services */ "./src/app/services/index.ts");
/* harmony import */ var _resolve_error_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resolve-error.service */ "./src/app/resolvers/resolve-error.service.ts");





var ComplaintCategoriesResolveService = /** @class */ (function () {
    function ComplaintCategoriesResolveService(service, error) {
        this.service = service;
        this.error = error;
    }
    ComplaintCategoriesResolveService.prototype.resolve = function (route, state) {
        var _this = this;
        return this.service.query().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (e) { return _this.error.handle(e, route, state); }));
    };
    ComplaintCategoriesResolveService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_3__["ComplaintCategoryService"],
            _resolve_error_service__WEBPACK_IMPORTED_MODULE_4__["ResolveErrorService"]])
    ], ComplaintCategoriesResolveService);
    return ComplaintCategoriesResolveService;
}());



/***/ }),

/***/ "./src/app/resolvers/complaint-category-resolve.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/resolvers/complaint-category-resolve.service.ts ***!
  \*****************************************************************/
/*! exports provided: ComplaintCategoryResolveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplaintCategoryResolveService", function() { return ComplaintCategoryResolveService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services */ "./src/app/services/index.ts");
/* harmony import */ var _resolve_error_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resolve-error.service */ "./src/app/resolvers/resolve-error.service.ts");






var ComplaintCategoryResolveService = /** @class */ (function () {
    function ComplaintCategoryResolveService(service, error) {
        this.service = service;
        this.error = error;
    }
    ComplaintCategoryResolveService.prototype.resolve = function (route, state) {
        var _this = this;
        var complaintCategoryId = route.paramMap.get('complaintCategoryId');
        if (complaintCategoryId) {
            return this.service.get(complaintCategoryId)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (e) { return _this.error.handle(e, route, state); }));
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({});
        }
    };
    ComplaintCategoryResolveService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_4__["ComplaintCategoryService"],
            _resolve_error_service__WEBPACK_IMPORTED_MODULE_5__["ResolveErrorService"]])
    ], ComplaintCategoryResolveService);
    return ComplaintCategoryResolveService;
}());



/***/ }),

/***/ "./src/app/resolvers/complaint-logs-resolve.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/resolvers/complaint-logs-resolve.service.ts ***!
  \*************************************************************/
/*! exports provided: ComplaintLogsResolveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplaintLogsResolveService", function() { return ComplaintLogsResolveService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services */ "./src/app/services/index.ts");
/* harmony import */ var _resolve_error_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resolve-error.service */ "./src/app/resolvers/resolve-error.service.ts");





var ComplaintLogsResolveService = /** @class */ (function () {
    function ComplaintLogsResolveService(service, error) {
        this.service = service;
        this.error = error;
    }
    ComplaintLogsResolveService.prototype.resolve = function (route, state) {
        var _this = this;
        var complaintId = route.paramMap.get('complaintId');
        return this.service.findLogsByComplaintId(complaintId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (e) { return _this.error.handle(e, route, state); }));
    };
    ComplaintLogsResolveService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_3__["ComplaintService"],
            _resolve_error_service__WEBPACK_IMPORTED_MODULE_4__["ResolveErrorService"]])
    ], ComplaintLogsResolveService);
    return ComplaintLogsResolveService;
}());



/***/ }),

/***/ "./src/app/resolvers/complaint-resolve.service.ts":
/*!********************************************************!*\
  !*** ./src/app/resolvers/complaint-resolve.service.ts ***!
  \********************************************************/
/*! exports provided: ComplaintResolveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplaintResolveService", function() { return ComplaintResolveService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services */ "./src/app/services/index.ts");
/* harmony import */ var _resolve_error_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resolve-error.service */ "./src/app/resolvers/resolve-error.service.ts");






var ComplaintResolveService = /** @class */ (function () {
    function ComplaintResolveService(service, error) {
        this.service = service;
        this.error = error;
    }
    ComplaintResolveService.prototype.resolve = function (route, state) {
        var _this = this;
        var complaintId = route.paramMap.get('complaintId');
        if (complaintId) {
            return this.service.get(complaintId)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (e) { return _this.error.handle(e, route, state); }));
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({ incognito: false });
        }
    };
    ComplaintResolveService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_4__["ComplaintService"],
            _resolve_error_service__WEBPACK_IMPORTED_MODULE_5__["ResolveErrorService"]])
    ], ComplaintResolveService);
    return ComplaintResolveService;
}());



/***/ }),

/***/ "./src/app/resolvers/current-user-resolve.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/resolvers/current-user-resolve.service.ts ***!
  \***********************************************************/
/*! exports provided: CurrentUserResolveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentUserResolveService", function() { return CurrentUserResolveService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services */ "./src/app/services/index.ts");
/* harmony import */ var _resolve_error_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resolve-error.service */ "./src/app/resolvers/resolve-error.service.ts");




var CurrentUserResolveService = /** @class */ (function () {
    function CurrentUserResolveService(service, error) {
        this.service = service;
        this.error = error;
    }
    CurrentUserResolveService.prototype.resolve = function (route, state) {
        return this.service.getCurrentUser();
    };
    CurrentUserResolveService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _resolve_error_service__WEBPACK_IMPORTED_MODULE_3__["ResolveErrorService"]])
    ], CurrentUserResolveService);
    return CurrentUserResolveService;
}());



/***/ }),

/***/ "./src/app/resolvers/index.ts":
/*!************************************!*\
  !*** ./src/app/resolvers/index.ts ***!
  \************************************/
/*! exports provided: ComplaintCategoriesResolveService, ComplaintCategoryResolveService, ComplaintLogsResolveService, ComplaintResolveService, CurrentUserResolveService, StaffMappingsResolveService, StaffMappingResolveService, StaffsResolveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _complaint_categories_resolve_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./complaint-categories-resolve.service */ "./src/app/resolvers/complaint-categories-resolve.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComplaintCategoriesResolveService", function() { return _complaint_categories_resolve_service__WEBPACK_IMPORTED_MODULE_0__["ComplaintCategoriesResolveService"]; });

/* harmony import */ var _complaint_category_resolve_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./complaint-category-resolve.service */ "./src/app/resolvers/complaint-category-resolve.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComplaintCategoryResolveService", function() { return _complaint_category_resolve_service__WEBPACK_IMPORTED_MODULE_1__["ComplaintCategoryResolveService"]; });

/* harmony import */ var _complaint_logs_resolve_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./complaint-logs-resolve.service */ "./src/app/resolvers/complaint-logs-resolve.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComplaintLogsResolveService", function() { return _complaint_logs_resolve_service__WEBPACK_IMPORTED_MODULE_2__["ComplaintLogsResolveService"]; });

/* harmony import */ var _complaint_resolve_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./complaint-resolve.service */ "./src/app/resolvers/complaint-resolve.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComplaintResolveService", function() { return _complaint_resolve_service__WEBPACK_IMPORTED_MODULE_3__["ComplaintResolveService"]; });

/* harmony import */ var _current_user_resolve_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./current-user-resolve.service */ "./src/app/resolvers/current-user-resolve.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CurrentUserResolveService", function() { return _current_user_resolve_service__WEBPACK_IMPORTED_MODULE_4__["CurrentUserResolveService"]; });

/* harmony import */ var _staff_mappings_resolve_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./staff-mappings-resolve.service */ "./src/app/resolvers/staff-mappings-resolve.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StaffMappingsResolveService", function() { return _staff_mappings_resolve_service__WEBPACK_IMPORTED_MODULE_5__["StaffMappingsResolveService"]; });

/* harmony import */ var _staff_mapping_resolve_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./staff-mapping-resolve.service */ "./src/app/resolvers/staff-mapping-resolve.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StaffMappingResolveService", function() { return _staff_mapping_resolve_service__WEBPACK_IMPORTED_MODULE_6__["StaffMappingResolveService"]; });

/* harmony import */ var _staffs_resolve_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./staffs-resolve.service */ "./src/app/resolvers/staffs-resolve.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StaffsResolveService", function() { return _staffs_resolve_service__WEBPACK_IMPORTED_MODULE_7__["StaffsResolveService"]; });











/***/ }),

/***/ "./src/app/resolvers/resolve-error.service.ts":
/*!****************************************************!*\
  !*** ./src/app/resolvers/resolve-error.service.ts ***!
  \****************************************************/
/*! exports provided: ResolveErrorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResolveErrorService", function() { return ResolveErrorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var ResolveErrorService = /** @class */ (function () {
    function ResolveErrorService(router, location) {
        this.router = router;
        this.location = location;
    }
    ResolveErrorService.prototype.handle = function (error, route, state) {
        var _this = this;
        // const url = route.url.map((u) => u.path).join('/');
        var url = state.url;
        if (url.charAt(0) === '/') {
            url = url.slice(1); // make it relative URL
        }
        this.router.navigate(['error'], {
            queryParams: { code: error.status },
            skipLocationChange: true
        });
        setTimeout(function () {
            _this.location.go(url);
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({});
    };
    ResolveErrorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], ResolveErrorService);
    return ResolveErrorService;
}());



/***/ }),

/***/ "./src/app/resolvers/staff-mapping-resolve.service.ts":
/*!************************************************************!*\
  !*** ./src/app/resolvers/staff-mapping-resolve.service.ts ***!
  \************************************************************/
/*! exports provided: StaffMappingResolveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffMappingResolveService", function() { return StaffMappingResolveService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services */ "./src/app/services/index.ts");
/* harmony import */ var _resolve_error_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resolve-error.service */ "./src/app/resolvers/resolve-error.service.ts");






var StaffMappingResolveService = /** @class */ (function () {
    function StaffMappingResolveService(service, error) {
        this.service = service;
        this.error = error;
    }
    StaffMappingResolveService.prototype.resolve = function (route, state) {
        var _this = this;
        var staffId = route.paramMap.get('staffId');
        if (staffId) {
            return this.service.get(staffId)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (e) { return _this.error.handle(e, route, state); }));
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({ categories: [], keywords: [] });
        }
    };
    StaffMappingResolveService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_4__["StaffMappingService"],
            _resolve_error_service__WEBPACK_IMPORTED_MODULE_5__["ResolveErrorService"]])
    ], StaffMappingResolveService);
    return StaffMappingResolveService;
}());



/***/ }),

/***/ "./src/app/resolvers/staff-mappings-resolve.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/resolvers/staff-mappings-resolve.service.ts ***!
  \*************************************************************/
/*! exports provided: StaffMappingsResolveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffMappingsResolveService", function() { return StaffMappingsResolveService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services */ "./src/app/services/index.ts");
/* harmony import */ var _resolve_error_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resolve-error.service */ "./src/app/resolvers/resolve-error.service.ts");





var StaffMappingsResolveService = /** @class */ (function () {
    function StaffMappingsResolveService(service, error) {
        this.service = service;
        this.error = error;
    }
    StaffMappingsResolveService.prototype.resolve = function (route, state) {
        var _this = this;
        return this.service.query().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (e) { return _this.error.handle(e, route, state); }));
    };
    StaffMappingsResolveService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_3__["StaffMappingService"],
            _resolve_error_service__WEBPACK_IMPORTED_MODULE_4__["ResolveErrorService"]])
    ], StaffMappingsResolveService);
    return StaffMappingsResolveService;
}());



/***/ }),

/***/ "./src/app/resolvers/staffs-resolve.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/resolvers/staffs-resolve.service.ts ***!
  \*****************************************************/
/*! exports provided: StaffsResolveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffsResolveService", function() { return StaffsResolveService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services */ "./src/app/services/index.ts");
/* harmony import */ var _resolve_error_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resolve-error.service */ "./src/app/resolvers/resolve-error.service.ts");





var StaffsResolveService = /** @class */ (function () {
    function StaffsResolveService(service, error) {
        this.service = service;
        this.error = error;
    }
    StaffsResolveService.prototype.resolve = function (route, state) {
        var _this = this;
        return this.service.query().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (e) { return _this.error.handle(e, route, state); }));
    };
    StaffsResolveService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_3__["StaffService"],
            _resolve_error_service__WEBPACK_IMPORTED_MODULE_4__["ResolveErrorService"]])
    ], StaffsResolveService);
    return StaffsResolveService;
}());



/***/ }),

/***/ "./src/app/services/api-list.ts":
/*!**************************************!*\
  !*** ./src/app/services/api-list.ts ***!
  \**************************************/
/*! exports provided: COMPLAINT, COMPLAINT_CATEGORY, STAFF_MAPPING, STAFF, USER, REPORT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPLAINT", function() { return COMPLAINT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPLAINT_CATEGORY", function() { return COMPLAINT_CATEGORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STAFF_MAPPING", function() { return STAFF_MAPPING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STAFF", function() { return STAFF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER", function() { return USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REPORT", function() { return REPORT; });
var BASE = '/api';
var COMPLAINT = BASE + "/complaint";
var COMPLAINT_CATEGORY = BASE + "/complaint-category";
var STAFF_MAPPING = BASE + "/staff-mapping";
var STAFF = BASE + "/staff";
var USER = BASE + "/user";
var REPORT = BASE + "/report";


/***/ }),

/***/ "./src/app/services/complaint-category.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/complaint-category.service.ts ***!
  \********************************************************/
/*! exports provided: ComplaintCategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplaintCategoryService", function() { return ComplaintCategoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _api_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api-list */ "./src/app/services/api-list.ts");




var HTTP_OPTIONS = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var ComplaintCategoryService = /** @class */ (function () {
    function ComplaintCategoryService(http) {
        this.http = http;
    }
    ComplaintCategoryService.prototype.query = function () {
        return this.http.get(_api_list__WEBPACK_IMPORTED_MODULE_3__["COMPLAINT_CATEGORY"]);
    };
    ComplaintCategoryService.prototype.get = function (id) {
        return this.http.get(_api_list__WEBPACK_IMPORTED_MODULE_3__["COMPLAINT_CATEGORY"] + "/" + id);
    };
    ComplaintCategoryService.prototype.save = function (params) {
        if (params.id) {
            return this.update(params);
        }
        else {
            return this.create(params);
        }
    };
    ComplaintCategoryService.prototype.create = function (params) {
        return this.http.post(_api_list__WEBPACK_IMPORTED_MODULE_3__["COMPLAINT_CATEGORY"], params, HTTP_OPTIONS);
    };
    ComplaintCategoryService.prototype.update = function (params) {
        return this.http.put(_api_list__WEBPACK_IMPORTED_MODULE_3__["COMPLAINT_CATEGORY"], params, HTTP_OPTIONS);
    };
    ComplaintCategoryService.prototype.delete = function (id) {
        return this.http.delete(_api_list__WEBPACK_IMPORTED_MODULE_3__["COMPLAINT_CATEGORY"] + "/" + id, HTTP_OPTIONS);
    };
    ComplaintCategoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ComplaintCategoryService);
    return ComplaintCategoryService;
}());



/***/ }),

/***/ "./src/app/services/complaint.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/complaint.service.ts ***!
  \***********************************************/
/*! exports provided: ComplaintService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplaintService", function() { return ComplaintService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _utils_http_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/http-util */ "./src/app/utils/http-util.ts");
/* harmony import */ var _api_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api-list */ "./src/app/services/api-list.ts");





var HTTP_OPTIONS = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var ComplaintService = /** @class */ (function () {
    function ComplaintService(http) {
        this.http = http;
    }
    ComplaintService.prototype.query = function (params) {
        var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ fromObject: Object(_utils_http_util__WEBPACK_IMPORTED_MODULE_3__["removeNullParams"])(params) });
        return this.http.get(_api_list__WEBPACK_IMPORTED_MODULE_4__["COMPLAINT"], { params: httpParams });
    };
    ComplaintService.prototype.get = function (id) {
        return this.http.get(_api_list__WEBPACK_IMPORTED_MODULE_4__["COMPLAINT"] + "/" + id);
    };
    ComplaintService.prototype.create = function (params) {
        return this.http.post(_api_list__WEBPACK_IMPORTED_MODULE_4__["COMPLAINT"], params, HTTP_OPTIONS);
    };
    ComplaintService.prototype.findLogsByComplaintId = function (complaintId) {
        return this.http.get(_api_list__WEBPACK_IMPORTED_MODULE_4__["COMPLAINT"] + "/" + complaintId + "/logs");
    };
    ComplaintService.prototype.findCommentsByComplaintId = function (complaintId) {
        return this.http.get(_api_list__WEBPACK_IMPORTED_MODULE_4__["COMPLAINT"] + "/" + complaintId + "/comments");
    };
    ComplaintService.prototype.addComment = function (id, params) {
        return this.http.post(_api_list__WEBPACK_IMPORTED_MODULE_4__["COMPLAINT"] + "/" + id + "/comment", params, HTTP_OPTIONS);
    };
    ComplaintService.prototype.close = function (id) {
        return this.http.put(_api_list__WEBPACK_IMPORTED_MODULE_4__["COMPLAINT"] + "/" + id + "/close", HTTP_OPTIONS);
    };
    ComplaintService.prototype.acknowledge = function (id) {
        return this.http.put(_api_list__WEBPACK_IMPORTED_MODULE_4__["COMPLAINT"] + "/" + id + "/acknowledge", HTTP_OPTIONS);
    };
    ComplaintService.prototype.working = function (id) {
        return this.http.put(_api_list__WEBPACK_IMPORTED_MODULE_4__["COMPLAINT"] + "/" + id + "/working", HTTP_OPTIONS);
    };
    ComplaintService.prototype.complete = function (id) {
        return this.http.put(_api_list__WEBPACK_IMPORTED_MODULE_4__["COMPLAINT"] + "/" + id + "/complete", HTTP_OPTIONS);
    };
    ComplaintService.prototype.backToAdmin = function (id) {
        return this.http.put(_api_list__WEBPACK_IMPORTED_MODULE_4__["COMPLAINT"] + "/" + id + "/back-to-admin", HTTP_OPTIONS);
    };
    ComplaintService.prototype.assigeTo = function (id, staffId) {
        return this.http.put(_api_list__WEBPACK_IMPORTED_MODULE_4__["COMPLAINT"] + "/" + id + "/assign-to/" + staffId, HTTP_OPTIONS);
    };
    ComplaintService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ComplaintService);
    return ComplaintService;
}());



/***/ }),

/***/ "./src/app/services/form.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/form.service.ts ***!
  \******************************************/
/*! exports provided: FormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormService", function() { return FormService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var focusableElements = [
    'input',
    'select',
    'textarea',
    'button'
];
var isFocusableElement = function (tagname) {
    return focusableElements.indexOf(tagname.toLowerCase()) > -1;
};
var FormService = /** @class */ (function () {
    function FormService() {
    }
    FormService.prototype.focusInvalid = function () {
        var elements = document.getElementsByClassName('ng-invalid');
        if (elements.length > 0) {
            var es = [];
            for (var i = 0; i < elements.length; i++) {
                es.push(elements.item(i));
            }
            es = es.filter(function (e) {
                return isFocusableElement(e.tagName.toLowerCase());
            });
            if (!es[0]) {
                // tslint:disable-next-line
                console.error('unable to find invalid element');
                return;
            }
            es[0].focus();
            document.body.scrollTop = es[0].offsetTop;
        }
    };
    FormService.prototype.markAsTouched = function (form) {
        var _this = this;
        if (form instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"] || form instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]) {
            Object.keys(form.controls).forEach(function (key) {
                _this.markAsTouched(form.controls[key]);
            });
        }
        else if (form instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["AbstractControl"]) {
            form.markAsTouched();
        }
    };
    FormService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FormService);
    return FormService;
}());



/***/ }),

/***/ "./src/app/services/index.ts":
/*!***********************************!*\
  !*** ./src/app/services/index.ts ***!
  \***********************************/
/*! exports provided: ComplaintCategoryService, ComplaintService, FormService, StaffMappingService, UserService, StaffService, ReportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _complaint_category_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./complaint-category.service */ "./src/app/services/complaint-category.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComplaintCategoryService", function() { return _complaint_category_service__WEBPACK_IMPORTED_MODULE_0__["ComplaintCategoryService"]; });

/* harmony import */ var _complaint_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./complaint.service */ "./src/app/services/complaint.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComplaintService", function() { return _complaint_service__WEBPACK_IMPORTED_MODULE_1__["ComplaintService"]; });

/* harmony import */ var _form_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form.service */ "./src/app/services/form.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormService", function() { return _form_service__WEBPACK_IMPORTED_MODULE_2__["FormService"]; });

/* harmony import */ var _staff_mapping_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./staff-mapping.service */ "./src/app/services/staff-mapping.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StaffMappingService", function() { return _staff_mapping_service__WEBPACK_IMPORTED_MODULE_3__["StaffMappingService"]; });

/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]; });

/* harmony import */ var _staff_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./staff.service */ "./src/app/services/staff.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StaffService", function() { return _staff_service__WEBPACK_IMPORTED_MODULE_5__["StaffService"]; });

/* harmony import */ var _report_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./report.service */ "./src/app/services/report.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReportService", function() { return _report_service__WEBPACK_IMPORTED_MODULE_6__["ReportService"]; });










/***/ }),

/***/ "./src/app/services/report.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/report.service.ts ***!
  \********************************************/
/*! exports provided: ReportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportService", function() { return ReportService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _utils_http_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/http-util */ "./src/app/utils/http-util.ts");
/* harmony import */ var _api_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api-list */ "./src/app/services/api-list.ts");





var HTTP_OPTIONS = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var ReportService = /** @class */ (function () {
    function ReportService(http) {
        this.http = http;
    }
    ReportService.prototype.autoForwarderSuccessRate = function (params) {
        var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ fromObject: Object(_utils_http_util__WEBPACK_IMPORTED_MODULE_3__["removeNullParams"])(params) });
        return this.http.get(_api_list__WEBPACK_IMPORTED_MODULE_4__["REPORT"] + "/auto-forwarder-success-rate", { params: httpParams });
    };
    ReportService.prototype.complaintNumber = function (params) {
        var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ fromObject: Object(_utils_http_util__WEBPACK_IMPORTED_MODULE_3__["removeNullParams"])(params) });
        return this.http.get(_api_list__WEBPACK_IMPORTED_MODULE_4__["REPORT"] + "/complaint-number", { params: httpParams });
    };
    ReportService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ReportService);
    return ReportService;
}());



/***/ }),

/***/ "./src/app/services/staff-mapping.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/staff-mapping.service.ts ***!
  \***************************************************/
/*! exports provided: StaffMappingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffMappingService", function() { return StaffMappingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _api_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api-list */ "./src/app/services/api-list.ts");




var HTTP_OPTIONS = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var StaffMappingService = /** @class */ (function () {
    function StaffMappingService(http) {
        this.http = http;
    }
    StaffMappingService.prototype.query = function () {
        return this.http.get(_api_list__WEBPACK_IMPORTED_MODULE_3__["STAFF_MAPPING"]);
    };
    StaffMappingService.prototype.get = function (id) {
        return this.http.get(_api_list__WEBPACK_IMPORTED_MODULE_3__["STAFF_MAPPING"] + "/" + id);
    };
    StaffMappingService.prototype.create = function (params) {
        return this.http.post(_api_list__WEBPACK_IMPORTED_MODULE_3__["STAFF_MAPPING"], params, HTTP_OPTIONS);
    };
    StaffMappingService.prototype.update = function (params) {
        return this.http.put(_api_list__WEBPACK_IMPORTED_MODULE_3__["STAFF_MAPPING"], params, HTTP_OPTIONS);
    };
    StaffMappingService.prototype.delete = function (id) {
        return this.http.delete(_api_list__WEBPACK_IMPORTED_MODULE_3__["STAFF_MAPPING"] + "/" + id, HTTP_OPTIONS);
    };
    StaffMappingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], StaffMappingService);
    return StaffMappingService;
}());



/***/ }),

/***/ "./src/app/services/staff.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/staff.service.ts ***!
  \*******************************************/
/*! exports provided: StaffService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffService", function() { return StaffService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _api_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api-list */ "./src/app/services/api-list.ts");




var HTTP_OPTIONS = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var StaffService = /** @class */ (function () {
    function StaffService(http) {
        this.http = http;
    }
    StaffService.prototype.query = function () {
        return this.http.get(_api_list__WEBPACK_IMPORTED_MODULE_3__["STAFF"]);
    };
    StaffService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], StaffService);
    return StaffService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _api_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api-list */ "./src/app/services/api-list.ts");





var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getCurrentUser = function () {
        if (this.currentUser) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.currentUser);
        }
        return this.http.get(_api_list__WEBPACK_IMPORTED_MODULE_4__["USER"] + "/current");
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/staff-mapping-detail/staff-mapping-detail.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/staff-mapping-detail/staff-mapping-detail.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card bg-white\">\n  <h5 class=\"card-header\">{{staffMapping.id ? staffMapping.firstname + ' ' + staffMapping.lastname : 'Create staff mapping'}}</h5>\n  <div class=\"card-body\">\n    <form [formGroup]=\"form\" (submit)=\"onSubmit()\" autocomplete=\"off\" novalidate>\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"form-group\" *ngIf=\"!staffMapping.id\">\n            <label for=\"staff\">Staff</label>\n            <select id=\"staff\" class=\"form-control\" formControlName=\"staff\">\n              <option [ngValue]=\"null\">Select a staff</option>\n              <option *ngFor=\"let option of staffOptions\" [ngValue]=\"option\">{{option | fullname}}</option>\n            </select>\n            <utils-form-control-error [control]=\"form.controls['staff']\" error=\"required\">This field is required.</utils-form-control-error>\n          </div>\n          <div class=\"form-group\">\n            <label>Categories</label>\n            <div class=\"form-group form-check\" *ngFor=\"let control of form.controls.categories.controls; let i = index\">\n              <input type=\"checkbox\" class=\"form-check-input\" id=\"categories-{{i}}\" [formControl]=\"control\">\n              <label class=\"form-check-label\" for=\"categories-{{i}}\">{{categoryOptions[i].name}}</label>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <label for=\"keywords\">Keywords</label>\n            <textarea id=\"keywords\" class=\"form-control\" formControlName=\"keywords\" placeholder=\"Keywords\"></textarea>\n            <utils-form-control-error [control]=\"form.controls['keywords']\" error=\"required\">This field is required.</utils-form-control-error>\n            <small class=\"text-muted\">Use comma separate between keywords for example: network,slow</small>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group-btn text-right\">\n        <button type=\"submit\" class=\"btn btn-dark\">Save</button>\n        <button *ngIf=\"staffMapping.id\" type=\"button\" class=\"btn btn-danger\" (click)=\"delete()\">Delete</button>\n        <a routerLink=\"/staff-mapping\" class=\"btn btn-light\">Back</a>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/staff-mapping-detail/staff-mapping-detail.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/staff-mapping-detail/staff-mapping-detail.component.ts ***!
  \************************************************************************/
/*! exports provided: StaffMappingDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffMappingDetailComponent", function() { return StaffMappingDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services */ "./src/app/services/index.ts");





var StaffMappingDetailComponent = /** @class */ (function () {
    function StaffMappingDetailComponent(route, staffMappingService, router, formService) {
        this.route = route;
        this.staffMappingService = staffMappingService;
        this.router = router;
        this.formService = formService;
    }
    StaffMappingDetailComponent.prototype.ngOnInit = function () {
        this.staffMapping = this.route.snapshot.data['staffMapping'];
        this.categoryOptions = this.route.snapshot.data['categoryOptions'];
        this.staffOptions = this.route.snapshot.data['staffOptions'];
        var formValue = this.transformToFormValue(this.staffMapping, this.categoryOptions, this.staffOptions);
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            staff: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](formValue['staff'], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            categories: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"](formValue['categories'].map(function (each) { return new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](each); })),
            keywords: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](formValue['keywords'])
        });
    };
    StaffMappingDetailComponent.prototype.onSubmit = function () {
        var _this = this;
        this.formService.markAsTouched(this.form);
        if (this.form.valid) {
            var staffMapping = this.transformToModel(this.form.value, this.categoryOptions);
            if (!staffMapping.categories.length && !staffMapping.keywords.length) {
                window.alert('Staff must at least map to a category or a keyword');
                return;
            }
            ;
            this.submitting = true;
            this.form.disable();
            (this.staffMapping.id
                ? this.staffMappingService.update(staffMapping)
                : this.staffMappingService.create(staffMapping))
                .subscribe(function (response) {
                _this.router.navigate(['/staff-mapping']);
            }, function (error) {
                console.log('error', error);
                var message = error.error;
                window.alert(message);
                _this.submitting = false;
                _this.form.enable();
            });
        }
        else {
            this.formService.focusInvalid();
            console.log('invalid form');
        }
    };
    StaffMappingDetailComponent.prototype.delete = function () {
        var _this = this;
        var confirm = window.confirm('Confirm deleting this mapping');
        if (confirm) {
            this.staffMappingService.delete(this.staffMapping.id)
                .subscribe(function () {
                _this.router.navigate(['/staff-mapping']);
            }, function (error) {
                console.log('error', error);
                var message = error.error;
                window.alert(message);
            });
        }
    };
    StaffMappingDetailComponent.prototype.transformToFormValue = function (staffMapping, categoryOptions, staffOptions) {
        return {
            staff: staffMapping.id ? staffOptions.find(function (each) { return each.id === staffMapping.id; }) : null,
            categories: categoryOptions.map(function (each) { return staffMapping.categories.map(function (each) { return each.id; }).indexOf(each.id) !== -1; }),
            keywords: !staffMapping.keywords || !staffMapping.keywords.length ? '' : staffMapping.keywords.join(',')
        };
    };
    StaffMappingDetailComponent.prototype.transformToModel = function (formValue, categoryOptions) {
        return {
            id: formValue['staff'].id,
            firstname: formValue['staff'].firstname,
            lastname: formValue['staff'].lastname,
            categories: categoryOptions.filter(function (each, i) { return formValue['categories'][i]; }),
            keywords: formValue['keywords'].split(',').map(function (each) { return each.trim(); }).filter(function (each) { return each.length; })
        };
    };
    StaffMappingDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-staff-mapping-detail',
            template: __webpack_require__(/*! ./staff-mapping-detail.component.html */ "./src/app/staff-mapping-detail/staff-mapping-detail.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services__WEBPACK_IMPORTED_MODULE_4__["StaffMappingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services__WEBPACK_IMPORTED_MODULE_4__["FormService"]])
    ], StaffMappingDetailComponent);
    return StaffMappingDetailComponent;
}());



/***/ }),

/***/ "./src/app/staff-mapping/staff-mapping.component.html":
/*!************************************************************!*\
  !*** ./src/app/staff-mapping/staff-mapping.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h5 class=\"card-header\">Staff mapping</h5>\n<h6 class=\"mt-4\"><a routerLink=\"/staff-mapping/create\">+ Create staff mapping</a></h6>\n\n<table class=\"table table-hover table-sm mt-4\" *ngIf=\"results && results.length\">\n  <thead>\n    <tr>\n      <th>Staff name</th>\n      <th>Categories</th>\n      <th>Keywords</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let result of results\">\n      <td><a routerLink=\"/staff-mapping/{{result.id}}\">{{result | fullname}}</a></td>\n      <td>\n        <ul>\n          <li *ngFor=\"let item of result.categories\">{{item.name}}</li>\n        </ul>\n      </td>\n      <td>\n        <ul>\n          <li *ngFor=\"let item of result.keywords\">{{item}}</li>\n        </ul>\n      </td>\n    </tr>\n  </tbody>\n</table>\n<app-empty-results *ngIf=\"results && !results.length\"></app-empty-results>\n"

/***/ }),

/***/ "./src/app/staff-mapping/staff-mapping.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/staff-mapping/staff-mapping.component.ts ***!
  \**********************************************************/
/*! exports provided: StaffMappingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffMappingComponent", function() { return StaffMappingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var StaffMappingComponent = /** @class */ (function () {
    function StaffMappingComponent(route) {
        this.route = route;
    }
    StaffMappingComponent.prototype.ngOnInit = function () {
        this.results = this.route.snapshot.data['staffMappings'];
    };
    StaffMappingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-staff-mapping',
            template: __webpack_require__(/*! ./staff-mapping.component.html */ "./src/app/staff-mapping/staff-mapping.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], StaffMappingComponent);
    return StaffMappingComponent;
}());



/***/ }),

/***/ "./src/app/types/index.ts":
/*!********************************!*\
  !*** ./src/app/types/index.ts ***!
  \********************************/
/*! exports provided: SERVERITY_LEVEL_1, SERVERITY_LEVEL_2, SERVERITY_LEVEL_3, SERVERITY_LEVELS, STATUS_CREATED, STATUS_TO_DO, STATUS_WORKING, STATUS_DONE_COMPLETED, STATUS_DONE_DELETED, STATUS_DONE_UNSOLVED, STATUSES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _severity_level__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./severity-level */ "./src/app/types/severity-level.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SERVERITY_LEVEL_1", function() { return _severity_level__WEBPACK_IMPORTED_MODULE_0__["SERVERITY_LEVEL_1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SERVERITY_LEVEL_2", function() { return _severity_level__WEBPACK_IMPORTED_MODULE_0__["SERVERITY_LEVEL_2"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SERVERITY_LEVEL_3", function() { return _severity_level__WEBPACK_IMPORTED_MODULE_0__["SERVERITY_LEVEL_3"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SERVERITY_LEVELS", function() { return _severity_level__WEBPACK_IMPORTED_MODULE_0__["SERVERITY_LEVELS"]; });

/* harmony import */ var _status__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./status */ "./src/app/types/status.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STATUS_CREATED", function() { return _status__WEBPACK_IMPORTED_MODULE_1__["STATUS_CREATED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STATUS_TO_DO", function() { return _status__WEBPACK_IMPORTED_MODULE_1__["STATUS_TO_DO"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STATUS_WORKING", function() { return _status__WEBPACK_IMPORTED_MODULE_1__["STATUS_WORKING"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STATUS_DONE_COMPLETED", function() { return _status__WEBPACK_IMPORTED_MODULE_1__["STATUS_DONE_COMPLETED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STATUS_DONE_DELETED", function() { return _status__WEBPACK_IMPORTED_MODULE_1__["STATUS_DONE_DELETED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STATUS_DONE_UNSOLVED", function() { return _status__WEBPACK_IMPORTED_MODULE_1__["STATUS_DONE_UNSOLVED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STATUSES", function() { return _status__WEBPACK_IMPORTED_MODULE_1__["STATUSES"]; });





/***/ }),

/***/ "./src/app/types/severity-level.ts":
/*!*****************************************!*\
  !*** ./src/app/types/severity-level.ts ***!
  \*****************************************/
/*! exports provided: SERVERITY_LEVEL_1, SERVERITY_LEVEL_2, SERVERITY_LEVEL_3, SERVERITY_LEVELS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVERITY_LEVEL_1", function() { return SERVERITY_LEVEL_1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVERITY_LEVEL_2", function() { return SERVERITY_LEVEL_2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVERITY_LEVEL_3", function() { return SERVERITY_LEVEL_3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVERITY_LEVELS", function() { return SERVERITY_LEVELS; });
var SERVERITY_LEVEL_1 = {
    level: 1,
    name: 'Suggestion'
};
var SERVERITY_LEVEL_2 = {
    level: 2,
    name: 'Normal'
};
var SERVERITY_LEVEL_3 = {
    level: 3,
    name: 'High impact'
};
var SERVERITY_LEVELS = [
    SERVERITY_LEVEL_1, SERVERITY_LEVEL_2, SERVERITY_LEVEL_3
];


/***/ }),

/***/ "./src/app/types/status.ts":
/*!*********************************!*\
  !*** ./src/app/types/status.ts ***!
  \*********************************/
/*! exports provided: STATUS_CREATED, STATUS_TO_DO, STATUS_WORKING, STATUS_DONE_COMPLETED, STATUS_DONE_DELETED, STATUS_DONE_UNSOLVED, STATUSES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATUS_CREATED", function() { return STATUS_CREATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATUS_TO_DO", function() { return STATUS_TO_DO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATUS_WORKING", function() { return STATUS_WORKING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATUS_DONE_COMPLETED", function() { return STATUS_DONE_COMPLETED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATUS_DONE_DELETED", function() { return STATUS_DONE_DELETED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATUS_DONE_UNSOLVED", function() { return STATUS_DONE_UNSOLVED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATUSES", function() { return STATUSES; });
var STATUS_CREATED = {
    value: 'CREATED',
    name: 'Waiting for relevant staff'
};
var STATUS_TO_DO = {
    value: 'TO_DO',
    name: 'Acknowledged, waiting for processing'
};
var STATUS_WORKING = {
    value: 'WORKING',
    name: 'In processing'
};
var STATUS_DONE_COMPLETED = {
    value: 'DONE_COMPLETED',
    name: 'Completed'
};
var STATUS_DONE_DELETED = {
    value: 'DONE_DELETED',
    name: 'Close by owner'
};
var STATUS_DONE_UNSOLVED = {
    value: 'DONE_UNSOLVED',
    name: 'Close by staff'
};
var STATUSES = [
    STATUS_CREATED, STATUS_TO_DO, STATUS_WORKING, STATUS_DONE_COMPLETED, STATUS_DONE_DELETED, STATUS_DONE_UNSOLVED
];


/***/ }),

/***/ "./src/app/utils/date-util.ts":
/*!************************************!*\
  !*** ./src/app/utils/date-util.ts ***!
  \************************************/
/*! exports provided: formatNgbDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatNgbDate", function() { return formatNgbDate; });
var formatNgbDate = function (ngbDate) {
    if (!ngbDate || !ngbDate.day || !ngbDate.month || !ngbDate.year)
        return null;
    var month, day;
    if (ngbDate.month.toString().length < 2) {
        month = "0" + ngbDate.month;
    }
    else {
        month = ngbDate.month.toString();
    }
    if (ngbDate.day.toString().length < 2) {
        day = "0" + ngbDate.day;
    }
    else {
        day = ngbDate.day.toString();
    }
    return ngbDate.year + "-" + month + "-" + day;
};


/***/ }),

/***/ "./src/app/utils/empty-results/empty-results.component.html":
/*!******************************************************************!*\
  !*** ./src/app/utils/empty-results/empty-results.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"empty-results\">\n  Sorry, we could not match your search criteria.\n</div>"

/***/ }),

/***/ "./src/app/utils/empty-results/empty-results.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/utils/empty-results/empty-results.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".empty-results {\n  padding: 2.5rem;\n  margin: 1rem;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VzL1NpdGVzL3N3ZS9zd2Uvc3dlLWNvbXBsYWludC9zcmMvYXBwL3V0aWxzL2VtcHR5LXJlc3VsdHMvZW1wdHktcmVzdWx0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGVBQW9CO0VBQ3BCLFlBQW1CO0VBQ25CLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdXRpbHMvZW1wdHktcmVzdWx0cy9lbXB0eS1yZXN1bHRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL192YXJpYWJsZXNcIjtcbi5lbXB0eS1yZXN1bHRzIHtcbiAgcGFkZGluZzogJHNwYWNlciAqIDU7XG4gIG1hcmdpbjogJHNwYWNlciAqIDI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/utils/empty-results/empty-results.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/utils/empty-results/empty-results.component.ts ***!
  \****************************************************************/
/*! exports provided: EmptyResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyResultsComponent", function() { return EmptyResultsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EmptyResultsComponent = /** @class */ (function () {
    function EmptyResultsComponent() {
    }
    EmptyResultsComponent.prototype.ngOnInit = function () {
    };
    EmptyResultsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-empty-results',
            template: __webpack_require__(/*! ./empty-results.component.html */ "./src/app/utils/empty-results/empty-results.component.html"),
            styles: [__webpack_require__(/*! ./empty-results.component.scss */ "./src/app/utils/empty-results/empty-results.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EmptyResultsComponent);
    return EmptyResultsComponent;
}());



/***/ }),

/***/ "./src/app/utils/form-control-error/form-control-error.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/utils/form-control-error/form-control-error.component.ts ***!
  \**************************************************************************/
/*! exports provided: FormControlErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormControlErrorComponent", function() { return FormControlErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var FormControlErrorComponent = /** @class */ (function () {
    function FormControlErrorComponent() {
    }
    FormControlErrorComponent.prototype.isError = function () {
        return this.control.touched && this.control.errors && this.control.errors[this.error];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"])
    ], FormControlErrorComponent.prototype, "control", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], FormControlErrorComponent.prototype, "error", void 0);
    FormControlErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'utils-form-control-error',
            template: "\n  <small class=\"text-danger\" *ngIf=\"isError()\">\n    <ng-content></ng-content>\n  </small>\n"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FormControlErrorComponent);
    return FormControlErrorComponent;
}());



/***/ }),

/***/ "./src/app/utils/http-util.ts":
/*!************************************!*\
  !*** ./src/app/utils/http-util.ts ***!
  \************************************/
/*! exports provided: removeNullParams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeNullParams", function() { return removeNullParams; });
var removeNullParams = function (params) {
    Object.keys(params).forEach(function (key) {
        if (params[key] === null || params[key] === undefined) {
            delete params[key];
        }
    });
    return params;
};


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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/es/Sites/swe/swe/swe-complaint/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map