export function getESTTime(): string {
  const now = new Date();
  return now.toLocaleTimeString("en-US", {
    timeZone: "America/New_York",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
}

export function getESTStatus(): string {
  const now = new Date();
  const hour = Number(
    now.toLocaleString("en-US", { timeZone: "America/New_York", hour: "2-digit", hour12: false })
  );

  if (hour >= 9 && hour < 17) return "🟢 Available";
  if ((hour >= 7 && hour < 9) || (hour >= 17 && hour < 19)) return "🟠 Away";
  return "⚫ Offline";
}
