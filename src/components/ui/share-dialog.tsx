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
import { useState } from "react";
import { Packages } from "@/types/packages";

export function ShareDialog({
  children,
  dataPackage,
}: {
  children: React.ReactNode;
  dataPackage?: Packages;
}) {
  const [isCopied, setIsCopied] = useState(false);

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
          <div className="bg-neutral-foreground/5 flex items-center gap-4 rounded-sm p-2">
            <div className="flex-shrink-0">
              <Image
                width={500}
                height={500}
                src={dataPackage.thumbnail}
                alt={`image-${dataPackage.slug}`}
                className="aspect-square w-14 rounded object-cover"
              />
            </div>
            <div className="flex flex-col gap-1">
              <h6 className="text-neutral-foreground line-clamp-1 text-sm font-bold">
                {dataPackage.name}
              </h6>
              <span className="text-neutral-foreground/50 text-xs">
                goumrah.id
              </span>
            </div>
          </div>
        )}
        <div className="flex w-full items-center space-x-2">
          <div className="relative flex w-full items-center rounded-sm border border-border bg-white p-px tracking-wide">
            <div className="absolute left-3 top-1/2 flex h-8 -translate-y-1/2 items-center border-r pr-2">
              <Link2Icon className="stroke-neutral-foreground/50 h-4 w-4" />
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
              className={`shadow-custom-sm m-1 h-8 rounded-[8px] px-2 focus-visible:ring-0 ${isCopied ? "bg-primary" : "bg-neutral-foreground"}`}
            >
              <Copy className="h-4 w-4" />
              <span>{isCopied ? "Disalin!" : "Salin"}</span>
            </Button>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-3">
          <span className="text-neutral-foreground/60 text-sm font-medium">
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
