import create, { State } from 'zustand';

interface CounterState extends State {
  count: number
  reset: () => void
  increase: () => void
  decrease: () => void
}

export const useStore = create<CounterState>(
  (set) => ({
    count: 0,
    increase: () => set(
      (state) => ({ count: ++state.count })
    ),
    decrease: () => set(
      (state) => ({ count: --state.count })
    ),
    reset: () => set({ count: 0 })
  })
);