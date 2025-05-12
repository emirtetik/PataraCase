export function getPagination(current: number, total: number) {
  const delta = 2; 
  const range: number[] = [];
  const rangeWithDots: (number | string)[] = [];
  let last: number | undefined;

  for (let i = 1; i <= total; i++) {
    if (
      i <= 3 || 
      i > total - 3 ||
      (i >= current - delta && i <= current + delta)
    ) {
      range.push(i);
    }
  }

  for (const i of range) {
    if (last !== undefined) {
      if (i - last === 2) {
        rangeWithDots.push(last + 1); 
      } else if (i - last > 2) {
        rangeWithDots.push("..."); 
      }
    }
    rangeWithDots.push(i); 
    last = i;
  }

  return rangeWithDots;
}
