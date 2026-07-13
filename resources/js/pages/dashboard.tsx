/* eslint-disable */  
import { Head, Link } from '@inertiajs/react';
import React, { useState, useEffect } from 'react';

// ── Icons ────────────────────────────────────────────────────────────
const Icons = {
    Dashboard:  (p: any) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...p}><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>,
    Orders:     (p: any) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect width="6" height="4" x="9" y="3" rx="1"/><path d="M9 12h6M9 16h4"/></svg>,
    Users:      (p: any) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    Revenue:    (p: any) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...p}><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
    Pending:    (p: any) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...p}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
    Check:      (p: any) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...p}><polyline points="20 6 9 17 4 12"/></svg>,
    Palette:    (p: any) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...p}><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>,
    Sticker:    (p: any) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M15.5 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z"/><polyline points="15 3 15 9 21 9"/></svg>,
    Trend:      (p: any) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...p}><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>,
    Menu:       (p: any) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...p}><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>,
    Close:      (p: any) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...p}><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
    Eye:        (p: any) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>,
    Trash:      (p: any) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...p}><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>,
    Logout:     (p: any) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>,
    Notification:(p: any) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>,
};

// ── Mock Data ─────────────────────────────────────────────────────────
const recentOrders: any[] = [];

const statusColors: Record<string, string> = {
    'Completed':   'bg-emerald-100 text-emerald-700 border-emerald-300',
    'In Progress': 'bg-amber-100 text-amber-700 border-amber-300',
    'Waiting':     'bg-rose-100 text-rose-600 border-rose-300',
};

const stats = [
    { label: 'Total Revenue', value: '$0.00', sub: 'No revenue yet', icon: Icons.Revenue, color: 'text-[#E67E22]', bg: 'bg-[#fff4e6]' },
    { label: 'Active Orders', value: '0', sub: '0 waiting review', icon: Icons.Orders, color: 'text-[#f08967]', bg: 'bg-[#fff0eb]' },
    { label: 'Total Clients', value: '0', sub: 'No clients yet', icon: Icons.Users, color: 'text-[#9b59b6]', bg: 'bg-[#f5eeff]' },
    { label: 'Stickers Sold', value: '0', sub: 'All time', icon: Icons.Sticker, color: 'text-[#2ecc71]', bg: 'bg-[#edfbf3]' },
];

const navItems = [
    { id: 'overview', label: 'Overview', icon: Icons.Dashboard },
    { id: 'orders', label: 'Orders', icon: Icons.Orders },
    { id: 'commissions', label: 'Commissions', icon: Icons.Palette },
    { id: 'services', label: 'Services', icon: Icons.Sticker },
    { id: 'clients', label: 'Clients', icon: Icons.Users },
];

