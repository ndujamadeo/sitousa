import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <div className="bg-white rounded-lg p-2 inline-block">
                <img
                  src="/logo.jpg"
                  alt="NdujaLovers"
                  className="h-10 w-auto object-contain"
                />
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Bringing the authentic taste of Calabrian 'nduja to America.
              Premium quality, traditional recipes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  Our Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-bold text-lg mb-4">Products</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Classic 'Nduja</li>
              <li>Mild 'Nduja</li>
              <li>Extra Hot 'Nduja</li>
              <li>Gift Sets</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>📧 info@ndujaitalia.com</li>
              <li>📱 +1 (555) 123-4567</li>
              <li>📍 Calabria, Italy</li>
              <li className="pt-4 flex space-x-4">
                <a href="#" className="hover:text-white transition-colors">
                  Facebook
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Instagram
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} 'Nduja Italia USA. All rights reserved.</p>
          <p className="mt-2">
            Made with ❤️ and 🌶️ |
            <Link href="#" className="hover:text-white ml-2">Privacy Policy</Link> |
            <Link href="#" className="hover:text-white ml-2">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
