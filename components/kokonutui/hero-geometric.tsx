"use client"

import type React from "react"

import { motion, useScroll, useTransform } from "framer-motion"
import { Pacifico } from "next/font/google"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Instagram, Mail, Users, Send } from "lucide-react"
import { useState } from "react"
import { ThemeToggle } from "@/components/theme-toggle"

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
})

function MedicalFloatingObject({
  className,
  delay = 0,
  icon: Icon,
  size = 96,
  rotate = 0,
  duration = 30,
}: {
  className?: string
  delay?: number
  icon: any
  size?: number
  rotate?: number
  duration?: number
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -200,
        rotate: rotate - 20,
        scale: 0.8,
      }}
      animate={{
        opacity: [0.6, 0.9, 0.6],
        y: [0, -60, 0],
        rotate: [rotate, rotate + 25, rotate],
        scale: [0.8, 1.1, 0.8],
        x: [0, 20, -20, 0],
      }}
      transition={{
        duration: duration * 0.6,
        delay,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
      className={cn("absolute pointer-events-none", className)}
      style={{
        filter: "blur(0.2px)",
      }}
    >
      <Icon className="text-blue-400/80 dark:text-blue-300/90" style={{ width: size, height: size }} />
    </motion.div>
  )
}

function StethoscopeIcon({ className, style }: { className?: string; style?: any }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} style={style}>
      <path d="M11 2v6" />
      <path d="M5 2v6" />
      <path d="M5 8a7 7 0 0 0 14 0" />
      <circle cx="19" cy="14" r="2" />
      <path d="M17 14v4a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-4" />
    </svg>
  )
}

function HeartbeatIcon({ className, style }: { className?: string; style?: any }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} style={style}>
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  )
}

function PillIcon({ className, style }: { className?: string; style?: any }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} style={style}>
      <path d="M10.5 20.5 21 10a2.828 2.828 0 1 0-4-4L6.5 16.5a2.828 2.828 0 1 0 4 4Z" />
      <path d="m6.5 10.5 7 7" />
    </svg>
  )
}

function SyringeIcon({ className, style }: { className?: string; style?: any }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} style={style}>
      <path d="m18 2 4 4" />
      <path d="m17 7 3-3" />
      <path d="M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5" />
      <path d="m9 11 4 4" />
      <path d="m5 19-3 3" />
      <path d="m14 4 6 6" />
    </svg>
  )
}

function DNAIcon({ className, style }: { className?: string; style?: any }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} style={style}>
      <path d="M2 15c6.667-6 13.333 0 20-6" />
      <path d="M9 22c1.798-1.998 2.518-3.995 2.807-5.993" />
      <path d="M15 2c-1.798 1.998-2.518 3.995-2.807 5.993" />
      <path d="m17 6-2.5-2.5" />
      <path d="m14 8-1-1" />
      <path d="m7 18 2.5 2.5" />
      <path d="m3.5 14.5.5.5" />
      <path d="m20 9 .5.5" />
      <path d="m6.5 12.5 1 1" />
      <path d="m16.5 10.5 1 1" />
      <path d="m10 16 1.5 1.5" />
    </svg>
  )
}

function MicroscopeIcon({ className, style }: { className?: string; style?: any }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} style={style}>
      <path d="M6 18h8" />
      <path d="M3 22h18" />
      <path d="M14 22a7 7 0 1 0 0-14h-1" />
      <path d="M9 14h.01" />
      <path d="M9 12a3 3 0 0 1-6 0 3 3 0 0 1 6 0Z" />
      <path d="M12 6 9 3 6 6" />
    </svg>
  )
}

function CaduceusIcon({ className, style }: { className?: string; style?: any }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} style={style}>
      <path d="M12 2v20" />
      <path d="M8 5a4 4 0 0 1 8 0c0 1-1 2-2 2H10c-1 0-2-1-2-2Z" />
      <path d="M8 19a4 4 0 0 0 8 0c0-1-1-2-2-2H10c-1 0-2 1-2 2Z" />
      <path d="M12 9c2 0 4-1 4-3s-2-3-4-3" />
      <path d="M12 15c-2 0-4 1-4 3s2 3 4 3" />
    </svg>
  )
}

