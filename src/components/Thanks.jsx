import React from 'react'

function Thanks() {
  return (
    <div
        className="w-screen h-screen bg-fixed bg-no-repeat bg-right-bottom-1 md:bg-center"
        style={{
          backgroundImage: `url('http://dkkit.rometheme.pro/duchess/wp-content/uploads/sites/51/2022/06/chess-set-PBRN2UXa.jpg')`,
        }}
      >
        <div className=" bg-black bg-opacity-60 overflow-y-scroll h-full w-full">
            <div className='flex justify-center mt-52'>
            <div className='text-white font-georgia text-lg md:text-4xl mx-10 md:mx-40'>
                <div>Thank you for your response.</div> 
                <div> Our Coordinators will contact you soon.</div> 

            </div>
            </div>
            

        </div>
      
    </div>
  )
}

export default Thanks