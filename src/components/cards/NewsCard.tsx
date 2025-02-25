"use client"

import { motion } from "motion/react"
import { Calendar, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface NewsCardProps {
  title: string
  excerpt: string
  date: string
  category: string
  imageUrl: string
  href: string
  index: number
}

export function NewsCard({ title, excerpt, date, category, imageUrl, href, index }: NewsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="group overflow-hidden">
        <div className="aspect-video overflow-hidden">
          <img
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="space-y-4 p-6">
          <div className="flex items-center justify-between">
            <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-200">
              {category}
            </Badge>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              {date}
            </div>
          </div>
          <h3 className="line-clamp-2 text-xl font-bold">{title}</h3>
          <p className="line-clamp-3 text-muted-foreground">{excerpt}</p>
          <Button variant="link" className="group/btn p-0" asChild>
            <a href={href}>
              Read More
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </a>
          </Button>
        </div>
      </Card>
    </motion.div>
  )
}

