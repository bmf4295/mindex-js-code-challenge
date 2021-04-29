(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 class=\"page-title\">Mindex Coding Challenge</h1>\n<app-employee-list></app-employee-list>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/editDialogue/editDialogue.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/editDialogue/editDialogue.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"employee\">\r\n  <div *ngIf=\"opType =='edit'\">\r\n\r\n    <h1 mat-dialog-title>Update Compensation</h1>\r\n\r\n    <div mat-dialog-content>\r\n\r\n      <mat-form-field>\r\n        <mat-label>First Name</mat-label>\r\n        <input matInput disabled value=\"{{employee.firstName}}\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <mat-label>last Name</mat-label>\r\n        <input matInput disabled value=\"{{employee.lastName}}\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <mat-label>Position</mat-label>\r\n        <input matInput disabled value=\"{{employee.position}}\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <mat-label>Compensation</mat-label>\r\n        <input matInput type=\"number\" required placeholder=\"$0\" [(ngModel)]=\"employee.compensation\">\r\n      </mat-form-field>\r\n\r\n    </div>\r\n\r\n    <div mat-dialog-actions>\r\n\r\n      <button mat-flat-button color=\"#ececec\" [mat-dialog-close]=\"employee\">Save</button>\r\n      <button mat-stroked-button (click)=\"closeDialog()\">Cancel</button>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"opType =='delete'\">\r\n\r\n    <h1 mat-dialog-title>Delete Direct Report</h1>\r\n\r\n    <div mat-dialog-content>\r\n      <p>Delete \"{{employee.firstName}} {{employee.lastName}}\"?</p>\r\n      <p><b>This action is permanent.</b></p>\r\n    </div>\r\n\r\n    <div mat-dialog-actions>\r\n      <button mat-flat-button color=\"warn\" [mat-dialog-close]=\"employee\">Confirm</button>\r\n      <button mat-stroked-button (click)=\"closeDialog()\">Cancel</button>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee-list/employee-list.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/employee-list/employee-list.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-grid-list class=\"employee-list\" cols=\"1\">\r\n  <div class=\"employee\" *ngFor=\"let emp of employees\">\r\n    <app-employee (crudOperation)= \"doCrudOp($event)\" [employee]=\"emp\"></app-employee>\r\n\r\n  </div>\r\n</mat-grid-list>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee/employee.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/employee/employee.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"employee\">\r\n  <mat-card-header class=\"empName\" >\r\n    <mat-card-title><h4>{{employee.lastName}}, {{employee.firstName}} : {{employee.position}} </h4></mat-card-title>\r\n    <mat-card-subtitle>Employee ID: {{employee.id}} | Number of Direct Reports: {{numReports}}</mat-card-subtitle>\r\n  </mat-card-header>\r\n  <hr>\r\n  <mat-card-content>\r\n   <div class = \"jobInfo\">\r\n      <dt>Salary: ${{employee.compensation}}</dt>\r\n    </div>\r\n\r\n  </mat-card-content>\r\n  <mat-card-content>\r\n    <dt class=\"reportHeader\">People Reporting to them:</dt>\r\n    <div class=\"report\" *ngFor=\"let report of employee.reports\">\r\n      <p class=\"reportName\"> {{report.firstName}} {{report.lastName}} | Position: {{report.position}} | Salary: ${{report.compensation}}</p>\r\n      <div class=\"buttons\">\r\n      <button mat-flat-button  color=\"primary\" (click)=\"editEmployee(report.id)\">Edit</button>\r\n      <button mat-flat-button color=\"warn\" (click)=\"deleteEmployee(report.id)\">Delete</button>\r\n    </div>\r\n    </div>\r\n  </mat-card-content>\r\n</mat-card>\r\n<edit-dialogue></edit-dialogue>\r\n");

