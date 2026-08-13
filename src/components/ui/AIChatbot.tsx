"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiMessageSquare,
  FiX,
  FiSend,
  FiCheck,
  FiExternalLink,
  FiCompass,
  FiLoader,
  FiPhone,
  FiMail,
  FiUser,
} from "react-icons/fi";
import { easeOut } from "@/lib/motion";
import { generateAgentResponse, type AgentResponse } from "@/lib/siteSearch";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  timestamp: Date;
  suggestions?: { title: string; path: string; icon?: string }[];
}

export default function AIChatbot() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      sender: "bot",
      text: "👋 Hello! I'm DevFlow's AI agent. I can tell you all about our company, AI software capabilities, services, tech stack, and case studies — or connect you directly with our founders!",
      timestamp: new Date(),
      suggestions: [
        { title: "About Company", path: "/about", icon: "🏢" },
        { title: "Our Services", path: "/services", icon: "⚙️" },
        { title: "Case Studies", path: "/case-studies", icon: "💼" },
        { title: "Connect to Team", path: "/contact", icon: "📞" },
      ],
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  // Lead / Connection Request Intake State
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [leadName, setLeadName] = useState("");
  const [leadEmail, setLeadEmail] = useState("");
  const [leadPhone, setLeadPhone] = useState("");
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const [leadContext, setLeadContext] = useState("");
  const [isSubmittingLead, setIsSubmittingLead] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isTyping, isOpen, showLeadForm]);

  const triggerBotResponse = (userText: string) => {
    setIsTyping(true);

    const response: AgentResponse = generateAgentResponse(userText);

    setTimeout(() => {
      setIsTyping(false);

      if (response.showLeadForm) {
        setShowLeadForm(true);
        setLeadContext(response.leadContext || userText);
      }

      setMessages((prev) => [
        ...prev,
        {
          id: Math.random().toString(),
          sender: "bot",
          text: response.text,
          timestamp: new Date(),
          suggestions: response.suggestions,
        },
      ]);
    }, 600 + Math.random() * 400);
  };

  const handleSendMessage = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputText.trim()) return;

    const userMsg = inputText;
    setInputText("");

    setMessages((prev) => [
      ...prev,
      {
        id: Math.random().toString(),
        sender: "user",
        text: userMsg,
        timestamp: new Date(),
      },
    ]);

    triggerBotResponse(userMsg);
  };

  const handleQuickReply = (text: string) => {
    setMessages((prev) => [
      ...prev,
      {
        id: Math.random().toString(),
        sender: "user",
        text: text,
        timestamp: new Date(),
      },
    ]);
    triggerBotResponse(text);
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadEmail.trim() || !leadName.trim() || isSubmittingLead) return;

    setIsSubmittingLead(true);
    try {
      const res = await fetch("https://formspree.io/f/meeyqenk", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: leadName,
          email: leadEmail,
          phone: leadPhone || "Not provided",
          message: `CUSTOMER CONNECTION REQUEST: ${leadContext || "User requested direct connection with founders"}`,
          source: "AIChatbot Connection Intake",
        }),
      });

      if (res.ok) {
        setLeadSubmitted(true);
        setShowLeadForm(false);

        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            {
              id: Math.random().toString(),
              sender: "bot",
              text: `✅ **CONNECTION REQUEST DISPATCHED!**\n\nThank you, **${leadName}**! Your request has been sent directly to founders **Prince Gajjar (CEO)** & **Bhavin Rajput (CTO)**.\n\nWe will reach out to you at **${leadEmail}** ${leadPhone ? `or **${leadPhone}**` : ""} within 24 hours to schedule your technical consultation.`,
              timestamp: new Date(),
              suggestions: [
                { title: "View Case Studies", path: "/case-studies", icon: "💼" },
                { title: "Check Technology Stack", path: "/technology", icon: "💻" },
                { title: "Why DevFlow", path: "/why-devflow", icon: "⚡" },
              ],
            },
          ]);
        }, 400);
      } else {
        alert("Connection request failed. Please email us directly at info@devflow.co.in");
      }
    } catch {
      alert("Network error. Please email us directly at info@devflow.co.in");
    } finally {
      setIsSubmittingLead(false);
    }
  };

  const handleSuggestionClick = (path: string) => {
    setIsOpen(false);
    router.push(path);
  };

  const renderFormattedText = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, idx) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={idx} className="font-semibold text-white">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-[99999] flex flex-col items-end">
      {/* Collapsed Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-14 h-14 rounded-full bg-devflow-green text-devflow-black flex items-center justify-center shadow-[0_0_25px_rgba(186,230,84,0.35)] hover:scale-105 hover:shadow-[0_0_35px_rgba(186,230,84,0.55)] transition-all duration-200 cursor-pointer font-bold"
        whileTap={{ scale: 0.95 }}
        aria-label={isOpen ? "Close chat" : "Open AI assistant"}
      >
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-devflow-green/20 animate-ping pointer-events-none" />
        )}
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <FiX className="w-6 h-6 text-devflow-black" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative flex items-center justify-center"
            >
              <FiMessageSquare className="w-6 h-6 text-devflow-black" />
              <FiCompass className="w-3 h-3 absolute -top-1 -right-1 text-devflow-black font-bold" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: -16, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ duration: 0.3, ease: easeOut }}
            className="w-[90vw] sm:w-[420px] h-[580px] bg-devflow-charcoal border border-white/[0.08] rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.85)] overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="p-4 bg-devflow-black border-b border-white/[0.08] flex items-center justify-between flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-devflow-green opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-devflow-green"></span>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">
                    DevFlow AI Agent
                  </h3>
                  <span className="text-[10px] font-mono text-devflow-green block">
                    COMPANY INTEL &amp; CONNECTION DISPATCH
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-devflow-gray-400 hover:text-white transition-colors cursor-pointer p-1"
                aria-label="Close chat"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>

            {/* Message Thread */}
            <div className="flex-grow p-4 overflow-y-auto space-y-4 scrollbar-thin">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div className="max-w-[88%] space-y-2">
                    <div
                      className={`rounded-xl p-3.5 text-xs leading-relaxed whitespace-pre-line ${
                        msg.sender === "user"
                          ? "bg-devflow-green text-devflow-black font-medium shadow-md"
                          : "bg-devflow-black border border-white/[0.08] text-devflow-gray-200"
                      }`}
                    >
                      {renderFormattedText(msg.text)}
                    </div>

                    {/* Navigation Suggestions */}
                    {msg.suggestions && msg.suggestions.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {msg.suggestions.map((suggestion, idx) => (
                          <button
                            key={idx}
                            onClick={() =>
                              handleSuggestionClick(suggestion.path)
                            }
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-devflow-black border border-white/[0.08] hover:border-devflow-green/40 rounded-lg text-[10px] font-mono text-devflow-gray-300 hover:text-devflow-green transition-all duration-200 cursor-pointer group"
                          >
                            <span>{suggestion.icon || "→"}</span>
                            <span className="truncate max-w-[140px]">
                              {suggestion.title}
                            </span>
                            <FiExternalLink className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-devflow-black border border-white/[0.08] rounded-xl p-3 flex gap-1.5 items-center">
                    <span className="w-2 h-2 bg-devflow-green rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 bg-devflow-green rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 bg-devflow-green rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    <span className="ml-1.5 text-[10px] font-mono text-devflow-green">
                      PROCESSING REQUEST...
                    </span>
                  </div>
                </div>
              )}

              {/* Lead / Connection Intake Module */}
              {showLeadForm && !leadSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-devflow-black border border-devflow-green/30 rounded-xl space-y-3 shadow-lg"
                >
                  <p className="text-[10px] font-mono text-devflow-green uppercase tracking-wider block">
                    [ REQUEST CONNECTION WITH FOUNDERS ]
                  </p>
                  <p className="text-[11px] text-devflow-gray-300 font-light leading-relaxed">
                    Leave your contact info below. Founders **Prince Gajjar** &amp; **Bhavin Rajput** will receive your connection request directly and contact you within 24 hours.
                  </p>
                  <form onSubmit={handleLeadSubmit} className="space-y-2.5">
                    <div className="relative">
                      <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-devflow-gray-400 w-3.5 h-3.5" />
                      <input
                        type="text"
                        placeholder="Your Full Name"
                        required
                        value={leadName}
                        onChange={(e) => setLeadName(e.target.value)}
                        disabled={isSubmittingLead}
                        className="w-full bg-devflow-charcoal border border-white/10 rounded-lg pl-9 pr-3 py-2 text-xs text-white placeholder-devflow-gray-400 focus:outline-none focus:border-devflow-green transition-colors"
                      />
                    </div>
                    <div className="relative">
                      <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-devflow-gray-400 w-3.5 h-3.5" />
                      <input
                        type="email"
                        placeholder="Your Work Email"
                        required
                        value={leadEmail}
                        onChange={(e) => setLeadEmail(e.target.value)}
                        disabled={isSubmittingLead}
                        className="w-full bg-devflow-charcoal border border-white/10 rounded-lg pl-9 pr-3 py-2 text-xs text-white placeholder-devflow-gray-400 focus:outline-none focus:border-devflow-green transition-colors"
                      />
                    </div>
                    <div className="relative">
                      <FiPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-devflow-gray-400 w-3.5 h-3.5" />
                      <input
                        type="tel"
                        placeholder="Phone Number (Optional)"
                        value={leadPhone}
                        onChange={(e) => setLeadPhone(e.target.value)}
                        disabled={isSubmittingLead}
                        className="w-full bg-devflow-charcoal border border-white/10 rounded-lg pl-9 pr-3 py-2 text-xs text-white placeholder-devflow-gray-400 focus:outline-none focus:border-devflow-green transition-colors"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmittingLead}
                      className="w-full bg-devflow-green text-devflow-black font-semibold text-xs py-2.5 rounded-lg flex items-center justify-center gap-1.5 hover:brightness-110 transition-all cursor-pointer font-mono"
                    >
                      {isSubmittingLead ? (
                        <>
                          <FiLoader className="w-3.5 h-3.5 animate-spin" />
                          SENDING CONNECTION REQUEST...
                        </>
                      ) : (
                        <>
                          <FiCheck className="w-3.5 h-3.5" />
                          SEND CONNECTION REQUEST
                        </>
                      )}
                    </button>
                  </form>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick replies */}
            {!showLeadForm && !leadSubmitted && (
              <div className="px-4 py-2 border-t border-white/[0.04] bg-devflow-black/60 flex gap-2 overflow-x-auto scrollbar-none flex-shrink-0">
                <button
                  onClick={() => handleQuickReply("Connect me to the team")}
                  className="px-3 py-1.5 bg-devflow-green/10 border border-devflow-green/30 rounded-full text-[10px] text-devflow-green font-semibold whitespace-nowrap transition-colors cursor-pointer flex-shrink-0 font-mono"
                >
                  Connect to Founders 📞
                </button>
                <button
                  onClick={() => handleQuickReply("Tell me about the company")}
                  className="px-3 py-1.5 bg-devflow-charcoal border border-white/10 hover:border-devflow-green/40 rounded-full text-[10px] text-devflow-gray-300 hover:text-white whitespace-nowrap transition-colors cursor-pointer flex-shrink-0 font-mono"
                >
                  About Company 🏢
                </button>
                <button
                  onClick={() => handleQuickReply("What services do you offer?")}
                  className="px-3 py-1.5 bg-devflow-charcoal border border-white/10 hover:border-devflow-green/40 rounded-full text-[10px] text-devflow-gray-300 hover:text-white whitespace-nowrap transition-colors cursor-pointer flex-shrink-0 font-mono"
                >
                  Services ⚙️
                </button>
                <button
                  onClick={() => handleQuickReply("Show me your case studies")}
                  className="px-3 py-1.5 bg-devflow-charcoal border border-white/10 hover:border-devflow-green/40 rounded-full text-[10px] text-devflow-gray-300 hover:text-white whitespace-nowrap transition-colors cursor-pointer flex-shrink-0 font-mono"
                >
                  Case Studies 💼
                </button>
                <button
                  onClick={() => handleQuickReply("Why choose DevFlow?")}
                  className="px-3 py-1.5 bg-devflow-charcoal border border-white/10 hover:border-devflow-green/40 rounded-full text-[10px] text-devflow-gray-300 hover:text-white whitespace-nowrap transition-colors cursor-pointer flex-shrink-0 font-mono"
                >
                  Why DevFlow ⚡
                </button>
              </div>
            )}

            {/* Input Form */}
            <form
              onSubmit={handleSendMessage}
              className="p-3 bg-devflow-black border-t border-white/[0.08] flex gap-2 flex-shrink-0"
            >
              <input
                type="text"
                placeholder="Ask about company, connect to person, services..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                disabled={showLeadForm && !leadSubmitted}
                className="flex-grow bg-devflow-charcoal border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-devflow-gray-400 focus:outline-none focus:border-devflow-green disabled:opacity-50 transition-colors"
              />
              <button
                type="submit"
                disabled={
                  (showLeadForm && !leadSubmitted) || !inputText.trim()
                }
                className="p-2.5 bg-devflow-green text-devflow-black rounded-xl hover:scale-105 active:scale-95 disabled:opacity-50 disabled:hover:scale-100 transition-all cursor-pointer font-bold"
                aria-label="Send message"
              >
                <FiSend className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
