"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { motion } from "motion/react"
import { ArrowLeft, Calendar, Share2, ThumbsUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"

// This would typically come from an API or database
const newsItem = {
  id: 1,
  title: "Annual Science Fair Showcases Student Innovation",
  content: `
    <p>Our students demonstrated exceptional creativity and scientific understanding at this year's Science Fair. Projects ranged from renewable energy solutions to innovative recycling methods.</p>
    <p>The event, held in our newly renovated gymnasium, saw a record number of participants from all grade levels. Judges from local universities and tech companies were impressed by the depth of knowledge and ingenuity displayed in the projects.</p>
    <h2>Highlights of the Fair</h2>
    <ul>
      <li>Sarah Johnson's solar-powered water purification system</li>
      <li>Alex Chen's AI-driven recycling sorter</li>
      <li>The team project on urban vertical farming by the 8th-grade class</li>
    </ul>
    <p>Principal Dr. Emily Roberts commented, "The level of innovation we've seen today gives me great hope for the future. These students are not just learning science; they're applying it to solve real-world problems."</p>
    <p>The top three projects will represent Star Hacs at the upcoming State Science Competition. We wish our young scientists the best of luck!</p>
  `,
  date: "Feb 15, 2025",
  category: "Academic",
  imageUrl: "/placeholder.svg?height=600&width=1200",
  author: {
    name: "Jane Doe",
    avatar: "/placeholder.svg?height=100&width=100",
  },
}

export default function NewsDetailPage() {
  const params = useParams()
  const [likes, setLikes] = useState(0)
  const [hasLiked, setHasLiked] = useState(false)

  // Simulate fetching data based on the slug
  useEffect(() => {
    console.log("Fetching news item with slug:", params.slug)
  }, [params.slug])

  const handleLike = () => {
    if (!hasLiked) {
      setLikes(likes + 1)
      setHasLiked(true)
    }
  }

  const handleShare = () => {
    // Implement share functionality
    console.log("Sharing news item")
  }

  return (
    <>

      <main className="container mx-auto px-4 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Button variant="ghost" className="mb-4" onClick={() => window.history.back()}>
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to News
          </Button>

          <article className="overflow-hidden rounded-lg bg-white shadow-lg">
            <div className="aspect-video w-full overflow-hidden">
              <Image
                src={newsItem.imageUrl || "/placeholder.svg"}
                alt={newsItem.title}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="p-6 md:p-8">
              <Badge variant="secondary" className="mb-4">
                {newsItem.category}
              </Badge>
              <h1 className="mb-4 text-3xl font-bold md:text-4xl">{newsItem.title}</h1>

              <div className="mb-6 flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={newsItem.author.avatar} alt={newsItem.author.name} />
                  <AvatarFallback>{newsItem.author.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{newsItem.author.name}</p>
                  <p className="text-sm text-gray-500">
                    <Calendar className="mr-1 inline-block h-4 w-4" />
                    {newsItem.date}
                  </p>
                </div>
              </div>

              <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: newsItem.content }} />

              <Separator className="my-8" />

              <div className="flex items-center justify-between">
                <Button
                  variant="outline"
                  size="sm"
                  className={`gap-2 ${hasLiked ? "text-blue-600" : ""}`}
                  onClick={handleLike}
                >
                  <ThumbsUp className="h-4 w-4" />
                  Like ({likes})
                </Button>
                <Button variant="outline" size="sm" className="gap-2" onClick={handleShare}>
                  <Share2 className="h-4 w-4" />
                  Share
                </Button>
              </div>
            </div>
          </article>
        </motion.div>
      </main>

    </>
  )
}

