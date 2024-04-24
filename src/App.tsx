import './App.css'
import Filter from './components/Filter/Filter'
import TicketList from './components/TicketList/TicketList'
import logo from "./assets/logo.png"

function App() {

  return (
    <>
      <div id='logo'>
        <img src={logo} alt="Logo" />
      </div>
      <div className='main'>
        <Filter/>
        <TicketList/>
      </div>
    </>
  )
}

export default App
