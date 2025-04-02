import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-gray-200 px-4 py-8">
      <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <h3 className="mb-4 font-semibold">Contact Information</h3>
          <div className="text-muted-foreground space-y-2 text-sm">
            <p>Star Hacs International</p>
            <p>Sota-Dodowa, Accra</p>
            <p>Email: hacsinternational@gmail.com</p>
            <p>Office Hours: M-F, 8:00 AM - 3:30 PM</p>
          </div>
        </div>
        <div>
          <h3 className="mb-4 font-semibold">Quick Links</h3>
          <div className="space-y-2 text-sm">
            <Link
              href="/about"
              className="text-muted-foreground hover:text-foreground block transition-colors"
            >
              About Us
            </Link>
            <Link
              href="apply"
              className="text-muted-foreground hover:text-foreground block transition-colors"
            >
              Admissions
            </Link>
            <Link
              href="/academics/pre-school"
              className="text-muted-foreground hover:text-foreground block transition-colors"
            >
              Academic Programs
            </Link>
            <Link
              href="/news"
              className="text-muted-foreground hover:text-foreground block transition-colors"
            >
              News & Calendar
            </Link>
          </div>
        </div>
        <div>
          <h3 className="mb-4 font-semibold">Follow Us</h3>
          <div className="space-y-2 text-sm">
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground block transition-colors"
            >
              Facebook
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground block transition-colors"
            >
              Instagram
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground block transition-colors"
            >
              Twitter
            </Link>
          </div>
        </div>
      </div>
      <div className="text-muted-foreground mx-auto mt-8 max-w-7xl text-center text-sm">
        <p>Copyright © 2025 Star Hacs.</p>
        <p>All Rights Reserved</p>
      </div>
    </footer>
  )
}