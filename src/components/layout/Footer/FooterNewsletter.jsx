import { FcNews } from "react-icons/fc";

const FooterNewsletter = () => {
  return (
    <div className="border-t border-white/10">
      <div className="max-w-7xl mx-auto px-10 py-14 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-1.5">
          <FcNews />   Subscribe to our newsletter to grt exclusive deals & offers
          </h3>
          <p className="opacity-80">
            Exclusive travel deals, inspiration & updates.
          </p>
        </div>

        <div className="flex gap-4 flex-col sm:flex-row">
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full"
          />
          <button className="btn btn-primary">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default FooterNewsletter;
