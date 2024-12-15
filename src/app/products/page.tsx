'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const products = [
  {
    id: 1,
    name: 'Artisan Sourdough',
    category: 'Breads',
    description: 'Traditional sourdough bread made with our special starter, featuring a perfect crust and soft interior.',
    features: ['Natural Fermentation', 'Crispy Crust', 'No Additives']
  },
  {
    id: 2,
    name: 'Whole Wheat Bread',
    category: 'Breads',
    description: 'Nutritious whole wheat bread perfect for sandwiches, packed with fiber and natural goodness.',
    features: ['100% Whole Wheat', 'High Fiber', 'Rich in Nutrients']
  },
  {
    id: 3,
    name: 'Cheese Straws',
    category: 'Snacks',
    description: 'Crispy cheese-flavored pastry straws that make the perfect snack for any occasion.',
    features: ['Real Cheese', 'Crispy Texture', 'Perfect for Parties']
  },
  {
    id: 4,
    name: 'Pretzel Bites',
    category: 'Snacks',
    description: 'Bite-sized soft pretzels with sea salt, perfect for sharing and dipping.',
    features: ['Soft Interior', 'Sea Salt Topping', 'Great for Sharing']
  },
  {
    id: 5,
    name: 'Brioche Buns',
    category: 'Buns',
    description: 'Soft and buttery brioche buns that elevate any sandwich or burger.',
    features: ['Buttery Rich', 'Light & Fluffy', 'Golden Brown']
  },
  {
    id: 6,
    name: 'Classic Cookies',
    category: 'Cookies',
    description: 'Our signature cookies made with premium ingredients and lots of love.',
    features: ['Premium Ingredients', 'Perfectly Baked', 'Various Flavors']
  }
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 }
};

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <main className="min-h-screen py-24 bg-cream">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-5xl md:text-6xl font-display text-primary mb-6 text-center drop-shadow-custom"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Creations
        </motion.h1>
        <motion.p 
          className="text-xl text-brown-light mb-16 text-center max-w-3xl mx-auto font-body"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Discover our handcrafted selection of premium baked goods, made with love and the finest ingredients
        </motion.p>
        
        {/* Category Filter */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 rounded-full font-body text-lg transition-all duration-300 ${
                selectedCategory === 'all'
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white text-brown-light hover:bg-primary/10'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              All
            </motion.button>
            {['Breads', 'Snacks', 'Buns', 'Cookies'].map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-body text-lg transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white text-brown-light hover:bg-primary/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Products Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                variants={fadeIn}
                initial="initial"
                animate="animate"
                exit="exit"
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                onHoverStart={() => setHoveredProduct(product.id)}
                onHoverEnd={() => setHoveredProduct(null)}
              >
                <div className="h-64 bg-secondary/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="p-8">
                  <p className="text-sm text-secondary font-body font-semibold mb-2">{product.category}</p>
                  <h3 className="text-2xl font-display text-brown-dark mb-4">{product.name}</h3>
                  <p className="text-brown-light font-body mb-6">{product.description}</p>
                  <motion.div 
                    className="space-y-2"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ 
                      opacity: hoveredProduct === product.id ? 1 : 0,
                      height: hoveredProduct === product.id ? 'auto' : 0
                    }}
                  >
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-brown-light font-body">
                        <span className="text-secondary mr-2">•</span>
                        {feature}
                      </div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </main>
  );
} 