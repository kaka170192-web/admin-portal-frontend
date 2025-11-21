import React, { useState } from 'react';
import { Truck, Package, FileText, AlertCircle, Settings, Users, CreditCard, Menu, X, Upload, Download, Search, Filter, Plus, Eye, Edit, Trash2, ChevronRight, Clock, CheckCircle, XCircle, DollarSign, BarChart3, FileSpreadsheet, Camera, MapPin } from 'lucide-react';


interface LogisticsAllocationProps {
}

const mockAllocations = [
  { id: 1, bookingId: 'BK001', originPin: '110001', destPin: '400001', chargeableWeight: 500, volumetricWeight: 480, billableWeight: 500, selectedCourier: 'Porter', ratePerKg: 30, estimatedFreight: 15000, lrNumber: 'GH2024001', status: 'Allocated', reason: 'Lowest rate' },
  { id: 2, bookingId: 'BK002', originPin: '400001', destPin: '560001', chargeableWeight: 750, volumetricWeight: 720, billableWeight: 750, selectedCourier: 'Rivigo', ratePerKg: 28, estimatedFreight: 21000, lrNumber: 'GH2024002', status: 'Allocated', reason: 'Best service' },
];

export default function LogisticsAllocation() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Logistics Allocation</h1>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6">
          <div className="grid grid-cols-4 gap-4 mb-6">
            <div className="p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-gray-600">Total</p>
              <p className="text-2xl font-bold">{mockAllocations.length}</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <p className="text-sm text-gray-600">Allocated</p>
              <p className="text-2xl font-bold text-green-600">{mockAllocations.filter(a => a.status === 'Allocated').length}</p>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Booking ID</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Courier</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">LR Number</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {mockAllocations.map((a) => (
                  <tr key={a.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm font-medium">{a.bookingId}</td>
                    <td className="px-4 py-3 text-sm">{a.selectedCourier}</td>
                    <td className="px-4 py-3 text-sm text-blue-600">{a.lrNumber}</td>
                    <td className="px-4 py-3"><span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-700">{a.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}