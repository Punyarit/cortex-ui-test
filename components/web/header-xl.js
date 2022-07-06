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
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeaderXl = void 0;
const lit_1 = require("lit");
const decorators_js_1 = require("lit/decorators.js");
var element;
(function (element) {
    element["name"] = "header-xl";
})(element || (element = {}));
let HeaderXl = class HeaderXl extends lit_1.LitElement {
    render() {
        return (0, lit_1.html) ` <span class="font">${this.p}<slot></slot></span> `;
    }
    updated() {
        const [fontWeight, color] = this.attributes;
        this.style.setProperty(`--font-weight`, fontWeight?.name || 'regular');
        this.style.setProperty(`--color`, color?.name || 'gray-500');
    }
};
HeaderXl.styles = (0, lit_1.css) `
    .font {
      font-weight: var(--font-weight);
      color: var(--color);
    }
  `;
__decorate([
    (0, decorators_js_1.property)({ type: String }),
    __metadata("design:type", String)
], HeaderXl.prototype, "p", void 0);
HeaderXl = __decorate([
    (0, decorators_js_1.customElement)(element.name)
], HeaderXl);
exports.HeaderXl = HeaderXl;
//# sourceMappingURL=header-xl.js.map