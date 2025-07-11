import { create } from "zustand";
import { persist } from "zustand/middleware";
import { LevelType } from "@/types/level";
import { useBookmarkStore } from "./bookmark";

interface UserState {
  accessToken: string | null;
  refreshToken: string | null;
  level: LevelType;
  name: string | null;
  email: string | null;
  profileImage: string | null;
  joinDate: Date | null;
  login: (data: {
    accessToken: string;
    refreshToken: string;
    name: string;
    email: string;
    profileImage: string;
    level: LevelType;
  }) => void;
  logout: () => void;
  setProfile: (data: {
    name: string;
    profileImage: string;
    level: LevelType;
    joinDate: Date;
  }) => void;
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
      joinDate: null,
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
      logout: () => {
        set({
          accessToken: null,
          refreshToken: null,
          level: LevelType.MEDIUM,
          name: null,
          email: null,
          profileImage: null,
          joinDate: null,
        });
        useBookmarkStore.getState().reset();
      },
      setLevel: (level: LevelType) => set({ level }),
      setProfile: ({ name, profileImage, level, joinDate }) =>
        set({
          name,
          profileImage,
          level,
          joinDate: new Date(joinDate),
        }),
    }),
    {
      name: "auth",
    }
  )
);
