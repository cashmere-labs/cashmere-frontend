import { ComponentPropsWithoutRef, ReactNode } from "react";
import { IoMdRadioButtonOff, IoMdRadioButtonOn } from "react-icons/io";
import { Icon } from "ui/Icon/Icon";
import { clsnm } from "utils/clsnm";
import styles from "./Radio.module.scss";

interface RadioProps extends ComponentPropsWithoutRef<"div"> {
  isChecked?: boolean;
  label?: ReactNode;
  labelPlacement?: "left" | "right";
}

const Radio = ({
  isChecked,
  labelPlacement = "left",
  label,
  className,
  ...props
}: RadioProps) => {
  return (
    <div {...props} className={clsnm(styles.wrapper, className)}>
      {labelPlacement === "left" && label && (
        <span style={{ marginRight: "6px" }}>{label}</span>
      )}
      {isChecked ? (
        <Icon size={22} className={styles.selected}>
          <IoMdRadioButtonOn />
        </Icon>
      ) : (
        <Icon size={22} className={styles.default}>
          <IoMdRadioButtonOff />
        </Icon>
      )}
      {labelPlacement === "right" && label && (
        <span style={{ marginLeft: "6px" }}>{label}</span>
      )}
    </div>
  );
};

export { Radio };
