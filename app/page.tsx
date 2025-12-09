'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import SmoothScroll from '@/components/SmoothScroll';

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  return (
    <>
      <SmoothScroll />
      <div ref={containerRef} className="bg-black text-white">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* Animated Background */}
          <motion.div 
            className="absolute inset-0 z-0"
            style={{ y }}
          >
            <div className="absolute inset-0 bg-linear-to-br from-red-900/20 via-black to-orange-900/20" />
            <div className="absolute top-20 left-20 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
          </motion.div>

          {/* Hero Content */}
          <motion.div 
            className="relative z-10 text-center px-6 max-w-5xl"
            style={{ opacity }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <motion.span 
                className="inline-block text-sm md:text-base font-medium px-4 py-2 rounded-full border border-red-500/30 bg-red-500/10 mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                🏏 Cricket Tournament 2025
              </motion.span>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 gradient-text"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Trophy Of Computing
            </motion.h1>

            <motion.p 
              className="text-base md:text-lg text-gray-400 mb-12 max-w-xl mx-auto"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Organized by University of Colombo School of Computing
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <motion.button
                className="px-8 py-4 bg-linear-to-r from-red-600 to-orange-600 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-red-500/50 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Register Team
              </motion.button>
              <motion.button
                className="px-8 py-4 border border-white/30 rounded-full font-semibold text-lg hover:bg-white/10 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Schedule
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <motion.div 
                className="w-1.5 h-1.5 bg-white rounded-full mt-2"
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="min-h-screen py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              className="text-4xl md:text-6xl font-bold text-center mb-20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Tournament Highlights
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "15+ Teams", desc: "Top universities competing", icon: "🏏" },
                { title: "Live Scoring", desc: "Real-time match updates", icon: "📊" },
                { title: "Championship Trophy", desc: "Glory awaits the champions", icon: "🏆" }
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  className="p-8 rounded-2xl bg-linear-to-br from-red-900/20 to-orange-900/20 border border-white/10 hover:border-red-500/50 transition-all"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                >
                  <div className="text-6xl mb-4">{feature.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="min-h-screen flex items-center justify-center px-6">
          <motion.div 
            className="text-center max-w-4xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              Ready to Compete?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Register your university team and join the battle for the trophy.
            </p>
            <motion.button
              className="px-12 py-5 bg-linear-to-r from-red-600 to-orange-600 rounded-full font-bold text-xl hover:shadow-2xl hover:shadow-red-500/50 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Register Your Team →
            </motion.button>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="py-12 text-center text-gray-500 border-t border-white/10">
          <p>© 2025 Trophy Of Computing | University of Colombo School of Computing</p>
        </footer>
      </div>
    </>
  );
}
