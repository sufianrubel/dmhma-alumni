import { Head } from '@inertiajs/react';
import {
    BadgeCheck,
    ChevronLeft,
    ChevronRight,
    Grid2X2,
    List,
    MapPin,
    MessageCircle,
    Search,
    SlidersHorizontal,
    UserPlus,
    UsersRound,
} from 'lucide-react';
import { useMemo, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { dashboard, directory } from '@/routes';

type Alumni = {
    id: number;
    name: string;
    degree: string;
    year: number;
    jobTitle: string;
    company: string;
    location: string;
    department: string;
    industry: string;
    availability: 'all' | 'mentoring' | 'networking';
    avatar: string;
    verified: boolean;
};

type ViewMode = 'grid' | 'list';

const alumni: Alumni[] = [
    {
        id: 1,
        name: 'Imran Hossain',
        degree: 'CSE',
        year: 2018,
        jobTitle: 'Software Engineer',
        company: 'Google',
        location: 'London, UK',
        department: 'Computer Science',
        industry: 'Technology',
        availability: 'networking',
        avatar: '/storage/avatars/avatar%20(1).jpg',
        verified: true,
    },
    {
        id: 2,
        name: 'Nusrat Jahan',
        degree: 'BBA',
        year: 2017,
        jobTitle: 'Product Manager',
        company: 'Microsoft',
        location: 'Seattle, USA',
        department: 'Business Administration',
        industry: 'Technology',
        availability: 'mentoring',
        avatar: '/storage/avatars/avatar%20(2).jpg',
        verified: true,
    },
    {
        id: 3,
        name: 'Rasel Ahmed',
        degree: 'EEE',
        year: 2016,
        jobTitle: 'Senior Electrical Engineer',
        company: 'Siemens',
        location: 'Munich, Germany',
        department: 'Electrical Engineering',
        industry: 'Engineering',
        availability: 'networking',
        avatar: '/storage/avatars/avatar%20(3).jpg',
        verified: true,
    },
    {
        id: 4,
        name: 'Farhana Islam',
        degree: 'MBA',
        year: 2019,
        jobTitle: 'Marketing Manager',
        company: 'Unilever',
        location: 'Dubai, UAE',
        department: 'Business Administration',
        industry: 'Consumer Goods',
        availability: 'mentoring',
        avatar: '/storage/avatars/avatar%20(4).jpg',
        verified: true,
    },
    {
        id: 5,
        name: 'Shakil Ahmed',
        degree: 'CSE',
        year: 2019,
        jobTitle: 'Backend Developer',
        company: 'Amazon',
        location: 'Vancouver, Canada',
        department: 'Computer Science',
        industry: 'Technology',
        availability: 'networking',
        avatar: '/storage/avatars/avatar%20(5).jpg',
        verified: true,
    },
    {
        id: 6,
        name: 'Sadia Rahman',
        degree: 'BA (Eng)',
        year: 2018,
        jobTitle: 'Content Strategist',
        company: 'HubSpot',
        location: 'Boston, USA',
        department: 'English',
        industry: 'Marketing',
        availability: 'mentoring',
        avatar: '/storage/avatars/avatar%20(6).jpg',
        verified: false,
    },
    {
        id: 7,
        name: 'Mahmud Hasan',
        degree: 'ME',
        year: 2017,
        jobTitle: 'Mechanical Engineer',
        company: 'Tesla',
        location: 'Austin, USA',
        department: 'Mechanical Engineering',
        industry: 'Automotive',
        availability: 'networking',
        avatar: '/storage/avatars/avatar%20(7).jpg',
        verified: true,
    },
    {
        id: 8,
        name: 'Tanzila Khan',
        degree: 'BBA',
        year: 2020,
        jobTitle: 'HR Executive',
        company: 'BRACNet',
        location: 'Dhaka, Bangladesh',
        department: 'Business Administration',
        industry: 'Telecommunications',
        availability: 'mentoring',
        avatar: '/storage/avatars/avatar%20(8).jpg',
        verified: true,
    },
    {
        id: 9,
        name: 'Adnan Rahman',
        degree: 'CSE',
        year: 2020,
        jobTitle: 'Data Analyst',
        company: 'IBM',
        location: 'Toronto, Canada',
        department: 'Computer Science',
        industry: 'Technology',
        availability: 'networking',
        avatar: '/storage/avatars/avatar%20(9).jpg',
        verified: true,
    },
    {
        id: 10,
        name: 'Mumtahina Akter',
        degree: 'English',
        year: 2019,
        jobTitle: 'UI/UX Designer',
        company: 'Figma',
        location: 'San Francisco, USA',
        department: 'English',
        industry: 'Technology',
        availability: 'mentoring',
        avatar: '/storage/avatars/avatar%20(10).jpg',
        verified: false,
    },
    {
        id: 11,
        name: 'Kazi Mahfuz',
        degree: 'EEE',
        year: 2018,
        jobTitle: 'Automation Engineer',
        company: 'ABB',
        location: 'Zurich, Switzerland',
        department: 'Electrical Engineering',
        industry: 'Engineering',
        availability: 'networking',
        avatar: '/storage/avatars/avatar%20(11).jpg',
        verified: true,
    },
    {
        id: 12,
        name: 'Jannatul Ferdous',
        degree: 'MBA',
        year: 2021,
        jobTitle: 'Business Analyst',
        company: 'Standard Chartered',
        location: 'Singapore',
        department: 'Business Administration',
        industry: 'Finance',
        availability: 'mentoring',
        avatar: '/storage/avatars/avatar%20(12).jpg',
        verified: true,
    },
];

const allOption = 'all';

function AlumniCard({
    alumnus,
    viewMode,
}: {
    alumnus: Alumni;
    viewMode: ViewMode;
}) {
    return (
        <article
            className={
                viewMode === 'list'
                    ? 'flex flex-col gap-4 rounded-xl border border-border bg-card p-4 shadow-sm sm:flex-row sm:items-center'
                    : 'flex min-h-64 flex-col rounded-xl border border-border bg-card p-4 shadow-sm transition-shadow hover:shadow-md'
            }
        >
            <div className="flex min-w-0 items-start gap-3">
                <Avatar className="size-14 border border-border bg-muted">
                    <AvatarImage
                        src={alumnus.avatar}
                        alt={alumnus.name}
                        className="object-cover"
                    />
                    <AvatarFallback className="font-bold text-brand-primary">
                        {alumnus.name
                            .split(' ')
                            .map((part) => part[0])
                            .join('')}
                    </AvatarFallback>
                </Avatar>
                <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                        <h2 className="truncate text-sm font-bold text-card-foreground">
                            {alumnus.name}
                        </h2>
                        <BadgeCheck
                            aria-label={
                                alumnus.verified
                                    ? 'Verified alumnus'
                                    : 'Profile pending verification'
                            }
                            className={`size-4 shrink-0 ${alumnus.verified ? 'fill-brand-success text-brand-success-foreground' : 'fill-brand-warning text-primary-foreground'}`}
                        />
                    </div>
                    <p className="mt-1 text-xs font-semibold text-brand-primary">
                        {alumnus.degree} '{String(alumnus.year).slice(-2)}
                    </p>
                    <p className="mt-3 truncate text-xs font-medium text-card-foreground">
                        {alumnus.jobTitle}
                    </p>
                    <p className="mt-1 truncate text-xs text-muted-foreground">
                        {alumnus.company}
                    </p>
                    <p className="mt-2 flex items-center gap-1.5 truncate text-xs text-muted-foreground">
                        <MapPin
                            className="size-3.5 shrink-0"
                            aria-hidden="true"
                        />
                        <span className="truncate">{alumnus.location}</span>
                    </p>
                </div>
            </div>
            <div
                className={`flex gap-2 ${viewMode === 'list' ? 'sm:ml-auto sm:w-56' : 'mt-auto pt-4'}`}
            >
                <Button
                    variant="outline"
                    className="flex-1 border-brand-accent text-brand-primary hover:bg-muted"
                >
                    View Profile
                </Button>
                <Button
                    variant="outline"
                    size="icon"
                    aria-label={`Message ${alumnus.name}`}
                >
                    <MessageCircle className="size-4" aria-hidden="true" />
                </Button>
            </div>
        </article>
    );
}

function FilterSelect({
    label,
    value,
    options,
    onValueChange,
}: {
    label: string;
    value: string;
    options: string[];
    onValueChange: (value: string) => void;
}) {
    return (
        <label className="grid gap-2 text-xs font-semibold text-card-foreground">
            {label}
            <Select value={value} onValueChange={onValueChange}>
                <SelectTrigger className="w-full bg-card font-normal">
                    <SelectValue />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value={allOption}>All {label}s</SelectItem>
                    {options.map((option) => (
                        <SelectItem key={option} value={option}>
                            {option}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </label>
    );
}

export default function Directory() {
    const [query, setQuery] = useState('');
    const [viewMode, setViewMode] = useState<ViewMode>('grid');
    const [sort, setSort] = useState('recent');
    const [filtersOpen, setFiltersOpen] = useState(false);
    const [advancedOpen, setAdvancedOpen] = useState(false);
    const [yearFrom, setYearFrom] = useState(allOption);
    const [yearTo, setYearTo] = useState(allOption);
    const [department, setDepartment] = useState(allOption);
    const [location, setLocation] = useState(allOption);
    const [company, setCompany] = useState(allOption);
    const [industry, setIndustry] = useState(allOption);
    const [jobTitle, setJobTitle] = useState('');
    const [availability, setAvailability] = useState('all');

    const filteredAlumni = useMemo(() => {
        const normalizedQuery = query.trim().toLowerCase();
        const normalizedJobTitle = jobTitle.trim().toLowerCase();

        return alumni
            .filter((alumnus) => {
                const searchableText = [
                    alumnus.name,
                    alumnus.company,
                    alumnus.location,
                    alumnus.jobTitle,
                    alumnus.degree,
                ]
                    .join(' ')
                    .toLowerCase();

                return (
                    (!normalizedQuery ||
                        searchableText.includes(normalizedQuery)) &&
                    (yearFrom === allOption ||
                        alumnus.year >= Number(yearFrom)) &&
                    (yearTo === allOption || alumnus.year <= Number(yearTo)) &&
                    (department === allOption ||
                        alumnus.department === department) &&
                    (location === allOption || alumnus.location === location) &&
                    (company === allOption || alumnus.company === company) &&
                    (industry === allOption || alumnus.industry === industry) &&
                    (!normalizedJobTitle ||
                        alumnus.jobTitle
                            .toLowerCase()
                            .includes(normalizedJobTitle)) &&
                    (availability === allOption ||
                        alumnus.availability === availability)
                );
            })
            .sort((first, second) => {
                if (sort === 'name') {
                    return first.name.localeCompare(second.name);
                }

                if (sort === 'oldest') {
                    return first.year - second.year;
                }

                return second.year - first.year;
            });
    }, [
        availability,
        company,
        department,
        industry,
        jobTitle,
        location,
        query,
        sort,
        yearFrom,
        yearTo,
    ]);

    const resetFilters = () => {
        setQuery('');
        setYearFrom(allOption);
        setYearTo(allOption);
        setDepartment(allOption);
        setLocation(allOption);
        setCompany(allOption);
        setIndustry(allOption);
        setJobTitle('');
        setAvailability(allOption);
    };

    const years = ['2016', '2017', '2018', '2019', '2020', '2021'];
    const departments = [
        ...new Set(alumni.map((alumnus) => alumnus.department)),
    ];
    const locations = [...new Set(alumni.map((alumnus) => alumnus.location))];
    const companies = [...new Set(alumni.map((alumnus) => alumnus.company))];
    const industries = [...new Set(alumni.map((alumnus) => alumnus.industry))];

    return (
        <>
            <Head title="Directory" />
            <main className="flex min-h-full flex-1 flex-col bg-background">
                <div className="container mx-auto w-full flex-1 p-4 sm:p-5 xl:p-6">
                    <div className="mb-5">
                        <h1 className="text-2xl font-bold tracking-tight text-foreground">
                            Directory
                        </h1>
                        <p className="mt-1 text-sm text-muted-foreground">
                            Find and connect with alumni around the world.
                        </p>
                    </div>

                    <div className="grid items-start gap-5 xl:grid-cols-4">
                        <div className="min-w-0 xl:col-span-3">
                            <section className="rounded-xl border border-border bg-card p-4 shadow-sm">
                                <div className="flex flex-col gap-3 lg:flex-row">
                                    <label className="relative min-w-0 flex-1">
                                        <span className="sr-only">
                                            Search alumni
                                        </span>
                                        <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
                                        <Input
                                            type="search"
                                            value={query}
                                            onChange={(event) =>
                                                setQuery(event.target.value)
                                            }
                                            placeholder="Search by name, keyword, company, or location..."
                                            className="h-10 bg-card pl-10"
                                        />
                                    </label>
                                    <div className="flex flex-col gap-3 sm:flex-row">
                                        <Button
                                            type="button"
                                            variant="outline"
                                            onClick={() =>
                                                setAdvancedOpen((open) => !open)
                                            }
                                            aria-expanded={advancedOpen}
                                            className="h-10 border-brand-accent text-brand-primary"
                                        >
                                            <SlidersHorizontal className="size-4" />
                                            Advanced Search
                                        </Button>
                                        <Button
                                            type="button"
                                            className="h-10 bg-brand-accent hover:bg-brand-accent-strong"
                                        >
                                            <UserPlus className="size-4" />
                                            Invite Alumni
                                        </Button>
                                        <Button
                                            type="button"
                                            variant="outline"
                                            onClick={() =>
                                                setFiltersOpen((open) => !open)
                                            }
                                            aria-expanded={filtersOpen}
                                            className="h-10 xl:hidden"
                                        >
                                            <SlidersHorizontal className="size-4" />
                                            Filters
                                        </Button>
                                    </div>
                                </div>
                                {advancedOpen && (
                                    <div className="mt-4 grid gap-3 border-t border-border pt-4 sm:grid-cols-3">
                                        <FilterSelect
                                            label="Department"
                                            value={department}
                                            options={departments}
                                            onValueChange={setDepartment}
                                        />
                                        <FilterSelect
                                            label="Location"
                                            value={location}
                                            options={locations}
                                            onValueChange={setLocation}
                                        />
                                        <FilterSelect
                                            label="Company"
                                            value={company}
                                            options={companies}
                                            onValueChange={setCompany}
                                        />
                                    </div>
                                )}
                            </section>

                            <div className="flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between">
                                <p className="text-xs text-muted-foreground">
                                    Showing{' '}
                                    <span className="font-semibold text-foreground">
                                        {filteredAlumni.length}
                                    </span>{' '}
                                    of 1,248 alumni
                                </p>
                                <div className="flex items-center gap-2">
                                    <span className="text-xs text-muted-foreground">
                                        Sort by:
                                    </span>
                                    <Select
                                        value={sort}
                                        onValueChange={setSort}
                                    >
                                        <SelectTrigger className="w-36 bg-card">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="recent">
                                                Recently Joined
                                            </SelectItem>
                                            <SelectItem value="oldest">
                                                Oldest Batch
                                            </SelectItem>
                                            <SelectItem value="name">
                                                Name A–Z
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <div className="flex rounded-md border border-border bg-card p-1">
                                        <button
                                            type="button"
                                            onClick={() => setViewMode('grid')}
                                            aria-label="Grid view"
                                            aria-pressed={viewMode === 'grid'}
                                            className="grid size-8 place-items-center rounded text-muted-foreground hover:bg-muted aria-pressed:bg-brand-accent aria-pressed:text-accent-foreground"
                                        >
                                            <Grid2X2 className="size-4" />
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setViewMode('list')}
                                            aria-label="List view"
                                            aria-pressed={viewMode === 'list'}
                                            className="grid size-8 place-items-center rounded text-muted-foreground hover:bg-muted aria-pressed:bg-brand-accent aria-pressed:text-accent-foreground"
                                        >
                                            <List className="size-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {filteredAlumni.length > 0 ? (
                                <div
                                    className={
                                        viewMode === 'grid'
                                            ? 'grid gap-3 sm:grid-cols-2 2xl:grid-cols-4'
                                            : 'grid gap-3'
                                    }
                                >
                                    {filteredAlumni.map((alumnus) => (
                                        <AlumniCard
                                            key={alumnus.id}
                                            alumnus={alumnus}
                                            viewMode={viewMode}
                                        />
                                    ))}
                                </div>
                            ) : (
                                <div className="grid min-h-64 place-items-center rounded-xl border border-dashed border-border bg-card p-8 text-center">
                                    <div>
                                        <UsersRound className="mx-auto size-10 text-muted-foreground" />
                                        <h2 className="mt-3 text-base font-bold">
                                            No alumni found
                                        </h2>
                                        <p className="mt-1 text-sm text-muted-foreground">
                                            Try changing your search or filters.
                                        </p>
                                        <Button
                                            type="button"
                                            variant="outline"
                                            onClick={resetFilters}
                                            className="mt-4"
                                        >
                                            Clear filters
                                        </Button>
                                    </div>
                                </div>
                            )}

                            <nav
                                aria-label="Directory pagination"
                                className="mt-5 flex items-center justify-center gap-2"
                            >
                                <Button
                                    type="button"
                                    variant="outline"
                                    size="icon"
                                    disabled
                                    aria-label="Previous page"
                                >
                                    <ChevronLeft className="size-4" />
                                </Button>
                                {[1, 2, 3].map((page) => (
                                    <Button
                                        key={page}
                                        type="button"
                                        variant={
                                            page === 1 ? 'default' : 'outline'
                                        }
                                        size="icon"
                                        aria-current={
                                            page === 1 ? 'page' : undefined
                                        }
                                    >
                                        {page}
                                    </Button>
                                ))}
                                <span className="px-1 text-sm text-muted-foreground">
                                    …
                                </span>
                                <Button
                                    type="button"
                                    variant="outline"
                                    className="h-9 px-3"
                                >
                                    104
                                </Button>
                                <Button
                                    type="button"
                                    variant="outline"
                                    size="icon"
                                    aria-label="Next page"
                                >
                                    <ChevronRight className="size-4" />
                                </Button>
                            </nav>
                        </div>

                        <aside
                            className={`${filtersOpen ? 'block' : 'hidden'} rounded-xl border border-border bg-card shadow-sm xl:block`}
                        >
                            <div className="flex items-center justify-between gap-4 border-b border-border px-4 py-4">
                                <h2 className="text-sm font-bold text-card-foreground">
                                    Filter Directory
                                </h2>
                                <button
                                    type="button"
                                    onClick={resetFilters}
                                    className="text-xs font-semibold text-brand-accent hover:text-brand-primary"
                                >
                                    Clear All
                                </button>
                            </div>
                            <div className="grid gap-5 p-4">
                                <fieldset className="grid gap-2">
                                    <legend className="text-xs font-semibold text-card-foreground">
                                        Graduation Year
                                    </legend>
                                    <div className="grid grid-cols-2 gap-2">
                                        <Select
                                            value={yearFrom}
                                            onValueChange={setYearFrom}
                                        >
                                            <SelectTrigger className="w-full bg-card">
                                                <SelectValue placeholder="From" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value={allOption}>
                                                    From
                                                </SelectItem>
                                                {years.map((year) => (
                                                    <SelectItem
                                                        key={year}
                                                        value={year}
                                                    >
                                                        {year}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <Select
                                            value={yearTo}
                                            onValueChange={setYearTo}
                                        >
                                            <SelectTrigger className="w-full bg-card">
                                                <SelectValue placeholder="To" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value={allOption}>
                                                    To
                                                </SelectItem>
                                                {years.map((year) => (
                                                    <SelectItem
                                                        key={year}
                                                        value={year}
                                                    >
                                                        {year}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </fieldset>
                                <FilterSelect
                                    label="Department"
                                    value={department}
                                    options={departments}
                                    onValueChange={setDepartment}
                                />
                                <FilterSelect
                                    label="Location"
                                    value={location}
                                    options={locations}
                                    onValueChange={setLocation}
                                />
                                <FilterSelect
                                    label="Company"
                                    value={company}
                                    options={companies}
                                    onValueChange={setCompany}
                                />
                                <FilterSelect
                                    label="Industry"
                                    value={industry}
                                    options={industries}
                                    onValueChange={setIndustry}
                                />
                                <label className="grid gap-2 text-xs font-semibold text-card-foreground">
                                    Job Title
                                    <Input
                                        value={jobTitle}
                                        onChange={(event) =>
                                            setJobTitle(event.target.value)
                                        }
                                        placeholder="Enter job title"
                                        className="bg-card font-normal"
                                    />
                                </label>
                                <fieldset className="grid gap-2 text-xs">
                                    <legend className="mb-1 font-semibold text-card-foreground">
                                        Availability
                                    </legend>
                                    {[
                                        ['all', 'All Alumni'],
                                        [
                                            'networking',
                                            'Available for Networking',
                                        ],
                                        ['mentoring', 'Open to Mentoring'],
                                    ].map(([value, label]) => (
                                        <label
                                            key={value}
                                            className="flex items-center gap-2 text-muted-foreground"
                                        >
                                            <input
                                                type="radio"
                                                name="availability"
                                                value={value}
                                                checked={availability === value}
                                                onChange={() =>
                                                    setAvailability(value)
                                                }
                                                className="size-4 accent-brand-accent"
                                            />
                                            {label}
                                        </label>
                                    ))}
                                </fieldset>
                                <Button
                                    type="button"
                                    onClick={() => setFiltersOpen(false)}
                                    className="bg-brand-accent hover:bg-brand-accent-strong"
                                >
                                    Apply Filters
                                </Button>
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={resetFilters}
                                    className="border-brand-accent text-brand-primary"
                                >
                                    Reset Filters
                                </Button>
                            </div>
                        </aside>
                    </div>
                </div>

                <footer className="border-t border-border bg-card text-xs text-muted-foreground">
                    <div className="container mx-auto flex w-full flex-col items-center justify-between gap-3 px-5 py-5 text-center sm:flex-row xl:px-6">
                        <p>
                            © 2026 DMHMA Alumni Association. All rights
                            reserved.
                        </p>
                        <div className="flex items-center gap-4">
                            <button
                                type="button"
                                className="hover:text-foreground"
                            >
                                Privacy Policy
                            </button>
                            <button
                                type="button"
                                className="hover:text-foreground"
                            >
                                Terms of Service
                            </button>
                            <button
                                type="button"
                                className="hover:text-foreground"
                            >
                                Cookie Policy
                            </button>
                        </div>
                    </div>
                </footer>
            </main>
        </>
    );
}

Directory.layout = {
    breadcrumbs: [
        { title: 'Dashboard', href: dashboard() },
        { title: 'Directory', href: directory() },
    ],
};
