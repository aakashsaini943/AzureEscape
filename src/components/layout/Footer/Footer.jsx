import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";
import FooterNewsletter from "./FooterNewsletter";
import FooterBottom from "./FooterBottom";

const Footer = () => {
  return (
    <footer className="bg-linear-to-br from-gray-900 via-slate-900 to-black text-gray-300">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-10 py-20 grid gap-14 lg:grid-cols-5 md:grid-cols-2">
        <div className="lg:col-span-2">
          <FooterBrand />
        </div>

        <FooterLinks
          title="Company"
          links={["About Us", "Careers", "Blog", "Press"]}
        />

        <FooterLinks
          title="Explore"
          links={[
            "Popular Destinations",
            "Top Packages",
            "Travel Guides",
            "Experiences",
          ]}
        />

        <FooterLinks
          title="Support"
          links={[
            "Help Center",
            "Contact Us",
            "Cancellation Policy",
            "Safety Information",
          ]}
        />
      </div>

      <FooterNewsletter />
      <FooterBottom />
    </footer>
  );
};

export default Footer;
