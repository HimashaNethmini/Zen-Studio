import { create } from "zustand";

export type FocusArea = "Mind" | "Body" | "Balance";

interface WellnessState {
  activeFocus: FocusArea;
  setActiveFocus: (focus: FocusArea) => void;
}

export const useWellnessStore = create<WellnessState>((set) => ({
  activeFocus: "Mind",

  setActiveFocus: (focus) => {
    set({ activeFocus: focus });
  },
}));