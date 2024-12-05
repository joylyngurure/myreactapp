import React from 'react';
import { Pagination } from 'antd';


const Arrow = () =>{
  return(
  <div className='flex justify-end mb-3'>
    <Pagination  align='end  ' defaultCurrent={1} total={50} />
  </div>
  )
}
export default Arrow