import create, { State } from 'zustand';
import { getAboutData } from '../api';

interface CounterState extends State {
  count: number
  reset: () => void
  increase: () => void
  decrease: () => void
}

enum Skill {
  js = 'JavaScript',
  vue = 'Vue js',
  react = 'React js',
  html = 'HTML5',
  css = 'CSS3'
}

export interface AboutResponse {
  firstname: string | null
  lastname: string | null
  profession: string | null
  skills: Skill[] | null
}

interface MainState extends State {
  about: AboutResponse
  fetch: () => void
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

export const useMainContent = create<MainState>((set) => ({
  about: {
    firstname: null,
    lastname: null,
    profession: null,
    skills: null
  },
  fetch: async () => {
    try {
      const about = await getAboutData();

      set({ about });
    } catch (error) {
      console.error(error);
    }
  }
}));
