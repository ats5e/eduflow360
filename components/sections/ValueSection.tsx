"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { Network, Smartphone, ActivitySquare, ShieldCheck } from "lucide-react";

const IMPACT_METRICS = [
    {
        icon: Network,
        title: "Connected Student Lifecycle",
        metric: "~40%",
        label: "fewer process steps",
        description: "Automated coordination reduces process steps by approximately 40%. Events in one system trigger the right actions in every other system — without manual intervention or batch processing."
    },
    {
        icon: Smartphone,
        title: "Fewer Apps, Clearer Journeys",
        metric: "1",
        label: "coherent portal replaces 3-5",
        description: "One coherent portal replaces 3–5 separate logins for families. Parents see balances, payment plans, and academic information in a single, consistent interface."
    },
    {
        icon: ActivitySquare,
        title: "Lower Operational Load",
        metric: "50-70%",
        label: "reduction in manual time",
        description: "Manual coordination time reduced by 50–70%. No more CSV uploads, manual invoice creation, or post-facto reconciliation. Finance teams focus on analysis, not data entry."
    },
    {
        icon: ShieldCheck,
        title: "Controls Preserved",
        metric: "100%",
        label: "auditable governance",
        description: "Financial and academic controls remain fully intact and auditable. EduFlow360 strengthens governance by making controls visible, automated, and traceable — not by bypassing them."
    }
];

export default function ValueSection() {
    return (
        <section id="value" className="relative py-32 px-6">
            <div className="section-divider absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[600px]" />

            <div className="max-w-7xl mx-auto">
                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
                    className="text-center max-w-3xl mx-auto mb-20"
                >
                    <span className="text-[12px] tracking-[0.32em] uppercase text-zinc-600 font-medium block mb-4">Our Impact</span>
                    <h2 className="text-[clamp(2.4rem,5vw,4rem)] font-black uppercase leading-[0.92] tracking-[-0.04em]">
                        The Power of Architecture:<br />
                        <span className="text-[#148be6]">Measurable Impact</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {IMPACT_METRICS.map((metric, i) => {
                        const Icon = metric.icon;
                        return (
                            <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                                className="group p-8 rounded-3xl border border-white/[0.05] bg-white/[0.01] hover:bg-white/[0.03] transition-colors duration-300"
                            >
                                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 justify-between mb-8 pb-8 border-b border-white/[0.05]">
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#148be6]/10 text-[#74caff] group-hover:bg-[#148be6]/20 transition-colors">
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-xl font-bold uppercase tracking-tight text-white">{metric.title}</h3>
                                    </div>
                                    <div className="text-left sm:text-right shrink-0">
                                        <span className="block text-4xl font-black text-[#148be6]">{metric.metric}</span>
                                        <span className="text-[10px] font-bold tracking-widest uppercase text-zinc-500">{metric.label}</span>
                                    </div>
                                </div>
                                <p className="text-sm font-medium text-zinc-400 leading-relaxed">
                                    {metric.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
