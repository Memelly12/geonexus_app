import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import GeoJSONLayer from "./geojsonlayer";
import { useEffect, useState } from "react";
import L from "leaflet";
import LeafletRoutingMachine from "./routingMachine";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";

function AddCurrentLocationMarker({ setPosition }) {
  const map = useMap();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const myIcon = L.icon({
            iconUrl: "../../public/des-ordures.png", // URL de votre icône personnalisée
            iconSize: [50, 50], // Taille de l'icône
            iconAnchor: [17, 35], // Point de l'icône correspondant à la position du marqueur
            popupAnchor: [0, -35], // Point d'où le popup s'ouvre par rapport à l'iconAnchor
          });
          const marker = L.marker([latitude, longitude], {
            icon: myIcon,
          }).addTo(map);
          marker.bindPopup("Vous êtes ici").openPopup();
          map.setView([latitude, longitude], 10);
          setPosition([latitude, longitude]);
        },
        (error) => {
          console.error(
            "Erreur lors de l'obtention de la géolocalisation :",
            error
          );
        }
      );
    } else {
      console.error(
        "La géolocalisation n'est pas supportée par ce navigateur."
      );
    }
  }, [map, setPosition]);

  return null;
}

export function Map({ geoData, myLayerOptions }) {
  const [position, setPosition] = useState([]);
  const [destination, setDestination] = useState(null);
  return (
    <MapContainer
      center={[5.307859820162494, -4.150402880153615]}
      zoom={8}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributeurs'
      />

      <GeoJSONLayer
        data={geoData}
        myLayerOptions={myLayerOptions}
        setDestination={setDestination}
      />
      <LeafletRoutingMachine
        currentPosition={position}
        destination={destination}
      />
      <AddCurrentLocationMarker setPosition={setPosition} />
    </MapContainer>
  );
}
