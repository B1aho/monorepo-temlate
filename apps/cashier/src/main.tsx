import { StrictMode } from 'react'
import { createRoot } from 'react-dom/cashier'
import './index.css'
import "@repo/ui/styles/global.css";
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
