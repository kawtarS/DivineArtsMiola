import { Fragment, useState } from 'react'
import { XIcon, ChevronRightIcon, ChevronLeftIcon, UserIcon, InformationCircleIcon, PhoneIcon } from '@heroicons/react/outline'
import { Dialog, Transition } from '@headlessui/react'
import { CSSTransition } from 'react-transition-group'

import navigation from 'data/Navigation'
import Logo from 'assets/logo-white.png'

const Menu = ({ setOpen, activeMenu, setActiveMenu }) => {
    return (
        <div className="w-72">
            {/* Main Menu  */}
            <CSSTransition
                in={activeMenu === 'main'}
                timeout={1000}
                classNames='menu-primary'
                unmountOnExit
            >
                <div className="menu w-full">
                    <div className="h-full text-white flex flex-col overflow-y-auto">
                        <div className="px-4 pt-5 pb-2 flex align-center">
                            <button
                                type="button"
                                className="-m-2 p-2 rounded-md inline-flex items-center justify-center"
                                onClick={() => setOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                            <p className="text-sm text-gray-400 mx-auto capitalize">menu</p>
                        </div>

                        <div className="pt-5 py-5">
                            <ul className="text-gray-200 font-light divide-y divide-black divide-opacity-25">
                                <li className="mx-2">
                                    <a href="#" className="p-2 flex justify-between">
                                        Tous les articles
                                    </a>
                                </li>
                                {navigation.categories.map((category) => (
                                    category.id === 'oeuvres' ?
                                        category.sections.map((section) => (
                                            <li className="mx-2">
                                                <a href="#" className="p-2 flex justify-between" onClick={() => setActiveMenu(section.id)}>
                                                    {section.name}
                                                    <ChevronRightIcon className="w-5 h-5" />
                                                </a>
                                            </li>
                                        )) :
                                        <li className="mx-2">
                                            <a href="#" className="p-2 flex justify-between" onClick={() => category.hasOwnProperty("sections") && setActiveMenu(category.id)}>
                                                {category.name}
                                                {category.hasOwnProperty("sections") && <ChevronRightIcon className="w-5 h-5" />}
                                            </a>
                                        </li>
                                ))}
                            </ul>
                        </div>
                        <div className="border-t border-gray-200 py-6 px-4 space-y-6 font-light bg-black">
                            <div className="flow-root ">
                                <a href="#" className="-m-2 p-2 flex align-center">
                                    <UserIcon className="w-5 h-5 mr-2 " />
                                    S'inscrire / Se connecter
                                </a>
                            </div>
                            <div className="flow-root">
                                <a href="#" className="-m-2 p-2 flex align-center">
                                    <InformationCircleIcon className="w-5 h-5 mr-2 " />
                                    A propos de nous
                                </a>
                            </div>
                            <div className="flow-root">
                                <a href="#" className="-m-2 p-2 flex align-center">
                                    <PhoneIcon className="w-5 h-5 mr-2 " />
                                    +212 6 53 85 45 13
                                </a>
                            </div>
                            <div className="flow-root text-center">
                                <a href="#" className="-m-2 p-2 flex justify-center">
                                    <img
                                        className="h-14 w-auto"
                                        src={Logo}
                                        alt=""
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </CSSTransition>

            {/* Secondary menus */}
            {navigation.categories.map((category) => (
                category.hasOwnProperty("sections") &&
                category.sections.map((section) => (
                    <CSSTransition
                        in={activeMenu === (category.id === 'oeuvres' ? section.id : category.id)}
                        timeout={500}
                        classNames="menu-secondary"
                        unmountOnExit
                    >
                        <div className="menu w-full h-full absolute top-0 z-50 bg-dark">
                            <div className="h-full text-white flex flex-col overflow-y-auto">
                                <div className="px-4 pt-5 pb-2 flex">
                                    <button
                                        type="button"
                                        className="-m-2 p-2 rounded-md inline-flex items-center justify-center"
                                        onClick={() => setActiveMenu('main')}
                                    >
                                        <span className="sr-only">Previous menu</span>
                                        <ChevronLeftIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                    <p className="text-sm text-gray-400 mx-auto capitalize">{category.id === 'oeuvres' ? section.name : category.name}</p>
                                </div>

                                <div className="pt-3 py-5">
                                    {category.id === 'oeuvres' ?
                                        (section.subSections.map((subSection) => (
                                            <ul className="text-gray-200 font-light divide-y divide-black divide-opacity-25">
                                                <div className="bg-gray-700 my-2 text-sm">
                                                    <p className="mx-4">{subSection.name}</p>
                                                </div>
                                                {subSection.items.map((item) => (
                                                    <li className="mx-2">
                                                        <a href={item.href} className="p-2 flex justify-between" >
                                                            {item.name}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        ))) :
                                        <ul className="text-gray-200 font-light divide-y divide-black divide-opacity-25">
                                            <div className="bg-gray-700 my-2 text-sm">
                                                <p className="mx-4">{section.name}</p>
                                            </div>
                                            {section.items.map((item) => (
                                                <li className="mx-2">
                                                    <a href={item.href} className="p-2 flex justify-between" >
                                                        {item.name}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>

                                    }
                                </div>
                            </div>
                        </div>
                    </CSSTransition>
                ))
            ))}
        </div >
    )
}


const Sidebar = ({ open, setOpen }) => {

    const [activeMenu, setActiveMenu] = useState('main')


    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog open={open} as="div" onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="transition-opacity ease-linear duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity ease-linear duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>
                <Transition.Child
                    as={Fragment}
                    enter="transition ease-in-out duration-300 transform"
                    enterFrom="-translate-x-full"
                    enterTo="translate-x-0"
                    leave="transition ease-in-out duration-300 transform"
                    leaveFrom="translate-x-0"
                    leaveTo="-translate-x-full"
                >
                    <div className="fixed inset-y-0 w-72 z-40 lg:hidden bg-dark overflow-y-auto">
                        <Menu setOpen={setOpen} activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
                    </div >
                </Transition.Child>
            </Dialog>
        </Transition.Root>
    )
}

export default Sidebar
