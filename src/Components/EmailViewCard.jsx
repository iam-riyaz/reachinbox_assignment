import React from 'react'

function EmailViewCard() {
  return (
    <div>
        <div className='h-auto w-full border rounded border-[#dbdbdb] dark:border-[#545454cb] dark:bg-[#101010] bg-[#fafafa] my-4 '>
            <div className='px-[16px] py-[12px]'>
             {/*sender and reciever details  */}
            <div className='w-full h-[75px] mb-[8px]'>

                {/* subject and time date */}
                <div className='flex justify-between w-full'>
                    <p className='font-semibold text-sm'>Subject of Email</p>
                    <p className='text-sm text-[#6f6e6ec6]'>25th March 2024, 03:40PM</p>

                </div>
                  {/* sender & reciever details */}
                <div className='dark:dark:text-[#aeaeae] text-[#637381] text-sm '>
                     {/* from */}
                    <div className='leading-[25px] tracking-wider'>
                    <span>From:</span> <span>riyaz@gmail.com</span>
                    </div>
                    {/* to */}
                    <div className='leading-[25px] tracking-wider'>
                        <span>To:</span> <span>riyaztestingonlin@gmail.com</span>
                    </div>

                </div>

            </div>

            {/* main body content */}
            <div className='mt-[8px]' >

                <div className=' text-sm dark:text-[#e1e0e0] text-[#172b4d]' dangerouslySetInnerHTML={{
                    __html:"<p>Hi Mitrajit,</p><p>Just wondering if you&rsquo;re still interested.</p><p>Regards,<br/>Shaw Adley</p><p>6KG634E practicecowboy</p>"
                }}>

                </div>
                

            </div>
            </div>

        </div>
    </div>
  )
}

export default EmailViewCard