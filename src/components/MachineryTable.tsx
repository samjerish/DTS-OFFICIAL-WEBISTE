import React, { useState, useMemo } from 'react';
import { TOOL_ROOM_MACHINERY, PRESS_SHOP_MACHINERY } from '../data/companyData';
import { MachineryItem } from '../types';
import { Search, Filter, ShieldCheck, Download } from 'lucide-react';

export const MachineryTable: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'tool-room' | 'press-shop'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const allMachinery: MachineryItem[] = useMemo(() => {
    return [...TOOL_ROOM_MACHINERY, ...PRESS_SHOP_MACHINERY];
  }, []);

  const filteredItems = useMemo(() => {
    return allMachinery.filter((item) => {
      // Tab filter
      if (activeTab === 'tool-room' && item.unit !== 'Unit I (Tool Room)') return false;
      if (activeTab === 'press-shop' && item.unit !== 'Unit II (Press Shop)') return false;

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesMake = item.make.toLowerCase().includes(q);
        const matchesCapacity = item.capacity.toLowerCase().includes(q);
        return matchesName || matchesMake || matchesCapacity;
      }
      return true;
    });
  }, [allMachinery, activeTab, searchQuery]);

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Controls Bar */}
      <div className="p-4 sm:p-6 bg-slate-50 border-b border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
        
        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center gap-1.5 bg-slate-200/80 p-1 rounded-lg">
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
              activeTab === 'all'
                ? 'bg-white text-dts-navy shadow-sm'
                : 'text-slate-600 hover:text-dts-navy'
            }`}
          >
            All Equipment ({allMachinery.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('tool-room')}
            className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
              activeTab === 'tool-room'
                ? 'bg-white text-dts-navy shadow-sm'
                : 'text-slate-600 hover:text-dts-navy'
            }`}
          >
            Unit I — Tool Room ({TOOL_ROOM_MACHINERY.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('press-shop')}
            className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
              activeTab === 'press-shop'
                ? 'bg-white text-dts-navy shadow-sm'
                : 'text-slate-600 hover:text-dts-navy'
            }`}
          >
            Unit II — Press Shop ({PRESS_SHOP_MACHINERY.length})
          </button>
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search machine, make or capacity..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-dts-accent focus:border-transparent bg-white"
          />
        </div>

      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs sm:text-sm">
          <thead className="bg-slate-100 text-slate-700 uppercase text-[11px] font-bold tracking-wider border-b border-slate-200">
            <tr>
              <th className="py-3.5 px-4 w-16 text-center">S.No</th>
              <th className="py-3.5 px-4">Name of the Machine</th>
              <th className="py-3.5 px-4">Make / Manufacturer</th>
              <th className="py-3.5 px-4">Rated Capacity / Specs</th>
              <th className="py-3.5 px-4">Manufacturing Facility</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 text-slate-800">
            {filteredItems.length === 0 ? (
              <tr>
                <td colSpan={5} className="py-8 text-center text-slate-500">
                  No machinery matching "{searchQuery}"
                </td>
              </tr>
            ) : (
              filteredItems.map((item, idx) => (
                <tr 
                  key={`${item.unit}-${item.sNo}`}
                  className="hover:bg-blue-50/40 transition-colors"
                >
                  <td className="py-3 px-4 font-mono text-slate-500 text-center">
                    {item.sNo}
                  </td>
                  <td className="py-3 px-4 font-semibold text-dts-navy">
                    {item.name}
                  </td>
                  <td className="py-3 px-4 font-medium text-slate-700">
                    <span className="inline-block px-2 py-0.5 rounded bg-slate-100 text-slate-800 border border-slate-200 text-xs">
                      {item.make}
                    </span>
                  </td>
                  <td className="py-3 px-4 font-mono font-medium text-slate-900">
                    {item.capacity}
                  </td>
                  <td className="py-3 px-4">
                    <span 
                      className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold ${
                        item.unit.includes('Tool Room')
                          ? 'bg-blue-50 text-blue-700 border border-blue-200'
                          : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                      }`}
                    >
                      {item.unit}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Table Footer */}
      <div className="p-4 bg-slate-50 border-t border-slate-200 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center space-x-1.5">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Factual machinery specification directly verified from DTS company profile.</span>
        </div>
        <div>
          Showing {filteredItems.length} of {allMachinery.length} plant machines
        </div>
      </div>
    </div>
  );
};

