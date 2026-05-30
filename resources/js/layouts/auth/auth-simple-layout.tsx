import { Link, usePage } from '@inertiajs/react';
import { Sprout } from 'lucide-react';
import { home, login, register } from '@/routes';
import type { AuthLayoutProps } from '@/types';

export default function AuthSimpleLayout({
    children,
    title,
    description,
}: AuthLayoutProps) {
    const { url } = usePage();
    const isLogin = url.startsWith('/login');
    const isRegister = url.startsWith('/register');

    return (
        <div className="flex min-h-svh flex-col bg-background">
            <nav className="flex h-16 w-full items-center justify-between border-b border-border bg-card px-4 md:px-8">
                <Link href={home()} className="flex items-center gap-2">
                    <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                        <Sprout className="size-5" />
                    </span>
                    <span className="text-lg font-bold tracking-tight text-primary">Geazy</span>
                </Link>
                <div className="flex items-center gap-2">
                    <Link
                        href={login()}
                        className={`px-3 py-2 text-sm font-semibold transition ${
                            isLogin
                                ? 'border-b-2 border-primary text-primary'
                                : 'text-muted-foreground hover:text-foreground'
                        }`}
                    >
                        Masuk
                    </Link>
                    <Link
                        href={register()}
                        className={`px-3 py-2 text-sm font-semibold transition ${
                            isRegister
                                ? 'border-b-2 border-primary text-primary'
                                : 'text-muted-foreground hover:text-foreground'
                        }`}
                    >
                        Daftar
                    </Link>
                </div>
            </nav>

            <main className="flex flex-1 items-center justify-center px-4 py-10 md:py-16">
                <div className="w-full max-w-md rounded-2xl border border-border/60 bg-card p-8 shadow-card">
                    <div className="mb-6 flex flex-col items-center gap-3 text-center">
                        <span className="flex size-12 items-center justify-center rounded-2xl bg-primary-soft text-primary">
                            <Sprout className="size-6" />
                        </span>
                        <h1 className="text-2xl font-bold tracking-tight text-foreground">{title}</h1>
                        {description && (
                            <p className="text-sm text-muted-foreground">{description}</p>
                        )}
                    </div>
                    {children}
                </div>
            </main>

            <footer className="border-t border-border bg-card px-4 py-6 md:px-8">
                <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center justify-between gap-3 text-xs text-muted-foreground md:flex-row">
                    <p>© 2026 Geazy Indonesia. Semua hak dilindungi.</p>
                    <div className="flex gap-5">
                        <a className="hover:text-primary" href="#">Tentang Kami</a>
                        <a className="hover:text-primary" href="#">Hubungi Kami</a>
                        <a className="hover:text-primary" href="#">Kebijakan Privasi</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
