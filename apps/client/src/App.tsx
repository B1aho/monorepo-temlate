import './App.css'
import { Button } from "@repo/ui/button";

function App() {
  return (
    <>
      <div>
        <Button appName='client' />
        <div className='bg-red-500 w-8'></div>
      </div>
    </>
  )
}

export default App
