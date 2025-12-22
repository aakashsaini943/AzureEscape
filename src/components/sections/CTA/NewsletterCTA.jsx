const NewsletterCTA = () => {
  return (
    <div className="bg-base-100 rounded-3xl p-10 shadow-xl">
      <h3 className="text-3xl font-bold mb-3">
        Get Travel Deals in Your Inbox 💌
      </h3>
      <p className="opacity-70 mb-6">
        Weekly deals, hidden gems & exclusive discounts.
      </p>

      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="input input-bordered flex-1"
        />
        <button className="btn btn-primary">
          Subscribe
        </button>
      </div>

      <p className="text-sm opacity-50 mt-3">
        No spam. Unsubscribe anytime.
      </p>
    </div>
  );
};

export default NewsletterCTA;
