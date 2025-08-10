"use client"

import { GraduationCap } from "lucide-react"
import { motion } from "framer-motion"
import { EducationSection } from "@/components/education-section"

export function EducationTab() {
  return (
    <section id="education" className="w-full py-12 md:py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gradient-to-r from-purple-900/20 to-fuchsia-900/20 backdrop-blur-sm border border-purple-500/20 px-3 py-1 text-sm">
              <GraduationCap className="mr-2 inline-block h-4 w-4 text-purple-400" />
              Education
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-purple-400 to-fuchsia-300 bg-clip-text text-transparent">
              Academic Background
            </h2>
            <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My educational journey and academic achievements.
            </p>
          </div>
        </motion.div>

        <EducationSection />
      </div>
    </section>
  )
}

