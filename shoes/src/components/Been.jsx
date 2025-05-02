export function Been({ arr }) {

  return (
    <div>
      <div
        style={{
          color: "grey",
          fontSize: "20px",
          border: "2px solid",
          borderRadius: "2px",
        }}
      >
        {arr.map((el) => (
          <p key={el.id}>
            <span style={{ color: "black", padding: "15px" }}>
              Caracteristics:
            </span>
            Name:{el.name}, Price : {el.prize} , count : {el.count }, Size : {el.selectedSize}
            Color : {el.color}
          </p>
        ))}
      </div>
    </div>
  );
}
