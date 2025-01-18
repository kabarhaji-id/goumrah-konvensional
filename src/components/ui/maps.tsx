import React from "react";

interface GoogleMapsEmbedProps extends React.HTMLAttributes<HTMLDivElement> {
  mapUrl?: string;
  mapUrlMobile?: string;
}

const GoogleMapsEmbed = ({ mapUrl, mapUrlMobile }: GoogleMapsEmbedProps) => {
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

  if (isMobile) {
    return (
      <a href={mapUrlMobile} target="_self" rel="noopener noreferrer">
        <iframe
          src={mapUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </a>
    );
  }

  return (
    <a href={mapUrl} target="_self">
      <iframe
        src={mapUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </a>
  );
};

export default GoogleMapsEmbed;
