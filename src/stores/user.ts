import { create } from "zustand";
import { persist } from "zustand/middleware";
import { LevelType } from "@/types/level";

interface UserState {
  accessToken: string | null;
  refreshToken: string | null;
  level: LevelType;
  name: string | null;
  email: string | null;
  profileImage: string | null;
  login: (data: {
    accessToken: string;
    refreshToken: string;
    name: string;
    email: string;
    profileImage: string;
    level: LevelType;
  }) => void;
  logout: () => void;
  setLevel: (level: LevelType) => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      accessToken: null,
      refreshToken: null,
      level: LevelType.MEDIUM,
      name: null,
      email: null,
      profileImage: null,
      login: ({
        accessToken,
        refreshToken,
        name,
        email,
        profileImage,
        level,
      }) =>
        set({
          accessToken,
          refreshToken,
          name,
          email,
          profileImage,
          level,
        }),
      logout: () => set({ accessToken: null, refreshToken: null }),
      setLevel: (level: LevelType) => set({ level }),
    }),
    {
      name: "auth",
    }
  )
);
