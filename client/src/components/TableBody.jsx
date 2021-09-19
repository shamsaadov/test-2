import React from "react";
import { getImageUrl } from "../helpers/getImageUrl";

function TableBody({ loading, dogs, page }) {
  return (
    <tbody>
      {loading ? (
        <tr>
          <td colSpan={4}>
            <div className="text-center p-4">идет загрузка</div>
          </td>
        </tr>
      ) : (
        dogs.map((dog, i) => {
          return (
            <tr key={dog._id}>
              <td>{(page - 1) * 10 + (i + 1)}</td>
              <td>
                <img
                  className="dog-image"
                  src={getImageUrl(dog)}
                  alt={dog.name}
                />
              </td>
              <td>{dog.name}</td>
              <td>{dog.breedId.name}</td>
            </tr>
          );
        })
      )}
    </tbody>
  );
}

export default TableBody;
