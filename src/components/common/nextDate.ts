export default function nextDate() {
  const date = new Date();
  const nextDay = new Date(date);
  nextDay.setDate(date.getDate() + 1);

  return nextDay.toISOString().split("T")[0];
}
