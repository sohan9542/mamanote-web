const ACTIVITY_STYLES: Record<string, { emoji: string; bg: string }> = {
  sleep: { emoji: "🌙", bg: "#EDE9FE" },
  breastfeeding: { emoji: "🤱", bg: "#FFEDD5" },
  medicine: { emoji: "💊", bg: "#F5EBD7" },
  pumping: { emoji: "💧", bg: "#FEF9C3" },
  nutrition: { emoji: "🍎", bg: "#DBEAFE" },
  diaper: { emoji: "👶", bg: "#DCFCE7" },
  temperature: { emoji: "🌡️", bg: "#FEE2E2" },
};

const TYPE_FALLBACK: Record<string, { emoji: string; bg: string }> = {
  sleep: { emoji: "🌙", bg: "#EDE9FE" },
  feeding: { emoji: "🍼", bg: "#FFEDD5" },
  pump: { emoji: "💧", bg: "#FEF9C3" },
  diaper: { emoji: "👶", bg: "#DCFCE7" },
  medication: { emoji: "💊", bg: "#F5EBD7" },
  note: { emoji: "📝", bg: "#F3F4F6" },
};

export function activityStyle(
  activityId: string | null,
  type: string,
): { emoji: string; bg: string } {
  if (activityId && ACTIVITY_STYLES[activityId]) {
    return ACTIVITY_STYLES[activityId];
  }
  return TYPE_FALLBACK[type] ?? { emoji: "📋", bg: "#FFF1F2" };
}
