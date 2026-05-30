import { Link, usePage } from '@inertiajs/react';
import { Activity, BarChart3, Baby, BookOpen, FileText, Home, MessageCircle, Salad, Stethoscope } from 'lucide-react';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import type { NavItem } from '@/types';

const parentNavItems: NavItem[] = [
    { title: 'Dashboard', href: '/dashboard', icon: Home },
    { title: 'Profil Anak', href: '/anak', icon: Baby },
    { title: 'G-Growth Tracker', href: '/tracker', icon: Activity },
    { title: 'G-NutriLog', href: '/nutrisi', icon: Salad },
    { title: 'EduHub', href: '/eduhub', icon: BookOpen },
    { title: 'Geazy Connect', href: '/connect', icon: MessageCircle },
];

const mitraNavItems: NavItem[] = [
    { title: 'Dashboard', href: '/mitra/dashboard', icon: Home },
    { title: 'EduHub', href: '/eduhub', icon: BookOpen },
];

const adminNavItems: NavItem[] = [
    { title: 'Dashboard', href: '/admin/dashboard', icon: BarChart3 },
    { title: 'Manajemen Dokter', href: '/admin/dokter', icon: Stethoscope },
    { title: 'Kelola Artikel', href: '/admin/artikel', icon: FileText },
    { title: 'EduHub', href: '/eduhub', icon: BookOpen },
];

export function AppSidebar() {
    const { auth } = usePage<{ auth: { user: { role: string } | null } }>().props;
    const role = auth?.user?.role;

    const navItems =
        role === 'admin' ? adminNavItems :
        role === 'mitra' ? mitraNavItems :
        parentNavItems;

    const homeHref =
        role === 'admin' ? '/admin/dashboard' :
        role === 'mitra' ? '/mitra/dashboard' :
        '/dashboard';

    const brandLabel =
        role === 'admin' ? 'Geazy Admin' :
        role === 'mitra' ? 'Geazy Mitra' :
        'Geazy';

    return (
        <Sidebar collapsible="icon" className="border-r border-sidebar-border">
            <SidebarHeader className="border-b border-sidebar-border/60 px-4 py-4">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <Link
                            href={homeHref}
                            className="flex items-center gap-2 px-1 group-data-[collapsible=icon]:justify-center"
                        >
                            <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary text-base font-bold text-primary-foreground">
                                G
                            </span>
                            <span className="text-lg font-bold tracking-tight text-primary group-data-[collapsible=icon]:hidden">
                                {brandLabel}
                            </span>
                        </Link>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent className="px-2 py-4">
                <NavMain items={navItems} />
            </SidebarContent>

            <SidebarFooter className="border-t border-sidebar-border/60 p-3">
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
