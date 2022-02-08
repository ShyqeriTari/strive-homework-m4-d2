import './App.css'
import MainNavbar from './components/MainNavbar'

function App() {
  return (
    <div>
      <MainNavbar branding='StriveBooks' />
    </div>
  )
}

// <button className='btn btn-danger'>DANGER</button>
// the above way still works
// <Button variant='danger'>DANGER</Button>
// but this is more preferred, this way is more "speaking"
export default App

