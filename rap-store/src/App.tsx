import './App.css'
import Albums from './components/Albums'
import Header from './components/Header'
import { CartContextProvider } from './components/store/CartContext'

function App() {
  return (
    <div className='App'>
      <CartContextProvider>
        <Header />
        <Albums />        
      </CartContextProvider>
    </div>
  )
}

export default App