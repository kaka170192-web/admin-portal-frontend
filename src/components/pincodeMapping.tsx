import React, { useState } from 'react';
import { Truck, Package, FileText, AlertCircle, Settings, Users, CreditCard, Menu, X, Upload, Download, Search, Filter, Plus, Eye, Edit, Trash2, ChevronRight, Clock, CheckCircle, XCircle, DollarSign, BarChart3, FileSpreadsheet, Camera, MapPin } from 'lucide-react';


interface PincodeMappingProps {
}

const mockPincodeMappings = [
  { id: 1, pincode: '110001', city: 'Delhi', state: 'Delhi', zone: 'Origin', serviceability: 'Serviceable', preferredCourier: 'Delhivery', allowedCouriers: 'Delhivery, Porter, Rivigo', specialCharges: '0', greenhaulEligible: 'Yes' },
  { id: 2, pincode: '400001', city: 'Mumbai', state: 'Maharashtra', zone: 'Destination', serviceability: 'ODA', preferredCourier: 'Porter', allowedCouriers: 'Porter, Shadowfax', specialCharges: '50', greenhaulEligible: 'Yes' },
  { id: 3, pincode: '560001', city: 'Bangalore', state: 'Karnataka', zone: 'Destination', serviceability: 'Serviceable', preferredCourier: 'Rivigo', allowedCouriers: 'Rivigo, Delhivery, Ecom Express', specialCharges: '0', greenhaulEligible: 'Yes' },
];

export default function PincodeMapping() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Pincode Zone Mapping</h1>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input type="text" placeholder="Search pincode..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg" />
            </div>
            <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 ml-4">
              <Plus className="w-5 h-5 mr-2" />
              Add Mapping
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Pincode</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">City</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">State</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Zone</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Serviceability</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {mockPincodeMappings.map((m) => (
                  <tr key={m.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">{m.pincode}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{m.city}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{m.state}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{m.zone}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{m.serviceability}</td>
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