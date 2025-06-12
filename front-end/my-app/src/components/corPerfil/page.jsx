"use client";

import { useEffect, useState, useRef } from "react";
import ColorThief from "color-thief-browser";

export default function Banner({ imageUrl = "/img/empresas/printmais.png" }) {
    const [palette, setPalette] = useState([]);
    const imgRef = useRef();
    const [cores, setCores] = useState({ cor1: '', cor2: 1 })

    useEffect(() => {
        const img = imgRef.current;

        const handleLoad = async () => {
            try {
                const colorThief = new ColorThief();
                const palette = await colorThief.getPalette(img, 2);
                setPalette(palette);
            } catch (error) {
                console.error("Erro ao extrair paleta:", error);
            }
        };

        if (img && img.complete) {
            handleLoad(); 
        } else {
            img.addEventListener("load", handleLoad);
            return () => img.removeEventListener("load", handleLoad);

        }
    }, []);
    console.log(palette)

    useEffect(() => {
        if (palette.length >= 3) {
            const cor1 = `rgb(${palette[0][0]}, ${palette[0][1]}, ${palette[0][2]})`;
            const cor2 = `rgb(${palette[1][0]}, ${palette[1][1]}, ${palette[1][2]})`;
            setCores({ cor1, cor2 });
        }
    }, [palette]);

return (
  <div style={{ position: "relative", height: "250px", marginBottom:"70px" }}>

    <div
      className="w-100 banner-gradient"
      style={{
        height: "100%",
        width: "80%",
        borderRadius: "40px",
        background:
          cores.cor1 && cores.cor2
            ? `linear-gradient(135deg, ${cores.cor1}, ${cores.cor2})`
            : undefined,
      }}
    />

    {/* Logo sobreposta no canto superior esquerdo */}
    <img
      ref={imgRef}
      src={imageUrl}
      crossOrigin="anonymous"
      alt="Logo da empresa"
      style={{
        position: "absolute",
        bottom: "-50px",
        left: "10px", // <-- aqui está a mudança
        width: "120px",
        height: "120px",
        borderRadius: "50%",
        objectFit: "cover",
        boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
      }}
    />
  </div>
);
}