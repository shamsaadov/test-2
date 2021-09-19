import React, { useState } from "react";

function Breeds({ breeds, loading, find }) {
  const [value, setValue] = useState("");
  const findBreed = () => {
    let arr;
    if (!value) {
      arr = breeds.filter((item) => {
        return item.breedId.name?.toLowerCase().includes(value.toLowerCase());
      });
    } else {
      arr = find.filter((item) => {
        return item.breedId.name?.toLowerCase().includes(value.toLowerCase());
      });

    }
    return arr;
  };
  let bra = findBreed();

  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <div style={{ textAlign: 'center'}} className="form">
        <form action="">
          <input
            type="text"
            placeholder="Search in the breed"
            onChange={(ev) => setValue(ev.target.value)}
            style={{width: 250, height: 25, marginTop: 25, marginBottom: 25}}
          />
        </form>
      </div >
      <table
        style={{
          margin: "auto",
          border: "1px solid #111",
          width: 800,
          textAlign: "center",
          fontSize: 20,
        }}
      >
        <thead>
          <tr>
            <th>#</th>
            <th>Заголовок</th>
            <th style={{ marginLeft: 25, marginRight: 25 }}>Картинка</th>
            <th>Порода</th>
          </tr>
        </thead>
        <tbody style={{ marginTop: 25 }}>
          {bra.map((item, i) => {
            return (
              <tr key={item._id}>
                <td>{i + 1}</td>
                <td>{item.name}</td>
                <td>{item._id}</td>
                <td> {item.breedId.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Breeds;
