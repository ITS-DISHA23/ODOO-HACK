import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { useFleet } from "../context/FleetContext";

// Fix marker icons
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

function FleetMap() {
  const { vehicles } = useFleet();

  // Demo coordinates around Bhubaneswar
  const locations = [
    [20.2961, 85.8245],
    [20.3150, 85.8350],
    [20.2850, 85.8100],
    [20.3050, 85.8500],
    [20.3200, 85.8150],
  ];

  return (
    <div className="bg-white rounded-xl shadow p-4 mt-8">
      <h2 className="text-xl font-bold mb-4">
        Fleet Live Map
      </h2>

      <MapContainer
        center={[20.2961, 85.8245]}
        zoom={12}
        style={{
          height: "450px",
          width: "100%",
          borderRadius: "12px",
        }}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {vehicles.map((vehicle, index) => (
          <Marker
            key={vehicle.id}
            position={locations[index % locations.length]}
          >
            <Popup>
              <div>
                <strong>{vehicle.name}</strong>
                <br />
                {vehicle.registration}
                <br />
                Status: {vehicle.status}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default FleetMap;