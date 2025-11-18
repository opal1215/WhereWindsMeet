import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclaimer | Where Winds Meet Wiki',
  description: 'Disclaimer for Where Winds Meet Wiki. Important information about our fan-made website and third-party content.',
  robots: 'index, follow',
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-bg-primary pt-14 pb-20">
      <div className="max-w-[800px] mx-auto px-5">
        {/* Header */}
        <div className="py-16 border-b border-gold-dark/30">
          <h1 className="font-display text-5xl md:text-[48px] text-gold-primary font-bold mb-4">
            Disclaimer
          </h1>
          <p className="font-ui text-base text-text-muted">
            Last Updated: November 18, 2025
          </p>
        </div>

        {/* Content */}
        <article className="py-12 font-body text-lg text-text-secondary leading-[1.8] space-y-8">
          <section className="p-6 bg-gold-primary/10 border border-gold-primary/30 rounded-lg">
            <p className="text-gold-bright font-semibold text-xl">
              This is an unofficial fan-made website and is not affiliated with, endorsed by, or associated with the developers or publishers of "Where Winds Meet."
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl md:text-[32px] text-gold-bright font-semibold mb-4">
              1. Fan-Made Content
            </h2>
            <p>
              Where Winds Meet Wiki is a fan-created website dedicated to providing information, guides, and resources for players of the game "Where Winds Meet." This website is created and maintained by fans of the game and is not an official source of information.
            </p>
            <p className="mt-4">
              We are not affiliated with, endorsed by, sponsored by, or specifically approved by the game's developers, publishers, or any of their affiliates. All trademarks, service marks, trade names, trade dress, product names, and logos appearing on this website are the property of their respective owners.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl md:text-[32px] text-gold-bright font-semibold mb-4">
              2. Intellectual Property
            </h2>
            <p>
              All game-related content, including but not limited to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
              <li>Character names, designs, and artwork</li>
              <li>Item names, descriptions, and statistics</li>
              <li>Location names and descriptions</li>
              <li>Game mechanics and systems</li>
              <li>Storylines, quests, and lore</li>
              <li>Screenshots and game imagery</li>
              <li>Music and sound effects</li>
            </ul>
            <p className="mt-4">
              are the intellectual property of their respective copyright holders. This website uses such materials under the principles of fair use for informational, educational, and commentary purposes only.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl md:text-[32px] text-gold-bright font-semibold mb-4">
              3. Accuracy and Completeness
            </h2>
            <p>
              While we make every effort to ensure the accuracy and completeness of the information presented on this website, we cannot guarantee that all information is current, accurate, or complete. The game "Where Winds Meet" is subject to regular updates, patches, and changes that may affect the accuracy of information on this website.
            </p>
            <p className="mt-4">
              <strong className="text-gold-bright font-semibold">Game Updates:</strong> Game mechanics, item statistics, quest information, and other game-related data may change without notice. We strive to update our content regularly, but there may be delays in reflecting the most recent game changes.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl md:text-[32px] text-gold-bright font-semibold mb-4">
              4. No Warranties
            </h2>
            <p>
              The information, guides, tools, and resources on this website are provided "as is" without warranty of any kind, either expressed or implied. We do not warrant that:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
              <li>The information is accurate, complete, or current</li>
              <li>The website will be available at all times without interruption</li>
              <li>Errors or defects will be corrected</li>
              <li>The website is free of viruses or other harmful components</li>
              <li>The results of using the website or its tools will meet your requirements</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-3xl md:text-[32px] text-gold-bright font-semibold mb-4">
              5. Limitation of Liability
            </h2>
            <p>
              In no event shall Where Winds Meet Wiki, its creators, contributors, or affiliates be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of or inability to use this website, including but not limited to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
              <li>Loss of game progress or in-game items due to following guides or strategies</li>
              <li>Account suspensions or bans</li>
              <li>Loss of time or opportunity</li>
              <li>Any other damages or losses</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-3xl md:text-[32px] text-gold-bright font-semibold mb-4">
              6. Third-Party Content and Links
            </h2>
            <p>
              This website may contain links to third-party websites, services, or resources that are not owned or controlled by Where Winds Meet Wiki. We have no control over, and assume no responsibility for:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
              <li>The content, privacy policies, or practices of any third-party websites</li>
              <li>The accuracy or reliability of information on third-party sites</li>
              <li>Products or services offered by third parties</li>
              <li>Any damages or losses caused by your use of third-party content</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-3xl md:text-[32px] text-gold-bright font-semibold mb-4">
              7. User-Generated Content
            </h2>
            <p>
              If this website allows user comments, submissions, or contributions (currently or in the future), please note that:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
              <li>User opinions do not reflect the views of Where Winds Meet Wiki</li>
              <li>We are not responsible for user-generated content</li>
              <li>Users are solely responsible for their own content and contributions</li>
              <li>We reserve the right to remove any content at our discretion</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-3xl md:text-[32px] text-gold-bright font-semibold mb-4">
              8. Fair Use Statement
            </h2>
            <p>
              This website operates under the principles of fair use. The use of copyrighted game materials is intended for:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
              <li><strong className="text-gold-bright font-semibold">Educational purposes:</strong> Teaching players about game mechanics and systems</li>
              <li><strong className="text-gold-bright font-semibold">Commentary and criticism:</strong> Discussing and analyzing game content</li>
              <li><strong className="text-gold-bright font-semibold">Informational purposes:</strong> Providing factual information about the game</li>
              <li><strong className="text-gold-bright font-semibold">Non-commercial use:</strong> This is a fan site with no commercial intent</li>
            </ul>
            <p className="mt-4">
              If you are a copyright holder and believe that content on this website infringes your rights, please contact us, and we will promptly address your concerns.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl md:text-[32px] text-gold-bright font-semibold mb-4">
              9. Changes to This Disclaimer
            </h2>
            <p>
              We reserve the right to modify this disclaimer at any time. Changes will be effective immediately upon posting to the website. Your continued use of the website following the posting of changes constitutes your acceptance of such changes.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl md:text-[32px] text-gold-bright font-semibold mb-4">
              10. Contact Information
            </h2>
            <p>
              If you have any questions, concerns, or copyright-related inquiries regarding this disclaimer, please contact us through the channels provided in the footer of this website.
            </p>
          </section>

          <section className="mt-12 p-6 bg-bg-card border border-gold-dark/30 rounded-lg space-y-4">
            <p className="text-base text-text-secondary">
              <strong className="text-gold-bright font-semibold">Copyright Notice:</strong> "Where Winds Meet" and all related marks, logos, characters, and imagery are trademarks or registered trademarks of their respective owners. This website respects all copyrights and intellectual property rights.
            </p>
            <p className="text-base text-text-secondary">
              <strong className="text-gold-bright font-semibold">Reporting Issues:</strong> If you believe any content on this website infringes your intellectual property rights or violates applicable laws, please contact us immediately so we can address your concerns.
            </p>
            <p className="text-base text-text-muted italic">
              By using this website, you acknowledge that you have read, understood, and agree to be bound by this disclaimer.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
