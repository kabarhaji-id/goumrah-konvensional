"use client";
import React, { useState, useEffect } from "react";
import { ServiceCard } from "./component/ServicesCard";
import servicesData from "@/data/about/services.json";
import { Service, UmrahServicesState } from "@/data/about/services";

const ServicesSection: React.FC = () => {
  const [state, setState] = useState<UmrahServicesState>({
    services: [],
    error: null,
    isLoading: true
  });

  useEffect(() => {
    setState({
      services: servicesData.services,
      error: null,
      isLoading: false
    });
  }, []);

  if (state.error) {
    return (
      <div role="alert" className="p-4 text-red-600" aria-live="polite">
        Error loading services: {state.error}
      </div>
    );
  }

  return (
    <div className="relative">
      <div
        className="flex overflow-x-auto space-x-6 bg-white scroll-smooth snap-x snap-mandatory scrollbar-hide"
        role="region"
        aria-label="Services"
      >
        {state.isLoading
          ? Array.from({ length: 5 }).map((_, index) => (
            <ServiceCard key={`skeleton-${index}`} icon="" title="" subtitle="" isLoading />
          ))
          : state.services.map((service: Service, index: number) => ( // ✅ Change ServiceData to Service
            <ServiceCard key={`service-${index}`} {...service} isLoading={false} />
          ))}
      </div>
    </div>
  );
};

export { ServicesSection };
