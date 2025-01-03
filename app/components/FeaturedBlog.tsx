'use client'; 
import Link from "next/link";
import Image from "next/image";

const FeaturedBlog = () => {
  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto text-center">
        {/* Heading and Description */}
        <h2 className="text-4xl font-bold mb-4">Featured Article</h2>
        <p className="text-gray-600 mb-6">The Importance of a Balanced Diet</p>

        {/* Read More Button */}
        <Link href="/blog">
          <span className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-700 cursor-pointer inline-block">
            Read More
          </span>
        </Link>

        {/* Images Section */}
        <div className="flex justify-center mt-8 space-x-4">
          <Image 
            src="/women.avif" 
            alt="Healthy Diet" 
            width={300} 
            height={200} 
            className="rounded-lg shadow-md hover:shadow-lg"
          />
          <Image 
            src="/picture.jpg" 
            alt="Balanced Meal" 
            width={300} 
            height={200} 
            className="rounded-lg shadow-md hover:shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedBlog;
