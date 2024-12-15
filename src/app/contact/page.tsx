'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <main className="min-h-screen py-24 bg-cream">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-5xl md:text-6xl font-display text-primary mb-6 text-center drop-shadow-custom"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get in Touch
        </motion.h1>
        <motion.p 
          className="text-xl text-brown-light mb-16 text-center max-w-3xl mx-auto font-body"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Have a question about our products or interested in collaborating? We'd love to hear from you.
        </motion.p>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg mb-8">
              <h2 className="text-3xl font-display text-primary mb-8 drop-shadow-custom">Visit Our Bakery</h2>
              <div className="space-y-8 font-body">
                <div>
                  <h3 className="text-xl font-semibold text-brown-dark mb-4">Location</h3>
                  <p className="text-brown-light">123 Bakery Street<br />San Francisco, CA 94105</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-brown-dark mb-4">Contact Details</h3>
                  <p className="text-brown-light">Phone: (555) 123-4567<br />Email: hello@blissburn.com</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-brown-dark mb-4">Business Hours</h3>
                  <p className="text-brown-light">Monday - Friday: 7am - 7pm<br />Saturday - Sunday: 8am - 6pm</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-lg font-semibold text-brown-dark mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-secondary/20 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors font-body"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-lg font-semibold text-brown-dark mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-secondary/20 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors font-body"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-lg font-semibold text-brown-dark mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-secondary/20 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors font-body"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="collaboration">Business Collaboration</option>
                    <option value="feedback">Product Feedback</option>
                    <option value="inquiry">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-lg font-semibold text-brown-dark mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-secondary/20 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors font-body"
                    required
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-primary text-white py-4 rounded-lg hover:bg-primary/90 transition-colors font-body text-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
} 