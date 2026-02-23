export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 py-8 px-6 mt-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-white font-semibold mb-4">Bethesda House of Grace</h3>
            <p className="text-sm text-gray-500">
              A community of believers dedicated to spiritual growth, love, and service to others.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/#about" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/#sermons" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Sermons
                </a>
              </li>
              <li>
                <a href="/#events" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Events
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-400">
                <span className="text-gray-500">Email:</span> contact@bethesda.com
              </li>
              <li className="text-gray-400">
                <span className="text-gray-500">Phone:</span> (555) 123-4567
              </li>
              <li className="text-gray-400">
                <span className="text-gray-500">Address:</span> 123 Grace Street, Faith City, ST 12345
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>© {currentYear} Bethesda House of Grace. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-yellow-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-yellow-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
