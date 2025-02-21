import { motion } from "framer-motion";

const images = [
  {
    src: "https://www.stathakis.com/hs-fs/hubfs/team%20cleaning.jpg?width=667&name=team%20cleaning.jpg",
    description: "Our team ensuring top-notch cleaning services."
  },
  {
    src: "https://proteam.emerson.com/resource/image/194432/portrait_ratio1x1/555/555/c9b306a5087a6212e758938cc6789e1e/85B58F527B0F78C31CE6B359A82ACE53/teamcleaning.jpg",
    description: "Dedicated professionals delivering excellence."
  },
  {
    src: "https://d3cl79h6n1fe0x.cloudfront.net/wp-content/uploads/2020/08/9MHW-scaled.jpeg",
    description: "Attention to detail in every job."
  },
  {
    src: "https://diamondcontractors.com/wp-content/uploads/2023/12/Tiler-working-on-renovation-of-apartment-1.jpg",
    description: "Transforming spaces with precision and care."
  }
];

export const AboutUs = () => {
  return (
    <section id="about" className="py-20 px-6 text-center bg-gray-50">
      <motion.h2
        className="text-4xl font-bold text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Us
      </motion.h2>

      <motion.p
        className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        We are a dedicated team transforming spaces with high-quality cleaning
        services. With years of expertise, we ensure your home or business
        receives the care it deserves.
      </motion.p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <div className="w-58 h-58 rounded-full overflow-hidden shadow-lg">
              <img
                src={image.src}
                alt="Our Team"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 bg-white shadow-md p-3 rounded-xl text-sm text-gray-700 w-40 text-center -mb-4">
              {image.description}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};