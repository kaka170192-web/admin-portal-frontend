import React, { useState } from 'react';
import { Truck, Package, FileText, AlertCircle, Settings, Users, CreditCard, Menu, X, Upload, Download, Search, Filter, Plus, Eye, Edit, Trash2, ChevronRight, Clock, CheckCircle, XCircle, DollarSign, BarChart3, FileSpreadsheet, Camera, MapPin } from 'lucide-react';


interface BillingPageProps {
}

const mockBillings = [
  { id: 1, lrNumber: 'GH2024001', bookingId: 'BK001', originZone: 'Origin', destZone: 'Destination', billableWeight: 500, ratePerKg: 30, freightValue: 15000, fov: 200, docket: 50, fsc: 2, oda: 50, mathadi: 0, demurrage: 0, appointment: 100, handling: 150, gst: 18, gstValue: 2826, totalFreight: 18526, status: 'Generated' },
  { id: 2, lrNumber: 'GH2024002', bookingId: 'BK002', originZone: 'Origin', destZone: 'Destination', billableWeight: 750, ratePerKg: 28, freightValue: 21000, fov: 300, docket: 50, fsc: 2, oda: 0, mathadi: 100, demurrage: 0, appointment: 0, handling: 200, gst: 18, gstValue: 3959, totalFreight: 25959, status: 'Generated' },
];

export default function BillingPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Billing Management</h1>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">LR Number</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Freight</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">GST</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Total</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {mockBillings.map((b) => (
                  <tr key={b.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm font-medium text-blue-600">{b.lrNumber}</td>
                    <td className="px-4 py-3 text-sm">₹{b.freightValue}</td>
                    <td className="px-4 py-3 text-sm">₹{b.gstValue}</td>
                    <td className="px-4 py-3 text-sm font-bold">₹{b.totalFreight}</td>
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