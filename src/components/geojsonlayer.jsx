import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";

function GeoJSONLayer({ data, myLayerOptions, setDestination }) {
  const map = useMap();

  useEffect(() => {
    const layer = L.geoJSON(data, {
      ...myLayerOptions,
      onEachFeature: (feature, layer) => {
        if (myLayerOptions.onEachFeature) {
          myLayerOptions.onEachFeature(feature, layer);
        }
        layer.on("click", () => {
          setDestination([
            feature.geometry.coordinates[1],
            feature.geometry.coordinates[0],
          ]);
        });
      },
    });
    layer.addTo(map);

    return () => {
      map.removeLayer(layer);
    };
  }, [data, map, myLayerOptions, setDestination]);

  return null;
}

export default GeoJSONLayer;
