'use client'

import React from 'react'
import { motion } from 'motion/react'

const WhyStarHacsSection = () => {
  return (
    <section className="mb-30 flex justify-end px-10">
      <div className="w-full text-end lg:w-1/2">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-4xl font-bold text-[#0A1B3D]"
        >
          Why Star Hacs ?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, x: 20, scale: 2 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dui lacus, posuere id
          fermentum in, interdum a metus. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. In hac habitasse platea dictumst. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Illo animi fugiat tempore eius? Quia, alias. Nisi
          accusamus eligendi debitis deserunt fuga amet, ex dicta omnis dolore praesentium alias
          quis sint? Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sit, nostrum
          distinctio ducimus asperiores hic adipisci explicabo a omnis ipsam accusamus architecto
          eius repellendus deleniti quos quae illum ex sequi?
        </motion.p>
      </div>
    </section>
  )
}

export default WhyStarHacsSection
