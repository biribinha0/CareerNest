"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from "react";
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import './Carrossel.css';

export default function CarrosselEmpresas() {

  const [empresas, setEmpresas] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const API_URL = 'http://localhost:3001';
      const response = await fetch(`${API_URL}/empresas`);
      const empresas = await response.json();
      setEmpresas(empresas);
    };

    fetchImages();
  }, []);

  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={10}
      speed={3000}
      slidesPerView={4}
      autoplay={{ delay: 0, disableOnInteraction: false }}
      loop={true}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        }
      }}
    >
      {empresas.map((empresa) => (
        <SwiperSlide key={empresa.id} className="carrossel">
          <div className="d-flex justify-content-center align-items-center p-4">
            <img
              src={empresa.logo}
              className="empresaslogo shadow "
              style={{ backgroundColor:'white', width: 260, height: 260, objectFit: 'cover', borderRadius: '100%' }}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
