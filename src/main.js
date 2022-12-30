export default function Currency(options) {
  if (!options || typeof options !== "object") {
    options = {};
  }
  const fixed = options.fixed !== undefined ? options.fixed : 2;
  const exp = options.exp !== undefined ? options.exp : fixed;
  const zero = options.zero !== undefined ? options.zero : fixed;
  return {
    format(value) {
      if (isNaN(value)) return value;
      const str = (Number(value) / Math.pow(10, exp)).toFixed(fixed);
      return this._trimZero(str, zero);
    },
    update(value) {
      if (isNaN(value)) return value;
      return Number((Number(value) * Math.pow(10, exp)).toFixed(0));
    },
    _trimZero(str, zero) {
      let indexZero = str.indexOf(".");
      if (indexZero === -1) return str;
      for (let index = str.length - 1; index > indexZero; index--) {
        if (str[index] === "0" && index - indexZero > zero) {
          str = str.substring(0, str.length - 1);
        } else {
          break;
        }
      }
      if (indexZero === str.length - 1) {
        str = str.substring(0, str.length - 1);
      }
      return str;
    },
  };
}
