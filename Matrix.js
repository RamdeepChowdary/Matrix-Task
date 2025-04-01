import React, { useState } from "react"; import "./App.css";

const Matrix = () => { const size = 3; const [matrix, setMatrix] = useState( Array(size * size).fill("white") ); const [clickOrder, setClickOrder] = useState([]);

const handleClick = (index) => { if (matrix[index] === "white") { const newMatrix = [...matrix]; newMatrix[index] = "green"; setMatrix(newMatrix); setClickOrder([...clickOrder, index]); }

if (clickOrder.length === size * size - 1) {
  changeToOrange();
}

};

const changeToOrange = () => { clickOrder.forEach((index, i) => { setTimeout(() => { setMatrix((prevMatrix) => { const newMatrix = [...prevMatrix]; newMatrix[index] = "orange"; return newMatrix; }); }, (i + 1) * 500); }); };

return ( <div className="matrix"> {matrix.map((color, index) => ( <div key={index} className="box" style={{ backgroundColor: color }} onClick={() => handleClick(index)} ></div> ))} </div> ); };

export default Matrix;