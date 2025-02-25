"use client"

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface NewsCategoriesProps {
  categories: string[]
  activeCategory: string
  onCategoryChange: (category: string) => void
}

export function NewsCategories({ categories, activeCategory, onCategoryChange }: NewsCategoriesProps) {
  return (
    <div className="mb-12">
      <Tabs defaultValue={activeCategory} value={activeCategory} onValueChange={onCategoryChange}>
        <TabsList className="flex w-full flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <TabsTrigger key={category} value={category} className="rounded-full px-6">
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  )
}

