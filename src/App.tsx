import { Routes, Route } from 'react-router-dom'
import HelloName from './widgets/HelloName'
import ClickCounter from './widgets/ClickCounter'

function App() {
  return (
    <Routes>
      <Route path="/hello-name" element={<HelloName />} />
      <Route path="/click-counter" element={<ClickCounter />} />
    </Routes>
  )
}

export default App
