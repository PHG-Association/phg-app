"use client"

import type React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, MapPin } from "lucide-react"
import { getImagePath } from "@/lib/utils"

// You can add your event images here
const galleryEvents = [
  {
    id: 1,
    title: "Pre-Health Career Fair 2024",
    date: "March 15, 2024",
    location: "Johnson Center",
    description: "Annual career fair connecting students with healthcare professionals",
    images: [
      "/events/career-fair-1.jpg",
      "/events/career-fair-2.jpg",
      "/events/career-fair-3.jpg",
    ]
  },
  {
    id: 2,
    title: "Medical School Panel Discussion",
    date: "February 20, 2024",
    location: "Krug Hall",
    description: "Current medical students share their experiences and advice",
    images: [
      "/events/panel-1.jpg",
      "/events/panel-2.jpg",
    ]
  },
  {
    id: 3,
    title: "Community Health Volunteer Day",
    date: "January 28, 2024",
    location: "Local Community Center",
    description: "PHG members volunteering at health screening events",
    images: [
      "/events/volunteer-1.jpg",
      "/events/volunteer-2.jpg",
      "/events/volunteer-3.jpg",
      "/events/volunteer-4.jpg",
    ]
  },
  {
    id: 4,
    title: "Study Group Sessions",
    date: "Ongoing",
    location: "Fenwick Library",
    description: "Weekly study sessions for MCAT prep and pre-health courses",
    images: [
      "/events/study-1.jpg",
      "/events/study-2.jpg",
    ]
  },
]

export default function Gallery() {
  return (
    <div className="relative">
      {/* Background wrapper that covers full content */}
      <div className="absolute inset-0 min-h-full bg-gradient-to-br from-blue-50 via-[#F8FAFF] to-pink-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" />
      <div className="absolute inset-0 min-h-full bg-gradient-to-br from-blue-500/10 via-transparent to-pink-500/10 blur-3xl" />
      <div className="absolute inset-0 min-h-full bg-gradient-to-t from-pink-50/80 via-transparent to-blue-50/40 dark:from-pink-900/80 dark:via-transparent dark:to-blue-900/40 pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10">
        <div className="pt-24 pb-12">
          {/* Header */}
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center gap-4 mb-8">
              <Link 
                href="/" 
                className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-white transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Home
              </Link>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-4">
                Event Gallery
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                Capturing moments from our events, activities, and community engagement
              </p>
            </motion.div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="max-w-6xl mx-auto px-4">
          <div className="space-y-16">
            {galleryEvents.map((event, eventIndex) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: eventIndex * 0.1 }}
                viewport={{ once: true }}
                className="backdrop-blur-md bg-white/5 dark:bg-black/10 border border-white/20 dark:border-black/30 rounded-2xl p-8 shadow-xl"
              >
                {/* Event Header */}
                <div className="mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-3">
                    {event.title}
                  </h2>
                  <div className="flex flex-wrap items-center gap-4 text-slate-600 dark:text-slate-300">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {event.location}
                    </div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 mt-3">
                    {event.description}
                  </p>
                </div>

                {/* Image Grid */}
                <div className={`grid gap-4 ${
                  event.images.length === 1 ? 'grid-cols-1' :
                  event.images.length === 2 ? 'grid-cols-1 md:grid-cols-2' :
                  event.images.length === 3 ? 'grid-cols-1 md:grid-cols-3' :
                  'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                }`}>
                  {event.images.map((imagePath, imageIndex) => (
                    <motion.div
                      key={imageIndex}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: imageIndex * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                      className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer"
                    >
                      <div className="aspect-[4/3] relative">
                        <Image
                          src={getImagePath(imagePath)}
                          alt={`${event.title} - Image ${imageIndex + 1}`}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
