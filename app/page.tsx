import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Camera, Check, Clock3, Mail, MapPin, Phone, ShieldCheck, Star } from 'lucide-react'
import { EstimateForm } from '@/components/estimate-form'
import { Button } from '@/components/ui/button'

const services = [
  { title: 'Hardwood', text: 'Timeless natural flooring, installed with precision for a finish that lasts.', image: '/images/refinished-floor.png' },
  { title: 'Vinyl', text: 'Durable, low-maintenance flooring built for busy homes and commercial spaces.', image: '/images/vinyl-floor.png' },
  { title: 'Laminate', text: 'Beautiful wood-look flooring that balances everyday performance and value.', image: '/images/laminate-floor.png' },
]

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden">
      <header className="border-b border-border bg-background/95">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
          <Link href="#top" className="flex items-center gap-3" aria-label="Forest W Floors home">
            <Image src="/forest-w-floors-logo.png" alt="Forest W Floors logo" width={48} height={48} className="size-12 rounded-lg" priority />
            <div className="flex flex-col leading-none">
              <span className="font-sans text-lg font-bold tracking-tight">FOREST W FLOORS</span>
              <span className="mt-1 text-xs font-medium text-muted-foreground">Custom floors. Exceptional finish.</span>
            </div>
          </Link>
          <nav className="hidden items-center gap-7 text-sm font-medium md:flex" aria-label="Main navigation">
            <Link href="#services" className="transition-colors hover:text-primary">Services</Link>
            <Link href="#about" className="transition-colors hover:text-primary">About</Link>
            <Button render={<Link href="#estimate" />}>Free estimate</Button>
          </nav>
          <Button size="icon" variant="outline" render={<a href="tel:+18624238763" aria-label="Call Forest W Floors" />} className="md:hidden">
            <Phone />
          </Button>
        </div>
      </header>

      <section id="top" className="relative bg-foreground text-background">
        <div className="mx-auto grid min-h-[680px] max-w-7xl lg:grid-cols-[1.02fr_0.98fr]">
          <div className="flex flex-col justify-center px-5 py-20 lg:px-8 lg:py-28">
            <p className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              <MapPin className="size-4" aria-hidden="true" /> NY · NJ · Long Island
            </p>
            <h1 className="max-w-3xl text-balance font-sans text-5xl font-extrabold leading-[1.02] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              Floors made to be lived on. Crafted to stand out.
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-background/75">
              Flawless installation and refinishing for hardwood, vinyl, and laminate floors—delivered by a team that treats your space like our own.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" render={<Link href="#estimate" />} className="h-12 bg-accent px-6 text-base text-accent-foreground hover:bg-accent/90">
                Get a free estimate <ArrowRight data-icon="inline-end" />
              </Button>
              <Button size="lg" variant="outline" render={<a href="tel:+18624238763" />} className="h-12 border-background/25 bg-transparent px-6 text-base text-background hover:bg-background/10 hover:text-background">
                <Phone data-icon="inline-start" /> (862) 423-8763
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-background/75">
              {['Residential & commercial', 'Competitive pricing', 'Quality workmanship'].map((item) => (
                <span key={item} className="flex items-center gap-2"><Check className="size-4 text-accent" aria-hidden="true" />{item}</span>
              ))}
            </div>
          </div>
          <div className="relative min-h-[420px] lg:min-h-full">
            <Image src="/images/hardwood-installation.png" alt="Professional installing a natural hardwood floor" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" priority />
            <div className="absolute inset-x-5 bottom-5 bg-background p-5 text-foreground shadow-xl sm:max-w-xs lg:inset-x-auto lg:bottom-8 lg:left-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Free estimate</p>
              <p className="mt-2 text-lg font-bold">Tell us about your space. We&apos;ll help you find the right floor.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex max-w-2xl flex-col gap-4">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">What we do</p>
            <h2 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">The right floor for every kind of space.</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">From first board to final detail, our team delivers a clean, precise installation and a result you&apos;ll be proud to live with.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="group overflow-hidden border border-border bg-card">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={service.image} alt={`${service.title} flooring project by Forest W Floors`} fill className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <div className="flex flex-col gap-3 p-6">
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                  <p className="leading-relaxed text-muted-foreground">{service.text}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-6 grid gap-4 border border-border bg-muted p-6 sm:grid-cols-3">
            {['New floor installation', 'Sanding & refinishing', 'Repairs & replacements'].map((item) => (
              <p key={item} className="flex items-center gap-3 font-semibold"><Check className="size-5 text-primary" aria-hidden="true" />{item}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-foreground py-10 text-background" aria-label="Company highlights">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 text-center lg:grid-cols-4 lg:px-8">
          {[
            ['500+', 'Projects completed'],
            ['15+', 'Years of experience'],
            ['4.9', 'Customer rating'],
            ['100%', 'Price match guarantee'],
          ].map(([value, label]) => (
            <div key={label} className="flex flex-col gap-1">
              <p className="text-3xl font-extrabold text-accent sm:text-4xl">{value}</p>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-background/65">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="bg-muted py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">About Forest W Floors</p>
              <h2 className="mt-4 text-balance text-4xl font-bold tracking-tight sm:text-5xl">Experience you can see in every detail.</h2>
            </div>
            <div className="flex flex-col gap-5 text-lg leading-relaxed text-muted-foreground">
              <p>With more than 15 years of experience and over 500 completed projects, we transform residential and commercial spaces with durable flooring tailored to your taste and lifestyle.</p>
              <p>Our customer-first approach, uncompromising quality, and competitive pricing make the process straightforward—from choosing the right material to enjoying the finished room.</p>
              <p className="font-semibold text-foreground">Bring us a written quote. We&apos;ll work to beat it without compromising the result.</p>
            </div>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {[
              { icon: ShieldCheck, title: 'Built for your space', text: 'We help you select the right material for your traffic, style, maintenance needs, and budget.' },
              { icon: Check, title: 'Complete floor care', text: 'Installation, sanding, refinishing, repairs, replacements, and clean transitions—all handled with care.' },
              { icon: Clock3, title: 'A clear, reliable process', text: 'Honest recommendations, careful preparation, and a professional finish from start to final walkthrough.' },
            ].map(({ icon: Icon, title, text }) => (
              <article key={title} className="border border-border bg-background p-6">
                <Icon className="size-6 text-primary" aria-hidden="true" />
                <h3 className="mt-5 text-xl font-bold">{title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Customer stories</p>
            <h2 className="mt-4 text-balance text-4xl font-bold tracking-tight sm:text-5xl">Trusted in homes across NY, NJ & Long Island.</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { quote: 'The floors came out beautiful. The team was careful, professional, and left everything clean when the work was done.', name: 'Homeowner', location: 'New Jersey' },
              { quote: 'They helped us choose the right flooring for our family and delivered a flawless finish. The whole process was easy.', name: 'Residential client', location: 'Long Island, NY' },
              { quote: 'Our hardwood floors look brand new again. Great attention to detail and excellent communication from start to finish.', name: 'Refinishing client', location: 'New York' },
            ].map((testimonial) => (
              <figure key={testimonial.location} className="flex flex-col justify-between border border-border bg-card p-7">
                <div>
                  <div className="flex gap-1 text-accent" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, index) => <Star key={index} className="size-4 fill-current" aria-hidden="true" />)}
                  </div>
                  <blockquote className="mt-6 text-lg font-medium leading-relaxed">“{testimonial.quote}”</blockquote>
                </div>
                <figcaption className="mt-8 border-t border-border pt-5">
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="estimate" className="bg-primary py-20 text-primary-foreground sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div className="flex flex-col justify-between gap-10">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">Let&apos;s talk floors</p>
              <h2 className="mt-4 text-balance text-4xl font-bold tracking-tight sm:text-5xl">Get your free estimate today.</h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-primary-foreground/75">Share a few details about your project and we&apos;ll help you take the next step.</p>
            </div>
            <address className="flex flex-col gap-4 not-italic">
              <a href="tel:+18624238763" className="flex items-center gap-3 font-semibold"><Phone className="size-5" aria-hidden="true" />(862) 423-8763</a>
              <a href="mailto:forestwfloor@gmail.com" className="flex items-center gap-3 font-semibold"><Mail className="size-5" aria-hidden="true" />forestwfloor@gmail.com</a>
              <p className="flex items-center gap-3"><MapPin className="size-5" aria-hidden="true" />Serving NY, NJ & Long Island</p>
            </address>
          </div>
          <div className="bg-background p-6 text-foreground shadow-2xl sm:p-10">
            <EstimateForm />
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-10 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div className="flex items-center gap-3">
            <Image src="/forest-w-floors-logo.png" alt="" width={44} height={44} className="size-11 rounded-lg" />
            <div><p className="font-bold">FOREST W FLOORS</p><p className="text-sm text-background/60">Custom floors for custom taste.</p></div>
          </div>
          <div className="flex items-center gap-5">
            <a href="https://www.instagram.com/forestwfloors/" target="_blank" rel="noreferrer" aria-label="Forest W Floors on Instagram" className="transition-colors hover:text-accent"><Camera className="size-5" /></a>
            <a href="mailto:forestwfloor@gmail.com" aria-label="Email Forest W Floors" className="transition-colors hover:text-accent"><Mail className="size-5" /></a>
            <p className="text-sm text-background/60">© {new Date().getFullYear()} Forest W Floors</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
