import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

L.Icon.Default.imagePath = "https://unpkg.com/leaflet@1.5.0/dist/images/";

function Map() {
  const position = [46.33878, 30.68953];
  return (
    <MapContainer
      style={{ width: "100%", height: "320px" }}
      center={position}
      zoom={13}
      // scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>{position.join(" ")}</Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
