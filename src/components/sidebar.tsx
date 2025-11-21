import React from 'react';
import { Truck, Package, FileText, AlertCircle, Settings, Plus, DollarSign, BarChart3, MapPin } from 'lucide-react';

interface SidebarProps {
  sidebarOpen: boolean;
  currentPage: string;
  setCurrentPage: (page: string) => void; 
}

export default function Sidebar({ sidebarOpen, currentPage, setCurrentPage }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', icon: BarChart3, label: 'Dashboard' },
    { id: 'lr-management', icon: FileText, label: 'LR Management' },
    { id: 'create-lr', icon: Plus, label: 'Create LR' },
    { id: 'claims', icon: AlertCircle, label: 'Claims' },
    { id: 'pincode-mapping', icon: MapPin, label: 'Pincode Zone' },
    { id: 'allocations', icon: Truck, label: 'Allocations' },
    { id: 'billing', icon: DollarSign, label: 'Billing' },
    { id: 'credit-notes', icon: FileText, label: 'Credit Notes' },
    { id: 'debit-notes', icon: FileText, label: 'Debit Notes' },
    { id: 'reports', icon: BarChart3, label: 'Reports' },
    { id: 'masters', icon: Package, label: 'Masters' },
    { id: 'settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <div className={`${sidebarOpen ? 'w-64' : 'w-0'} bg-gray-900 text-white transition-all duration-300 overflow-hidden`}>
      <div className="p-6 overflow-y-auto h-full">
        <div className="flex items-center mb-8">
          <Truck className="w-8 h-8 text-blue-400 mr-2" />
          <h1 className="text-xl font-bold">Greenhaul</h1>
        </div>
        <nav>
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`w-full flex items-center px-4 py-3 mb-2 rounded-lg transition-colors ${
                  currentPage === item.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:bg-gray-800'
                }`}
              >
                <Icon className="w-5 h-5 mr-3" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}