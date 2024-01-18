import React from "react";
import ReactDOM from "react-dom/client";
import { MapsApp } from "./MapsApp";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoibWVyY2hhbmYiLCJhIjoiY2xxcjl6bHpjNGhoOTJtcXd2MDFqcXlhdCJ9.NhCT3a2U_DmwM4CPbL38Bw";

if (!navigator.geolocation) {
  alert("Tu navegador no tiene geolocalizacion");
  throw new Error("Tu navegador no tiene geolocalizacion");
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
);