/***/ }),

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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".page-title {\r\n  text-align: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLXRpdGxlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
var animations_1 = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/animations.js");
var angular_in_memory_web_api_1 = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/__ivy_ngcc__/index.js");
var app_component_1 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var backendless_mock_service_1 = __webpack_require__(/*! ./backendless-mock.service */ "./src/app/backendless-mock.service.ts");
var employee_component_1 = __webpack_require__(/*! ./employee/employee.component */ "./src/app/employee/employee.component.ts");
var employee_list_component_1 = __webpack_require__(/*! ./employee-list/employee-list.component */ "./src/app/employee-list/employee-list.component.ts");
var employee_service_1 = __webpack_require__(/*! ./employee.service */ "./src/app/employee.service.ts");
var card_1 = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/card.js");
var grid_list_1 = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/grid-list.js");
var input_1 = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/input.js");
var menu_1 = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/menu.js");
var icon_1 = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/icon.js");
var button_1 = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/button.js");
var editDialogue_component_1 = __webpack_require__(/*! ./editDialogue/editDialogue.component */ "./src/app/editDialogue/editDialogue.component.ts");
var dialog_1 = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                employee_component_1.EmployeeComponent,
                employee_list_component_1.EmployeeListComponent,
                editDialogue_component_1.editDialogue
            ],
            imports: [
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                forms_1.FormsModule,
                http_1.HttpClientModule,
                angular_in_memory_web_api_1.HttpClientInMemoryWebApiModule.forRoot(backendless_mock_service_1.BackendlessMockService, {
                    apiBase: 'api/',
                    delay: 250,
                    passThruUnknownUrl: true,
                    post204: false,
                    put204: false
                }),
                card_1.MatCardModule,
                grid_list_1.MatGridListModule,
                input_1.MatInputModule,
                menu_1.MatMenuModule,
                icon_1.MatIconModule,
                dialog_1.MatDialogModule,
                button_1.MatButtonModule
            ],
            providers: [{ provide: editDialogue_component_1.editDialogue, useValue: {} },
                { provide: dialog_1.MatDialogRef, useValue: {} },
                { provide: dialog_1.MAT_DIALOG_DATA, useValue: {} },
                employee_service_1.EmployeeService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/backendless-mock.service.ts":
/*!*********************************************!*\
  !*** ./src/app/backendless-mock.service.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var BackendlessMockService = /** @class */ (function () {
    function BackendlessMockService() {
    }
    BackendlessMockService.prototype.createDb = function () {
        var employees = [
            {
                id: 1,
                firstName: 'Brian',
                lastName: 'McGee',
                position: 'CEO',
                directReports: [2, 3]
            },
            {
                id: 2,
                firstName: 'Homer',
                lastName: 'Thompson',
                position: 'Dev Manager',
                directReports: [4]
            },
            {
                id: 3,
                firstName: 'Rock',
                lastName: 'Strongo',
                position: 'Lead Tester'
            },
            {
                id: 4,
                firstName: 'Max',
                lastName: 'Power',
                position: 'Junior Software Engineer'
            }
        ];
        return { employees: employees };
    };
    return BackendlessMockService;
}());
exports.BackendlessMockService = BackendlessMockService;


/***/ }),

/***/ "./src/app/editDialogue/editDialogue.component.css":
/*!*********************************************************!*\
  !*** ./src/app/editDialogue/editDialogue.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXREaWFsb2d1ZS9lZGl0RGlhbG9ndWUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/editDialogue/editDialogue.component.ts":
/*!********************************************************!*\
  !*** ./src/app/editDialogue/editDialogue.component.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var dialog_1 = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
var editDialogue = /** @class */ (function () {
    function editDialogue(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.opType = "";
        this.opType = data.opType;
        this.employee = data.employee;
    }
    editDialogue.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    editDialogue.ctorParameters = function () { return [
        { type: dialog_1.MatDialogRef },
        { type: undefined, decorators: [{ type: core_1.Inject, args: [dialog_1.MAT_DIALOG_DATA,] }] }
    ]; };
    editDialogue = __decorate([
        core_1.Component({
            selector: 'edit-dialogue',
            template: __importDefault(__webpack_require__(/*! raw-loader!./editDialogue.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/editDialogue/editDialogue.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./editDialogue.component.css */ "./src/app/editDialogue/editDialogue.component.css")).default]
        }),
        __param(1, core_1.Inject(dialog_1.MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [dialog_1.MatDialogRef, Object])
    ], editDialogue);
    return editDialogue;
}());
exports.editDialogue = editDialogue;


