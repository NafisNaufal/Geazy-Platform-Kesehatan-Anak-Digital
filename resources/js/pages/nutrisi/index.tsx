import { Head, router, useForm, usePage } from '@inertiajs/react';
import { Plus, Trash2, X, Search } from 'lucide-react';
import { useState, useMemo } from 'react';

type Food = {
    id: number;
    name: string;
    category: string;
    calories: number;
    protein: number;
    fat: number;
    carbs: number;
    serving_unit: string;
    serving_size: number;
};

type LogItem = {
    id: number;
    food_name: string;
    portion: number;
    serving_unit: string;
    calories: number;
    protein: number;
    fat: number;
    carbs: number;
};

type NutritionLog = {
    id: number;
    meal_type: string;
    log_date: string;
    items: LogItem[];
    total_calories: number;
    total_protein: number;
    total_fat: number;
    total_carbs: number;
};

type DailyNutrition = {
    consumed: { calories: number; protein: number; fat: number; carbs: number };
    target: { calories: number; protein: number; fat: number; carbs: number };
    percentage: { calories: number; protein: number; fat: number; carbs: number };
};

type ChildInfo = { id: number; name: string; age_in_months: number; age_string: string } | null;

const mealLabels: Record<string, string> = {
    sarapan: '🌅 Sarapan',
    makan_siang: '☀️ Makan Siang',
    makan_malam: '🌙 Makan Malam',
    snack: '🍎 Snack',
};

const categoryLabels: Record<string, string> = {
    karbohidrat: 'Karbohidrat',
    protein_hewani: 'Protein Hewani',
    protein_nabati: 'Protein Nabati',
    sayuran: 'Sayuran',
    buah: 'Buah',
    susu: 'Susu & Olahannya',
    lainnya: 'Lainnya',
};

type CartItem = { food: Food; portion: number };

function NutritionBar({ label, value, max, color }: { label: string; value: number; max: number; color: string }) {
    const pct = max > 0 ? Math.min(100, Math.round((value / max) * 100)) : 0;
    return (
        <div>
            <div className="mb-1 flex justify-between text-xs">
                <span className="text-muted-foreground">{label}</span>
                <span className="font-medium">{Math.round(value)} / {Math.round(max)}</span>
            </div>
            <div className="h-2 rounded-full bg-muted">
                <div className={`h-2 rounded-full ${color}`} style={{ width: `${pct}%` }} />
            </div>
        </div>
    );
}

