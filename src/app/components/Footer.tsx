'use client';
import Link from "next/link";
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer 
      className="bg-cream border-t border-secondary/20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <motion.h3 
              className="text-2xl font-display text-primary mb-6 drop-shadow-custom"
              whileHover={{ scale: 1.05 }}
            >
              About Us
            </motion.h3>
            <p className="text-brown-light font-body">Baking happiness daily with premium quality products.</p>
          </div>
          <div>
            <motion.h3 
              className="text-2xl font-display text-primary mb-6 drop-shadow-custom"
              whileHover={{ scale: 1.05 }}
            >
              Quick Links
            </motion.h3>
            <ul className="space-y-3">
              {['Products', 'About', 'Contact'].map((item) => (
                <motion.li key={item} whileHover={{ x: 5 }}>
                  <Link 
                    href={`/${item.toLowerCase()}`} 
                    className="text-brown-light hover:text-primary transition-colors font-body"
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
          <div>
            <motion.h3 
              className="text-2xl font-display text-primary mb-6 drop-shadow-custom"
              whileHover={{ scale: 1.05 }}
            >
              Contact
            </motion.h3>
            <div className="space-y-3 font-body text-brown-light">
              <p>123 Bakery Street<br />San Francisco, CA 94105</p>
              <p>Phone: (555) 123-4567</p>
              <p>Email: hello@blissburn.com</p>
            </div>
          </div>
          <div>
            <motion.h3 
              className="text-2xl font-display text-primary mb-6 drop-shadow-custom"
              whileHover={{ scale: 1.05 }}
            >
              Hours
            </motion.h3>
            <div className="space-y-3 font-body text-brown-light">
              <p>Monday - Friday<br />7am - 7pm</p>
              <p>Saturday - Sunday<br />8am - 6pm</p>
            </div>
          </div>
        </div>
        <motion.div 
          className="border-t border-secondary/20 mt-12 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-brown-light font-body">
            © 2023 BlissBurn. All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
} 