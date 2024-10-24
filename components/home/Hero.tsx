'use client'

import React from 'react'
import Slider from 'react-slick'
import { motion } from 'framer-motion'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

interface ArrowProps {
  onClick?: () => void;
}

function NextArrow({ onClick }: ArrowProps) {
  return (
    <div
      className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 cursor-pointer bg-gradient-to-r from-blue-800 to-blue-600 p-2 rounded-full hover:bg-blue-700 hover:scale-105 transition-all"
      onClick={onClick}
    >
      <IoIosArrowForward className="text-white text-3xl" />
    </div>
  );
}

function PrevArrow({ onClick }: ArrowProps) {
  return (
    <div
      className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 cursor-pointer bg-gradient-to-r from-blue-800 to-blue-600 p-2 rounded-full hover:bg-blue-700 hover:scale-105 transition-all"
      onClick={onClick}
    >
      <IoIosArrowBack className="text-white text-3xl" />
    </div>
  );
}

function ActionLink() {
  function handleClick(e: { preventDefault: () => void }) {
    e.preventDefault();
    console.log('The link was clicked.');
  }
}

export default function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 750,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const slides = [
    {
      title: 'Selamat Datang di Pamakarya',
      description: 'Menyediakan layanan renovasi gedung dan perkantoran terbaik.',
      image: '/images/selamat-datang-pamakarya.webp',
    },
    {
      title: 'Jasa Konstruksi Terbaik',
      description: 'Kami menyediakan jasa konstruksi profesional dan berkualitas.',
      image: '/images/jasa-konstruksi-terbaik.webp',
    },
    {
      title: 'Jasa Bengkel Las',
      description: 'Layanan Jasa Bengkel Las untuk melayani jasa pembuatan kanopi, pagar, railing tangga serta teralis dengan berbagai bahan mulai dari besi hingga stainless.',
      image: '/images/jasa-bengkel-las.webp',
    },
    {
      title: 'Desain Interior Modern',
      description: 'Layanan desain interior untuk menciptakan ruang kerja yang nyaman.',
      image: '/images/desain-interior-modern.webp',
    },
  ];

  return (
    <div className="relative">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative h-[80vh] bg-cover">
            <motion.div
              className="text-center text-white flex flex-col justify-center items-center h-[80vh] z-10" style={{ backgroundImage: `url(${slide.image})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: '25' }}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="absolute inset-0 bg-black opacity-50"></div>

              <h1 className="text-4xl font-bold drop-shadow-md">{slide.title}</h1>
              <p className="mt-4 text-lg max-w-lg drop-shadow-md">{slide.description}</p> 

              <motion.button
                
                onClick={ActionLink}
                className="mt-8 bg-gradient-to-r from-blue-800 to-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 shadow-md z-50"
                whileHover={{ scale: 1.02 }}
              >
                Hubungi Kami
              </motion.button>
            </motion.div>
          </div>
        ))}
      </Slider>
    </div>
  );
}


