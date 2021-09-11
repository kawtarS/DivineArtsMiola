import { useState } from 'react'
import PaymentSucessModal from "./PaymentSucessModal";

export default function CheckoutPage() {
	let [openModal, setOpenModal] = useState(false)

	return (
		<>
			<PaymentSucessModal isOpen={openModal} setIsOpen={setOpenModal} />
			<div className="flex h-screen bg-gray-200 items-center justify-center pt-64 mb-32">
				<div className="grid bg-white rounded-lg shadow-xl w-11/12 md:w-9/12 lg:w-1/2">
					<div className="flex justify-center py-4">
						<div className="flex bg-yellow-200 rounded-full md:p-4 p-2 border-2 border-yellow-300">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="32"
								height="32"
								fill="currentColor"
								class="bi bi-cart-check"
								viewBox="0 0 16 16"
							>
								<path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
								<path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
							</svg>
						</div>
					</div>

					<div className="flex justify-center">
						<div className="flex">
							<h1 className="text-gray-600 font-bold md:text-2xl text-xl">
								Finaliser Votre Achat
							</h1>
						</div>
					</div>

					<div className="grid grid-cols-1 mt-5 mx-7">
						<label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
							Nom et Prénom
						</label>
						<input
							className="py-2 px-3 rounded-lg border-2 border-yellow-300 mt-1 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
							type="text"
							placeholder="Jean-Pierre Baptist"
						/>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
						<div className="grid grid-cols-1">
							<label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
								Numéro de tel
							</label>
							<input
								className="py-2 px-3 rounded-lg border-2 border-yellow-300 mt-1 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
								type="tel"
								placeholder="06 XX XX XX XX"
							/>
						</div>
						<div className="grid grid-cols-1">
							<label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
								Email
							</label>
							<input
								className="py-2 px-3 rounded-lg border-2 border-yellow-300 mt-1 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
								type="text"
								placeholder="example@test.com"
							/>
						</div>
					</div>

					<div className="grid grid-cols-1 mt-5 mx-7">
						<label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
							Votre Pays
						</label>
						<select className="py-2 px-3 rounded-lg border-2 border-yellow-300 mt-1 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent">
							<option>Maroc</option>
							<option>France</option>
							<option>Espagne</option>
						</select>
					</div>

					<div className="grid grid-cols-1 mt-5 mx-7">
						<label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
							Votre Ville
						</label>
						<input
							className="py-2 px-3 rounded-lg border-2 border-yellow-300 mt-1 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
							type="text"
							placeholder="Rabat"
						/>
					</div>

					<div className="grid grid-cols-1 mt-5 mx-7">
						<label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold mb-1">
							Ajouter votre photo à la commande
						</label>
						<div className="flex items-center justify-center w-full">
							<label className="flex flex-col border-4 border-dashed w-full h-32 hover:bg-gray-100 hover:border-yellow-300 group">
								<div className="flex flex-col items-center justify-center pt-7">
									<svg
										className="w-10 h-10 text-yellow-400 group-hover:text-yellow-600"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
										></path>
									</svg>
									<p className="lowercase text-sm text-gray-400 group-hover:text-yellow-600 pt-1 tracking-wider">
										Selectionner une photo
									</p>
								</div>
								<input type="file" className="hidden" />
							</label>
						</div>
					</div>

					<div className="flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5">
						<button className="w-auto bg-gray-500 hover:bg-gray-700 rounded-lg shadow-xl font-medium text-white px-4 py-2">
							Annuler
						</button>
						<button className="w-auto bg-yellow-500 hover:bg-yellow-700 rounded-lg shadow-xl font-medium text-white px-4 py-2" onClick={()=>setOpenModal(true)}>
							Envoyer
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
