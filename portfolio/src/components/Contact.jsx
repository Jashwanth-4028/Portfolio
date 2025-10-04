import React from "react";
import { Send } from "lucide-react";

const Contact = ({ handleFormSubmit, formData, handleInputChange, status }) => {
  return (
    <div>
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Contact</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Let&apos;s build something great together. Reach out!
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleFormSubmit}
            className="space-y-6 bg-gray-50 p-8 rounded-2xl shadow-xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="sr-only">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 border bg-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Hidden honeypot (bot protection) */}
              <input type="hidden" name="_gotcha" />

              {/* Email */}
              <div>
                <label htmlFor="email" className="sr-only">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 border bg-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="sr-only">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your Message"
                rows="5"
                required
                className="w-full px-4 py-3 border bg-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              aria-label="Send Message"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition duration-300"
            >
              <Send className="inline-block mr-2" size={18} aria-hidden="true" />
              Send Message
            </button>

            {/* Feedback message */}
            {status === "success" && (
              <p className="text-green-600 font-medium mt-4">
                ✅ Your message has been sent!
              </p>
            )}
            {status === "error" && (
              <p className="text-red-600 font-medium mt-4">
                ❌ Oops! Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
