export class Currency {
    fixed;
    exp;
    zero;
    constructor(options) {
        if (options === false)
            throw new Error("Currency options cannot be false");
        if (!options || typeof options !== "object") {
            options = {};
        }
        this.fixed = options.fixed ?? 2;
        this.exp = options.exp ?? this.fixed;
        this.zero = options.zero ?? this.fixed;
    }
    format(value) {
        if (isNaN(value))
            return String(value);
        const str = (Number(value) / Math.pow(10, this.exp)).toFixed(this.fixed);
        return _trimZero(str, this.zero);
    }
    update(value) {
        if (isNaN(value))
            return value;
        return Number((Number(value) * Math.pow(10, this.exp)).toFixed(0));
    }
}
function _trimZero(str, zero) {
    let indexZero = str.indexOf(".");
    if (indexZero === -1)
        return str;
    for (let index = str.length - 1; index > indexZero; index--) {
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
//# sourceMappingURL=index.js.map