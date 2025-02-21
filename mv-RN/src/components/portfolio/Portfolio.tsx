import React from 'react';
import { Carousel } from '../carousel/Carousel';

export const Portfolio = () => {
    return (
        <section style={{ borderTopLeftRadius: 20, borderTopRightRadius: 20 }} className="py-16 px-8 text-center bg-gradient-to-b from-gray-300 to-white" id="portfolio">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Recent Work</h2>
            <div className="max-w-5xl mx-auto">
                <Carousel />
            </div>
        </section>
    );
};
