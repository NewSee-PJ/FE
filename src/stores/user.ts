import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { LevelType } from "@/types/level";

interface UserState {
  accessToken: string | null;
  level: LevelType;
  login: (token: string) => void;
  logout: () => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      accessToken: null,
      level: "중",
      login: (accessToken) => set({ accessToken }),
      logout: () => set({ accessToken: null }),
    }),
    {
      name: "auth",
    }
  )
);