export default function NutrisiIndex({
    foods,
    todayLogs,
    activeChild,
    dailyNutrition,
    noChild,
}: {
    foods: Food[];
    todayLogs: NutritionLog[];
    activeChild: ChildInfo;
    dailyNutrition: DailyNutrition | null;
    noChild: boolean;
}) {
    const { flash } = usePage<{ flash: { success?: string } }>().props;
    const [showForm, setShowForm] = useState(false);
    const [search, setSearch] = useState('');
    const [cart, setCart] = useState<CartItem[]>([]);

    const { data, setData, processing, reset } = useForm({
        meal_type: 'sarapan',
        log_date: new Date().toISOString().split('T')[0],
        items: [] as { food_id: number; portion: number }[],
    });

    const filteredFoods = useMemo(() => {
        const q = search.toLowerCase();
        return foods.filter((f) => f.name.toLowerCase().includes(q) || f.category.toLowerCase().includes(q));
    }, [foods, search]);

    function addToCart(food: Food) {
        setCart((prev) => {
            const existing = prev.find((c) => c.food.id === food.id);
            if (existing) return prev.map((c) => c.food.id === food.id ? { ...c, portion: c.portion + food.serving_size } : c);
            return [...prev, { food, portion: food.serving_size }];
        });
    }

    function updatePortion(foodId: number, val: string) {
        const num = parseFloat(val);
        if (isNaN(num) || num <= 0) return;
        setCart((prev) => prev.map((c) => c.food.id === foodId ? { ...c, portion: num } : c));
    }

    function removeFromCart(foodId: number) {
        setCart((prev) => prev.filter((c) => c.food.id !== foodId));
    }

    const cartNutrition = useMemo(() => {
        return cart.reduce(
            (acc, item) => {
                const ratio = item.portion / 100;
                return {
                    calories: acc.calories + item.food.calories * ratio,
                    protein: acc.protein + item.food.protein * ratio,
                    fat: acc.fat + item.food.fat * ratio,
                    carbs: acc.carbs + item.food.carbs * ratio,
                };
            },
            { calories: 0, protein: 0, fat: 0, carbs: 0 }
        );
    }, [cart]);

    function submit(e: React.FormEvent) {
        e.preventDefault();
        if (cart.length === 0) return;
        const items = cart.map((c) => ({ food_id: c.food.id, portion: c.portion }));
        router.post('/nutrisi', { meal_type: data.meal_type, log_date: data.log_date, items }, {
            onSuccess: () => {
                setCart([]);
                setShowForm(false);
                reset();
            },
        });
    }

    function destroyLog(id: number) {
        if (confirm('Hapus catatan makan ini?')) {
            router.delete(`/nutrisi/${id}`);
        }
    }

    if (noChild) {
        return (
            <>
                <Head title="G-NutriLog" />
                <div className="flex flex-col items-center justify-center p-16 text-center">
                    <p className="mb-4 text-muted-foreground">Belum ada profil anak. Tambahkan profil anak terlebih dahulu.</p>
                    <a href="/anak/tambah" className="rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-white hover:bg-primary/90">
                        Tambah Profil Anak
                    </a>
                </div>
            </>
        );
    }

    return (
        <>
            <Head title="G-NutriLog" />
            <div className="p-6 space-y-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-foreground">G-NutriLog</h1>
                        {activeChild && <p className="mt-1 text-sm text-muted-foreground">{activeChild.name} · {activeChild.age_string}</p>}
                    </div>
                    <button
                        onClick={() => setShowForm(true)}
                        className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-white hover:bg-primary/90"
                    >
                        <Plus className="h-4 w-4" /> Catat Makan
                    </button>
                </div>

                {flash?.success && (
                    <div className="rounded-lg bg-primary-soft border border-primary/30 px-4 py-3 text-sm text-primary-soft-foreground">{flash.success}</div>
                )}

                {/* Daily nutrition summary */}
                {dailyNutrition && (
                    <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
                        <h2 className="mb-4 font-semibold text-foreground">Gizi Hari Ini</h2>
                        <div className="space-y-3">
                            <NutritionBar label={`Kalori (kkal)`} value={dailyNutrition.consumed.calories} max={dailyNutrition.target.calories} color="bg-orange-400" />
                            <NutritionBar label={`Protein (g)`} value={dailyNutrition.consumed.protein} max={dailyNutrition.target.protein} color="bg-blue-400" />
                            <NutritionBar label={`Lemak (g)`} value={dailyNutrition.consumed.fat} max={dailyNutrition.target.fat} color="bg-yellow-400" />
                            <NutritionBar label={`Karbohidrat (g)`} value={dailyNutrition.consumed.carbs} max={dailyNutrition.target.carbs} color="bg-green-400" />
                        </div>
                    </div>
                )}

                {/* Today logs */}
                <div className="space-y-4">
                    <h2 className="font-semibold text-foreground">Catatan Hari Ini</h2>
                    {todayLogs.length === 0 ? (
                        <div className="rounded-2xl border-2 border-dashed border-primary/30 bg-primary-soft p-8 text-center text-sm text-muted-foreground">
                            Belum ada catatan makan hari ini
                        </div>
                    ) : (
                        todayLogs.map((log) => (
                            <div key={log.id} className="rounded-2xl border border-border bg-white p-5 shadow-sm">
                                <div className="mb-3 flex items-center justify-between">
                                    <span className="font-semibold text-foreground">{mealLabels[log.meal_type] ?? log.meal_type}</span>
                                    <div className="flex items-center gap-3">
                                        <span className="text-sm font-medium text-orange-600">{Math.round(log.total_calories)} kkal</span>
                                        <button onClick={() => destroyLog(log.id)} className="rounded p-1 text-red-400 hover:bg-red-50">
                                            <Trash2 className="h-4 w-4" />
                                        </button>
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    {log.items.map((item) => (
                                        <div key={item.id} className="flex justify-between text-sm text-muted-foreground">
                                            <span>{item.food_name} ({item.portion} {item.serving_unit})</span>
                                            <span>{Math.round(item.calories)} kkal</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Form modal */}
                {showForm && (
                    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 md:items-center">
                        <div className="flex h-[90vh] w-full max-w-2xl flex-col rounded-t-2xl bg-white shadow-2xl md:h-auto md:max-h-[85vh] md:rounded-2xl">
                            <div className="flex items-center justify-between border-b border-border px-6 py-4">
                                <h2 className="text-lg font-bold text-foreground">Catat Makanan</h2>
                                <button onClick={() => setShowForm(false)} className="rounded-lg p-1 hover:bg-muted">
                                    <X className="h-5 w-5 text-muted-foreground" />
                                </button>
                            </div>

                            <div className="flex flex-1 overflow-hidden">
                                {/* Food picker */}
                                <div className="flex w-1/2 flex-col border-r border-border">
                                    <div className="p-3">
                                        <div className="relative">
                                            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                                            <input
                                                type="text"
                                                value={search}
                                                onChange={(e) => setSearch(e.target.value)}
                                                placeholder="Cari makanan..."
                                                className="w-full rounded-lg border border-border py-2 pl-9 pr-3 text-sm focus:outline-none focus:border-green-400"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex-1 overflow-y-auto px-3 pb-3 space-y-1">
                                        {filteredFoods.map((food) => (
                                            <button
                                                key={food.id}
                                                onClick={() => addToCart(food)}
                                                className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left hover:bg-primary-soft"
                                            >
                                                <div>
                                                    <p className="text-sm font-medium text-foreground">{food.name}</p>
                                                    <p className="text-xs text-muted-foreground">{categoryLabels[food.category] ?? food.category} · {Math.round(food.calories)} kkal/100g</p>
                                                </div>
                                                <Plus className="h-4 w-4 text-primary flex-shrink-0" />
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Cart + form */}
                                <div className="flex w-1/2 flex-col">
                                    <div className="flex-1 overflow-y-auto p-3 space-y-2">
                                        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Dipilih ({cart.length})</p>
                                        {cart.length === 0 && (
                                            <p className="text-center py-8 text-xs text-muted-foreground">Pilih makanan dari kiri</p>
                                        )}
                                        {cart.map((item) => (
                                            <div key={item.food.id} className="rounded-lg bg-muted/50 p-3">
                                                <div className="flex items-start justify-between mb-2">
                                                    <p className="text-sm font-medium text-foreground leading-tight">{item.food.name}</p>
                                                    <button onClick={() => removeFromCart(item.food.id)} className="ml-1 text-red-400 hover:text-red-600">
                                                        <X className="h-3.5 w-3.5" />
                                                    </button>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <input
                                                        type="number"
                                                        value={item.portion}
                                                        onChange={(e) => updatePortion(item.food.id, e.target.value)}
                                                        step={item.food.serving_size}
                                                        min={item.food.serving_size}
                                                        className="w-16 rounded border border-border px-2 py-1 text-xs"
                                                    />
                                                    <span className="text-xs text-muted-foreground">{item.food.serving_unit}</span>
                                                    <span className="ml-auto text-xs font-medium text-orange-500">
                                                        {Math.round(item.food.calories * item.portion / 100)} kkal
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                        {cart.length > 0 && (
                                            <div className="rounded-lg bg-orange-50 px-3 py-2 text-xs">
                                                <span className="font-semibold text-orange-700">{Math.round(cartNutrition.calories)} kkal</span>
                                                <span className="text-orange-500"> · P:{Math.round(cartNutrition.protein)}g · L:{Math.round(cartNutrition.fat)}g · K:{Math.round(cartNutrition.carbs)}g</span>
                                            </div>
                                        )}
                                    </div>

                                    <form onSubmit={submit} className="border-t border-border p-3 space-y-2">
                                        <select
                                            value={data.meal_type}
                                            onChange={(e) => setData('meal_type', e.target.value)}
                                            className="w-full rounded-lg border border-border px-3 py-2 text-sm focus:outline-none focus:border-green-400"
                                        >
                                            <option value="sarapan">Sarapan</option>
                                            <option value="makan_siang">Makan Siang</option>
                                            <option value="makan_malam">Makan Malam</option>
                                            <option value="snack">Snack</option>
                                        </select>
                                        <input
                                            type="date"
                                            value={data.log_date}
                                            onChange={(e) => setData('log_date', e.target.value)}
                                            max={new Date().toISOString().split('T')[0]}
                                            className="w-full rounded-lg border border-border px-3 py-2 text-sm focus:outline-none focus:border-green-400"
                                        />
                                        <button
                                            type="submit"
                                            disabled={processing || cart.length === 0}
                                            className="w-full rounded-lg bg-primary py-2.5 text-sm font-semibold text-white hover:bg-primary/90 disabled:opacity-50"
                                        >
                                            {processing ? 'Menyimpan...' : 'Simpan Log'}
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
