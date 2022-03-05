export function stringToDate(strDate: string): any {
  //10/08/2018

  const valDate = strDate
    .split("/")
    .map((item: string): number => Number(item));

  return new Date(valDate[0], valDate[1] - 1, valDate[2]);
}
