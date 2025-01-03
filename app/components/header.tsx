import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-green-600 text-white py-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Logo Section */}
        <h1 className="text-2xl font-bold mb-4 md:mb-0">Health Blog</h1>

        {/* Navigation Section */}
        <nav className="flex space-x-6 text-lg justify-center w-full md:w-auto">
          <Link href="/" legacyBehavior>
            <a className="hover:text-yellow-300 transition-all">Home</a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a className="hover:text-yellow-300 transition-all">About</a>
          </Link>
          <Link href="/blog" legacyBehavior>
            <a className="hover:text-yellow-300 transition-all">Blog</a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a className="hover:text-yellow-300 transition-all">Contact</a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

