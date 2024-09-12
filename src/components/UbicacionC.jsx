import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "../css/ComponentsCSS/UbicacionC.css";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
const UbicacionC = () => {
  return (
    <>
      <div className="contenedor-mapa">
        <MapContainer
          center={[-26.82414, -65.2226]}
          zoom={16}
          scrollWheelZoom={false}
          className="mapa"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[-26.82414, -65.2226]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </>
  );
};

export default UbicacionC;
