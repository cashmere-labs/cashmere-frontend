import { useCallback, useMemo, useState } from "react";

export type TabModalController = {
  whichTab: number;
  change: (thisOne: number) => void;
};

/**
 * @dev Hook used to control tab modal state
 */
export const useTabModal = (): TabModalController => {
  const [whichTab, setWhichTab] = useState(0);

  const change = useCallback((thisOne: number) => setWhichTab(thisOne), []);

  const tabModal = useMemo(() => ({ whichTab, change }), [whichTab, change]);

  return tabModal;
};
