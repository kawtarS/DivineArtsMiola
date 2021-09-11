import { Fragment, useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { Tab, Popover, Transition } from '@headlessui/react'
import { MenuIcon, SearchIcon, ShoppingBagIcon, XIcon, UserIcon, ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/outline'

import navigation from 'data/Navigation'
import Logo from 'assets/logo-white.png'
import Cart from './components/Cart'
import SideBar from './components/Sidebar'
import CreateAccountModal from './components/CreateAccountModal'
import LogInModal from './components/LogInModal'

let artisteNav = navigation.categories.filter((category) => category.id === 'artistes')[0]

const TabItem = ({ name }) => {

    const [active, setActive] = useState(false)

    return (
        <div onClick={() => setActive(true)}>
            <Tab className={({ selected }) => `${selected && setActive(true)} ${!selected && setActive(false)} flex items-center transition ease-in-out duration-300 text-left text-lg text-black  ${active && "text-yellow-700 transform translate-x-6"}`}>
                <ChevronRightIcon className={`h-4 w-4 text-black opacity-0 transition ease-in-out duration-300 ${active && "opacity-100 text-yellow-700"}`} />
                <span>{name}</span>
            </Tab>
        </div>
    )
}


function ClassNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const Header = () => {
    let location = useLocation()

    const [open, setOpen] = useState(false)
    const [transparent, setTransparent] = useState(location.pathname === '/' ? true : false)
    const [openSearch, setOpenSearch] = useState(false)
    const [openCart, setOpenCart] = useState(false)
    const [openSignup, setOpenSignup] = useState(false)
    const [openSignin, setOpenSignin] = useState(false)




    window.addEventListener('scroll', () => {
        if (window.scrollY >= 150) {
            setTransparent(false)
        } else {
            setTransparent(true)
        }
    })



    return (
        <>
            {/* Signup Modal */}
            <CreateAccountModal openSignup={openSignup} setOpenSignup={setOpenSignup} switchModal={setOpenSignin} />

            {/* Signin Modal */}
            <LogInModal openSignin={openSignin} setOpenSignin={setOpenSignin} switchModal={setOpenSignup} />

            {/* Mobile SideBar  */}
            <SideBar open={open} setOpen={setOpen} />


            <header className="z-20 fixed w-full">
                <p className="bg-gray-900 h-8 flex items-center justify-center text-xs font-semibold tracking-wider text-gray-100 px-4 sm:px-6 lg:px-8">
                    LIVRAISON À L’INTERNATIONAL - RETOURS GRATUITS
                </p>
                <div className={`w-full ${!(transparent && location.pathname === '/') ? "bg-gray-900" : ""}`}>
                    <nav aria-label="Top" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
                        <div className="border-b border-gray-200">
                            <div className="h-16 flex justify-between">
                                {/* Hamburger Menu */}
                                <button
                                    type="button"
                                    className="bg-transparent p-2 rounded-md text-white lg:hidden"
                                    onClick={() => setOpen(true)}
                                >
                                    <span className="sr-only">Open menu</span>
                                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                                </button>

                                {/* Logo */}
                                <Link to="/">
                                    <div className="ml-4 flex lg:ml-0">
                                        <a>
                                            <span className="sr-only">Divine Arts</span>
                                            <img className="h-14 md:h-16 w-auto" src={Logo} alt="" />
                                        </a>
                                    </div>
                                </Link>

                                {/* Flyout menus */}
                                <Popover.Group className="hidden lg:mr-14 lg:block lg:self-stretch">
                                    <div className="h-full flex space-x-8">
                                        {navigation.categories.map((category) => (

                                            <Popover key={category.name} className="flex">
                                                {({ open }) => (
                                                    <>
                                                        <div className="relative flex lg:mr-14">
                                                            <Popover.Button
                                                                className={ClassNames(
                                                                    open
                                                                        ? 'border-yellow-200 text-yellow-200'
                                                                        : 'border-transparent text-gray-200 hover:text-gray-300',
                                                                    'relative z-10 flex items-center transition-colors ease-out duration-200 text-md font-medium border-b-2 -mb-px pt-px'
                                                                )}
                                                            >
                                                                {category.name}
                                                                {category.hasOwnProperty("sections") && <ChevronDownIcon className={`ml-1 h-4 w-4 self-center text-white ${open && "text-yellow-200"}`} />}
                                                            </Popover.Button>

                                                        </div>

                                                        <Transition
                                                            as={Fragment}
                                                            enter="transition ease-out duration-200"
                                                            enterFrom="opacity-0"
                                                            enterTo="opacity-100"
                                                            leave="transition ease-in duration-150"
                                                            leaveFrom="opacity-100"
                                                            leaveTo="opacity-0"
                                                        >
                                                            <Popover.Panel className=" max-w-4xl h-80 absolute top-full inset-x-0 mx-auto text-sm text-gray-500">
                                                                {category.id === "oeuvres" &&
                                                                    <Tab.Group vertical>
                                                                        <div className="bg-white grid grid-cols-3 h-full">
                                                                            <div className="bg-gray-100">
                                                                                <Tab.List className="flex flex-col col-span-1 ml-8 mt-8 space-y-1">
                                                                                    {category.sections.map((section) => (
                                                                                        <TabItem name={section.name} />
                                                                                    ))
                                                                                    }
                                                                                </Tab.List>
                                                                            </div>

                                                                            <Tab.Panels className="col-span-2 m-8">
                                                                                {category.sections.map((section) => (
                                                                                    <Tab.Panel className="grid grid-cols-2 ml-7 gap-y-2">
                                                                                        {section.hasOwnProperty("subSections") &&
                                                                                            section.subSections.map((subSection) => (
                                                                                                <div className="">
                                                                                                    <h3 className="text-sm tracking-wide font-medium text-yellow-600 uppercase mb-3">{subSection.name}</h3>
                                                                                                    <div className="space-y-3">
                                                                                                        {subSection.items.map((item) => (
                                                                                                            <div>
                                                                                                                <a href={item.href} className="text-base font-light text-black hover:text-yellow-600">{item.name}</a>
                                                                                                            </div>
                                                                                                        ))}
                                                                                                    </div>
                                                                                                </div>
                                                                                            ))
                                                                                        }
                                                                                    </Tab.Panel>
                                                                                ))}

                                                                            </Tab.Panels>
                                                                        </div>
                                                                    </Tab.Group>
                                                                }
                                                                {category.id === 'artistes' &&
                                                                    <div className="bg-white grid grid-cols-3 h-full">
                                                                        <div className="border-r-2">
                                                                            <div className="m-8 mr-0 space-y-5">
                                                                                {artisteNav.sections.slice(0, 2).map((section) => (
                                                                                    <div className="">
                                                                                        <h3 className="text-sm tracking-wide font-medium text-yellow-600 uppercase mb-3">{section.name}</h3>
                                                                                        <div className="space-y-3">
                                                                                            {section.items.map((item) => (
                                                                                                <div>
                                                                                                    <a href={item.href} className="text-base font-light text-black hover:text-yellow-600">{item.name}</a>
                                                                                                </div>
                                                                                            ))}
                                                                                        </div>
                                                                                    </div>
                                                                                ))
                                                                                }
                                                                            </div>
                                                                        </div>
                                                                        <div className="">
                                                                            <div className="m-6 ml-7">
                                                                                <h3 className="text-sm tracking-wide font-medium text-yellow-600 uppercase mb-3">{artisteNav.sections[2].name}</h3>
                                                                                <div className="space-y-3">
                                                                                    {artisteNav.sections[2].items.map((item) => (
                                                                                        <div>
                                                                                            <a href={item.href} className="text-base font-light text-black hover:text-yellow-600">{item.name}</a>
                                                                                        </div>
                                                                                    ))}
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="bg-gray-100 h-full">

                                                                        </div>
                                                                    </div>
                                                                }
                                                            </Popover.Panel>
                                                        </Transition>
                                                    </>
                                                )}
                                            </Popover>
                                        ))}
                                    </div>
                                </Popover.Group>

                                <div className="flex relative">

                                    {/* Search Icon */}
                                    <div className="" onClick={() => setOpenSearch(true)}>
                                        <a href="#" className="p-2 text-gray-200 hover:text-gray-300">
                                            {/* <span className="sr-only">Search</span> */}
                                            <SearchIcon className="w-6 h-6" aria-hidden="true" />
                                        </a>
                                    </div>

                                    {/* User Icon */}
                                    <div className="ml-2 md:ml-3" onClick={() => setOpenSignup(true)}>
                                        <a href="#" className="group p-2 ">
                                            <UserIcon className="w-6 h-6 text-gray-200 group-hover:text-gray-300" />
                                        </a>
                                    </div>

                                    {/* Cart Icon */}
                                    <div className="flow-root ml-2 md:ml-3 relative" onClick={() => setOpenCart(true)}>
                                        <a href="#" className="group -m-2 p-2">
                                            <ShoppingBagIcon
                                                className="flex-shink-0 h-6 w-6 text-gray-200 group-hover:text-gray-300"
                                                aria-hidden="true"
                                            />
                                            <span className="text-xs font-medium text-gray-700 group-hover:text-gray-800 bg-yellow-200 px-1 rounded-xl absolute top-5 left-4">0</span>
                                        </a>
                                    </div>

                                    {/* Search Container */}
                                    <div className={`flex items-center justify-between py-2 px-3 absolute bottom-3 -right-3 mx-auto text-white rounded-full ${transparent ? "bg-gray-800" : "bg-gray-300 text-black"}  ${openSearch ? "" : "hidden"}`}>
                                        <SearchIcon className={`w-5 h-5 ${!transparent && "text-black"}`} aria-hidden="true" />
                                        <input className={`bg-transparent text-sm focus:outline-none mx-2 ${!transparent && "text-black"}`}
                                            type="text" name="search" placeholder="Tapez ici votre recherche" />
                                        <button type="submit" className="" onClick={() => setOpenSearch(false)}>
                                            <XIcon className={`h-5 w-5 ${!transparent && "text-black"}`} />
                                        </button>
                                    </div>
                                    {/* Cart Container */}
                                    <div className="" >
                                        <Cart open={openCart} setOpen={setOpenCart} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header;
