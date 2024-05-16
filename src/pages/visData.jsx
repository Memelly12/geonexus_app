import { Navbar } from "../components/navbar";
import { Map } from "../components/map";
import { SidebarMenu } from "../components/sidebarMenu";
import { useState, useEffect } from "react";
import L from "leaflet";

import mapData from "../data/geoJson.json";
import dechets from "../data/dechetesana.json";

import "../style/visData.css";

export function VisData() {
  const [selectedOption, setSelectedOption] = useState("pollution1");
  const [geoData, setGeoData] = useState();

  useEffect(() => {
    selectedOption === "pollution1" ? setGeoData(mapData) : setGeoData(dechets);
    console.log(selectedOption);
    console.log(geoData);
  }, [selectedOption, geoData]);
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  function createCustomIcon(feature, latlng) {
    const iconUrl =
      selectedOption === "pollution1"
        ? "../../public/sac-a-ordures.png"
        : "../../public/dechet-toxique.png";
    let myIcon = L.icon({
      iconUrl: iconUrl,
      shadowUrl: "",
      iconSize: [35, 35], // width and height of the image in pixels
      shadowSize: [35, 20], // width, height of optional shadow image
      iconAnchor: [12, 12], // point of the icon which will correspond to marker's location
      shadowAnchor: [12, 6], // anchor point of the shadow. should be offset
      popupAnchor: [0, 0], // point from which the popup should open relative to the iconAnchor
    });
    return L.marker(latlng, { icon: myIcon });
  }
  function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties) {
      layer.bindPopup(feature.properties.start);
    }
  }

  // create an options object that specifies which function will called on each feature
  let myLayerOptions = {
    pointToLayer: createCustomIcon,
    onEachFeature: onEachFeature,
  };

  return (
    <>
      <Navbar />
      <section className="section2">
        <div className="sidebar">
          <SidebarMenu
            selectedOption={selectedOption}
            handleOptionChange={handleOptionChange}
          />
        </div>
        <div className="map">
          <Map geoData={geoData} myLayerOptions={myLayerOptions} />
        </div>
      </section>
    </>
  );
}
