export default function Welcome() {
    return (
      <>
        <div className="flex justify-center xsm:hidden">
          <div className="bg-cover bg-background_index w-[100vw] h-[65vh] sm:bg-center flex items-center justify-center">
            <div>
              <h1 className="text-white md:text-center sm:text-4xl md:text-6xl mb-2">Your favorite comic book store ✨</h1>
              <h4 className="text-white text-xl  sm:flex md:flex sm:justify-center md:justify-center lg:flex mb-2">Explore our catalog to live the adventure of your life</h4>
              <div className="md:flex sm:flex sm:justify-center md:justify-center">
                <button className="rounded-lg bg-gradient-to-r from-[#4338CA] to-[#5E52F3] w-[12vw] h-[5vh] sm:w-[20vw] text-white text-2xl">Let’s go!</button>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
