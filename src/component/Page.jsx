import React, { useState } from "react";

const Page = () => {
  const [inputan, setInputan] = useState(0);
  const [prima, setPrima] = useState([]);

  const handleSubmit = (inputan) => {
    if (inputan > 0) {
      let result = [];
      for (let i = 2; ; i++) {
        let prime = true;
        for (let j = 2; j < i; j++) {
          if (i !== j && i % j === 0) {
            prime = false;
          }
        }
        if (prime) {
          result.push(i);
        }
        if (result.length === parseInt(inputan)) {
          break;
        }
      }
      setPrima(result);
    } else {
      setPrima([]);
    }
  };
  return (
    <div className="page">
      <label>Input </label>
      <input
        type="number"
        onChange={(e) => setInputan(e.target.value)}
        min={"1"}
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
        {prima.map((angka, index) =>
          index === 0 ? (
            <span key={index}>{angka}</span>
          ) : (
            <span key={index}>, {angka}</span>
          )
        )}
      </div>
    </div>
  );
};

export default Page;
