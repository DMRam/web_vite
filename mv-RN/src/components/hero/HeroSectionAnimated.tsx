import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EstimateModal } from "../modals/EstimateModal";

const images = [
  "https://www.dispano.fr/sites/default/files/2022-07/terrasse-composite-avantages-inconvenients-banniere-dispano.jpg",
  "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_16:9/stock%2Fshutterstock_1888521331",
  "https://firebasestorage.googleapis.com/v0/b/ecoserv-c2203.firebasestorage.app/o/2024-11-07_18-53-07_000.jpeg?alt=media&token=a308766b-8239-4aa8-93f1-50171cafdf92",
  "https://firebasestorage.googleapis.com/v0/b/ecoserv-c2203.firebasestorage.app/o/2024-05-26_16-08-22_138.jpeg?alt=media&token=fc47b547-5c70-4808-a41c-6af34c3c83ec"
];

const imageVariants = {
  hidden: { opacity: 0, scale: 1.05 },
  visible: { opacity: 1, scale: 1, transition: { duration: 2.5, ease: "easeOut" } },
  exit: { opacity: 0, scale: 1.05, transition: { duration: 2.5, ease: "easeInOut" } }
};

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-blue-700 text-center px-4 overflow-hidden" id="home">
      {/* Background Image Transition */}
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence mode="wait">
          {images.map((image, i) => (
            i === index && (
              <motion.div
                key={image}
                className="absolute inset-0 w-full h-full"
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                style={{ transformOrigin: "center" }}
              >
                <motion.img
                  src={image}
                  alt="Background"
                  className="w-full h-full object-cover"
                  initial={{ scale: 1 }}
                  animate={{ scale: 1.1 }}
                  transition={{ duration: 10, ease: "linear" }}
                />
              </motion.div>
            )
          ))}
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl bg-gray-400 opacity-70 p-6 md:p-8 rounded-lg shadow-xl w-11/12 sm:w-4/5 lg:w-2/3">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-2xl">
          Transform Your Space with Expert Renovation Services
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-700 drop-shadow-md">
          Elevate your home or business with high-end renovation solutions tailored to your vision.
          We combine expert craftsmanship, premium materials, and innovative designs to create
          stunning, long-lasting transformations that enhance both style and value.
        </p>

        <button
          onClick={() => setIsModalOpen(true)}
          className="mt-6 sm:mt-8 px-6 sm:px-10 py-3 sm:py-4 bg-yellow-500 text-blue-700 font-bold rounded-full shadow-lg hover:bg-yellow-400 hover:scale-105 transition-all duration-300"
        >
          Get an Instant Estimate
        </button>
      </div>

      {/* Estimate Modal */}
      <EstimateModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
