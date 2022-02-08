import './App.css'
import Navbar from './components/Navbar'

function App() {
  return (
    <div>
      <Navbar branding='StriveBooks' />
    </div>
  )
}

// <button className='btn btn-danger'>DANGER</button>
// the above way still works
// <Button variant='danger'>DANGER</Button>
// but this is more preferred, this way is more "speaking"
export default App

