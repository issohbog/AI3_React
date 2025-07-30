import './App.css'
import ProductDetail from './Components/ProductDetail'

const App = () => {
  // 🎁 객체 추가
  const product = {
    id       : "p0001",
    name     : "반팔 티셔츠",
    price    : 32000,
    quantity : 1,
    img      : "http://i.imgur.com/1vpSkbW.png"
  }

  return (
    <>
      <ProductDetail product={ product } />
    </>
  )
}

export default App