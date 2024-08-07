export function dateFormatChanger(rawDate: string): string {
  const date = new Date(rawDate);
  const formattedDate = date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return formattedDate;
}
