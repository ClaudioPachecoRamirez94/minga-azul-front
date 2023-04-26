export default function Navbar() {
    return (
      <>
        <nav className="absolute mt-8 xsm:hidden">
          <div className="flex w-[100vw] justify-center items-center">
            <div className="flex w-4/5 justify-between">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" strokeWidth="1.5" stroke="white" className="w-8 h-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
            </div>
            <div>
              <img className="sm:w-12 md:w-16 lg:w-20" src="/images/logo_navbar.png" alt="logo" />
            </div>
          </div>
          </div>
          
        </nav>
      </>
    )
  }
  