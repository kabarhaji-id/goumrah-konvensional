"use client";

import Link from "next/link";
import Image from "next/image";

import WhatsAppIcon from "@/assets/icons/ic_baseline-whatsapp.svg";
import FacebookLogo from "@/assets/icons/facebook-logo.svg";

import { Copy, Link2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { UmrahPackage } from "@/types/package-details";
import { NavigatorConnection } from "@/types/navigator-connection";
import { Skeleton } from "./skeleton-loader";

export function ShareDialog({
  children,
  dataPackage,
}: {
  children: React.ReactNode;
  dataPackage?: UmrahPackage;
}) {
  const [isCopied, setIsCopied] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const pathname = usePathname();
  const searchParams = useSearchParams();

  let fullUrl: string = "";

  if (typeof window !== "undefined") {
    fullUrl = `${window.location.origin}${pathname}${searchParams.toString() ? `?${searchParams.toString()}` : ""}`;
  }

  const whatsappLink = `https://wa.me/?text=${encodeURIComponent("Cek paket Umrah ini dari goumrah.id!")}${encodeURIComponent("\n")}${encodeURIComponent(fullUrl)}`;
  const facebookLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(fullUrl)}`;

  const handleClickShare = async () => {
    try {
      await navigator.clipboard.writeText(fullUrl as string);
      setIsCopied(true);

      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Gagal menyalin text", error);
    }
  };

  useEffect(() => {
    setIsImageLoaded(false);
  }, [dataPackage?.thumbnail]);

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent className="w-[90%] max-w-[400px] rounded-lg bg-white px-4">
        <DialogHeader className="flex items-start">
          <DialogTitle>Bagikan tautan</DialogTitle>
          <DialogDescription className="text-neutral-foreground">
            Ayo ajak yang lain umrah bersamamu!
          </DialogDescription>
        </DialogHeader>

        {/* --- Package Preview */}
        {dataPackage && (
          <div className="flex items-center gap-4 rounded-sm bg-neutral-foreground/5 p-2">
            <div className="flex-shrink-0">
              {!isImageLoaded ? (
                <Skeleton className="aspect-square w-14 bg-gray-300" />
              ) : (
                <Image
                  width={500}
                  height={500}
                  src={dataPackage.thumbnail}
                  alt={`image-${dataPackage.tagline}`}
                  className="aspect-square w-14 rounded object-cover"
                  onLoad={() => setIsImageLoaded(true)}
                />
              )}
            </div>
            <div className="flex flex-col gap-1">
              <h6 className="line-clamp-1 text-sm font-bold text-neutral-foreground">
                {dataPackage.tagline}
              </h6>
              <span className="text-xs text-neutral-foreground/50">
                goumrah.id
              </span>
            </div>
          </div>
        )}
        <div className="flex w-full items-center space-x-2">
          <div className="relative flex w-full items-center rounded-sm border border-border bg-white p-px tracking-wide">
            <div className="absolute left-3 top-1/2 flex h-8 -translate-y-1/2 items-center border-r pr-2">
              <Link2Icon className="h-4 w-4 stroke-neutral-foreground/50" />
            </div>
            <Input
              id="link"
              defaultValue={fullUrl}
              className="rounded-full border-none pl-11 shadow-none placeholder:text-primary-foreground"
              readOnly
            />

            <Button
              onClick={handleClickShare}
              type="submit"
              size="sm"
              className={`m-1 h-8 rounded-[8px] px-2 shadow-custom-sm focus-visible:ring-0 ${isCopied ? "bg-primary" : "bg-neutral-foreground"}`}
            >
              <Copy className="h-4 w-4" />
              <span>{isCopied ? "Disalin!" : "Salin"}</span>
            </Button>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-3">
          <span className="text-sm font-medium text-neutral-foreground/60">
            atau bagikan lewat
          </span>
          <div className="flex justify-center gap-3">
            <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#25D366] shadow">
                <WhatsAppIcon className="ml-px h-6 w-6" fill="#FFFFFF" />
              </div>
            </Link>

            <Link href={facebookLink} target="_blank" rel="noopener noreferrer">
              <FacebookLogo className="h-8 w-8" fill="#316FF6" />
            </Link>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
