import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import './Mapbox.css';


mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN || '';

const Mapbox: React.FC = () => {
	const mapContainerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const map = new mapboxgl.Map({
			container: mapContainerRef.current as HTMLDivElement,
			style: 'mapbox://styles/mapbox/streets-v11',
			center: [0, 0], 
			zoom: 2,
			attributionControl: false
		});

		map.addControl(
			new mapboxgl.AttributionControl({
				compact: true 
			})
		);

		return () => map.remove();
	}, []);

	return <div className="map-container" ref={mapContainerRef} />;
};

export default Mapbox;
