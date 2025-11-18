import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Where Winds Meet Wiki',
  description: 'Privacy Policy for Where Winds Meet Wiki. Learn how we collect, use, and protect your information.',
  robots: 'index, follow',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-bg-primary pt-14 pb-20">
      <div className="max-w-[800px] mx-auto px-5">
        {/* Header */}
        <div className="py-16 border-b border-gold-dark/30">
          <h1 className="font-display text-5xl md:text-[48px] text-gold-primary font-bold mb-4">
            Privacy Policy
          </h1>
          <p className="font-ui text-base text-text-muted">
            Last Updated: November 18, 2025
          </p>
        </div>

        {/* Content */}
        <article className="py-12 font-body text-lg text-text-secondary leading-[1.8] space-y-8">
          <section>
            <h2 className="font-display text-3xl md:text-[32px] text-gold-bright font-semibold mb-4">
              1. Introduction
            </h2>
            <p>
              Welcome to Where Winds Meet Wiki ("we," "our," or "us"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl md:text-[32px] text-gold-bright font-semibold mb-4">
              2. Information We Collect
            </h2>
            <h3 className="font-display text-2xl md:text-[24px] text-gold-primary font-semibold mb-3 mt-6">
              2.1 Automatically Collected Information
            </h3>
            <p>
              When you visit our website, we may automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the site, we collect information about the individual web pages that you view, what websites or search terms referred you to the site, and information about how you interact with the site.
            </p>

            <h3 className="font-display text-2xl md:text-[24px] text-gold-primary font-semibold mb-3 mt-6">
              2.2 Personal Information
            </h3>
            <p>
              We do not actively collect personal information such as names, email addresses, or contact details unless you voluntarily provide them through contact forms or newsletter subscriptions (if applicable). Any personal information you provide is used solely for the purpose you intended.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl md:text-[32px] text-gold-bright font-semibold mb-4">
              3. Use of Your Information
            </h2>
            <p>
              We use the information we collect in the following ways:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
              <li>To improve and optimize our website</li>
              <li>To understand how visitors use our site</li>
              <li>To analyze site traffic and usage patterns</li>
              <li>To provide, maintain, and improve our content</li>
              <li>To respond to user inquiries and support requests</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-3xl md:text-[32px] text-gold-bright font-semibold mb-4">
              4. Cookies and Tracking Technologies
            </h2>
            <p>
              We may use cookies and similar tracking technologies to track activity on our website and store certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl md:text-[32px] text-gold-bright font-semibold mb-4">
              5. Third-Party Services
            </h2>
            <p>
              We may use third-party service providers to monitor and analyze the use of our website. These third parties have access to your information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose. Examples may include:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
              <li><strong className="text-gold-bright font-semibold">Analytics Services:</strong> To understand site usage and improve user experience</li>
              <li><strong className="text-gold-bright font-semibold">Hosting Providers:</strong> To host and maintain our website infrastructure</li>
              <li><strong className="text-gold-bright font-semibold">Content Delivery Networks:</strong> To deliver content efficiently</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-3xl md:text-[32px] text-gold-bright font-semibold mb-4">
              6. Data Security
            </h2>
            <p>
              We implement appropriate technical and organizational security measures to protect your information. However, please be aware that no method of transmission over the Internet or method of electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl md:text-[32px] text-gold-bright font-semibold mb-4">
              7. Your Data Protection Rights
            </h2>
            <p>
              Depending on your location, you may have the following rights regarding your personal information:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
              <li><strong className="text-gold-bright font-semibold">Right to Access:</strong> You have the right to request copies of your personal data</li>
              <li><strong className="text-gold-bright font-semibold">Right to Rectification:</strong> You have the right to request correction of inaccurate information</li>
              <li><strong className="text-gold-bright font-semibold">Right to Erasure:</strong> You have the right to request deletion of your personal data</li>
              <li><strong className="text-gold-bright font-semibold">Right to Restrict Processing:</strong> You have the right to request restriction of processing your personal data</li>
              <li><strong className="text-gold-bright font-semibold">Right to Data Portability:</strong> You have the right to request transfer of your data</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-3xl md:text-[32px] text-gold-bright font-semibold mb-4">
              8. Children's Privacy
            </h2>
            <p>
              Our website does not knowingly collect personally identifiable information from children under the age of 13. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl md:text-[32px] text-gold-bright font-semibold mb-4">
              9. Changes to This Privacy Policy
            </h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl md:text-[32px] text-gold-bright font-semibold mb-4">
              10. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us through our website or social media channels listed in the footer.
            </p>
          </section>

          <section className="mt-12 p-6 bg-bg-card border border-gold-dark/30 rounded-lg">
            <p className="text-base text-text-muted italic">
              This Privacy Policy is designed to comply with general data protection regulations including GDPR and CCPA. This is a fan-made wiki website and is not affiliated with the official Where Winds Meet game developers.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