/***/ }),

/***/ "./src/app/employee-list/employee-list.component.css":
/*!***********************************************************!*\
  !*** ./src/app/employee-list/employee-list.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("app-employee{\r\nmin-width: 80%;\r\nmargin: 0;\r\nmax-height: 200px;\r\n}\r\n.employee{\r\nmargin-bottom: 20px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWUtbGlzdC9lbXBsb3llZS1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxjQUFjO0FBQ2QsU0FBUztBQUNULGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvZW1wbG95ZWUtbGlzdC9lbXBsb3llZS1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtZW1wbG95ZWV7XHJcbm1pbi13aWR0aDogODAlO1xyXG5tYXJnaW46IDA7XHJcbm1heC1oZWlnaHQ6IDIwMHB4O1xyXG59XHJcbi5lbXBsb3llZXtcclxubWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuIl19 */");

/***/ }),

/***/ "./src/app/employee-list/employee-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/employee-list/employee-list.component.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var employee_service_1 = __webpack_require__(/*! ../employee.service */ "./src/app/employee.service.ts");
var EmployeeListComponent = /** @class */ (function () {
    function EmployeeListComponent(employeeService) {
        this.employeeService = employeeService;
        this.employees = [];
    }
    EmployeeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.employeeService.getAll()
            .pipe(operators_1.reduce(function (emps, e) { return emps.concat(e); }, []), operators_1.map(function (emps) { return _this.employees = emps; }), operators_1.catchError(this.handleError.bind(this))).subscribe();
    };
    EmployeeListComponent.prototype.handleError = function (e) {
        console.error(e);
        return this.errorMessage = e.message || 'Unable to retrieve employees';
    };
    EmployeeListComponent.prototype.doCrudOp = function (response) {
        if (response.operationType === 'edit') {
            return this.updateEmployee(response.employee);
        }
        this.deleteEmployee(response.employee);
    };
    EmployeeListComponent.prototype.updateEmployee = function (employeeToUpdate) {
        var _this = this;
        this.employeeService.save(employeeToUpdate).subscribe(function (res) {
            _this.employees.forEach(function (emp) {
                if (emp.id === res.id) {
                    emp.compensation = res.compensation;
                }
                if (emp.reports !== undefined) {
                    emp.reports.forEach(function (e) {
                        if (e.id === res.id) {
                            e.compensation = res.compensation;
                        }
                    });
                }
            });
        });
    };
    EmployeeListComponent.prototype.deleteEmployee = function (employeeToDelete) {
        this.employeeService.remove(employeeToDelete);
        this.employees.forEach(function (emp) {
            if (emp.directReports !== undefined) {
                emp.directReports = emp.directReports.filter(function (report) { return report !== emp.id; });
            }
            emp.reports = emp.reports.filter(function (e) { return e.id !== employeeToDelete.id; });
        });
        this.employees = this.employees.filter(function (emp) { return emp.id !== employeeToDelete.id; });
    };
    EmployeeListComponent.ctorParameters = function () { return [
        { type: employee_service_1.EmployeeService }
    ]; };
    EmployeeListComponent = __decorate([
        core_1.Component({
            selector: 'app-employee-list',
            template: __importDefault(__webpack_require__(/*! raw-loader!./employee-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee-list/employee-list.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./employee-list.component.css */ "./src/app/employee-list/employee-list.component.css")).default]
        }),
        __metadata("design:paramtypes", [employee_service_1.EmployeeService])
    ], EmployeeListComponent);
    return EmployeeListComponent;
}());
exports.EmployeeListComponent = EmployeeListComponent;


/***/ }),

