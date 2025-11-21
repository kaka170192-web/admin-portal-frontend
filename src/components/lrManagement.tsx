import React, { useState } from 'react';
import { Truck, Package, FileText, AlertCircle, Settings, Users, CreditCard, Menu, X, Upload, Download, Search, Filter, Plus, Eye, Edit, Trash2, ChevronRight, Clock, CheckCircle, XCircle, DollarSign, BarChart3, FileSpreadsheet, Camera, MapPin } from 'lucide-react';


interface LRManagementProps {
}

const mockLRs = [
  { id: 'LR001', lrNo: 'GH2024001', date: '2024-11-10', platform: 'Porter', client: 'Amazon', consignee: 'Raj Enterprises', from: 'Delhi', to: 'Mumbai', weight: '500 kg', freight: 15000, status: 'In Transit', podStatus: 'Pending' },
  { id: 'LR002', lrNo: 'GH2024002', date: '2024-11-12', platform: 'Rivigo', client: 'Flipkart', consignee: 'Singh Trading', from: 'Mumbai', to: 'Bangalore', weight: '750 kg', freight: 22000, status: 'Delivered', podStatus: 'Received' },
  { id: 'LR003', lrNo: 'GH2024003', date: '2024-11-14', platform: 'Delhivery', client: 'Meesho', consignee: 'Kumar Store', from: 'Bangalore', to: 'Hyderabad', weight: '300 kg', freight: 8500, status: 'In Transit', podStatus: 'Pending' },
];

export default function LRManagement() {
  const [activeTab, setActiveTab] = useState('list');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">LR Management</h1>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
        <div className="border-b border-gray-200">
          <div className="flex">
            {['list', 'bulk-appointment', 'bulk-pod'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 font-medium transition-colors ${
                  activeTab === tab
                    ? 'border-b-2 border-blue-600 text-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab === 'list' ? 'LR List' : tab === 'bulk-appointment' ? 'Bulk Appointment' : 'Bulk POD'}
              </button>
            ))}
          </div>
        </div>

        <div className="p-6">
          {activeTab === 'list' && (
            <>
              <div className="flex items-center justify-between mb-6">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search LR Number, Client..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 ml-4">
                  <Filter className="w-5 h-5 mr-2" />
                  Filter
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">LR No</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Date</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Platform</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Client</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Route</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Weight</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Freight</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Status</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">POD</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {mockLRs.map((lr) => (
                      <tr key={lr.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">{lr.lrNo}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{lr.date}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{lr.platform}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{lr.client}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{lr.from} → {lr.to}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{lr.weight}</td>
                        <td className="px-4 py-3 text-sm text-gray-900">₹{lr.freight.toLocaleString()}</td>
                        <td className="px-4 py-3">
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                            lr.status === 'Delivered' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                          }`}>
                            {lr.status}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                            lr.podStatus === 'Received' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                          }`}>
                            {lr.podStatus}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center space-x-2">
                            <button className="p-1 text-blue-600 hover:bg-blue-50 rounded">
                              <Eye className="w-4 h-4" />
                            </button>
                            <button className="p-1 text-gray-600 hover:bg-gray-50 rounded">
                              <Edit className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {activeTab === 'bulk-appointment' && (
            <div className="text-center py-12">
              <Upload className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Bulk Appointment Upload</h3>
              <p className="text-gray-600 mb-6">Upload CSV file to create multiple appointments</p>
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 inline-flex items-center">
                <Upload className="w-5 h-5 mr-2" />
                Upload CSV File
              </button>
            </div>
          )}

          {activeTab === 'bulk-pod' && (
            <div className="space-y-6">
              <div className="text-center py-8 border-2 border-dashed border-gray-300 rounded-lg">
                <Download className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Bulk POD Download</h3>
                <p className="text-gray-600 mb-4">Download POD documents as ZIP</p>
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 inline-flex items-center">
                  <Download className="w-5 h-5 mr-2" />
                  Download PODs
                </button>
              </div>
              
              <div className="text-center py-8 border-2 border-dashed border-gray-300 rounded-lg">
                <Upload className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Bulk POD Upload</h3>
                <p className="text-gray-600 mb-4">Upload multiple POD PDFs</p>
                <button className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 inline-flex items-center">
                  <Upload className="w-5 h-5 mr-2" />
                  Upload POD PDFs
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}