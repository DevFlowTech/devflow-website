"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

interface LeadInfo {
  name: string;
  email: string;
  phone: string;
}

const quickReplies = [
  "What services do you offer?",
  "I need a website",
  "Tell me about AI solutions",
  "Get a cost estimate",
  "Book a consultation",
];

// Simulated AI responses (replace with actual API call)
const getAIResponse = async (
  message: string,
  userName: string,
): Promise<string> => {
  // Simulate typing delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const lowerMessage = message.toLowerCase();

  if (lowerMessage.includes("service") || lowerMessage.includes("offer")) {
    return `Great question, ${userName}! We offer a comprehensive range of IT services:\n\n🤖 **AI & ML Solutions** - ChatGPT integration, custom AI models, computer vision\n\n🏢 **Enterprise ERP** - Inventory, HR, accounting systems\n\n💻 **Web Development** - Next.js, React, custom web apps\n\n📱 **Mobile Apps** - iOS, Android, React Native\n\n☁️ **Cloud & DevOps** - AWS, Azure, Docker, CI/CD\n\n🛠️ **IT Consulting** - 24/7 support, security audits\n\nWhich service interests you most?`;
  }

  if (lowerMessage.includes("website") || lowerMessage.includes("web")) {
    return `Great choice, ${userName}! We specialize in high-performance web development. 🚀\n\nWe build:\n• Custom web applications\n• E-commerce platforms\n• SaaS products\n• Corporate websites\n\nOur stack: **Next.js, React, TypeScript, Tailwind CSS**\n\nWould you like a cost estimate or to schedule a consultation?`;
  }

  if (lowerMessage.includes("ai") || lowerMessage.includes("artificial")) {
    return `Our AI solutions can transform your business, ${userName}! 🤖\n\n**What we offer:**\n• ChatGPT/LLM integrations\n• Custom AI chatbots\n• Machine learning models\n• Computer vision systems\n• NLP & text analysis\n• AI automation\n\nWe've helped companies reduce manual work by 70% with AI automation.\n\nWant to discuss your AI project?`;
  }

  if (
    lowerMessage.includes("cost") ||
    lowerMessage.includes("price") ||
    lowerMessage.includes("estimate")
  ) {
    return `I'd be happy to help with pricing, ${userName}! 💰\n\n**Typical project ranges:**\n• Simple website: ₹50,000 - ₹1,50,000\n• Web application: ₹2,00,000 - ₹10,00,000\n• Mobile app: ₹3,00,000 - ₹15,00,000\n• AI integration: ₹1,00,000 - ₹5,00,000\n• ERP system: ₹5,00,000 - ₹25,00,000\n\nFor an accurate quote, tell me about your project!`;
  }

  if (
    lowerMessage.includes("book") ||
    lowerMessage.includes("consult") ||
    lowerMessage.includes("meeting") ||
    lowerMessage.includes("call")
  ) {
    return `Let's schedule a consultation, ${userName}! 📅\n\nYou can:\n1. **Email us:** devflowtechnology@gmail.com\n2. **Use the contact form** on this page\n3. **Tell me your preferred time** and I'll help arrange it\n\nOur team will reach out to you shortly at the contact info you provided!`;
  }

  if (
    lowerMessage.includes("hello") ||
    lowerMessage.includes("hi") ||
    lowerMessage.includes("hey")
  ) {
    return `Hello ${userName}! 👋 Great to meet you!\n\nI'm here to help you learn about DevFlow's services and get started on your project.\n\nWhat brings you here today?`;
  }

  return `Thanks for your message, ${userName}! 🙌\n\nI'd love to help you further. For complex queries, I recommend:\n\n1. **Emailing us:** devflowtechnology@gmail.com\n2. **Filling out the contact form** below\n\nOr ask me about:\n• Our services\n• Pricing estimates\n• Booking a consultation\n\nWhat would you like to know?`;
};

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [leadInfo, setLeadInfo] = useState<LeadInfo | null>(null);
  const [leadForm, setLeadForm] = useState<LeadInfo>({
    name: "",
    email: "",
    phone: "",
  });
  const [formErrors, setFormErrors] = useState<Partial<LeadInfo>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Check for existing lead info in localStorage
  useEffect(() => {
    const savedLead = localStorage.getItem("devflow_lead");
    if (savedLead) {
      const parsed = JSON.parse(savedLead);
      setLeadInfo(parsed);
      // Initialize with welcome message
      setMessages([
        {
          id: "welcome",
          role: "assistant",
          content: `👋 Welcome back, ${parsed.name}! I'm DevFlow's AI assistant.\n\nI can help you with:\n• Information about our services\n• Project cost estimates\n• Booking a consultation\n• Technical questions\n\nHow can I help you today?`,
          timestamp: new Date(),
        },
      ]);
    }
  }, []);

  const validateForm = (): boolean => {
    const errors: Partial<LeadInfo> = {};

    if (!leadForm.name.trim()) {
      errors.name = "Name is required";
    }

    if (!leadForm.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(leadForm.email)) {
      errors.email = "Please enter a valid email";
    }

    if (!leadForm.phone.trim()) {
      errors.phone = "Phone is required";
    } else if (!/^[0-9]{10}$/.test(leadForm.phone.replace(/\D/g, ""))) {
      errors.phone = "Please enter a valid 10-digit phone number";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call to save lead
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Save to localStorage
    localStorage.setItem("devflow_lead", JSON.stringify(leadForm));
    setLeadInfo(leadForm);

    // Initialize chat with personalized welcome
    setMessages([
      {
        id: "welcome",
        role: "assistant",
        content: `👋 Hi ${leadForm.name}! Thanks for connecting with DevFlow!\n\nI'm your AI assistant and I can help you with:\n• Information about our services\n• Project cost estimates\n• Booking a consultation\n• Technical questions\n\nOur team will also reach out to you at ${leadForm.email} soon.\n\nHow can I help you today?`,
        timestamp: new Date(),
      },
    ]);

    setIsSubmitting(false);
  };

  const sendMessage = async (content: string) => {
    if (!content.trim() || !leadInfo) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: content.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    try {
      const response = await getAIResponse(
        content,
        leadInfo.name.split(" ")[0],
      );
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: response,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error getting AI response:", error);
    } finally {
      setIsTyping(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const resetChat = () => {
    localStorage.removeItem("devflow_lead");
    setLeadInfo(null);
    setMessages([]);
    setLeadForm({ name: "", email: "", phone: "" });
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-50 w-16 h-16 rounded-full bg-devflow-green text-devflow-black flex items-center justify-center shadow-lg shadow-[0_0_20px_rgba(186,230,84,0.3)] cursor-pointer"
        whileHover={{
          scale: 1.1,
          boxShadow: "0 0 30px rgba(186, 230, 84, 0.5)",
        }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.svg
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              className="w-7 h-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </motion.svg>
          ) : (
            <motion.svg
              key="chat"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="w-7 h-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Notification dot - Lime Green */}
      {!isOpen && (
        <motion.div
          className="fixed bottom-[5.5rem] right-8 z-50 w-4 h-4 rounded-full bg-devflow-green shadow-[0_0_10px_rgba(186,230,84,0.6)]"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      )}

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25 }}
            className="fixed bottom-28 right-8 z-50 w-[380px] h-[520px] bg-devflow-dark border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-devflow-green/20 to-devflow-green/10 p-4 border-b border-white/10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-devflow-green flex items-center justify-center">
                    <span className="text-devflow-black font-bold text-lg">
                      D
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">
                      DevFlow AI Assistant
                    </h3>
                    <p className="text-xs text-devflow-gray-400 flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-devflow-green animate-pulse" />
                      Always online
                    </p>
                  </div>
                </div>
                {leadInfo && (
                  <button
                    onClick={resetChat}
                    className="text-xs text-devflow-gray-400 hover:text-white transition-colors"
                    title="Reset chat"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                  </button>
                )}
              </div>
            </div>

            {/* Lead Capture Form or Chat */}
            {!leadInfo ? (
              /* Lead Capture Form */
              <div className="flex-1 p-6 flex flex-col">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-devflow-green/20 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-devflow-green"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Let&apos;s Connect!
                  </h4>
                  <p className="text-sm text-devflow-gray-300">
                    Share your details to start chatting with our AI assistant
                  </p>
                </div>

                <form
                  onSubmit={handleLeadSubmit}
                  className="space-y-4 flex-1 flex flex-col pb-safe"
                >
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name *"
                      value={leadForm.name}
                      onChange={(e) =>
                        setLeadForm((prev) => ({
                          ...prev,
                          name: e.target.value,
                        }))
                      }
                      className={`w-full bg-white/5 border ${
                        formErrors.name ? "border-red-500" : "border-white/10"
                      } rounded-xl px-4 py-3 text-white placeholder:text-devflow-gray-500 focus:outline-none focus:border-devflow-green/50 transition-colors`}
                    />
                    {formErrors.name && (
                      <p className="text-red-400 text-xs mt-1">
                        {formErrors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <input
                      type="email"
                      placeholder="Email Address *"
                      value={leadForm.email}
                      onChange={(e) =>
                        setLeadForm((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }))
                      }
                      className={`w-full bg-white/5 border ${
                        formErrors.email ? "border-red-500" : "border-white/10"
                      } rounded-xl px-4 py-3 text-white placeholder:text-devflow-gray-500 focus:outline-none focus:border-devflow-green/50 transition-colors`}
                    />
                    {formErrors.email && (
                      <p className="text-red-400 text-xs mt-1">
                        {formErrors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number *"
                      value={leadForm.phone}
                      onChange={(e) =>
                        setLeadForm((prev) => ({
                          ...prev,
                          phone: e.target.value,
                        }))
                      }
                      className={`w-full bg-white/5 border ${
                        formErrors.phone ? "border-red-500" : "border-white/10"
                      } rounded-xl px-4 py-3 text-white placeholder:text-devflow-gray-500 focus:outline-none focus:border-devflow-green/50 transition-colors`}
                    />
                    {formErrors.phone && (
                      <p className="text-red-400 text-xs mt-1">
                        {formErrors.phone}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-auto w-full py-3 bg-devflow-green text-devflow-black rounded-xl font-semibold hover:bg-devflow-green/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Starting Chat...
                      </>
                    ) : (
                      <>
                        Start Chatting
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </>
                    )}
                  </button>

                  <p className="text-xs text-devflow-gray-500 text-center">
                    By continuing, you agree to receive communications from
                    DevFlow
                  </p>
                </form>
              </div>
            ) : (
              /* Chat Interface */
              <>
                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${
                        message.role === "user"
                          ? "justify-end"
                          : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                          message.role === "user"
                            ? "bg-devflow-green text-devflow-black"
                            : "bg-white/5 text-white border border-white/10"
                        }`}
                      >
                        <p className="text-sm whitespace-pre-line">
                          {message.content}
                        </p>
                      </div>
                    </motion.div>
                  ))}

                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex justify-start"
                    >
                      <div className="bg-white/5 rounded-2xl px-4 py-3 border border-white/10">
                        <div className="flex gap-1">
                          {[0, 1, 2].map((i) => (
                            <motion.div
                              key={i}
                              className="w-2 h-2 rounded-full bg-devflow-green"
                              animate={{ y: [0, -5, 0] }}
                              transition={{
                                duration: 0.6,
                                delay: i * 0.1,
                                repeat: Infinity,
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {/* Quick Replies */}
                <div className="px-4 pb-2 flex gap-2 overflow-x-auto scrollbar-hide">
                  {quickReplies.slice(0, 3).map((reply) => (
                    <button
                      key={reply}
                      onClick={() => sendMessage(reply)}
                      className="flex-shrink-0 px-3 py-1.5 text-xs bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-devflow-gray-300 transition-colors"
                    >
                      {reply}
                    </button>
                  ))}
                </div>

                {/* Input */}
                <form
                  onSubmit={handleSubmit}
                  className="p-4 border-t border-white/10"
                >
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Type a message..."
                      className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-devflow-gray-500 focus:outline-none focus:border-devflow-green/50 transition-colors"
                    />
                    <button
                      type="submit"
                      disabled={!input.trim() || isTyping}
                      className="px-4 py-3 bg-devflow-green text-devflow-black rounded-xl font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-devflow-green/90 transition-colors"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        />
                      </svg>
                    </button>
                  </div>
                </form>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
