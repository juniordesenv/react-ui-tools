export const dateToBrFormat = (date: Date): string => {
  if (!date) return null;
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

export const dateBrToDate = (dateBr: string, hours?: number, minutes?: number): Date => {
  console.log(dateBr, hours, minutes);
  if (!dateBr) return null;
  const [
    day,
    month,
    year,
  ] = dateBr.toString().split('/');
  return new Date(Number(year), Number(month) - 1, Number(day), hours || null, minutes || null);
};
