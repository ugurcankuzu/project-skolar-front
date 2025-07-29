"use client";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";
import { AnimatePresence, motion } from "motion/react";
import { containerVariant, enterScreen } from "@/animations/shared";
const ModalContext = createContext<{
  isOpen: boolean;
  openModal: (component: ReactNode) => void;
  closeModal: () => void;
} | null>(null);

export function useModal() {
  const modal = useContext(ModalContext);
  return modal;
}

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalComponent, setModalComponent] = useState<ReactNode | null>(null);

  const openModal = useCallback(
    (component: ReactNode) => {
      setModalComponent(component);
      setIsOpen(true);
    },
    [setModalComponent, setIsOpen]
  );

  const closeModal = useCallback(() => {
    setIsOpen(false);
    setModalComponent(null);
  }, [setModalComponent, setIsOpen]);

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        openModal,
        closeModal,
      }}
    >
      {children}
      <AnimatePresence>
        {isOpen && modalComponent && (
          <motion.div
            className="size-full flex items-center justify-center fixed top-0 left-0 z-50 bg-black/40"
            onClick={closeModal}
            role="dialog"
            aria-modal="true"
            variants={containerVariant}
            initial="hidden"
            animate="visible"
            exit={"hidden"}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              variants={enterScreen}
              className="w-[95%] md:w-1/2 lg:w-1/3"
            >
              {modalComponent}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </ModalContext.Provider>
  );
}
