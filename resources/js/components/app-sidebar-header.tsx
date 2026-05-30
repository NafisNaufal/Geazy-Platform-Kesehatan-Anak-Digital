import { Link, usePage } from '@inertiajs/react';
import { Bell, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { SidebarTrigger } from '@/components/ui/sidebar';
import type { BreadcrumbItem as BreadcrumbItemType } from '@/types';

const pageTitleByPrefix: Array<[string, string]> = [
    ['/dashboard', 'Beranda'],
    ['/anak/tambah', 'Tambah Profil Anak'],
    ['/anak/pilih', 'Pilih Anak'],
    ['/anak', 'Profil Anak'],
    ['/tracker', 'G-Growth Tracker'],
    ['/nutrisi', 'G-NutriLog'],
    ['/eduhub', 'EduHub'],
    ['/simpanan', 'Simpanan'],
    ['/connect', 'Geazy Connect'],
    ['/konsultasi', 'Konsultasi'],
    ['/mitra/dashboard', 'Dashboard'],
    ['/admin/dashboard', 'Beranda'],
    ['/admin/dokter', 'Manajemen Dokter'],
    ['/admin/artikel', 'Kelola Artikel'],
    ['/settings/profile', 'Pengaturan Profil'],
    ['/settings/security', 'Keamanan'],
];

function deriveTitle(url: string): string {
    for (const [prefix, title] of pageTitleByPrefix) {
        if (url === prefix || url.startsWith(prefix + '/') || url.startsWith(prefix + '?')) {
            return title;
        }
    }

    return 'Geazy';
}

export function AppSidebarHeader({
    breadcrumbs = [],
}: {
    breadcrumbs?: BreadcrumbItemType[];
}) {
    const { url } = usePage();
    const current = breadcrumbs.at(-1);
    const parent = breadcrumbs.length > 1 ? breadcrumbs[breadcrumbs.length - 2] : null;

    const title = current?.title ?? deriveTitle(url);

    return (
        <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center gap-3 border-b border-sidebar-border/60 bg-card px-4 md:px-6">
            <SidebarTrigger className="-ml-1 text-muted-foreground hover:text-foreground" />

            <div className="flex min-w-0 flex-1 flex-col">
                {parent && (
                    <Link
                        href={parent.href}
                        className="truncate text-xs font-medium text-muted-foreground hover:text-foreground"
                    >
                        {parent.title}
                    </Link>
                )}
                <h1 className="truncate text-base font-semibold leading-tight tracking-tight text-foreground md:text-lg">
                    {title}
                </h1>
            </div>

            <div className="flex items-center gap-1">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            aria-label="Notifikasi"
                            className="size-10 rounded-full text-muted-foreground hover:bg-muted hover:text-foreground"
                        >
                            <Bell className="size-5" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-72 p-4">
                        <p className="text-sm font-semibold text-foreground">Notifikasi</p>
                        <p className="mt-1 text-xs text-muted-foreground">
                            Belum ada notifikasi baru.
                        </p>
                    </DropdownMenuContent>
                </DropdownMenu>

                <Button
                    asChild
                    variant="ghost"
                    size="icon"
                    aria-label="Pengaturan"
                    className="size-10 rounded-full text-muted-foreground hover:bg-muted hover:text-foreground"
                >
                    <Link href="/settings/profile">
                        <Settings className="size-5" />
                    </Link>
                </Button>
            </div>
        </header>
    );
}
