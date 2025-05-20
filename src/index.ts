export interface CurrencyOptions {
  fixed?: number;
  exp?: number;
  zero?: number;
}

export class Currency {
  private fixed: number;
  private exp: number;
  private zero: number;

  constructor(options?: CurrencyOptions | boolean | undefined) {
    if (options === false) throw new Error("Currency options cannot be false");
    if (!options || typeof options !== "object") {
      options = {};
    }
    this.fixed = options.fixed ?? 2;
    this.exp = options.exp ?? this.fixed;
    this.zero = options.zero ?? this.fixed;
  }

  format(value: number | string): string {
    if (isNaN(value as any)) return String(value);
    const str = (Number(value) / Math.pow(10, this.exp)).toFixed(this.fixed);
    return this._trimZero(str, this.zero);
  }

  update(value: number | string): number | string {
    if (isNaN(value as any)) return value;
    return Number((Number(value) * Math.pow(10, this.exp)).toFixed(0));
  }

  _trimZero(str: string, zero: number): string {
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
  }
}

export default function Currency1(
  options?: CurrencyOptions | boolean | undefined
) {
  if (options === false) return undefined;
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
