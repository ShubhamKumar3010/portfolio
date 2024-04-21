import create from "zustand";

interface StoreState {
  about: React.MutableRefObject<any>;
  tech: React.MutableRefObject<any>;
  work: React.MutableRefObject<any>;
  project: React.MutableRefObject<any>;
  gallery: React.MutableRefObject<any>;
  achievements: React.MutableRefObject<any>;
}

interface StoreActions extends StoreState {
  setAbout: (value: any) => void;
  setTech: (value: any) => void;
  setWork: (value: any) => void;
  setProject: (value: any) => void;
  setGallery: (value: any) => void;
  setAchievements: (value: any) => void;
  setVariables: (values: Partial<StoreState>) => void;
}

const useStore = create<StoreState & StoreActions>((set) => ({
  about: { current: null },
  tech: { current: null },
  work: { current: null },
  project: { current: null },
  gallery: { current: null },
  achievements: { current: null },

  setAbout: (value) => set((state) => ({ about: { current: value } })),
  setTech: (value) => set((state) => ({ tech: { current: value } })),
  setWork: (value) => set((state) => ({ work: { current: value } })),
  setProject: (value) => set((state) => ({ project: { current: value } })),
  setGallery: (value) => set((state) => ({ gallery: { current: value } })),
  setAchievements: (value) =>
    set((state) => ({ achievements: { current: value } })),

  setVariables: (values) => set((state) => ({ ...values })),
}));

export default useStore;
