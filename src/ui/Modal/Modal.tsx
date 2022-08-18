import { useOnClickOutside } from "hooks/useOnClickOutside";
import { ComponentPropsWithoutRef, ReactNode, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { Icon } from "ui";
import { NetworkTypes } from "ui/NetworkBadge/utils";
import { clsnm } from "utils/clsnm";
import styles from "./Modal.module.scss";
import { NetworkBadge } from "ui";

type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
  close: () => void;
  closeOnClickOutside?: boolean;
  className?: string;
  bodyProps?: ComponentPropsWithoutRef<"div">;
  width?: string;
  network?: NetworkTypes | string;
};

const Modal = ({
  children,
  isOpen,
  close,
  closeOnClickOutside = true,
  className,
  bodyProps = {},
  width,
  network,
}: ModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isOpen]);

  const outsideRef = useOnClickOutside<HTMLDivElement>(() => {
    if (closeOnClickOutside) {
      close();
    }
  });

  return isOpen ? (
    <div
      style={{ animationTimingFunction: "linear" }}
      className={styles.layout}
    >
      <div
        {...bodyProps}
        ref={outsideRef}
        className={clsnm(styles.body, className)}
        style={{
          width: width,
          ...(bodyProps.style || {}),
        }}
      >
        {network != null && (
          <NetworkBadge className={styles.network} label={network} />
        )}
        <Icon
          hoverable
          onClick={close}
          className={styles.close}
          borderRadius="50%"
        >
          <IoMdClose />
        </Icon>

        {children}
      </div>
    </div>
  ) : null;
};

export { Modal };
