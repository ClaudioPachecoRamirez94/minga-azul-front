export default function Carousel() {
    return (
      <>
        <div className="flex justify-center mb-8 mt-10 pt-10 xsm:hidden">
          <div className="bg-cover bg-gradient-to-r from-[#4338CA] to-[#5E52F3] flex xsm:hidden w-[90vw] h-[25vh] justify-around rounded-lg gap-1">
            <div className="w-10 self-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF80" viewBox="0 0 24 24" strokeWidth=".5" stroke="currentColor" className="w-12 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <img className="self-center sm:h-[20vh] sm:w-30 sm:mb-8 lg:mb-14 md:h-48 md:mb-10 lg:h-80 " src="/images/deku_carousel.png" alt="characther_carousel" />
            <img className="self-center sm:h-[25vh] sm:w-30 sm:mb-8 lg:mb-14 md:h-48 md:mb-10 lg:h-80 pb-5" src="/images/cover_carousel.png" alt="cover_carousel" />
            <div className="flex-col sm:mt-12 lg:mt-16 md:w-40  lg:w-80">
              <h4 className="text-white sm:text-lg text-2xl">Shonen</h4>
              <p className="text-white sm:w-40 xl:w-80 text-xs">Is the manga that is aimed at adolescent boys. They are series with large amounts of action, in which humorous situations often occur. The camaraderie between members of a collective or a combat team stands out.</p>
            </div>
            <div className="w-10 self-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF80" viewBox="0 0 24 24" strokeWidth=".5" stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>
      </>
    )
  }
  
  