import { useState } from 'react'

type Cert = {
  id: number
  src: string
  title: string
  desc: string
}

const placeholder: Cert[] = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  src: `/src/assets/cert-${i + 1}.png`, // upload images to these paths
  title: `Certification ${i + 1}`,
  desc: `Short description for certification ${i + 1}. Add more details when you upload the image.`,
}))

function Certifications() {
  const [active, setActive] = useState<Cert | null>(null)

  return (
    <div className="mx-auto my-16 w-full max-w-6xl px-1 sm:px-4">
      <h2 className="text-5xl font-bold uppercase text-white md:text-6xl text-center">Certifications</h2>
      <p className="text-5xl font-bold uppercase text-zinc-800 md:text-6xl text-center">Awards</p>

      <div className="mt-8 grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
        {placeholder.map((c) => (
          <button
            key={c.id}
            onClick={() => setActive(c)}
            className="group overflow-hidden rounded-2xl bg-neutral-900 p-3 text-left transition hover:scale-[1.02] focus:outline-none"
            aria-label={`Open ${c.title}`}
          >
            <div className="h-32 w-full overflow-hidden rounded-md bg-neutral-800">
              <img src={c.src} alt={c.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
            </div>
            <div className="mt-3 text-white">
              <p className="font-semibold text-lg">{c.title}</p>
              <p className="text-sm text-neutral-400">{c.desc}</p>
            </div>
          </button>
        ))}
      </div>

      {active && (
        <div className="cert-modal" role="dialog" aria-modal="true" aria-label={active.title} onClick={() => setActive(null)}>
          <div className="cert-modal-dialog" onClick={(e) => e.stopPropagation()}>
            <button className="cert-modal-close" onClick={() => setActive(null)} aria-label="Close">×</button>
            <div className="cert-modal-body">
              <img src={active.src} alt={active.title} className="cert-modal-image" />
              <div className="cert-modal-text">
                <h3 className="text-2xl font-bold text-white">{active.title}</h3>
                <p className="mt-2 text-neutral-300">{active.desc}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Certifications
