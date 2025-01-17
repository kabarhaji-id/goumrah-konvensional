import { ShieldCheck } from "lucide-react";

const TaglineSection = () => {
  return (
    <div className="flex items-center gap-2 bg-[#f1fcfa] px-4 py-2">
      <ShieldCheck className="size-6 text-teal-600" />
      <div className="5 flex flex-col gap-0">
        <p className="text-xs font-semibold tracking-wide text-primary">
          #BikinTenang
        </p>
        <p className="text-[11px] font-medium leading-4 tracking-wide text-[#232323]">
          Pembayaran aman, umrah jadi tenang
        </p>
      </div>
    </div>
  );
};

export default TaglineSection;
