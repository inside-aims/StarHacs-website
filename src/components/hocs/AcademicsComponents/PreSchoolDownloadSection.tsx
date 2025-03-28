import React from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { FileDown } from 'lucide-react'

const PreSchoolDownloadSection = () => {
  return (
    <>
      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-4xl space-y-8">
          {/* Academic Calendar */}
          <section className="space-y-4">
            <h3 className="text-2xl font-semibold text-[#0f9e99]">Academic Calendar</h3>
            <Card className="overflow-hidden p-6">
              <div className="flex min-h-[200px] flex-col items-center justify-center">
                <Button variant="outline" className="gap-2">
                  <FileDown className="h-4 w-4" />
                  Download PDF
                </Button>
              </div>
            </Card>
          </section>

          {/* Curriculum */}
          <section className="space-y-4 bg-[#efe9e0]">
            <h3 className="text-2xl font-semibold text-[#0f9e99]">Curriculum</h3>
            <Card className="overflow-hidden p-6">
              <div className="flex min-h-[200px] flex-col items-center justify-center">
                <Button variant="outline" className="gap-2">
                  <FileDown className="h-4 w-4" />
                  Download PDF
                </Button>
              </div>
            </Card>
          </section>
        </div>
      </main>
    </>
  )
}

export default PreSchoolDownloadSection