import './App.css'
import BlogPost from './Blogpost'
import Card from './Card'
import DashBoard from './DashBoard'
import Product from './Product'
import Profile from './profile'

function App() {

  return (
    <>
      <h1> Hello React My Name is Syed Irfan</h1>
      <Profile name = "Irfan" age = "21"/>
          

<div>
  <Card>
   <h2> profile  Card </h2>
   <p> Name : Irfan</p>
   <p>This is a card components</p>
    
  </Card>
</div>
 
 <Product Name = "iphone 15 pro max" price = "1,29,000"/>
  <Product Name = "laptop" price = "50,000"/>

<div>
  <BlogPost
  title= "learning React "
  author={'Jordan Walke'}
  content="React is a javascript library for building user interfaced .it is maintained by faced and a community of indiviuals and companies"
  date="october 25 2023"
/>
</div>

<div>
  <DashBoard/>
</div>


</>
  )
}

export default App
