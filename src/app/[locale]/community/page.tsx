'use client';
import React, { useEffect, useRef } from 'react';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

const Community = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    // 创建地图实例
    const map = new Map({
      target: mapRef.current, // 绑定到 div
      layers: [
        new TileLayer({
          source: new OSM(), // 使用 OpenStreetMap 瓦片地图
        }),
      ],
      view: new View({
        center: [0, 0], // 经纬度中心点（EPSG:3857）
        zoom: 2, // 初始缩放级别
      }),
    });

    return () => map.setTarget(undefined); // 组件卸载时清理地图
  }, []);

  return (
    <div ref={mapRef} style={{ width: '100%', height: '500px' }} />
  );
};

export default Community;
