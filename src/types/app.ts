import { NetworkTypes } from "ui/NetworkBadge/utils";
export type MapStringToString = { [key: string]: string };

export type Validator = {
  id: string | number;
  name: string;
  votingPower: string;
  commission: string;
};

export type TransactionStep = {
  title: string;
  image: string;
  poweredBy: string;
  url?: string;
  progress: "not_started" | "done" | "in_progress";
};

export type AccountBalance = {
  token: string;
  native: string;
  usd: string;
  image: string;
};
