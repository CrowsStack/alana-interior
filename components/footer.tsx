import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram } from "lucide-react"
import NewsletterSection from "./newsletter-section"

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container-custom py-20">
        <div className="text-center md:text-left mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Let's Talk!</h2>
          <p className="text-white/60 max-w-md">
            Turn plans into reality. Turn drawings into homes. Turn designs into experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="relative w-16 h-16">
                <Image
                  src="https://v0.dev/_next/image?url=https%3A%2F%2Fhebbkx1anhila5yf.public.blob.vercel-storage.com%2Fimage-NbWRhOOrp7jbk4W0BDe3u37bYmWVxS.png&w=1920&q=75"
                  alt="Alana O Interiors Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <div className="text-lg font-medium">ALANA O INTERIORS</div>
                <div className="text-xs text-white/70">Interior Designer Perth</div>
              </div>
            </Link>
            <p className="text-white/60 text-sm mb-4">Perth, WA 6000, Australia</p>
            <p className="text-white/60 text-sm mb-4">
              Mail Us: <br />
              <a href="mailto:info@alanaointeriors.com.au" className="hover:text-white transition-colors">
                info@alanaointeriors.com.au
              </a>
            </p>
            <p className="text-white/60 text-sm">
              Call Us: <br />
              <a href="tel:+61437903544" className="hover:text-white transition-colors">
                0437 903 544
              </a>
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-6">OUR PROJECTS</h3>
              <ul className="space-y-3 text-white/60">
                <li>
                  <Link href="/works" className="hover:text-white transition-colors">
                    All Projects
                  </Link>
                </li>
                <li>
                  <Link href="/works?category=residential" className="hover:text-white transition-colors">
                    Residential
                  </Link>
                </li>
                <li>
                  <Link href="/works?category=commercial" className="hover:text-white transition-colors">
                    Commercial
                  </Link>
                </li>
                <li>
                  <Link href="/works?category=renovation" className="hover:text-white transition-colors">
                    Renovation
                  </Link>
                </li>
                <li>
                  <Link href="/works?category=styling" className="hover:text-white transition-colors">
                    Styling
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-6">LINKS</h3>
              <ul className="space-y-3 text-white/60">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/studio" className="hover:text-white transition-colors">
                    The Studio
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/works" className="hover:text-white transition-colors">
                    Works
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <NewsletterSection />
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-6 md:mb-0">
            <a
              href="https://www.facebook.com/profile.php?id=100086471905127"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center border border-white/20 hover:border-white transition-colors"
            >
              <Facebook size={16} />
            </a>
            <a
              href="https://www.houzz.com.au/professionals/interior-designers-and-decorators/alana-o-interiors-pfvwau-pf~1795451625"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center border border-white/20 hover:border-white transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.01 0L0 9.045V24h8.036V14.954h7.927V24H24V9.045L12.01 0z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center border border-white/20 hover:border-white transition-colors"
            >
              <Instagram size={16} />
            </a>
          </div>
          <div className="flex items-center space-x-4 text-sm text-white/60">
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of use
            </Link>
            <span>|</span>
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>

        <div className="mt-10 text-center text-xs text-white/40">
          Copyright © {new Date().getFullYear()} Alana O Interiors. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}

