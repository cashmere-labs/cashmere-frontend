import { NetworkTypes } from "ui/NetworkBadge/utils";

export type MapStringToString = { [key: string]: string };

export type ILockData<Data = {}> = {
  id: string | number;
  network: NetworkTypes;
  weeklyFees: string;
} & Data;

export type Lockers = ILockData<{
  totalLockedCSM: string;
}>;

export type MyLocks = ILockData<{
  claimableFees: string;
  myVotePower: string;
  myLockedCSM: string;
}>;

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
