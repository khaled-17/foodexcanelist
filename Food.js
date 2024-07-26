'use client'
import React, { useState } from 'react'

export default function Food() {

const products=[
  { "name": "بياض بيض", "weight": 300 },
  { "name": "جبن قريش", "weight": 200 },
  { "name": "سمك سالمون", "weight": 120 },
  { "name": "سمك مكرونه", "weight": 120 },
  { "name": "سمك بلطي", "weight": 120 },
  { "name": "سردين", "weight": 120 },
  { "name": "سمك بوري", "weight": 120 },
  { "name": "سمك فيليه", "weight": 120 },
  { "name": "جمبري", "weight": 100 },
  { "name": "كبده", "weight": 130 },
  { "name": "تونه", "weight": 100 },
  { "name": "لحم صدور", "weight": 120 },
  { "name": "کیده دجاج", "weight": 120 },
  { "name": "لحم ارانب", "weight": 100 },
  { "name": "لحم احمر", "weight": 120 },
  { "name": "بيض كامل", "weight": 250 },
  { "name": "لحم وراك", "weight": 100 },
  { "name": "فيتا لايت", "weight": 150 },
  { "name": "فصوص رومي", "weight": 120 },
  { "name": "روس بيف", "weight": 120 }
]



const [selectedFood, setSelectedFood] = useState('');
const [weight, setWeight] = useState(null);

const [wantFood, setWantFood] = useState('');
const [wantweight, setWantWeight] = useState(null);

const [diteFood, setditeFood] = useState('');
const [diteweight, setditeWeight] = useState(null);

const handleChange = (event) => {
    const foodName = event.target.value;
    setSelectedFood(foodName);

    const product = products.find(p => p.name === foodName);
    setWeight(product ? product.weight : null);
};
const handleWant = (event) => {
    const foodName = event.target.value;
    setWantFood(foodName);

    const product = products.find(p => p.name === wantFood);
    setWantWeight(product ? product.weight : null);
};
const handledite = (event) => {
    const foodName = event.target.value;
    setditeFood(foodName);

    const product = products.find(p => p.name === diteFood);
    setditeWeight(product ? product.weight : null);
};
  return (
    
    <div>
           <div className="App">
          
           

  
<div className="form-group">
                <label htmlFor="food-select">اريد أكل                  :</label>
                <select id="food-select" onChange={handleWant}>
                    <option value="">اختر طعاماً</option>
                    {products.map(product => (
                        <option key={product.name} value={product.name}>
                            {product.name}
                        </option>
                    ))}
                </select>
                <h1> {wantFood}</h1>
               
            </div>

 <div className="form-group">
                <label htmlFor="food-select"> بدلا من                  :</label>
                <select id="food-select" onChange={handledite}>
                    <option value="">اختر طعاماً</option>
                    {products.map(product => (
                        <option key={product.name} value={product.name}>
                            {product.name}
                        </option>
                    ))}
                </select>
                 
             </div>
                <h1>{diteFood}</h1>

        </div>
        <div>
            <h1>ادخل الكمية المطلوب ان تاكلها وفقا ل برنامج الدايت من {diteFood}</h1>
            <input v/>
        </div>
    </div>
  )
}
