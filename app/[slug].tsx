import { useRouter } from "next/router";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import CommentSection from "@/app/components/commentsection";

type BlogPost = {
  title: string;
  content: string;
  image: string;
};

const blogContent: Record<string, BlogPost> = {
  "benefits-of-yoga": {
    title: "Benefits of Yoga",
    content: "Yoga helps improve flexibility, reduce stress, and boost overall health.",
    image: "/images/yoga.jpg",
  },
  "healthy-eating-habits": {
    title: "Healthy Eating Habits",
    content: "A balanced diet ensures your body gets all the nutrients it needs.",
    image: "/images/healthy-eating.jpg",
  },
  "mental-health-awareness": {
    title: "Mental Health Awareness",
    content: "Mental health is crucial for overall well-being and happiness.",
    image: "/images/mental-health.jpg",
  },
  "benefits-of-meditation": {
    title: "Benefits of Meditation",
    content: "Meditation can help you focus, reduce stress, and improve mental clarity.",
    image: "/images/meditation.jpg",
  },
  "exercise-tips": {
    title: "Exercise Tips",
    content: "Simple and effective exercises for staying active and healthy.",
    image: "/images/exercise.jpg",
  },
  "importance-of-hydration": {
    title: "Importance of Hydration",
    content: "Drinking water is vital for every aspect of health.",
    image: "/images/hydration.jpg",
  },
  "stress-management-techniques": {
    title: "Stress Management Techniques",
    content: "Learn techniques to stay calm and relaxed under pressure.",
    image: "/images/stress-management.jpg",
  },
  "benefits-of-sleep": {
    title: "Benefits of Sleep",
    content: "Good sleep improves mood, health, and productivity.",
    image: "/images/sleep.jpg",
  },
};

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;

  // Ensure slug is available before accessing blogContent
  if (!slug) {
    return <p>Loading...</p>;
  }

  const blog = blogContent[slug as string];

  if (!blog) {
    return <p>Blog not found</p>;
  }

  return (
    <div>
      <Header />
      <main className="container mx-auto my-8">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-64 object-cover mb-6 rounded-lg"
        />
        <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
        <p className="text-gray-700 mb-6">{blog.content}</p>
        <CommentSection />
      </main>
      <Footer />
    </div>
  );
}
