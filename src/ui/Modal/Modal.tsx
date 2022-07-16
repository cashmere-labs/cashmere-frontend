import { useOnClickOutside } from "hooks/useOnClickOutside";
import { ComponentPropsWithoutRef, ReactNode, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { Icon } from "ui";
import { clsnm } from "utils/clsnm";
import styles from "./Modal.module.scss";

type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
  close: () => void;
  closeOnClickOutside?: boolean;
  className?: string;
  bodyProps?: ComponentPropsWithoutRef<"div">;
  width?: string;
};

const Modal = ({
  children,
  isOpen,
  close,
  closeOnClickOutside = true,
  className,
  bodyProps = {},
  width,
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
