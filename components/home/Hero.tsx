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
      className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 cursor-pointer bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-all"
      onClick={onClick}
    >
      <IoIosArrowForward className="text-white text-3xl" />
    </div>
  );
}

function PrevArrow({ onClick }: ArrowProps) {
  return (
    <div
      className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 cursor-pointer bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-all"
      onClick={onClick}
    >
      <IoIosArrowBack className="text-white text-3xl" />
    </div>
  );
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
          <div key={index} className="relative h-[80vh] bg-cover bg-center" style={{ backgroundImage: `url(${slide.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <motion.div
              className="container mx-auto text-center text-white flex flex-col justify-center items-center h-full z-10"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-4xl font-bold">{slide.title}</h1>
              <p className="mt-4 text-lg max-w-lg">{slide.description}</p>
              <motion.button
                className="mt-8 bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700"
                whileHover={{ scale: 1.1 }}
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
