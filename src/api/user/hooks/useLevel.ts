import { useMutation } from "@tanstack/react-query";
import { postSelectLevel } from "../level";
import { useUserStore } from "@/stores/user";
import { LevelType } from "@/types/level";

export const useLevel = () => {
  const setLevel = useUserStore((state) => state.setLevel);

  return useMutation({
    mutationFn: (level: LevelType) => postSelectLevel(level),
    onSuccess: (_, level) => {
      setLevel(level);
    },
  });
};
