export enum Status {
  AVAILABLE = "AVAILABLE",
  UNAVAILABLE = "UNAVAILABLE",
  BUSY = "BUSY",
}
export interface IBycecle {
  slug: string;
  name: string;
  type: string;
  color: string;
  wheel_size: number;
  price: number;
  description: string;
  status: string;
}
