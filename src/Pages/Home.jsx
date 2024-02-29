import { Link } from "react-router-dom"

export const Home = () => {
  return (
    <div className='bg-[#111316] h-screen flex justify-center items-center transition-colors duration-700'>
        {/* Card */}

        <div className=" bg-[#252D36] w-[300px] h-[270px] rounded-2xl">
            <header>
                <img src="icon-star.svg" className='p-5' alt="" />

            </header>
            <section className='px-5 '>
                <h1 className='text-white font-semibold my-3'>How did we do?</h1>
                <p className='text-[#959EAB] text-xs leading-4 '>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>

                {/* buttons */}
                <div className='mt-3 text-[#959EAB] text-center flex justify-between'>
                    <div className='bg-[#303539] p-1 w-[30px] h-[30px] rounded-full hover:bg-[#fc7514ff] hover:text-white cursor-pointer'><span>1</span></div>
                    <div className='bg-[#303539] p-1 w-[30px] h-[30px] rounded-full hover:bg-[#fc7514ff] hover:text-white cursor-pointer'><span>2</span></div>
                    <div className='bg-[#303539] p-1 w-[30px] h-[30px] rounded-full hover:bg-[#fc7514ff] hover:text-white cursor-pointer'><span>3</span></div>
                    <div className='bg-[#303539] p-1 w-[30px] h-[30px] rounded-full hover:bg-[#fc7514ff] hover:text-white cursor-pointer'><span>4</span></div>
                    <div className='bg-[#303539] p-1 w-[30px] h-[30px] rounded-full hover:bg-[#fc7514ff] hover:text-white cursor-pointer'><span>5</span></div>
                </div>
                <div className='uppercase mt-5 bg-[#fc7514ff] hover:text-[#fc7514ff] hover:bg-white w-full py-1 text-white font-semibold rounded-full text-center cursor-pointer'>
                    <Link to={"send"} className="block">submit</Link>
                </div>
            </section>



        </div>
    </div>
  )
}
