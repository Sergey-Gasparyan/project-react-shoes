import { data } from "./dataa"
import { Link } from 'react-router-dom';
import "./Alleyy.css"

export default function Alleyy () {
   return <>
    <h1 className="sals-name"> Sals</h1>
   <div className="container">
      <h3 style={{color:"black" ,fontSize:"40px" , marginLeft:"40px" ,marginRight:"40px" ,textAlign: "center",textShadow: "2px 2px 5px rgb(96, 91, 91)"}}>Here are some of our featured footwear collections. Each pair is carefully selected to provide both comfort and style. Explore our range of shoes, from casual to formal, and find the perfect pair for every occasion. Our models represent the latest trends and are crafted with high-quality materials, ensuring durability and comfort.</h3>   
    {data.map(el => {
    return <div key={el.id} className="div-alley">
        <img style={{width: '400px',height : '330px' , objectFit: 'cover'}} src={el.img} alt="nkar"></img> 
        <div style={{fontSize:"30px",color :"grey"}}>{el.name}</div>
        <div style={{fontSize:"20px" , color:"red"}}>{el.prize}</div>
        <Link to={"/" + el.id}>Read more</Link>
    </div>
   })
}
   </div>
   </>
}