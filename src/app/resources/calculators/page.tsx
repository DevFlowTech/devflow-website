"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiCheckCircle, FiTrendingUp, FiCpu, FiSettings, FiArrowRight } from "react-icons/fi";
import Link from "next/link";

// ========== ESTIMATOR TYPES & DATA ==========
const projectTypes = [
  { id: "website", label: "Marketing Website", basePrice: 150000 },
  { id: "webapp", label: "Web Application", basePrice: 400000 },
  { id: "mobile", label: "Mobile App (iOS/Android)", basePrice: 500000 },
  { id: "erp", label: "Enterprise ERP System", basePrice: 800000 },
  { id: "crm", label: "Bespoke CRM Portal", basePrice: 500000 },
  { id: "ai", label: "AI Integration & Agents", basePrice: 300000 },
];

const features = [
  { id: "auth", label: "User Authentication (RBAC)", price: 40000 },
  { id: "payments", label: "Stripe & Razorpay Billing", price: 60000 },
  { id: "admin", label: "Admin Portal & Dashboard", price: 90000 },
  { id: "api", label: "API Integrations & Webhooks", price: 80000 },
  { id: "ai-chat", label: "AI Chatbots (RAG / Vector)", price: 120000 },
  { id: "analytics", label: "Real-time Analytics Charts", price: 50000 },
  { id: "notifications", label: "SMS/WhatsApp Alerts", price: 40000 },
];

const timelines = [
  { id: "relaxed", label: "Flexible Timeline (10% Off)", multiplier: 0.9 },
  { id: "normal", label: "Standard Timeline", multiplier: 1.0 },
  { id: "urgent", label: "Accelerated Sprint (+40% Rush)", multiplier: 1.4 },
];

// ========== ASSESSMENT QUESTIONS ==========
const assessmentQuestions = [
  {
    id: 1,
    question: "How are your organization's operational procedures stored?",
    options: [
      { text: "Unstructured files, PDFs, or scattered emails", points: 1 },
      { text: "Structured digital manuals and central intranets", points: 3 },
      { text: "Dynamic relational databases with API access logs", points: 5 },
    ],
  },
  {
    id: 2,
    question: "Do you have active API documentation connecting your business nodes?",
    options: [
      { text: "No central APIs; manual copy-pasting is standard", points: 1 },
      { text: "Standard REST APIs connect some departments", points: 3 },
      { text: "Fully integrated schemas (GraphQL / WebSockets)", points: 5 },
    ],
  },
  {
    id: 3,
    question: "What is your primary customer support channel?",
    options: [
      { text: "Manual calls, emails, and staff support desks", points: 1 },
      { text: "Basic rule-based chat links and FAQ directories", points: 3 },
      { text: "Fully automated AI assistant widgets or client portals", points: 5 },
    ],
  },
  {
    id: 4,
    question: "Do you compile database metrics and telemetry?",
    options: [
      { text: "Manual spreadsheet audits at month-end", points: 1 },
      { text: "Monitoring panels showing basic server status", points: 3 },
      { text: "Automated real-time logging with custom alert triggers", points: 5 },
    ],
  },
  {
    id: 5,
    question: "What is your main target for business automation?",
    options: [
      { text: "Simply reducing document backlog filing errors", points: 2 },
      { text: "Streamlining inventory and invoice generation flows", points: 4 },
      { text: "Deploying autonomous AI agents executing operational scripts", points: 5 },
    ],
  },
];

