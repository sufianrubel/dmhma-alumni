import { Head, Link, usePage } from '@inertiajs/react';
import {
  ArrowRight,
  CalendarDays,
  Camera,
  CheckCircle2,
  ChevronRight,
  GraduationCap,
  HandHeart,
  Mail,
  MapPin,
  Menu,
  Quote,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';


import { dashboard, login, register } from '@/routes';


type Stat = {
  label: string;
  value: string;
  note: string;
};


type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
};


type Person = {
  name: string;
  role: string;
  detail: string;
};


type TimelineItem = {
  year: string;
  title: string;
  description: string;
};


const navItems = ['Story', 'Legacy', 'Events', 'Impact', 'Memories'];


const alumniStats: Stat[] = [
  {
    label: 'Verified alumni',
    value: 'TBD',
    note: 'Placeholder until the official alumni registry is published.',
  },
  {
    label: 'Graduating batches',
    value: 'TBD',
    note: 'To be updated from academy records.',
  },
  {
    label: 'Countries represented',
    value: 'TBD',
    note: 'Pending confirmed member locations.',
  },
  {
    label: 'Mentorship hours',
    value: 'TBD',
    note: 'Will reflect tracked volunteer activity.',
  },
];


const timeline: TimelineItem[] = [
  {
    year: 'Year TBD',
    title: 'Academy foundation',
    description:
      'Official founding details and archival note to be added from DMHMA records.',
  },
  {
    year: 'Year TBD',
    title: 'First alumni network',
    description:
      'A verified milestone will replace this placeholder once the association confirms dates.',
  },
  {
    year: 'Year TBD',
    title: 'Community initiatives expand',
    description:
      'Scholarships, reunions, and service work can be documented here with confirmed evidence.',
  },
  {
    year: 'Today',
    title: 'A connected alumni future',
    description:
      'DMHMA alumni are invited to help build a trusted registry, events calendar, and impact platform.',
  },
];


const featuredAlumni: Person[] = [
  {
    name: 'Alumni profile placeholder',
    role: 'Batch, profession, and location TBD',
    detail: 'Use this card for a verified graduate story with consent and source details.',
  },
  {
    name: 'Alumni profile placeholder',
    role: 'Batch, profession, and location TBD',
    detail: 'Highlight service, leadership, scholarship, or community contribution after verification.',
  },
  {
    name: 'Alumni profile placeholder',
    role: 'Batch, profession, and location TBD',
    detail: 'Replace with a real portrait, name, batch, and achievement when available.',
  },
];


const events = [
  {
    title: 'Grand reunion',
    date: 'Date TBD',
    location: 'Venue TBD',
    description:
      'A flagship reunion listing will appear here after the organizing committee confirms the program.',
  },
  {
    title: 'Career mentoring circle',
    date: 'Date TBD',
    location: 'Online or campus TBD',
    description:
      'A structured mentoring session for students and young alumni, pending official scheduling.',
  },
  {
    title: 'Batch representatives forum',
    date: 'Date TBD',
    location: 'Format TBD',
    description:
      'A working session to collect batch data, archive memories, and strengthen alumni governance.',
  },
];


const initiatives: Feature[] = [
  {
    title: 'Student mentorship',
    description:
      'Connect senior alumni with current students for career guidance, admissions advice, and confidence-building conversations.',
    icon: GraduationCap,
  },
  {
    title: 'Scholarship support',
    description:
      'Create transparent giving pathways once official scholarship criteria and governance are approved.',
    icon: HandHeart,
  },
  {
    title: 'Archive and memories',
    description:
      'Preserve batch photos, stories, documents, and oral histories with consent and proper attribution.',
    icon: Camera,
  },
  {
    title: 'Community service',
    description:
      'Coordinate verified alumni-led initiatives that support the academy, local families, and future students.',
    icon: Users,
  },
];


const impactStats: Stat[] = [
  {
    label: 'Scholarship fund',
    value: 'TBD',
    note: 'Requires official finance and governance confirmation.',
  },
  {
    label: 'Volunteer network',
    value: 'TBD',
    note: 'Will show verified volunteers after registration.',
  },
  {
    label: 'Student support programs',
    value: 'TBD',
    note: 'Placeholder for approved association programs.',
  },
];


