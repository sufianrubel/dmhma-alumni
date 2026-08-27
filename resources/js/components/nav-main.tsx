import { Link } from '@inertiajs/react';
import type { LucideIcon } from 'lucide-react';
import {
    SidebarGroup,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { useCurrentUrl } from '@/hooks/use-current-url';
import type { NavItem } from '@/types';

export type SidebarNavItem = Omit<NavItem, 'href'> & {
    href?: NavItem['href'];
    badge?: string;
    trailingIcon?: LucideIcon;
};

export function NavMain({ items = [] }: { items: SidebarNavItem[] }) {
    const { isCurrentUrl } = useCurrentUrl();

    return (
        <SidebarGroup className="p-0">
            <SidebarMenu className="gap-0.5 overflow-hidden">
                {items.map((item) => {
                    const isActive = item.href
                        ? isCurrentUrl(item.href)
                        : false;
                    const content = (
                        <>
                            {item.icon && <item.icon aria-hidden="true" />}
                            <span className="min-w-0 flex-1 truncate group-data-[collapsible=icon]:hidden">
                                {item.title}
                            </span>
                            {item.badge && (
                                <span className="ml-auto flex size-5 items-center justify-center rounded bg-[#36bd35] text-[11px] leading-none font-semibold text-white group-data-[collapsible=icon]:hidden">
                                    {item.badge}
                                </span>
                            )}
                            {item.trailingIcon && (
                                <item.trailingIcon className="ml-auto group-data-[collapsible=icon]:hidden" />
                            )}
                        </>
                    );

                    return (
                        <SidebarMenuItem
                            key={item.title}
                            className="overflow-hidden"
                        >
                            <SidebarMenuButton
                                asChild
                                isActive={isActive}
                                tooltip={{ children: item.title }}
                                className="h-[42px] gap-3 rounded-[8px] px-3 text-[13px] font-medium text-blue-50 group-data-[collapsible=icon]:mx-auto group-data-[collapsible=icon]:size-9! group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:p-0! hover:bg-white/[0.08] hover:text-white focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-inset active:bg-white/[0.14] aria-disabled:opacity-100 data-[active=true]:bg-[#0547b8] data-[active=true]:font-semibold data-[active=true]:text-white data-[active=true]:shadow-none data-[active=true]:hover:bg-[#0547b8] data-[active=true]:active:bg-[#043fa6] [&>svg]:size-[19px] [&>svg]:stroke-[1.8]"
                            >
                                {item.href ? (
                                    <Link href={item.href} prefetch>
                                        {content}
                                    </Link>
                                ) : (
                                    <span aria-disabled="true">{content}</span>
                                )}
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    );
                })}
            </SidebarMenu>
        </SidebarGroup>
    );
}