/***/ "./src/app/employee.service.ts":
/*!*************************************!*\
  !*** ./src/app/employee.service.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var EmployeeService = /** @class */ (function () {
    function EmployeeService(http) {
        this.http = http;
        this.url = '/api/employees';
    }
    EmployeeService.prototype.getAll = function () {
        return this.http.get(this.url)
            .pipe(operators_1.flatMap(function (emps) { return rxjs_1.from(emps); }), operators_1.catchError(this.handleError));
    };
    EmployeeService.prototype.get = function (id) {
        return this.http.get(this.url + "/" + id)
            .pipe(operators_1.catchError(this.handleError));
    };
    EmployeeService.prototype.save = function (emp) {
        var response = (!!emp.id) ? this.put(emp) : this.post(emp);
        return response.pipe(operators_1.catchError(this.handleError));
    };
    EmployeeService.prototype.remove = function (emp) {
        return this.http
            .delete(this.url + "/" + emp.id)
            .pipe(operators_1.catchError(this.handleError));
    };
    EmployeeService.prototype.post = function (emp) {
        return this.http.post(this.url, emp);
    };
    EmployeeService.prototype.put = function (emp) {
        return this.http.put(this.url + "/" + emp.id, emp);
    };
    EmployeeService.prototype.handleError = function (res) {
        return rxjs_1.throwError(res.error || 'Server error');
    };
    EmployeeService.ctorParameters = function () { return [
        { type: http_1.HttpClient }
    ]; };
    EmployeeService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], EmployeeService);
    return EmployeeService;
}());
exports.EmployeeService = EmployeeService;


/***/ }),

/***/ "./src/app/employee.ts":
/*!*****************************!*\
  !*** ./src/app/employee.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Employee = /** @class */ (function () {
    function Employee() {
    }
    return Employee;
}());
exports.Employee = Employee;


/***/ }),

