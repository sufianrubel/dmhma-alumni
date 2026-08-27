import { usePage } from '@inertiajs/react';
import { Bell, ChevronDown, Menu, Search } from 'lucide-react';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useSidebar } from '@/components/ui/sidebar';
import { UserMenuContent } from '@/components/user-menu-content';

export function AppSidebarHeader() {
    const { auth } = usePage().props;
    const { toggleSidebar } = useSidebar();
    const user = auth.user;
    const avatarSource = user.avatar ?? '/storage/avatars/avatar%20(4).jpg';

    return (
        <header className="flex h-[82px] shrink-0 items-center border-b border-[#e5eaf2] bg-white px-4 md:px-[30px] dark:border-brand-border dark:bg-brand-surface">
            <div className="flex min-w-0 flex-1 items-center">
                <button
                    type="button"
                    onClick={toggleSidebar}
                    aria-label="Toggle sidebar"
                    className="flex size-8 shrink-0 items-center justify-center rounded-md text-[#07173d] transition-colors hover:bg-[#f1f5fa] focus-visible:ring-2 focus-visible:ring-[#1765d5] focus-visible:outline-none dark:text-brand-text dark:hover:bg-white/10"
                >
                    <Menu aria-hidden="true" className="size-6 stroke-[1.8]" />
                </button>

                <div className="ml-6 hidden min-w-0 sm:block">
                    <p className="truncate text-[20px] leading-6 font-bold tracking-[-0.012em] text-[#07143a] dark:text-brand-text">
                        Good Morning, {user.name}{' '}
                        <span aria-hidden="true">👋</span>
                    </p>
                    <p className="mt-1 truncate text-[13px] leading-4 text-[#637397] dark:text-brand-text-muted">
                        Welcome back to DMHMA Alumni Association
                    </p>
                </div>

                <div className="ml-auto flex shrink-0 items-center">
                    <label className="relative hidden xl:block">
                        <span className="sr-only">Search</span>
                        <Search
                            aria-hidden="true"
                            className="pointer-events-none absolute top-1/2 left-3.5 size-[17px] -translate-y-1/2 text-[#637397]"
                        />
                        <input
                            type="search"
                            placeholder="Search anything..."
                            className="h-[42px] w-[320px] rounded-[9px] border-0 bg-[#f5f7fb] pr-4 pl-10 text-xs text-[#142344] outline-none placeholder:text-[#667795] focus:ring-2 focus:ring-[#1765d5]/35 dark:bg-brand-surface-soft dark:text-brand-text dark:placeholder:text-brand-text-muted"
                        />
                    </label>

                    <div className="mx-4 hidden h-10 w-px bg-[#e8edf4] xl:block dark:bg-brand-border" />

                    <button
                        type="button"
                        aria-label="Notifications, 6 unread"
                        className="relative flex size-10 items-center justify-center rounded-full text-[#07173d] transition-colors hover:bg-[#f1f5fa] focus-visible:ring-2 focus-visible:ring-[#1765d5] focus-visible:outline-none dark:text-brand-text dark:hover:bg-white/10"
                    >
                        <Bell
                            aria-hidden="true"
                            className="size-[21px] stroke-[1.7]"
                        />
                        <span className="absolute top-0 right-0 flex size-[17px] items-center justify-center rounded-full border-2 border-white bg-[#e82d3f] text-[9px] leading-none font-bold text-white dark:border-brand-surface">
                            6
                        </span>
                    </button>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <button
                                type="button"
                                className="ml-3 flex min-w-0 items-center gap-3 rounded-lg px-1.5 py-1 text-left transition-colors hover:bg-[#f5f7fb] focus-visible:ring-2 focus-visible:ring-[#1765d5] focus-visible:outline-none dark:hover:bg-white/10"
                            >
                                <Avatar className="size-10 border border-[#e4e9f0] bg-white shadow-sm">
                                    <AvatarImage
                                        src={avatarSource}
                                        alt={user.name}
                                        className="object-cover"
                                    />
                                </Avatar>
                                <span className="hidden min-w-0 leading-tight lg:block">
                                    <span className="block max-w-32 truncate text-xs font-bold text-[#07143a] dark:text-brand-text">
                                        {user.name}
                                    </span>
                                    <span className="mt-1 block text-[10px] text-[#637397] dark:text-brand-text-muted">
                                        Alumni Member
                                    </span>
                                </span>
                                <ChevronDown
                                    aria-hidden="true"
                                    className="hidden size-4 text-[#31466a] sm:block dark:text-brand-text-muted"
                                />
                            </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                            align="end"
                            sideOffset={8}
                            className="w-60 rounded-lg"
                        >
                            <UserMenuContent user={user} />
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </header>
    );
}
