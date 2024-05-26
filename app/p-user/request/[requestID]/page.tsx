import React from 'react'

interface ShowRequestProps {
  params: { requestID: string }
}

const page = ({ params: { requestID } }: ShowRequestProps) => {



  return (
    <div>page</div>
  )
}

export default page