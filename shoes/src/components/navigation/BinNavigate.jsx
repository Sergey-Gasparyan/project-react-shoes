import { NavLink } from 'react-router-dom';
import { useState,useEffect } from 'react';

export function BinNavigate({bin,setBin}) {

  const [inputValue,setInputValue] = useState("")
  const [displayedBin, setDisplayedBin] = useState(bin);

  function onClickReduce(id, size) {
    const updated = bin.map(b => {
      if (b.id === id && b.selectedSize === size) {
        return { ...b, count: b.count > 0 ? b.count - 1 : 0 }
      }
      return b
    })
    setBin(updated.filter(b => b.count > 0))
  }
  

  function onClickHandlerDelete (id,size) {
    setBin(bin.filter((b => b.id !== id || b.selectedSize !== size)))
  }

  useEffect(() => {
    setDisplayedBin(
      bin.filter((b) =>
        b.name.toLowerCase().includes(inputValue.toLowerCase())
      )
    )
  }, [bin,inputValue]);

  function onClickFilter (e) {
    setInputValue(e.target.value)
  }

  if(!displayedBin.length && bin.length > 0) return (
    <div style={{backgroundColor:'white',  maxHeight: 'calc(100vh - 200px)', overflowY: 'auto',marginTop:"200px",color :"grey",marginLeft:"70px",width: 'calc(100vw - 200px)',fontSize:"28px"}}>
      <p style={{marginLeft:"30px"}}>Not found that item.</p>
      <button onClick={() => setDisplayedBin(bin)}>Go back to All bin</button>
    </div>
    )

  if (!displayedBin || !displayedBin.length) return <div style={{backgroundColor:'white',  maxHeight: 'calc(100vh - 200px)', overflowY: 'auto',marginTop:"200px",color :"grey",marginLeft:"70px",width: 'calc(100vw - 200px)',fontSize:"28px"}}><p style={{marginLeft:"30px"}}>Your bin is empty </p></div>
  return (
    <div>
      <div style={{display:'flex',justifyContent:"center"}}>
        <input onChange={(e) => onClickFilter(e)} value={inputValue} style={{marginTop:"150px",height:"40px",width:"400px",fontSize:"20px"}} placeholder='What model do you want?'>
        </input> 
      </div>
        <div style={{backgroundColor:'white',color :"grey",marginTop:"50px" ,marginLeft:"30px",marginBottom:"100px",width: 'calc(100vw - 200px)',fontSize:"28px"}}>
          {displayedBin.map((el) => (
            <div style={{display:"flex", paddingLeft: "35px", alignItems:"center"}}>
              <span key={el.id} style={{marginLeft:"0"}}>
                <h2 style={{ color: "black", marginLeft:"-12px",marginBottom:"30px"}}>
              {el.name}
                </h2>
              Price : {el.prize} , count : {el.count}, Size :{" "}
            {el.selectedSize} , Color : {el.color}
              </span>
            <img src={el.img} style={{height:"140px",width:"140px",marginLeft:"100px"}}></img>
            <button  onClick={() => onClickHandlerDelete(el.id,el.selectedSize)} style={{marginLeft:"100px",fontSize:"22px"}}>Delete</button>
            <button style={{fontSize:'22px',margin:'10px'}} onClick={() =>{onClickReduce(el.id,el.selectedSize)}}>Reduce Count</button>
            <NavLink to={`/${el.id}`} style={{marginLeft:"50px"}}>Go back to the Item</NavLink>
          </div>
        ))}
        <div style={{ display: "flex", justifyContent: "flex-end", paddingRight: "50px", paddingBottom: "40px" }}>
          <button onClick={() => setBin([])} style={{ fontSize: "20px" }}>Delete All</button>
        </div>
      </div>
      </div>
  );
}
