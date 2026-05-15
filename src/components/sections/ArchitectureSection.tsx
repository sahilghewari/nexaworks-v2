"use client";

import { motion } from "framer-motion";
import { Database, ArrowRight, BrainCircuit, Bot } from "lucide-react";

export function ArchitectureSection() {
  return (
    <section className="bg-white py-32 border-b border-[#E4E4E7]">
      <div className="container mx-auto max-w-6xl px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Left Side (Image / UI Block) */}
          <motion.div
            className="bg-[#EAEAEA] rounded-none aspect-square relative flex items-center justify-center p-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white border border-[#E4E4E7] rounded-md w-full h-[80%] shadow-sm flex flex-col overflow-hidden">
               <div className="border-b border-[#E4E4E7] px-6 py-4 font-semibold text-[#09090B]">Issues</div>
               <div className="flex-1 p-6 flex flex-col gap-4">
                  <div className="bg-white h-auto rounded border border-[#E4E4E7] w-full p-4 flex flex-col gap-1 shadow-sm">
                    <span className="text-xs font-semibold text-[#09090B]">Slack</span>
                    <span className="text-sm text-[#52525B]">"Where is the tracking link for order #1234?"</span>
                    <span className="text-xs font-medium text-[#10B981] mt-1">✓ Resolved instantly</span>
                  </div>
                  <div className="bg-white h-auto rounded border border-[#E4E4E7] w-full p-4 flex flex-col gap-1 shadow-sm">
                    <span className="text-xs font-semibold text-[#09090B]">Zendesk</span>
                    <span className="text-sm text-[#52525B]">"How do I reset my API key?"</span>
                    <span className="text-xs font-medium text-[#10B981] mt-1">✓ Resolved instantly</span>
                  </div>
                  <div className="bg-white h-auto rounded border border-[#E4E4E7] w-full p-4 flex flex-col gap-1 shadow-sm opacity-60">
                    <span className="text-xs font-semibold text-[#09090B]">Teams</span>
                    <span className="text-sm text-[#52525B]">"My account is locked out."</span>
                    <span className="text-xs font-medium text-[#6366F1] mt-1">→ Routed to Security Team</span>
                  </div>
               </div>
            </div>
          </motion.div>

          {/* Right Side (Copy & CTA) */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 text-sm font-semibold text-[#09090B] uppercase tracking-wide">
              <Database className="h-4 w-4" /> Omnichannel
            </div>
            
            <h2 className="text-5xl font-medium tracking-tight text-[#09090B] leading-[1.1]">
              Support customers <br/> <span className="text-[#A1A1AA]">anywhere.</span>
            </h2>
            
            <p className="text-lg text-[#52525B] max-w-md">
              Bring every customer conversation — Slack, Teams, Email, Chat, Teams, Discord and more — into a single view.
            </p>

            <div className="mt-4">
              <button className="bg-[#6366F1] text-white px-8 py-4 font-semibold tracking-wide hover:bg-[#4F46E5] transition-colors rounded-none">
                Learn about Omnichannel Support
              </button>
            </div>

            <div className="mt-8 text-sm text-[#52525B] leading-relaxed max-w-sm">
              Manage <span className="font-semibold underline">Slack Connect and Community</span> channels in Pylon<br/>
              Support <span className="font-semibold underline">Microsoft Teams</span> users without switching apps<br/>
              Track all <span className="font-semibold underline">Discord</span> conversations and forums in one place
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
