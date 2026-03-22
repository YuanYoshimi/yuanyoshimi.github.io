import { create } from 'zustand';
import { Project } from '@types';

interface PortalStore {
  activePortalId: string | null;
  setActivePortal: (activePortalId: string | null) => void;
  selectedProject: Project | null;
  setSelectedProject: (project: Project | null) => void;
}

export const usePortalStore = create<PortalStore>((set) => ({
  activePortalId: null,
  setActivePortal: (activePortalId) => set(() => ({ activePortalId })),
  selectedProject: null,
  setSelectedProject: (project) => set(() => ({ selectedProject: project })),
}))
