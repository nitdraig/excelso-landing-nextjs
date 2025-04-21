"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
const IndexStats = () => {
  return (
    <section className="w-full py-24 md:py-32 bg-muted/30 border-y">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="text-4xl md:text-5xl font-bold mb-2"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <CountUp from={0} to={4} duration={2} />+
            </motion.div>
            <div className="text-sm text-muted-foreground">
              Years of Experience
            </div>
          </motion.div>
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              className="text-4xl md:text-5xl font-bold mb-2"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <CountUp from={0} to={20} duration={2} />+
            </motion.div>
            <div className="text-sm text-muted-foreground">
              Completed Projects
            </div>
          </motion.div>
          {/* <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div
              className="text-4xl md:text-5xl font-bold mb-2"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <CountUp from={0} to={1} duration={2} />+
            </motion.div>
            <div className="text-sm text-muted-foreground">Team Members</div>
          </motion.div> */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.div
              className="text-4xl md:text-5xl font-bold mb-2"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <CountUp from={0} to={3} duration={2} />+
            </motion.div>
            <div className="text-sm text-muted-foreground">
              Open Source Projects
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IndexStats;

function CountUp({ from, to, duration }: any) {
  const [count, setCount] = useState(from);
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (inView) {
      let startTime: any;
      let animationFrame: any;

      const animate = (timestamp: any) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min(
          (timestamp - startTime) / (duration * 1000),
          1,
        );
        setCount(Math.floor(from + progress * (to - from)));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => cancelAnimationFrame(animationFrame);
    }
  }, [inView, from, to, duration]);

  return <span ref={ref}>{count}</span>;
}
