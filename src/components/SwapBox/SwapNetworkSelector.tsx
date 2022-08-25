import { ModalController } from "hooks/useModal";
import { useEffect, useMemo, useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { Network } from "types/network";
import { Token } from "types/token";
import { Icon, Input } from "ui";
import { getBadgeProps, stringToBadgeType } from "ui/NetworkBadge/utils";
import styles from "./SwapBox.module.scss";

type SwapNetworkSelectorProps = {
  modalController: ModalController;
  onSelect?: (item: Network | Token) => void;
  options:
    | { data: Token[]; type: "token" }
    | { data: Network[]; type: "network" };
};

const selectorShowKeyframes = [
  { transform: "translateY(120%)" },
  { transform: "translateY(0%)" },
];

const selectorShowSettings = {
  duration: 200,
  iterations: 1,
};

const SwapNetworkSelector = ({
  modalController,
  onSelect,
  options,
}: SwapNetworkSelectorProps) => {
  const boxRef = useRef<HTMLDivElement>(null);
  const [text, setText] = useState("");

  useEffect(() => {
    if (!boxRef.current) return;
    if (modalController.isOpen) {
      inputRef.current?.focus();
      boxRef.current.animate(selectorShowKeyframes, selectorShowSettings);
      boxRef.current.style.transform = "translateY(0%)";
    } else {
      setText("");
      boxRef.current.style.transform = "translateY(120%)";
    }
  }, [modalController.isOpen]);

  const filteredOptions = useMemo(() => {
    if (options.type === "network") {
      return options.data.filter(
        (item: Network) =>
          item.name.toUpperCase().includes(text.toUpperCase()) ||
          item.chainId.includes(text)
      );
    } else {
      return options.data.filter(
        (item: Token) =>
          item.name.toUpperCase().includes(text.toUpperCase()) ||
          item.address.toUpperCase().includes(text.toUpperCase())
      );
    }
  }, [options, text]);

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div ref={boxRef} className={styles.networkSelector}>
      <div className={styles.top}>
        <Icon
          hoverable
          onClick={modalController.close}
          className={styles.close}
          borderRadius="50%"
        >
          <IoMdClose />
        </Icon>
        <span className={styles.title}>
          Select {options.type === "network" ? "Network" : "Token"}
        </span>
        <div className={styles.search}>
          <Input
            inputRef={inputRef}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder={`Search ${
              options.type === "network" ? "Network" : "Token"
            }`}
          />
        </div>
      </div>

      <div>
        <div className={styles.options}>
          {filteredOptions.map((item) => (
            <div
              onClick={() => {
                modalController.close();
                onSelect?.(item);
              }}
              className={styles.option}
            >
              <img src={item.imageUrl} />
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { SwapNetworkSelector };
