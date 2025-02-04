import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-200 px-4 py-8">
      <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <h3 className="mb-4 font-semibold">Contact Information</h3>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>Star Hacs</p>
            <p>city, state, zip code</p>
            <p>Email: example@starhacs.com</p>
            <p>Office Hours: M-F, 8:30 AM - 3:30 PM</p>
          </div>
        </div>
        <div>
          <h3 className="mb-4 font-semibold">Quick Links</h3>
          <div className="space-y-2 text-sm">
            <Link href="#" className="block text-muted-foreground transition-colors hover:text-foreground">
              About Us
            </Link>
            <Link href="#" className="block text-muted-foreground transition-colors hover:text-foreground">
              Admissions
            </Link>
            <Link href="#" className="block text-muted-foreground transition-colors hover:text-foreground">
              Academic Programs
            </Link>
            <Link href="#" className="block text-muted-foreground transition-colors hover:text-foreground">
              News & Calendar
            </Link>
          </div>
        </div>
        <div>
          <h3 className="mb-4 font-semibold">Follow Us</h3>
          <div className="space-y-2 text-sm">
            <Link href="#" className="block text-muted-foreground transition-colors hover:text-foreground">
              Facebook
            </Link>
            <Link href="#" className="block text-muted-foreground transition-colors hover:text-foreground">
              Instagram
            </Link>
            <Link href="#" className="block text-muted-foreground transition-colors hover:text-foreground">
              Twitter
            </Link>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-7xl text-center text-sm text-muted-foreground">
        <p>Copyright © 2025 Star Hacs.</p>
        <p>All Rights Reserved</p>
      </div>
    </footer>
  )
}

