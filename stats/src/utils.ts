export const dateStringToDate = (dateString: string): Date => {
  const dateParts = dateString.split('/').map((value: string): number => {
    return parseInt(value);
  });

  // Note: date format -> year/month/day
  // dateParts[1] - 1 -> because january is at position 0
  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
