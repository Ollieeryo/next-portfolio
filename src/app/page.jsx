'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row lg:gap-4 px-4 sm:px-8 md:px-12 lg:px-20 xl-px-48">
        {/* image */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/hero2.png" alt="" fill className="object-contain h-56" />
        </div>
        {/* text */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* title */}
          <h1 className="text-4xl md:text-6xl font-bold">
            Crafting Digital Experiences: Frontend Engineer Portfolio
          </h1>
          {/* desc */}
          <p className="md:text-xl">
            Hi, 我是一位前端工程師。我熱衷於網路開發, 透過 HTML、CSS 和 JavaScript 的魔法,
            我喜歡打造功能豐富且具有視覺吸引力的網站, 讓我們一起寫程式吧！
          </p>
          {/* buttons */}
          <div className="flex w-full gap-4">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
              View My Work
            </button>
            <button className="p-4 rounded-lg ring-1 ring-black">Contact Me</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
