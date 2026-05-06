"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, FileText, CheckCircle2, Code2, BrainCircuit, Loader2 } from "lucide-react";

const DEMO_STAGES = ["idle", "uploading", "analyzing", "done"] as const;
type DemoStage = typeof DEMO_STAGES[number];

const MOCK_EXTRACTED_DATA = {
  candidate: "Pavan Babar",
  role: "Chief Technology Officer",
  expertise: ["Distributed Systems", "RAG Pipelines", "Edge Computing"],
  match_score: 0.98,
  strategic_fit: "High",
  recommended_team: "Product Engineering",
};

export function ResumindDemo() {
  const [stage, setStage] = useState<DemoStage>("idle");
  const [progress, setProgress] = useState(0);

  const startDemo = () => {
    setStage("uploading");
    setProgress(0);
  };

  useEffect(() => {
    if (stage === "uploading") {
      const interval = setInterval(() => {
        setProgress((p) => {
          if (p >= 100) {
            clearInterval(interval);
            setStage("analyzing");
            return 100;
          }
          return p + 10;
        });
      }, 100);
      return () => clearInterval(interval);
    }
    
    if (stage === "analyzing") {
      const timeout = setTimeout(() => {
        setStage("done");
      }, 2500);
      return () => clearTimeout(timeout);
    }
  }, [stage]);

  return (
    <section className="bg-[#E7E2D6] py-20 sm:py-24 overflow-hidden">
      <div className="container grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.35em] text-[#A3542B]">Interactive Demo</p>
          <h2 className="font-display text-3xl font-semibold text-[#0D1015] sm:text-4xl">
            See the ResuMind AI-Analyzer in action
          </h2>
          <p className="text-base text-[#3F3A32] sm:text-lg max-w-xl">
            We built this to eliminate manual resume screening for Fortune 100 teams. Upload a document to see how our NLP pipeline extracts entities and scores strategic fit in milliseconds.
          </p>
          
          <div className="flex flex-col gap-4 py-4">
            <div className="flex items-center gap-3">
               <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#A3542B]/10 text-[#A3542B]">
                 <CheckCircle2 className="h-5 w-5" />
               </div>
               <p className="text-sm font-medium text-[#0D1015]">95% Parsing Accuracy</p>
            </div>
            <div className="flex items-center gap-3">
               <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#A3542B]/10 text-[#A3542B]">
                 <CheckCircle2 className="h-5 w-5" />
               </div>
               <p className="text-sm font-medium text-[#0D1015]">Zero Manual Triage</p>
            </div>
            <div className="flex items-center gap-3">
               <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#A3542B]/10 text-[#A3542B]">
                 <CheckCircle2 className="h-5 w-5" />
               </div>
               <p className="text-sm font-medium text-[#0D1015]">Instant ATS Writeback</p>
            </div>
          </div>

          <button
            onClick={() => setStage("idle")}
            className="text-sm font-semibold text-[#A3542B] underline underline-offset-4"
          >
            Reset Demo
          </button>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/3] w-full max-w-2xl rounded-3xl border border-[#0D1015]/10 bg-[#CBC8BA]/50 p-6 shadow-[0_40px_100px_-40px_rgba(13,16,21,0.6)] backdrop-blur-sm">
             <AnimatePresence mode="wait">
               {stage === "idle" && (
                 <motion.div
                   key="idle"
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   exit={{ opacity: 0 }}
                   className="flex h-full flex-col items-center justify-center gap-6 border-2 border-dashed border-[#0D1015]/10 rounded-2xl cursor-pointer hover:bg-[#A3542B]/5 transition-colors"
                   onClick={startDemo}
                 >
                   <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#A3542B]/10 text-[#A3542B]">
                     <Upload className="h-8 w-8" />
                   </div>
                   <div className="text-center">
                     <p className="text-lg font-semibold text-[#0D1015]">Drop a resume here</p>
                     <p className="text-sm text-[#3F3A32]">PDF, DOCX, or Image (OCR enabled)</p>
                   </div>
                 </motion.div>
               )}

               {stage === "uploading" && (
                 <motion.div
                   key="uploading"
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   exit={{ opacity: 0 }}
                   className="flex h-full flex-col items-center justify-center gap-6"
                 >
                    <FileText className="h-16 w-16 text-[#A3542B] animate-bounce" />
                    <div className="w-full max-w-xs space-y-2">
                        <div className="h-2 w-full overflow-hidden rounded-full bg-[#0D1015]/10">
                            <motion.div 
                                className="h-full bg-[#A3542B]" 
                                initial={{ width: 0 }}
                                animate={{ width: `${progress}%` }}
                            />
                        </div>
                        <p className="text-center text-xs uppercase tracking-[0.2em] text-[#3F3A32]">Ingesting Document...</p>
                    </div>
                 </motion.div>
               )}

               {stage === "analyzing" && (
                 <motion.div
                   key="analyzing"
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   exit={{ opacity: 0 }}
                   className="flex h-full flex-col items-center justify-center gap-6"
                 >
                    <div className="relative">
                        <BrainCircuit className="h-20 w-20 text-[#A3542B]" />
                        <motion.div 
                            className="absolute inset-0 rounded-full border-4 border-[#A3542B]/30"
                            animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                    </div>
                    <div className="text-center space-y-2">
                        <p className="text-lg font-semibold text-[#0D1015]">Running NLP Pipeline</p>
                        <div className="flex items-center justify-center gap-2 text-xs text-[#3F3A32]">
                            <Loader2 className="h-3 w-3 animate-spin" />
                            <span>Extracting entities & scoring fit</span>
                        </div>
                    </div>
                 </motion.div>
               )}

               {stage === "done" && (
                 <motion.div
                   key="done"
                   initial={{ opacity: 0, scale: 0.95 }}
                   animate={{ opacity: 1, scale: 1 }}
                   className="flex h-full flex-col gap-4"
                 >
                    <div className="flex items-center justify-between border-b border-[#0D1015]/10 pb-3">
                        <div className="flex items-center gap-2">
                            <Code2 className="h-5 w-5 text-[#A3542B]" />
                            <span className="text-xs font-mono uppercase tracking-widest text-[#3F3A32]">Extraction Output</span>
                        </div>
                        <span className="rounded-full bg-green-500/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-green-700">Success</span>
                    </div>
                    <div className="flex-1 overflow-auto rounded-xl bg-[#0D1015] p-4 font-mono text-sm leading-relaxed text-[#CBC8BA]">
                        <motion.pre
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            {JSON.stringify(MOCK_EXTRACTED_DATA, null, 2)}
                        </motion.pre>
                    </div>
                    <div className="flex items-center justify-between rounded-xl bg-[#A3542B]/10 p-4 border border-[#A3542B]/20">
                        <div className="space-y-1">
                            <p className="text-[10px] uppercase tracking-[0.2em] text-[#3F3A32]">Strategic Fit</p>
                            <p className="text-lg font-bold text-[#A3542B]">98% Match</p>
                        </div>
                        <CheckCircle2 className="h-8 w-8 text-[#A3542B]" />
                    </div>
                 </motion.div>
               )}
             </AnimatePresence>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-3xl bg-[#A3542B]/20 -z-10 blur-2xl" />
          <div className="absolute -top-6 -right-6 h-32 w-32 rounded-3xl bg-[#0D1015]/10 -z-10 blur-2xl" />
        </div>
      </div>
    </section>
  );
}
