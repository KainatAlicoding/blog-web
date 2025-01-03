import Link from "next/link";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import FeaturedBlog from "@/app/components/FeaturedBlog";

const blogs = [
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
];

export default function Home() {  
  return (
    <div>
      <Header />
      <div
  className="h-screen bg-cover bg-center flex items-center justify-center"
  style={{
    backgroundImage: "url('/pick.jpg')", // Example image
  }}
>
 {/* Card Below the Banner */}
 <div className="bg-green-600 p-8 rounded-lg shadow-lg text-center max-w-lg">
    <h1 className="text-white py-4  text-4xl font-bold mb-4">
      Welcome to Your Health Blog
    </h1>
    <p className="text-white text-lg">
      Explore articles on healthy living, balanced diets, mindfulness, and fitness.
    </p>
  </div>

</div>


      <main className="container mx-auto my-8">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Recent Blogs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
                  <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                  <Link href={`/blogpost/${blog.slug}`} legacyBehavior>
                    <a className="text-green-500 hover:underline">Read More</a>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <FeaturedBlog />
      <Footer />
    </div>
  );
}
