import moment from 'moment'
import { Container } from 'postcss'
import React, { useEffect, useState } from 'react'

function EmailViewCard({data}) {


    

    const [dateTime,setDateTime]= useState(data.createdAt)
    const [emailBody,setEmailBody]= useState(data.body)

    useEffect(()=>{

        setDateTime(moment(data.createdAt).format("D MMMM,YYYY: hh:mm A"))
  

    },[])

  return (
    <div>
        <div className='h-auto w-full border rounded border-[#dbdbdb] dark:border-[#545454cb] dark:bg-[#101010] bg-[#fafafa] my-4 '>
            <div className='px-[16px] py-[12px]'>
             {/*sender and reciever details  */}
            <div className='w-full h-[75px] mb-[8px]'>

                {/* subject and time date */}
                <div className='flex justify-between w-full'>
                    <p className='font-semibold text-sm'>{data.subject}</p>
                    <p className='text-sm text-[#6f6e6ec6]'>{dateTime}</p>

                </div>
                  {/* sender & reciever details */}
                <div className='dark:dark:text-[#aeaeae] text-[#637381] text-sm '>
                     {/* from */}
                    <div className='leading-[25px] tracking-wider'>
                    <span>From:</span> <span>{data.fromEmail}</span>
                    </div>
                    {/* to */}
                    <div className='leading-[25px] tracking-wider'>
                        <span>To:</span> <span>{data.toEmail}</span>
                    </div>

                </div>

            </div>

            {/* main body content */}
            <div className='mt-[8px]' >

                <div className=' text-sm dark:text-[#e1e0e0] text-[#172b4d]' dangerouslySetInnerHTML={{
                    __html:emailBody
                }}>

                </div>
                

            </div>
            </div>

        </div>
    </div>
  )
}

export default EmailViewCard