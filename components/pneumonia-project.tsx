"use client"

import { ExternalLink, Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function PneumoniaProject() {
  return (
    <Card className="overflow-hidden border-none shadow-lg h-full bg-black/40 backdrop-blur-sm hover:bg-black/60 transition-all duration-300 border border-purple-500/10 hover:border-purple-500/30">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-fuchsia-500/20 group-hover:opacity-70 transition-opacity duration-300"></div>
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-UwJBIVlk1XK8ftaGfyXdM1niLB6mHU.png"
          alt="PneuCare-Pendeteksi Pneumonia"
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 right-2">
          <Badge className="bg-gradient-to-r from-purple-600 to-fuchsia-500 text-white shadow-[0_0_10px_rgba(168,85,247,0.5)]">
            Web App
          </Badge>
        </div>
      </div>
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
              PneuCare-Pendeteksi Pneumonia
            </h3>
            <p className="text-gray-400">
              Aplikasi berbasis web untuk mendeteksi pneumonia dari gambar X-ray paru-paru menggunakan teknologi machine
              learning. Membantu diagnosis awal dan screening pneumonia.
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
              HTML/CSS
            </Badge>
          </div>
          <div className="flex gap-2">
            <Button
              size="sm"
              variant="outline"
              className="gap-1 border-purple-500 text-purple-400 hover:bg-purple-500/10 hover:text-purple-300"
            >
              <Github className="h-4 w-4" />
              Code
            </Button>
            <Button
              size="sm"
              className="gap-1 bg-gradient-to-r from-purple-600 to-fuchsia-500 hover:from-fuchsia-500 hover:to-purple-600 transition-all duration-500 shadow-[0_0_10px_rgba(168,85,247,0.5)] hover:shadow-[0_0_15px_rgba(168,85,247,0.7)]"
            >
              <ExternalLink className="h-4 w-4" />
              Case Study
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

