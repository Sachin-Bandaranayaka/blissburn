'use client';
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

export default function AboutPage() {
  return (
    <main className="min-h-screen py-24 bg-cream">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.section 
          className="text-center mb-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-5xl md:text-6xl font-display text-primary mb-6 drop-shadow-custom"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            Our Story
          </motion.h1>
          <motion.p 
            className="text-xl text-brown-light max-w-3xl mx-auto font-body"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Crafting premium baked goods that bring joy to your everyday moments
          </motion.p>
        </motion.section>

        {/* Story Section */}
        <motion.section 
          className="mb-24"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="bg-white p-12 rounded-2xl shadow-lg"
              variants={fadeIn}
            >
              <div className="space-y-6 text-brown-light font-body">
                <p className="text-lg">
                  Founded with a passion for exceptional baking, BlissBurn started as a small family bakery
                  dedicated to creating premium quality baked goods. Our commitment to using the finest
                  ingredients and traditional baking methods has made us a trusted name in the community.
                </p>
                <p className="text-lg">
                  Today, we continue to uphold these values while innovating to bring you new and exciting
                  flavors that meet our high standards of quality and taste. Every product that leaves our
                  bakery is crafted with care and attention to detail.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Values Section */}
        <motion.section 
          className="mb-24"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-4xl font-display text-primary text-center mb-16 drop-shadow-custom"
            variants={fadeIn}
          >
            Our Values
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Quality First',
                description: 'We use only the finest ingredients and never compromise on quality.',
                icon: '✨'
              },
              {
                title: 'Traditional Methods',
                description: 'Our recipes combine time-tested techniques with modern innovation.',
                icon: '🌟'
              },
              {
                title: 'Customer Happiness',
                description: 'Your satisfaction is our priority, and we strive to exceed expectations.',
                icon: '💝'
              }
            ].map((value) => (
              <motion.div
                key={value.title}
                className="bg-white p-8 rounded-2xl shadow-lg text-center"
                variants={fadeIn}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                <span className="text-4xl mb-6 block">{value.icon}</span>
                <h3 className="text-2xl font-display text-primary mb-4">{value.title}</h3>
                <p className="text-brown-light font-body">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Craftsmanship Section */}
        <motion.section 
          className="max-w-4xl mx-auto text-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div 
            className="bg-gradient-to-b from-secondary/20 to-cream rounded-2xl p-12"
            variants={fadeIn}
          >
            <h2 className="text-4xl font-display text-primary mb-8 drop-shadow-custom">Our Craftsmanship</h2>
            <p className="text-lg text-brown-light font-body leading-relaxed">
              At BlissBurn, every product is a masterpiece of traditional baking artistry. Our skilled bakers
              combine years of experience with a deep passion for their craft, ensuring that each item meets
              our exacting standards. From the perfect crust of our artisan breads to the delicate texture
              of our pastries, we take pride in every detail.
            </p>
          </motion.div>
        </motion.section>
      </div>
    </main>
  );
} 