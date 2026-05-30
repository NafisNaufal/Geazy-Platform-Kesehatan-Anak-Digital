import { Link } from '@inertiajs/react';
import {
    SidebarGroup,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { useCurrentUrl } from '@/hooks/use-current-url';
import type { NavItem } from '@/types';

export function NavMain({ items = [] }: { items: NavItem[] }) {
    const { isCurrentUrl } = useCurrentUrl();

    return (
        <SidebarGroup className="px-1 py-0">
            <SidebarMenu className="gap-1.5">
                {items.map((item) => {
                    const active = isCurrentUrl(item.href);

                    return (
                        <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton
                                asChild
                                isActive={active}
                                size="lg"
                                tooltip={{ children: item.title }}
                                className="h-11 rounded-lg px-3 text-sm font-semibold text-muted-foreground transition-colors hover:bg-primary-soft hover:text-primary-soft-foreground data-[active=true]:bg-primary-soft data-[active=true]:text-primary-soft-foreground"
                            >
                                <Link href={item.href}>
                                    {item.icon && (
                                        <item.icon
                                            className={
                                                active
                                                    ? 'text-primary'
                                                    : 'text-muted-foreground'
                                            }
                                        />
                                    )}
                                    <span className="group-data-[collapsible=icon]:hidden">
                                        {item.title}
                                    </span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    );
                })}
            </SidebarMenu>
        </SidebarGroup>
    );
}
