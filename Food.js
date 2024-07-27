"use client";
import React, { useState } from "react";
import{products} from './ListFood'
import{typeList} from './ListType'

export default function Food() {
 

  const [selectedType, setSelectedType] = useState("");
  const [weight, setWeight] = useState(null);
  const [note, setNote] = useState(null);


  const [wantFood, setWantFood] = useState("");
  const [wantWeight, setWantWeight] = useState(null);

  const [dietFood, setDietFood] = useState("");
  const [dietWeight, setDietWeight] = useState(null);
  const [result, setResult] = useState(0);

  const [number, setNumber] = useState("");

  const calculateResult = () => {
    const calculatedResult = (number * wantWeight) / dietWeight;
    setResult(calculatedResult);
  };

  const handleInputChange = (event) => {
    setNumber(event.target.value);
  };

  const handleChange = (event, set, setWeight) => {
    console.log("handel change");
    const value = event.target.value;
    set(value);

    const product = products.find((p) => p.name === value);
    setWeight(product ? product.weight : null);


    const type = typeList.find((p) => p.type === value);

console.log(type);
  };


  const handleChangeType = (event, set, setWeight) => {
    console.log("handel change");


    setWeight("")
setNote("")
setWantFood("")
setWantWeight("")
setDietFood("")
setDietWeight("")
setResult("")
setNumber("")

    const value = event.target.value;
    const type = typeList.find((p) => p.type === value);
    
    console.log(type);
    set(type);
  };
  const filteredProducts = products.filter((product) => product.type==selectedType.type);

  return (
    <div>
        <div style={{width:"100%",backgroundColor:"red",display:"flex",flexDirection:"column",justifyContent:"center",alignContent:"center",alignItems:"center"}}>
            <h1>نوع الطعام :</h1>
            <select id="diet-select" onChange={(e) => handleChangeType(e, setSelectedType, setDietWeight)}>
              <option value="">اختر طعاماً</option>
              {typeList.map((product) => (
                <option key={product.name} value={product.name}>
                  {product.name}
                </option>
              ))}
            </select>
            {selectedType.type}
            {note}
           </div>
      <div className="App">
        <div className="flex flex-row justify-between bg-green-300 ">
          <div>
            <h1>بدلا من :</h1>
            <select id="diet-select" onChange={(e) => handleChange(e, setDietFood, setDietWeight)}>
              <option value="">اختر طعاماً</option>
              {filteredProducts.map((product) => (
                <option key={product.name} value={product.name}>
                  {product.name}
                </option>
              ))}
            </select>
            <h1>{dietFood}</h1>
            <h1>{dietWeight}</h1> 
          </div>

          <div>
            <h1>اريد أكل :</h1>
            <select id="want-select" onChange={(e) => handleChange(e, setWantFood, setWantWeight)}>
              <option value="">اختر طعاماً</option>
              {filteredProducts.map((product) => (
                <option key={product.name} value={product.name}>
                  {product.name}
                </option>
              ))}
            </select>

            <h1>{wantFood}</h1>
            <h1>{wantWeight}</h1>
           </div>
        </div>

         <div style={{ textAlign: "center", marginTop: "50px", direction: "rtl",display:"flex",flexDirection:"column",justifyContent:"center",alignContent:"center",alignItems:"center" }}>
          <h1>
            ادخل كمية <strong>{dietFood}</strong> المطلوب ان تاكلها وفقا لبرنامج الدايت من
          </h1>

          <input
            type="number"
            placeholder="ادخل الكمية المكتوبة فى النظام "
            value={number}
            onChange={handleInputChange}
            style={{ padding: "10px", fontSize: "16px", width: "200px",border:"5px solid black" }}
          />
         <button  onClick={calculateResult} style={{ padding: "10px 20px", fontSize: "16px", margin: "10px" ,backgroundColor:"black",color:"white" }}>
          احسب النتيجة
        </button>
        </div>
       {result&& <div id="output" style={{ marginTop: "20px", fontSize: "18px", fontWeight: "bold" }}>
        <h1>وزن الطعام من  <strong>{" "}{wantFood} {"  "}</strong>الذى تفضل ان تاكله بدلا من  <strong>{" "}{dietFood}{" "}</strong> </h1>
          هو : {result} جرام
          <h1> ملحوظة :-  {selectedType.note}</h1>
        </div>}
      </div>
    </div>
  );
}
