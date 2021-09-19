import React from 'react'

function Breeds ({breeds, loading}) {
  if(loading){
    return <h1>Loading...</h1>
  }
  return (
    <table style={{ margin: "auto", border: "1px solid #111" }}>
      <thead>
      <th>
        <td>Заголовок</td>
        <td>Картинка</td>
        <td>Порода</td>
      </th>
      </thead>
      <tbody style={{ marginTop: 25 }}>
      {breeds.map((item) => {
        return (
          <tr key={item._id}>
            <td>{item.name}</td>
            <td>{item._id}</td>
            <td> {item.breedId.name}</td>
          </tr>
        );
      })}
      </tbody>
    </table>
  )
}

export default Breeds