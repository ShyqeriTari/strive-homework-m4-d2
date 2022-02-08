import './App.css'
import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'
import Welcome from './components/Welcome'
import LatestRelease from './components/LatestRelease'

function App() {
  return (
    <div>
      <MyNav branding='StriveBooks' />
      <Welcome branding='Welcome!' branding2='The best shop on Mars' />
      <LatestRelease />
     < MyFooter />
    </div>
  )
}


export default App

