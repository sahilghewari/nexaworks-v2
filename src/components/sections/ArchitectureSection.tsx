"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Database, GitBranch, GitMerge, Network } from "lucide-react";

export function ArchitectureSection() {
  return (
    <section className="bg-white py-32 border-b border-[#E4E4E7]">
      <div className="container mx-auto max-w-6xl px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Left Side (Visual Block - Wedge Strategy) */}
          <motion.div
            className="bg-[#FAFAFA] rounded-xl border border-[#E4E4E7] aspect-square relative flex items-center justify-center p-8 shadow-sm"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col items-center w-full h-full justify-center gap-6">
              {/* Core Brain */}
              <div className="bg-[#09090B] text-white px-6 py-4 rounded-xl shadow-lg flex items-center gap-3 z-10">
                <BrainCircuit className="h-6 w-6 text-[#D35A3C]" />
                <span className="font-semibold text-lg tracking-wide">Company Brain</span>
              </div>
              
              {/* Connecting Lines */}
              <div className="flex w-full justify-center -my-2 opacity-30">
                <svg width="240" height="40" viewBox="0 0 240 40">
                  <path d="M120,0 L120,20 L20,20 L20,40" fill="none" stroke="#09090B" strokeWidth="2" />
                  <path d="M120,0 L120,40" fill="none" stroke="#09090B" strokeWidth="2" />
                  <path d="M120,0 L120,20 L220,20 L220,40" fill="none" stroke="#09090B" strokeWidth="2" />
                </svg>
              </div>

              {/* Branches */}
              <div className="flex w-full justify-between items-start z-10 px-4 gap-2">
                
                {/* Branch 1 - Support (Wedge) */}
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-white border-2 border-[#D35A3C] shadow-md px-4 py-3 rounded-lg flex flex-col items-center">
                    <span className="text-sm font-bold text-[#D35A3C]">Support</span>
                  </div>
                  <div className="text-[10px] text-center text-[#52525B] font-medium leading-tight mt-1">
                    Escalations<br/>
                    Drift Detection
                  </div>
                </div>

                {/* Branch 2 - Sales */}
                <div className="flex flex-col items-center gap-2 opacity-50">
                  <div className="bg-white border border-[#E4E4E7] px-4 py-3 rounded-lg flex flex-col items-center">
                    <span className="text-sm font-semibold text-[#09090B]">Sales</span>
                  </div>
                  <div className="text-[10px] text-center text-[#52525B] font-medium leading-tight mt-1">
                    Playbooks<br/>
                    CRM
                  </div>
                </div>

                {/* Branch 3 - HR/Eng */}
                <div className="flex flex-col items-center gap-2 opacity-50">
                  <div className="bg-white border border-[#E4E4E7] px-4 py-3 rounded-lg flex flex-col items-center">
                    <span className="text-sm font-semibold text-[#09090B]">Ops/HR</span>
                  </div>
                  <div className="text-[10px] text-center text-[#52525B] font-medium leading-tight mt-1">
                    Onboarding<br/>
                    SOPs
                  </div>
                </div>

              </div>
              
              <div className="absolute bottom-6 left-0 right-0 text-center text-xs font-semibold uppercase tracking-widest text-[#A1A1AA]">
                Start here. Expand everywhere.
              </div>
            </div>
          </motion.div>

          {/* Right Side (Copy) */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 text-sm font-semibold text-[#09090B] uppercase tracking-wide">
              <Network className="h-4 w-4 text-[#D35A3C]" /> Operational Memory
            </div>
            
            <h2 className="text-5xl font-medium tracking-tight text-[#09090B] leading-[1.1]">
              Built for more than <br/> <span className="text-[#A1A1AA]">one workflow.</span>
            </h2>
            
            <p className="text-lg text-[#52525B] max-w-md">
              We continuously maintain your company's operational memory so people and AI agents always work from the latest trusted context.
            </p>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-[#09090B] mb-2">Support operations is the first wedge.</h3>
              <p className="text-[#52525B] leading-relaxed">
                We start with support because that is where stale knowledge, contradictory guidance, and escalation mistakes become expensive quickly. Solve support first. Expand everywhere else.
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
