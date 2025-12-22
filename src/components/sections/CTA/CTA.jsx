import PrimaryCTA from "./PrimaryCTA";
import NewsletterCTA from "./NewsletterCTA";
import AppDownloadCTA from "./AppDownloadCTA";
import TrustStrip from "./TrustStrip";

const CTA = () => {
  return (


    <section className="py-28 bg-linear-to-b from-base-200 to-base-100">
      <div className="max-w-7xl mx-auto px-10 space-y-20">

        {/* Main CTA */}
        <PrimaryCTA />

        {/* Supporting CTAs */}
        <div className="grid md:grid-cols-2 gap-10">
          <NewsletterCTA />
          <AppDownloadCTA />
        </div>

        {/* Trust */}
        <TrustStrip />
      </div>
    </section>
   
  );
};

export default CTA;