export default function CalculatorsPage() {
  const [activeTab, setActiveTab] = useState<"estimator" | "roi" | "readiness">("estimator");

  // Estimator States
  const [estType, setEstType] = useState("webapp");
  const [estFeatures, setEstFeatures] = useState<string[]>(["auth", "admin"]);
  const [estTimeline, setEstTimeline] = useState("normal");

  // ROI States
  const [roiHours, setRoiHours] = useState(15);
  const [roiRate, setRoiRate] = useState(600);
  const [roiLicense, setRoiLicense] = useState(12000);

  // Assessment States
  const [quizStep, setQuizStep] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [showQuizResult, setShowQuizResult] = useState(false);

  // Estimator Calculation
  const getBudgetEstimate = () => {
    const selectedTypeObj = projectTypes.find((p) => p.id === estType);
    const selectedTimelineObj = timelines.find((t) => t.id === estTimeline);
    if (!selectedTypeObj || !selectedTimelineObj) return { min: 0, max: 0 };

    let total = selectedTypeObj.basePrice;
    estFeatures.forEach((fid) => {
      const fObj = features.find((f) => f.id === fid);
      if (fObj) total += fObj.price;
    });

    total = total * selectedTimelineObj.multiplier;
    return {
      min: Math.round(total * 0.9),
      max: Math.round(total * 1.15),
    };
  };

  const toggleEstFeature = (fid: string) => {
    setEstFeatures((prev) =>
      prev.includes(fid) ? prev.filter((id) => id !== fid) : [...prev, fid]
    );
  };

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  // ROI Calculation
  const getRoiMetrics = () => {
    // 52 weeks in a year
    const hoursSavedPerYear = roiHours * 52;
    const staffSavingsPerYear = hoursSavedPerYear * roiRate;
    const licenseSavingsPerYear = roiLicense * 12;
    const totalSavingsPerYear = staffSavingsPerYear + licenseSavingsPerYear;

    // Assume average custom software deployment cost is ₹5,00,000 one-time
    const oneTimeInvestment = 500000;
    const roiPercentage = ((totalSavingsPerYear - oneTimeInvestment) / oneTimeInvestment) * 100;

    return {
      hoursSaved: hoursSavedPerYear,
      cashSaved: totalSavingsPerYear,
      roi: Math.round(roiPercentage),
    };
  };

  // Assessment Quiz Submit
  const handleQuizAnswer = (points: number) => {
    setQuizScore((prev) => prev + points);
    if (quizStep < assessmentQuestions.length - 1) {
      setQuizStep((prev) => prev + 1);
    } else {
      setShowQuizResult(true);
    }
  };

  const resetQuiz = () => {
    setQuizStep(0);
    setQuizScore(0);
    setShowQuizResult(false);
  };

  const getReadinessLevel = () => {
    if (quizScore <= 10) return { title: "Low Readiness (Legacy Phase)", desc: "Your business workflows rely heavily on manual entry and unstructured coordination. Focus on consolidating documentation, building SQL databases, and setting up core APIs before implementing LLMs.", action: "Build Custom ERP & Database Foundations" };
    if (quizScore <= 18) return { title: "Medium Readiness (Hybrid Phase)", desc: "You have centralized spreadsheets and standard portals. Your systems are ready for workflow automation integrations, API endpoints sync, and first-level AI chatbot widgets.", action: "Deploy AI Chatbot & API Integrations" };
    return { title: "High Readiness (Agentic Phase)", desc: "Excellent digital foundations. Your systems are primed for autonomous AI agents, RAG document search pipelines, LangChain script triggers, and predictive analytics models.", action: "Consult on Enterprise AI Agent Systems" };
  };

  const budget = getBudgetEstimate();
  const roiData = getRoiMetrics();
  const readiness = getReadinessLevel();

  return (
    <main className="min-h-screen bg-devflow-black text-white pt-32 pb-16 overflow-hidden">
      {/* Background aurora */}
      <div className="absolute top-[15%] right-[5%] aurora-bg-blue opacity-35 pointer-events-none" />
      <div className="absolute top-[50%] left-[5%] aurora-bg-gold opacity-15 pointer-events-none" />

      <div className="section-container max-w-5xl mx-auto relative z-10 space-y-12">
        {/* Header */}
        <div className="space-y-4 text-center md:text-left">
          <span className="text-xs font-mono text-devflow-green uppercase tracking-widest block">
            [ ESTIMATORS, ROI & ASSESSMENTS ]
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-medium text-white leading-tight">
            Interactive Calculators <br />
            <span className="italic font-normal text-devflow-green font-display">& Business Tools.</span>
          </h1>
          <p className="text-sm md:text-base text-devflow-gray-300 max-w-3xl leading-relaxed font-light">
            Plan your software budgets, calculate real time-savings ROI, and assess your company's AI integration maturity index instantly.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap gap-2 border-b border-white/[0.06] pb-4">
          <button
            onClick={() => setActiveTab("estimator")}
            className={`px-5 py-3 rounded-lg text-xs font-mono font-medium border transition-all ${
              activeTab === "estimator"
                ? "bg-devflow-green text-devflow-black border-devflow-green font-semibold"
                : "border-white/10 hover:border-white/20 text-devflow-gray-300"
            }`}
          >
            PROJECT ESTIMATOR
          </button>
          <button
            onClick={() => setActiveTab("roi")}
            className={`px-5 py-3 rounded-lg text-xs font-mono font-medium border transition-all ${
              activeTab === "roi"
                ? "bg-devflow-green text-devflow-black border-devflow-green font-semibold"
                : "border-white/10 hover:border-white/20 text-devflow-gray-300"
            }`}
          >
            ROI CALCULATOR
          </button>
          <button
            onClick={() => setActiveTab("readiness")}
            className={`px-5 py-3 rounded-lg text-xs font-mono font-medium border transition-all ${
              activeTab === "readiness"
                ? "bg-devflow-green text-devflow-black border-devflow-green font-semibold"
                : "border-white/10 hover:border-white/20 text-devflow-gray-300"
            }`}
          >
            AI READINESS ASSESSMENT
          </button>
        </div>

        {/* Tab Content Panels */}
        <div className="min-h-[450px]">
          <AnimatePresence mode="wait">
            
            {/* Panel 1: Estimator */}
            {activeTab === "estimator" && (
              <motion.div
                key="estimator-panel"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8"
              >
                {/* Left Form */}
                <div className="lg:col-span-7 space-y-6 text-left">
                  {/* Project Type */}
                  <div className="space-y-3">
                    <label className="text-xs font-mono text-devflow-gray-400 block">[ PROJECT TYPE ]</label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {projectTypes.map((pt) => (
                        <button
                          key={pt.id}
                          onClick={() => setEstType(pt.id)}
                          className={`p-3 text-left rounded-xl border text-xs transition-all ${
                            estType === pt.id
                              ? "border-devflow-green bg-devflow-green/10 text-white font-medium"
                              : "border-white/10 hover:border-white/20 text-devflow-gray-300"
                          }`}
                        >
                          <span className="block">{pt.label}</span>
                          <span className="block text-[10px] text-devflow-gray-500 mt-1">From {formatCurrency(pt.basePrice)}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    <label className="text-xs font-mono text-devflow-gray-400 block">[ ADD FEATURES ]</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {features.map((feat) => (
                        <button
                          key={feat.id}
                          onClick={() => toggleEstFeature(feat.id)}
                          className={`p-3 text-left rounded-xl border text-xs flex justify-between items-center transition-all ${
                            estFeatures.includes(feat.id)
                              ? "border-devflow-green bg-devflow-green/10 text-white font-medium"
                              : "border-white/10 hover:border-white/20 text-devflow-gray-300"
                          }`}
                        >
                          <span>{feat.label}</span>
                          <span className="text-[10px] text-devflow-green font-mono shrink-0">+{formatCurrency(feat.price)}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Timelines */}
                  <div className="space-y-3">
                    <label className="text-xs font-mono text-devflow-gray-400 block">[ ACCELERATION SCHEDULE ]</label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {timelines.map((t) => (
                        <button
                          key={t.id}
                          onClick={() => setEstTimeline(t.id)}
                          className={`p-3 text-left rounded-xl border text-xs transition-all ${
                            estTimeline === t.id
                              ? "border-devflow-green bg-devflow-green/10 text-white font-medium"
                              : "border-white/10 hover:border-white/20 text-devflow-gray-300"
                          }`}
                        >
                          {t.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Result Card */}
                <div className="lg:col-span-5">
                  <div className="p-8 rounded-2xl border border-devflow-green/20 bg-gradient-to-br from-devflow-green/[0.02] to-transparent sticky top-24 space-y-6 text-center lg:text-left">
                    <div className="space-y-2">
                      <span className="text-[10px] font-mono text-devflow-green uppercase tracking-widest block">
                        [ PROJECT BUDGET ESTIMATE ]
                      </span>
                      <h3 className="text-3xl md:text-4xl font-mono font-bold text-devflow-green">
                        {formatCurrency(budget.min)} - {formatCurrency(budget.max)}
                      </h3>
                      <p className="text-xs text-devflow-gray-400 leading-relaxed font-light">
                        This represents the target budget range for a secure, customized deployment containing your selected features.
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/[0.08] space-y-3 text-xs text-left">
                      <div className="flex justify-between">
                        <span className="text-devflow-gray-400">Project Type:</span>
                        <span className="text-white font-medium">{projectTypes.find((p) => p.id === estType)?.label}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-devflow-gray-400">Features Selected:</span>
                        <span className="text-white font-medium">{estFeatures.length} Modules</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-devflow-gray-400">Timeline Class:</span>
                        <span className="text-white font-medium">{timelines.find((t) => t.id === estTimeline)?.label}</span>
                      </div>
                    </div>

                    <Link href="/contact" className="w-full inline-block text-center py-3 bg-devflow-green text-devflow-black font-mono font-semibold rounded-lg text-xs hover:bg-devflow-green/90 transition-colors">
                      Get Software Blueprint &rarr;
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Panel 2: ROI Calculator */}
            {activeTab === "roi" && (
              <motion.div
                key="roi-panel"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8"
              >
                {/* Left Form */}
                <div className="lg:col-span-7 space-y-6 text-left">
                  
                  {/* Admin Hours */}
                  <div className="space-y-3">
                    <label className="text-xs font-mono text-devflow-gray-400 block">[ WEEKLY REPETITIVE WORK (HOURS) ]</label>
                    <input
                      type="range"
                      min="5"
                      max="100"
                      value={roiHours}
                      onChange={(e) => setRoiHours(Number(e.target.value))}
                      className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-devflow-green"
                    />
                    <div className="flex justify-between text-xs font-mono">
                      <span>5 Hours</span>
                      <span className="text-devflow-green font-bold text-sm">{roiHours} Hours / Week</span>
                      <span>100 Hours</span>
                    </div>
                  </div>

                  {/* Average Hourly Rate */}
                  <div className="space-y-3">
                    <label className="text-xs font-mono text-devflow-gray-400 block">[ AVERAGE TEAM HOURLY RATE ]</label>
                    <input
                      type="range"
                      min="150"
                      max="2000"
                      step="50"
                      value={roiRate}
                      onChange={(e) => setRoiRate(Number(e.target.value))}
                      className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-devflow-green"
                    />
                    <div className="flex justify-between text-xs font-mono">
                      <span>₹150/hr</span>
                      <span className="text-devflow-green font-bold text-sm">₹{roiRate} / Hour</span>
                      <span>₹2,000/hr</span>
                    </div>
                  </div>

                  {/* Software Licenses */}
                  <div className="space-y-3">
                    <label className="text-xs font-mono text-devflow-gray-400 block">[ MONTHLY RENTAL SOFTWARE LICENSES ]</label>
                    <input
                      type="range"
                      min="0"
                      max="100000"
                      step="1000"
                      value={roiLicense}
                      onChange={(e) => setRoiLicense(Number(e.target.value))}
                      className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-devflow-green"
                    />
                    <div className="flex justify-between text-xs font-mono">
                      <span>₹0</span>
                      <span className="text-devflow-green font-bold text-sm">{formatCurrency(roiLicense)} / Month</span>
                      <span>₹1,00,000</span>
                    </div>
                  </div>

                </div>

                {/* Right Result Card */}
                <div className="lg:col-span-5">
                  <div className="p-8 rounded-2xl border border-devflow-green/20 bg-gradient-to-br from-devflow-green/[0.02] to-transparent sticky top-24 space-y-6 text-center lg:text-left">
                    <div className="space-y-2">
                      <span className="text-[10px] font-mono text-devflow-green uppercase tracking-widest block">
                        [ PROJECTED ANNUAL SAVINGS ]
                      </span>
                      <h3 className="text-3xl md:text-4xl font-mono font-bold text-devflow-green">
                        {formatCurrency(roiData.cashSaved)}
                      </h3>
                      <p className="text-xs text-devflow-gray-400 leading-relaxed font-light">
                        Calculated by mapping team hours back to core operations and replacing template software licenses.
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/[0.08] space-y-3 text-xs text-left">
                      <div className="flex justify-between">
                        <span className="text-devflow-gray-400">Total Hours Saved:</span>
                        <span className="text-white font-medium">{roiData.hoursSaved} Hours / Year</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-devflow-gray-400">Projected Year-1 ROI:</span>
                        <span className={`font-mono font-bold ${roiData.roi > 0 ? "text-devflow-green" : "text-devflow-gold"}`}>
                          {roiData.roi}%
                        </span>
                      </div>
                    </div>

                    <Link href="/contact" className="w-full inline-block text-center py-3 bg-devflow-green text-devflow-black font-mono font-semibold rounded-lg text-xs hover:bg-devflow-green/90 transition-colors">
                      Calculate Your Blueprint &rarr;
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Panel 3: AI Readiness Quiz */}
            {activeTab === "readiness" && (
              <motion.div
                key="readiness-panel"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="max-w-2xl mx-auto"
              >
                {!showQuizResult ? (
                  <div className="p-8 rounded-2xl border border-white/[0.06] bg-devflow-charcoal text-left space-y-6">
                    {/* Progress */}
                    <div className="flex items-center justify-between text-xs font-mono text-devflow-gray-400">
                      <span>QUESTION {quizStep + 1} OF {assessmentQuestions.length}</span>
                      <span className="text-devflow-green font-bold">{Math.round(((quizStep + 1) / assessmentQuestions.length) * 100)}%</span>
                    </div>
                    
                    <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-devflow-green transition-all duration-300"
                        style={{ width: `${((quizStep + 1) / assessmentQuestions.length) * 100}%` }}
                      />
                    </div>

                    {/* Question */}
                    <h3 className="text-xl font-display font-medium text-white pt-2">
                      {assessmentQuestions[quizStep].question}
                    </h3>

                    {/* Options */}
                    <div className="space-y-3 pt-4">
                      {assessmentQuestions[quizStep].options.map((opt, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleQuizAnswer(opt.points)}
                          className="w-full p-4 rounded-xl border border-white/10 text-left text-xs hover:border-devflow-green hover:bg-devflow-green/5 transition-all flex items-center justify-between group"
                        >
                          <span className="text-devflow-gray-300 group-hover:text-white transition-colors">{opt.text}</span>
                          <FiArrowRight className="w-4 h-4 text-devflow-gray-500 group-hover:text-devflow-green transition-colors" />
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="p-8 rounded-2xl border border-devflow-green/20 bg-gradient-to-br from-devflow-green/[0.02] to-transparent text-center space-y-6">
                    <div className="w-16 h-16 rounded-full bg-devflow-green/10 border border-devflow-green/20 flex items-center justify-center mx-auto text-devflow-green">
                      <FiCpu className="w-8 h-8" />
                    </div>
                    
                    <div className="space-y-2">
                      <span className="text-[10px] font-mono text-devflow-green uppercase tracking-widest block">
                        [ SYSTEM READINESS SCORE: {quizScore} / 25 ]
                      </span>
                      <h3 className="text-2xl md:text-3xl font-display font-bold text-white">
                        {readiness.title}
                      </h3>
                      <p className="text-xs text-devflow-gray-400 leading-relaxed font-light max-w-lg mx-auto">
                        {readiness.desc}
                      </p>
                    </div>

                    <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                      <button
                        onClick={resetQuiz}
                        className="px-5 py-3 border border-white/10 rounded-lg text-xs font-mono font-medium hover:bg-white/5 transition-colors"
                      >
                        RESET ASSESSMENT
                      </button>
                      <Link
                        href="/contact"
                        className="px-5 py-3 bg-devflow-green text-devflow-black font-mono font-semibold rounded-lg text-xs hover:opacity-90 transition-opacity"
                      >
                        {readiness.action} &rarr;
                      </Link>
                    </div>
                  </div>
                )}
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </main>
  );
}
