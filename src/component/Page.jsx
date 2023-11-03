import React, { useState } from "react";

const Page = () => {
  const [inputan, setInputan] = useState("");
  const [prima, setPrima] = useState([]);

  const handleSubmit = (inputan) => {
    let x = inputan * 10;
    let array = [];
    let bilprima = [];
    for (let counter = 2; counter <= x; counter++) {
      var notPrime = false;
      for (let i = 2; i <= counter; i++) {
        if (counter % i === 0 && i !== counter) {
          notPrime = true;
        }
      }
      if (notPrime === false) {
        array = [...array, counter];
      }
    }

    for (let i = 0; i < inputan; i++) {
      bilprima = [...bilprima, array[i]];
      setPrima(bilprima);
    }
  };
  return (
    <div className="page">
      <label>Input </label>
      <input
        type="number"
        value={inputan}
        onChange={(e) => setInputan(e.target.value)}
      />
      <button
        onClick={() => {
          handleSubmit(inputan);
        }}
      >
        Cetak
      </button>
      <div>
        <label htmlFor="">Hasil : </label>
        {prima.map((angka, index) => (
          <span key={index}>{angka},</span>
        ))}
      </div>
    </div>
  );
};

export default Page;
