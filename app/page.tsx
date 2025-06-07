import Image from "next/image"
import Link from "next/link"
import { Package, Truck, Plane } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="bg-red-600 text-white px-2 py-1 text-sm font-bold mr-2">天</div>
              <span className="text-red-600 font-bold text-lg">SINOSKY CARGO LTD</span>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-red-600 font-medium">
                Home
              </Link>
              <Link href="/product-service" className="text-gray-600 hover:text-red-600">
                Product service
              </Link>
              <Link href="/logistics-query" className="text-gray-600 hover:text-red-600">
                Logistics query
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-red-600">
                Contact us
              </Link>
              <Link href="/download" className="text-gray-600 hover:text-red-600">
                Download APP
              </Link>
              <Link href="/zh" className="text-gray-400 hover:text-red-600">
                中文
              </Link>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-gray-600 hover:text-red-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/airplane-sunset.png"
            alt="Airplane silhouette at sunset"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400/80 via-orange-500/80 to-orange-600/80" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <div className="text-center text-white">
            <div className="mb-8">
              <p className="text-lg mb-2">Create high quality logistics</p>
              <p className="text-sm opacity-90">用品质管理 创顶级物流</p>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-12 tracking-wider">SKY CARGO LTD</h1>

            {/* Tracking Form */}
            <div className="max-w-2xl mx-auto">
              <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-lg">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Input
                    type="text"
                    placeholder="Please enter the tracking number"
                    className="flex-1 h-12 text-gray-700"
                  />
                  <Button className="h-12 px-8 bg-gray-600 hover:bg-gray-700 text-white">Waybill query</Button>
                </div>
              </div>

              <p className="text-sm text-white/80 mt-4">
                <Link href="#" className="underline hover:text-white">
                  For air waybills before February 22, 2021, please click here to check
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Branded Advantages Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            <span className="inline-block pb-2 border-b-2 border-red-600">Branded advantages</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Advantage 1 */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-red-50 rounded-full flex items-center justify-center border border-red-200">
                <Package className="w-10 h-10 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Professional Packaging</h3>
              <p className="text-gray-600">
                Expert packaging solutions to ensure your cargo arrives safely and securely at its destination.
              </p>
            </div>

            {/* Advantage 2 */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-red-50 rounded-full flex items-center justify-center border border-red-200">
                <Plane className="w-10 h-10 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Global Network</h3>
              <p className="text-gray-600">
                Extensive worldwide network ensuring reliable and efficient cargo delivery to any destination.
              </p>
            </div>

            {/* Advantage 3 */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-red-50 rounded-full flex items-center justify-center border border-red-200">
                <Truck className="w-10 h-10 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Fast Delivery</h3>
              <p className="text-gray-600">
                Quick and reliable delivery services with real-time tracking for complete peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-red-600 text-white px-2 py-1 text-sm font-bold mr-2">天</div>
                <span className="text-white font-bold text-lg">SINOSKY CARGO LTD</span>
              </div>
              <p className="text-gray-400">Your trusted partner for global logistics solutions.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/product-service" className="text-gray-400 hover:text-white">
                    Product Service
                  </Link>
                </li>
                <li>
                  <Link href="/logistics-query" className="text-gray-400 hover:text-white">
                    Logistics Query
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-white">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <address className="not-italic text-gray-400">
                <p>123 Logistics Way</p>
                <p>Shanghai, China</p>
                <p className="mt-2">Email: info@skycargoltd.com</p>
                <p>Phone: +86 123 4567 8910</p>
              </address>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">© 2024 Sky Cargo Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
