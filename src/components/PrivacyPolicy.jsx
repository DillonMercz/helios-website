import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Privacy Policy
        </h2>
        <p className="mt-4 text-lg text-gray-500">
          Last updated: [Date]
        </p>
      </div>

      <div className="mt-12 prose prose-lg text-gray-500 mx-auto">
        <h3>Introduction</h3>
        <p>
          Helios Labs ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and disclose information about you.
        </p>

        <h3>Information We Collect</h3>
        <p>
          We may collect the following types of information:
          <ul>
            <li>Personal Information: Name, email address, phone number</li>
            <li>Usage Data: Information about how you use our website</li>
            <li>Technical Data: IP address, browser type, operating system</li>
          </ul>
        </p>

        <h3>How We Use Your Information</h3>
        <p>
          We may use your information for:
          <ul>
            <li>Providing and improving our services</li>
            <li>Communicating with you</li>
            <li>Analyzing website usage</li>
            <li>Complying with legal obligations</li>
          </ul>
        </p>

        <h3>Data Security</h3>
        <p>
          We implement appropriate security measures to protect your information. However, no method of transmission over the internet is 100% secure.
        </p>

        <h3>Your Rights</h3>
        <p>
          You have the right to:
          <ul>
            <li>Access your personal data</li>
            <li>Request correction or deletion</li>
            <li>Object to processing</li>
            <li>Request data portability</li>
          </ul>
        </p>

        <h3>Contact Us</h3>
        <p>
          If you have any questions about this Privacy Policy, please contact us at privacy@helioslabs.com.
        </p>
      </div>
    </div>
  );
}
