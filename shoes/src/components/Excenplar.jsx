
import { ChooseSize } from "./ChooseSize";
import { useState } from "react";
export function Excenplar({ img, name, prize, info, onClickHandler, id }) {
  const [selectedSize, setSelectedSize] = useState("")
  const [showWarning, setShowWarning] = useState(false)

  const handleSizeSelect = (size) => {
    setSelectedSize(size)
    setShowWarning(false)
  };

  function onClickH() {
    if (!selectedSize) {
      setShowWarning(true)
      setTimeout(() => setShowWarning(false), 2500)
      return null
    }
    onClickHandler({
      name,
      prize,
      selectedSize,
      color: info.color,
      id
    });
  }
  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={img}
          style={{ width: "600px", height: "600px", margin: "30px" }}
          alt={name}
        />
        <div
          style={{
            fontSize: "35px",
            marginLeft: "400px",
            marginTop: "30px",
            color: "black",
          }}
        >
          <p style={{ fontSize: "50px", fontWeight: "bold", color: "skyblue" }}>
            {name}
          </p>
          <p>

            Size : {" "}
            {info.size.map((size, i) => {
              if (i !== info.size.length - 1) return size + ",";
              else return size;
            })}
          </p>
          <p>Color : {info.color}</p>
          <p> Prize : {prize}</p>
          <p>
            Durable construction, comfortable Nike Air cushioning and grippy
            outsoles make the AF-1 an everyday fave. We added a hint of sparkle
            to this pair for style that shines. Colour Shown: Light Iron
            Ore/White/Black/Light Iron Ore Style: FZ1021-001 Country/Region of
            Origin: Indonesia
          </p>
        </div>
      </div>
      <ChooseSize arr={[info]} onSizeSelect={handleSizeSelect} />
      <div style={{ position: "relative", display: "inline-block" }}>
      <button onClick={onClickH} >
        Choose size and Add to card
      </button>
      {showWarning && (
          <div
            style={{
              position: "absolute",
              top: "-65px",    
              right: "-205px",  
              width: "220px",
              height: "60px",
              backgroundColor: 'grey',
              color: "black",
              fontSize: "22px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "8px",
              border:"1px solid",
              boxShadow: "0 0 5px rgba(0,0,0,0.2)",
              zIndex: 10
            }}
          >
            Choose size!
          </div>
        )}
       </div>
    </>
  );
}