function ThermometerIcon({ className, style }: { className?: string; style?: any }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} style={style}>
      <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
    </svg>
  )
}

function BandageIcon({ className, style }: { className?: string; style?: any }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} style={style}>
      <path d="M10 10.01h.01" />
      <path d="M10 14.01h.01" />
      <path d="M14 10.01h.01" />
      <path d="M14 14.01h.01" />
      <path d="M18 6v11.5L12 23l-6-5.5V6a3 3 0 0 1 6 0v5l6-5a3 3 0 0 1 0 0Z" />
    </svg>
  )
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = `PHG Inquiry – ${formData.name}`
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    const mailtoLink = `mailto:tabbas3@gmu.edu,kabbas3@gmu.edu?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoLink
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="text"
          placeholder="Full Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          className="w-full px-4 py-3 rounded-lg bg-white/5 dark:bg-black/10 backdrop-blur-sm border border-white/10 text-slate-800 dark:text-white placeholder-slate-600 dark:placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400/50"
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          className="w-full px-4 py-3 rounded-lg bg-white/5 dark:bg-black/10 backdrop-blur-sm border border-white/10 text-slate-800 dark:text-white placeholder-slate-600 dark:placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400/50"
        />
      </div>
      <div>
        <textarea
          placeholder="Message"
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
          className="w-full px-4 py-3 rounded-lg bg-white/5 dark:bg-black/10 backdrop-blur-sm border border-white/10 text-slate-800 dark:text-white placeholder-slate-600 dark:placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400/50 resize-none"
        />
      </div>
      <button
        type="submit"
        className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-pink-500 to-blue-500 text-white font-medium hover:from-pink-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
      >
        <Send className="w-4 h-4" />
        Submit
      </button>
    </form>
  )
}

export default function HeroGeometric() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 1000], [0, -150])
  const y2 = useTransform(scrollY, [0, 1000], [0, -300])
  const y3 = useTransform(scrollY, [0, 1000], [0, -200])

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-br from-blue-50 via-[#F8FAFF] to-pink-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-pink-500/10 blur-3xl" />

      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/5 dark:bg-black/10 border-b border-white/10 shadow">
        <div className="flex justify-between items-center py-2 px-8 max-w-6xl mx-auto">
          <div className="flex items-center gap-4">
            <Image src="/phg-logo.png" alt="PHG Logo" width={80} height={80} className="rounded-full" />
            <span className="text-slate-800 dark:text-white font-semibold text-2xl">PHG Association</span>
          </div>
          <div className="flex items-center gap-8">
            <a
              href="#officers"
              className="text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-white transition-colors flex items-center gap-2 text-lg"
            >
              <Users className="w-5 h-5" />
              Officers
            </a>
            <a
              href="#contact"
              className="text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-white transition-colors flex items-center gap-2 text-lg"
            >
              <Mail className="w-5 h-5" />
              Contact Us
            </a>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      <div className="absolute inset-0 overflow-hidden">
        <motion.div style={{ y: y1 }}>
          <MedicalFloatingObject
            delay={0.1}
            icon={StethoscopeIcon}
            size={120}
            rotate={12}
            duration={25}
            className="left-[-15%] top-[15%]"
          />
        </motion.div>
        <motion.div style={{ y: y2 }}>
          <MedicalFloatingObject
            delay={0.2}
            icon={HeartbeatIcon}
            size={110}
            rotate={-15}
            duration={20}
            className="right-[-5%] top-[70%]"
          />
        </motion.div>
        <motion.div style={{ y: y3 }}>
          <MedicalFloatingObject
            delay={0.3}
            icon={PillIcon}
            size={90}
            rotate={-8}
            duration={22}
            className="left-[-10%] bottom-[8%]"
          />
        </motion.div>
        <MedicalFloatingObject
          delay={0.4}
          icon={SyringeIcon}
          size={100}
          rotate={20}
          duration={28}
          className="right-[5%] top-[10%]"
        />
        <MedicalFloatingObject
          delay={0.5}
          icon={DNAIcon}
          size={130}
          rotate={-25}
          duration={35}
          className="left-[10%] top-[5%]"
        />
        <MedicalFloatingObject
          delay={0.6}
          icon={MicroscopeIcon}
          size={115}
          rotate={15}
          duration={24}
          className="right-[15%] bottom-[15%]"
        />
        <MedicalFloatingObject
          delay={0.7}
          icon={CaduceusIcon}
          size={105}
          rotate={-10}
          duration={21}
          className="left-[25%] top-[80%]"
        />
        <MedicalFloatingObject
          delay={0.8}
          icon={StethoscopeIcon}
          size={85}
          rotate={30}
          duration={18}
          className="right-[-8%] top-[40%]"
        />
        <MedicalFloatingObject
          delay={0.9}
          icon={HeartbeatIcon}
          size={95}
          rotate={-20}
          duration={26}
          className="left-[-5%] top-[45%]"
        />
        <MedicalFloatingObject
          delay={1.0}
          icon={PillIcon}
          size={80}
          rotate={25}
          duration={16}
          className="right-[25%] top-[25%]"
        />
        <MedicalFloatingObject
          delay={1.1}
          icon={DNAIcon}
          size={125}
          rotate={-5}
          duration={32}
          className="left-[40%] bottom-[20%]"
        />
        <MedicalFloatingObject
          delay={1.2}
          icon={MicroscopeIcon}
          size={110}
          rotate={18}
          duration={23}
          className="right-[35%] bottom-[5%]"
        />
        <MedicalFloatingObject
          delay={1.3}
          icon={ThermometerIcon}
          size={90}
          rotate={-12}
          duration={20}
          className="left-[50%] top-[30%]"
        />
        <MedicalFloatingObject
          delay={1.4}
          icon={BandageIcon}
          size={100}
          rotate={22}
          duration={25}
          className="right-[50%] top-[60%]"
        />
        <MedicalFloatingObject
          delay={1.5}
          icon={CaduceusIcon}
          size={120}
          rotate={-18}
          duration={30}
          className="left-[65%] bottom-[30%]"
        />
        <MedicalFloatingObject
          delay={1.6}
          icon={SyringeIcon}
          size={95}
          rotate={8}
          duration={22}
          className="right-[65%] top-[15%]"
        />

        <MedicalFloatingObject
          delay={1.7}
          icon={HeartbeatIcon}
          size={105}
          rotate={-35}
          duration={27}
          className="left-[-7%] top-[25%]"
        />
        <MedicalFloatingObject
          delay={1.8}
          icon={StethoscopeIcon}
          size={115}
          rotate={40}
          duration={19}
          className="right-[-7%] top-[85%]"
        />
        <MedicalFloatingObject
          delay={1.9}
          icon={PillIcon}
          size={85}
          rotate={-30}
          duration={24}
          className="left-[80%] top-[50%]"
        />
        <MedicalFloatingObject
          delay={2.0}
          icon={DNAIcon}
          size={140}
          rotate={10}
          duration={33}
          className="right-[80%] top-[75%]"
        />
        <MedicalFloatingObject
          delay={2.1}
          icon={MicroscopeIcon}
          size={105}
          rotate={-15}
          duration={25}
          className="left-[75%] top-[135%]"
        />
        <MedicalFloatingObject
          delay={2.2}
          icon={ThermometerIcon}
          size={105}
          rotate={35}
          duration={18}
          className="right-[55%] top-[255%]"
        />
        <MedicalFloatingObject
          delay={2.3}
          icon={BandageIcon}
          size={100}
          rotate={-40}
          duration={26}
          className="left-[30%] top-[195%]"
        />
        <MedicalFloatingObject
          delay={2.4}
          icon={CaduceusIcon}
          size={125}
          rotate={15}
          duration={29}
          className="right-[20%] top-[5%]"
        />

        <MedicalFloatingObject
          delay={2.5}
          icon={HeartbeatIcon}
          size={105}
          rotate={-30}
          duration={27}
          className="left-[-10%] top-[120%]"
        />
        <MedicalFloatingObject
          delay={2.6}
          icon={StethoscopeIcon}
          size={115}
          rotate={25}
          duration={24}
          className="right-[-8%] top-[130%]"
        />
        <MedicalFloatingObject
          delay={2.7}
          icon={DNAIcon}
          size={135}
          rotate={-8}
          duration={33}
          className="left-[60%] top-[140%]"
        />
        <MedicalFloatingObject
          delay={2.8}
          icon={PillIcon}
          size={95}
          rotate={20}
          duration={22}
          className="right-[75%] top-[125%]"
        />
        <MedicalFloatingObject
          delay={2.9}
          icon={MicroscopeIcon}
          size={105}
          rotate={-15}
          duration={25}
          className="left-[75%] top-[135%]"
        />

        <MedicalFloatingObject
          delay={3.0}
          icon={MicroscopeIcon}
          size={110}
          rotate={15}
          duration={23}
          className="left-[-5%] top-[180%]"
        />
        <MedicalFloatingObject
          delay={3.1}
          icon={PillIcon}
          size={90}
          rotate={-20}
          duration={21}
          className="right-[-2%] top-[190%]"
        />
        <MedicalFloatingObject
          delay={3.2}
          icon={CaduceusIcon}
          size={125}
          rotate={12}
          duration={29}
          className="left-[70%] top-[200%]"
        />
        <MedicalFloatingObject
          delay={3.3}
          icon={ThermometerIcon}
          size={95}
          rotate={-25}
          duration={20}
          className="right-[65%] top-[185%]"
        />
        <MedicalFloatingObject
          delay={3.4}
          icon={BandageIcon}
          size={100}
          rotate={30}
          duration={26}
          className="left-[30%] top-[195%]"
        />
        <MedicalFloatingObject
          delay={3.5}
          icon={SyringeIcon}
          size={85}
          rotate={-10}
          duration={18}
          className="right-[30%] top-[205%]"
        />

        <MedicalFloatingObject
          delay={3.6}
          icon={ThermometerIcon}
          size={100}
          rotate={-15}
          duration={22}
          className="left-[5%] top-[250%]"
        />
        <MedicalFloatingObject
          delay={3.7}
          icon={BandageIcon}
          size={110}
          rotate={28}
          duration={26}
          className="right-[10%] top-[260%]"
        />
        <MedicalFloatingObject
          delay={3.8}
          icon={SyringeIcon}
          size={105}
          rotate={-22}
          duration={24}
          className="left-[55%] top-[270%]"
        />
        <MedicalFloatingObject
          delay={3.9}
          icon={HeartbeatIcon}
          size={95}
          rotate={35}
          duration={20}
          className="right-[55%] top-[255%]"
        />
        <MedicalFloatingObject
          delay={4.0}
          icon={StethoscopeIcon}
          size={90}
          rotate={-30}
          duration={23}
          className="left-[80%] top-[265%]"
        />
        <MedicalFloatingObject
          delay={4.1}
          icon={DNAIcon}
          size={120}
          rotate={18}
          duration={31}
          className="right-[80%] top-[275%]"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 flex items-center justify-center min-h-screen pt-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.02 }}
            transition={{ 
              duration: 1,
              delay: 0.5 + 1 * 0.2,
              ease: "easeOut"
            }}
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 md:mb-8 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-slate-500 to-slate-400 dark:from-slate-300 dark:to-slate-200">
                GMU Pre-Health
              </span>
              <br />
              <span
                className={cn(
                  "bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400",
                  "drop-shadow-[0_0_20px_rgba(248,168,200,0.3)]",
                  pacifico.className,
                )}
              >
                Guidance Association
              </span>
            </h1>
          </motion.div>

          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ y: -5 }}
            transition={{ 
              duration: 1,
              delay: 0.5 + 2 * 0.2,
              ease: "easeOut"
            }}
          >
            <p className="text-base sm:text-lg md:text-xl text-slate-400 dark:text-slate-300 mb-12 leading-relaxed font-light tracking-wide max-w-3xl mx-auto px-4">
              Inspiring the next generation of healthcare leaders through guidance, connection, and impact.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05 }}
            transition={{ 
              duration: 1,
              delay: 0.5 + 3 * 0.2,
              ease: "easeOut"
            }}
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <a
                href="https://www.instagram.com/phgassociation_mason/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 text-white font-medium hover:from-pink-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <Instagram className="w-5 h-5" />
                Follow for Updates
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <section id="mission" className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, rotateX: 5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-8">Our Mission</h2>
            <div className="backdrop-blur-md dark:bg-black/3 border border-white/10 dark:border-black/10 p-8 md:p-12 rounded-2xl relative bg-transparent opacity-100 shadow-2xl">
              <div className="absolute top-4 right-4 opacity-20">
                <HeartbeatIcon className="w-16 h-16 text-pink-400 dark:text-pink-300" />
              </div>
              <p className="text-lg md:text-xl text-slate-700 dark:text-white leading-relaxed">
                We empower GMU's pre-health students with personalized guidance, hands-on volunteering, and meaningful
                networking, building the skills, connections, and confidence to thrive in healthcare.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="officers" className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-12">Meet the Officers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  name: "Tania Abbas",
                  role: "Co-President",
                  description:
                    "Hi! I'm Tania, a junior at George Mason University majoring in Biology. I'm hoping to become a doctor one day and specialize in dermatology. A big dream of mine is to open my own practice and then grow it from there. In my free time, you'll usually find me at a coffee shop, hanging out with people I love, or reading up on different medical diseases just because I love to expand my knowledge.",
                  image: "/tania.png",
                },
                {
                  name: "Kiran Abbas",
                  role: "Co-President",
                  description:
                    "Hi! I'm Kiran, a junior at George Mason University majoring in Biology. My goal is to become a doctor and specialize in dermatology. One day I would want to open my own practice. I love cooking, spending time with family and friends, going on hikes, and volunteering whenever I can to give back to my community.",
                  image: "/kiran.png",
                },
                {
                  name: "Ali Mohsin",
                  role: "Chief Technology Officer",
                  description: "I'm Ali. I cooked up this site in Next.js.",
                  image: "/ali.png",
                },
                {
                  name: "Zahra Ibrahimkhil",
                  role: "Treasurer",
                  description:
                    "Hi! I'm Zahra, and I'm majoring in Public and Community Health with plans to go to dental school. I love spending time with my family, checking out new spots, and love my cat.",
                  image: "/zahra.png",
                },
              ].map((officer, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.02,
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                  }}
                  className="backdrop-blur-md bg-white/3 dark:bg-black/3 border border-white/10 dark:border-black/10 p-6 rounded-xl hover:shadow-2xl transition-all duration-150 shadow-2xl"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-24 h-24 flex-shrink-0">
                      <Image
                        src={officer.image || "/placeholder.svg"}
                        alt={officer.name}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <div className="text-left flex-1">
                      <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-1">{officer.name}</h3>
                      <p className="text-pink-400 dark:text-pink-300 font-medium mb-2">{officer.role}</p>
                      <p className="text-slate-600 dark:text-white text-sm">{officer.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="contact" className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-12">Contact Us</h2>
            <div className="backdrop-blur-md bg-white/3 dark:bg-black/3 border border-white/10 dark:border-black/10 p-8 rounded-2xl max-w-2xl mx-auto shadow-2xl">
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="relative z-10 py-12 px-4 border-t border-white/10 dark:border-black/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <Image src="/phg-logo.png" alt="PHG Logo" width={40} height={40} className="rounded-full" />
              <span className="text-slate-600 dark:text-white">© 2025 PHG Association</span>
            </div>
            <div className="flex items-center gap-6">
              <a
                href="#officers"
                className="text-slate-500 dark:text-slate-300 hover:text-slate-800 dark:hover:text-white transition-colors"
              >
                Officers
              </a>
              <a
                href="#contact"
                className="text-slate-500 dark:text-slate-300 hover:text-slate-800 dark:hover:text-white transition-colors"
              >
                Contact
              </a>
              <a
                href="https://www.instagram.com/phgassociation_mason/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-400 dark:text-pink-300 hover:text-pink-300 dark:hover:text-pink-400 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      <div className="absolute inset-0 bg-gradient-to-t from-pink-50/80 via-transparent to-blue-50/40 dark:from-pink-900/80 dark:via-transparent dark:to-blue-900/40 pointer-events-none" />
    </div>
  )
}