const testimonials = [
  {
    quote: 'A verified alumni testimonial can bring the academy story to life here.',
    name: 'Name withheld until approved',
    batch: 'Batch TBD',
  },
  {
    quote: 'Use this space for a real memory about teachers, friendships, service, and lifelong belonging.',
    name: 'Name withheld until approved',
    batch: 'Batch TBD',
  },
];


const focusClass =
  'focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-brand-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-surface';


function PrimaryCta({ children }: { children: ReactNode }) {
  return (
    <Link
      href={register()}
      className={`${focusClass} group inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-brand-accent px-6 py-3 text-sm font-semibold text-brand-text shadow-[0_18px_40px_color-mix(in_srgb,var(--brand-primary)_22%,transparent)] transition hover:bg-brand-accent-strong motion-safe:hover:-translate-y-0.5 motion-reduce:transition-none`}
    >
      {children}
      <ArrowRight className="size-4 transition motion-safe:group-hover:translate-x-1 motion-reduce:transition-none" />
    </Link>
  );
}


function SecondaryCta({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className={`${focusClass} inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-brand-primary/20 bg-brand-surface px-6 py-3 text-sm font-semibold text-brand-primary transition hover:border-brand-primary/40 hover:bg-brand-surface-soft motion-reduce:transition-none`}
    >
      {children}
      <ChevronRight className="size-4" />
    </a>
  );
}


function SectionHeader({
  eyebrow,
  title,
  description,
  inverted = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  inverted?: boolean;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p
        className={`text-xs font-semibold tracking-[0.2em] uppercase ${inverted ? 'text-brand-secondary' : 'text-brand-primary'
          }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-3 text-3xl leading-tight font-semibold sm:text-4xl ${inverted ? 'text-brand-surface' : 'text-brand-text'
          }`}
      >
        {title}
      </h2>
      <p
        className={`mt-4 text-base leading-7 ${inverted ? 'text-brand-secondary' : 'text-brand-text-muted'
          }`}
      >
        {description}
      </p>
    </div>
  );
}


function PlaceholderImage({
  label,
  className = '',
  src,
  loading = 'lazy',
}: {
  label: string;
  className?: string;
  src?: string;
  loading?: 'eager' | 'lazy';
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`relative isolate overflow-hidden rounded-lg border border-brand-secondary/40 bg-brand-primary text-brand-surface shadow-2xl ${className}`}
    >
      {src ? (
        <img
          src={src}
          alt=""
          loading={loading}
          decoding="async"
          className="absolute inset-0 size-full object-cover"
        />
      ) : null}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,color-mix(in_srgb,var(--brand-accent)_26%,transparent),color-mix(in_srgb,var(--brand-primary)_10%,transparent)_42%,color-mix(in_srgb,var(--brand-primary-strong)_72%,transparent))]" />
      <div className="absolute inset-x-0 bottom-0 p-5">
        <p className="text-xs font-semibold tracking-[0.18em] text-brand-secondary uppercase">
          {src ? 'Supplied visual reference' : 'Official media placeholder'}
        </p>
        <p className="mt-2 max-w-xs text-lg leading-snug font-semibold">
          {label}
        </p>
      </div>
      <div className="absolute top-5 right-5 flex size-12 items-center justify-center rounded-full bg-brand-surface/12 backdrop-blur">
        <Camera className="size-5 text-brand-secondary" aria-hidden="true" />
      </div>
    </div>
  );
}


function StatCard({ stat }: { stat: Stat }) {
  return (
    <article className="rounded-lg border border-brand-border bg-brand-surface p-5 shadow-sm transition hover:shadow-xl motion-safe:hover:-translate-y-1 motion-reduce:transition-none">
      <p className="text-3xl font-semibold text-brand-text">
        {stat.value}
      </p>
      <h3 className="mt-2 text-sm font-semibold text-brand-primary">
        {stat.label}
      </h3>
      <p className="mt-2 text-sm leading-6 text-brand-text-muted">{stat.note}</p>
    </article>
  );
}


