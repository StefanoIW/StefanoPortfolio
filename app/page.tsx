"use client"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ChevronRight,
  Code,
  GraduationCap,
  Mail,
  MapPin,
  User,
  Menu,
  X,
  Github,
  ExternalLink,
  Briefcase,
  Phone,
  Calendar,
  Clock,
  ArrowRight,
  Download,
  Linkedin,
  Instagram,
  Twitter,
  Globe,
  ChevronDown,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { motion, useScroll, useTransform } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog"

// Translation objects
const translations = {
  en: {
    // Navigation
    home: "Home",
    about: "About",
    education: "Education",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",
    contactMe: "Contact Me",

    // Hero Section
    badge: "Information Systems Student",
    heroTitle: "Stefano Indra Wibowo",
    heroDescription:
      "Building digital experiences & solving problems through code. Passionate about creating innovative solutions that make a difference.",
    getInTouch: "Get in Touch",
    downloadCV: "Download CV",
    yearsExperience: "Years Experience",
    projectsCompleted: "Projects Completed",
    awardsReceived: "Awards Received",
    scrollDown: "Scroll Down",

    // About Section
    aboutBadge: "About Me",
    whoIAm: "Who I Am",
    aboutDescription:
      "I'm Stefano Indra Wibowo, a motivated sixth-semester Information Systems student at Unika Soegijapranata with a strong interest in web development and front-end technology. Experienced in building responsive websites through personal and freelance projects.",
    name: "Name",
    age: "Age",
    ageValue: "20 Years Old",
    location: "Location",
    locationValue: "Semarang, Indonesia",
    email: "Email",
    phone: "Phone",
    portfolio: "Portfolio",
    myJourney: "My Journey",
    journeyDescription:
      "As a 6th semester student, I've been developing my skills in various aspects of information systems, including database management, system analysis, and web development. I'm constantly learning and exploring new technologies to expand my knowledge and capabilities.",
    myGoals: "My Goals",
    goalsDescription:
      "I aim to become a skilled professional in the field of information systems, contributing to innovative solutions that make a positive impact. I'm particularly interested in web development, data analysis, and creating user-friendly applications that solve real problems.",
    myApproach: "My Approach",
    reliable: "Reliable",
    reliableDesc: "Detail-oriented and collaborative in both team and individual environments",
    creative: "Creative",
    creativeDesc: "Always eager to learn new technologies and find innovative solutions",

    // Education Section
    educationBadge: "Education",
    academicBackground: "Academic Background",
    educationDescription: "My educational journey and academic achievements.",
    bachelorDegree: "Bachelor of Information Systems",
    university: "Unika Soegijapranata Semarang",
    currentSemester: "2022 - Present (6th Semester)",
    expectedGraduation: "Expected Graduation: 2026",
    keyCourses: "Key Courses",
    achievements: "Achievements",
    highSchool: "High School Diploma",
    highSchoolName: "SMA SEDES SAPIENTIAE SEMARANG",
    graduated: "Graduated 2021",
    focus: "Focus",
    focusDescription: "Science and Mathematics track with computer science electives.",
    extracurricular: "Extracurricular Activities",
    basketballTeam: "Basketball Team Member (2019-2021)",
    chessClub: "Chess Club - Regional Level Competitor",
    certificates: "Certificates & Awards",
    certificatesDescription: "Professional Achievements and Certifications",

    // Work Experience
    workExperience: "Work Experience",
    workExperienceDescription: "My professional experience and internships.",
    nusaputeraInternship: "Nusaputera (Internship) - Web Developer",
    nusaputeraPeriod: "January 2024 – June 2024",
    nusaputeraDescription:
      "Developed a Performance Evaluation Web System for teachers and staff at Sekolah Nusaputera.",
    ptSumberFarma: "PT.Sumber Farma (Internship) - Web Developer",
    ptSumberFarmaPeriod: "May 2025",
    ptSumberFarmaDescription: "Built a fast and mobile-friendly company profile website using Next.js.",

    // Skills Section
    skillsBadge: "Skills",
    technicalExpertise: "Technical Expertise",
    skillsDescription: "The skills and technologies I've mastered throughout my journey.",
    programming: "Programming",
    webDev: "Web Dev",
    database: "Database",
    design: "Design",
    tools: "Tools",
    softSkills: "Soft Skills",
    programmingDesc: "Proficient in multiple programming languages with a focus on web and application development.",
    frontend: "Frontend",
    frontendDesc: "Creating responsive and interactive user interfaces with modern frameworks and libraries.",
    backend: "Backend",
    backendDesc: "Building robust server-side applications and APIs with efficient database management.",
    problemSolving: "Problem Solving",
    communication: "Communication",
    teamwork: "Team Collaboration",
    timeManagement: "Data Analysis & Reporting",
    machineLearning: "Machine Learning",
    systemDesign: "System Design",

    // Projects Section
    projectsBadge: "Projects",
    myWork: "My Work",
    projectsDescription: "Showcasing some of my recent projects and accomplishments.",
    webApp: "Web App",
    mobileApp: "Web App",
    code: "Code",
    caseStudy: "Case Study",
    viewAllProjects: "View All Projects",
    close: "Close",

    // Contact Section
    contactBadge: "Contact",
    getInTouchTitle: "Get In Touch",
    contactDescription: "Have a question or want to work together? Feel free to reach out!",
    contactInformation: "Contact Information",
    contactInfoDesc: "Feel free to reach out through any of these channels. I'll get back to you as soon as possible.",
    workingHours: "Working Hours",
    workingHoursValue: "Monday - Friday: 9AM - 5PM",

    // Footer
    allRightsReserved: "All rights reserved.",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",

    // Language
    language: "Language",
    english: "English",
    indonesian: "Indonesian",
  },
  id: {
    // Navigation
    home: "Beranda",
    about: "Tentang",
    education: "Pendidikan",
    skills: "Keahlian",
    projects: "Proyek",
    contact: "Kontak",
    contactMe: "Hubungi Saya",

    // Hero Section
    badge: "Mahasiswa Sistem Informasi",
    heroTitle: "Stefano Indra Wibowo",
    heroDescription:
      "Membangun pengalaman digital & menyelesaikan masalah melalui kode. Bersemangat menciptakan solusi inovatif yang membuat perbedaan.",
    getInTouch: "Hubungi Saya",
    downloadCV: "Unduh CV",
    yearsExperience: "Tahun Pengalaman",
    projectsCompleted: "Proyek Selesai",
    awardsReceived: "Penghargaan Diterima",
    scrollDown: "Gulir ke Bawah",

    // About Section
    aboutBadge: "Tentang Saya",
    whoIAm: "Siapa Saya",
    aboutDescription:
      "Saya Stefano Indra Wibowo, mahasiswa Sistem Informasi semester enam yang termotivasi di Unika Soegijapranata dengan minat yang kuat dalam pengembangan web dan teknologi front-end. Berpengalaman dalam membangun website responsif melalui proyek pribadi dan freelance.",
    name: "Nama",
    age: "Usia",
    ageValue: "20 Tahun",
    location: "Lokasi",
    locationValue: "Semarang, Indonesia",
    email: "Email",
    phone: "Telepon",
    portfolio: "Portfolio",
    myJourney: "Perjalanan Saya",
    journeyDescription:
      "Sebagai mahasiswa semester 6, saya telah mengembangkan keterampilan dalam berbagai aspek sistem informasi, termasuk manajemen database, analisis sistem, dan pengembangan web. Saya terus belajar dan mengeksplorasi teknologi baru untuk memperluas pengetahuan dan kemampuan saya.",
    myGoals: "Tujuan Saya",
    goalsDescription:
      "Saya bertujuan menjadi profesional terampil di bidang sistem informasi, berkontribusi pada solusi inovatif yang memberikan dampak positif. Saya tertarik khususnya pada pengembangan web, analisis data, dan menciptakan aplikasi yang ramah pengguna untuk menyelesaikan masalah nyata.",
    myApproach: "Pendekatan Saya",
    reliable: "Dapat Diandalkan",
    reliableDesc: "Berorientasi detail dan kolaboratif dalam lingkungan tim maupun individu",
    creative: "Kreatif",
    creativeDesc: "Selalu bersemangat belajar teknologi baru dan menemukan solusi inovatif",

    // Education Section
    educationBadge: "Pendidikan",
    academicBackground: "Latar Belakang Akademik",
    educationDescription: "Perjalanan pendidikan dan pencapaian akademik saya.",
    bachelorDegree: "Sarjana Sistem Informasi",
    university: "Unika Soegijapranata Semarang",
    currentSemester: "2022 - Sekarang (Semester 6)",
    expectedGraduation: "Perkiraan Lulus: 2026",
    keyCourses: "Mata Kuliah Utama",
    achievements: "Pencapaian",
    highSchool: "Diploma SMA",
    highSchoolName: "SMA SEDES SAPIENTIAE SEMARANG",
    graduated: "Lulus 2021",
    focus: "Fokus",
    focusDescription: "Jurusan Sains dan Matematika dengan mata pelajaran pilihan ilmu komputer.",
    extracurricular: "Kegiatan Ekstrakurikuler",
    basketballTeam: "Anggota Tim Basket (2019-2021)",
    chessClub: "Klub Catur - Peserta Tingkat Regional",
    certificates: "Sertifikat & Penghargaan",
    certificatesDescription: "Pencapaian dan Sertifikasi Profesional",

    // Work Experience
    workExperience: "Pengalaman Kerja",
    workExperienceDescription: "Pengalaman profesional dan magang saya.",
    nusaputeraInternship: "Nusaputera (Magang) - Web Developer",
    nusaputeraPeriod: "Januari 2024 – Juni 2024",
    nusaputeraDescription: "Mengembangkan Sistem Web Evaluasi Kinerja untuk guru dan staf di Sekolah Nusaputera.",
    ptSumberFarma: "PT.Sumber Farma (Magang) - Web Developer",
    ptSumberFarmaPeriod: "Mei 2025",
    ptSumberFarmaDescription: "Membangun website profil perusahaan yang cepat dan mobile-friendly menggunakan Next.js.",

    // Skills Section
    skillsBadge: "Keahlian",
    technicalExpertise: "Keahlian Teknis",
    skillsDescription: "Keterampilan dan teknologi yang telah saya kuasai sepanjang perjalanan saya.",
    programming: "Pemrograman",
    webDev: "Pengembangan Web",
    database: "Database",
    design: "Desain",
    tools: "Alat",
    softSkills: "Keterampilan Lunak",
    programmingDesc: "Mahir dalam berbagai bahasa pemrograman dengan fokus pada pengembangan web dan aplikasi.",
    frontend: "Frontend",
    frontendDesc: "Membuat antarmuka pengguna yang responsif dan interaktif dengan framework dan library modern.",
    backend: "Backend",
    backendDesc: "Membangun aplikasi server-side yang kuat dan API dengan manajemen database yang efisien.",
    problemSolving: "Pemecahan Masalah",
    communication: "Komunikasi",
    teamwork: "Kolaborasi Tim",
    timeManagement: "Analisis & Pelaporan Data",
    machineLearning: "Machine Learning",
    systemDesign: "Desain Sistem",

    // Projects Section
    projectsBadge: "Proyek",
    myWork: "Karya Saya",
    projectsDescription: "Menampilkan beberapa proyek terbaru dan pencapaian saya.",
    webApp: "Aplikasi Web",
    mobileApp: "Aplikasi Mobile",
    code: "Kode",
    caseStudy: "Studi Kasus",
    viewAllProjects: "Lihat Semua Proyek",
    close: "Tutup",

    // Contact Section
    contactBadge: "Kontak",
    getInTouchTitle: "Hubungi Saya",
    contactDescription: "Punya pertanyaan atau ingin bekerja sama? Jangan ragu untuk menghubungi!",
    contactInformation: "Informasi Kontak",
    contactInfoDesc: "Jangan ragu untuk menghubungi melalui saluran mana pun. Saya akan merespons secepat mungkin.",
    workingHours: "Jam Kerja",
    workingHoursValue: "Senin - Jumat: 09.00 - 17.00",

    // Footer
    allRightsReserved: "Semua hak dilindungi.",
    privacyPolicy: "Kebijakan Privasi",
    termsOfService: "Syarat Layanan",

    // Language
    language: "Bahasa",
    english: "Inggris",
    indonesian: "Indonesia",
  },
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [mounted, setMounted] = useState(false)
  const [language, setLanguage] = useState<"en" | "id">("en")
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isPneuCareDialogOpen, setIsPneuCareDialogOpen] = useState(false)
  const [isEmoteDetectionDialogOpen, setIsEmoteDetectionDialogOpen] = useState(false)
  const [isBuangInDialogOpen, setIsBuangInDialogOpen] = useState(false)

  // Refs for sections
  const homeRef = useRef<HTMLElement>(null)
  const aboutRef = useRef<HTMLElement>(null)
  const educationRef = useRef<HTMLElement>(null)
  const skillsRef = useRef<HTMLElement>(null)
  const projectsRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)

  // For parallax effects
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, 300])

  // Get current translations
  const t = translations[language]

  // Load language preference from localStorage
  useEffect(() => {
    const savedLanguage = localStorage.getItem("portfolio-language") as "en" | "id"
    if (savedLanguage) {
      setLanguage(savedLanguage)
    }
  }, [])

  // Save language preference to localStorage
  const changeLanguage = (newLanguage: "en" | "id") => {
    setLanguage(newLanguage)
    localStorage.setItem("portfolio-language", newLanguage)
    setIsLanguageOpen(false)
  }

  // Handle smooth scrolling for navigation
  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Update active section based on scroll position
  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      const sections = [
        { id: "home", ref: homeRef },
        { id: "about", ref: aboutRef },
        { id: "education", ref: educationRef },
        { id: "skills", ref: skillsRef },
        { id: "projects", ref: projectsRef },
        { id: "contact", ref: contactRef },
      ]
      for (const section of sections) {
        if (section.ref.current) {
          const rect = section.ref.current.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // For animated counters
  const [counters, setCounters] = useState({
    experience: 0,
    projects: 0,
    clients: 0,
    awards: 0,
  })

  useEffect(() => {
    if (mounted) {
      const interval = setInterval(() => {
        setCounters((prev) => ({
          experience: prev.experience < 2 ? prev.experience + 0.1 : 2,
          projects: prev.projects < 15 ? prev.projects + 1 : 15,
          clients: prev.clients < 8 ? prev.clients + 1 : 8,
          awards: prev.awards < 5 ? prev.awards + 1 : 5,
        }))
      }, 100)
      return () => clearInterval(interval)
    }
  }, [mounted])

  // Function to handle CV download - Updated to use new CV
  const handleDownloadCV = () => {
    const link = document.createElement("a")
    link.href = "/cv-stefano-new.jpg"
    link.download = "CV-Stefano-Indra-Wibowo.jpg"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  if (!mounted) return null

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black"></div>
        <div className="grid grid-cols-[repeat(40,1fr)] grid-rows-[repeat(40,1fr)] h-full w-full opacity-30">
          {Array.from({ length: 40 }).map((_, i) =>
            Array.from({ length: 40 }).map((_, j) => (
              <div
                key={`${i}-${j}`}
                className="border-[0.5px] border-purple-500/10"
                style={{
                  opacity: Math.random() * 0.3 + 0.1,
                }}
              />
            )),
          )}
        </div>
      </div>

      {/* Header/Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-purple-900/50 bg-black/80 backdrop-blur supports-[backdrop-filter]:bg-black/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="#home" onClick={() => scrollToSection("home")} className="font-bold text-xl group">
            Stefano
            <span className="bg-gradient-to-r from-purple-600 to-fuchsia-500 bg-clip-text text-transparent group-hover:from-fuchsia-500 group-hover:to-purple-600 transition-all duration-500">
              .dev
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6">
            <Link
              href="#home"
              onClick={() => scrollToSection("home")}
              className={`transition-colors relative ${
                activeSection === "home" ? "text-white font-medium" : "text-gray-400 hover:text-white"
              }`}
            >
              {t.home}
              {activeSection === "home" && (
                <motion.span
                  layoutId="navIndicator"
                  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-600 to-fuchsia-500"
                />
              )}
            </Link>
            <Link
              href="#about"
              onClick={() => scrollToSection("about")}
              className={`transition-colors relative ${
                activeSection === "about" ? "text-white font-medium" : "text-gray-400 hover:text-white"
              }`}
            >
              {t.about}
              {activeSection === "about" && (
                <motion.span
                  layoutId="navIndicator"
                  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-600 to-fuchsia-500"
                />
              )}
            </Link>
            <Link
              href="#education"
              onClick={() => scrollToSection("education")}
              className={`transition-colors relative ${
                activeSection === "education" ? "text-white font-medium" : "text-gray-400 hover:text-white"
              }`}
            >
              {t.education}
              {activeSection === "education" && (
                <motion.span
                  layoutId="navIndicator"
                  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-600 to-fuchsia-500"
                />
              )}
            </Link>
            <Link
              href="#skills"
              onClick={() => scrollToSection("skills")}
              className={`transition-colors relative ${
                activeSection === "skills" ? "text-white font-medium" : "text-gray-400 hover:text-white"
              }`}
            >
              {t.skills}
              {activeSection === "skills" && (
                <motion.span
                  layoutId="navIndicator"
                  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-600 to-fuchsia-500"
                />
              )}
            </Link>
            <Link
              href="#projects"
              onClick={() => scrollToSection("projects")}
              className={`transition-colors relative ${
                activeSection === "projects" ? "text-white font-medium" : "text-gray-400 hover:text-white"
              }`}
            >
              {t.projects}
              {activeSection === "projects" && (
                <motion.span
                  layoutId="navIndicator"
                  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-600 to-fuchsia-500"
                />
              )}
            </Link>
            <Link
              href="#contact"
              onClick={() => scrollToSection("contact")}
              className={`transition-colors relative ${
                activeSection === "contact" ? "text-white font-medium" : "text-gray-400 hover:text-white"
              }`}
            >
              {t.contact}
              {activeSection === "contact" && (
                <motion.span
                  layoutId="navIndicator"
                  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-600 to-fuchsia-500"
                />
              )}
            </Link>
          </nav>

          {/* Language Toggle and Contact Button */}
          <div className="flex items-center gap-2">
            {/* Language Toggle - Custom Dropdown */}
            <div className="relative">
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-purple-900/20 flex items-center gap-2"
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              >
                <Globe className="h-4 w-4" />
                <span className="hidden sm:inline">{language === "en" ? "EN" : "ID"}</span>
                <ChevronDown className="h-3 w-3" />
              </Button>

              {/* Custom Dropdown */}
              {isLanguageOpen && (
                <div className="absolute right-0 top-full mt-2 w-40 bg-black/95 backdrop-blur-md border border-purple-500/30 rounded-lg shadow-lg z-50">
                  <div className="py-2">
                    <button
                      onClick={() => changeLanguage("en")}
                      className={`w-full px-4 py-2 text-left text-sm hover:bg-purple-900/20 transition-colors flex items-center gap-2 ${
                        language === "en" ? "bg-purple-900/20 text-purple-400" : "text-white"
                      }`}
                    >
                      🇺🇸 {t.english}
                    </button>
                    <button
                      onClick={() => changeLanguage("id")}
                      className={`w-full px-4 py-2 text-left text-sm hover:bg-purple-900/20 transition-colors flex items-center gap-2 ${
                        language === "id" ? "bg-purple-900/20 text-purple-400" : "text-white"
                      }`}
                    >
                      🇮🇩 {t.indonesian}
                    </button>
                  </div>
                </div>
              )}
            </div>

            <Button
              asChild
              className="hidden md:flex bg-gradient-to-r from-purple-600 to-fuchsia-500 hover:from-fuchsia-500 hover:to-purple-600 transition-all duration-500 shadow-[0_0_15px_rgba(168,85,247,0.5)] hover:shadow-[0_0_25px_rgba(168,85,247,0.7)]"
            >
              <Link href="#contact" onClick={() => scrollToSection("contact")}>
                {t.contactMe}
              </Link>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white hover:bg-purple-900/20"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            className="md:hidden border-t border-purple-900/50 bg-black/95 backdrop-blur-md"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col p-4 gap-4">
              <Link
                href="#home"
                onClick={() => scrollToSection("home")}
                className={`transition-colors ${activeSection === "home" ? "text-purple-400 font-medium" : "text-gray-400"}`}
              >
                {t.home}
              </Link>
              <Link
                href="#about"
                onClick={() => scrollToSection("about")}
                className={`transition-colors ${activeSection === "about" ? "text-purple-400 font-medium" : "text-gray-400"}`}
              >
                {t.about}
              </Link>
              <Link
                href="#education"
                onClick={() => scrollToSection("education")}
                className={`transition-colors ${activeSection === "education" ? "text-purple-400 font-medium" : "text-gray-400"}`}
              >
                {t.education}
              </Link>
              <Link
                href="#skills"
                onClick={() => scrollToSection("skills")}
                className={`transition-colors ${activeSection === "skills" ? "text-purple-400 font-medium" : "text-gray-400"}`}
              >
                {t.skills}
              </Link>
              <Link
                href="#projects"
                onClick={() => scrollToSection("projects")}
                className={`transition-colors ${activeSection === "projects" ? "text-purple-400 font-medium" : "text-gray-400"}`}
              >
                {t.projects}
              </Link>
              <Link
                href="#contact"
                onClick={() => scrollToSection("contact")}
                className={`transition-colors ${activeSection === "contact" ? "text-purple-400 font-medium" : "text-gray-400"}`}
              >
                {t.contact}
              </Link>

              {/* Language Toggle for Mobile */}
              <div className="border-t border-purple-900/50 pt-4 mt-2">
                <p className="text-gray-400 text-sm mb-2">{t.language}:</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => changeLanguage("en")}
                    className={`px-3 py-1 rounded text-sm transition-colors ${
                      language === "en" ? "bg-purple-600 text-white" : "bg-purple-900/20 text-gray-400 hover:text-white"
                    }`}
                  >
                    🇺🇸 {t.english}
                  </button>
                  <button
                    onClick={() => changeLanguage("id")}
                    className={`px-3 py-1 rounded text-sm transition-colors ${
                      language === "id" ? "bg-purple-600 text-white" : "bg-purple-900/20 text-gray-400 hover:text-white"
                    }`}
                  >
                    🇮🇩 {t.indonesian}
                  </button>
                </div>
              </div>

              <Button
                asChild
                className="mt-2 bg-gradient-to-r from-purple-600 to-fuchsia-500 hover:from-fuchsia-500 hover:to-purple-600 transition-all duration-500 shadow-[0_0_15px_rgba(168,85,247,0.5)] hover:shadow-[0_0_25px_rgba(168,85,247,0.7)]"
              >
                <Link href="#contact" onClick={() => scrollToSection("contact")}>
                  {t.contactMe}
                </Link>
              </Button>
            </nav>
          </motion.div>
        )}
      </header>

      {/* Click outside to close language dropdown */}
      {isLanguageOpen && <div className="fixed inset-0 z-40" onClick={() => setIsLanguageOpen(false)} />}

      <main className="flex-1 relative z-10">
        {/* Hero Section */}
        <section
          id="home"
          ref={homeRef}
          className="relative w-full min-h-screen flex items-center py-12 md:py-24 lg:py-32 overflow-hidden"
        >
          {/* Animated particles */}
          <div className="absolute inset-0 z-0">
            {Array.from({ length: 50 }).map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-purple-500"
                style={{
                  width: `${Math.random() * 4 + 1}px`,
                  height: `${Math.random() * 4 + 1}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  opacity: Math.random() * 0.5 + 0.3,
                  animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                  animationDelay: `${Math.random() * 10}s`,
                }}
              />
            ))}
          </div>
          <div className="absolute inset-0 z-0 overflow-hidden">
            {/* Animated glow spots */}
            <div
              className="absolute w-[500px] h-[500px] rounded-full bg-purple-600/10 blur-[120px] -top-[250px] -left-[100px] animate-pulse"
              style={{ animationDuration: "7s" }}
            ></div>
            <div
              className="absolute w-[600px] h-[600px] rounded-full bg-fuchsia-600/10 blur-[120px] -bottom-[350px] -right-[150px] animate-pulse"
              style={{ animationDuration: "10s" }}
            ></div>
            {/* Animated grid lines */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b5cf614_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf614_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <motion.div
                className="flex flex-col justify-center space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="space-y-2">
                  <Badge className="mb-2 bg-gradient-to-r from-purple-600 to-fuchsia-500 hover:from-fuchsia-500 hover:to-purple-600 transition-all duration-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]">
                    {t.badge}
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-purple-400 to-fuchsia-300 bg-clip-text text-transparent">
                    {t.heroTitle}
                  </h1>
                  <p className="text-gray-400 md:text-xl max-w-[600px]">
                    {language === "en" ? (
                      <>
                        <span className="text-white">Building digital experiences</span> & solving problems through
                        code. Passionate about creating innovative solutions that make a difference.
                      </>
                    ) : (
                      <>
                        <span className="text-white">Membangun pengalaman digital</span> & menyelesaikan masalah melalui
                        kode. Bersemangat menciptakan solusi inovatif yang membuat perbedaan.
                      </>
                    )}
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    asChild
                    className="bg-gradient-to-r from-purple-600 to-fuchsia-500 hover:from-fuchsia-500 hover:to-purple-600 transition-all duration-500 shadow-[0_0_15px_rgba(168,85,247,0.5)] hover:shadow-[0_0_25px_rgba(168,85,247,0.7)]"
                  >
                    <Link href="#contact" onClick={() => scrollToSection("contact")}>
                      {t.getInTouch}
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-purple-500 text-purple-400 hover:bg-purple-500/10 hover:text-purple-300 bg-transparent"
                    onClick={handleDownloadCV}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    {t.downloadCV}
                  </Button>
                </div>
                {/* Social Links */}
                <div className="flex gap-4 mt-6">
                  <Link
                    href="https://www.linkedin.com/in/stefano-indra-wibowo-2598442a4/"
                    target="_blank"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link
                    href="https://github.com/StefanoIW"
                    target="_blank"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                  <Link
                    href="https://instagram.com/stfnooo"
                    target="_blank"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                  </Link>
                  <Link
                    href="https://twitter.com/smthlikeeuu"
                    target="_blank"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                </div>
              </motion.div>
              <motion.div
                className="flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600 to-fuchsia-500 blur-2xl opacity-30 animate-pulse"></div>
                  <div className="relative z-10 rounded-full p-1 bg-gradient-to-r from-purple-600 to-fuchsia-500 shadow-[0_0_25px_rgba(168,85,247,0.7)]">
                    <div className="rounded-full overflow-hidden bg-black p-2">
                      <img
                        alt="Stefano Indra Wibowo"
                        className="aspect-square overflow-hidden rounded-full object-cover object-center"
                        height="400"
                        src="/AKU.jpg"
                        width="400"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-16 lg:mt-24"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="bg-gradient-to-r from-purple-900/20 to-fuchsia-900/20 backdrop-blur-sm border border-purple-500/20 rounded-lg p-4 text-center">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-fuchsia-300 bg-clip-text text-transparent">
                  {counters.experience.toFixed(1)}+
                </h3>
                <p className="text-gray-400 text-sm">{t.yearsExperience}</p>
              </div>
              <div className="bg-gradient-to-r from-purple-900/20 to-fuchsia-900/20 backdrop-blur-sm border border-purple-500/20 rounded-lg p-4 text-center">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-fuchsia-300 bg-clip-text text-transparent">
                  7+
                </h3>
                <p className="text-gray-400 text-sm">{t.projectsCompleted}</p>
              </div>
              <div className="bg-gradient-to-r from-purple-900/20 to-fuchsia-900/20 backdrop-blur-sm border border-purple-500/20 rounded-lg p-4 text-center">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-fuchsia-300 bg-clip-text text-transparent">
                  {Math.floor(counters.awards)}+
                </h3>
                <p className="text-gray-400 text-sm">{t.awardsReceived}</p>
              </div>
            </motion.div>
          </div>
          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
            <motion.div
              className="w-6 h-10 border-2 border-purple-500 rounded-full flex justify-center p-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <motion.div
                className="w-1 h-2 bg-purple-500 rounded-full"
                animate={{
                  y: [0, 12, 0],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 1.5,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
            <motion.p
              className="text-purple-400 text-xs mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              {t.scrollDown}
            </motion.p>
          </div>
        </section>

        {/* About Section */}
        <section id="about" ref={aboutRef} className="w-full py-12 md:py-24 lg:py-32 relative">
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gradient-to-r from-purple-900/20 to-fuchsia-900/20 backdrop-blur-sm border border-purple-500/20 px-3 py-1 text-sm">
                  <User className="mr-2 inline-block h-4 w-4 text-purple-400" />
                  {t.aboutBadge}
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-purple-400 to-fuchsia-300 bg-clip-text text-transparent">
                  {t.whoIAm}
                </h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t.aboutDescription}
                </p>
              </div>
            </motion.div>
          </div>
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full">
              <div
                className="absolute top-[10%] right-[5%] w-64 h-64 rounded-full bg-purple-600/5 blur-[80px]"
                style={{
                  transform: `translateY(${y.get() * -0.2}px)`,
                }}
              ></div>
              <div
                className="absolute bottom-[20%] left-[10%] w-72 h-72 rounded-full bg-fuchsia-600/5 blur-[100px]"
                style={{
                  transform: `translateY(${y.get() * 0.2}px)`,
                }}
              ></div>
            </div>
          </div>
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <motion.div
                className="flex flex-col justify-center space-y-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="w-full space-y-4">
                  <ul className="grid gap-6">
                    <li className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]">
                        <User className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-white">{t.name}</div>
                        <div className="text-sm text-gray-400">Stefano Indra Wibowo</div>
                      </div>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]">
                        <Calendar className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-white">{t.age}</div>
                        <div className="text-sm text-gray-400">{t.ageValue}</div>
                      </div>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]">
                        <MapPin className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-white">{t.location}</div>
                        <div className="text-sm text-gray-400">{t.locationValue}</div>
                      </div>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]">
                        <Mail className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-white">{t.email}</div>
                        <div className="text-sm text-gray-400">gunturtjoa18@gmail.com</div>
                      </div>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]">
                        <Phone className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-white">{t.phone}</div>
                        <div className="text-sm text-gray-400">+62 822 2961 7675</div>
                      </div>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]">
                        <Globe className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-white">{t.portfolio}</div>
                        <Link
                          href="https://portofolio-stefano.vercel.app"
                          target="_blank"
                          className="text-sm text-gray-400 hover:text-purple-400 transition-colors"
                        >
                          portofolio-stefano.vercel.app
                        </Link>
                      </div>
                    </li>
                  </ul>
                </div>
              </motion.div>
              <motion.div
                className="flex flex-col justify-center space-y-4"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-purple-400">{t.myJourney}</h3>
                  <p className="text-gray-400">{t.journeyDescription}</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-fuchsia-400">{t.myGoals}</h3>
                  <p className="text-gray-400">{t.goalsDescription}</p>
                </div>
                <div className="space-y-2 mt-4">
                  <h3 className="text-xl font-bold text-purple-400">{t.myApproach}</h3>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="flex flex-col items-center text-center bg-gradient-to-r from-purple-900/20 to-fuchsia-900/20 backdrop-blur-sm border border-purple-500/20 rounded-lg p-4">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-500 flex items-center justify-center mb-2 shadow-[0_0_10px_rgba(168,85,247,0.5)]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5 text-white"
                        >
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                        </svg>
                      </div>
                      <h4 className="font-medium text-white">{t.reliable}</h4>
                      <p className="text-xs text-gray-400 mt-1">{t.reliableDesc}</p>
                    </div>
                    <div className="flex flex-col items-center text-center bg-gradient-to-r from-purple-900/20 to-fuchsia-900/20 backdrop-blur-sm border border-purple-500/20 rounded-lg p-4">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-500 flex items-center justify-center mb-2 shadow-[0_0_10px_rgba(168,85,247,0.5)]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5 text-white"
                        >
                          <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3" />
                        </svg>
                      </div>
                      <h4 className="font-medium text-white">{t.creative}</h4>
                      <p className="text-xs text-gray-400 mt-1">{t.creativeDesc}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" ref={educationRef} className="w-full py-12 md:py-24 lg:py-32 relative">
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
                  {t.educationBadge}
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-purple-400 to-fuchsia-300 bg-clip-text text-transparent">
                  {t.academicBackground}
                </h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t.educationDescription}
                </p>
              </div>
            </motion.div>
            <div className="mx-auto max-w-3xl space-y-8 py-12">
              {/* Work Experience Section */}
              <motion.div
                className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-gradient-to-b before:from-purple-600 before:to-fuchsia-500"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-500 -translate-x-1/2 shadow-[0_0_15px_rgba(168,85,247,0.7)]">
                  <div className="h-2 w-2 rounded-full bg-white"></div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white">{t.workExperience}</h3>
                  <p className="text-gray-400">{t.workExperienceDescription}</p>

                  {/* Nusaputera Internship */}
                  <div className="mt-4 space-y-4">
                    <div className="bg-gradient-to-r from-purple-900/20 to-fuchsia-900/20 backdrop-blur-sm border border-purple-500/20 rounded-lg p-4">
                      <h4 className="font-medium text-white text-lg">{t.nusaputeraInternship}</h4>
                      <p className="text-xs text-purple-400 mt-1">{t.nusaputeraPeriod}</p>
                      <p className="text-sm text-gray-400 mt-2">{t.nusaputeraDescription}</p>
                      <ul className="list-disc pl-5 text-gray-400 text-sm mt-2 space-y-1">
                        <li>Built a responsive and secure web platform with role-based access</li>
                        <li>Created dynamic evaluation forms and real-time feedback features</li>
                        <li>Designed a structured database ensuring data integrity and efficiency</li>
                        <li>Developed dashboards and exportable reports for performance analysis</li>
                        <li>Conducted testing, fixed bugs, and led user training and deployment</li>
                      </ul>
                      <div className="flex gap-2 mt-3">
                        <Badge variant="outline" className="border-purple-500/50 text-purple-400">
                          PHP
                        </Badge>
                        <Badge variant="outline" className="border-purple-500/50 text-purple-400">
                          JavaScript
                        </Badge>
                        <Badge variant="outline" className="border-purple-500/50 text-purple-400">
                          MySQL
                        </Badge>
                        <Badge variant="outline" className="border-purple-500/50 text-purple-400">
                          HTML/CSS
                        </Badge>
                      </div>
                    </div>

                    {/* PT Sumber Farma Internship */}
                    <div className="bg-gradient-to-r from-purple-900/20 to-fuchsia-900/20 backdrop-blur-sm border border-purple-500/20 rounded-lg p-4">
                      <h4 className="font-medium text-white text-lg">{t.ptSumberFarma}</h4>
                      <p className="text-xs text-purple-400 mt-1">{t.ptSumberFarmaPeriod}</p>
                      <p className="text-sm text-gray-400 mt-2">{t.ptSumberFarmaDescription}</p>
                      <ul className="list-disc pl-5 text-gray-400 text-sm mt-2 space-y-1">
                        <li>Built a fast and mobile-friendly company profile website using Next.js</li>
                        <li>Designed essential pages including Home, About Us, Products, and Contact</li>
                        <li>Integrated a contact form that connects directly to the admin email</li>
                        <li>Created content layouts that are easy to edit by admin users</li>
                        <li>Optimized website speed and ensured security</li>
                        <li>Ensured consistent display across different devices and browsers</li>
                      </ul>
                      <div className="flex gap-2 mt-3">
                        <Badge variant="outline" className="border-purple-500/50 text-purple-400">
                          Next.js
                        </Badge>
                        <Badge variant="outline" className="border-purple-500/50 text-purple-400">
                          React
                        </Badge>
                        <Badge variant="outline" className="border-purple-500/50 text-purple-400">
                          Tailwind CSS
                        </Badge>
                        <Badge variant="outline" className="border-purple-500/50 text-purple-400">
                          TypeScript
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

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
                  <h3 className="text-xl font-bold text-white">{t.bachelorDegree}</h3>
                  <p className="text-gray-400">{t.university}</p>
                  <p className="text-sm text-purple-400">{t.currentSemester}</p>
                  <p className="text-sm text-fuchsia-400">{t.expectedGraduation}</p>
                  <div className="mt-4 space-y-2">
                    <h4 className="font-medium text-fuchsia-400">{t.keyCourses}</h4>
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
                  <h3 className="text-xl font-bold text-white">{t.highSchool}</h3>
                  <p className="text-gray-400">{t.highSchoolName}</p>
                  <p className="text-sm text-purple-400">{t.graduated}</p>
                  <div className="mt-4 space-y-2">
                    <h4 className="font-medium text-fuchsia-400">{t.focus}</h4>
                    <p className="text-gray-400">{t.focusDescription}</p>
                  </div>
                  <div className="mt-4 space-y-2">
                    <h4 className="font-medium text-fuchsia-400">{t.extracurricular}</h4>
                    <ul className="list-disc pl-5 text-gray-400 space-y-1">
                      <li>{t.basketballTeam}</li>
                      <li>{t.chessClub}</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-gradient-to-b before:from-purple-600 before:to-fuchsia-500"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-500 -translate-x-1/2 shadow-[0_0_15px_rgba(168,85,247,0.7)]">
                  <div className="h-2 w-2 rounded-full bg-white"></div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white">{t.certificates}</h3>
                  <p className="text-gray-400">{t.certificatesDescription}</p>
                  <p className="text-sm text-purple-400">2024</p>
                  <div className="mt-4 space-y-6">
                    <div className="bg-gradient-to-r from-purple-900/20 to-fuchsia-900/20 backdrop-blur-sm border border-purple-500/20 rounded-lg p-4">
                      <div className="flex flex-col md:flex-row gap-4">
                        <div className="md:w-1/3 flex-shrink-0">
                          <img
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-fvS9uINOJcxsZNwczCiJMZD6SigQ5L.png"
                            alt="Sertifikat Cloud Practitioner Essentials"
                            className="w-full h-auto rounded-md shadow-lg border border-purple-500/30"
                          />
                        </div>
                        <div className="md:w-2/3">
                          <h4 className="font-medium text-white text-lg">Cloud Practitioner Essentials (AWS Cloud)</h4>
                          <p className="text-xs text-purple-400 mt-1">
                            Dicoding Indonesia - {language === "id" ? "Mei" : "May"} 2024
                          </p>
                          <p className="text-sm text-gray-400 mt-2">
                            {language === "id"
                              ? "Sertifikasi resmi dari Dicoding Indonesia untuk penguasaan dasar-dasar AWS Cloud, termasuk layanan komputasi, penyimpanan, database, dan keamanan cloud."
                              : "Official certification from Dicoding Indonesia for mastering AWS Cloud fundamentals, including computing, storage, database, and cloud security services."}
                          </p>
                          <div className="flex gap-2 mt-3">
                            <Badge variant="outline" className="border-purple-500/50 text-purple-400">
                              AWS
                            </Badge>
                            <Badge variant="outline" className="border-purple-500/50 text-purple-400">
                              Cloud Computing
                            </Badge>
                            <Badge variant="outline" className="border-purple-500/50 text-purple-400">
                              Dicoding
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-purple-900/20 to-fuchsia-900/20 backdrop-blur-sm border border-purple-500/20 rounded-lg p-4">
                      <div className="flex flex-col md:flex-row gap-4">
                        <div className="md:w-1/3 flex-shrink-0">
                          <img
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TrWNDUnsWHkXE5gK3co1khBrnUl88T.png"
                            alt="Sertifikat Lomba Kewirausahaan Digital"
                            className="w-full h-auto rounded-md shadow-lg border border-purple-500/30"
                          />
                        </div>
                        <div className="md:w-2/3">
                          <h4 className="font-medium text-white text-lg">
                            {language === "id"
                              ? "Juara V Lomba Kewirausahaan Digital"
                              : "5th Place Digital Entrepreneurship Competition"}
                          </h4>
                          <p className="text-xs text-purple-400 mt-1">
                            PT. Dunia Bayar Indonesia - {language === "id" ? "Desember" : "December"} 2024
                          </p>
                          <p className="text-sm text-gray-400 mt-2">
                            {language === "id"
                              ? "Meraih Juara V dalam Lomba Kewirausahaan Digital Berbasis Teknologi Keuangan dengan proyek 'Pengelolaan Rumah Kos' yang menggabungkan teknologi dan solusi finansial."
                              : "Achieved 5th place in the Financial Technology-Based Digital Entrepreneurship Competition with the 'Boarding House Management' project that combines technology and financial solutions."}
                          </p>
                          <div className="flex gap-2 mt-3">
                            <Badge variant="outline" className="border-purple-500/50 text-purple-400">
                              Fintech
                            </Badge>
                            <Badge variant="outline" className="border-purple-500/50 text-purple-400">
                              Entrepreneurship
                            </Badge>
                            <Badge variant="outline" className="border-purple-500/50 text-purple-400">
                              Digital Business
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-purple-900/20 to-fuchsia-900/20 backdrop-blur-sm border border-purple-500/20 rounded-lg p-4">
                      <div className="flex flex-col md:flex-row gap-4">
                        <div className="md:w-1/3 flex-shrink-0">
                          <img
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ZZ4ozd6Oc0plS1G9RQcJOybYLd8ZL2.png"
                            alt="Sertifikat Juara 1 Kompetisi Pengembangan Sistem"
                            className="w-full h-auto rounded-md shadow-lg border border-purple-500/30"
                          />
                        </div>
                        <div className="md:w-2/3">
                          <h4 className="font-medium text-white text-lg">
                            {language === "id"
                              ? "Juara 1 Kompetisi Pengembangan Sistem"
                              : "1st Place System Development Competition"}
                          </h4>
                          <p className="text-xs text-purple-400 mt-1">Sekolah Nusaputera</p>
                          <p className="text-sm text-gray-400 mt-2">
                            {language === "id"
                              ? "Meraih Juara 1 dalam Kompetisi Pengembangan Sistem Penilaian Kinerja Guru Sekolah, mengembangkan solusi digital untuk meningkatkan efisiensi evaluasi kinerja pendidik."
                              : "Won 1st place in the School Teacher Performance Assessment System Development Competition, developing digital solutions to improve the efficiency of educator performance evaluation."}
                          </p>
                          <div className="flex gap-2 mt-3">
                            <Badge variant="outline" className="border-purple-500/50 text-purple-400">
                              System Development
                            </Badge>
                            <Badge variant="outline" className="border-purple-500/50 text-purple-400">
                              Education Tech
                            </Badge>
                            <Badge variant="outline" className="border-purple-500/50 text-purple-400">
                              Performance Analytics
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" ref={skillsRef} className="w-full py-12 md:py-24 lg:py-32 relative">
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
                  <Code className="mr-2 inline-block h-4 w-4 text-purple-400" />
                  {t.skillsBadge}
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-purple-400 to-fuchsia-300 bg-clip-text text-transparent">
                  {t.technicalExpertise}
                </h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t.skillsDescription}
                </p>
              </div>
            </motion.div>
            <div className="mx-auto max-w-5xl py-12">
              <Tabs defaultValue="programming" className="w-full">
                <TabsList className="grid w-full grid-cols-3 md:grid-cols-6 bg-purple-900/20 border border-purple-500/20">
                  <TabsTrigger
                    value="programming"
                    className="data-[state=active]:bg-purple-600 data-[state=active]:text-white"
                  >
                    {t.programming}
                  </TabsTrigger>
                  <TabsTrigger value="web" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
                    {t.webDev}
                  </TabsTrigger>
                  <TabsTrigger
                    value="database"
                    className="data-[state=active]:bg-purple-600 data-[state=active]:text-white"
                  >
                    {t.database}
                  </TabsTrigger>
                  <TabsTrigger
                    value="design"
                    className="data-[state=active]:bg-purple-600 data-[state=active]:text-white"
                  >
                    {t.design}
                  </TabsTrigger>
                  <TabsTrigger
                    value="tools"
                    className="data-[state=active]:bg-purple-600 data-[state=active]:text-white"
                  >
                    {t.tools}
                  </TabsTrigger>
                  <TabsTrigger
                    value="soft"
                    className="data-[state=active]:bg-purple-600 data-[state=active]:text-white"
                  >
                    {t.softSkills}
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="programming" className="mt-6 space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex justify-between items-center">
                        <h3 className="text-white font-medium">JavaScript</h3>
                        <span className="text-purple-400 text-sm">90%</span>
                      </div>
                      <Progress
                        value={90}
                        className="h-2 bg-purple-900/20"
                        indicatorClassName="bg-gradient-to-r from-purple-600 to-fuchsia-500"
                      />
                    </motion.div>
                    <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <div className="flex justify-between items-center">
                        <h3 className="text-white font-medium">Python</h3>
                        <span className="text-purple-400 text-sm">85%</span>
                      </div>
                      <Progress
                        value={85}
                        className="h-2 bg-purple-900/20"
                        indicatorClassName="bg-gradient-to-r from-purple-600 to-fuchsia-500"
                      />
                    </motion.div>
                    <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      <div className="flex justify-between items-center">
                        <h3 className="text-white font-medium">Java</h3>
                        <span className="text-purple-400 text-sm">80%</span>
                      </div>
                      <Progress
                        value={80}
                        className="h-2 bg-purple-900/20"
                        indicatorClassName="bg-gradient-to-r from-purple-600 to-fuchsia-500"
                      />
                    </motion.div>
                    <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                    >
                      <div className="flex justify-between items-center">
                        <h3 className="text-white font-medium">PHP</h3>
                        <span className="text-purple-400 text-sm">75%</span>
                      </div>
                      <Progress
                        value={75}
                        className="h-2 bg-purple-900/20"
                        indicatorClassName="bg-gradient-to-r from-purple-600 to-fuchsia-500"
                      />
                    </motion.div>
                    <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.4 }}
                    >
                      <div className="flex justify-between items-center">
                        <h3 className="text-white font-medium">TypeScript</h3>
                        <span className="text-purple-400 text-sm">85%</span>
                      </div>
                      <Progress
                        value={85}
                        className="h-2 bg-purple-900/20"
                        indicatorClassName="bg-gradient-to-r from-purple-600 to-fuchsia-500"
                      />
                    </motion.div>
                    <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.5 }}
                    >
                      <div className="flex justify-between items-center">
                        <h3 className="text-white font-medium">C#</h3>
                        <span className="text-purple-400 text-sm">70%</span>
                      </div>
                      <Progress
                        value={70}
                        className="h-2 bg-purple-900/20"
                        indicatorClassName="bg-gradient-to-r from-purple-600 to-fuchsia-500"
                      />
                    </motion.div>
                  </div>
                </TabsContent>
                <TabsContent value="web" className="mt-6 space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex justify-between items-center">
                        <h3 className="text-white font-medium">HTML/CSS</h3>
                        <span className="text-purple-400 text-sm">95%</span>
                      </div>
                      <Progress
                        value={95}
                        className="h-2 bg-purple-900/20"
                        indicatorClassName="bg-gradient-to-r from-purple-600 to-fuchsia-500"
                      />
                    </motion.div>
                    <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <div className="flex justify-between items-center">
                        <h3 className="text-white font-medium">React</h3>
                        <span className="text-purple-400 text-sm">90%</span>
                      </div>
                      <Progress
                        value={90}
                        className="h-2 bg-purple-900/20"
                        indicatorClassName="bg-gradient-to-r from-purple-600 to-fuchsia-500"
                      />
                    </motion.div>
                    <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      <div className="flex justify-between items-center">
                        <h3 className="text-white font-medium">Next.js</h3>
                        <span className="text-purple-400 text-sm">85%</span>
                      </div>
                      <Progress
                        value={85}
                        className="h-2 bg-purple-900/20"
                        indicatorClassName="bg-gradient-to-r from-purple-600 to-fuchsia-500"
                      />
                    </motion.div>
                    <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                    >
                      <div className="flex justify-between items-center">
                        <h3 className="text-white font-medium">Tailwind CSS</h3>
                        <span className="text-purple-400 text-sm">90%</span>
                      </div>
                      <Progress
                        value={90}
                        className="h-2 bg-purple-900/20"
                        indicatorClassName="bg-gradient-to-r from-purple-600 to-fuchsia-500"
                      />
                    </motion.div>
                    <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.4 }}
                    >
                      <div className="flex justify-between items-center">
                        <h3 className="text-white font-medium">Node.js</h3>
                        <span className="text-purple-400 text-sm">80%</span>
                      </div>
                      <Progress
                        value={80}
                        className="h-2 bg-purple-900/20"
                        indicatorClassName="bg-gradient-to-r from-purple-600 to-fuchsia-500"
                      />
                    </motion.div>
                  </div>
                </TabsContent>
                <TabsContent value="database" className="mt-6 space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex justify-between items-center">
                        <h3 className="text-white font-medium">MySQL</h3>
                        <span className="text-purple-400 text-sm">90%</span>
                      </div>
                      <Progress
                        value={90}
                        className="h-2 bg-purple-900/20"
                        indicatorClassName="bg-gradient-to-r from-purple-600 to-fuchsia-500"
                      />
                    </motion.div>
                    <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <div className="flex justify-between items-center">
                        <h3 className="text-white font-medium">PostgreSQL</h3>
                        <span className="text-purple-400 text-sm">85%</span>
                      </div>
                      <Progress
                        value={85}
                        className="h-2 bg-purple-900/20"
                        indicatorClassName="bg-gradient-to-r from-purple-600 to-fuchsia-500"
                      />
                    </motion.div>
                    <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                    >
                      <div className="flex justify-between items-center">
                        <h3 className="text-white font-medium">Firebase</h3>
                        <span className="text-purple-400 text-sm">75%</span>
                      </div>
                      <Progress
                        value={75}
                        className="h-2 bg-purple-900/20"
                        indicatorClassName="bg-gradient-to-r from-purple-600 to-fuchsia-500"
                      />
                    </motion.div>
                  </div>
                </TabsContent>
                <TabsContent value="design" className="mt-6 space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex justify-between items-center">
                        <h3 className="text-white font-medium">Figma</h3>
                        <span className="text-purple-400 text-sm">85%</span>
                      </div>
                      <Progress
                        value={85}
                        className="h-2 bg-purple-900/20"
                        indicatorClassName="bg-gradient-to-r from-purple-600 to-fuchsia-500"
                      />
                    </motion.div>
                  </div>
                </TabsContent>
                <TabsContent value="tools" className="mt-6 space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex justify-between items-center">
                        <h3 className="text-white font-medium">Git & GitHub</h3>
                        <span className="text-purple-400 text-sm">90%</span>
                      </div>
                      <Progress
                        value={90}
                        className="h-2 bg-purple-900/20"
                        indicatorClassName="bg-gradient-to-r from-purple-600 to-fuchsia-500"
                      />
                    </motion.div>
                    <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <div className="flex justify-between items-center">
                        <h3 className="text-white font-medium">VS Code</h3>
                        <span className="text-purple-400 text-sm">95%</span>
                      </div>
                      <Progress
                        value={95}
                        className="h-2 bg-purple-900/20"
                        indicatorClassName="bg-gradient-to-r from-purple-600 to-fuchsia-500"
                      />
                    </motion.div>
                  </div>
                </TabsContent>
                <TabsContent value="soft" className="mt-6 space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex justify-between items-center">
                        <h3 className="text-white font-medium">{t.problemSolving}</h3>
                        <span className="text-purple-400 text-sm">95%</span>
                      </div>
                      <Progress
                        value={95}
                        className="h-2 bg-purple-900/20"
                        indicatorClassName="bg-gradient-to-r from-purple-600 to-fuchsia-500"
                      />
                    </motion.div>
                    <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <div className="flex justify-between items-center">
                        <h3 className="text-white font-medium">{t.communication}</h3>
                        <span className="text-purple-400 text-sm">90%</span>
                      </div>
                      <Progress
                        value={90}
                        className="h-2 bg-purple-900/20"
                        indicatorClassName="bg-gradient-to-r from-purple-600 to-fuchsia-500"
                      />
                    </motion.div>
                    <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      <div className="flex justify-between items-center">
                        <h3 className="text-white font-medium">{t.teamwork}</h3>
                        <span className="text-purple-400 text-sm">85%</span>
                      </div>
                      <Progress
                        value={85}
                        className="h-2 bg-purple-900/20"
                        indicatorClassName="bg-gradient-to-r from-purple-600 to-fuchsia-500"
                      />
                    </motion.div>
                    <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                    >
                      <div className="flex justify-between items-center">
                        <h3 className="text-white font-medium">{t.timeManagement}</h3>
                        <span className="text-purple-400 text-sm">85%</span>
                      </div>
                      <Progress
                        value={85}
                        className="h-2 bg-purple-900/20"
                        indicatorClassName="bg-gradient-to-r from-purple-600 to-fuchsia-500"
                      />
                    </motion.div>
                  </div>
                </TabsContent>
              </Tabs>
              <div className="mt-12 grid gap-6 md:grid-cols-3">
                <motion.div
                  className="bg-gradient-to-r from-purple-900/20 to-fuchsia-900/20 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6 skill-card transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-purple-600 to-fuchsia-500 flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(168,85,247,0.7)] skill-icon">
                    <Code className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{t.programming}</h3>
                  <p className="text-gray-400">{t.programmingDesc}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="outline" className="border-purple-500 text-purple-400">
                      JavaScript
                    </Badge>
                    <Badge variant="outline" className="border-purple-500 text-purple-400">
                      TypeScript
                    </Badge>
                    <Badge variant="outline" className="border-purple-500 text-purple-400">
                      Python
                    </Badge>
                    <Badge variant="outline" className="border-purple-500 text-purple-400">
                      Java
                    </Badge>
                    <Badge variant="outline" className="border-purple-500 text-purple-400">
                      PHP
                    </Badge>
                  </div>
                </motion.div>
                <motion.div
                  className="bg-gradient-to-r from-purple-900/20 to-fuchsia-900/20 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6 skill-card transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-purple-600 to-fuchsia-500 flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(168,85,247,0.7)] skill-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-white"
                    >
                      <rect width="18" height="18" x="3" y="3" rx="2" />
                      <path d="M7 7h10" />
                      <path d="M7 12h10" />
                      <path d="M7 17h10" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{t.frontend}</h3>
                  <p className="text-gray-400">{t.frontendDesc}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="outline" className="border-purple-500 text-purple-400">
                      React
                    </Badge>
                    <Badge variant="outline" className="border-purple-500 text-purple-400">
                      Next.js
                    </Badge>
                    <Badge variant="outline" className="border-purple-500 text-purple-400">
                      Tailwind CSS
                    </Badge>
                    <Badge variant="outline" className="border-purple-500 text-purple-400">
                      HTML/CSS
                    </Badge>
                  </div>
                </motion.div>
                <motion.div
                  className="bg-gradient-to-r from-purple-900/20 to-fuchsia-900/20 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6 skill-card transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-purple-600 to-fuchsia-500 flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(168,85,247,0.7)] skill-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-white"
                    >
                      <ellipse cx="12" cy="5" rx="9" ry="3" />
                      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{t.backend}</h3>
                  <p className="text-gray-400">{t.backendDesc}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="outline" className="border-purple-500 text-purple-400">
                      Node.js
                    </Badge>
                    <Badge variant="outline" className="border-purple-500 text-purple-400">
                      MySQL
                    </Badge>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <style jsx global>{`
          @keyframes gradientShift {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
          
          .skill-card:hover {
            border-color: rgba(168, 85, 247, 0.5);
            box-shadow: 0 0 25px rgba(168, 85, 247, 0.3);
            transform: translateY(-5px);
          }
          
          .skill-card:hover .skill-icon {
            background-size: 200% 200%;
            animation: gradientShift 2s ease infinite;
          }
        `}</style>

        {/* Projects Section */}
        <section id="projects" ref={projectsRef} className="w-full py-12 md:py-24 lg:py-32 relative">
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
                  <Briefcase className="mr-2 inline-block h-4 w-4 text-purple-400" />
                  {t.projectsBadge}
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-purple-400 to-fuchsia-300 bg-clip-text text-transparent">
                  {t.myWork}
                </h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t.projectsDescription}
                </p>
              </div>
            </motion.div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="group"
              >
                <Card className="overflow-hidden border-none shadow-lg h-full bg-black/40 backdrop-blur-sm hover:bg-black/60 transition-all duration-300 border border-purple-500/10 hover:border-purple-500/30">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-fuchsia-500/20 group-hover:opacity-70 transition-opacity duration-300"></div>
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-VNVcZ22QqpbEpD8u1mT1WD3YzF9eoR.png"
                      alt="SI-PEKA - Sistem Informasi Penilaian Kinerja Guru dan Karyawan"
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-gradient-to-r from-purple-600 to-fuchsia-500 text-white shadow-[0_0_10px_rgba(168,85,247,0.5)]">
                        {t.webApp}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                          SI-PEKA - Performance Assessment System
                        </h3>
                        <p className="text-gray-400">
                          {language === "id"
                            ? "Sistem penilaian kinerja guru dan karyawan di Sekolah Nusaputera. Digunakan untuk mengevaluasi kinerja tahunan dengan dashboard analitik dan laporan komprehensif."
                            : "Performance assessment system for teachers and staff at Nusaputera School. Used to evaluate annual performance with analytical dashboards and comprehensive reports."}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="border-purple-500/50 text-purple-400">
                          PHP
                        </Badge>
                        <Badge variant="outline" className="border-purple-500/50 text-purple-400">
                          JavaScript
                        </Badge>
                        <Badge variant="outline" className="border-purple-500/50 text-purple-400">
                          HTML/CSS
                        </Badge>
                        <Badge variant="outline" className="border-purple-500/50 text-purple-400">
                          MySQL
                        </Badge>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="gap-1 border-purple-500 text-purple-400 hover:bg-purple-500/10 hover:text-purple-300 bg-transparent"
                        >
                          <Github className="h-4 w-4" />
                          {t.code}
                        </Button>
                        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                          <DialogTrigger asChild>
                            <Button
                              size="sm"
                              className="gap-1 bg-gradient-to-r from-purple-600 to-fuchsia-500 hover:from-fuchsia-500 hover:to-purple-600 transition-all duration-500 shadow-[0_0_10px_rgba(168,85,247,0.5)] hover:shadow-[0_0_15px_rgba(168,85,247,0.7)]"
                            >
                              <ExternalLink className="h-4 w-4" />
                              {t.caseStudy}
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[700px] bg-black border border-purple-500/30 text-white">
                            <DialogHeader>
                              <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-fuchsia-300 bg-clip-text text-transparent">
                                SI-PEKA: Teacher and Staff Performance Assessment System
                              </DialogTitle>
                              <DialogDescription className="text-gray-400 mt-2">
                                Case Study of Information System Development for Nusaputera School
                              </DialogDescription>
                            </DialogHeader>
                            <div className="mt-4 space-y-6 max-h-[70vh] overflow-y-auto pr-2">
                              {/* Background */}
                              <div className="space-y-2">
                                <h3 className="text-lg font-semibold text-purple-400">Background</h3>
                                <p className="text-gray-300">
                                  Nusaputera School needed a digital system to replace the manual process of evaluating
                                  teacher and staff performance. The manual process caused inefficiencies, difficulties
                                  in historical tracking, and challenges in analyzing performance trends over time.
                                </p>
                              </div>
                              {/* Objectives */}
                              <div className="space-y-2">
                                <h3 className="text-lg font-semibold text-purple-400">Project Objectives</h3>
                                <ul className="list-disc pl-5 text-gray-300 space-y-1">
                                  <li>Automate the performance evaluation process for teachers and staff</li>
                                  <li>Provide an analytical dashboard to visualize performance data</li>
                                  <li>Generate comprehensive reports for annual evaluations</li>
                                  <li>Facilitate data-driven decision making for staff development</li>
                                  <li>Improve transparency in the evaluation process</li>
                                </ul>
                              </div>
                              {/* Technology */}
                              <div className="space-y-2">
                                <h3 className="text-lg font-semibold text-purple-400">Technologies Used</h3>
                                <div className="grid grid-cols-2 gap-4">
                                  <div className="bg-purple-900/20 p-3 rounded-lg border border-purple-500/20">
                                    <h4 className="font-medium text-white">Frontend</h4>
                                    <ul className="list-disc pl-5 text-gray-300 text-sm mt-1">
                                      <li>HTML5 & CSS3</li>
                                      <li>JavaScript</li>
                                      <li>Bootstrap 4</li>
                                      <li>Chart.js for data visualization</li>
                                    </ul>
                                  </div>
                                  <div className="bg-purple-900/20 p-3 rounded-lg border border-purple-500/20">
                                    <h4 className="font-medium text-white">Backend</h4>
                                    <ul className="list-disc pl-5 text-gray-300 text-sm mt-1">
                                      <li>PHP 7.4</li>
                                      <li>MySQL Database</li>
                                      <li>AJAX for asynchronous interactions</li>
                                      <li>FPDF for report generation</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              {/* Key Features */}
                              <div className="space-y-2">
                                <h3 className="text-lg font-semibold text-purple-400">Key Features</h3>
                                <div className="space-y-3">
                                  <div className="bg-purple-900/20 p-3 rounded-lg border border-purple-500/20">
                                    <h4 className="font-medium text-white">User Management</h4>
                                    <p className="text-gray-300 text-sm mt-1">
                                      Multi-level system with admin, principal, and teacher/staff roles. Each role has
                                      different access and capabilities within the system.
                                    </p>
                                  </div>
                                  <div className="bg-purple-900/20 p-3 rounded-lg border border-purple-500/20">
                                    <h4 className="font-medium text-white">Dynamic Assessment Forms</h4>
                                    <p className="text-gray-300 text-sm mt-1">
                                      Configurable assessment criteria based on job type (teacher/staff) with adjustable
                                      weights for each criterion.
                                    </p>
                                  </div>
                                  <div className="bg-purple-900/20 p-3 rounded-lg border border-purple-500/20">
                                    <h4 className="font-medium text-white">Analytics Dashboard</h4>
                                    <p className="text-gray-300 text-sm mt-1">
                                      Performance data visualization with interactive charts and graphs, enabling period
                                      comparisons and trend identification.
                                    </p>
                                  </div>
                                  <div className="bg-purple-900/20 p-3 rounded-lg border border-purple-500/20">
                                    <h4 className="font-medium text-white">Reporting System</h4>
                                    <p className="text-gray-300 text-sm mt-1">
                                      Automatic PDF report generation with comprehensive analysis and development
                                      recommendations based on evaluation results.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Results and Impact */}
                              <div className="space-y-2">
                                <h3 className="text-lg font-semibold text-purple-400">Results and Impact</h3>
                                <ul className="list-disc pl-5 text-gray-300 space-y-1">
                                  <li>70% reduction in assessment process time</li>
                                  <li>95% improvement in evaluation data accuracy</li>
                                  <li>Better transparency in the assessment process</li>
                                  <li>Ability to identify staff development areas based on historical data</li>
                                  <li>30% annual operational cost savings</li>
                                  <li>Won 1st Place in the System Development Competition</li>
                                </ul>
                              </div>
                            </div>
                            <DialogFooter className="mt-6">
                              <DialogClose asChild>
                                <Button className="bg-gradient-to-r from-purple-600 to-fuchsia-500 hover:from-fuchsia-500 hover:to-purple-600 transition-all duration-500 shadow-[0_0_10px_rgba(168,85,247,0.5)] hover:shadow-[0_0_15px_rgba(168,85,247,0.7)]">
                                  {t.close}
                                </Button>
                              </DialogClose>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="group"
              >
                <Card className="overflow-hidden border-none shadow-lg h-full bg-black/40 backdrop-blur-sm hover:bg-black/60 transition-all duration-300 border border-purple-500/10 hover:border-purple-500/30">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-fuchsia-500/20 group-hover:opacity-70 transition-opacity duration-300"></div>
                    <img
                      src="/PNEUCARE.png"
                      alt="PneuCare-Pendeteksi Pneumonia"
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-gradient-to-r from-purple-600 to-fuchsia-500 text-white shadow-[0_0_10px_rgba(168,85,247,0.5)]">
                        {t.webApp}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                          PneuCare - Pneumonia Detection
                        </h3>
                        <p className="text-gray-400">
                          {language === "id"
                            ? "Sistem komprehensif untuk mendeteksi pneumonia menggunakan teknologi machine learning dan analisis citra X-Ray paru-paru."
                            : "A comprehensive system for detecting pneumonia using machine learning technology and X-Ray lung image analysis."}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="border-purple-500/50 text-purple-400">
                          Python
                        </Badge>
                        <Badge variant="outline" className="border-purple-500/50 text-purple-400">
                          TensorFlow
                        </Badge>
                        <Badge variant="outline" className="border-purple-500/50 text-purple-400">
                          Flask
                        </Badge>
                        <Badge variant="outline" className="border-purple-500/50 text-purple-400">
                          React
                        </Badge>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="gap-1 border-purple-500 text-purple-400 hover:bg-purple-500/10 hover:text-purple-300 bg-transparent"
                        >
                          <Github className="h-4 w-4" />
                          {t.code}
                        </Button>
                        <Button
                          size="sm"
                          className="gap-1 bg-gradient-to-r from-purple-600 to-fuchsia-500 hover:from-fuchsia-500 hover:to-purple-600 transition-all duration-500 shadow-[0_0_10px_rgba(168,85,247,0.5)] hover:shadow-[0_0_15px_rgba(168,85,247,0.7)]"
                        >
                          <ExternalLink className="h-4 w-4" />
                          {t.caseStudy}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="group"
              >
                <Card className="overflow-hidden border-none shadow-lg h-full bg-black/40 backdrop-blur-sm hover:bg-black/60 transition-all duration-300 border border-purple-500/10 hover:border-purple-500/30">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-fuchsia-500/20 group-hover:opacity-70 transition-opacity duration-300"></div>
                    <img
                      src="/emotedetection.png"
                      alt="Emote Detection APP"
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-gradient-to-r from-purple-600 to-fuchsia-500 text-white shadow-[0_0_10px_rgba(168,85,247,0.5)]">
                        {t.mobileApp}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                          Emote Detection APP
                        </h3>
                        <p className="text-gray-400">
                          {language === "id"
                            ? "Aplikasi mobile bertenaga AI yang mendeteksi dan menganalisis emosi secara real-time melalui ekspresi wajah. Fitur pemrosesan on-device untuk privasi dan dashboard analitik komprehensif."
                            : "An AI-powered mobile application that detects and analyzes emotions in real-time through facial expressions. Features on-device processing for privacy and a comprehensive analytics dashboard."}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="border-purple-500/50 text-purple-400">
                          React Native
                        </Badge>
                        <Badge variant="outline" className="border-purple-500/50 text-purple-400">
                          Firebase
                        </Badge>
                        <Badge variant="outline" className="border-purple-500/50 text-purple-400">
                          Redux
                        </Badge>
                        <Badge variant="outline" className="border-purple-500/50 text-purple-400">
                          Chart.js
                        </Badge>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="gap-1 border-purple-500 text-purple-400 hover:bg-purple-500/10 hover:text-purple-300 bg-transparent"
                        >
                          <Github className="h-4 w-4" />
                          {t.code}
                        </Button>
                        <Button
                          size="sm"
                          className="gap-1 bg-gradient-to-r from-purple-600 to-fuchsia-500 hover:from-fuchsia-500 hover:to-purple-600 transition-all duration-500 shadow-[0_0_10px_rgba(168,85,247,0.5)] hover:shadow-[0_0_15px_rgba(168,85,247,0.7)]"
                        >
                          <ExternalLink className="h-4 w-4" />
                          {t.caseStudy}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="group"
              >
                <Card className="overflow-hidden border-none shadow-lg h-full bg-black/40 backdrop-blur-sm hover:bg-black/60 transition-all duration-300 border border-purple-500/10 hover:border-purple-500/30">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-fuchsia-500/20 group-hover:opacity-70 transition-opacity duration-300"></div>
                    <img
                      src="/buangin.png"
                      alt="Buang.in - Waste Management Platform"
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-gradient-to-r from-purple-600 to-fuchsia-500 text-white shadow-[0_0_10px_rgba(168,85,247,0.5)]">
                        {t.webApp}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                          Buang.in - Waste Management Platform
                        </h3>
                        <p className="text-gray-400">
                          {language === "id"
                            ? "Platform web komprehensif untuk manajemen sampah komunitas, memungkinkan pengguna melaporkan sampah ilegal, menjual bahan daur ulang, dan meminta layanan pengumpulan sampah."
                            : "A comprehensive web platform for community waste management, enabling users to report illegal waste, sell recyclable materials, and request waste collection services."}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="border-purple-500/50 text-purple-400">
                          React
                        </Badge>
                        <Badge variant="outline" className="border-purple-500/50 text-purple-400">
                          Node.js
                        </Badge>
                        <Badge variant="outline" className="border-purple-500/50 text-purple-400">
                          MongoDB
                        </Badge>
                        <Badge variant="outline" className="border-purple-500/50 text-purple-400">
                          Google Maps API
                        </Badge>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="gap-1 border-purple-500 text-purple-400 hover:bg-purple-500/10 hover:text-purple-300 bg-transparent"
                        >
                          <Github className="h-4 w-4" />
                          {t.code}
                        </Button>
                        <Button
                          size="sm"
                          className="gap-1 bg-gradient-to-r from-purple-600 to-fuchsia-500 hover:from-fuchsia-500 hover:to-purple-600 transition-all duration-500 shadow-[0_0_10px_rgba(168,85,247,0.5)] hover:shadow-[0_0_15px_rgba(168,85,247,0.7)]"
                        >
                          <ExternalLink className="h-4 w-4" />
                          {t.caseStudy}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
            <motion.div
              className="flex justify-center mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button className="gap-2 bg-gradient-to-r from-purple-600 to-fuchsia-500 hover:from-fuchsia-500 hover:to-purple-600 transition-all duration-500 shadow-[0_0_15px_rgba(168,85,247,0.5)] hover:shadow-[0_0_25px_rgba(168,85,247,0.7)]">
                {t.viewAllProjects}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" ref={contactRef} className="w-full py-12 md:py-24 lg:py-32 relative">
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
                  <Mail className="mr-2 inline-block h-4 w-4 text-purple-400" />
                  {t.contactBadge}
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-purple-400 to-fuchsia-300 bg-clip-text text-transparent">
                  {t.getInTouchTitle}
                </h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t.contactDescription}
                </p>
              </div>
            </motion.div>
            <div className="mx-auto max-w-3xl py-12">
              <motion.div
                className="flex flex-col justify-center space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-purple-400">{t.contactInformation}</h3>
                  <p className="text-gray-400">{t.contactInfoDesc}</p>
                </div>
                <ul className="grid gap-6">
                  <li className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-500 text-white shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">{t.email}</div>
                      <a
                        href="mailto:gunturtjoa18@gmail.com"
                        className="text-sm text-gray-400 hover:text-purple-400 transition-colors"
                      >
                        gunturtjoa18@gmail.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-500 text-white shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">{t.phone}</div>
                      <a
                        href="tel:+6282229617675"
                        className="text-sm text-gray-400 hover:text-purple-400 transition-colors"
                      >
                        +62 822 2961 7675
                      </a>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-500 text-white shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">{t.location}</div>
                      <div className="text-sm text-gray-400">{t.locationValue}</div>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-500 text-white shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">{t.workingHours}</div>
                      <div className="text-sm text-gray-400">{t.workingHoursValue}</div>
                    </div>
                  </li>
                </ul>
                <div className="flex gap-4 mt-4">
                  <Link
                    href="https://www.linkedin.com/in/stefano-indra-wibowo-2598442a4/"
                    target="_blank"
                    className="rounded-full bg-gradient-to-r from-purple-900/20 to-fuchsia-900/20 backdrop-blur-sm border border-purple-500/20 p-2 text-purple-400 hover:text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-fuchsia-500 transition-all duration-300 shadow-[0_0_10px_rgba(168,85,247,0)] hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link
                    href="https://github.com/StefanoIW"
                    target="_blank"
                    className="rounded-full bg-gradient-to-r from-purple-900/20 to-fuchsia-900/20 backdrop-blur-sm border border-purple-500/20 p-2 text-purple-400 hover:text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-fuchsia-500 transition-all duration-300 shadow-[0_0_10px_rgba(168,85,247,0)] hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]"
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                  <Link
                    href="https://twitter.com/smthlikeeuu"
                    target="_blank"
                    className="rounded-full bg-gradient-to-r from-purple-900/20 to-fuchsia-900/20 backdrop-blur-sm border border-purple-500/20 p-2 text-purple-400 hover:text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-fuchsia-500 transition-all duration-300 shadow-[0_0_10px_rgba(168,85,247,0)] hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]"
                  >
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                  <Link
                    href="https://instagram.com/stfnooo"
                    target="_blank"
                    className="rounded-full bg-gradient-to-r from-purple-900/20 to-fuchsia-900/20 backdrop-blur-sm border border-purple-500/20 p-2 text-purple-400 hover:text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-fuchsia-500 transition-all duration-300 shadow-[0_0_10px_rgba(168,85,247,0)] hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]"
                  >
                    <Instagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t border-purple-900/50 py-6 md:py-0 bg-black">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Stefano Indra Wibowo. {t.allRightsReserved}
          </p>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="#" className="text-sm font-medium text-gray-400 hover:text-purple-400 transition-colors">
              {t.privacyPolicy}
            </Link>
            <Link href="#" className="text-sm font-medium text-gray-400 hover:text-purple-400 transition-colors">
              {t.termsOfService}
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
