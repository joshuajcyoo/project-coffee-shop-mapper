import React, { useRef, useEffect, useState } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import './Map.css';

export default function Map(){
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng] = useState(34.02565032257096);
  const [lat] = useState(-118.28552655004313);
  const [zoom] = useState(14);
  const [API_KEY] = useState(' MmD7LFVgh2IkIeoXY8IH');

  useEffect(() => {
    if (map.current) return;
    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/streets/style.json?key=${API_KEY}`,
      center: [lng, lat],
      zoom: zoom
    });

  });

  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
}