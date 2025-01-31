import { resJson } from "@/types/fetch";
import { Packages } from "@/types/packages";

// --- API GET: Section Packages
export async function getAllPackages() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/collections/${process.env.NEXT_PUBLIC_COLLECTION_ID_URL}/records`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-collection-access-token": `${process.env.NEXT_PUBLIC_API_TOKEN}`,
        },
      },
    );

    if (!res.ok) {
      console.error("Failed to fetch data:", res.statusText);
      return { success: false, data: [] };
    }

    const resJson: resJson<Packages[]> = await res.json();

    if (!resJson || !resJson.records || resJson.records.length === 0) {
      return { success: false, records: [] };
    }

    return resJson;
  } catch (error) {
    console.error("Error fetching packages:", error);
    return { success: false, records: [] };
  }
}

// NOTE: For Future Development
// --- API GET: Single Packages
// export async function getDetailPackage({ idPackage }: { idPackage: string }) {
//   try {
//     const res = await fetch(
//       `${process.env.NEXT_PUBLIC_API_URL}/records/${idPackage}`,
//     );

//     if (!res.ok) {
//       console.error("Failed to fetch data:", res.statusText);
//       return { success: false, data: null };
//     }

//     const resJson: resJsonDetail<UmrahPackage> = await res.json();

//     if (!resJson || !resJson.data) {
//       return { success: false, data: null };
//     }

//     return resJson;
//   } catch (error) {
//     console.error("Error while fetching data: ", error);
//     throw error;
//   }
// }
