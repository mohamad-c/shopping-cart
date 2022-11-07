import { useContext } from 'react';
import './App.css'
import { ProductContext } from './context/productContext';

function App() {  
  const { data } = useContext(ProductContext);
  console.log(data);
  return (
    <div className="App">
      {
        data?.map((product)=>(
          <p>{product.title}</p>
        ))
      }
    </div>
  )
}

export default App
