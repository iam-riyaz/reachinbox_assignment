import React from 'react'
import ThreadTopbar from './ThreadTopbar'

function EmailsViewSection() {
  return (
    <div   >
        <ThreadTopbar/>
        <div className=''>
        <div style={{height:"calc(100vh - 70px - 64px)"}} className='overflow-y-scroll  no-scrollbar px-5 h-full  border-t border-[#dedede] dark:border-[#3b3b3b] '  >

        </div>
        </div>

    </div>
  )
}

export default EmailsViewSection