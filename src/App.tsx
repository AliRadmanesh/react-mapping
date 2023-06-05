import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'
import './App.css'

const IRAN_CENTER: [number, number] = [32.42, 53.68]

function App() {
  return (
      <main>
        <MapContainer center={IRAN_CENTER} zoom={5}>
          <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' />
          <Marker position={IRAN_CENTER}>
            <Popup>
              Hello, IRAN!
            </Popup>
          </Marker>
        </MapContainer>
      </main>
  )
}

export default App
