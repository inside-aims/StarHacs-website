'use client'

import { useState } from 'react'
import { NewsHeader } from '@/components/hocs/NewsComponents/news-header'
import { NewsCategories } from '@/components/hocs/NewsComponents/news-categories'
import { NewsCard } from '@/components/cards/NewsCard'
import { Pagination } from '@/components/shared/pagnation'

const categories = ['All', 'Academic', 'Events', 'Sports', 'Arts', 'Community']

const newsItems = [
  {
    id: 1,
    title: 'Annual Science Fair Showcases Student Innovation',
    excerpt:
      "Our students demonstrated exceptional creativity and scientific understanding at this year's Science Fair. Projects ranged from renewable energy solutions to innovative recycling methods.",
    date: 'Feb 15, 2025',
    category: 'Academic',
    imageUrl: '/placeholder.svg?height=400&width=600',
    href: '/news/science-fair-2025',
  },
  {
    id: 2,
    title: 'Star Hacs Wins Regional Sports Championship',
    excerpt:
      "Our school's sports team has achieved a remarkable victory in the regional championships, demonstrating exceptional teamwork and sportsmanship.",
    date: 'Feb 12, 2025',
    category: 'Sports',
    imageUrl: '/placeholder.svg?height=400&width=600',
    href: '/news/sports-championship',
  },
  {
    id: 3,
    title: 'Annual Arts Festival Celebrates Creativity',
    excerpt:
      'Students showcase their artistic talents through various mediums including painting, sculpture, and digital art at our annual Arts Festival.',
    date: 'Feb 10, 2025',
    category: 'Arts',
    imageUrl: '/placeholder.svg?height=400&width=600',
    href: '/news/arts-festival',
  },
  {
    id: 4,
    title: 'Community Service Day Impact',
    excerpt:
      'Our students made a significant impact in the local community through various service projects and initiatives.',
    date: 'Feb 8, 2025',
    category: 'Community',
    imageUrl: '/placeholder.svg?height=400&width=600',
    href: '/news/community-service-day',
  },
  {
    id: 5,
    title: 'Parent-Teacher Conference Success',
    excerpt:
      "This semester's parent-teacher conference saw record attendance and productive discussions about student progress.",
    date: 'Feb 5, 2025',
    category: 'Events',
    imageUrl: '/placeholder.svg?height=400&width=600',
    href: '/news/parent-teacher-conference',
  },
  {
    id: 6,
    title: 'New STEM Lab Opening',
    excerpt:
      'Star Hacs is proud to announce the opening of our state-of-the-art STEM laboratory, equipped with the latest technology.',
    date: 'Feb 1, 2025',
    category: 'Academic',
    imageUrl: '/placeholder.svg?height=400&width=600',
    href: '/news/new-stem-lab',
  },
  // Add more news items to test pagination
  ...Array.from({ length: 14 }, (_, i) => ({
    id: i + 7,
    title: `News Item ${i + 7}`,
    excerpt: `This is a sample excerpt for news item ${i + 7}.`,
    date: `Jan ${30 - i}, 2025`,
    category: categories[Math.floor(Math.random() * (categories.length - 1)) + 1],
    imageUrl: '/placeholder.svg?height=400&width=600',
    href: `/news/item-${i + 7}`,
  })),
]

const ITEMS_PER_PAGE = 6

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [currentPage, setCurrentPage] = useState(1)

  const filteredNews = newsItems.filter(
    (item) => activeCategory === 'All' || item.category === activeCategory,
  )

  const totalPages = Math.ceil(filteredNews.length / ITEMS_PER_PAGE)
  const paginatedNews = filteredNews.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  )

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category)
    setCurrentPage(1)
  }

  return (
    <>
      <NewsHeader />

      <main className="container mx-auto px-4 py-12">
        <NewsCategories
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {paginatedNews.map((news, index) => (
            <NewsCard
              key={news.id}
              title={news.title}
              excerpt={news.excerpt}
              date={news.date}
              category={news.category}
              imageUrl={news.imageUrl}
              href={news.href}
              index={index}
            />
          ))}
        </div>

        <div className="mt-12">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </main>
    </>
  )
}
