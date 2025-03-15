import { create } from 'zustand';

export interface BearState {
  bears: number;
  increasePopulation: () => void;
  removeAllBears: () => void;
  updateBears: (newBears: number) => void;
  currentAccounts: { title: string; amount: number }[];
  addAccount: (newAccount: { title: string; amount: number }) => void;
}

export const useSavingsStore = create<BearState>((set) => ({
  bears: 0,
  currentAccounts: [],
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears) => set({ bears: newBears }),
  addAccount: (newAccount) =>
    set((state) => ({ currentAccounts: [newAccount, ...state.currentAccounts] })),
}));
