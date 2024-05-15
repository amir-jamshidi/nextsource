import React from 'react'

interface PlanProps {
    params: { planID: string }
}

const page = ({ params: { planID } } : PlanProps) => {
    
    return (
        <div>page</div>
    )
}

export default page