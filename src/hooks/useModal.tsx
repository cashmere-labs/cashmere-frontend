import { useCallback, useMemo, useState } from "react";

export type ModalController = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

/**
 * @dev Hook used to control modal state
 */
export const useModal = (): ModalController => {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  const modal = useMemo(() => ({ close, isOpen, open }), [isOpen, open, close]);

  return modal;
};
