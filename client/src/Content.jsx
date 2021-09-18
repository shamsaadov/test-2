import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchResponse, selectAllBreeds } from './redux/features/response'

function Content() {
  const dispatch = useDispatch();
  const breeds = useSelector(selectAllBreeds);
  
  useEffect(() => {
    dispatch(fetchResponse());
    console.log('render')
  }, [dispatch]);
  
  return (
    <div>
      <table style={{ margin: "auto", border: "1px solid #111" }}>
        <thead>
          <tr>
            <td>Заголовок</td>
            <td>Картинка</td>
            <td>Порода</td>
          </tr>
        </thead>
        <tbody style={{ marginTop: 25 }}>
          <tr>
            {breeds.map((item) => {
              return (
                <td>
                  {item.title}
                </td>
              )
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Content;
