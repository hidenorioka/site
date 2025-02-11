import type { HighTendency, Tendency } from "./_PersonaliryMeter.type";

export const getTendencyLabel = (t: Tendency) => {
  if (t.type === "high") {
    return `${t.label}(${t.percentage}%)`;
  }
  return t.label;
};

export const getMeterThemeTailWindProperty = (
  t: Tendency,
  theme: "red" | "blue" | "yellow" | "green" | "fuchsia",
) => {
  // ビルド時点で使用するTailwindCSSプロパティが定義されている必要がある
  // リテラル文字列を使用しない
  if (t.type === "high") {
    if (theme === "red") {
      return "bg-red-600";
    }
    if (theme === "blue") {
      return "bg-blue-600";
    }
    if (theme === "yellow") {
      return "bg-yellow-600";
    }
    if (theme === "green") {
      return "bg-green-600";
    }
    if (theme === "fuchsia") {
      return "bg-fuchsia-600";
    }
  }
  return "bg-gray-600";
};

export const getMeterWidthCSSProperty = (
  position: "left" | "right",
  t: HighTendency,
): astroHTML.JSX.CSSProperties => {
  if (position === "left") {
    return {
      width: `${t.percentage}%`,
    };
  }

  return {
    width: `${100 - t.percentage}%`,
  };
};
