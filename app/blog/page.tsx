import Link from "next/link";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
const blogs = [
  {
    slug: "benefits-of-meditation",
    title: "Benefits of Meditation",
    excerpt: "Explore the benefits of meditation.",
    image: "/download.jpeg",
  },
  {
    slug: "exercise-tips",
    title: "Exercise Tips",
    excerpt: "Simple exercises for staying active.",
    image: "/download (6).jpeg",
  },
  {
    slug: "importance-of-hydration",
    title: "Importance of Hydration",
    excerpt: "Discover why hydration is essential.",
    image: "/images.jpeg",
  },
  {
    slug: "stress-management-techniques",
    title: "Stress Management Techniques",
    excerpt: "Learn techniques for managing stress.",
    image: "/download (1).jpeg",
  },
  {
    slug: "benefits-of-sleep",
    title: "Benefits of Sleep",
    excerpt: "Explore the benefits of good sleep.",
    image: "/pic.avif",
  },
  {
    slug: "benefits-of-yoga",
    title: "Benefits of Yoga",
    excerpt: "Discover how yoga can improve health.",
    image: "/download (5).jpeg",
  },
  {
    slug: "healthy-eating-habits",
    title: "Healthy Eating Habits",
    excerpt: "Tips for maintaining a balanced diet.",
    image: "/download (2).jpeg",
  },
  {
    slug: "mental-health-awareness",
    title: "Mental Health Awareness",
    excerpt: "Learn about the importance of mental health.",
    image: "/download (4).jpeg",
  },
  {
    slug: "importance-of-hydration",
    title: "Importance of Hydration",
    excerpt: "Discover why hydration is essential.",
    image: "/images.jpeg",
  },
  // Add more blogs as needed
];

export default function BlogPage() {
  return (
    <div>
       <Header/>
    <div className="container mx-auto my-8">
      <h1 className="text-5xl font-bold mb-8 text-center">Our Blog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.slug}
            className="border rounded-lg overflow-hidden shadow-md"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="h-40 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">{blog.title}</h2>
              <p className="text-gray-600 mb-4">{blog.excerpt}</p>
              <Link href={`/blogpost/${blog.slug}`} legacyBehavior>
                <a className="text-green-500 hover:underline">Read More</a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </div>
  );
}
