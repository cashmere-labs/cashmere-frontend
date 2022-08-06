import styles from "./Test.module.scss";
import { ResponsivePie } from "@nivo/pie";
import {
  BecomeValidator,
  ExecutingModal,
  ProposalModal,
  Statistics,
} from "components";
import { useModal } from "hooks";

const data = [
  {
    id: "css",
    label: "css",
    value: 118,
    color: "rbg(0,0,0,0.5)",
  },
  {
    id: "ruby",
    label: "ruby",
    value: 50,
    color: "yellow",
  },
  {
    id: "go",
    label: "go",
    value: 300,
    color: "blue",
  },
];

const Test = () => {
  const modal = useModal();

  return (
    <div style={{ width: "500px", height: "500px" }}>
      <div onClick={modal.open}>Hey</div>
      <BecomeValidator modal={modal} />
    </div>
  );
};

export { Test };
