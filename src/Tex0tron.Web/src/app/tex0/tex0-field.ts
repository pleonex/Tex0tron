export interface ITex0Field {
  name: string;
  type: "number" | "pixel-storage" | "bool";
  bitStart: number;
  bitEnd: number;
  // number specific
  maxValue?: number;
  multipleOf?: number | "power2";
}
