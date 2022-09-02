import { networkTypes } from "constants/networks";
import { useOnClickOutside, usePopper } from "hooks";
import {
  CSSProperties,
  ComponentPropsWithoutRef,
  useEffect,
  useRef,
  useState,
} from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useNetwork, useSetNetwork } from "store/hooks/networkHooks";
import { Icon } from "ui";
import { NetworkBadge } from "ui/NetworkBadge/NetworkBadge";
import { NetworkTypes } from "ui/NetworkBadge/utils";

import styles from "./SelectNetwork.module.scss";

export interface SelectNetworkProps extends ComponentPropsWithoutRef<"div"> {
  label?: NetworkTypes | string;
  size?: number;
  className?: string;
  style?: CSSProperties;
  fontSize?: string;
}

const SelectNetwork = (props: SelectNetworkProps) => {
  const networkOptions = networkTypes;
  const currentNetwork = useNetwork();
  const setCurrentNetwork = useSetNetwork();

  const [expand, setExpand] = useState(false);
  const { reference, floating, popperStyles } = usePopper({
    placement: "bottom-start",
    topDistance: 4,
  });

  const wrapperRef = useOnClickOutside<HTMLDivElement>(() => {
    setExpand(false);
  });

  const containerRef = useRef<HTMLDivElement>(null);
  const optionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!optionRef.current || !containerRef.current) return;
    optionRef.current.style.minWidth = `${containerRef.current.offsetWidth}px`;
  }, [expand, optionRef]);

  return (
    <div ref={wrapperRef} className={styles.wrapper}>
      <div onClick={() => setExpand(!expand)} ref={reference}>
        <div ref={containerRef}>
          <NetworkBadge
            hoverable
            size={28}
            className={styles.badge}
            label={currentNetwork}
            {...props}
          />
          <Icon size={16} className={styles.chevron}>
            {expand ? <FaChevronUp /> : <FaChevronDown />}
          </Icon>
        </div>
      </div>
      {expand && (
        <div className={styles.menu} style={{ ...popperStyles }} ref={floating}>
          {networkOptions.map((item, key) => (
            <div
              key={key}
              onClick={() => {
                setExpand(false);
                setCurrentNetwork(item);
              }}
              ref={optionRef}
              className={styles.option}
            >
              <div className={styles.optionInner}>
                <NetworkBadge label={item} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export { SelectNetwork };
