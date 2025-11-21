import React, { useState } from 'react';
import { Truck, Package, FileText, AlertCircle, Settings, Users, CreditCard, Menu, X, Upload, Download, Search, Filter, Plus, Eye, Edit, Trash2, ChevronRight, Clock, CheckCircle, XCircle, DollarSign, BarChart3, FileSpreadsheet, Camera, MapPin } from 'lucide-react';


interface ClaimsProps {
}

const mockClaims = [
  { id: 'CLM001', lrNo: 'GH2024001', claimType: 'Short Delivery', amount: 5000, status: 'Open', date: '2024-11-15', description: 'Partial goods missing' },
  { id: 'CLM002', lrNo: 'GH2024002', claimType: 'Damage', amount: 12000, status: 'In Progress', date: '2024-11-13', description: 'Damaged during transit' },
  { id: 'CLM003', lrNo: 'GH2023150', claimType: 'Delay', amount: 3000, status: 'Closed', date: '2024-10-20', description: 'Late delivery penalty' },
];

export default function Claims() {
  const [activeTab, setActiveTab] = useState('active');
  const activeClaims = mockClaims.filter(c => c.status !== 'Closed');
  const closedClaims = mockClaims.filter(c => c.status === 'Closed');

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Claims Management</h1>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="border-b border-gray-200">
          <div className="flex">
            <button onClick={() => setActiveTab('active')} className={`px-6 py-3 font-medium ${activeTab === 'active' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'}`}>
              Active Claims ({activeClaims.length})
            </button>
            <button onClick={() => setActiveTab('closed')} className={`px-6 py-3 font-medium ${activeTab === 'closed' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'}`}>
              Closed Claims ({closedClaims.length})
            </button>
          </div>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {(activeTab === 'active' ? activeClaims : closedClaims).map((claim) => (
              <div key={claim.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-lg font-bold text-gray-900">{claim.id}</span>
                    <span className="text-sm text-gray-600">LR: {claim.lrNo}</span>
                  </div>
                  <span className="text-lg font-bold text-gray-900">₹{claim.amount.toLocaleString()}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}