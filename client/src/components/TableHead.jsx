import React, { memo } from "react";

function TableHead() {
  return (
    <thead>
      <tr>
        <th>#</th>
        <th>Картинка</th>
        <th>Заголовок</th>
        <th>Порода</th>
      </tr>
    </thead>
  );
}

export default memo(TableHead);
