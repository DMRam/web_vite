import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './carousel.css';

// Import required modules
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import { imageList } from '../../assets/images/carousel';

// Modal component
interface ModalProps {
    image: string;
    description: string;
    isOpen: boolean;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ image, description, isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>Close</button>
                <img src={image} alt="Modal Content" className="modal-image" />
                <p className="modal-description">{description}</p>
            </div>
        </div>
    );
};

export const Carousel = () => {

    const [modalOpen, setModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState('');
    const [modalDescription, setModalDescription] = useState('');

    
    const handleImageClick = (image: string, description: string) => {
        setModalImage(image);
        setModalDescription(description);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                loop={true}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                autoplay={{
                    delay: 3000, // Set the delay (in ms) between slides
                    disableOnInteraction: false, // Autoplay will not stop when the user interacts with the carousel
                }}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className="mySwiper"
            >
                {imageList.map((imageData, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={imageData.src}
                            alt={imageData.alt}
                            className="w-full h-64 object-cover rounded-lg hover:scale-105"
                            onClick={() => handleImageClick(imageData.src, imageData.description)}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Modal */}
            <Modal
                image={modalImage}
                description={modalDescription}
                isOpen={modalOpen}
                onClose={closeModal}
            />
        </>
    );
};
