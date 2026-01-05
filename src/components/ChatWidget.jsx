import { useState, useEffect, useRef } from "react";
import { MessageCircle, Send, X, User, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false); // For initial "thinking" state
  const [isStreaming, setIsStreaming] = useState(false); // For active typing effect
  const [showTooltip, setShowTooltip] = useState(false);
  const messagesEndRef = useRef(null);

  const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, loading, isOpen]);

  async function sendMessage() {
    if (!input.trim()) return;

    const userMsg = { role: "user", content: input };
    const updatedMessages = [...messages, userMsg];

    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(`${API_BASE}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      if (!res.ok) throw new Error("Failed to fetch");

      const reader = res.body.getReader();
      const decoder = new TextDecoder();

      setLoading(false);
      setIsStreaming(true); // Start typing cursor

      // Initialize assistant message
      setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

      let currentAssistantContent = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        currentAssistantContent += chunk;

        setMessages((prev) => {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1].content = currentAssistantContent;
          return newMessages;
        });
      }
    } catch (error) {
      console.error("Chat Error:", error);
    } finally {
      setLoading(false);
      setIsStreaming(false); // Stop typing cursor
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans text-stone-900 dark:text-white">
      <AnimatePresence mode="wait">
        {isOpen ? (
          <motion.div
            key="chat-window"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="w-80 sm:w-[360px] h-[500px] flex flex-col bg-transparent"
          >
            {/* Header - Full Width Theme Gradient */}
            <div className="w-full mb-3 flex items-center justify-between bg-linear-to-r from-cyan-600 to-purple-600 dark:from-cyan-500 dark:to-purple-500 p-4 rounded-2xl shadow-xl border border-white/20 text-white">
              <div className="flex items-center gap-3">
                <div className="p-1.5 bg-white/20 rounded-lg backdrop-blur-md">
                  <User size={18} />
                </div>
                <div>
                  <h3 className="font-bold text-sm tracking-tight leading-none">
                    Chat with me
                  </h3>
                  <div className="flex items-center gap-1 mt-1">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-[10px] font-bold uppercase tracking-widest opacity-90">
                      Online
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 hover:bg-white/10 rounded-xl transition-all"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto px-1 py-2 space-y-4 custom-scrollbar">
              {messages.length === 0 && (
                <div className="h-full flex flex-col items-center justify-center text-stone-400 dark:text-slate-500 opacity-40 space-y-2">
                  <Sparkles size={24} />
                  <p className="text-xs font-medium">
                    Ask me about my AI projects!
                  </p>
                </div>
              )}

              {messages.map((m, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={i}
                  className={`flex ${
                    m.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`
                    max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed shadow-lg backdrop-blur-xl
                    ${
                      m.role === "user"
                        ? "bg-linear-to-r from-cyan-600 to-cyan-700 text-white rounded-tr-none border border-white/10"
                        : "bg-stone-100/90 dark:bg-slate-800/90 text-stone-900 dark:text-white rounded-tl-none border border-stone-200 dark:border-slate-700 whitespace-pre-wrap"
                    }
                  `}
                  >
                    {m.content}
                    {/* Pulsing Cursor - Only on the very last assistant message while streaming */}
                    {m.role === "assistant" &&
                      i === messages.length - 1 &&
                      isStreaming && (
                        <span className="inline-block w-1.5 h-4 ml-1 bg-cyan-500 animate-pulse align-middle" />
                      )}
                  </div>
                </motion.div>
              ))}

              {loading && (
                <div className="flex justify-start">
                  <div className="bg-stone-100/90 dark:bg-slate-800/90 backdrop-blur-md border border-stone-200 dark:border-slate-700 px-4 py-3 rounded-2xl rounded-tl-none shadow-md">
                    <div className="flex gap-1">
                      <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce [animation-delay:-0.3s]" />
                      <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce [animation-delay:-0.15s]" />
                      <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce" />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="mt-3 p-2 bg-stone-50/90 dark:bg-slate-800/50 backdrop-blur-2xl rounded-[2rem] border border-stone-200 dark:border-slate-700 shadow-2xl">
              <div className="relative flex items-center">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="w-full bg-transparent text-stone-900 dark:text-white pl-4 pr-12 py-3.5 rounded-2xl text-sm focus:outline-none placeholder:text-stone-400 dark:placeholder:text-slate-500"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                />
                <button
                  onClick={sendMessage}
                  disabled={!input.trim() || loading || isStreaming}
                  className="absolute right-1.5 p-2.5 bg-linear-to-r from-cyan-600 to-purple-600 text-white rounded-xl hover:opacity-90 transition-all active:scale-95 shadow-lg shadow-cyan-500/20"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        ) : (
          /* --- FLOATING ICON --- */
          <div className="relative flex flex-col items-end">
            <AnimatePresence>
              {showTooltip && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, x: 5 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.8, x: 5 }}
                  className="absolute bottom-16 right-0 mb-2 whitespace-nowrap bg-stone-900 dark:bg-white text-white dark:text-stone-900 text-[11px] font-bold py-2 px-4 rounded-xl shadow-2xl z-10"
                >
                  Chat with me
                  <div className="absolute -bottom-1 right-5 w-2 h-2 bg-stone-900 dark:bg-white rotate-45" />
                </motion.div>
              )}
            </AnimatePresence>

            <motion.button
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ y: [0, -10, 0] }}
              transition={{
                y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              }}
              onClick={() => setIsOpen(true)}
              className="p-4 rounded-full bg-linear-to-r from-cyan-600 to-purple-600 text-white shadow-[0_10px_30px_rgba(8,145,178,0.3)] border border-white/20"
            >
              <MessageCircle size={26} />
            </motion.button>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
