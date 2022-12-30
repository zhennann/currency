export default function debounce(func, wait) {
  let i = 0;
  return function (...args) {
    const ctx = this;
    if (i !== 0) clearTimeout(i);
    i = setTimeout(() => {
      func.apply(ctx, args);
    }, wait);
  };
}