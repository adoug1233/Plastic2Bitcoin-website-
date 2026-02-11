import { images, img, logoUrl } from '@/lib/images'

function Section({
  id,
  label,
  title,
  children,
  image,
  imageAlt,
  reverse = false,
  dark = false,
}: {
  id: string
  label: string
  title: string
  children: React.ReactNode
  image: string
  imageAlt: string
  reverse?: boolean
  dark?: boolean
}) {
  return (
    <section
      id={id}
      className={`relative py-16 md:py-24 ${dark ? 'bg-bse-navy/60' : ''}`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <p className="section-label text-bse-cyan">{label}</p>
        <h2 className="section-heading mb-8">{title}</h2>
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          <div className={reverse ? 'md:order-2' : ''}>
            <div className="prose prose-invert prose-slate max-w-none text-slate-300 leading-relaxed space-y-4">
              {children}
            </div>
          </div>
          <div
            className={`relative rounded-xl overflow-hidden border border-sky-500/20 shadow-glow-sm ${reverse ? 'md:order-1' : ''}`}
          >
            <img
              src={img(image)}
              alt={imageAlt}
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bse-dark/60 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  )
}

function SectionFullImage({
  id,
  label,
  title,
  children,
  image,
  imageAlt,
}: {
  id: string
  label: string
  title: string
  children: React.ReactNode
  image: string
  imageAlt: string
}) {
  return (
    <section id={id} className="relative py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <p className="section-label text-bse-cyan">{label}</p>
        <h2 className="section-heading mb-6">{title}</h2>
        <div className="prose prose-invert prose-slate max-w-none text-slate-300 leading-relaxed space-y-4 mb-10">
          {children}
        </div>
        <div className="relative rounded-xl overflow-hidden border border-sky-500/20 shadow-glow-sm">
          <img
            src={img(image)}
            alt={imageAlt}
            className="w-full h-72 md:h-[420px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bse-dark/50 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-bse-dark/80 backdrop-blur-md border-b border-sky-500/10">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="font-display font-bold text-lg text-white tracking-tight">
            PLASTIC2BITCOIN
          </span>
          <div className="flex items-center gap-4 md:gap-6">
            <img
              src={logoUrl}
              alt="Blue Sword Energy"
              width={40}
              height={40}
              className="h-8 w-8 md:h-10 md:w-10 object-contain flex-shrink-0"
            />
            <div className="flex gap-6 text-sm">
              <a href="#hero" className="text-slate-400 hover:text-bse-cyan transition-colors">
                Home
              </a>
              <a href="#technology" className="text-slate-400 hover:text-bse-cyan transition-colors">
                Technology
              </a>
              <a href="#partnerships" className="text-slate-400 hover:text-bse-cyan transition-colors">
                Partnerships
              </a>
              <a href="#contact" className="text-slate-400 hover:text-bse-cyan transition-colors">
                Contact us
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="hero"
        className="relative min-h-screen flex flex-col justify-center pt-14 overflow-hidden"
      >
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-bse-blue/10 via-transparent to-bse-dark" />
        {/* Logo: top-right of hero */}
        <div className="absolute top-20 right-6 md:top-24 md:right-10 z-10" style={{ minWidth: 64, minHeight: 64 }}>
          <img
            src={logoUrl}
            alt="Blue Sword Energy logo"
            width={96}
            height={96}
            className="w-16 h-16 md:w-24 md:h-24 object-contain drop-shadow-lg"
          />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 py-20 text-center">
          <p className="text-bse-cyan font-semibold text-sm uppercase tracking-widest mb-4">
            Blue Sword Energy
          </p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6">
            Turning Plastic Waste
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-bse-cyan to-bse-blue">
              Into Bitcoin
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-slate-400 text-lg md:text-xl leading-relaxed mb-12">
            One of the most revolutionary companies on the face of the planet, merging real-world
            energy infrastructure with virtual assets and blockchain technology. We are building a
            system where plastic waste is transformed into energy and converted directly into
            Bitcoin.
          </p>
          <p className="text-slate-500 text-sm md:text-base">
            Our first operational facility is live in Sharjah, UAE 🇦🇪, forming the foundation for
            expansion across Africa, Asia, and the Middle East.
          </p>
        </div>
      </section>

      {/* TEAM */}
      <Section
        id="team"
        label="The Team"
        title="Built by a Global Execution Team"
        image={images.team1}
        imageAlt="Blue Sword Energy team at facility"
      >
        <p>
          Blue Sword Energy was founded by Ashraf Ismaila Yahya, supported by a growing global team
          of over 40 professionals spanning energy operations, engineering, logistics, manufacturing,
          and digital infrastructure.
        </p>
        <p>
          This is not a concept-only project. Our team operates real machines, manages real
          facilities, and executes on the ground, with a clear mission to scale waste-to-energy
          infrastructure globally.
        </p>
      </Section>

      {/* REVOLUTION */}
      <Section
        id="revolution"
        label="The Revolution"
        title="Where Real Assets Meet Virtual Assets"
        image={images.revolution}
        imageAlt="Real assets and virtual assets - oil and Bitcoin"
        reverse
        dark
      >
        <p>
          Blue Sword Energy operates at the intersection of physical infrastructure and digital
          value. We convert plastic and rubber waste into usable energy and reflect that process
          through a virtual asset layer.
        </p>
        <p>
          Plastic, rubber, oil, and electricity are no longer abstract inputs — they are measurable,
          visual, and digitally represented inside our ecosystem.
        </p>
      </Section>

      {/* TECHNOLOGY */}
      <section id="technology" className="relative py-16 md:py-24 bg-bse-navy/40">
        <div className="max-w-6xl mx-auto px-6">
          <p className="section-label text-bse-cyan">The Technology</p>
          <h2 className="section-heading mb-8">
            Plastic to Oil. Electricity to Bitcoin.
          </h2>
          <div className="prose prose-invert prose-slate max-w-none text-slate-300 leading-relaxed space-y-4 mb-12">
            <p>
              Blue Sword Energy operates a closed-loop energy system where plastic and rubber waste
              are converted into oil using advanced thermal conversion technology. The plastic is
              processed in a sealed, oxygen-free environment and transformed into usable fuel
              instead of being burned.
            </p>
            <p>
              The fuel produced is used in industrial generators to create ultra-low-cost
              electricity. That electricity is fed directly into crypto mining infrastructure,
              converting energy into Bitcoin deposited straight into a wallet.
            </p>
            <p>This creates a direct bridge between waste, energy, and digital value.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative rounded-xl overflow-hidden border border-sky-500/20">
              <img
                src={img(images.techBarrels)}
                alt="Plastic to oil - barrels"
                className="w-full h-52 object-cover"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden border border-sky-500/20">
              <img
                src={img(images.techSword)}
                alt="Blue Sword Energy facility - plastic to oil"
                className="w-full h-52 object-cover"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden border border-sky-500/20">
              <img
                src={`${img(images.techMining)}?v=2`}
                alt="Crypto mining infrastructure"
                className="w-full h-52 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ENERGY COST ADVANTAGE */}
      <Section
        id="energy"
        label="Energy Cost Advantage"
        title="Among the Lowest Energy Costs in the Industry"
        image={images.energyCost}
        imageAlt="Operational facility - low cost energy"
      >
        <p>
          By producing fuel from plastic waste, Blue Sword Energy achieves electricity costs as low
          as:
        </p>
        <ul className="list-none space-y-2 text-bse-cyan font-semibold">
          <li>• $0.04 per kWh</li>
          <li>• $0.03 per kWh</li>
          <li>• $0.02 per kWh</li>
        </ul>
        <p>
          The final cost depends on the price paid per ton of plastic feedstock, making this model
          especially powerful in regions with high waste volumes.
        </p>
      </Section>

      {/* CRYPTO MINING */}
      <Section
        id="mining"
        label="Crypto Mining"
        title="Mining Powered by Waste"
        image={images.miningRigs}
        imageAlt="Industrial crypto mining operations"
        reverse
        dark
      >
        <p>
          The electricity produced through our system powers industrial crypto mining operations.
          This allows Blue Sword Energy to convert plastic waste directly into Bitcoin in a
          closed-loop process.
        </p>
        <p className="font-display text-bse-cyan text-lg">
          Waste becomes fuel.
          <br />
          Fuel becomes power.
          <br />
          Power becomes Bitcoin.
        </p>
      </Section>

      <SectionFullImage
        id="mining-layout"
        label="Infrastructure"
        title="Scalable Mining Operations"
        image={images.miningLayout}
        imageAlt="Mining room layout - 180 units"
      >
        <p>
          Our mining infrastructure is designed for scale and efficiency, with dedicated layouts and
          industrial-grade hardware converting waste-derived electricity into Bitcoin.
        </p>
      </SectionFullImage>

      {/* VIRTUAL ASSETS & TOKENIZATION */}
      <Section
        id="tokenization"
        label="Virtual Assets & Tokenization"
        title="Tokenizing the Physical World"
        image={images.tokenization}
        imageAlt="Plastic to oil - tokenization"
      >
        <p>
          Blue Sword Energy is expanding into the virtual asset space by digitally representing
          real-world components of our system.
        </p>
        <p>Planned ecosystem tokens include:</p>
        <ul className="space-y-1 text-bse-cyan">
          <li>• $PLX — Plastic</li>
          <li>• $RBX — Rubber</li>
          <li>• $OILX — Oil</li>
          <li>• $ELX — Electricity</li>
        </ul>
        <p>
          These tokens are designed to visualise the ecosystem, support engagement, and align
          digital infrastructure with physical operations.
        </p>
      </Section>

      {/* GAMIFIED INFRASTRUCTURE */}
      <Section
        id="gamified"
        label="Gamified Infrastructure"
        title="Infrastructure, Visualised for Scale"
        image={images.gamified}
        imageAlt="Containerised crypto mining facility"
        reverse
        dark
      >
        <p>
          We are building a game-style interface and application that allows users to see machines,
          energy flow, mining power, and system expansion visually.
        </p>
        <p>
          Inspired by strategy-based clarity, this platform transforms complex infrastructure into a
          transparent and understandable experience backed by real operations.
        </p>
      </Section>

      {/* GLOBAL EXPANSION */}
      <Section
        id="expansion"
        label="Global Expansion"
        title="Scaling Across Continents"
        image={images.global}
        imageAlt="Team and facility - global expansion"
      >
        <p>
          Blue Sword Energy is preparing to expand operations across Africa, Asia, and the Middle
          East, deploying plastic-to-oil facilities, power generation, and mining infrastructure in
          high-impact regions.
        </p>
        <p>
          Our focus is on scalable deployment, local partnerships, and long-term sustainability.
        </p>
      </Section>

      {/* PARTNERSHIPS */}
      <section id="partnerships" className="relative py-16 md:py-24 bg-bse-navy/60">
        <div className="max-w-6xl mx-auto px-6">
          <p className="section-label text-bse-cyan">Partnerships</p>
          <h2 className="section-heading mb-8">Building With Industry Leaders</h2>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="prose prose-invert prose-slate max-w-none text-slate-300 leading-relaxed space-y-4">
              <p>
                We are actively seeking partnerships with energy companies, crypto mining
                operators, blockchain ecosystems and exchanges, and strategic industrial partners.
              </p>
              <p>
                Our goal is to build a global infrastructure platform that redefines how waste,
                energy, and digital assets interact.
              </p>
              <a
                href={"/" + encodeURIComponent("BSE - CRYPTO MINING PROPOSAL (1).pdf")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-bse-blue/20 text-bse-cyan border border-sky-500/30 hover:bg-bse-blue/30 hover:border-sky-500/50 transition-colors font-semibold"
              >
                Download Crypto Mining Proposal
              </a>
            </div>
            <div className="relative rounded-xl overflow-hidden border border-sky-500/20">
              <img
                src={img(images.partnerships)}
                alt="Blue Sword Energy team"
                className="w-full h-72 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section id="closing" className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-bse-navy/80 to-bse-dark" />
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="section-label text-bse-cyan">From the UAE to the World</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-8">
            Closing Statement
          </h2>
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-6">
            Blue Sword Energy is building a new category of company — one that turns waste into
            energy, energy into Bitcoin, and physical infrastructure into virtual assets.
          </p>
          <p className="font-display text-2xl md:text-3xl text-bse-cyan font-bold">
            This is not the future.
            <br />
            This is happening now.
          </p>
        </div>
        <div className="relative max-w-4xl mx-auto px-6 mt-12">
          <div className="rounded-xl overflow-hidden border border-sky-500/20">
            <img
              src={img(images.closing)}
              alt="Operational facility - happening now"
              className="w-full h-56 md:h-72 object-cover"
            />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative py-16 md:py-24 bg-bse-navy/40 border-t border-sky-500/10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="section-label text-bse-cyan">Contact Us</p>
          <h2 className="section-heading mb-8">Get in touch</h2>
          <p className="text-slate-400 mb-10 max-w-xl mx-auto">
            Follow us and reach out on Instagram, X, or Telegram.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <a
              href="https://www.instagram.com/blueswordenergy?igsh=MWVkMGxjMDh3eDVqeA=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-bse-dark/80 border border-sky-500/30 text-slate-200 hover:bg-bse-blue/20 hover:border-sky-500/50 hover:text-bse-cyan transition-colors font-medium"
            >
              Instagram
            </a>
            <a
              href="https://x.com/blueswordenergy?s=11"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-bse-dark/80 border border-sky-500/30 text-slate-200 hover:bg-bse-blue/20 hover:border-sky-500/50 hover:text-bse-cyan transition-colors font-medium"
            >
              X
            </a>
            <a
              href="https://t.me/plastic2bitcoin"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-bse-dark/80 border border-sky-500/30 text-slate-200 hover:bg-bse-blue/20 hover:border-sky-500/50 hover:text-bse-cyan transition-colors font-medium"
            >
              Telegram
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-sky-500/10 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-display font-bold text-white">PLASTIC2BITCOIN</span>
          <div className="flex items-center gap-4 text-sm">
            <a
              href="https://www.instagram.com/blueswordenergy?igsh=MWVkMGxjMDh3eDVqeA=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-bse-cyan transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://x.com/blueswordenergy?s=11"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-bse-cyan transition-colors"
            >
              X
            </a>
            <a
              href="https://t.me/plastic2bitcoin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-bse-cyan transition-colors"
            >
              Telegram
            </a>
          </div>
          <p className="text-slate-500 text-sm">Blue Sword Energy — Turning Plastic Waste Into Bitcoin</p>
        </div>
      </footer>
    </>
  )
}
