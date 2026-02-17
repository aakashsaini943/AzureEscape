import { useEffect, useState } from "react";
import {
  FaPassport,
  FaFileUpload,
  FaSearch,
  FaCheckCircle,
  FaGlobe,
  FaExternalLinkAlt,
} from "react-icons/fa";

const steps = [
  {
    icon: FaPassport,
    title: "Choose Destination",
    desc: "Select the country you want to apply a visa for.",
  },
  {
    icon: FaFileUpload,
    title: "Upload Documents",
    desc: "Securely upload passport and required documents.",
  },
  {
    icon: FaSearch,
    title: "Expert Review",
    desc: "Visa experts verify and process your application.",
  },
  {
    icon: FaCheckCircle,
    title: "Visa Approved",
    desc: "Receive your visa digitally or via courier.",
  },
];

const thirdPartyServices = [
  {
    name: "VFS Global",
    desc: "Official visa application partner for multiple countries.",
    url: "https://visa.vfsglobal.com",
  },
  {
    name: "Atlys",
    desc: "Digital-first visa processing platform with fast turnaround.",
    url: "https://www.atlys.com",
  },
  {
    name: "VisaHQ",
    desc: "Online visa service for tourist, business, and travel visas.",
    url: "https://www.visahq.com",
  },
];

const Visa = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-amber-50 py-20 px-4">
      
      {/* Ambient Glow Effects */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-amber-200/40 blur-3xl" />
      <div className="absolute bottom-0 -right-32 h-[400px] w-[400px] rounded-full bg-orange-200/40 blur-3xl" />

      <div className="relative max-w-6xl mx-auto">

        {/* HERO */}
        <div
          className={`text-center max-w-3xl mx-auto transition-all duration-700 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 px-4 py-1 text-xs font-semibold text-amber-900 shadow">
            <FaPassport /> VISA SERVICE
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold text-gray-900">
            Travel Visa,
            <span className="block bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              Made Simple
            </span>
          </h1>

          <p className="mt-5 text-gray-600 text-base sm:text-lg leading-relaxed">
            Apply for international visas quickly and securely.  
            Prefer another provider? Use our verified third-party partners.
          </p>

          <button className="mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-8 py-4 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
            Apply for Visa
          </button>
        </div>

        {/* STEPS */}
        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => {
            const Icon = step.icon;

            return (
              <div
                key={i}
                className={`group relative rounded-3xl bg-white p-6 border border-amber-200/40 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${
                  show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-200/30 to-orange-200/30 opacity-0 blur-xl transition group-hover:opacity-100" />

                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-orange-400 text-amber-900 shadow">
                    <Icon />
                  </div>

                  <h3 className="mt-4 text-lg font-bold text-gray-900">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* THIRD-PARTY VISA SERVICES */}
        <div className="mt-24">
          <h2
            className={`text-center text-2xl sm:text-3xl font-bold text-gray-900 transition-all duration-700 ${
              show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Apply via Third-Party Visa Providers
          </h2>

          <p
            className={`text-center mt-3 text-gray-600 transition-all duration-700 ${
              show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Choose an external visa agency if you prefer another service.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {thirdPartyServices.map((service, i) => (
              <div
                key={i}
                className={`group relative rounded-2xl bg-white p-5 border border-amber-200/40 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-lg ${
                  show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-100/40 to-orange-100/40 opacity-0 blur-xl transition group-hover:opacity-100" />

                <div className="relative">
                  <h3 className="text-sm font-semibold text-gray-900">
                    {service.name}
                  </h3>

                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                    {service.desc}
                  </p>

                  <a
                    href={service.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-amber-600 hover:text-amber-700"
                  >
                    Apply Now <FaExternalLinkAlt className="text-[10px]" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Redirect Disclaimer */}
          <p className="text-center text-xs text-gray-500 mt-6">
            You will be redirected to an external partner website.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Visa;
