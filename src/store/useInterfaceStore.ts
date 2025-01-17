import { create } from "zustand";

//  --- Flight and Hotel Accordion
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

export { useAccordionHotelStore };

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
