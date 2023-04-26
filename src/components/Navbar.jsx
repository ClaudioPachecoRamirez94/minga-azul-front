import {useState} from 'react'

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false)
  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  }
    return (
      <>
        <nav className="absolute mt-8 xsm:hidden">
          <div className="flex w-[100vw] justify-center items-center">
            <div className="flex w-4/5 justify-between">
            <button onClick={handleMenuClick}>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" strokeWidth="1.5" stroke="white" className="w-8 h-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
            </div>
            </button>
            
            <div>
              <img className="sm:w-12 md:w-16 lg:w-20" src="/images/logo_navbar.png" alt="logo" />
            </div>
          </div>
          </div>
          
        {showMenu && (
          <aside id="default-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
          <div class="h-full px-3 py-4 overflow-y-auto bg-[#564ae7]">
             <ul class="space-y-2 font-medium">
                <li>
                <button className='text-white' onClick={handleMenuClick}>
                   <svg fill="none" class="w-6 h-6" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg> 
                </button>
                </li>
                <li>
                   <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">                      <span class="ml-3">Home</span>
                   </a>
                </li>
                <li>
                   <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                      <span class="flex-1 ml-3 whitespace-nowrap">Manga</span>
                   </a>
                </li>
                <li>
                   <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                      <span class="flex-1 ml-3 whitespace-nowrap">Logout</span>
                   </a>
                </li>
             </ul>
          </div>
       </aside>
      )}    
        </nav>
      </>
    )
  }
  