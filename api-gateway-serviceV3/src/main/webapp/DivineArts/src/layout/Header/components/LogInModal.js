import { Fragment , useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ArrowRightIcon } from '@heroicons/react/solid'
import { AiOutlineUser } from "react-icons/ai";

const LogInModal = ({ openSignin, setOpenSignin, switchModal }) => {

    let completeButtonRef = useRef(null)

    return (
        <Transition appear show={openSignin} as={Fragment} unmount={true}>
            <Dialog
                as="div"
                className="fixed inset-0 z-50 overflow-y-auto pr-0"
                onClose={setOpenSignin}
                initialFocus={completeButtonRef}
            >
                <div className="px-6 text-center">
                    {/* Dialog Overlay */}
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span
                        className="inline-block h-screen align-middle"
                        aria-hidden="true"
                    >
                        &#8203;
                    </span>
                    {/* Dialog Content */}
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <div className="inline-block w-full max-w-lg px-10 py-4 h-85vh overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                            <AiOutlineUser className="w-20 h-20 text-yellow-500 font-thin mx-auto" />
                            <Dialog.Title
                                as="h3"
                                className="mt-2 text-2xl font-medium leading-8 text-gray-900 text-center tracking-wider mx-8"
                            >
                                Connexion à mon compte utilisateur
                            </Dialog.Title>
                            <form className="mt-9" action="#" method="POST">
                                <input type="hidden" name="remember" defaultValue="true" />
                                <div className="rounded-md shadow-sm space-y-4">
                                    <div className="">
                                        <label htmlFor="email-address" className="sr-only">
                                            Address Email
                                        </label>
                                        <input
                                            id="email-address"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            required
                                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-yellow-700 focus:border-yellow-700 focus:z-10 sm:text-sm"
                                            placeholder="Votre Email"
                                        />
                                    </div>
                                    <div className="">
                                        <label htmlFor="password" className="sr-only">
                                            Mot de passe
                                        </label>
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            autoComplete="current-password"
                                            required
                                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-yellow-700 focus:border-yellow-700 focus:z-10 sm:text-sm"
                                            placeholder="Votre mot de passe"
                                        />
                                    </div>
                                </div>

                                <div className="mt-4 flex items-center justify-between">
                                    <div className="flex items-center">
                                        <input
                                            id="remember-me"
                                            name="remember-me"
                                            type="checkbox"
                                            className="h-5 w-5 text-yellow-600 focus:ring-yello-500 border-gray-300 rounded"
                                        />
                                        <label htmlFor="remember-me" className="ml-2 block text-sm font-medium text-gray-900">
                                            Rester connecté(e)
                                        </label>
                                    </div>
                                </div>

                                <div className="mt-10">
                                    <button
                                        type="submit"
                                        className="group uppercase relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-dark hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-600"
                                    >
                                        Se Connecter
                                        <span className="absolute right-3 inset-y-0 flex items-center pl-3">
                                            <ArrowRightIcon className="h-5 w-5 text-yellow-600 group-hover:text-dark" aria-hidden="true" />
                                        </span>

                                    </button>
                                    <div className="w-64 bg-black mt-7 mb-5 mx-auto border"></div>
                                    <div className="text-sm text-center">
                                        <p>
                                            Vous n'avez pas encore de compte ?
                                        </p>
                                        <a ref={completeButtonRef} href="#" className="font-medium text-dar underline uppercase" onClick={() => {
                                            setOpenSignin(false);
                                            setTimeout(()=>switchModal(true),100);
                                        }}>
                                            inscrivez-vous
                                        </a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    )
}

export default LogInModal
