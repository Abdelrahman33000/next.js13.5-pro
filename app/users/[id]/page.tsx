import React from 'react'

interface Props{
    params:{id:number}
}
// props.params
const UserDetailsPage = ({params:{id}}:Props) => {
  return (
    <div>
      User Detail Page {id}
    </div>
  )
}

export default UserDetailsPage
