export function formatDate(dateStr) {
  const [month, day, year] = dateStr.split("/");

  const date = new Date(`20${year}-${month}-${day}`);

  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

export const truncate = (text, length = 8) =>
  text.length > length ? text.slice(0, length) + "..." : text;