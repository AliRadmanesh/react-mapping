import { MapContainer, TileLayer } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'
import './App.css'

function App() {
  const IRAN_CENTER: [number, number] = [32.42, 53.68]
  return (
      <main>
        <MapContainer center={IRAN_CENTER} zoom={5}>
          <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' />
        </MapContainer>
      </main>
  )
}

export default App
