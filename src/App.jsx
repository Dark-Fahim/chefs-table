// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Banner from './components/Banner/Banner'
import Header from './components/Header/Header'
import Recipes from './components/Recipes/Recipes'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className='my-12'>
        <Header></Header>
      </div>
      <div className='my-10'>
        <Banner></Banner>
      </div>
      <div className='my-10'>
          <Recipes></Recipes>
      </div>
    </>
  )
}

export default App
