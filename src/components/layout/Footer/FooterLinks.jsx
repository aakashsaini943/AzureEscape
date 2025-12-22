const FooterLinks = ({ title, links }) => {
  return (
    <div>
      <h3 className="text-lg font-semibold text-white mb-4">
        {title}
      </h3>

      <ul className="space-y-3">
        {links.map((link) => (
          <li
            key={link}
            className="hover:text-white cursor-pointer transition"
          >
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
