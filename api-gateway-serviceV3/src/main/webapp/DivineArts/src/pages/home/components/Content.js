const callouts = [
    {
      name: 'Abstraction',
      description: 'Work from home accessories',
      imageSrc: 'https://images.unsplash.com/photo-1484589065579-248aad0d8b13?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=396&q=80',
      imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
      href: '#',
    },
    {
      name: 'Paysage',
      description: 'Journals and note-taking',
      imageSrc: 'https://images.unsplash.com/photo-1578926314433-e2789279f4aa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGFydCUyMHBhaW50JTIwcGF5c2FnZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
      href: '#',
    },
    {
      name: 'Portrait',
      description: 'Daily commute essentials',
      imageSrc: 'https://images.unsplash.com/photo-1580136607986-df0f19794f41?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=417&q=80',
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      href: '#',
    },
  ]
  
  export default function content() {
    return (
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-20 lg:max-w-none">
            <p className="text-center font-semibold text-gray-600 uppercase tracking-wide">Peinture cotemporaine</p>
            <h2 className="text-4xl font-bold text-gray-900 text-center uppercase tracking-tight mb-12">découvrez Le monde de la peinture</h2>
  
            <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="static w-full h-80 bg-grey-100 border-4 shadow-2xl border-gray-900 overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="w-full h-full object-center object-cover p-1"
                    />
                  </div>
                  <p className="text-xl font-bold tracking-wide text-gray-900 text-center mt-1 uppercase">{callout.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  