export default function Welcome() {
  const { auth } = usePage().props;


  return (
    <>
      <Head>
        <title>DMHMA Alumni Association</title>
        <meta
          name="description"
          content="Join the Dr. Makbul Hossain Memorial Academy Alumni Association to connect alumni, preserve legacy, support students, and build community impact."
        />
      </Head>


      <div className="min-h-screen bg-brand-background text-brand-text antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-brand-surface focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-brand-text focus:shadow-xl"
        >
          Skip to main content
        </a>


        <div className="bg-brand-primary px-4 py-2 text-center text-sm font-medium text-brand-secondary">
          Alumni registry is being prepared. Join now to help verify
          batches, stories, and future association programs.
        </div>


        <header className="sticky top-0 z-40 border-b border-brand-border/70 bg-brand-background/95 backdrop-blur">
          <nav
            aria-label="Primary navigation"
            className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8"
          >
            <a
              href="#"
              className={`${focusClass} flex items-center gap-3 rounded-md`}
            >
              <span className="flex size-12 items-center justify-center overflow-hidden rounded-md border border-brand-border bg-brand-surface">
                <img
                  src="/images/dmhma-alumni-logo.png"
                  alt=""
                  width="48"
                  height="48"
                  loading="eager"
                  decoding="async"
                  className="size-full object-contain p-1"
                />
              </span>
              <span>
                <span className="block text-sm font-bold tracking-[0.08em] text-brand-text uppercase">
                  DMHMA
                </span>
                <span className="block text-xs text-brand-text-muted">
                  Alumni Association
                </span>
              </span>
            </a>


            <div className="hidden items-center gap-7 lg:flex">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`${focusClass} rounded-sm text-sm font-medium text-brand-text-muted transition hover:text-brand-text motion-reduce:transition-none`}
                >
                  {item}
                </a>
              ))}
            </div>


            <div className="flex items-center gap-2">
              {auth.user ? (
                <Link
                  href={dashboard()}
                  className={`${focusClass} hidden rounded-md px-4 py-2 text-sm font-semibold text-brand-primary hover:bg-brand-surface sm:inline-flex`}
                >
                  Dashboard
                </Link>
              ) : (
                <Link
                  href={login()}
                  className={`${focusClass} hidden rounded-md px-4 py-2 text-sm font-semibold text-brand-primary hover:bg-brand-surface sm:inline-flex`}
                >
                  Log in
                </Link>
              )}
              <Link
                href={register()}
                className={`${focusClass} inline-flex min-h-10 items-center justify-center rounded-md bg-brand-primary px-4 py-2 text-sm font-semibold text-brand-surface shadow-sm transition hover:bg-brand-accent-strong motion-reduce:transition-none`}
              >
                Join Alumni
              </Link>
              <button
                type="button"
                aria-label="Menu placeholder"
                className={`${focusClass} inline-flex size-10 items-center justify-center rounded-md border border-brand-border text-brand-text lg:hidden`}
              >
                <Menu className="size-5" aria-hidden="true" />
              </button>
            </div>
          </nav>
        </header>


        <main id="main-content">
          <section className="relative overflow-hidden border-b border-brand-border bg-brand-background">
            <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.04fr_0.96fr] lg:px-8 lg:py-24">
              <div className="flex flex-col justify-center">
                <p className="inline-flex w-fit items-center gap-2 rounded-full border border-brand-accent/50 bg-brand-surface px-4 py-2 text-xs font-semibold tracking-[0.16em] text-brand-primary uppercase">
                  <Sparkles
                    className="size-4"
                    aria-hidden="true"
                  />
                  Legacy, community, excellence
                </p>
                <h1 className="mt-7 max-w-4xl text-4xl leading-[1.05] font-semibold text-brand-text sm:text-5xl lg:text-7xl">
                  Where DMHMA memories become a lifelong
                  alumni movement.
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-brand-text-muted">
                  Dr. Makbul Hossain Memorial Academy Alumni
                  Association brings generations together to
                  preserve friendship, support students, and
                  turn shared roots into meaningful impact.
                </p>
                <p className="mt-4 max-w-2xl text-base leading-7 text-brand-text-muted">
                  বাংলা ও English content can live together
                  here with verified names, batch histories,
                  and academy records.
                </p>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <PrimaryCta>
                    Join the Alumni Association
                  </PrimaryCta>
                  <SecondaryCta href="#story">
                    Explore the story
                  </SecondaryCta>
                </div>
                <dl className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {alumniStats.map((stat) => (
                    <div
                      key={stat.label}
                      className="border-l border-brand-accent pl-4"
                    >
                      <dt className="text-xs font-semibold tracking-[0.14em] text-brand-text-muted uppercase">
                        {stat.label}
                      </dt>
                      <dd className="mt-1 text-2xl font-semibold text-brand-text">
                        {stat.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>


              <div className="relative min-h-[520px]">
                <PlaceholderImage
                  label="School uniform and academy gathering from the supplied reference image."
                  src="/images/dmhma-uniform.jpg"
                  loading="eager"
                  className="absolute inset-x-0 top-0 h-[360px] sm:h-[430px] lg:h-[500px]"
                />
                <div className="absolute right-4 bottom-4 left-4 rounded-lg bg-brand-surface p-5 shadow-2xl sm:right-8 sm:left-auto sm:w-80">
                  <p className="text-xs font-semibold tracking-[0.16em] text-brand-primary uppercase">
                    Primary action
                  </p>
                  <h2 className="mt-2 text-xl font-semibold text-brand-text">
                    Help build the verified alumni registry.
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-brand-text-muted">
                    Register first. The association can then
                    validate batches, professional details,
                    and community initiatives.
                  </p>
                </div>
              </div>
            </div>
          </section>


          <section
            aria-labelledby="stats-heading"
            className="px-4 py-16 sm:px-6 lg:px-8"
          >
            <div className="mx-auto max-w-7xl">
              <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                <div>
                  <p className="text-xs font-semibold tracking-[0.2em] text-brand-primary uppercase">
                    Alumni statistics
                  </p>
                  <h2
                    id="stats-heading"
                    className="mt-3 text-3xl font-semibold text-brand-text"
                  >
                    Honest numbers, ready for verification.
                  </h2>
                </div>
                <p className="max-w-2xl text-sm leading-6 text-brand-text-muted">
                  These cards are intentionally marked TBD to
                  avoid fabricating membership, event, or
                  impact claims before official records exist.
                </p>
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {alumniStats.map((stat) => (
                  <StatCard key={stat.label} stat={stat} />
                ))}
              </div>
            </div>
          </section>


          <section
            id="story"
            className="bg-brand-surface px-4 py-20 sm:px-6 lg:px-8"
          >
            <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <PlaceholderImage
                  label="Historic classroom, teachers, or batch photograph placeholder."
                  className="min-h-72"
                />
                <PlaceholderImage
                  label="Current students and alumni service activity placeholder."
                  className="min-h-72"
                />
              </div>
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] text-brand-primary uppercase">
                  About / Our story
                </p>
                <h2 className="mt-4 text-3xl leading-tight font-semibold text-brand-text sm:text-5xl">
                  A home for the people shaped by DMHMA.
                </h2>
                <p className="mt-6 text-lg leading-8 text-brand-text-muted">
                  This association exists to honor Dr. Makbul
                  Hossain Memorial Academy through real
                  relationships: classmates reconnecting,
                  teachers remembered with gratitude, and
                  alumni supporting the next generation.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {[
                    [
                      'Legacy',
                      'Preserve verified history and memories.',
                    ],
                    [
                      'Friendship',
                      'Reconnect batches across cities and years.',
                    ],
                    [
                      'Impact',
                      'Channel alumni energy into student support.',
                    ],
                  ].map(([title, description]) => (
                    <div
                      key={title}
                      className="rounded-lg bg-brand-background p-5"
                    >
                      <CheckCircle2
                        className="size-5 text-brand-primary"
                        aria-hidden="true"
                      />
                      <h3 className="mt-4 font-semibold text-brand-text">
                        {title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-brand-text-muted">
                        {description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>


          <section id="legacy" className="px-4 py-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <SectionHeader
                eyebrow="DMHMA legacy timeline"
                title="Milestones that should be sourced, dated, and preserved."
                description="The structure is ready for academy-approved history without inventing dates or achievements."
              />
              <ol className="mt-12 grid gap-4 lg:grid-cols-4">
                {timeline.map((item) => (
                  <li
                    key={`${item.year}-${item.title}`}
                    className="relative rounded-lg border border-brand-border bg-brand-surface p-6 shadow-sm"
                  >
                    <p className="text-sm font-semibold text-brand-primary">
                      {item.year}
                    </p>
                    <h3 className="mt-4 text-xl font-semibold text-brand-text">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-brand-text-muted">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </section>


          <section className="bg-brand-primary px-4 py-20 text-brand-surface sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <SectionHeader
                eyebrow="Featured alumni"
                title="Verified alumni stories will anchor the association."
                description="Portraits, names, batches, and accomplishments should be published only after approval."
                inverted
              />
              <div className="mt-12 grid gap-5 md:grid-cols-3">
                {featuredAlumni.map((person, index) => (
                  <article
                    key={`${person.name}-${index}`}
                    className="rounded-lg border border-brand-secondary/20 bg-brand-surface/6 p-6"
                  >
                    <div className="flex aspect-[4/3] items-end rounded-md bg-brand-secondary p-5">
                      <p className="text-sm font-medium text-brand-primary">
                        Portrait placeholder
                      </p>
                    </div>
                    <h3 className="mt-5 text-xl font-semibold">
                      {person.name}
                    </h3>
                    <p className="mt-1 text-sm text-brand-secondary">
                      {person.role}
                    </p>
                    <p className="mt-4 text-sm leading-6 text-brand-secondary">
                      {person.detail}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>


          <section
            id="events"
            className="bg-brand-surface px-4 py-20 sm:px-6 lg:px-8"
          >
            <div className="mx-auto max-w-7xl">
              <SectionHeader
                eyebrow="Events & reunions"
                title="A calendar for coming back together."
                description="Publish official events only after dates, venues, registration links, and organizers are confirmed."
              />
              <div className="mt-12 grid gap-5 lg:grid-cols-3">
                {events.map((event) => (
                  <article
                    key={event.title}
                    className="rounded-lg border border-brand-border p-6 shadow-sm"
                  >
                    <CalendarDays
                      className="size-6 text-brand-primary"
                      aria-hidden="true"
                    />
                    <h3 className="mt-5 text-xl font-semibold text-brand-text">
                      {event.title}
                    </h3>
                    <p className="mt-3 flex items-center gap-2 text-sm font-semibold text-brand-primary">
                      <MapPin
                        className="size-4"
                        aria-hidden="true"
                      />
                      {event.date} · {event.location}
                    </p>
                    <p className="mt-4 text-sm leading-6 text-brand-text-muted">
                      {event.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>


          <section className="px-4 py-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <SectionHeader
                eyebrow="Activities & initiatives"
                title="Practical programs that turn belonging into action."
                description="A premium alumni platform should make service, mentorship, and archives easy to understand and join."
              />
              <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {initiatives.map((initiative) => {
                  const Icon = initiative.icon;


                  return (
                    <article
                      key={initiative.title}
                      className="rounded-lg bg-brand-surface p-6 shadow-sm"
                    >
                      <div className="flex size-12 items-center justify-center rounded-md bg-brand-surface-soft text-brand-primary">
                        <Icon
                          className="size-6"
                          aria-hidden="true"
                        />
                      </div>
                      <h3 className="mt-5 text-lg font-semibold text-brand-text">
                        {initiative.title}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-brand-text-muted">
                        {initiative.description}
                      </p>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>


          <section
            id="impact"
            className="bg-brand-surface px-4 py-20 sm:px-6 lg:px-8"
          >
            <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] text-brand-primary uppercase">
                  Impact statistics
                </p>
                <h2 className="mt-4 text-3xl leading-tight font-semibold text-brand-text sm:text-5xl">
                  Measure what the alumni community makes
                  possible.
                </h2>
                <p className="mt-6 text-lg leading-8 text-brand-text-muted">
                  Once the association approves programs and
                  reporting, this section can show transparent
                  outcomes for scholarships, volunteering,
                  student support, and community projects.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {impactStats.map((stat) => (
                  <StatCard key={stat.label} stat={stat} />
                ))}
              </div>
            </div>
          </section>


          <section
            id="memories"
            className="px-4 py-20 sm:px-6 lg:px-8"
          >
            <div className="mx-auto max-w-7xl">
              <SectionHeader
                eyebrow="Memories / gallery"
                title="The archive should feel personal, vivid, and trusted."
                description="Use official photos, batch submissions, and consent-based captions in place of these placeholders."
              />
              <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  'School uniform and academy gathering from the supplied reference image.',
                  'Academy campus photograph placeholder.',
                  'Teachers and students archive placeholder.',
                  'Community initiative image placeholder.',
                ].map((label, index) => (
                  <PlaceholderImage
                    key={label}
                    label={label}
                    src={
                      index === 0
                        ? '/images/dmhma-uniform.jpg'
                        : undefined
                    }
                    className="min-h-72"
                  />
                ))}
              </div>
            </div>
          </section>


          <section className="bg-brand-primary px-4 py-20 text-brand-surface sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <SectionHeader
                eyebrow="Alumni testimonials"
                title="Real voices can carry the emotional truth of DMHMA."
                description="Quotes below are placeholders and should be replaced with approved alumni testimonials."
                inverted
              />
              <div className="mt-12 grid gap-5 md:grid-cols-2">
                {testimonials.map((testimonial) => (
                  <figure
                    key={testimonial.quote}
                    className="rounded-lg border border-brand-secondary/20 bg-brand-surface/6 p-7"
                  >
                    <Quote
                      className="size-7 text-brand-secondary"
                      aria-hidden="true"
                    />
                    <blockquote className="mt-5 text-xl leading-8 font-medium">
                      “{testimonial.quote}”
                    </blockquote>
                    <figcaption className="mt-6 text-sm text-brand-secondary">
                      {testimonial.name} ·{' '}
                      {testimonial.batch}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>


          <section className="bg-brand-surface-soft px-4 py-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <ShieldCheck
                className="mx-auto size-10 text-brand-primary"
                aria-hidden="true"
              />
              <h2 className="mt-5 text-3xl leading-tight font-semibold text-brand-text sm:text-5xl">
                Join now and help shape a verified, generous,
                future-ready alumni association.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-brand-text-muted">
                The strongest alumni communities begin with a
                trusted registry and a clear invitation. Add
                your name, reconnect with your batch, and help
                build DMHMA’s next chapter.
              </p>
              <div className="mt-9 flex justify-center">
                <PrimaryCta>
                  Join the Alumni Association
                </PrimaryCta>
              </div>
            </div>
          </section>
        </main>


        <footer className="bg-brand-primary-strong px-4 py-12 text-brand-surface sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
            <div>
              <div className="flex items-center gap-3">
                <span className="flex size-12 items-center justify-center overflow-hidden rounded-md border border-brand-border bg-brand-surface">
                  <img
                    src="/images/dmhma-alumni-logo.png"
                    alt=""
                    width="48"
                    height="48"
                    loading="lazy"
                    decoding="async"
                    className="size-full object-contain p-1"
                  />
                </span>
                <div>
                  <p className="font-semibold">
                    DMHMA Alumni Association
                  </p>
                  <p className="text-sm text-brand-secondary">
                    Dr. Makbul Hossain Memorial Academy
                  </p>
                </div>
              </div>
              <p className="mt-5 max-w-md text-sm leading-6 text-brand-secondary">
                A digital home for verified alumni, shared
                memories, reunions, mentorship, and community
                impact.
              </p>
            </div>
            <div>
              <h2 className="text-sm font-semibold tracking-[0.16em] text-brand-secondary uppercase">
                Navigate
              </h2>
              <div className="mt-4 grid gap-3 text-sm text-brand-secondary">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className={`${focusClass} rounded-sm hover:text-brand-surface`}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-sm font-semibold tracking-[0.16em] text-brand-secondary uppercase">
                Contact
              </h2>
              <div className="mt-4 grid gap-3 text-sm text-brand-secondary">
                <p className="flex items-center gap-2">
                  <Mail
                    className="size-4"
                    aria-hidden="true"
                  />
                  Email TBD
                </p>
                <p className="flex items-center gap-2">
                  <MapPin
                    className="size-4"
                    aria-hidden="true"
                  />
                  Campus/location details TBD
                </p>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-10 max-w-7xl border-t border-brand-secondary/20 pt-6 text-sm text-brand-secondary/80">
            © {new Date().getFullYear()} DMHMA Alumni Association.
            Placeholder content must be replaced with verified
            official information before public launch.
          </div>
        </footer>
      </div>
    </>
  );
}