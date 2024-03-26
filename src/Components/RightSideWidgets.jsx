import React from 'react'
import LeadDetailCard from './LeadDetailCard'
import ActivityCard from './ActivityCard'

function RightSideWidgets() {
  return (
    <div>

       <div className='w-[278px]    overflow-y-scroll no-scrollbar'  style={{height: "calc(100vh - 64px)"}} >
          
          <div >
          <LeadDetailCard/>
          </div>

          <div>
            <ActivityCard/>
          </div>

       </div>

    </div>

  )
}

export default RightSideWidgets