import { NetworkTypes } from "ui/NetworkBadge/utils";
export type MapStringToString = { [key: string]: string };

export type Lockers = {
  id: string | number;
  network: NetworkTypes;
  totalLockedCSM: string;
  weeklyFees: string;
};

export type MyLocks = {
  id: string | number;
  network: NetworkTypes;
  weeklyFees: string;
  claimableFees: string;
  myVotePower: string;
  myLockedCSM: string
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
