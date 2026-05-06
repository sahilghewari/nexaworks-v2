"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, Info, TrendingUp, Users, Wrench } from "lucide-react";

export function ROICalculator() {
  const [sdrCount, setSdrCount] = useState<number>(3);
  const [sdrSalary, setSdrSalary] = useState<number>(75000);
  const [techStack, setTechStack] = useState<number>(1200);
  
  // 2026 Industry Benchmarks
  const overheadMultiplier = 1.28; // Tax, Benefits, Insurance
  const avgHiringCost = 12000; // Recruiter fees + onboarding per rep
  const meetingsPerMonthPerSDR = 8;
  
  // AI Engine costs: $10k setup + $5k/month retainer = $70k/year
  // (Using a realistic 2026 hybrid model: Setup + Retainer)
  const aiAnnualCost = 10000 + (5000 * 12);
  
  // Calculations
  const annualHumanSalaryTotal = sdrCount * sdrSalary * overheadMultiplier;
  const annualTechStackTotal = sdrCount * techStack * 12;
  const annualHiringAmortized = sdrCount * avgHiringCost;
  
  const totalAnnualHumanCost = annualHumanSalaryTotal + annualTechStackTotal + annualHiringAmortized;
  const annualSavings = Math.max(0, totalAnnualHumanCost - aiAnnualCost);
  
  const humanOutputMeetings = sdrCount * meetingsPerMonthPerSDR * 12;
  const aiOutputMultiplier = 3.5; // High-end 2026 AI performance
  const aiTotalMeetings = Math.round(humanOutputMeetings * aiOutputMultiplier);
  const incrementalMeetings = aiTotalMeetings - humanOutputMeetings;

  return (
    <section id="roi-calculator" className="bg-[#0A0A0B] py-24 sm:py-32 overflow-hidden">
      <div className="container relative">
        {/* Background Glow */}
        <div className="absolute -left-24 top-1/2 -z-10 h-96 w-96 -translate-y-1/2 bg-[#10B981]/10 blur-[120px]" />
        
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#10B981]/20 bg-[#10B981]/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#10B981]">
              <Calculator className="h-3.5 w-3.5" />
              2026 Revenue Benchmarks
            </div>
            <h2 className="mt-6 font-display text-4xl font-bold text-[#FAFAFA] sm:text-5xl">
              ROI & Efficiency Engine
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-[#A1A1AA]">
              Stop calculating just &quot;savings.&quot; Calculate the revenue delta of replacing brittle manual outreach with a high-velocity AI system.
            </p>
          </div>

          <motion.div
            className="overflow-hidden rounded-[2.5rem] border border-[#27272A] bg-[#131316] shadow-[0_48px_100px_-32px_rgba(0,0,0,0.9)]"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="grid lg:grid-cols-[1fr_0.8fr]">
              {/* Input Section */}
              <div className="p-8 sm:p-12 lg:border-r lg:border-[#27272A]">
                <div className="space-y-12">
                  {/* Headcount */}
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#27272A] text-[#FAFAFA]">
                          <Users className="h-5 w-5" />
                        </div>
                        <label className="text-sm font-bold uppercase tracking-widest text-[#FAFAFA]">
                          SDR Headcount
                        </label>
                      </div>
                      <span className="rounded-lg bg-[#10B981]/10 px-4 py-2 text-xl font-bold text-[#10B981]">
                        {sdrCount}
                      </span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="30"
                      value={sdrCount}
                      onChange={(e) => setSdrCount(Number(e.target.value))}
                      className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-[#27272A] accent-[#10B981]"
                    />
                  </div>

                  {/* Salary */}
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#27272A] text-[#FAFAFA]">
                          <TrendingUp className="h-5 w-5" />
                        </div>
                        <label className="text-sm font-bold uppercase tracking-widest text-[#FAFAFA]">
                          Base Annual Salary
                        </label>
                      </div>
                      <span className="rounded-lg bg-[#10B981]/10 px-4 py-2 text-xl font-bold text-[#10B981]">
                        ${sdrSalary.toLocaleString()}
                      </span>
                    </div>
                    <input
                      type="range"
                      min="60000"
                      max="140000"
                      step="5000"
                      value={sdrSalary}
                      onChange={(e) => setSdrSalary(Number(e.target.value))}
                      className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-[#27272A] accent-[#10B981]"
                    />
                    <div className="flex items-center gap-2 text-xs text-[#A1A1AA]">
                      <Info className="h-3 w-3" />
                      Calculated with 28% additional for Taxes/Benefits in 2026.
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#27272A] text-[#FAFAFA]">
                          <Wrench className="h-5 w-5" />
                        </div>
                        <label className="text-sm font-bold uppercase tracking-widest text-[#FAFAFA]">
                          Monthly Tool Spend <span className="text-[10px] opacity-40">/ REP</span>
                        </label>
                      </div>
                      <span className="rounded-lg bg-[#10B981]/10 px-4 py-2 text-xl font-bold text-[#10B981]">
                        ${techStack.toLocaleString()}
                      </span>
                    </div>
                    <input
                      type="range"
                      min="500"
                      max="3000"
                      step="100"
                      value={techStack}
                      onChange={(e) => setTechStack(Number(e.target.value))}
                      className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-[#27272A] accent-[#10B981]"
                    />
                    <p className="text-[10px] uppercase tracking-tighter text-[#A1A1AA]/50">
                      Sales Nav + ZoomInfo + Apollo + Outreach + Deliverability Tools
                    </p>
                  </div>
                </div>
              </div>

              {/* Output Section */}
              <div className="flex flex-col justify-center bg-[#1A1A1F] p-8 sm:p-12">
                <div className="space-y-12">
                  <div className="space-y-3">
                    <p className="text-[0.65rem] uppercase tracking-[0.3em] text-[#A1A1AA]">Total Annual Human Overhead</p>
                    <p className="font-display text-5xl font-bold text-[#FAFAFA]">
                      ${totalAnnualHumanCost.toLocaleString()}
                    </p>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-[10px] text-[#A1A1AA]/60 uppercase tracking-widest">
                      <span>Salary: ${annualHumanSalaryTotal.toLocaleString()}</span>
                      <span>•</span>
                      <span>Tools: ${annualTechStackTotal.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <p className="text-[0.65rem] uppercase tracking-[0.3em] text-[#10B981]">Annual Revenue Opportunity</p>
                    <div className="flex items-baseline gap-3">
                      <p className="font-display text-6xl font-bold text-[#10B981]">
                        +{(incrementalMeetings).toLocaleString()}
                      </p>
                      <span className="text-sm font-medium text-[#A1A1AA]">Meetings</span>
                    </div>
                    <p className="text-xs leading-relaxed text-[#A1A1AA]/70">
                      Based on 2026 AI response rates vs. industry average of 8 meetings/mo for human SDRs.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-[#27272A] bg-black/30 p-6">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#10B981]/10 text-[#10B981]">
                        <TrendingUp className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-[#FAFAFA]">3.5x Efficiency Lift</p>
                        <p className="text-xs text-[#A1A1AA]">The NexaWorks engine outperforms human output by 250% while slashing cost by 70%+.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
