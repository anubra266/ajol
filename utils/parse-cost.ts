export function parseCost(value: any, hasSuffix?: boolean) {
  var suffixes = ["", "k", "m", "b", "t"];
  var suffixNum = Math.floor(("" + value).length / 3);
  var shortValue: any = parseFloat(
    suffixNum != 0 ? value / Math.pow(1000, suffixNum) : value
  );
  if (shortValue % 1 != 0) {
    shortValue = shortValue.toFixed(1);
  }
  shortValue += hasSuffix ? suffixes[suffixNum] : "";
  return shortValue;
}

export const parseSalary = (salary: any) => {
  const { start, end } = salary;

  return `${parseCost(start)} - ${parseCost(end, true)}`;
};
