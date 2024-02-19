import React from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';

class HardinessMap extends React.Component {
  render() {
    const hardinessData = {}; // Charger les données géographiques des zones de rusticité ici

    return (
      <MapContainer> {/* Passer la propriété center correctement */}
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <GeoJSON data={hardinessData}/>
      </MapContainer>
    );
  }
}

export default HardinessMap;
