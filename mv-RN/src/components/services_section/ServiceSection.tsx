import React, { useState } from "react";
import { Modal } from "./Modal";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // For animations

const services = [
  {
    title: "Patio Design & Planning",
    description:
      "Custom patio designs tailored to your space, style, and budget. From concept to completion, we bring your vision to life.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/ecoserv-c2203.firebasestorage.app/o/2024-06-06_20-41-33_831.jpeg?alt=media&token=3d8b42be-8e02-4510-b38f-e8b19012946a",
  },
  {
    title: "Hardscaping & Paving",
    description:
      "Expert installation of pavers, stone pathways, and retaining walls to create a durable and beautiful outdoor space.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/ecoserv-c2203.firebasestorage.app/o/07579E23-0538-407F-990A-F41487E3A000.JPG?alt=media&token=817cc277-6bcb-402d-a334-5c63fb6a7d31",
  },
  {
    title: "Outdoor Lighting",
    description:
      "Enhance your patio with elegant and functional lighting solutions, perfect for evening ambiance and safety.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/ecoserv-c2203.firebasestorage.app/o/2024-11-07_18-53-07_000.jpeg?alt=media&token=a308766b-8239-4aa8-93f1-50171cafdf92",
  },
  {
    title: "Patio Furniture & Decor",
    description:
      "Stylish and durable outdoor furniture and decor to complete your patio transformation.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/ecoserv-c2203.firebasestorage.app/o/2024-06-16_10-25-17_833.jpeg?alt=media&token=9dacce00-04fa-45be-b3ad-70da3d688bfa",
  },
];

export const ServicesSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<any>(null);
  const navigate = useNavigate();

  const openModal = (service: any) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  const handleCardClick = (service: any) => {
    navigate(`/service/${service.title}`, { state: { service } }); // Pass service data via state
  };

  return (
    <section
    style={{ borderTopLeftRadius: 20, borderTopRightRadius: 20 }}
      className="bg-gray-50 py-20 text-center"
      id="services"
    >
      <h2 className="text-5xl font-serif font-bold mb-16 leading-tight tracking-wide text-gray-900">
        Transform Your Outdoor Space
      </h2>
      <div
        style={{ margin: 20 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-12"
      >
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            className="group relative bg-white rounded-lg shadow-sm overflow-hidden transform transition-all duration-300 ease-out hover:shadow-xl cursor-pointer border border-gray-200"
            onClick={() => handleCardClick(service)} // Use handleCardClick
            whileHover={{ scale: 1.02 }} // Hover effect for the entire card
            initial={{ opacity: 0, y: 50 }} // Fade-in animation
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }} // Staggered animation
          >
            {/* Image with overlay */}
            <div className="relative w-full h-80">
              <img
                src={service.image}
                alt={service.title}
                className="object-cover w-full h-full transition-transform rounded-t-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-t-lg"></div>
            </div>

            {/* Title and Description */}
            <div className="p-6">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-lg text-gray-600 mb-6">{service.description}</p>
              <p className="text-sm text-gray-500 italic">Learn more →</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal for displaying service details */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={selectedService?.title}
        description={selectedService?.description}
        image={selectedService?.image}
      />
    </section>
  );
};