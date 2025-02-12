export type Tendency = HighTendency | LowTendency;

export type HighTendency = BaseTendency & {
  type: "high";
  percentage: number;
};

type LowTendency = BaseTendency & {
  type: "low";
};

type BaseTendency = {
  label: string;
};
