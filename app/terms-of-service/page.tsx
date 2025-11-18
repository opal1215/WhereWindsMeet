import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Where Winds Meet Wiki',
  description: 'Terms of Service for Where Winds Meet Wiki. Review the terms and conditions for using our website.',
  robots: 'index, follow',
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-bg-primary pt-14 pb-20">
      <div className="max-w-[800px] mx-auto px-5">
        {/* Header */}
        <div className="py-16 border-b border-gold-dark/30">
          <h1 className="font-display text-5xl md:text-[48px] text-gold-primary font-bold mb-4">
            Terms of Service
          </h1>
          <p className="font-ui text-base text-text-muted">
            Last Updated: November 18, 2025
          </p>
        </div>

        {/* Content */}
        <article className="py-12 font-body text-lg text-text-secondary leading-[1.8] space-y-8">
          <section>
            <h2 className="font-display text-3xl md:text-[32px] text-gold-bright font-semibold mb-4">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using Where Winds Meet Wiki (the "Website"), you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by the above, please do not use this Website.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl md:text-[32px] text-gold-bright font-semibold mb-4">
              2. Description of Service
            </h2>
            <p>
              Where Winds Meet Wiki is a fan-made informational website providing guides, databases, tools, and resources for the game "Where Winds Meet." We are not affiliated with, endorsed by, or associated with the official game developers or publishers.
            </p>
            <p className="mt-4">
              The service includes but is not limited to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
              <li>Game guides and tutorials</li>
              <li>Item and character databases</li>
              <li>Interactive tools and calculators</li>
              <li>Community resources and tips</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-3xl md:text-[32px] text-gold-bright font-semibold mb-4">
              3. Use License
            </h2>
            <h3 className="font-display text-2xl md:text-[24px] text-gold-primary font-semibold mb-3 mt-6">
              3.1 Permitted Use
            </h3>
            <p>
              Permission is granted to temporarily access the materials (information or software) on Where Winds Meet Wiki for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
            </p>

            <h3 className="font-display text-2xl md:text-[24px] text-gold-primary font-semibold mb-3 mt-6">
              3.2 Restrictions
            </h3>
            <p>
              Under this license you may not:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
              <li>Modify or copy the materials without permission</li>
              <li>Use the materials for any commercial purpose or for any public display (commercial or non-commercial)</li>
              <li>Attempt to decompile or reverse engineer any software contained on the Website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-3xl md:text-[32px] text-gold-bright font-semibold mb-4">
              4. User Conduct
            </h2>
            <p>
              You agree to use the Website only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the Website. Prohibited behavior includes:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
              <li>Harassing or causing distress or inconvenience to any other user</li>
              <li>Transmitting obscene or offensive content</li>
              <li>Disrupting the normal flow of dialogue or otherwise acting in a manner that negatively affects other users</li>
              <li>Using automated systems or software to extract data from the Website (scraping)</li>
              <li>Attempting to gain unauthorized access to any portion of the Website</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-3xl md:text-[32px] text-gold-bright font-semibold mb-4">
              5. Intellectual Property
            </h2>
            <p>
              All content included on this Website, such as text, graphics, logos, images, and software, is the property of Where Winds Meet Wiki, the game developers, or other content suppliers and is protected by international copyright laws.
            </p>
            <p className="mt-4">
              <strong className="text-gold-bright font-semibold">Game Content:</strong> All game-related content, including but not limited to characters, items, locations, and lore from "Where Winds Meet," are the intellectual property of their respective owners. This Website uses such materials under fair use for informational and educational purposes.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl md:text-[32px] text-gold-bright font-semibold mb-4">
              6. Accuracy of Information
            </h2>
            <p>
              While we strive to provide accurate and up-to-date information, the materials on the Website may include technical, typographical, or photographic errors. We do not warrant that any of the materials on the Website are accurate, complete, or current.
            </p>
            <p className="mt-4">
              The Website may contain information about game mechanics, items, and strategies that may change due to game updates or patches. We make no guarantees about the accuracy of information following game updates.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl md:text-[32px] text-gold-bright font-semibold mb-4">
              7. External Links
            </h2>
            <p>
              The Website may contain links to third-party websites or services that are not owned or controlled by Where Winds Meet Wiki. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl md:text-[32px] text-gold-bright font-semibold mb-4">
              8. Disclaimer of Warranties
            </h2>
            <p>
              The materials on the Website are provided on an "as is" basis. Where Winds Meet Wiki makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl md:text-[32px] text-gold-bright font-semibold mb-4">
              9. Limitations of Liability
            </h2>
            <p>
              In no event shall Where Winds Meet Wiki or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on the Website, even if Where Winds Meet Wiki or an authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl md:text-[32px] text-gold-bright font-semibold mb-4">
              10. Revisions and Errata
            </h2>
            <p>
              The materials appearing on the Website could include technical, typographical, or photographic errors. We do not warrant that any of the materials on the Website are accurate, complete, or current. We may make changes to the materials contained on the Website at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl md:text-[32px] text-gold-bright font-semibold mb-4">
              11. Governing Law
            </h2>
            <p>
              These terms and conditions are governed by and construed in accordance with applicable laws, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl md:text-[32px] text-gold-bright font-semibold mb-4">
              12. Changes to Terms
            </h2>
            <p>
              We reserve the right to modify these terms at any time. We will notify users of any material changes by updating the "Last Updated" date at the top of this page. Your continued use of the Website following the posting of changes constitutes your acceptance of such changes.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl md:text-[32px] text-gold-bright font-semibold mb-4">
              13. Contact Information
            </h2>
            <p>
              If you have any questions about these Terms of Service, please contact us through our website or social media channels listed in the footer.
            </p>
          </section>

          <section className="mt-12 p-6 bg-bg-card border border-gold-dark/30 rounded-lg">
            <p className="text-base text-text-muted italic">
              By using this Website, you signify your acceptance of these Terms of Service. If you do not agree to these terms, please do not use our Website.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
