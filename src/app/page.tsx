'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const floatingAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-10, 0, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-b from-secondary/20 to-cream">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5"></div>
        </div>
        <motion.div 
          className="container mx-auto px-4 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-6xl md:text-7xl font-display text-primary mb-6 drop-shadow-custom"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.8,
              ease: [0.34, 1.56, 0.64, 1]
            }}
          >
            Baking Happiness Daily
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-brown-light mb-8 max-w-2xl font-body"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            Premium breads, snacks, buns, and cookies made with love
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Link href="/products">
              <button className="bg-primary text-white px-8 py-4 rounded-full hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg font-body text-lg">
                Explore Our Products
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Categories Section */}
      <motion.section 
        className="py-24 bg-white"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl md:text-5xl font-display text-center mb-16 text-primary drop-shadow-custom"
            variants={fadeIn}
          >
            Our Categories
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {['Breads', 'Snacks', 'Buns', 'Cookies'].map((category, index) => (
              <motion.div
                key={category}
                className="group bg-cream rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300"
                variants={fadeIn}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div 
                  className="w-24 h-24 bg-secondary/20 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:bg-secondary/30 transition-colors"
                  variants={floatingAnimation}
                >
                  <span className="text-5xl">{['🥖', '🥨', '🥐', '🍪'][index]}</span>
                </motion.div>
                <h3 className="text-2xl font-display mb-4 text-brown-dark">{category}</h3>
                <p className="text-brown-light font-body">Discover our premium {category.toLowerCase()}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Featured Products Section */}
      <motion.section 
        className="py-24 bg-cream"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl md:text-5xl font-display text-center mb-16 text-primary drop-shadow-custom"
            variants={fadeIn}
          >
            Featured Products
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Artisan Sourdough', price: '$6.99', category: 'Breads', image: '/bread.jpg' },
              { name: 'Chocolate Chip Cookies', price: '$4.99', category: 'Cookies', image: '/cookies.jpg' },
              { name: 'Cheese Buns', price: '$5.99', category: 'Buns', image: '/buns.jpg' },
            ].map((product) => (
              <motion.div
                key={product.name}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                variants={fadeIn}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="h-64 bg-gray-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="p-8">
                  <p className="text-sm text-secondary font-body font-semibold mb-2">{product.category}</p>
                  <h3 className="text-2xl font-display text-brown-dark mb-2">{product.name}</h3>
                  <p className="text-primary font-body font-bold text-xl">{product.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Quality Promise Section */}
      <motion.section 
        className="py-24 bg-white"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            variants={fadeIn}
          >
            <h2 className="text-4xl md:text-5xl font-display text-primary mb-8 drop-shadow-custom">Our Quality Promise</h2>
            <p className="text-xl text-brown-light mb-12 leading-relaxed font-body">
              At BlissBurn, we believe in using only the finest ingredients to create our premium baked goods.
              Every product is crafted with care and attention to detail, ensuring you get the best quality every time.
            </p>
            <Link href="/about">
              <motion.button
                className="text-primary font-display text-2xl group flex items-center justify-center mx-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn more about our process
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}
