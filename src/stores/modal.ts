import { create } from "zustand";

type ModalType = "confirm" | "check" | "loading" | "custom" | null;

interface BaseModalProps {
  [key: string]: any;
}

interface ModalState {
  isOpen: boolean;
  type: ModalType;
  props: BaseModalProps;
  openModal: (type: ModalType, props?: BaseModalProps) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  type: null,
  props: {},
  openModal: (type, props = {}) => set({ isOpen: true, type, props }),
  closeModal: () => set({ isOpen: false, type: null, props: {} }),
}));
