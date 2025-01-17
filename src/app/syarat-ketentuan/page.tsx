import Link from "next/link";
import IntroductionSection from "@/section/syarat-ketentuan/introduction-section";
import ListOfContent from "@/section/syarat-ketentuan/list-of-content";
import GeneralSection from "@/section/syarat-ketentuan/general-section";
import UsageSection from "@/section/syarat-ketentuan/usage-section";
import OrderSection from "@/section/syarat-ketentuan/order-section";
import AgentTerms from "@/section/syarat-ketentuan/agent-terms";
import TermsAndConditionSection from "@/section/syarat-ketentuan/terms-and-conditions-section";
import ProductPrice from "@/section/syarat-ketentuan/product-price";
import PaymentProcedureSection from "@/section/syarat-ketentuan/payment-procedure-section";
import ChangesAndCancellationSection from "@/section/syarat-ketentuan/changes-and-cancellation-section";
import SecuritySection from "@/section/syarat-ketentuan/security-section";
import DataUsagePolicySection from "@/section/syarat-ketentuan/data-usage-policy-section";
import RightsAndObligationSection from "@/section/syarat-ketentuan/rights-and-obligations-section";
import ResponsibilitySection from "@/section/syarat-ketentuan/responsibility-section";
import IntellectualPropertRightsSection from "@/section/syarat-ketentuan/intellectual-propery-rights-section";
import LawSection from "@/section/syarat-ketentuan/law-section";
import CompensationSection from "@/section/syarat-ketentuan/compensation-section";
import ForceMajeurSection from "@/section/syarat-ketentuan/force-majeur";
import ProhibitionSection from "@/section/syarat-ketentuan/prohibition-section";
import ConclusionSection from "@/section/syarat-ketentuan/conclusion-section";
import ConsumerComplaintServicesSection from "@/section/syarat-ketentuan/consumer-complaint-services-section";
import NavbarSecondary from "@/components/layout/navbar/navbar";

import { ArrowUpIcon } from "lucide-react";

export default async function TermsConditionPage() {
  return (
    <main className="!scroll-smooth">
      <NavbarSecondary hrefLink="/" />

      <IntroductionSection />

      <ListOfContent />

      <GeneralSection />

      <UsageSection />

      <OrderSection />

      <AgentTerms />

      <TermsAndConditionSection />

      <ProductPrice />

      <PaymentProcedureSection />

      <ChangesAndCancellationSection />

      <SecuritySection />

      <DataUsagePolicySection />

      <RightsAndObligationSection />

      <ResponsibilitySection />

      <IntellectualPropertRightsSection />

      <LawSection />

      <CompensationSection />

      <ForceMajeurSection />

      <ProhibitionSection />

      <ConclusionSection />

      <ConsumerComplaintServicesSection />

      <Navigation />
    </main>
  );
}

const Navigation = () => {
  return (
    <Link href="/syarat-ketentuan" className="scroll-smooth">
      <div className="fixed bottom-4 left-1/2 flex -translate-x-1/2 gap-1 rounded-full bg-primary px-4 py-3 shadow-custom-md">
        <span className="text-sm font-medium leading-4 tracking-wide text-white">
          Kembali ke atas
        </span>
        <ArrowUpIcon className="h-4 w-4 stroke-white" />
      </div>
    </Link>
  );
};
