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
var core_1 = require('@angular/core');
var book_1 = require('../data/book');
var BookComponent = (function () {
    function BookComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', book_1.Book)
    ], BookComponent.prototype, "data", void 0);
    BookComponent = __decorate([
        core_1.Component({
            selector: 'book',
            template: "\n  <a title=\"{{data?.title}}\" href=\"{{data?.url}}\" target=\"_blank\"><img src=\"{{data?.src}}\" alt=\"{{data?.title}}\"></a>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], BookComponent);
    return BookComponent;
}());
exports.BookComponent = BookComponent;
//# sourceMappingURL=book.component.js.map