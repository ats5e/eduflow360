"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import Image from "next/image";

const CASE_STUDIES = [
    {
        title: "Leading International University — GCC Campus",
        sector: "Higher Education",
        region: "United Arab Emirates",
        systems: "Banner (SIS), Oracle Fusion (ERP/GL), Standalone AR, Multiple Gateways",
        challenge: "Fragmented student finance architecture creating operational strain during intake. High manual reconciliation between SIS and legacy AR platform. Poor visibility of receivables.",
        approach: "ATS5E engaged to consolidate receivables into Oracle Fusion using EduFlow360 orchestration. OIC-based architecture connecting Banner, gateways, and Fusion.",
        results: [
            "Legacy AR platform fully decommissioned",
            "Manual reconciliation effort reduced by ~60%",
            "Real-time receivables visibility achieved",
            "Zero disruption cutover ahead of critical intake"
        ],
        quote: "This was not a technology refresh — it was a governance and control transformation.",
        quoteAuthor: "Director of Finance, International University GCC Campus",
        image: "/imagery/20251001_1701_Digital Maze Exploration_remix_01k6fxnxwte7h9y1rm338xmb37.png"
    },
    {
        title: "Premium Multi-Campus School Group",
        sector: "K–12 Education (8 campuses)",
        region: "South Pacific",
        systems: "ISAMS (SIS), Xero (Finance), Canvas (LMS), Standalone platforms",
        challenge: "Eight campuses with disconnected systems. 3.5 FTEs spent confirming fees across spreadsheets. Parents navigating multiple payment portals for tuition and ancillary services.",
        approach: "EduFlow360 deployed as an orchestration layer above ISAMS, Xero, and Canvas. Automated invoicing, unified parent portal, and group-wide financial consolidation.",
        results: [
            "3.5 FTE equivalent of manual effort eliminated",
            "18% increase in ancillary service revenue",
            "35% reduction in overdue fee balances",
            "Monthly financial consolidation reduced from 4 days to real-time"
        ],
        quote: "EduFlow360 connected what we already had — and within one term, our finance team was working on strategy instead of spreadsheets.",
        quoteAuthor: "Chief Operating Officer, Multi-Campus School Group",
        image: "/imagery/20251001_1710_High-Resolution Regeneration_remix_01k6fy6mzfemqtbq24ya38djw1.png"
    }
];

export default function CaseStudiesSection() {
    return (
        <section id="case-studies" className="relative py-32 px-6">
            <div className="section-divider absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[600px]" />

            <div className="max-w-7xl mx-auto">
                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
                    className="text-center max-w-3xl mx-auto mb-20"
                >
                    <span className="text-[12px] tracking-[0.32em] uppercase text-zinc-600 font-medium block mb-4">Our Work</span>
                    <h2 className="text-[clamp(2.4rem,5vw,4rem)] font-black uppercase leading-[0.92] tracking-[-0.04em]">
                        Intelligence. <span className="text-[#148be6]">Applied.</span>
                    </h2>
                </motion.div>

                <div className="grid gap-12">
                    {CASE_STUDIES.map((study, idx) => (
                        <motion.div key={idx} custom={idx} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                            className="group overflow-hidden rounded-3xl border border-white/[0.06] bg-black/[0.2] transition-colors hover:border-white/[0.1]"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                <div className="relative aspect-video lg:aspect-auto">
                                    <Image src={study.image} alt={study.title} fill className="object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 lg:bg-gradient-to-l lg:from-[#0a0a0a] lg:via-[#0a0a0a]/50 to-transparent" />
                                </div>

                                <div className="p-8 lg:p-12 flex flex-col justify-center relative bg-[#0a0a0a]">
                                    <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-6">
                                        {study.title}
                                    </h3>

                                    <div className="grid grid-cols-2 gap-4 mb-8">
                                        <div>
                                            <p className="text-[10px] uppercase tracking-widest text-[#74caff] font-bold">Sector</p>
                                            <p className="text-sm text-zinc-300 font-medium">{study.sector}</p>
                                        </div>
                                        <div>
                                            <p className="text-[10px] uppercase tracking-widest text-[#74caff] font-bold">Region</p>
                                            <p className="text-sm text-zinc-300 font-medium">{study.region}</p>
                                        </div>
                                        <div className="col-span-2">
                                            <p className="text-[10px] uppercase tracking-widest text-[#74caff] font-bold">Systems Managed</p>
                                            <p className="text-sm text-zinc-300 font-medium">{study.systems}</p>
                                        </div>
                                    </div>

                                    <div className="space-y-6 mb-8">
                                        <div>
                                            <h4 className="text-sm font-bold uppercase text-white mb-2">The Challenge</h4>
                                            <p className="text-sm text-zinc-400 leading-relaxed font-medium">{study.challenge}</p>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold uppercase text-white mb-2">The Approach</h4>
                                            <p className="text-sm text-zinc-400 leading-relaxed font-medium">{study.approach}</p>
                                        </div>
                                    </div>

                                    <h4 className="text-sm font-bold uppercase text-[#148be6] mb-4">Key Outcomes</h4>
                                    <ul className="space-y-2 mb-8">
                                        {study.results.map((res, i) => (
                                            <li key={i} className="flex gap-3 text-sm text-zinc-300 font-medium">
                                                <span className="text-[#74caff] mt-0.5">✓</span> {res}
                                            </li>
                                        ))}
                                    </ul>

                                    <blockquote className="border-l-2 border-[#148be6] pl-4 italic text-zinc-400 text-sm font-medium">
                                        &ldquo;{study.quote}&rdquo;
                                        <footer className="mt-2 not-italic text-xs font-bold text-white uppercase tracking-wider">— {study.quoteAuthor}</footer>
                                    </blockquote>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
