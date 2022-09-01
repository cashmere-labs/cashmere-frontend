import ETHEREUM_IMG from "assets/images/networks/ethereum.svg";
import { TransactionStep } from "types/app";

export const mockTxSteps: TransactionStep[] = [
  {
    title: "Swapping 9 CRV for USDC",
    image: ETHEREUM_IMG,
    poweredBy: "1inch",
    url: "#",
    progress: "done",
  },
  {
    title: "Send USDC to destination chain",
    image: ETHEREUM_IMG,
    poweredBy: "Cashmere Labs",
    url: "#",
    progress: "in_progress",
  },
  {
    title: "Swap USDC for 13.2496 MATIC",
    image: ETHEREUM_IMG,
    poweredBy: "1inch",
    url: "#",
    progress: "not_started",
  },
];
