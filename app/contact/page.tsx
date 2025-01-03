"use client"
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

export default function ContactPage() {
  return (
    <div>
      <Header />

      <div className="container mx-auto my-8 px-4">
        <h1 className="text-5xl font-bold mb-8 text-center">Contact Us</h1>

        {/* Contact Info Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-gray-700 mb-4">
              Have any questions, suggestions, or feedback? We&apos;d love to hear from you! Use the form below or reach out to us through the following details.
            </p>
            <ul className="space-y-4 text-gray-700">
              <li>
                <strong>Email:</strong>
                <a href="mailto:info@healthblog.com" className="text-green-500 hover:underline">
                  info@healthblog.com
                </a>
              </li>
              <li>
                <strong>Phone:</strong>
                <a href="tel:+123456789" className="text-green-500 hover:underline">
                  +1 (234) 567-890
                </a>
              </li>
              <li>
                <strong>Address:</strong> 123 Wellness Street, Healthy City, HC 56789
              </li>
            </ul>
          </div>

          {/* Map Section */}
          <div>
            <iframe
              src="https://www.google.com/maps/embed?..."
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Google Map"
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </section>

        {/* Contact Form */}
        <section className="bg-gray-100 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-6 text-center">Send Us a Message</h2>
          <form className="space-y-6">
            
            {/* Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium">
                  Your Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" className="block text-gray-700 font-medium">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium">
                Your Message
              </label>
              <textarea
                id="message"
                placeholder="Your Message"
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-md text-lg cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </section>

        {/* Social Media Links */}
        <section className="mt-12 text-center">
          <h2 className="text-3xl font-semibold mb-6">Follow Us</h2>
          <div className="flex justify-center space-x-8 text-gray-700">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500"
            >
              Twitter
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500"
            >
              Instagram
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
