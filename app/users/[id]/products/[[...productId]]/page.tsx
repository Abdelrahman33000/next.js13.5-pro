import { useSearchParams } from 'next/navigation';
import React from 'react'
interface Props{
    params: {id:number,productId:string[]};
    searchParams: {sortOrder:string}
}

const UserProductsPage = ({params:{id,productId},searchParams:{sortOrder}}:Props) => {
  return (
    <div>
      UserProducts Page  {id} {productId} {sortOrder}

    </div>
  )
}

export default UserProductsPage
