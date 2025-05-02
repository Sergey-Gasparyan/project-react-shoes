export function ChooseSize({ arr, onSizeSelect }) {
  const handleChange = (e) => {
    onSizeSelect(e.target.value);
  };
  return (
    <>
      <label htmlFor="size"></label>
      <select
        id="size"
        name="size"
        onChange={handleChange}
        defaultValue=""
        style={{
          fontSize: "15px",
          padding: "5px",
          marginLeft:"70px",
          marginRight:"10px",
          minWidth: "120px",
        }}
      >
        <option disabled value="">Choose a size</option>
        {arr.length > 0 &&
          arr[0].size.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
      </select>
    </>
  );
}
