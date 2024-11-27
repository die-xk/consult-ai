const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#1B2B27]">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="text-2xl font-bold text-white">
              Modi AI
            </div>
            <p className="text-gray-400">
              Create winning business proposals in minutes with the power of AI.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#7CFF9B]">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#7CFF9B]">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white font-semibold mb-6">Product</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#7CFF9B]">Features</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#7CFF9B]">Pricing</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#7CFF9B]">Templates</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#7CFF9B]">Demo</a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-6">Resources</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#7CFF9B]">Blog</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#7CFF9B]">Help Center</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#7CFF9B]">Documentation</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#7CFF9B]">API</a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-6">Company</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#7CFF9B]">About</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#7CFF9B]">Careers</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#7CFF9B]">Contact</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#7CFF9B]">Partners</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © {currentYear} Modi AI. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-[#7CFF9B] text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-[#7CFF9B] text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-[#7CFF9B] text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 