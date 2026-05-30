import { Head, Link, router, usePage } from '@inertiajs/react';
import { Activity, Baby, BookOpen, ChevronDown, MessageCircle, Salad, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import type { BreadcrumbItem } from '@/types';

type ChildProfile = {
    id: number;
    name: string;
    gender: string;
    birth_date: string;
    age_string: string;
    age_in_months: number;
};

type LatestGrowth = {
    weight: number;
    height: number;
    bmi: number;
    bmi_status: string;
    height_status: string;
    bmi_status_color: string;
    recorded_at: string;
} | null;

type DailyNutrition = {
    consumed: { calories: number; protein: number; fat: number; carbs: number };
    target: { calories: number; protein: number; fat: number; carbs: number };
    percentage: { calories: number; protein: number; fat: number; carbs: number };
} | null;

type TodayMeal = {
    id: number;
    meal_type: string;
    items_count: number;
    total_calories: number;
};

const mealLabels: Record<string, string> = {
    sarapan: 'Sarapan',
    makan_siang: 'Makan Siang',
    makan_malam: 'Makan Malam',
    snack: 'Snack',
};

const statusBadge: Record<string, 'success' | 'warning' | 'destructive' | 'secondary'> = {
    green: 'success',
    yellow: 'warning',
    red: 'destructive',
    gray: 'secondary',
};

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Beranda', href: '/dashboard' },
];

export const dashboardBreadcrumbs = breadcrumbs;

function NutritionBar({ label, value, max, color }: { label: string; value: number; max: number; color: string }) {
    const pct = max > 0 ? Math.min(100, Math.round((value / max) * 100)) : 0;

    return (
        <div>
            <div className="mb-1.5 flex justify-between text-xs">
                <span className="font-medium text-muted-foreground">{label}</span>
                <span className="font-semibold text-foreground">
                    {Math.round(value)} / {Math.round(max)} ({pct}%)
                </span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                <div className={`h-full rounded-full transition-all ${color}`} style={{ width: `${pct}%` }} />
            </div>
        </div>
    );
}

