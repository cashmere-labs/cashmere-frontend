import { networkTypes } from "constants/networks";
import { useNetwork, useSetNetwork } from "store/hooks/networkHooks";
import { NetworkBadge } from "ui/NetworkBadge/NetworkBadge";
import styles from "./SelectNetwork.module.scss";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { useOnClickOutside, usePopper } from "hooks";
import { Icon } from "ui";

const SelectNetwork = () => {
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
            size={28}
            className={styles.badge}
            label={currentNetwork}
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
