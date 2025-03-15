import { create } from 'zustand';

export interface BearState {
  bears: number;
  increasePopulation: () => void;
  removeAllBears: () => void;
  updateBears: (newBears: number) => void;
  currentAccounts: { title: string; amount: number; id: string }[];
  addAccount: (newAccount: { title: string; amount: number; id: string }) => void;
  deleteAccount: (id: string) => void;
}

export const useSavingsStore = create<BearState>((set) => ({
  bears: 0,
  currentAccounts: [],
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears) => set({ bears: newBears }),
  addAccount: (newAccount) =>
    set((state) => ({ currentAccounts: [newAccount, ...state.currentAccounts] })),
  deleteAccount: (id) =>
    set((state) => ({
      currentAccounts: state.currentAccounts.filter((account) => account.id !== id),
    })),
}));