export default function Dashboard({
    childProfiles,
    activeChild,
    latestGrowth,
    dailyNutrition,
    todayMeals,
}: {
    childProfiles: ChildProfile[];
    activeChild: ChildProfile | null;
    latestGrowth: LatestGrowth;
    dailyNutrition: DailyNutrition;
    todayMeals: TodayMeal[];
}) {
    const { auth } = usePage<{ auth: { user: { name: string } } }>().props;

    function switchChild(id: number) {
        router.post('/dashboard/switch-child', { child_id: id }, { preserveScroll: true });
    }

    return (
        <>
            <Head title="Beranda" />
            <div className="space-y-6 p-4 md:p-8">
                {/* Welcome header */}
                <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                    <div>
                        <h1 className="text-2xl font-extrabold tracking-tight text-foreground md:text-3xl">
                            Selamat datang, {auth.user.name.split(' ')[0]}
                        </h1>
                        <p className="mt-1 text-sm text-muted-foreground">
                            Berikut adalah ringkasan perkembangan kesehatan buah hati Anda.
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        {childProfiles.length > 0 && (
                            <div className="relative">
                                <select
                                    className="appearance-none rounded-lg border border-input bg-card py-2.5 pl-3 pr-9 text-sm font-semibold text-foreground shadow-xs focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                                    value={activeChild?.id ?? ''}
                                    onChange={(e) => switchChild(Number(e.target.value))}
                                >
                                    {childProfiles.map((c) => (
                                        <option key={c.id} value={c.id}>{c.name} ({c.age_string})</option>
                                    ))}
                                </select>
                                <ChevronDown className="pointer-events-none absolute right-3 top-3 size-4 text-muted-foreground" />
                            </div>
                        )}
                        <Button asChild size="sm" className="hidden md:inline-flex">
                            <Link href="/anak/tambah">+ Tambah Anak</Link>
                        </Button>
                    </div>
                </div>

                {childProfiles.length === 0 && (
                    <Card className="items-center border-2 border-dashed border-primary/30 bg-primary-soft/40 p-12 text-center">
                        <Baby className="size-12 text-primary" />
                        <h2 className="text-lg font-semibold text-foreground">Belum ada profil anak</h2>
                        <p className="max-w-md text-sm text-muted-foreground">
                            Tambahkan profil anak untuk mulai memantau tumbuh kembangnya.
                        </p>
                        <Button asChild>
                            <Link href="/anak/tambah">Tambah Profil Anak</Link>
                        </Button>
                    </Card>
                )}

                {activeChild && (
                    <div className="grid gap-6 lg:grid-cols-3">
                        {/* Main column */}
                        <div className="space-y-6 lg:col-span-2">
                            {/* Active child + status */}
                            <Card className="p-6">
                                <div className="mb-5 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="flex size-14 items-center justify-center rounded-2xl bg-primary-soft text-2xl text-primary">
                                            {activeChild.gender === 'laki-laki' ? '👦' : '👧'}
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold tracking-tight text-foreground">{activeChild.name}</h3>
                                            <p className="text-sm text-muted-foreground">{activeChild.age_string}</p>
                                        </div>
                                    </div>
                                    {latestGrowth && (
                                        <Badge variant={statusBadge[latestGrowth.bmi_status_color] ?? 'secondary'} className="px-3 py-1 text-xs">
                                            ● {latestGrowth.bmi_status}
                                        </Badge>
                                    )}
                                </div>

                                {dailyNutrition && (
                                    <>
                                        <p className="mb-3 text-sm font-semibold text-foreground">Target Nutrisi Harian</p>
                                        <div className="space-y-3">
                                            <NutritionBar
                                                label="Kalori"
                                                value={dailyNutrition.consumed.calories}
                                                max={dailyNutrition.target.calories}
                                                color="bg-amber-400"
                                            />
                                            <NutritionBar
                                                label="Protein"
                                                value={dailyNutrition.consumed.protein}
                                                max={dailyNutrition.target.protein}
                                                color="bg-sky-500"
                                            />
                                            <NutritionBar
                                                label="Karbohidrat"
                                                value={dailyNutrition.consumed.carbs}
                                                max={dailyNutrition.target.carbs}
                                                color="bg-primary"
                                            />
                                            <NutritionBar
                                                label="Lemak"
                                                value={dailyNutrition.consumed.fat}
                                                max={dailyNutrition.target.fat}
                                                color="bg-yellow-400"
                                            />
                                        </div>
                                    </>
                                )}
                            </Card>

                            {/* Today's meals */}
                            <Card className="p-6">
                                <div className="mb-4 flex items-center justify-between">
                                    <h3 className="text-base font-semibold tracking-tight text-foreground">Asupan Hari Ini</h3>
                                    <Link href="/nutrisi" className="text-xs font-semibold text-primary hover:underline">
                                        + Catat Makan
                                    </Link>
                                </div>
                                {todayMeals.length === 0 ? (
                                    <div className="rounded-xl border border-dashed border-border py-8 text-center text-sm text-muted-foreground">
                                        Belum ada catatan makan hari ini.
                                        <br />
                                        Jangan lupa ya jurnal hari ini!
                                    </div>
                                ) : (
                                    <div className="space-y-2">
                                        {todayMeals.map((meal) => (
                                            <div key={meal.id} className="flex items-center justify-between rounded-xl border border-border/60 bg-card px-4 py-3">
                                                <div className="flex items-center gap-3">
                                                    <div className="flex size-10 items-center justify-center rounded-full bg-primary-soft text-primary">
                                                        <Salad className="size-5" />
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-semibold text-foreground">{mealLabels[meal.meal_type] ?? meal.meal_type}</p>
                                                        <p className="text-xs text-muted-foreground">{meal.items_count} item</p>
                                                    </div>
                                                </div>
                                                <span className="text-sm font-bold text-foreground">{Math.round(meal.total_calories)} kkal</span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </Card>
                        </div>

                        {/* Side column */}
                        <div className="space-y-6">
                            <Card className="p-5">
                                <p className="mb-3 text-sm font-semibold text-foreground">Akses Cepat</p>
                                <div className="grid grid-cols-2 gap-3">
                                    {[
                                        { href: '/tracker', icon: Activity, label: 'Growth Tracker', desc: 'Pantau grafik tumbuh kembang' },
                                        { href: '/nutrisi', icon: Salad, label: 'NutriLog', desc: 'Jurnal makanan & resep' },
                                        { href: '/eduhub', icon: BookOpen, label: 'EduHub', desc: 'Artikel & modul edukasi' },
                                        { href: '/connect', icon: MessageCircle, label: 'Connect', desc: 'Konsultasi ahli & forum' },
                                    ].map((item) => (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            className="group flex flex-col gap-1 rounded-xl border border-border/60 bg-card p-3 transition-all hover:border-primary/40 hover:bg-primary-soft/40"
                                        >
                                            <item.icon className="size-5 text-primary" />
                                            <span className="text-sm font-semibold text-foreground">{item.label}</span>
                                            <span className="text-[10px] leading-tight text-muted-foreground">{item.desc}</span>
                                        </Link>
                                    ))}
                                </div>
                            </Card>

                            {/* Tips card */}
                            <Card className="bg-primary p-5 text-primary-foreground">
                                <div className="mb-2 flex items-center gap-2">
                                    <Sparkles className="size-4" />
                                    <p className="text-sm font-semibold">Tips Hari Ini</p>
                                </div>
                                <p className="text-sm leading-relaxed text-primary-foreground/90">
                                    Masa 1000 hari pertama kehidupan (HPK) adalah periode emas. Pastikan asupan protein hewani cukup untuk mendukung pertumbuhan optimal.
                                </p>
                                <Button asChild variant="secondary" size="sm" className="mt-4 bg-card text-primary hover:bg-card/90">
                                    <Link href="/eduhub">Baca Artikel</Link>
                                </Button>
                            </Card>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
