import { create } from "zustand";

//  --- Flight and Hotel Accordion
interface AccordionFlightStore {
  isOpen: { [key: string]: boolean };
  toggleAccordion: (id: string) => void;
}

const useAccordionFlightStore = create<AccordionFlightStore>((set) => ({
  isOpen: {},
  toggleAccordion: (id) => {
    set((state) => ({
      isOpen: {
        ...state.isOpen,
        [id]: !state.isOpen[id],
      },
    }));
  },
}));

interface AccordionHotelStore {
  isAllOpen: boolean;
  toggleAllAccordion: () => void;
}

const useAccordionHotelStore = create<AccordionHotelStore>((set) => ({
  isAllOpen: false,
  toggleAllAccordion: () => {
    set((state) => {
      return { isAllOpen: !state.isAllOpen };
    });
  },
}));

export { useAccordionHotelStore, useAccordionFlightStore };

// --- Image Preview
interface ImageStore {
  activeImageIndex: number;
  activeCategory: string;
  setActiveImageIndex: (index: number) => void;
  setActiveCategory: (category: string) => void;
}

const useImageStore = create<ImageStore>((set) => ({
  activeImageIndex: 0,
  activeCategory: "",
  setActiveImageIndex: (index) => set({ activeImageIndex: index }),
  setActiveCategory: (category) => set({ activeCategory: category }),
}));

export { useImageStore };