/***/ "./src/app/employee/employee.component.css":
/*!*************************************************!*\
  !*** ./src/app/employee/employee.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button{\r\n  margin-right: 3px;\r\n}\r\np{\r\n  margin-right: 70px;\r\n}\r\n.employee{\r\nmin-width: 50%;\r\n  height: auto;\r\n display: -webkit-box;\r\n display: flex;\r\n -webkit-box-orient:vertical;\r\n -webkit-box-direction:normal;\r\n         flex-direction:column;\r\nbox-shadow: black;\r\nborder: black 1px;\r\n}\r\n.empName{\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: row;\r\n  flex-wrap: wrap;\r\n}\r\n.report{\r\n  background-color: #ececec;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: justify;\r\n          justify-content: space-between;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  padding:5px 5px;\r\n\r\n}\r\n.reportHeader{\r\n  background-color: #c7c6c6;\r\n  padding: 8px;\r\n}\r\n.reportName{\r\nmargin-bottom: 1px;\r\nmargin-top: 1px;\r\nfloat: left;\r\n}\r\n.buttons{\r\n  min-width: 20px;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: row;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWUvZW1wbG95ZWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7QUFDQSxjQUFjO0VBQ1osWUFBWTtDQUNiLG9CQUFhO0NBQWIsYUFBYTtDQUNiLDJCQUFxQjtDQUFyQiw0QkFBcUI7U0FBckIscUJBQXFCO0FBQ3RCLGlCQUFpQjtBQUNqQixpQkFBaUI7QUFDakI7QUFDQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDhCQUFtQjtFQUFuQiw2QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBOEI7VUFBOUIsOEJBQThCO0VBQzlCLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsZUFBZTs7QUFFakI7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQixlQUFlO0FBQ2YsV0FBVztBQUNYO0FBRUE7RUFDRSxlQUFlO0VBQ2YsOEJBQW1CO0VBQW5CLDZCQUFtQjtVQUFuQixtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9lbXBsb3llZS9lbXBsb3llZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9ue1xyXG4gIG1hcmdpbi1yaWdodDogM3B4O1xyXG59XHJcbnB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA3MHB4O1xyXG59XHJcbi5lbXBsb3llZXtcclxubWluLXdpZHRoOiA1MCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gZGlzcGxheTogZmxleDtcclxuIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuYm94LXNoYWRvdzogYmxhY2s7XHJcbmJvcmRlcjogYmxhY2sgMXB4O1xyXG59XHJcbi5lbXBOYW1le1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuLnJlcG9ydHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzo1cHggNXB4O1xyXG5cclxufVxyXG4ucmVwb3J0SGVhZGVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjN2M2YzY7XHJcbiAgcGFkZGluZzogOHB4O1xyXG59XHJcbi5yZXBvcnROYW1le1xyXG5tYXJnaW4tYm90dG9tOiAxcHg7XHJcbm1hcmdpbi10b3A6IDFweDtcclxuZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5idXR0b25ze1xyXG4gIG1pbi13aWR0aDogMjBweDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/employee/employee.component.ts":
/*!************************************************!*\
  !*** ./src/app/employee/employee.component.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var dialog_1 = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
var employee_service_1 = __webpack_require__(/*! ../employee.service */ "./src/app/employee.service.ts");
var employee_1 = __webpack_require__(/*! ../employee */ "./src/app/employee.ts");
var editDialogue_component_1 = __webpack_require__(/*! ../editDialogue/editDialogue.component */ "./src/app/editDialogue/editDialogue.component.ts");
var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent(employeeService, dialog) {
        this.dialog = dialog;
        this.crudOperation = new core_1.EventEmitter();
        this.reports = [];
        this.numReports = 0;
        this.employeeService = employeeService;
        this.matDialog = dialog;
    }
    EmployeeComponent.prototype.ngOnInit = function () {
        this.updateReports();
    };
    EmployeeComponent.prototype.updateReports = function () {
        var _this = this;
        //check if the employee has any direct reports
        if (this.employee.directReports !== undefined) {
            //if they do add it to the count of reports
            this.numReports += this.employee.directReports.length;
            //for each direct report get the employee
            this.employee.directReports.forEach(function (reportID) {
                _this.employeeService.get(reportID).subscribe(function (child) {
                    //Store it in the reports array
                    _this.reports.push(child);
                    //check if the child has any direct reports
                    if (child.directReports !== undefined) {
                        //if they do add to the number of reports
                        _this.numReports += child.directReports.length;
                        //add each direct report of child to the reports array
                        child.directReports.forEach(function (childReportID) {
                            _this.employeeService.get(childReportID).subscribe(function (child2) {
                                _this.reports.push(child2);
                            });
                        });
                    }
                });
            });
        }
        this.employee.reports = this.reports;
    };
    EmployeeComponent.prototype.editEmployee = function (id) {
        var _this = this;
        this.employeeService.get(id).subscribe(function (employee) {
            var dialogRef = _this.dialog.open(editDialogue_component_1.editDialogue, {
                width: '300px',
                data: {
                    employee: employee,
                    opType: 'edit'
                }
            });
            dialogRef.afterClosed().subscribe(function (result) {
                _this.crudOperation.emit({
                    operationType: 'edit',
                    employee: result,
                });
            });
        });
    };
    EmployeeComponent.prototype.deleteEmployee = function (id) {
        var _this = this;
        this.employeeService.get(id).subscribe(function (employee) {
            var dialogRef = _this.dialog.open(editDialogue_component_1.editDialogue, {
                width: '300px',
                data: {
                    employee: employee,
                    opType: 'delete'
                }
            });
            dialogRef.afterClosed().subscribe(function (result) {
                _this.crudOperation.emit({
                    operationType: 'delete',
                    employee: result
                });
            });
        });
    };
    EmployeeComponent.ctorParameters = function () { return [
        { type: employee_service_1.EmployeeService },
        { type: dialog_1.MatDialog }
    ]; };
    __decorate([
        core_1.Input(),
        __metadata("design:type", employee_1.Employee)
    ], EmployeeComponent.prototype, "employee", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], EmployeeComponent.prototype, "crudOperation", void 0);
    EmployeeComponent = __decorate([
        core_1.Component({
            selector: 'app-employee',
            template: __importDefault(__webpack_require__(/*! raw-loader!./employee.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee/employee.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./employee.component.css */ "./src/app/employee/employee.component.css")).default]
        }),
        __metadata("design:paramtypes", [employee_service_1.EmployeeService, dialog_1.MatDialog])
    ], EmployeeComponent);
    return EmployeeComponent;
}());
exports.EmployeeComponent = EmployeeComponent;


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
var environment_1 = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\fries\Downloads\mindex-js-code-challenge\mindex-js-code-challenge\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map