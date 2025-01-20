import moment from "moment";
import "moment/locale/id";

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function priceToLocale(price: number) {
  return `Rp ${price.toLocaleString("id-ID")}`;
}

export function discountPercentPrice(
  priceNormal: number,
  priceDiscount: number,
): string {
  if (priceNormal <= 0 || priceDiscount <= 0) {
    return "Invalid prices";
  }

  // Hitung persentase diskon
  const discountPercent = ((priceNormal - priceDiscount) / priceNormal) * 100;

  // Kembalikan hasil sebagai string dengan dua angka di belakang koma
  return `${discountPercent.toFixed()}%`;
}

export function getAmountOfDiscount(
  priceNormal: number,
  priceDiscount: number,
): string {
  if (priceNormal <= 0 || priceDiscount <= 0) {
    return "Invalid prices";
  }

  const amountOfDiscount = Math.floor((priceNormal - priceDiscount) / 1000000);
  const calculation = priceNormal - priceDiscount;

  if (calculation < 1000000) {
    const result = Math.floor((priceNormal - priceDiscount) / 1000);
    return `Hemat ${result} ribu`;
  } else {
    return `Hemat ${amountOfDiscount} juta`;
  }
}

// --- Perhitungan Harga Setelah Diskon ---
export function priceAfterDiscount(
  normalPrice: number,
  discount: number,
): number {
  const getDiscountPrice = (normalPrice * discount) / 100;
  const result = normalPrice - getDiscountPrice;
  return result;
}

// --- Kapitalisasi ---
export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

// --- Kalkulasi durasi penerbangan ---
export function calculateFlightDuration(
  departureTime: string,
  landingTime: string,
): string {
  const [depHours, depMinutes] = departureTime.split(":").map(Number);
  const [landHours, landMinutes] = landingTime.split(":").map(Number);

  const departureDate = new Date(0, 0, 0, depHours, depMinutes);
  const landingDate = new Date(0, 0, 0, landHours, landMinutes);

  if (landingDate < departureDate) {
    landingDate.setDate(landingDate.getDate() + 1);
  }

  const durationMs = landingDate.getTime() - departureDate.getTime();
  const durationHours = Math.floor(durationMs / 3600000);
  const durationMinutes = Math.floor((durationMs % 3600000) / 60000);

  return `${durationHours}j ${durationMinutes}m`;
}

// --- Perhitungan Rata-Rata Rating
export function calculateRating(rating: number[]) {
  const sum = rating.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  const avg = (sum / rating.length).toFixed(1);

  return avg;
}

// --- Perhitungan Hari Malam
export function calculateDaysAndNights(checkIn?: string, checkOut?: string) {
  moment.locale("id");

  const checkInDate = moment(checkIn, "YYYY-MM-DD");
  const checkOutDate = moment(checkOut, "YYYY-MM-DD");

  const days = checkOutDate.diff(checkInDate, "days");

  const nights = days > 0 ? days - 1 : 0;

  return `${days} hari ${nights} malam`;
}

// --- Perhitungan Diskon ---
export const formatDiscount = (discount: number) => {
  if (discount >= 1000000) {
    return `${(discount / 1000000).toFixed(0)}jt`;
  } else if (discount >= 1000) {
    return `${(discount / 1000).toFixed(0)}rb`;
  }
  return discount.toString();
};

// --- Perhitungan Jadwal Ketibaan Pesawat
export const getArrivalDate = (
  flightDepartureDate: string,
  duration?: number,
) => {
  const arrival = moment(flightDepartureDate)
    .add(duration, "minutes")
    .toISOString();
  return arrival;
};

//  --- Perhitungan Durasi Jam ---
export const formatDuration = (duration: number | undefined) => {
  if (!duration) return "";

  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;

  return `${hours}j ${minutes}m`;
};

// --- Perhitungan Durasi Transit ---
export const formatTransitDuration = (
  departureArrivalTime: string,
  transitDepartureTime: string,
) => {
  const arrivalTime = moment(departureArrivalTime);
  const departureTime = moment(transitDepartureTime);

  const transitWaitTimeInMinutes = departureTime.diff(arrivalTime, "minutes");

  return formatDuration(transitWaitTimeInMinutes);
};
