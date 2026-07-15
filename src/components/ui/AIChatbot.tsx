"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMessageSquare, FiX, FiSend, FiUser, FiCheck } from "react-icons/fi";
import { easeOut } from "@/lib/motion";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  timestamp: Date;
  isLeadForm?: boolean;
}

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      sender: "bot",
      text: "Hello! I am DevFlow's operational AI assistant. How can I help speed up your business workflows today?",
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  
  // Lead Capture State
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [leadName, setLeadName] = useState("");
  const [leadEmail, setLeadEmail] = useState("");
  const [leadSubmitted, setLeadSubmitted] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const triggerBotResponse = (userText: string) => {
    setIsTyping(true);
    
    setTimeout(() => {
      setIsTyping(false);
      let botReply = "";
      const text = userText.toLowerCase();

      if (text.includes("pricing") || text.includes("cost") || text.includes("budget")) {
        botReply = "Our projects typically start at ₹50,000 for standard websites and ₹2L+ for custom web applications. You can use our interactive Cost Estimator on the site for a quick breakdown! Shall I help you connect with Prince or Bhavin to discuss details?";
      } else if (text.includes("service") || text.includes("what you do")) {
        botReply = "We specialize in custom web application development, automated database syncs, AI workflows, and premium UI design. Would you like to check out our case studies?";
      } else if (text.includes("contact") || text.includes("hire") || text.includes("consultation") || text.includes("talk")) {
        botReply = "I can set up a direct consultation for you. Please leave your email address below, and our founders (Prince & Bhavin) will get in touch with you within 24 hours.";
        setShowLeadForm(true);
      } else {
        botReply = "That sounds interesting! DevFlow specializes in engineering automated workflows and clean databases to solve exactly these operational challenges. Let's arrange a brief call to align on your requirements. Would you like to leave your email?";
        setShowLeadForm(true);
      }

      setMessages((prev) => [
        ...prev,
        {
          id: Math.random().toString(),
          sender: "bot",
          text: botReply,
          timestamp: new Date(),
        },
      ]);
    }, 1200);
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
          text: `Thank you, ${leadName}! I've submitted your request to Prince & Bhavin. They will contact you at ${leadEmail} shortly.`,
          timestamp: new Date(),
        },
      ]);
    }, 800);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[99999] flex flex-col items-end">
      {/* Collapsed Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-devflow-green text-devflow-black flex items-center justify-center shadow-[0_0_25px_rgba(204,255,0,0.3)] hover:scale-105 transition-transform duration-200 cursor-pointer"
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <FiX className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <FiMessageSquare className="w-6 h-6" />
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
            className="w-[90vw] sm:w-[380px] h-[500px] bg-devflow-charcoal border border-white/[0.08] rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="p-4 bg-devflow-black border-b border-white/[0.05] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-devflow-green opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-devflow-green"></span>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">DevFlow Assistant</h3>
                  <span className="text-[10px] font-mono text-devflow-gray-400">OPERATIONAL AI CORE v1.2</span>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-devflow-gray-400 hover:text-white transition-colors cursor-pointer">
                <FiX className="w-5 h-5" />
              </button>
            </div>

            {/* Message Thread */}
            <div className="flex-grow p-4 overflow-y-auto space-y-4 scrollbar-thin">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] rounded-xl p-3 text-xs leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-devflow-green text-devflow-black font-medium"
                        : "bg-devflow-black border border-white/[0.06] text-devflow-gray-200"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {/* Simulated typing indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-devflow-black border border-white/[0.06] rounded-xl p-3 flex gap-1.5 items-center">
                    <span className="w-1.5 h-1.5 bg-devflow-green rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 bg-devflow-green rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 bg-devflow-green rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}

              {/* Lead Capture Form Inside Chat */}
              {showLeadForm && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-4 bg-devflow-black/80 border border-devflow-green/20 rounded-xl space-y-3">
                  <p className="text-[10px] font-mono text-devflow-green uppercase tracking-wider">[ LEAD INTAKE MODULE ]</p>
                  <form onSubmit={handleLeadSubmit} className="space-y-3">
                    <input
                      type="text"
                      placeholder="Your Name"
                      required
                      value={leadName}
                      onChange={(e) => setLeadName(e.target.value)}
                      className="w-full bg-devflow-charcoal border border-white/10 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-devflow-green"
                    />
                    <input
                      type="email"
                      placeholder="Your Email Address"
                      required
                      value={leadEmail}
                      onChange={(e) => setLeadEmail(e.target.value)}
                      className="w-full bg-devflow-charcoal border border-white/10 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-devflow-green"
                    />
                    <button type="submit" className="w-full bg-devflow-green text-devflow-black font-semibold text-xs py-2 rounded flex items-center justify-center gap-1.5 cursor-pointer">
                      <FiCheck className="w-3.5 h-3.5" /> SUBMIT DETAILS
                    </button>
                  </form>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick replies */}
            {!showLeadForm && (
              <div className="px-4 py-2 border-t border-white/[0.04] bg-devflow-black/40 flex gap-2 overflow-x-auto scrollbar-none">
                <button
                  onClick={() => handleQuickReply("What are your prices?")}
                  className="px-3 py-1.5 bg-devflow-charcoal border border-white/5 hover:border-devflow-green/30 rounded-full text-[10px] text-devflow-gray-300 hover:text-white whitespace-nowrap transition-colors cursor-pointer"
                >
                  Project Pricing 💰
                </button>
                <button
                  onClick={() => handleQuickReply("Tell me about your services")}
                  className="px-3 py-1.5 bg-devflow-charcoal border border-white/5 hover:border-devflow-green/30 rounded-full text-[10px] text-devflow-gray-300 hover:text-white whitespace-nowrap transition-colors cursor-pointer"
                >
                  Our Services 🛠️
                </button>
                <button
                  onClick={() => handleQuickReply("Connect me with Prince & Bhavin")}
                  className="px-3 py-1.5 bg-devflow-charcoal border border-white/5 hover:border-devflow-green/30 rounded-full text-[10px] text-devflow-gray-300 hover:text-white whitespace-nowrap transition-colors cursor-pointer"
                >
                  Contact Founders 📞
                </button>
              </div>
            )}

            {/* Input Form */}
            <form onSubmit={handleSendMessage} className="p-3 bg-devflow-black border-t border-white/[0.05] flex gap-2">
              <input
                type="text"
                placeholder="Ask about web apps, pricing, timelines..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                disabled={showLeadForm}
                className="flex-grow bg-devflow-charcoal border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-devflow-gray-400 focus:outline-none focus:border-devflow-green/50 disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={showLeadForm || !inputText.trim()}
                className="p-2.5 bg-devflow-green text-devflow-black rounded-xl hover:scale-105 active:scale-95 disabled:opacity-50 disabled:hover:scale-100 transition-all cursor-pointer"
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
