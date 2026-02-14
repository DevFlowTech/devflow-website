"use client";

import { motion } from "framer-motion";

export default function CalendlyEmbed() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white/5 rounded-2xl p-6 border border-white/10"
    >
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-white mb-2">
          Book a Free Consultation
        </h3>
        <p className="text-devflow-gray-400 text-sm">
          Schedule a 30-minute call to discuss your project
        </p>
      </div>

      {/* Calendly-style booking interface */}
      <div className="space-y-4">
        <div className="grid grid-cols-7 gap-1 text-center">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
            <div key={day} className="text-xs text-devflow-gray-400 py-2">
              {day}
            </div>
          ))}
          {Array.from({ length: 35 }, (_, i) => {
            const date = i - 2; // Start from previous month end
            const isCurrentMonth = date > 0 && date <= 31;
            const isAvailable = isCurrentMonth && date % 3 !== 0 && date <= 28;
            const isToday = date === 15;

            return (
              <motion.button
                key={i}
                whileHover={isAvailable ? { scale: 1.1 } : {}}
                whileTap={isAvailable ? { scale: 0.95 } : {}}
                disabled={!isAvailable}
                className={`
                  aspect-square rounded-lg text-sm font-medium transition-colors
                  ${isToday ? "bg-devflow-green text-devflow-black" : ""}
                  ${
                    isAvailable && !isToday
                      ? "bg-white/5 text-white hover:bg-devflow-green/20"
                      : ""
                  }
                  ${
                    !isAvailable && isCurrentMonth
                      ? "text-devflow-gray-600 cursor-not-allowed"
                      : ""
                  }
                  ${!isCurrentMonth ? "text-devflow-gray-700" : ""}
                `}
              >
                {isCurrentMonth ? date : ""}
              </motion.button>
            );
          })}
        </div>

        <div className="border-t border-white/10 pt-4">
          <p className="text-sm text-devflow-gray-400 mb-3">
            Available time slots
          </p>
          <div className="grid grid-cols-3 gap-2">
            {[
              "10:00 AM",
              "11:30 AM",
              "2:00 PM",
              "3:30 PM",
              "5:00 PM",
              "6:30 PM",
            ].map((time) => (
              <motion.button
                key={time}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="py-2 px-3 text-sm bg-white/5 hover:bg-devflow-green/20 border border-white/10 hover:border-devflow-green/50 rounded-lg text-white transition-colors"
              >
                {time}
              </motion.button>
            ))}
          </div>
        </div>

        <a
          href="mailto:devflowtechnology@gmail.com?subject=Consultation%20Booking"
          className="block w-full py-3 bg-devflow-green text-devflow-black font-semibold rounded-xl text-center hover:opacity-90 transition-opacity mt-4"
        >
          Confirm Booking
        </a>

        <p className="text-xs text-center text-devflow-gray-500">
          Or email us at{" "}
          <span className="text-devflow-green">
            devflowtechnology@gmail.com
          </span>
        </p>
      </div>
    </motion.div>
  );
}
