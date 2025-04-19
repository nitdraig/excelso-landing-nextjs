"use client";

import React, { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.rings.min";

interface VantaEffect {
  destroy: () => void;
}

const VantaWaves = (props: any) => {
  const myRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<VantaEffect | null>(null);

  useEffect(() => {
    // Solo inicializa si no existe efecto y ref.current es un div real
    if (!vantaEffect && myRef.current) {
      const effect = NET({
        el: myRef.current, // aquí TS infiere HTMLElement
        THREE, // pásale THREE para que lo use internamente
        color: 0x0,
        backgroundColor: 0xc3c3c3,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        points: 11.0,
        maxDistance: 18.0,
      });
      setVantaEffect(effect);
    }

    return () => {
      vantaEffect?.destroy();
    };
  }, [vantaEffect]);

  return (
    <div
      ref={myRef}
      className="absolute inset-0"
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default VantaWaves;
