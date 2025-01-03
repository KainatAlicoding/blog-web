'use client'; 
import { useRouter } from "next/router";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import CommentSection from "@/app/components/commentsection";
import Image from "next/image";

type BlogPost = {
  title: string;
  content: string;
  image: string;
};

const blogContent: Record<string, BlogPost> = {
  "benefits-of-yoga": {
    title: "Benefits of Yoga",
    content: "Yoga helps improve flexibility, reduce stress, and boost overall health.Meditation is a powerful practice that nurtures both the mind and body. It helps reduce stress, improve focus, and enhance overall mental clarity. Regular meditation can lower blood pressure, improve emotional well-being, and increase self-awareness. It is a natural way to combat anxiety and promote relaxation, making it an essential tool for maintaining a healthy lifestyle",


    image: "/download (5).jpeg",
  },
  "healthy-eating-habits": {
    title: "Healthy Eating Habits",
    content: "A balanced diet ensures your body gets all the nutrients it needs.Healthy eating habits are essential for maintaining a strong and vibrant body. Incorporating a variety of fruits, vegetables, whole grains, and lean proteins into your diet ensures you get the nutrients your body needs. Avoiding processed foods, drinking plenty of water, and eating meals at regular intervals can boost your energy levels and improve digestion. These habits not only support physical health but also enhance mental well-being and overall quality of life",
    image: "/download (2).jpeg",
  },
 "mental-health-awareness": {
    title: "Mental Health Awareness",
    content: "Mental health is crucial for overall well-being and happiness.Mental health awareness is crucial for promoting emotional well-being and understanding the challenges faced by individuals. Prioritizing mental health helps reduce stigma, encourage open conversations, and ensure that people seek the support they need. Practices like mindfulness, regular exercise, and staying connected with loved ones can improve mental resilience. By raising awareness, we create a more compassionate society where mental health is treated with the same importance as physical health",
    image: "/download (4).jpeg",
  },
  "benefits-of-meditation": {
    title: "Benefits of Meditation",
    content: "Meditation can help you focus, reduce stress, and improve mental clarity.and boost overall health.Meditation is a powerful practice that nurtures both the mind and body. It helps reduce stress, improve focus, and enhance overall mental clarity. Regular meditation can lower blood pressure, improve emotional well-being, and increase self-awareness. It is a natural way to combat anxiety and promote relaxation, making it an essential tool for maintaining a healthy lifestyle",
    image: "/download.jpeg",
  },
  "exercise-tips": {
    title: "Exercise Tips",
    content: "Simple and effective exercises for staying active and healthy.Regular exercise is key to maintaining a healthy and active lifestyle. Start with simple activities like walking or stretching to build consistency. Incorporate a mix of cardio, strength training, and flexibility exercises for a well-rounded routine. Stay hydrated, warm up before starting, and cool down after workouts to prevent injuries. Listen to your body and gradually increase intensity to achieve sustainable results. Remember, even small steps can lead to significant health benefits over time",
    image: "/download (6).jpeg",
  },
  "importance-of-hydration": {
    title: "Importance of Hydration",
    content: "Drinking water is vital for every aspect of health.Staying hydrated is essential for maintaining optimal health and well-being. Water helps regulate body temperature, supports digestion, and keeps your skin healthy. Proper hydration boosts energy levels, improves focus, and aids in muscle recovery after exercise. Aim to drink at least 8 glasses of water daily, and increase intake during physical activity or in hot weather. Remember, good hydration is the foundation of a healthy body and mind",
    image: "/images.jpeg",
  },
  "stress-management-techniques": {
    title: "Stress Management Techniques",
    content: "Learn techniques to stay calm and relaxed under pressure.Managing stress is essential for maintaining mental and physical health. Start by practicing deep breathing exercises or meditation to calm your mind. Regular physical activity, such as yoga or walking, can reduce tension and improve your mood. Prioritize tasks with effective time management, and take short breaks to recharge during busy days. Stay connected with loved ones and share your feelings to alleviate emotional burdens. Remember, self-care and seeking support are key to managing stress effectively",
    image: "/download (1).jpeg",
  },
  "benefits-of-sleep": {
    title: "Benefits of Sleep",
    content: "Good sleep improves mood, health, and productivity.Good sleep is essential for overall health and well-being. It allows your body to repair, boosts immune function, and supports brain performance. Quality sleep improves memory, focus, and mood, helping you stay productive and energized throughout the day. It also reduces the risk of chronic conditions like heart disease and diabetes. Aim for 7-9 hours of sleep each night, and maintain a consistent sleep schedule to enjoy its full benefits",
    image: "/pic.avif",
  },
};

export default function BlogPost({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const blog = blogContent[slug];

  if (!blog) {
    return <p>Blog not found</p>;
  }

  return (
    <div>
      <Header />
      <main className="container mx-auto my-8 flex flex-col items-center text-center">
      <Image 
  src={blog.image} 
  alt={blog.title} 
  width={800} 
  height={400} 
  className="w-full max-w-3xl h-64 object-cover mb-6 rounded-lg"
/>
  <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
  <p className="text-gray-700 mb-6 max-w-2xl">{blog.content}</p>
  <CommentSection />
</main>
     
      <Footer />
    </div>
  );
}