// ── Status Badge ──────────────────────────────────────────────────────
function StatusBadge({ status }: { status: string }) {
    return (
        <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${statusColors[status]}`}>
            <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70" />
            {status}
        </span>
    );
}

// ── Sidebar ───────────────────────────────────────────────────────────
function Sidebar({ active, setActive, collapsed, setCollapsed }: any) {
    return (
        <aside className={`flex flex-col bg-[#1e1309] border-r-[3px] border-[#4a2c11] transition-all duration-300 ${collapsed ? 'w-[70px]' : 'w-[220px]'} min-h-screen shrink-0`}>
            {/* Logo */}
            <div className={`flex items-center gap-3 px-4 py-5 border-b-[2px] border-[#4a2c11]/60 ${collapsed ? 'justify-center' : ''}`}>
                <div className="w-9 h-9 bg-[#E67E22] rounded-xl border-[2px] border-[#4a2c11] flex items-center justify-center text-white font-black text-lg shrink-0">T</div>
                {!collapsed && <div>
                    <div className="font-black text-white text-[13px] tracking-tight leading-none">ToffeeBean</div>
                    <div className="text-[10px] text-[#E67E22] font-bold tracking-wider uppercase mt-0.5">Admin Panel</div>
                </div>}
            </div>

            {/* Nav */}
            <nav className="flex-1 py-4 space-y-1 px-2">
                {navItems.map(item => {
                    const isActive = active === item.id;
                    return (
                        <button
                            key={item.id}
                            onClick={() => setActive(item.id)}
                            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all font-bold text-[13px] ${
                                isActive ? 'bg-[#E67E22] text-white shadow-lg' : 'text-gray-400 hover:text-white hover:bg-white/10'
                            } ${collapsed ? 'justify-center' : ''}`}
                        >
                            <item.icon width={18} height={18} className="shrink-0" />
                            {!collapsed && item.label}
                        </button>
                    );
                })}
            </nav>

            {/* Bottom */}
            <div className="px-2 pb-4 space-y-1 border-t-[2px] border-[#4a2c11]/60 pt-4">
                <a href="/" className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-all font-bold text-[13px] ${collapsed ? 'justify-center' : ''}`}>
                    <Icons.Eye width={18} height={18} className="shrink-0" />
                    {!collapsed && 'View Site'}
                </a>
                <Link href="/logout" method="post" as="button" className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 transition-all font-bold text-[13px] ${collapsed ? 'justify-center' : ''}`}>
                    <Icons.Logout width={18} height={18} className="shrink-0" />
                    {!collapsed && 'Logout'}
                </Link>
                <button
                    onClick={() => setCollapsed(!collapsed)}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-gray-500 hover:text-white hover:bg-white/10 transition-all font-bold text-[12px] ${collapsed ? 'justify-center' : ''}`}
                >
                    {collapsed ? <Icons.Menu width={16} height={16} /> : <><Icons.Close width={14} height={14} /><span>Collapse</span></>}
                </button>
            </div>
        </aside>
    );
}

// ── Stat Card ─────────────────────────────────────────────────────────
function StatCard({ stat }: { stat: typeof stats[0] }) {
    return (
        <div className="bg-white border-[3px] border-[#4a2c11] rounded-2xl p-5 shadow-[4px_4px_0px_#4a2c11] hover:-translate-y-1 transition-transform">
            <div className="flex items-center justify-between mb-4">
                <span className="text-[12px] font-bold uppercase tracking-wider text-[#4a2c11]/60">{stat.label}</span>
                <div className={`w-9 h-9 ${stat.bg} rounded-xl flex items-center justify-center`}>
                    <stat.icon width={18} height={18} className={stat.color} />
                </div>
            </div>
            <div className={`text-3xl font-black ${stat.color} tracking-tight`}>{stat.value}</div>
            <div className="flex items-center gap-1.5 mt-1.5">
                <Icons.Trend width={12} height={12} className="text-emerald-500" />
                <span className="text-[11px] font-bold text-[#4a2c11]/50">{stat.sub}</span>
            </div>
        </div>
    );
}

// ── Orders Table ──────────────────────────────────────────────────────
function OrdersTable({ data, onStatusChange, onDelete, onView }: { data: any[], onStatusChange?: (id: number, status: string) => void, onDelete?: (id: number) => void, onView?: (order: any) => void }) {
    const formatMoney = (amount: number) => amount.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});

    return (
        <div className="bg-white border-[3px] border-[#4a2c11] rounded-2xl shadow-[4px_4px_0px_#4a2c11] overflow-hidden">
            <div className="px-6 py-4 border-b-[2px] border-[#fef1df] flex items-center justify-between">
                <h3 className="font-black text-[#4a2c11] text-[15px] flex items-center gap-2">
                    <Icons.Orders width={16} height={16} className="text-[#E67E22]" />
                    Recent Orders
                </h3>
                <span className="text-[11px] font-bold text-[#4a2c11]/40 bg-[#fef1df] px-3 py-1 rounded-full">{data.length} entries</span>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-[13px]">
                    <thead>
                        <tr className="bg-[#fef1df]/60">
                            <th className="text-left px-6 py-3 font-bold text-[#4a2c11]/60 text-[11px] uppercase tracking-wider">Order</th>
                            <th className="text-left px-4 py-3 font-bold text-[#4a2c11]/60 text-[11px] uppercase tracking-wider">Client</th>
                            <th className="text-left px-4 py-3 font-bold text-[#4a2c11]/60 text-[11px] uppercase tracking-wider">Type</th>
                            <th className="text-left px-4 py-3 font-bold text-[#4a2c11]/60 text-[11px] uppercase tracking-wider">Qty</th>
                            <th className="text-left px-4 py-3 font-bold text-[#4a2c11]/60 text-[11px] uppercase tracking-wider">Total</th>
                            <th className="text-left px-4 py-3 font-bold text-[#4a2c11]/60 text-[11px] uppercase tracking-wider">Status</th>
                            <th className="text-left px-4 py-3 font-bold text-[#4a2c11]/60 text-[11px] uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.length === 0 ? (
                            <tr>
                                <td colSpan={7} className="px-6 py-8 text-center text-[#4a2c11]/50 font-bold">
                                    No orders found.
                                </td>
                            </tr>
                        ) : data.map((order, i) => (
                            <tr key={order.id} className={`border-t border-[#fef1df] hover:bg-[#fffcf7] transition-colors ${i % 2 === 0 ? '' : 'bg-[#fffcf7]/40'}`}>
                                <td className="px-6 py-3.5 font-bold text-[#4a2c11]">#{order.id}</td>
                                <td className="px-4 py-3.5">
                                    <div className="flex items-center gap-2">
                                        <div className="w-7 h-7 bg-[#fef1df] rounded-full border-[2px] border-[#4a2c11] flex items-center justify-center text-sm">{order.commission?.avatar || '📦'}</div>
                                        <span className="font-bold text-[#4a2c11] truncate max-w-[120px]" title={order.client_email}>{order.client_email}</span>
                                    </div>
                                </td>
                                <td className="px-4 py-3.5 text-[#4a2c11]/70 font-medium max-w-[150px] truncate" title={order.commission?.title}>{order.commission?.title || 'Unknown'}</td>
                                <td className="px-4 py-3.5 font-bold text-[#4a2c11]">×{order.quantity}</td>
                                <td className="px-4 py-3.5 font-black text-[#E67E22]">${formatMoney(order.total_price)}</td>
                                <td className="px-4 py-3.5"><StatusBadge status={order.status} /></td>
                                <td className="px-4 py-3.5">
                                    <div className="flex items-center gap-1.5">
                                        {onView && (
                                            <button onClick={() => onView(order)} title="View Details" className="w-7 h-7 flex items-center justify-center rounded-lg bg-[#fff4e6] border border-[#E67E22]/30 text-[#E67E22] hover:bg-[#E67E22] hover:text-white transition-all">
                                                <Icons.Eye width={14} height={14} />
                                            </button>
                                        )}
                                        {onStatusChange && (
                                            <select 
                                                className="text-[11px] font-bold bg-white border border-[#4a2c11]/30 rounded-lg px-1.5 py-1 outline-none focus:border-[#E67E22] h-7"
                                                value={order.status} 
                                                onChange={e => onStatusChange(order.id, e.target.value)}
                                            >
                                                <option value="Waiting">Waiting</option>
                                                <option value="In Progress">In Progress</option>
                                                <option value="Completed">Completed</option>
                                            </select>
                                        )}
                                        {onDelete && (
                                            <button onClick={() => onDelete(order.id)} title="Delete Order" className="w-7 h-7 flex items-center justify-center rounded-lg bg-rose-50 border border-rose-200 text-rose-400 hover:bg-rose-500 hover:text-white transition-all">
                                                <Icons.Trash width={14} height={14} />
                                            </button>
                                        )}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

// ── Donut-style Breakdown ─────────────────────────────────────────────
function OrderBreakdown() {
    const items = [
        { label: 'Custom Sticker', count: 0, pct: 0, color: '#E67E22' },
        { label: 'Reference Sheet', count: 0, pct: 0, color: '#f08967' },
        { label: 'Illustration/Poster', count: 0, pct: 0, color: '#9b59b6' },
    ];
    const totalSpent = items.reduce((acc, curr) => acc + curr.count, 0); // Fake logic for breakdown
    return (
        <div className="bg-white border-[3px] border-[#4a2c11] rounded-2xl p-6 shadow-[4px_4px_0px_#4a2c11]">
            <h3 className="font-black text-[#4a2c11] text-[15px] mb-5 flex items-center gap-2">
                <Icons.Palette width={16} height={16} className="text-[#E67E22]" />
                Order Breakdown
            </h3>
            <div className="space-y-4">
                {items.map(item => (
                    <div key={item.label}>
                        <div className="flex justify-between items-center mb-1.5">
                            <span className="text-[12px] font-bold text-[#4a2c11]/70">{item.label}</span>
                            <span className="text-[12px] font-black text-[#4a2c11]">{item.count} <span className="text-[#4a2c11]/40 font-bold">({item.pct}%)</span></span>
                        </div>
                        <div className="h-2.5 bg-[#fef1df] rounded-full border border-[#4a2c11]/20 overflow-hidden">
                            <div className="h-full rounded-full transition-all duration-700" style={{ width: `${item.pct}%`, backgroundColor: item.color }} />
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-6 pt-4 border-t-[2px] border-[#fef1df]">
                <div className="flex justify-between text-[12px]">
                    <span className="font-bold text-[#4a2c11]/50">Total orders</span>
                    <span className="font-black text-[#4a2c11]">{totalSpent}</span>
                </div>
            </div>
        </div>
    );
}

// ── Revenue Chart ─────────────────────────────────────────────────────
function RevenueChart() {
    const [timeframe, setTimeframe] = useState('Weekly');

    const chartData: Record<string, { label: string; amount: number }[]> = {
        'Weekly': [
            { label: 'Mon', amount: 0 },
            { label: 'Tue', amount: 0 },
            { label: 'Wed', amount: 0 },
            { label: 'Thu', amount: 0 },
            { label: 'Fri', amount: 0 },
            { label: 'Sat', amount: 0 },
            { label: 'Sun', amount: 0 },
        ],
        'Monthly': [
            { label: 'Wk 1', amount: 0 },
            { label: 'Wk 2', amount: 0 },
            { label: 'Wk 3', amount: 0 },
            { label: 'Wk 4', amount: 0 },
        ],
        'Yearly': [
            { label: 'Jan', amount: 0 },
            { label: 'Feb', amount: 0 },
            { label: 'Mar', amount: 0 },
            { label: 'Apr', amount: 0 },
            { label: 'May', amount: 0 },
            { label: 'Jun', amount: 0 },
            { label: 'Jul', amount: 0 },
            { label: 'Aug', amount: 0 },
            { label: 'Sep', amount: 0 },
            { label: 'Oct', amount: 0 },
            { label: 'Nov', amount: 0 },
            { label: 'Dec', amount: 0 },
        ],
    };

    const data = chartData[timeframe];
    const max = Math.max(...data.map(d => d.amount), 1); // Avoid division by zero

    return (
        <div className="bg-white border-[3px] border-[#4a2c11] rounded-2xl p-6 shadow-[4px_4px_0px_#4a2c11]">
            <div className="flex items-center justify-between mb-5">
                <h3 className="font-black text-[#4a2c11] text-[15px] flex items-center gap-2">
                    <Icons.Trend width={16} height={16} className="text-[#E67E22]" />
                    <select
                        value={timeframe}
                        onChange={(e) => setTimeframe(e.target.value)}
                        className="bg-transparent font-black text-[#4a2c11] outline-none cursor-pointer hover:text-[#E67E22] transition-colors appearance-none pr-4 relative"
                        style={{ background: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%234a2c11%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E") no-repeat right 0.15rem center', backgroundSize: '0.65rem auto' }}
                    >
                        <option value="Weekly">Weekly Revenue</option>
                        <option value="Monthly">Monthly Revenue</option>
                        <option value="Yearly">Yearly Revenue</option>
                    </select>
                </h3>
            </div>
            <div className="flex items-end justify-between h-[120px] gap-2 mt-4">
                {data.map(d => (
                    <div key={d.label} className="flex flex-col items-center gap-2 flex-1 group">
                        <div className="w-full relative h-full flex items-end justify-center rounded-t border-[2px] border-b-0 border-[#4a2c11]/0 group-hover:border-[#4a2c11]/20 transition-all">
                            {/* Bar */}
                            <div 
                                className="w-[80%] bg-[#fef1df] border-[2px] border-[#4a2c11] rounded-t-lg transition-all duration-700 group-hover:bg-[#E67E22] group-hover:-translate-y-1 relative"
                                style={{ height: `${Math.max((d.amount / max) * 100, 5)}%` }}
                            >
                                {/* Tooltip */}
                                <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-[#4a2c11] text-white text-[10px] font-bold px-2 py-1 rounded transition-opacity whitespace-nowrap z-10 pointer-events-none">
                                    ${d.amount}
                                </div>
                            </div>
                        </div>
                        <span className="text-[10px] font-bold text-[#4a2c11]/50 uppercase tracking-wider">{d.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

// ── Quick Actions ─────────────────────────────────────────────────────
function QuickActions() {
    const actions = [
        { label: 'Mark All Waiting as In Progress', color: 'bg-amber-500', icon: Icons.Pending },
        { label: 'Export Orders CSV', color: 'bg-[#4a2c11]', icon: Icons.Orders },
        { label: 'View Commission Page', color: 'bg-[#E67E22]', icon: Icons.Palette },
    ];
    return (
        <div className="bg-white border-[3px] border-[#4a2c11] rounded-2xl p-6 shadow-[4px_4px_0px_#4a2c11]">
            <h3 className="font-black text-[#4a2c11] text-[15px] mb-5 flex items-center gap-2">
                <Icons.Check width={16} height={16} className="text-[#E67E22]" />
                Quick Actions
            </h3>
            <div className="space-y-3">
                {actions.map(a => (
                    <button key={a.label} className={`w-full flex items-center gap-3 ${a.color} text-white font-bold text-[13px] px-4 py-3 rounded-xl border-[2px] border-[#4a2c11] shadow-[2px_2px_0px_#4a2c11] hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_#4a2c11] transition-all`}>
                        <a.icon width={15} height={15} />
                        {a.label}
                    </button>
                ))}
            </div>
        </div>
    );
}

// ── Manage Commissions ────────────────────────────────────────────────
function ManageCommissions() {
    const [commissions, setCommissions] = useState<any[]>([]);
    const [editingId, setEditingId] = useState<number | null>(null);
    const [editForm, setEditForm] = useState<any>({});
    const [showNewForm, setShowNewForm] = useState(false);
    const [newForm, setNewForm] = useState({ title: '', description: '', base_price: '', price_display: '', avatar: '🎨', is_active: true, sort_order: 0 });
    const [toastMessage, setToastMessage] = useState<string | null>(null);

    const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || '';

    const showToast = (msg: string) => {
        setToastMessage(msg);
        setTimeout(() => setToastMessage(null), 3000);
    };

    const loadCommissions = () => {
        fetch('/api/commissions')
            .then(res => res.json())
            .then(data => setCommissions(data));
    };

    useEffect(() => { loadCommissions(); }, []);

    const handleSave = (id: number) => {
        fetch(`/api/commissions/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json', 'X-CSRF-TOKEN': csrfToken },
            body: JSON.stringify(editForm),
        }).then(() => { setEditingId(null); loadCommissions(); showToast("Commission updated successfully! ✨"); });
    };

    const handleCreate = () => {
        fetch('/api/commissions', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'X-CSRF-TOKEN': csrfToken },
            body: JSON.stringify({ ...newForm, base_price: parseFloat(newForm.base_price) || 0 }),
        }).then(() => { setShowNewForm(false); setNewForm({ title: '', description: '', base_price: '', price_display: '', avatar: '🎨', is_active: true, sort_order: 0 }); loadCommissions(); showToast("Commission created successfully! 🎉"); });
    };

    const handleDelete = (id: number) => {
        if (!confirm('Are you sure you want to delete this commission?')) return;
        fetch(`/api/commissions/${id}`, {
            method: 'DELETE',
            headers: { 'X-CSRF-TOKEN': csrfToken },
        }).then(() => { loadCommissions(); showToast("Commission deleted. 🗑️"); });
    };

    const handleToggleActive = (c: any) => {
        fetch(`/api/commissions/${c.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json', 'X-CSRF-TOKEN': csrfToken },
            body: JSON.stringify({ is_active: !c.is_active }),
        }).then(() => { loadCommissions(); showToast(`Commission is now ${!c.is_active ? 'visible' : 'hidden'}. 👀`); });
    };

    const inputClass = "w-full px-3 py-2 rounded-lg border-[2px] border-[#4a2c11]/30 text-sm font-bold text-[#4a2c11] focus:border-[#E67E22] focus:outline-none transition-colors bg-white";

    return (
        <div className="space-y-6 relative">
            {/* Toast Notification */}
            {toastMessage && (
                <div className="fixed bottom-10 right-10 bg-[#4a2c11] text-white px-5 py-3 rounded-xl font-bold text-sm shadow-[4px_4px_0px_#E67E22] flex items-center gap-3 z-50 animate-[bounce_0.3s_ease-out]">
                    <Icons.Check width={18} height={18} className="text-emerald-400" />
                    {toastMessage}
                </div>
            )}

            {/* Header card */}
            <div className="bg-white border-[3px] border-[#4a2c11] rounded-2xl shadow-[4px_4px_0px_#4a2c11] overflow-hidden">
                <div className="px-6 py-4 border-b-[2px] border-[#fef1df] flex items-center justify-between">
                    <h3 className="font-black text-[#4a2c11] text-[15px] flex items-center gap-2">
                        <Icons.Palette width={16} height={16} className="text-[#E67E22]" />
                        Manage Commissions
                        <span className="ml-2 text-[11px] font-bold text-[#4a2c11]/40 bg-[#fef1df] px-3 py-1 rounded-full">{commissions.length} items</span>
                    </h3>
                    <button onClick={() => setShowNewForm(!showNewForm)} className="bg-[#E67E22] text-white px-4 py-1.5 rounded-full font-bold text-xs border-[2px] border-[#4a2c11] hover:-translate-y-0.5 shadow-[2px_2px_0px_#4a2c11] transition-transform">
                        {showNewForm ? '✕ Cancel' : '+ New Commission'}
                    </button>
                </div>

                {/* New Commission Form */}
                {showNewForm && (
                    <div className="p-6 bg-[#fffcf7] border-b-[2px] border-[#fef1df]">
                        <h4 className="font-black text-[#4a2c11] text-sm mb-4">Create New Commission</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="text-[11px] font-bold text-[#4a2c11]/60 uppercase tracking-wider mb-1 block">Title</label>
                                <input className={inputClass} value={newForm.title} onChange={e => setNewForm({...newForm, title: e.target.value})} placeholder="e.g. Cute Custom Sticker" />
                            </div>
                            <div>
                                <label className="text-[11px] font-bold text-[#4a2c11]/60 uppercase tracking-wider mb-1 block">Avatar (emoji)</label>
                                <input className={inputClass} value={newForm.avatar} onChange={e => setNewForm({...newForm, avatar: e.target.value})} placeholder="🎨" />
                            </div>
                            <div className="md:col-span-2">
                                <label className="text-[11px] font-bold text-[#4a2c11]/60 uppercase tracking-wider mb-1 block">Description</label>
                                <textarea className={inputClass + " resize-none"} rows={2} value={newForm.description} onChange={e => setNewForm({...newForm, description: e.target.value})} placeholder="Describe the commission..." />
                            </div>
                            <div>
                                <label className="text-[11px] font-bold text-[#4a2c11]/60 uppercase tracking-wider mb-1 block">Base Price ($)</label>
                                <input className={inputClass} type="number" step="0.01" value={newForm.base_price} onChange={e => setNewForm({...newForm, base_price: e.target.value})} placeholder="2.50" />
                            </div>
                            <div>
                                <label className="text-[11px] font-bold text-[#4a2c11]/60 uppercase tracking-wider mb-1 block">Price Display</label>
                                <input className={inputClass} value={newForm.price_display} onChange={e => setNewForm({...newForm, price_display: e.target.value})} placeholder="e.g. 10$ - 50$" />
                            </div>
                        </div>
                        <div className="mt-4 flex justify-end">
                            <button onClick={handleCreate} className="bg-emerald-500 text-white px-5 py-2 rounded-xl font-bold text-xs border-[2px] border-[#4a2c11] shadow-[2px_2px_0px_#4a2c11] hover:-translate-y-0.5 transition-transform">
                                ✓ Create Commission
                            </button>
                        </div>
                    </div>
                )}

                {/* Commission Cards */}
                <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {commissions.map(c => (
                            <div key={c.id} className={`border-[2px] rounded-xl p-4 flex flex-col gap-3 relative transition-all h-full ${c.is_active ? 'border-[#4a2c11] bg-white' : 'border-[#4a2c11]/20 bg-gray-50 opacity-60'}`}>
                                {editingId === c.id ? (
                                    /* Edit Mode */
                                    <div className="flex flex-col h-full space-y-3">
                                        <input className={inputClass} value={editForm.title} onChange={e => setEditForm({...editForm, title: e.target.value})} placeholder="Title" />
                                        <input className={inputClass} value={editForm.avatar} onChange={e => setEditForm({...editForm, avatar: e.target.value})} placeholder="Avatar" />
                                        <textarea className={inputClass + " resize-none"} rows={2} value={editForm.description} onChange={e => setEditForm({...editForm, description: e.target.value})} />
                                        <div className="grid grid-cols-2 gap-2">
                                            <input className={inputClass} type="number" step="0.01" value={editForm.base_price} onChange={e => setEditForm({...editForm, base_price: e.target.value})} placeholder="Base Price" />
                                            <input className={inputClass} value={editForm.price_display} onChange={e => setEditForm({...editForm, price_display: e.target.value})} placeholder="Price Display" />
                                        </div>
                                        <div className="flex gap-2 justify-end mt-auto pt-3">
                                            <button onClick={() => setEditingId(null)} className="text-[11px] font-bold text-[#4a2c11]/60 px-3 py-1.5 rounded-lg hover:bg-[#fef1df] transition-colors">Cancel</button>
                                            <button onClick={() => handleSave(c.id)} className="bg-emerald-500 text-white text-[11px] font-bold px-3 py-1.5 rounded-lg border-[2px] border-[#4a2c11] shadow-[1px_1px_0px_#4a2c11]">Save</button>
                                        </div>
                                    </div>
                                ) : (
                                    /* Display Mode */
                                    <>
                                        <div className="absolute top-3 right-3 text-2xl">{c.avatar}</div>
                                        {!c.is_active && <span className="absolute top-3 left-3 text-[9px] font-bold text-rose-500 bg-rose-100 px-2 py-0.5 rounded-full border border-rose-300">HIDDEN</span>}
                                        <h4 className="font-black text-[#4a2c11] text-lg pr-8">{c.title}</h4>
                                        <p className="text-xs font-bold text-[#4a2c11]/60 flex-1">{c.description}</p>
                                        <div className="flex items-center justify-between mt-auto pt-3 border-t-[2px] border-[#fef1df]">
                                            <span className="font-black text-[#E67E22]">{c.price_display}</span>
                                            <div className="flex gap-2">
                                                <button onClick={() => { setEditingId(c.id); setEditForm({ title: c.title, description: c.description, base_price: c.base_price, price_display: c.price_display, avatar: c.avatar }); }} className="text-[11px] font-bold text-[#4a2c11]/60 hover:text-[#E67E22] transition-colors">Edit</button>
                                                <button onClick={() => handleToggleActive(c)} className="text-[11px] font-bold text-[#4a2c11]/60 hover:text-amber-500 transition-colors">{c.is_active ? 'Hide' : 'Show'}</button>
                                                <button onClick={() => handleDelete(c.id)} className="text-[11px] font-bold text-rose-400 hover:text-rose-600 transition-colors">Delete</button>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                    {commissions.length === 0 && (
                        <div className="text-center py-10 text-[#4a2c11]/50 font-bold">No commissions found. Click "+ New Commission" to create one.</div>
                    )}
                </div>
            </div>
        </div>
    );
}

// ── Manage Services (Home Page) ───────────────────────────────────────
function ManageServices() {
    const [services, setServices] = useState<any[]>([]);
    const [editingId, setEditingId] = useState<number | null>(null);
    const [editForm, setEditForm] = useState<any>({});
    const [showNewForm, setShowNewForm] = useState(false);
    const [newForm, setNewForm] = useState<any>({ title: '', description: '', img_file: null, gallery_files: [], gallery: [], is_active: true, sort_order: 0 });
    const [toastMessage, setToastMessage] = useState<string | null>(null);

    const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || '';

    const showToast = (msg: string) => {
        setToastMessage(msg);
        setTimeout(() => setToastMessage(null), 3000);
    };

    const loadServices = () => {
        fetch('/api/home-services')
            .then(res => res.json())
            .then(data => setServices(data));
    };

    useEffect(() => { loadServices(); }, []);

    const handleSave = (id: number) => {
        const formData = new FormData();
        formData.append('_method', 'PUT');
        formData.append('title', editForm.title || '');
        formData.append('description', editForm.description || '');
        formData.append('sort_order', editForm.sort_order?.toString() || '0');
        formData.append('is_active', editForm.is_active ? '1' : '0');
        
        if (editForm.img_file) {
            formData.append('img_file', editForm.img_file);
        }
        
        (editForm.gallery || []).forEach((url: string) => {
            formData.append('gallery_existing[]', url);
        });
        
        (editForm.gallery_files || []).forEach((file: File) => {
            formData.append('gallery_files[]', file);
        });

        fetch(`/api/home-services/${id}`, {
            method: 'POST',
            headers: { 'X-CSRF-TOKEN': csrfToken },
            body: formData,
        }).then(() => { setEditingId(null); loadServices(); showToast("Service updated successfully! ✨"); });
    };

    const handleCreate = () => {
        const formData = new FormData();
        formData.append('title', newForm.title || '');
        formData.append('description', newForm.description || '');
        formData.append('sort_order', newForm.sort_order?.toString() || '0');
        formData.append('is_active', newForm.is_active ? '1' : '0');
        
        if (newForm.img_file) {
            formData.append('img_file', newForm.img_file);
        }
        
        (newForm.gallery_files || []).forEach((file: File) => {
            formData.append('gallery_files[]', file);
        });

        fetch('/api/home-services', {
            method: 'POST',
            headers: { 'X-CSRF-TOKEN': csrfToken },
            body: formData,
        }).then(() => { setShowNewForm(false); setNewForm({ title: '', description: '', img_file: null, gallery_files: [], gallery: [], is_active: true, sort_order: 0 }); loadServices(); showToast("Service created successfully! 🎉"); });
    };

    const handleDelete = (id: number) => {
        if (!confirm('Are you sure you want to delete this service?')) return;
        fetch(`/api/home-services/${id}`, {
            method: 'DELETE',
            headers: { 'X-CSRF-TOKEN': csrfToken },
        }).then(() => { loadServices(); showToast("Service deleted. 🗑️"); });
    };

    const handleToggleActive = (s: any) => {
        fetch(`/api/home-services/${s.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json', 'X-CSRF-TOKEN': csrfToken },
            body: JSON.stringify({ is_active: !s.is_active }),
        }).then(() => { loadServices(); showToast(`Service is now ${!s.is_active ? 'visible' : 'hidden'}. 👀`); });
    };

    const handleFileChange = (e: any, target: 'new' | 'edit', field: 'img_file' | 'gallery_files') => {
        const files = Array.from(e.target.files) as File[];
        if (target === 'new') {
            if (field === 'img_file') {
                setNewForm({ ...newForm, img_file: files[0] || null });
            } else {
                setNewForm({ ...newForm, gallery_files: [...newForm.gallery_files, ...files] });
            }
        } else {
            if (field === 'img_file') {
                setEditForm({ ...editForm, img_file: files[0] || null });
            } else {
                setEditForm({ ...editForm, gallery_files: [...(editForm.gallery_files || []), ...files] });
            }
        }
    };

    const removeGalleryItem = (index: number, target: 'new' | 'edit', type: 'existing' | 'new_file') => {
        if (target === 'new') {
            setNewForm({ ...newForm, gallery_files: newForm.gallery_files.filter((_: any, i: number) => i !== index) });
        } else {
            if (type === 'existing') {
                setEditForm({ ...editForm, gallery: (editForm.gallery || []).filter((_: any, i: number) => i !== index) });
            } else {
                setEditForm({ ...editForm, gallery_files: (editForm.gallery_files || []).filter((_: any, i: number) => i !== index) });
            }
        }
    };

    const inputClass = "w-full px-3 py-2 rounded-lg border-[2px] border-[#4a2c11]/30 text-sm font-bold text-[#4a2c11] focus:border-[#E67E22] focus:outline-none transition-colors bg-white";

    return (
        <div className="space-y-6 relative">
            {/* Toast Notification */}
            {toastMessage && (
                <div className="fixed bottom-10 right-10 bg-[#4a2c11] text-white px-5 py-3 rounded-xl font-bold text-sm shadow-[4px_4px_0px_#E67E22] flex items-center gap-3 z-50 animate-[bounce_0.3s_ease-out]">
                    <Icons.Check width={18} height={18} className="text-emerald-400" />
                    {toastMessage}
                </div>
            )}

            {/* Header card */}
            <div className="bg-white border-[3px] border-[#4a2c11] rounded-2xl shadow-[4px_4px_0px_#4a2c11] overflow-hidden">
                <div className="px-6 py-4 border-b-[2px] border-[#fef1df] flex items-center justify-between">
                    <h3 className="font-black text-[#4a2c11] text-[15px] flex items-center gap-2">
                        <Icons.Sticker width={16} height={16} className="text-[#E67E22]" />
                        Manage Home Services
                        <span className="ml-2 text-[11px] font-bold text-[#4a2c11]/40 bg-[#fef1df] px-3 py-1 rounded-full">{services.length} items</span>
                    </h3>
                    <button onClick={() => setShowNewForm(!showNewForm)} className="bg-[#E67E22] text-white px-4 py-1.5 rounded-full font-bold text-xs border-[2px] border-[#4a2c11] hover:-translate-y-0.5 shadow-[2px_2px_0px_#4a2c11] transition-transform">
                        {showNewForm ? '✕ Cancel' : '+ New Service'}
                    </button>
                </div>

                {/* New Service Form */}
                {showNewForm && (
                    <div className="p-6 bg-[#fffcf7] border-b-[2px] border-[#fef1df]">
                        <h4 className="font-black text-[#4a2c11] text-sm mb-4">Create New Service</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="text-[11px] font-bold text-[#4a2c11]/60 uppercase tracking-wider mb-1 block">Title</label>
                                <input className={inputClass} value={newForm.title} onChange={e => setNewForm({...newForm, title: e.target.value})} placeholder="e.g. Poster/Illustration" />
                            </div>
                            <div>
                                <label className="text-[11px] font-bold text-[#4a2c11]/60 uppercase tracking-wider mb-1 block">Sort Order</label>
                                <input className={inputClass} type="number" value={newForm.sort_order} onChange={e => setNewForm({...newForm, sort_order: parseInt(e.target.value) || 0})} placeholder="0" />
                            </div>
                            <div className="md:col-span-2">
                                <label className="text-[11px] font-bold text-[#4a2c11]/60 uppercase tracking-wider mb-1 block">Description</label>
                                <textarea className={inputClass + " resize-none"} rows={2} value={newForm.description} onChange={e => setNewForm({...newForm, description: e.target.value})} placeholder="Short description shown on the card..." />
                            </div>
                            <div className="md:col-span-2">
                                <label className="text-[11px] font-bold text-[#4a2c11]/60 uppercase tracking-wider mb-1 block">Thumbnail Image</label>
                                <input type="file" accept="image/*" className={inputClass + " file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-bold file:bg-[#fef1df] file:text-[#E67E22] hover:file:bg-[#fce5cd]"} onChange={(e) => handleFileChange(e, 'new', 'img_file')} />
                            </div>
                            <div className="md:col-span-2">
                                <label className="text-[11px] font-bold text-[#4a2c11]/60 uppercase tracking-wider mb-1 block">Gallery Images (Multiple)</label>
                                <input type="file" accept="image/*" multiple className={inputClass + " file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-bold file:bg-[#fef1df] file:text-[#E67E22] hover:file:bg-[#fce5cd]"} onChange={(e) => handleFileChange(e, 'new', 'gallery_files')} />
                                
                                {newForm.gallery_files.length > 0 && (
                                    <div className="space-y-1.5 max-h-[200px] overflow-y-auto mt-2">
                                        {newForm.gallery_files.map((file: File, i: number) => (
                                            <div key={i} className="flex items-center gap-2 bg-white border border-[#4a2c11]/20 rounded-lg px-3 py-1.5">
                                                <span className="text-[11px] font-medium text-[#4a2c11]/70 truncate flex-1">{file.name}</span>
                                                <button type="button" onClick={() => removeGalleryItem(i, 'new', 'new_file')} className="text-rose-400 hover:text-rose-600 shrink-0">
                                                    <Icons.Close width={14} height={14} />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="mt-4 flex justify-end">
                            <button onClick={handleCreate} className="bg-emerald-500 text-white px-5 py-2 rounded-xl font-bold text-xs border-[2px] border-[#4a2c11] shadow-[2px_2px_0px_#4a2c11] hover:-translate-y-0.5 transition-transform">
                                ✓ Create Service
                            </button>
                        </div>
                    </div>
                )}

                {/* Service Cards */}
                <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map(s => (
                            <div key={s.id} className={`border-[2px] rounded-xl overflow-hidden flex flex-col relative transition-all h-full ${s.is_active ? 'border-[#4a2c11] bg-white' : 'border-[#4a2c11]/20 bg-gray-50 opacity-60'}`}>
                                {editingId === s.id ? (
                                    /* Edit Mode */
                                    <div className="flex flex-col h-full space-y-3 p-4">
                                        <input className={inputClass} value={editForm.title} onChange={e => setEditForm({...editForm, title: e.target.value})} placeholder="Title" />
                                        <textarea className={inputClass + " resize-none"} rows={2} value={editForm.description} onChange={e => setEditForm({...editForm, description: e.target.value})} placeholder="Description" />
                                        <div>
                                            <label className="text-[11px] font-bold text-[#4a2c11]/60 uppercase tracking-wider mb-1 block">Update Thumbnail</label>
                                            <input type="file" accept="image/*" className={inputClass + " file:mr-4 file:py-1 file:px-3 file:rounded-full file:border-0 file:text-xs file:font-bold file:bg-[#fef1df] file:text-[#E67E22] hover:file:bg-[#fce5cd]"} onChange={(e) => handleFileChange(e, 'edit', 'img_file')} />
                                        </div>
                                        <div>
                                            <label className="text-[11px] font-bold text-[#4a2c11]/60 uppercase tracking-wider mb-1 block">Sort Order</label>
                                            <input className={inputClass} type="number" value={editForm.sort_order} onChange={e => setEditForm({...editForm, sort_order: parseInt(e.target.value) || 0})} />
                                        </div>
                                        <div>
                                            <label className="text-[11px] font-bold text-[#4a2c11]/60 uppercase tracking-wider mb-1 block">Gallery Images</label>
                                            <input type="file" accept="image/*" multiple className={inputClass + " mb-2 file:mr-4 file:py-1 file:px-3 file:rounded-full file:border-0 file:text-xs file:font-bold file:bg-[#fef1df] file:text-[#E67E22] hover:file:bg-[#fce5cd]"} onChange={(e) => handleFileChange(e, 'edit', 'gallery_files')} />
                                            
                                            <div className="space-y-1.5 max-h-[200px] overflow-y-auto">
                                                {/* Existing Gallery URLs */}
                                                {(editForm.gallery || []).map((url: string, i: number) => (
                                                    <div key={`exist-${i}`} className="flex items-center gap-2 bg-[#fffcf7] border border-[#4a2c11]/20 rounded-lg px-3 py-1.5">
                                                        <img src={url} alt="" className="w-8 h-8 rounded object-cover border border-[#4a2c11]/20 shrink-0" onError={e => (e.target as HTMLImageElement).style.display = 'none'} />
                                                        <span className="text-[11px] font-medium text-[#4a2c11]/70 truncate flex-1">{url.split('/').pop()}</span>
                                                        <button type="button" onClick={() => removeGalleryItem(i, 'edit', 'existing')} className="text-rose-400 hover:text-rose-600 shrink-0">
                                                            <Icons.Close width={14} height={14} />
                                                        </button>
                                                    </div>
                                                ))}
                                                {/* New Gallery Files */}
                                                {(editForm.gallery_files || []).map((file: File, i: number) => (
                                                    <div key={`new-${i}`} className="flex items-center gap-2 bg-white border border-[#4a2c11]/20 border-dashed rounded-lg px-3 py-1.5">
                                                        <span className="w-8 h-8 rounded bg-[#fef1df] text-[#E67E22] flex items-center justify-center font-bold text-[10px] border border-[#4a2c11]/20 shrink-0">NEW</span>
                                                        <span className="text-[11px] font-medium text-[#4a2c11]/70 truncate flex-1">{file.name}</span>
                                                        <button type="button" onClick={() => removeGalleryItem(i, 'edit', 'new_file')} className="text-rose-400 hover:text-rose-600 shrink-0">
                                                            <Icons.Close width={14} height={14} />
                                                        </button>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="flex gap-2 justify-end mt-auto pt-3">
                                            <button onClick={() => setEditingId(null)} className="text-[11px] font-bold text-[#4a2c11]/60 px-3 py-1.5 rounded-lg hover:bg-[#fef1df] transition-colors">Cancel</button>
                                            <button onClick={() => handleSave(s.id)} className="bg-emerald-500 text-white text-[11px] font-bold px-3 py-1.5 rounded-lg border-[2px] border-[#4a2c11] shadow-[1px_1px_0px_#4a2c11]">Save</button>
                                        </div>
                                    </div>
                                ) : (
                                    /* Display Mode */
                                    <>
                                        {/* Thumbnail */}
                                        {s.img && (
                                            <div className="h-[140px] bg-[#fef1df] overflow-hidden border-b-[2px] border-[#4a2c11]/20">
                                                <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
                                            </div>
                                        )}
                                        <div className="p-4 flex flex-col flex-1">
                                            {!s.is_active && <span className="text-[9px] font-bold text-rose-500 bg-rose-100 px-2 py-0.5 rounded-full border border-rose-300 self-start mb-2">HIDDEN</span>}
                                            <h4 className="font-black text-[#4a2c11] text-lg">{s.title}</h4>
                                            <p className="text-xs font-bold text-[#4a2c11]/60 flex-1 mt-1">{s.description}</p>
                                            <div className="flex items-center gap-2 mt-2">
                                                <span className="text-[10px] font-bold text-[#4a2c11]/40 bg-[#fef1df] px-2 py-0.5 rounded-full">
                                                    📸 {(s.gallery || []).length} gallery images
                                                </span>
                                                <span className="text-[10px] font-bold text-[#4a2c11]/40 bg-[#fef1df] px-2 py-0.5 rounded-full">
                                                    #{s.sort_order}
                                                </span>
                                            </div>
                                            <div className="flex items-center justify-end mt-auto pt-3 border-t-[2px] border-[#fef1df]">
                                                <div className="flex gap-2">
                                                    <button onClick={() => { setEditingId(s.id); setEditForm({ title: s.title, description: s.description, img: s.img, gallery: s.gallery || [], gallery_files: [], sort_order: s.sort_order, is_active: s.is_active }); }} className="text-[11px] font-bold text-[#4a2c11]/60 hover:text-[#E67E22] transition-colors">Edit</button>
                                                    <button onClick={() => handleToggleActive(s)} className="text-[11px] font-bold text-[#4a2c11]/60 hover:text-amber-500 transition-colors">{s.is_active ? 'Hide' : 'Show'}</button>
                                                    <button onClick={() => handleDelete(s.id)} className="text-[11px] font-bold text-rose-400 hover:text-rose-600 transition-colors">Delete</button>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                    {services.length === 0 && (
                        <div className="text-center py-10 text-[#4a2c11]/50 font-bold">No services found. Click "+ New Service" to create one.</div>
                    )}
                </div>
            </div>
        </div>
    );
}

// ── Main Page ─────────────────────────────────────────────────────────
export default function AdminDashboard() {
    const [activeTab, setActiveTab] = useState('overview');
    const [collapsed, setCollapsed] = useState(false);
    const [orders, setOrders] = useState<any[]>([]);
    const [orderFilter, setOrderFilter] = useState('All');
    const [viewOrder, setViewOrder] = useState<any>(null);
    const [showNotifications, setShowNotifications] = useState(false);

    useEffect(() => {
        fetch('/api/orders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);

    const waitingCount   = orders.filter(o => o.status === 'Waiting').length;
    const inProgressCount = orders.filter(o => o.status === 'In Progress').length;

    // Derive unique clients from orders
    const uniqueClients = Object.values(
        orders.reduce((acc: any, o: any) => {
            const email = o.client_email;
            if (!acc[email]) {
                acc[email] = { email, social: o.client_social, orderCount: 0, totalSpent: 0 };
            }
            acc[email].orderCount += 1;
            acc[email].totalSpent += parseFloat(o.total_price) || 0;
            if (o.client_social && !acc[email].social) acc[email].social = o.client_social;
            return acc;
        }, {})
    ) as any[];

    const handleStatusUpdate = (id: number, status: string) => {
        const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || '';
        fetch(`/api/orders/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json', 'X-CSRF-TOKEN': csrfToken },
            body: JSON.stringify({ status })
        }).then(() => {
            setOrders(orders.map(o => o.id === id ? { ...o, status } : o));
        });
    };

    const handleDeleteOrder = (id: number) => {
        if (!confirm('Are you sure you want to delete this order?')) return;
        const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || '';
        fetch(`/api/orders/${id}`, {
            method: 'DELETE',
            headers: { 'X-CSRF-TOKEN': csrfToken },
        }).then(() => {
            setOrders(orders.filter(o => o.id !== id));
        });
    };

    return (
        <div className="min-h-screen flex font-sans text-[#4a2c11] bg-[#fdf7ee]">
            <Head title="Admin Dashboard — ToffeeBean" />

            <Sidebar active={activeTab} setActive={setActiveTab} collapsed={collapsed} setCollapsed={setCollapsed} />

            {/* Main */}
            <div className="flex-1 flex flex-col min-h-screen overflow-auto">

                {/* Top bar */}
                <header className="flex items-center justify-between px-8 py-4 bg-white border-b-[3px] border-[#4a2c11] sticky top-0 z-10">
                    <div>
                        <h1 className="font-black text-[18px] text-[#4a2c11] capitalize">{activeTab === 'overview' ? 'Dashboard Overview' : activeTab === 'commissions' ? 'Manage Commissions' : activeTab === 'services' ? 'Manage Home Services' : activeTab === 'orders' ? 'Manage Orders' : activeTab === 'clients' ? 'Client Directory' : activeTab}</h1>
                        <p className="text-[11px] font-medium text-[#4a2c11]/50 mt-0.5">Welcome back, Admin 🍁</p>
                    </div>
                    <div className="flex items-center gap-3">
                        {/* Notifications */}
                        <div className="relative">
                            <button onClick={() => setShowNotifications(!showNotifications)} className="w-10 h-10 bg-[#fef1df] rounded-xl border-[2px] border-[#4a2c11] flex items-center justify-center hover:bg-[#fff4e6] transition-colors">
                                <Icons.Notification width={18} height={18} className="text-[#4a2c11]" />
                            </button>
                            {waitingCount > 0 && (
                                <span className="absolute -top-1 -right-1 w-4 h-4 bg-rose-500 text-white text-[9px] font-black rounded-full flex items-center justify-center border border-white">{waitingCount}</span>
                            )}
                            {showNotifications && (
                                <div className="absolute top-full right-0 mt-2 w-80 bg-white border-[3px] border-[#4a2c11] rounded-2xl shadow-[4px_4px_0px_#4a2c11] z-50 overflow-hidden">
                                    <div className="px-4 py-3 border-b-[2px] border-[#fef1df] flex items-center justify-between">
                                        <h4 className="font-black text-[13px] text-[#4a2c11] flex items-center gap-2">
                                            <Icons.Notification width={14} height={14} className="text-[#E67E22]" />
                                            Notifications
                                        </h4>
                                        <span className="text-[10px] font-bold text-[#4a2c11]/40 bg-[#fef1df] px-2 py-0.5 rounded-full">{orders.filter(o => o.status !== 'Completed').length}</span>
                                    </div>
                                    <div className="max-h-[300px] overflow-y-auto">
                                        {orders.filter(o => o.status !== 'Completed').length === 0 ? (
                                            <div className="px-4 py-8 text-center text-[#4a2c11]/40 font-bold text-[12px]">No new notifications 🍂</div>
                                        ) : (
                                            orders.filter(o => o.status !== 'Completed').map(order => (
                                                <button key={order.id} onClick={() => { setViewOrder(order); setShowNotifications(false); }} className="w-full px-4 py-3 flex items-center gap-3 hover:bg-[#fef1df]/60 transition-colors text-left border-b border-[#fef1df] last:border-b-0">
                                                    <div className={`w-2 h-2 rounded-full shrink-0 ${order.status === 'Waiting' ? 'bg-rose-500' : 'bg-amber-500'}`} />
                                                    <div className="flex-1 min-w-0">
                                                        <p className="text-[12px] font-bold text-[#4a2c11] truncate">Order #{order.id} — {order.client_email}</p>
                                                        <p className="text-[10px] font-medium text-[#4a2c11]/50">{order.status === 'Waiting' ? '⏳ Waiting for review' : '🎨 In Progress'}</p>
                                                    </div>
                                                    <Icons.Eye width={14} height={14} className="text-[#4a2c11]/30 shrink-0" />
                                                </button>
                                            ))
                                        )}
                                    </div>
                                    {orders.filter(o => o.status !== 'Completed').length > 0 && (
                                        <div className="px-4 py-2.5 border-t-[2px] border-[#fef1df] bg-[#fffcf7]">
                                            <button onClick={() => { setActiveTab('orders'); setShowNotifications(false); }} className="w-full text-center text-[11px] font-bold text-[#E67E22] hover:text-[#d35400] transition-colors">View All Orders →</button>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                        {/* Avatar */}
                        <div className="flex items-center gap-2 bg-[#fef1df] rounded-xl border-[2px] border-[#4a2c11] px-3 py-2">
                            <div className="w-6 h-6 bg-[#E67E22] rounded-full flex items-center justify-center text-white font-black text-[11px]">A</div>
                            <span className="text-[12px] font-bold text-[#4a2c11]">Admin</span>
                        </div>
                    </div>
                </header>

                {/* Content */}
                <main className="flex-1 p-8">

                    {activeTab === 'commissions' && <ManageCommissions />}

                    {activeTab === 'services' && <ManageServices />}

                    {activeTab === 'overview' && (
                        <>
                            {/* Alert banners */}
                            {waitingCount > 0 && (
                                <div className="mb-6 bg-rose-50 border-[3px] border-rose-300 rounded-xl px-5 py-3 flex items-center gap-3">
                                    <Icons.Pending width={16} height={16} className="text-rose-500 shrink-0" />
                                    <span className="text-[13px] font-bold text-rose-700">
                                        You have <strong>{waitingCount}</strong> orders waiting for your review.
                                    </span>
                                </div>
                            )}

                            {/* Stats grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">
                                {stats.map(s => <StatCard key={s.label} stat={s} />)}
                            </div>

                            {/* Main grid */}
                            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                                <div className="xl:col-span-2 space-y-6">
                                    <RevenueChart />
                                    <OrdersTable data={orders.slice(0, 5)} onStatusChange={handleStatusUpdate} onDelete={handleDeleteOrder} onView={setViewOrder} />
                                </div>
                                <div className="space-y-6">
                                    <OrderBreakdown />
                                    <QuickActions />
                                </div>
                            </div>

                            {/* Status summary strip */}
                            <div className="mt-6 grid grid-cols-3 gap-4">
                                {[
                                    { label: 'Waiting', count: waitingCount, color: 'border-rose-300 bg-rose-50 text-rose-600' },
                                    { label: 'In Progress', count: inProgressCount, color: 'border-amber-300 bg-amber-50 text-amber-700' },
                                    { label: 'Completed', count: orders.filter(o => o.status === 'Completed').length, color: 'border-emerald-300 bg-emerald-50 text-emerald-700' },
                                ].map(s => (
                                    <div key={s.label} className={`border-[3px] ${s.color} rounded-2xl p-4 text-center`}>
                                        <div className="text-3xl font-black">{s.count}</div>
                                        <div className="text-[11px] font-bold uppercase tracking-wider mt-1">{s.label}</div>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}

                    {activeTab === 'orders' && (
                        <div className="space-y-6">
                            {/* Filter bar */}
                            <div className="flex items-center gap-3">
                                {['All', 'Waiting', 'In Progress', 'Completed'].map(f => (
                                    <button key={f} onClick={() => setOrderFilter(f)} className={`text-[12px] font-bold px-4 py-2 rounded-xl border-[2px] transition-all ${orderFilter === f ? 'bg-[#E67E22] text-white border-[#4a2c11] shadow-[2px_2px_0px_#4a2c11]' : 'bg-white border-[#4a2c11]/20 text-[#4a2c11]/60 hover:border-[#4a2c11]/40'}`}>
                                        {f} {f === 'All' ? `(${orders.length})` : `(${orders.filter(o => o.status === f).length})`}
                                    </button>
                                ))}
                            </div>
                            <OrdersTable data={orderFilter === 'All' ? orders : orders.filter(o => o.status === orderFilter)} onStatusChange={handleStatusUpdate} onDelete={handleDeleteOrder} onView={setViewOrder} />
                        </div>
                    )}

                    {activeTab === 'clients' && (
                        <div className="space-y-6">
                            <div className="bg-white border-[3px] border-[#4a2c11] rounded-2xl shadow-[4px_4px_0px_#4a2c11] overflow-hidden">
                                <div className="px-6 py-4 border-b-[2px] border-[#fef1df] flex items-center justify-between">
                                    <h3 className="font-black text-[#4a2c11] text-[15px] flex items-center gap-2">
                                        <Icons.Users width={16} height={16} className="text-[#E67E22]" />
                                        Clients
                                    </h3>
                                    <span className="text-[11px] font-bold text-[#4a2c11]/40 bg-[#fef1df] px-3 py-1 rounded-full">{uniqueClients.length} clients</span>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-[13px]">
                                        <thead>
                                            <tr className="bg-[#fef1df]/60">
                                                <th className="text-left px-6 py-3 font-bold text-[#4a2c11]/60 text-[11px] uppercase tracking-wider">Client</th>
                                                <th className="text-left px-4 py-3 font-bold text-[#4a2c11]/60 text-[11px] uppercase tracking-wider">Social</th>
                                                <th className="text-left px-4 py-3 font-bold text-[#4a2c11]/60 text-[11px] uppercase tracking-wider">Orders</th>
                                                <th className="text-left px-4 py-3 font-bold text-[#4a2c11]/60 text-[11px] uppercase tracking-wider">Total Spent</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {uniqueClients.length === 0 ? (
                                                <tr>
                                                    <td colSpan={4} className="px-6 py-8 text-center text-[#4a2c11]/50 font-bold">
                                                        No clients yet.
                                                    </td>
                                                </tr>
                                            ) : uniqueClients.map((client, i) => (
                                                <tr key={client.email} className={`border-t border-[#fef1df] hover:bg-[#fffcf7] transition-colors ${i % 2 === 0 ? '' : 'bg-[#fffcf7]/40'}`}>
                                                    <td className="px-6 py-3.5">
                                                        <div className="flex items-center gap-2">
                                                            <div className="w-7 h-7 bg-[#fef1df] rounded-full border-[2px] border-[#4a2c11] flex items-center justify-center text-sm font-black text-[#E67E22]">{client.email[0].toUpperCase()}</div>
                                                            <span className="font-bold text-[#4a2c11]">{client.email}</span>
                                                        </div>
                                                    </td>
                                                    <td className="px-4 py-3.5 text-[#4a2c11]/70 font-medium">{client.social || '—'}</td>
                                                    <td className="px-4 py-3.5 font-bold text-[#4a2c11]">{client.orderCount}</td>
                                                    <td className="px-4 py-3.5 font-black text-[#E67E22]">${client.totalSpent.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    )}
                </main>
            </div>

            {viewOrder && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setViewOrder(null)}>
                    <div className="bg-[#fef1df] border-[3px] border-[#4a2c11] rounded-2xl p-6 shadow-[4px_4px_0px_#4a2c11] max-w-lg w-full relative" onClick={e => e.stopPropagation()}>
                        <button onClick={() => setViewOrder(null)} className="absolute top-4 right-4 text-[#4a2c11]/50 hover:text-[#4a2c11] transition-colors">
                            <Icons.Close width={20} height={20} />
                        </button>
                        <h3 className="font-black text-[#4a2c11] text-lg mb-4 flex items-center gap-2">
                            <Icons.Eye width={18} height={18} className="text-[#E67E22]" />
                            Order Details #{viewOrder.id}
                        </h3>
                        <div className="space-y-4 bg-white border-[2px] border-[#d4b896] rounded-xl p-5 shadow-[2px_2px_0_0_#d4b896]">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="text-[10px] font-bold text-[#4a2c11]/50 uppercase tracking-wider mb-1">Client Email</p>
                                    <p className="text-[13px] font-bold text-[#4a2c11] break-all">{viewOrder.client_email}</p>
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-[#4a2c11]/50 uppercase tracking-wider mb-1">Social Handle</p>
                                    <p className="text-[13px] font-bold text-[#4a2c11] break-all">{viewOrder.client_social || '—'}</p>
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-[#4a2c11]/50 uppercase tracking-wider mb-1">Commission Type</p>
                                    <p className="text-[13px] font-bold text-[#4a2c11]">{viewOrder.commission?.title || 'Unknown'}</p>
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-[#4a2c11]/50 uppercase tracking-wider mb-1">Status</p>
                                    <StatusBadge status={viewOrder.status} />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-[#4a2c11]/50 uppercase tracking-wider mb-1">Species</p>
                                    <p className="text-[13px] font-bold text-[#4a2c11]">{viewOrder.species || '—'}</p>
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-[#4a2c11]/50 uppercase tracking-wider mb-1">Theme / Vibe</p>
                                    <p className="text-[13px] font-bold text-[#4a2c11]">{viewOrder.theme || '—'}</p>
                                </div>
                                <div className="col-span-2">
                                    <p className="text-[10px] font-bold text-[#4a2c11]/50 uppercase tracking-wider mb-1">Character Name</p>
                                    <p className="text-[13px] font-bold text-[#4a2c11]">{viewOrder.character_name || '—'}</p>
                                </div>
                                <div className="col-span-2">
                                    <p className="text-[10px] font-bold text-[#4a2c11]/50 uppercase tracking-wider mb-1">Notes & References</p>
                                    <p className="text-[13px] font-semibold text-[#4a2c11] whitespace-pre-wrap">{viewOrder.notes || '—'}</p>
                                </div>
                                <div className="col-span-2 pt-3 border-t border-[#fef1df] flex justify-between items-center">
                                    <div>
                                        <p className="text-[10px] font-bold text-[#4a2c11]/50 uppercase tracking-wider">Quantity</p>
                                        <p className="text-[13px] font-black text-[#4a2c11]">×{viewOrder.quantity}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-[10px] font-bold text-[#4a2c11]/50 uppercase tracking-wider">Total Amount</p>
                                        <p className="text-xl font-black text-[#E67E22]">${parseFloat(viewOrder.total_price).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
