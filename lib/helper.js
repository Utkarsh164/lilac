export function formatDate(dateStr) {
  const [month, day, year] = dateStr.split("/");

  const date = new Date(`20${year}-${month}-${day}`);

  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}