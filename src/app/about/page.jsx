'use client';
import Brain from '@/components/Brain';
import SkillsList from '@/components/SkillsList';
import { motion, useInView, useScroll } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

const AboutPage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, { once: true });
  const isSkillRefInView = useInView(skillRef, { margin: '-100px' });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: '-100px' });

  return (
    <motion.div
      className="h-full"
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >
      {/* container */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* text container*/}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl-p-48 text-xl flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* bio container */}
          <div className="flex flex-col gap-12 justify-center">
            {/* title */}
            <h1 className="text-2xl font-bold">BIOGRAPHY</h1>
            {/* dec */}
            <p className="text-lg">
              過去在英國讀研究所時，因網路相關課程開始對網站開發產生興趣，並決定成為軟體工程師。
              目前有一年半左右的前端開發經驗，前一份工作為前端工程師，主要負責數據資料網站平台開發，同時也負責部分後端
              API 架設及資料庫維護，主要使用技術為 JavaScript/HTML/CSS、
              React.js、Node.js、Linux、MySQL、Docker、Azure。
            </p>
            <span className="italic">堅持、持續。</span>
            {/* signature */}
            <div className="self-end">
              <Image src="/signature.png" alt="" width={200} height={24} />
            </div>

            {/* scroll svg*/}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: '10px' }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path d="M15 11L12 14L9 11" stroke="#000000" strokeWidth="1"></path>
            </motion.svg>
          </div>

          {/* skills container */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* skill tittle */}
            <motion.h1
              initial={{ x: '-300px' }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* skill list */}
            <motion.div
              initial={{ x: '-300px' }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              <SkillsList />
            </motion.div>
            {/* skill scroll svg */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: '10px' }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path d="M15 11L12 14L9 11" stroke="#000000" strokeWidth="1"></path>
            </motion.svg>
          </div>

          {/* experience container */}
          <div className="flex flex-col gap-12 justify-center pb-48" ref={experienceRef}>
            {/* experience title */}
            <motion.h1
              initial={{ x: '-300px' }}
              animate={isExperienceRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EXPERIENCE
            </motion.h1>
            {/* experience list */}
            <motion.div
              initial={{ x: '-300px' }}
              animate={isExperienceRefInView ? { x: 0 } : {}}
              className=""
            >
              {/* experience item1 */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    前端工程師
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    專注於建立物聯網網站平台。主要工作內容包括前端開發 (React.js) 、API串接,
                    以及後端API (Node.js) 伺服器的建立。
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-sm font-semibold text-red-400">2023/8 - 2023/12</div>
                  {/* JOB FIRM */}
                  <div className="p-1 rounded bg-white text-xs font-semibold w-fit">
                    豪穎科技股份有限公司
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* line */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* line circle */}
                    <div className="absolute w-5 h-5 -left-2 rounded-full ring-4 ring-red-400 bg-white"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3"></div>
              </div>

              {/* experience item2 */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3"></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* line */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* line circle */}
                    <div className="absolute w-5 h-5 -left-2 rounded-full ring-4 ring-red-400 bg-white"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    行銷企劃專員
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    策劃和管理多個品牌和產品的社交媒體行銷活動，包括 Facebook、Instagram、WordPress
                    和 Google ADs。
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-sm font-semibold text-red-400">2017/1 - 2018/1</div>
                  {/* JOB FIRM */}
                  <div className="p-1 rounded bg-white text-xs font-semibold w-fit">
                    亞星通股份有限公司
                  </div>
                </div>
              </div>

              {/* experience item3 */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    專櫃人員
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    傾聽客戶需求，提供產品知識、量身訂製產品服務 。
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-sm font-semibold text-red-400">2015/12 - 2016/11</div>
                  {/* JOB FIRM */}
                  <div className="p-1 rounded bg-white text-xs font-semibold w-fit">
                    UNITED ARROWS_台灣聯合艾諾股份有限公司
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* line */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* line circle */}
                    <div className="absolute w-5 h-5 -left-2 rounded-full ring-4 ring-red-400 bg-white"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3"></div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* brain svg container */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
