import { useEffect } from "react";
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import { useMap } from "react-leaflet";

const LeafletRoutingMachine = ({ currentPosition }) => {
  const map = useMap();
  let DefaultIcon = L.icon({
    iconUrl: "../../public/icons8-en-transit.gif",
    iconSize: [50, 50],
  });
  useEffect(() => {
    var marker1 = L.marker([36.8065, 10.1815], { icon: DefaultIcon }).addTo(
      map
    );

    map.on("click", function (e) {
      L.Routing.control({
        waypoints: [
          L.latLng(currentPosition),
          L.latLng([e.latlng.lat, e.latlng.lng]),
        ],
        lineOptions: {
          styles: [
            {
              color: "blue",
              weight: 8,
              opacity: 0.7,
            },
          ],
        },
        routeWhileDragging: false,
        geocoder: L.Control.Geocoder.nominatim(),
        addWaypoints: false,
        draggableWaypoints: false,
        fitSelectedRoutes: true,
        showAlternatives: true,
      })
        .on("routesfound", function (e) {
          e.routes[0].coordinates.forEach((c, i) => {
            setTimeout(() => {
              marker1.setLatLng([c.lat, c.lng]);
            }, 200 * i);
          });
        })
        .addTo(map);
    });
  }, [currentPosition, map, DefaultIcon]);
  return null;
};

export default LeafletRoutingMachine;
