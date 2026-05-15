export default function TermsPage() {
  return (
    <main className="bg-white min-h-screen py-36">
      <div className="container mx-auto max-w-3xl px-6">
        <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-[#09090B] mb-8">
          Terms of Service
        </h1>
        <p className="text-sm text-[#71717A] mb-12 uppercase tracking-widest font-bold">
          Last Updated: May 15, 2026
        </p>
        
        <div className="prose prose-zinc max-w-none prose-headings:text-[#09090B] prose-headings:font-medium prose-p:text-[#52525B] prose-p:leading-relaxed">
          <p>
            Welcome to NexaWorks. By using CompanyBrain, you agree to the following terms and conditions. Please read them carefully.
          </p>

          <h2>1. Service Pilot & Subscription</h2>
          <p>
            NexaWorks provides CompanyBrain as a Software-as-a-Service (SaaS) platform. We offer 14-day free pilots for qualified enterprise teams. We reserve the right to limit or terminate pilot access at our discretion.
          </p>

          <h2>2. Data Ownership</h2>
          <p>
            You retain 100% ownership of all data you index into CompanyBrain. NexaWorks does not claim any rights to your proprietary documents, Slack history, or ticket data beyond what is necessary to provide the service.
          </p>

          <h2>3. Acceptable Use</h2>
          <p>
            You agree not to use CompanyBrain for any illegal activities or to index sensitive personal information (PII) that violates regional data protection laws without proper authorization.
          </p>

          <h2>4. Limitation of Liability</h2>
          <p>
            NexaWorks provides CompanyBrain "as is." While we strive for 100% accuracy through our deterministic retrieval layer, we are not liable for any business decisions made based on AI-generated responses.
          </p>

          <h2>5. Modifications to Terms</h2>
          <p>
            We may update these terms from time to time. Continued use of the service after such changes constitutes your acceptance of the new terms.
          </p>
        </div>
      </div>
    </main>
  );
}
