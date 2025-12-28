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
    return _trimZero(str, this.zero);
  }

  update(value: number | string): number | undefined {
    if (isNaN(value as any)) return undefined;
    return Number((Number(value) * Math.pow(10, this.exp)).toFixed(0));
  }
}

function _trimZero(str: string, zero: number): string {
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
