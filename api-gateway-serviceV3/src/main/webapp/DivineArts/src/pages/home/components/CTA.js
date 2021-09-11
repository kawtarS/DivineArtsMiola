/* This example requires Tailwind CSS v2.0+ */
export default function CTA() {
    return (
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Une oeuvre sur commande ?</span>
            <span className="block text-gray-400">Contactez nous!</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow hover:shadow-lg">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-yellow-100 bg-gray-700 hover:bg-gray-600"
              >
                Découvrire
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow hover:shadow-lg">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-600 bg-white hover:text-gray-600"
              >
                Nous contacter
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
  