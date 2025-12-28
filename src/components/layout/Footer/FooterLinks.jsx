const FooterLinks = ({ title, links }) => {
  return (
    <div>
      {/* Heading */}
      <h4 className="text-white font-semibold mb-4 pb-2 border-b border-white/10 sm:border-none">
        {title}
      </h4>

      {/* Links */}
      <ul className="flex flex-wrap gap-y-2 text-sm text-gray-400 sm:flex-col">
        {links.map((link, index) => (
          <li
            key={index}
            className="w-1/2 sm:w-full hover:text-white transition"
          >
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
