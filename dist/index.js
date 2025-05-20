"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Currency = void 0;
var Currency = /** @class */ (function () {
    function Currency(options) {
        var _a, _b, _c;
        if (options === false)
            throw new Error("Currency options cannot be false");
        if (!options || typeof options !== "object") {
            options = {};
        }
        this.fixed = (_a = options.fixed) !== null && _a !== void 0 ? _a : 2;
        this.exp = (_b = options.exp) !== null && _b !== void 0 ? _b : this.fixed;
        this.zero = (_c = options.zero) !== null && _c !== void 0 ? _c : this.fixed;
    }
    Currency.prototype.format = function (value) {
        if (isNaN(value))
            return String(value);
        var str = (Number(value) / Math.pow(10, this.exp)).toFixed(this.fixed);
        return _trimZero(str, this.zero);
    };
    Currency.prototype.update = function (value) {
        if (isNaN(value))
            return value;
        return Number((Number(value) * Math.pow(10, this.exp)).toFixed(0));
    };
    return Currency;
}());
exports.Currency = Currency;
function _trimZero(str, zero) {
    var indexZero = str.indexOf(".");
    if (indexZero === -1)
        return str;
    for (var index = str.length - 1; index > indexZero; index--) {
        if (str[index] === "0" && index - indexZero > zero) {
            str = str.substring(0, str.length - 1);
        }
        else {
            break;
        }
    }
    if (indexZero === str.length - 1) {
        str = str.substring(0, str.length - 1);
    }
    return str;
}
