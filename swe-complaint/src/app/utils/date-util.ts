export const formatNgbDate = (ngbDate: { day: number, month: number, year: number }): string => {
  if (!ngbDate || !ngbDate.day || !ngbDate.month || !ngbDate.year) return null;
  let month, day;
  if (ngbDate.month.toString().length < 2) {
    month = `0${ngbDate.month}`;
  } else {
    month = ngbDate.month.toString();
  }
  if (ngbDate.day.toString().length < 2) {
    day = `0${ngbDate.day}`;
  } else {
    day = ngbDate.day.toString();
  }
  return `${ngbDate.year}-${month}-${day}`;
}
