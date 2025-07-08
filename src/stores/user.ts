import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { LevelType } from "@/types/level";

interface UserState {
  accessToken: string | null;
  level: LevelType;
  name: string | null;
  email: string | null;
  profileImage: string | null;
  login: (token: string) => void;
  logout: () => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      accessToken: null,
      level: "중",
      name: null,
      email: null,
      profileImage: null,
      login: (accessToken) => set({ accessToken }),
      logout: () => set({ accessToken: null }),
    }),
    {
      name: "auth",
    }
  )
);
