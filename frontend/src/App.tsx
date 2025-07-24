import Header from "./components/Header"
import Home from "./components/Home"
import { Pointer } from "./components/magicui/pointer"

const App = () => {
  return (
    
    <div className="bg-black">
      <Pointer className="z-50"/>
      <Header/>
      <Home/>
    </div>
  )
}

export default App