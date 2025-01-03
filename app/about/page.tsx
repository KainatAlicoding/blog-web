'use client'; 
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div>
      <Header />
      <div className="container mx-auto my-8 px-4">
        <h1 className="text-5xl font-bold mb-8 text-center">About Us</h1>

        {/* Section 1 */}
        <section className="mb-12">
          <p className="text-lg text-gray-700 leading-8">
            Welcome to our Health Blog! Our mission is to provide readers with accurate and engaging content on health, wellness, and lifestyle. We believe in empowering our readers to make informed decisions that improve their physical and mental well-being.
          </p>
          <p className="text-lg text-gray-700 leading-8 mt-4">
            Our blog covers topics ranging from fitness and nutrition to mental health and stress management. Whether you&apos;re looking for workout tips, healthy recipes, or mindfulness techniques, we&apos;ve got you covered!
          </p>
          <Image 
            src="/images/about-1.jpg" 
            alt="Healthy Living" 
            width={800} 
            height={400} 
            className="w-full h-64 object-cover mt-6 rounded-lg shadow-lg"
          />
        </section>

        {/* Section 2 */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
          <p className="text-lg text-gray-700 leading-8">
            Our vision is to inspire people to embrace a healthier lifestyle. We believe that small changes can lead to big transformations. By sharing practical tips and motivational stories, we aim to build a community of health enthusiasts.
          </p>
          <p className="text-lg text-gray-700 leading-8 mt-4">
            We collaborate with experts, fitness trainers, and nutritionists to ensure that our content is both reliable and easy to follow.
          </p>
          <Image 
            src="/women.avif" 
            alt="Vision" 
            width={800} 
            height={400} 
            className="w-full h-64 object-cover mt-6 rounded-lg shadow-lg"
          />
        </section>

        {/* Section 3 */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Our Journey</h2>
          <p className="text-lg text-gray-700 leading-8">
            Our journey began with a passion for promoting healthy habits. We started this blog to share our experiences, research, and insights with a broader audience. Over the years, we&apos;ve grown into a trusted platform for health and wellness information.
          </p>
          <p className="text-lg text-gray-700 leading-8 mt-4">
            We are grateful for the love and support of our readers who inspire us to keep exploring new ideas and sharing valuable content.
          </p>
          <Image 
            src="/images/about-3.jpg" 
            alt="Journey" 
            width={800} 
            height={400} 
            className="w-full h-64 object-cover mt-6 rounded-lg shadow-lg"
          />
        </section>

        {/* Section 4 */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Join Us</h2>
          <p className="text-lg text-gray-700 leading-8">
            We invite you to join our journey towards better health. Subscribe to our newsletter to stay updated with our latest posts and exclusive content. Follow us on social media to connect with like-minded individuals and share your own stories of transformation.
          </p>
          <p className="text-lg text-gray-700 leading-8 mt-4">
            Let&apos;s work together to make the world a healthier and happier place!
          </p>
          <Image 
            src="/images/about-4.jpg" 
            alt="Join Us" 
            width={800} 
            height={400} 
            className="w-full h-64 object-cover mt-6 rounded-lg shadow-lg"
          />
        </section>

        <Footer />
      </div>
    </div>
  );
}
