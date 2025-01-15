import { Addons } from "./addons";
import { CityTours } from "./city-tour";
import { Images } from "./images";
import { Details } from "./package-details";
import { PackageCategory, PackageStatus, PackageType } from "./packages";
import { Reviews } from "./reviews";

export interface WishlistUser {
    id: string;
    status: PackageStatus;
    reviews: Reviews;
    rating: number;
    thumbnail: Images;
    images: Images[];
    name: string;
    description: string;
    category: PackageCategory;
    type: PackageType;
    isRecommended: boolean;
    cityTours: CityTours[];
    addons: Addons[];
    details: Details[];
    // need confirmation 
}

// export type { Wishlist }