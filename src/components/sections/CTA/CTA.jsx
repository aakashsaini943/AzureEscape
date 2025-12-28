import PrimaryCTA from "./PrimaryCTA";
import NewsletterCTA from "./NewsletterCTA";
import AppDownloadCTA from "./AppDownloadCTA";
import TrustStrip from "./TrustStrip";

const CTA = () => {
  return (
    <>
      <TrustStrip />
      <PrimaryCTA />
      <AppDownloadCTA />
      <NewsletterCTA />
    </>
  );
};

export default CTA;
