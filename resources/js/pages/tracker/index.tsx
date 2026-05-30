import { Head, router, useForm, usePage } from '@inertiajs/react';
import { Plus, Trash2, X } from 'lucide-react';
import { useState } from 'react';
import InputError from '@/components/input-error';

type GrowthRecord = {
    id: number;
    weight: number;
    height: number;
    lila: number | null;
    head_circumference: number | null;
    bmi: number;
    bmi_status: string;
    height_status: string;
    bmi_status_color: string;
    weight_for_age_z: number;
    height_for_age_z: number;
    bmi_for_age_z: number;
    recorded_at: string;
    notes: string | null;
};

type ChildInfo = { id: number; name: string; gender: string; age_in_months: number; age_string: string } | null;

const bmiColorClass: Record<string, string> = {
    green: 'text-primary-soft-foreground bg-primary-soft',
    yellow: 'text-yellow-700 bg-yellow-100',
    red: 'text-red-700 bg-red-100',
    gray: 'text-foreground bg-muted',
};

export default function TrackerIndex({
    records,
    activeChild,
    noChild,
}: {
    records: GrowthRecord[];
    activeChild: ChildInfo;
    noChild: boolean;
}) {
    const { flash } = usePage<{ flash: { success?: string } }>().props;
    const [showForm, setShowForm] = useState(false);

    const { data, setData, post, processing, errors, reset } = useForm({
        weight: '',
        height: '',
        lila: '',
        head_circumference: '',
        recorded_at: new Date().toISOString().split('T')[0],
        notes: '',
    });

    function submit(e: React.FormEvent) {
        e.preventDefault();
        post('/tracker', {
            onSuccess: () => {
                reset();
                setShowForm(false);
            },
        });
    }

    function destroy(id: number) {
        if (confirm('Hapus data pertumbuhan ini?')) {
            router.delete(`/tracker/${id}`);
        }
    }

    if (noChild) {
        return (
            <>
                <Head title="G-Growth Tracker" />
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
            <Head title="G-Growth Tracker" />
            <div className="p-6 space-y-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-foreground">G-Growth Tracker</h1>
                        {activeChild && (
                            <p className="mt-1 text-sm text-muted-foreground">{activeChild.name} · {activeChild.age_string}</p>
                        )}
                    </div>
                    <button
                        onClick={() => setShowForm(true)}
                        className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-700"
                    >
                        <Plus className="h-4 w-4" /> Catat Pengukuran
                    </button>
                </div>

                {flash?.success && (
                    <div className="rounded-lg bg-primary-soft border border-primary/30 px-4 py-3 text-sm text-primary-soft-foreground">
                        {flash.success}
                    </div>
                )}

                {/* Form modal */}
                {showForm && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                        <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
                            <div className="mb-5 flex items-center justify-between">
                                <h2 className="text-lg font-bold text-foreground">Catat Pengukuran Baru</h2>
                                <button onClick={() => setShowForm(false)} className="rounded-lg p-1 hover:bg-muted">
                                    <X className="h-5 w-5 text-muted-foreground" />
                                </button>
                            </div>
                            <form onSubmit={submit} className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="mb-1 block text-xs font-medium text-foreground">Berat (kg) *</label>
                                        <input
                                            type="number"
                                            step="0.1"
                                            value={data.weight}
                                            onChange={(e) => setData('weight', e.target.value)}
                                            placeholder="12.5"
                                            className="w-full rounded-lg border border-border px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
                                        />
                                        <InputError message={errors.weight} />
                                    </div>
                                    <div>
                                        <label className="mb-1 block text-xs font-medium text-foreground">Tinggi (cm) *</label>
                                        <input
                                            type="number"
                                            step="0.1"
                                            value={data.height}
                                            onChange={(e) => setData('height', e.target.value)}
                                            placeholder="85.0"
                                            className="w-full rounded-lg border border-border px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
                                        />
                                        <InputError message={errors.height} />
                                    </div>
                                    <div>
                                        <label className="mb-1 block text-xs font-medium text-foreground">LiLA (cm)</label>
                                        <input
                                            type="number"
                                            step="0.1"
                                            value={data.lila}
                                            onChange={(e) => setData('lila', e.target.value)}
                                            placeholder="14.5"
                                            className="w-full rounded-lg border border-border px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
                                        />
                                        <InputError message={errors.lila} />
                                    </div>
                                    <div>
                                        <label className="mb-1 block text-xs font-medium text-foreground">Lingkar Kepala (cm)</label>
                                        <input
                                            type="number"
                                            step="0.1"
                                            value={data.head_circumference}
                                            onChange={(e) => setData('head_circumference', e.target.value)}
                                            placeholder="46.0"
                                            className="w-full rounded-lg border border-border px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
                                        />
                                        <InputError message={errors.head_circumference} />
                                    </div>
                                </div>
                                <div>
                                    <label className="mb-1 block text-xs font-medium text-foreground">Tanggal Pengukuran *</label>
                                    <input
                                        type="date"
                                        value={data.recorded_at}
                                        onChange={(e) => setData('recorded_at', e.target.value)}
                                        max={new Date().toISOString().split('T')[0]}
                                        className="w-full rounded-lg border border-border px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
                                    />
                                    <InputError message={errors.recorded_at} />
                                </div>
                                <div>
                                    <label className="mb-1 block text-xs font-medium text-foreground">Catatan</label>
                                    <textarea
                                        value={data.notes}
                                        onChange={(e) => setData('notes', e.target.value)}
                                        rows={2}
                                        placeholder="Catatan tambahan..."
                                        className="w-full rounded-lg border border-border px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="w-full rounded-lg bg-blue-600 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 disabled:opacity-60"
                                >
                                    {processing ? 'Menyimpan...' : 'Simpan Pengukuran'}
                                </button>
                            </form>
                        </div>
                    </div>
                )}

                {/* Records table */}
                {records.length === 0 ? (
                    <div className="rounded-2xl border-2 border-dashed border-blue-200 bg-blue-50 p-12 text-center">
                        <p className="text-muted-foreground">Belum ada data pertumbuhan. Mulai catat pengukuran pertama!</p>
                    </div>
                ) : (
                    <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead className="border-b border-border bg-muted/50">
                                    <tr>
                                        <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wide text-muted-foreground">Tanggal</th>
                                        <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wide text-muted-foreground">BB (kg)</th>
                                        <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wide text-muted-foreground">TB (cm)</th>
                                        <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wide text-muted-foreground">BMI</th>
                                        <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wide text-muted-foreground">Status Gizi</th>
                                        <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wide text-muted-foreground">Status Tinggi</th>
                                        <th className="px-4 py-3"></th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-50">
                                    {records.map((r) => (
                                        <tr key={r.id} className="hover:bg-muted/50">
                                            <td className="px-4 py-3 font-medium text-foreground">{r.recorded_at}</td>
                                            <td className="px-4 py-3 text-foreground">{r.weight}</td>
                                            <td className="px-4 py-3 text-foreground">{r.height}</td>
                                            <td className="px-4 py-3 text-foreground">{r.bmi != null ? Number(r.bmi).toFixed(1) : '-'}</td>
                                            <td className="px-4 py-3">
                                                <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${bmiColorClass[r.bmi_status_color] ?? bmiColorClass.gray}`}>
                                                    {r.bmi_status}
                                                </span>
                                            </td>
                                            <td className="px-4 py-3 text-foreground">{r.height_status}</td>
                                            <td className="px-4 py-3">
                                                <button
                                                    onClick={() => destroy(r.id)}
                                                    className="rounded-lg p-1.5 text-red-400 hover:bg-red-50 hover:text-red-600"
                                                >
                                                    <Trash2 className="h-4 w-4" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
