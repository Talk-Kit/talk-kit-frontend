import { motion } from "framer-motion";

export default function RecordingAnimation() {
  return (
    <div className="w-[100px] h-[100px] flex gap-3 items-center justify-center">
      <motion.div
        animate={{ height: [20, 20, 50, 80, 50, 20, 20, 20, 20, 20, 20] }}
        transition={{
          times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
          duration: 1,
          repeat: Infinity,
          repeatDelay: 0.5,
        }}
        className="w-[6px] bg-primary-1 rounded-full"
      />
      <motion.div
        animate={{ height: [20, 20, 20, 50, 80, 50, 20, 20, 20, 20, 20] }}
        transition={{
          times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
          duration: 1,
          repeat: Infinity,
          repeatDelay: 0.5,
        }}
        className="w-[6px] bg-primary-1 rounded-full"
      />
      <motion.div
        animate={{ height: [20, 20, 20, 20, 50, 80, 50, 20, 20, 20, 20] }}
        transition={{
          times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
          duration: 1,
          repeat: Infinity,
          repeatDelay: 0.5,
        }}
        className="w-[6px] bg-primary-1 rounded-full"
      />
      <motion.div
        animate={{ height: [20, 20, 20, 20, 20, 50, 80, 50, 20, 20, 20] }}
        transition={{
          times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
          duration: 1,
          repeat: Infinity,
          repeatDelay: 0.5,
        }}
        className="w-[6px] bg-primary-1 rounded-full"
      />
      <motion.div
        animate={{ height: [20, 20, 20, 20, 20, 20, 50, 80, 50, 20, 20] }}
        transition={{
          times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
          duration: 1,
          repeat: Infinity,
          repeatDelay: 0.5,
        }}
        className="w-[6px] bg-primary-1 rounded-full"
      />
    </div>
  );
}
