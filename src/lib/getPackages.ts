// // --- API GET: Section Packages
// export async function getSectionPackages({
//   embarkation,
//   departureDate,
//   categories,
//   promoSlug,
//   type,
//   sortBy,
//   sortByPrice,
//   sortByDeparture,
//   sortByUsedQuota,
//   name,
//   cityTours,
//   hotelRatings,
//   durations,
//   months,
//   isRecommended,
//   page,
//   perPage,
// }: {
//   name?: string;
//   months?: string;
//   embarkation?: string;
//   departureDate?: string;
//   categories?: PackageCategory;
//   promoSlug?: string;
//   type?: string;
//   sortBy?: string;
//   sortByPrice?: string;
//   sortByDeparture?: string;
//   sortByUsedQuota?: string;
//   sortByQuota?: string;
//   durations?: string;
//   hotelRatings?: string;
//   cityTours?: string;
//   isRecommended?: string;
//   page?: string;
//   perPage?: string;
// }) {
//   try {
//     const queries = {
//       page,
//       perPage,
//       promoSlug,
//       type,
//       categories,
//       embarkation,
//       sortBy,
//       departureDate,
//       sortByPrice,
//       sortByDeparture,
//       sortByUsedQuota,
//       name,
//       cityTours,
//       hotelRatings,
//       durations,
//       months,
//       isRecommended,
//     };

//     const params = new URLSearchParams();

//     Object.entries(queries).forEach(([key, value]) => {
//       if (value) {
//         params.append(key, value);
//       }
//     });

//     const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/packages?${params.toString()}`;

//     const res = await fetch(apiUrl, { cache: "no-store" });

//     if (!res.ok) {
//       console.error("Failed to fetch data:", res.statusText);
//       return { success: false, data: [] };
//     }

//     const resJson: resJson<Packages[]> = await res.json();

//     if (!resJson || !resJson.data || resJson.data.length === 0) {
//       return { success: false, data: [] };
//     }

//     return resJson;

//   } catch (error) {
//     console.error("Error fetching packages:", error);
//     return { success: false, data: [] };
//   }
// }

// // --- API GET: Single Packages

// export async function getDetailPackage({
//   departureDate,
//   idPackage,
//   embarkation,
// }: {
//   idPackage: string;
//   departureDate?: string;
//   embarkation: string;
// }) {
//   try {
//     const res = await fetch(
//       `${process.env.NEXT_PUBLIC_API_URL}/packages/${idPackage}?departureDate=${departureDate}&embarkation=${embarkation?.toLowerCase()}`
//     );

//     if (!res.ok) {
//       console.error("Failed to fetch data:", res.statusText);
//       return { success: false, data: null };
//     }

//     const resJson: resJsonDetail<PackageDetails> = await res.json();

//     if (!resJson || !resJson.data) {
//       return { success: false, data: null };
//     }

//     return resJson;

//   } catch (error) {
//     console.error("Error while fetching data: ", error);
//     throw error;
//   }
// }
