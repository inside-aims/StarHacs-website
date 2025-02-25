"use client"

import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1)

  const renderPageButton = (pageNumber: number) => (
    <Button
      key={pageNumber}
      variant={currentPage === pageNumber ? "default" : "outline"}
      size="icon"
      onClick={() => onPageChange(pageNumber)}
      className={`h-10 w-10 ${currentPage === pageNumber ? "bg-primary text-primary-foreground" : ""}`}
    >
      {pageNumber}
    </Button>
  )

  const renderEllipsis = (key: string) => (
    <Button key={key} variant="outline" size="icon" className="h-10 w-10" disabled>
      <MoreHorizontal className="h-4 w-4" />
    </Button>
  )

  const renderPageButtons = () => {
    const buttons = []

    if (totalPages <= 5) {
      return pageNumbers.map(renderPageButton)
    }

    buttons.push(renderPageButton(1))

    if (currentPage > 3) {
      buttons.push(renderEllipsis("start-ellipsis"))
    }

    if (currentPage > 2) {
      buttons.push(renderPageButton(currentPage - 1))
    }

    if (currentPage !== 1 && currentPage !== totalPages) {
      buttons.push(renderPageButton(currentPage))
    }

    if (currentPage < totalPages - 1) {
      buttons.push(renderPageButton(currentPage + 1))
    }

    if (currentPage < totalPages - 2) {
      buttons.push(renderEllipsis("end-ellipsis"))
    }

    buttons.push(renderPageButton(totalPages))

    return buttons
  }

  return (
    <div className="flex items-center justify-center space-x-2">
      <Button variant="outline" size="icon" onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
        <ChevronLeft className="h-4 w-4" />
      </Button>
      {renderPageButtons()}
      <Button
        variant="outline"
        size="icon"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
}

