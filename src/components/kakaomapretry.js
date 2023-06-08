"use client";
import React, { useEffect, useRef } from "react";

export function Kakao() {
  const containerRef = useRef(null);
  useEffect(() => {
    const { kakao } = window;
    console.log("DOES KAKAO EXIST?", kakao);
    if (!containerRef.current || !kakao) return;
    const container = containerRef.current;
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);
  }, [containerRef.current]);

  return (
    <div
      ref={containerRef}
      id="map"
      style={{ width: "500px", height: "500px" }}
    ></div>
  );
}
