import { useModalStore } from "@stores/modal";

export const useModal = () => {
  const { openModal, closeModal, isOpen, type, props } = useModalStore();
  return { openModal, closeModal, isOpen, type, props };
};
