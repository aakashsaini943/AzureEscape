import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-10">

        {/* Header */}
        <header className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
            Terms & Conditions
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            Last updated: February 2026
          </p>
        </header>

        {/* Intro */}
        <Section title="1. Introduction">
          <p>
            Welcome to <strong>AzureEscape</strong>. By accessing or using our
            website and services, you agree to comply with and be bound by the
            following terms and conditions. Please read them carefully.
          </p>
        </Section>

        {/* Use of Service */}
        <Section title="2. Use of Our Services">
          <ul>
            <li>You must be at least 18 years old to make bookings.</li>
            <li>
              You agree to provide accurate and complete information during
              reservations.
            </li>
            <li>
              Misuse of the platform, including fraudulent bookings, is strictly
              prohibited.
            </li>
          </ul>
        </Section>

        {/* Booking Policy */}
        <Section title="3. Booking & Reservations">
          <p>
            All bookings made through AzureEscape are subject to availability
            and confirmation. Prices displayed are subject to change without
            prior notice until the booking is completed.
          </p>
        </Section>

        {/* Payments */}
        <Section title="4. Payments & Pricing">
          <ul>
            <li>
              Payments must be completed using the available payment methods.
            </li>
            <li>
              AzureEscape reserves the right to cancel bookings due to payment
              failure.
            </li>
            <li>
              Taxes and fees may apply depending on the service selected.
            </li>
          </ul>
        </Section>

        {/* Cancellations */}
        <Section title="5. Cancellations & Refunds">
          <p>
            Cancellation policies vary depending on airlines, hotels, and travel
            providers. Refund eligibility depends on the fare rules and supplier
            policies.
          </p>
        </Section>

        {/* Liability */}
        <Section title="6. Limitation of Liability">
          <p>
            AzureEscape acts as an intermediary between users and service
            providers. We are not liable for delays, cancellations, or service
            failures caused by third-party vendors.
          </p>
        </Section>

        {/* User Responsibility */}
        <Section title="7. User Responsibilities">
          <ul>
            <li>
              Users are responsible for ensuring valid travel documents (visa,
              passport, ID).
            </li>
            <li>
              Compliance with airline/hotel/operator rules is mandatory.
            </li>
          </ul>
        </Section>

        {/* Privacy */}
        <Section title="8. Privacy Policy">
          <p>
            Your use of AzureEscape is also governed by our Privacy Policy,
            explaining how we collect and use personal data.
          </p>
        </Section>

        {/* Modifications */}
        <Section title="9. Changes to Terms">
          <p>
            AzureEscape reserves the right to modify these terms at any time.
            Continued use of the platform constitutes acceptance of updated
            terms.
          </p>
        </Section>

        {/* Contact */}
        <Section title="10. Contact Us">
          <p>
            For questions regarding these terms, please contact us at{" "}
            <span className="text-sky-600 font-medium">
              support@azureescape.com
            </span>
          </p>
        </Section>

      </div>
    </div>
  );
};

export default TermsAndConditions;

/* ================= Reusable Section ================= */

const Section = ({ title, children }) => {
  return (
    <section className="mb-6">
      <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
        {title}
      </h2>

      <div className="text-sm sm:text-[15px] text-gray-600 leading-relaxed space-y-2">
        {children}
      </div>
    </section>
  );
};
