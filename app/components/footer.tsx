import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">About Us</h3>
            <p className="text-gray-400">
              Welcome to our Health Blog, where we share insights on health, wellness, and lifestyle. Our mission is to inspire and empower readers to live healthier, happier lives.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-green-400">Home</Link></li>
              <li><Link href="/about" className="hover:text-green-400">About</Link></li>
              <li><Link href="/blog" className="hover:text-green-400">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-green-400">Contact</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-green-400">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-green-400">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-green-400">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-green-400">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Subscribe</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter to receive the latest updates and tips.
            </p>
            <form onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 text-gray-900 rounded-md mb-2 focus:ring-2 focus:ring-green-400 outline-none"
                required
              />
              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-md transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Health Blog. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
