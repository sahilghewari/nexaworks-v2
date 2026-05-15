export default function PrivacyPage() {
  return (
    <main className="bg-white min-h-screen py-36">
      <div className="container mx-auto max-w-3xl px-6">
        <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-[#09090B] mb-8">
          Privacy Policy
        </h1>
        <p className="text-sm text-[#71717A] mb-12 uppercase tracking-widest font-bold">
          Last Updated: May 15, 2026
        </p>
        
        <div className="prose prose-zinc max-w-none prose-headings:text-[#09090B] prose-headings:font-medium prose-p:text-[#52525B] prose-p:leading-relaxed">
          <p>
            At NexaWorks, we take your privacy and the security of your data seriously. This Privacy Policy explains how we collect, use, and protect your information when you use CompanyBrain.
          </p>

          <h2>1. Data Collection</h2>
          <p>
            We collect information that you provide directly to us when requesting a pilot, setting up an account, or connecting your internal knowledge bases (Slack, Jira, Notion). This includes business contact information and metadata required for indexing.
          </p>

          <h2>2. Use of Information</h2>
          <p>
            Your data is used solely to provide and improve the CompanyBrain service. **Crucially, we do not use your proprietary data to train any AI models that are shared across customers.** Your data remains isolated within your specific organizational context.
          </p>

          <h2>3. Data Retention</h2>
          <p>
            We retain your information only as long as necessary to provide the services you have requested. If you terminate your pilot or subscription, you can request the immediate and permanent deletion of all indexed data.
          </p>

          <h2>4. Third-Party Services</h2>
          <p>
            We do not sell your information to third parties. We only share information with service providers (e.g., cloud hosting, email delivery) who are necessary to operate our platform and who adhere to strict confidentiality agreements.
          </p>

          <h2>5. Your Rights</h2>
          <p>
            You have the right to access, correct, or delete your personal and organizational information at any time. For inquiries, contact us at hello@nexaworks.tech.
          </p>
        </div>
      </div>
    </main>
  );
}
