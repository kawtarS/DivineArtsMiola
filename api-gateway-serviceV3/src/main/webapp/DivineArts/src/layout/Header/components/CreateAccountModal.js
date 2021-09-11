import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ArrowRightIcon } from '@heroicons/react/solid'
import { AiOutlineUserAdd } from "react-icons/ai";

const CreateAccountModal = ({ openSignup, setOpenSignup, switchModal }) => {

    let completeButtonRef = useRef(null)

    return (
        <Transition appear show={openSignup} as={Fragment} unmount={true}>
            <Dialog
                as="div"
                className="fixed inset-0 z-50 overflow-y-auto pr-0"
                onClose={setOpenSignup}
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
                            <AiOutlineUserAdd className="w-20 h-20 text-yellow-500 font-thin mx-auto" />
                            <Dialog.Title
                                as="h3"
                                className="text-2xl font-medium leading-8 text-gray-900 text-center tracking-wider mx-8"
                            >
                                Je crée mon compte sur DIVINE ARTS !
                            </Dialog.Title>
                            <form className="mt-6  space-y-6" action="#" method="POST">
                                <input type="hidden" name="remember" defaultValue="true" />
                                <div className="rounded-md shadow-sm space-y-4">
                                    <div className="">
                                        <label htmlFor="nom-complet" className="sr-only">
                                            Nom Complet
                                        </label>
                                        <input
                                            id="nom-complet"
                                            name="nom"
                                            type="text"
                                            autoComplete="name"
                                            required
                                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-yellow-700 focus:border-yellow-700 focus:z-10 sm:text-sm"
                                            placeholder="Votre Nom Complet"
                                        />
                                    </div>
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

                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <input
                                            id="remember-me"
                                            name="remember-me"
                                            type="checkbox"
                                            required
                                            className="mt-1 h-5 w-5 text-yellow-600 focus:ring-yello-500 border-gray-300 rounded"
                                        />
                                        <label htmlFor="remember-me" className="ml-2 block text-sm font-medium text-gray-900">
                                            En m'inscrivant, j'accepte les <a href="#" className="text-yellow-600"> Conditions Générales d'Utilisation du Site. </a>
                                        </label>
                                    </div>
                                </div>

                                <div className="">
                                    <button
                                        type="submit"
                                        className="group uppercase relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-dark hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-600"
                                    >
                                        Créer un compte
                                        <span className="absolute right-3 inset-y-0 flex items-center pl-3">
                                            <ArrowRightIcon className="h-5 w-5 text-yellow-600 group-hover:text-dark" aria-hidden="true" />
                                        </span>

                                    </button>
                                    <div className="w-64 bg-black mt-7 mb-5 mx-auto border"></div>
                                    <div className="text-sm text-center">
                                        <p>
                                            Vous avez déjà un compte ?
                                        </p>
                                        <a ref={completeButtonRef} href="#" className="font-medium text-dar underline uppercase" onClick={() => {
                                            setOpenSignup(false);
                                            setTimeout(()=>switchModal(true),100);
                                        }}>
                                            connectez-vous
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

export default CreateAccountModal
