
export const MsjSend = () => {
    return (
      <div className='bg-[#111316] h-screen flex justify-center items-center'>
          {/* Card */}
  
          <div className=" bg-[#252D36] w-[300px] h-[270px] rounded-2xl">
              <header className="flex justify-center">
                  <img src="illustration-thank-you.svg " className='pt-8 w-[120px]' alt="" />
  
              </header>
              <section className='px-5'>
  
                  {/* buttons */}
                  <div className='mt-3 text-[#959EAB] text-center flex justify-center '>
                      <div className='bg-[#303539]  px-2 rounded-full font-light text-[#fc7514ff]'><span className="text-[11px]">You selected 4 out of 5</span></div>
                  </div>
                  <div>
                      <button className='mt-2 w-full py-1 text-lg text-white font-semibold'>Thank you!</button>
                      <p className='text-[#959EAB] text-center text-xs leading-4'>We appreciate you talking the time to give a rating. if you ever need more support, don't hesitate to get in touch!</p>
                  </div>
              </section>
  
  
  
          </div>
      </div>
    )
  }
  