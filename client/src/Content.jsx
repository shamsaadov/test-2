import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchResponse } from './redux/features/response'
import Pagination from './Pagination'
import Breeds from './Breeds'

function Content() {
  const dispatch = useDispatch();
  const breeds = useSelector(state => state.response.items)
  const loading = useSelector((state => state.response.loading))
  const [currentPage, setCurrentPage] = useState(1)
  const [breedPerPage] = useState(10)

  const lastBreedPage = currentPage + breedPerPage
  const firstBreedPage = lastBreedPage - breedPerPage
  const currentBreedPage = breeds.slice(firstBreedPage, lastBreedPage )
  
  const paginate = pageNumber => setCurrentPage(pageNumber)
  
  useEffect(() => {
    dispatch(fetchResponse());
  }, [dispatch]);

 if (loading){
   return (
     <h1 style={{textAlign: 'center'}}>
       Идет загрузка...
     </h1>
   )
 }else {
   return (
     <div>
      <Breeds
      breeds={currentBreedPage}
      loading={loading}
      />
       <Pagination
       breedPerPage={breedPerPage}
       totalBreeds={breeds.length}
       paginate={paginate}
       />

     </div>
   );
 }
}
// ToDo сделать границу у таблицы . Сделать пагинацию . Сделать поиск . Сделать фильтрацию

export default Content;
