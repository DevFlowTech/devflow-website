"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiMessageSquare,
  FiX,
  FiSend,
  FiUser,
  FiCheck,
  FiExternalLink,
  FiCompass,
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
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      sender: "bot",
      text: "👋 Hey! I'm DevFlow's AI agent. I can browse our entire website to answer your questions. Ask me about services, pricing, projects, or anything else!",
      timestamp: new Date(),
      suggestions: [
        { title: "Our Services", path: "/services", icon: "⚙️" },
        { title: "View Portfolio", path: "/work", icon: "💼" },
        { title: "Contact Founders", path: "/contact", icon: "📞" },
      ],
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  // Lead Capture State
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [leadName, setLeadName] = useState("");
  const [leadEmail, setLeadEmail] = useState("");
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const [leadContext, setLeadContext] = useState("");

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const triggerBotResponse = (userText: string) => {
    setIsTyping(true);

    // Use the agentic browsing engine to generate a contextual response
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
    }, 800 + Math.random() * 600);
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

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadEmail.trim() || !leadName.trim()) return;

    setLeadSubmitted(true);
    setShowLeadForm(false);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Math.random().toString(),
          sender: "bot",
          text: `Thank you, ${leadName}! ✅ I've submitted your request to **Prince Gajjar** & **Bhavin Rajput**. They will contact you at **${leadEmail}** within 24 hours with a personalized response about "${leadContext.substring(0, 60)}..."`,
          timestamp: new Date(),
          suggestions: [
            { title: "View Our Work", path: "/work", icon: "💼" },
            { title: "Check Services", path: "/services", icon: "⚙️" },
          ],
        },
      ]);
    }, 800);
  };

  const handleSuggestionClick = (path: string) => {
    // Close the chat and navigate
    setIsOpen(false);
    window.open(path, "_self");
  };

  return (
    <div className="fixed bottom-6 right-6 z-[99999] flex flex-col items-end">
      {/* Collapsed Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-14 h-14 rounded-full bg-devflow-green text-devflow-black flex items-center justify-center shadow-[0_0_25px_rgba(204,255,0,0.3)] hover:scale-105 hover:shadow-[0_0_35px_rgba(204,255,0,0.4)] transition-all duration-200 cursor-pointer"
        whileTap={{ scale: 0.95 }}
        aria-label={isOpen ? "Close chat" : "Open AI assistant"}
      >
        {/* Pulsing ring */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-devflow-green/20 animate-ping" />
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
              <FiX className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <FiMessageSquare className="w-6 h-6" />
              <FiCompass className="w-3 h-3 absolute -top-1 -right-1 text-devflow-black" />
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
            className="w-[90vw] sm:w-[400px] h-[560px] bg-devflow-charcoal border border-white/[0.08] rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="p-4 bg-devflow-black border-b border-white/[0.05] flex items-center justify-between flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-devflow-green opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-devflow-green"></span>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">
                    DevFlow AI Agent
                  </h3>
                  <span className="text-[10px] font-mono text-devflow-gray-400">
                    AGENTIC BROWSING v2.0
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-devflow-gray-400 hover:text-white transition-colors cursor-pointer"
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
                  <div className="max-w-[85%] space-y-2">
                    <div
                      className={`rounded-xl p-3 text-xs leading-relaxed whitespace-pre-line ${
                        msg.sender === "user"
                          ? "bg-devflow-green text-devflow-black font-medium"
                          : "bg-devflow-black border border-white/[0.06] text-devflow-gray-200"
                      }`}
                    >
                      {msg.text}
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
                            className="inline-flex items-center gap-1 px-2.5 py-1.5 bg-devflow-charcoal border border-white/[0.08] hover:border-devflow-green/40 rounded-lg text-[10px] font-mono text-devflow-gray-300 hover:text-devflow-green transition-all duration-200 cursor-pointer group"
                          >
                            <span>{suggestion.icon || "→"}</span>
                            <span className="truncate max-w-[120px]">
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

              {/* Simulated typing indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-devflow-black border border-white/[0.06] rounded-xl p-3 flex gap-1.5 items-center">
                    <span className="w-2 h-2 bg-devflow-green rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 bg-devflow-green rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 bg-devflow-green rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    <span className="ml-1.5 text-[10px] font-mono text-devflow-gray-500">
                      BROWSING SITE...
                    </span>
                  </div>
                </div>
              )}

              {/* Lead Capture Form Inside Chat */}
              {showLeadForm && !leadSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-devflow-black/80 border border-devflow-green/20 rounded-xl space-y-3"
                >
                  <p className="text-[10px] font-mono text-devflow-green uppercase tracking-wider">
                    [ LEAD INTAKE MODULE ]
                  </p>
                  <p className="text-[10px] text-devflow-gray-400">
                    Leave your details and Prince &amp; Bhavin will get back to
                    you within 24 hours.
                  </p>
                  <form onSubmit={handleLeadSubmit} className="space-y-3">
                    <input
                      type="text"
                      placeholder="Your Name"
                      required
                      value={leadName}
                      onChange={(e) => setLeadName(e.target.value)}
                      className="w-full bg-devflow-charcoal border border-white/10 rounded px-3 py-2 text-xs text-white placeholder-devflow-gray-400 focus:outline-none focus:border-devflow-green transition-colors"
                    />
                    <input
                      type="email"
                      placeholder="Your Email Address"
                      required
                      value={leadEmail}
                      onChange={(e) => setLeadEmail(e.target.value)}
                      className="w-full bg-devflow-charcoal border border-white/10 rounded px-3 py-2 text-xs text-white placeholder-devflow-gray-400 focus:outline-none focus:border-devflow-green transition-colors"
                    />
                    <button
                      type="submit"
                      className="w-full bg-devflow-green text-devflow-black font-semibold text-xs py-2.5 rounded flex items-center justify-center gap-1.5 hover:brightness-110 transition-all cursor-pointer"
                    >
                      <FiCheck className="w-3.5 h-3.5" />
                      SUBMIT DETAILS
                    </button>
                  </form>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick replies - hide when lead form is active */}
            {!showLeadForm && !leadSubmitted && (
              <div className="px-4 py-2 border-t border-white/[0.04] bg-devflow-black/40 flex gap-2 overflow-x-auto scrollbar-none flex-shrink-0">
                <button
                  onClick={() => handleQuickReply("What services do you offer?")}
                  className="px-3 py-1.5 bg-devflow-charcoal border border-white/5 hover:border-devflow-green/30 rounded-full text-[10px] text-devflow-gray-300 hover:text-white whitespace-nowrap transition-colors cursor-pointer flex-shrink-0"
                >
                  Our Services 🛠️
                </button>
                <button
                  onClick={() =>
                    handleQuickReply("Show me your projects")
                  }
                  className="px-3 py-1.5 bg-devflow-charcoal border border-white/5 hover:border-devflow-green/30 rounded-full text-[10px] text-devflow-gray-300 hover:text-white whitespace-nowrap transition-colors cursor-pointer flex-shrink-0"
                >
                  View Projects 💼
                </button>
                <button
                  onClick={() => handleQuickReply("What are your prices?")}
                  className="px-3 py-1.5 bg-devflow-charcoal border border-white/5 hover:border-devflow-green/30 rounded-full text-[10px] text-devflow-gray-300 hover:text-white whitespace-nowrap transition-colors cursor-pointer flex-shrink-0"
                >
                  Pricing 💰
                </button>
                <button
                  onClick={() =>
                    handleQuickReply("Connect me with Prince & Bhavin")
                  }
                  className="px-3 py-1.5 bg-devflow-charcoal border border-white/5 hover:border-devflow-green/30 rounded-full text-[10px] text-devflow-gray-300 hover:text-white whitespace-nowrap transition-colors cursor-pointer flex-shrink-0"
                >
                  Contact Founders 📞
                </button>
                <button
                  onClick={() =>
                    handleQuickReply("What AI services do you offer?")
                  }
                  className="px-3 py-1.5 bg-devflow-charcoal border border-white/5 hover:border-devflow-green/30 rounded-full text-[10px] text-devflow-gray-300 hover:text-white whitespace-nowrap transition-colors cursor-pointer flex-shrink-0"
                >
                  AI & Automation 🤖
                </button>
              </div>
            )}

            {/* Input Form */}
            <form
              onSubmit={handleSendMessage}
              className="p-3 bg-devflow-black border-t border-white/[0.05] flex gap-2 flex-shrink-0"
            >
              <input
                type="text"
                placeholder="Ask about web apps, AI, pricing..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                disabled={showLeadForm && !leadSubmitted}
                className="flex-grow bg-devflow-charcoal border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-devflow-gray-400 focus:outline-none focus:border-devflow-green/50 disabled:opacity-50 transition-colors"
              />
              <button
                type="submit"
                disabled={
                  (showLeadForm && !leadSubmitted) || !inputText.trim()
                }
                className="p-2.5 bg-devflow-green text-devflow-black rounded-xl hover:scale-105 active:scale-95 disabled:opacity-50 disabled:hover:scale-100 transition-all cursor-pointer"
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
