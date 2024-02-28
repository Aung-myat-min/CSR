export function dateFormatChanger(rawDate: string): string {
  const parts = rawDate.split("/");
  const date = new Date(
    parseInt(parts[2]),
    parseInt(parts[1]) - 1,
    parseInt(parts[0])
  );
  const formattedDate = date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return formattedDate;
}
