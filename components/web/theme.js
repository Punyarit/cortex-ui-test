"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Theme = void 0;
const lit_1 = require("lit");
const decorators_js_1 = require("lit/decorators.js");
const colors_theme_1 = require("../themes/colors.theme");
const sizes_theme_1 = require("../themes/sizes.theme");
const font_weights_theme_1 = require("../themes/font-weights.theme");
const theme_type_1 = require("../types/theme.type");
const element_base_1 = require("../base/element-base");
const ELEMENT_NAME = 'c-theme';
let Theme = class Theme extends element_base_1.ElementBase {
    constructor() {
        super(...arguments);
        this.render = () => (0, lit_1.html) ` <slot></slot> `;
    }
    connectedCallback() {
        super.connectedCallback();
        this.setThemeStyles();
    }
    onSetSize(size) {
        const currentColor = this.getThemeClassName(theme_type_1.ThemeIndex.color);
        this.setClassName(size, currentColor);
    }
    onSetTheme(color) {
        const currentSize = this.getThemeClassName(theme_type_1.ThemeIndex.size);
        this.setClassName(currentSize, color);
    }
    getThemeClassName(index) {
        return this.className.split(' ')[index];
    }
    setThemeStyles() {
        const [sizeTheme, colorTheme] = this.attributes;
        this.setClassName(sizeTheme?.name, colorTheme?.name);
    }
    setClassName(sizeTheme, colorTheme) {
        this.className = `${sizeTheme || 'normal'} ${colorTheme || 'light'}`;
    }
};
Theme.styles = [colors_theme_1.colors, font_weights_theme_1.fontWeights, sizes_theme_1.sizes];
Theme = __decorate([
    (0, decorators_js_1.customElement)(ELEMENT_NAME)
], Theme);
exports.Theme = Theme;
