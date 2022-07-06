import { useOnClickOutside } from "hooks/useOnClickOutside";
import { ReactNode, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { clsnm } from "utils/clsnm";
import styles from "./Modal.module.scss";

type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
  close: () => void;
  closeOnClickOutside?: boolean;
  className?: string;
};

const Modal = ({
  children,
  isOpen,
  close,
  closeOnClickOutside = true,
  className,
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
      <div ref={outsideRef} className={clsnm(styles.body, className)}>
        <div onClick={close} className={styles.close}>
          <IoMdClose />
        </div>
        {children}
      </div>
    </div>
  ) : null;
};

export { Modal };
