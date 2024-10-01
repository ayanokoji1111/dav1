import './App.css'
import Card from './components/card/Card'
import Header from './components/header/Header'

function App() {
  

  return (
    
      <div>
      <Header />
       <Card 
       name={"giorgi"} 
       age={21}
       bg={"red"}
       />
      
       <Card
        name={"gii"} 
        desc={"ramee"}
        bg={"blue"}
        />
       
       <Card 
       name={"giogi"}
       />
      
       <Card 
       name={"gigi"}
       />

      </div>
      
  )
}

export default App
