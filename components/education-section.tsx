"use client"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

export function EducationSection() {
  return (
    <div className="mx-auto max-w-3xl space-y-8 py-12">
      <motion.div
        className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-gradient-to-b before:from-purple-600 before:to-fuchsia-500"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-500 -translate-x-1/2 shadow-[0_0_15px_rgba(168,85,247,0.7)]">
          <div className="h-2 w-2 rounded-full bg-white"></div>
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-white">Bachelor of Information Systems</h3>
          <p className="text-gray-400">Soegijapranata Catholic University, Semarang</p>
          <p className="text-sm text-purple-400">2021 - Present (6th Semester)</p>
          <div className="mt-4 space-y-2">
            <h4 className="font-medium text-fuchsia-400">Key Courses</h4>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="border-purple-500 text-purple-400">
                Database Systems
              </Badge>
              <Badge variant="outline" className="border-purple-500 text-purple-400">
                Web Programming
              </Badge>
              <Badge variant="outline" className="border-purple-500 text-purple-400">
                System Analysis & Design
              </Badge>
              <Badge variant="outline" className="border-purple-500 text-purple-400">
                Data Structures
              </Badge>
              <Badge variant="outline" className="border-purple-500 text-purple-400">
                Object-Oriented Programming
              </Badge>
              <Badge variant="outline" className="border-purple-500 text-purple-400">
                UI/UX Design
              </Badge>
            </div>
          </div>
          <div className="mt-4 space-y-2">
            <h4 className="font-medium text-fuchsia-400">Achievements</h4>
            <ul className="list-disc pl-5 text-gray-400 space-y-1">
              <li>Dean's List for Academic Excellence (2022-2023)</li>
              <li>Winner, Campus Web Development Competition (2023)</li>
              <li>Student Representative for Department of Information Systems</li>
              <li>Participant in National Information Systems Symposium</li>
              <li>Completed Advanced Database Management certification</li>
            </ul>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-gradient-to-b before:from-purple-600 before:to-fuchsia-500"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-500 -translate-x-1/2 shadow-[0_0_15px_rgba(168,85,247,0.7)]">
          <div className="h-2 w-2 rounded-full bg-white"></div>
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-white">High School Diploma</h3>
          <p className="text-gray-400">SMA Sedes Sapientiae Semarang</p>
          <p className="text-sm text-purple-400">Graduated 2021</p>
          <div className="mt-4 space-y-2">
            <h4 className="font-medium text-fuchsia-400">Focus</h4>
            <p className="text-gray-400">Science and Mathematics track with computer science electives.</p>
          </div>
          <div className="mt-4 space-y-2">
            <h4 className="font-medium text-fuchsia-400">Extracurricular Activities</h4>
            <ul className="list-disc pl-5 text-gray-400 space-y-1">
              <li>Chess Club Member (2019-2021)</li>
              <li>Basketball Team (2018-2021)</li>
              <li>Computer Club President (2019-2021)</li>
              <li>Science Olympiad Participant - Regional Level</li>
              <li>Student Council Member - Technology Division</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

