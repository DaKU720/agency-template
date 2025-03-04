import { useState } from 'react'
import NavLink from '../atoms/NavLink'

export const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <nav id="nav" className="container mx-auto flex justify-between items-start py-6 px-1 relative">
            <div className="text-2xl text-right font-semibold leading-none tracking-widest ml-8 md:ml-0">
                <a
                    href="/homepage"
                    aria-label="Homepage"
                >
                    YouTube<br/>Digital<br/>Hub
                </a>
            </div>

            {/* Menu desktop */}
            <div className="hidden md:flex space-x-6 items-center" role="navigation">
                <NavLink onClick={() => scrollToSection('about')} label="About" />
                <NavLink onClick={() => scrollToSection('team')} label="Team" />
                <NavLink onClick={() => scrollToSection('services')} label="Services" />
                <NavLink onClick={() => scrollToSection('clients')} label="Clients" />
                <NavLink onClick={() => scrollToSection('')} label="Contact" />
            </div>

            {/* Mobile menu */}
            <div className="md:hidden">
                <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none" aria-label="Toggle menu">
                    <svg className="w-10 h-20 mr-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                              d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            {/* Hamburger menu TODO: hamburger Menu - neeeds rewrite */}
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center md:hidden z-50 transition-opacity duration-300" role="dialog" aria-modal="true">
                    <div className="bg-gray-900 rounded-lg shadow-xl w-5/6 max-w-sm p-8 transform transition-all duration-300 relative">
                        {/* Close button */}
                        <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 focus:outline-none" aria-label="Close menu">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <div className="flex flex-col items-center space-y-4">
                            <NavLink onClick={() => scrollToSection('')} label="About" />
                            <NavLink onClick={() => scrollToSection('')} label="Team" />
                            <NavLink onClick={() => scrollToSection('')} label="Services" />
                            <NavLink onClick={() => scrollToSection('')} label="Clients" />
                            <NavLink onClick={() => scrollToSection('')} label="Contact" />
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navigation
