import React, { useState } from 'react';
import { Truck, Package, FileText, AlertCircle, Settings, Users, CreditCard, Menu, X, Upload, Download, Search, Filter, Plus, Eye, Edit, Trash2, ChevronRight, Clock, CheckCircle, XCircle, DollarSign, BarChart3, FileSpreadsheet, Camera, MapPin } from 'lucide-react';


interface CreateLRProps {
    setCurrentPage: (pageId: string) => void;
}

const mockMasters = {
  platforms: ['Porter', 'Rivigo', 'Delhivery', 'Shadowfax', 'Ecom Express'],
  clients: ['Amazon', 'Flipkart', 'Meesho', 'Myntra', 'Snapdeal'],
  consignees: ['Raj Enterprises', 'Singh Trading', 'Kumar Store', 'Sharma Logistics', 'Patel Warehouse'],
};


export default function CreateLR({ setCurrentPage }: CreateLRProps) {
  const [formData, setFormData] = useState({
    lrNo: '', date: '', platform: '', client: '', consignee: '', from: '', to: '', weight: '', freight: '',
  });

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Create New LR</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">LR Number</label>
              <input type="text" value={formData.lrNo} onChange={(e) => setFormData({...formData, lrNo: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
              <input type="date" value={formData.date} onChange={(e) => setFormData({...formData, date: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Platform</label>
              <select value={formData.platform} onChange={(e) => setFormData({...formData, platform: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Select Platform</option>
                {mockMasters.platforms.map((p) => <option key={p} value={p}>{p}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Client</label>
              <select value={formData.client} onChange={(e) => setFormData({...formData, client: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Select Client</option>
                {mockMasters.clients.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">From Location</label>
              <input type="text" value={formData.from} onChange={(e) => setFormData({...formData, from: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">To Location</label>
              <input type="text" value={formData.to} onChange={(e) => setFormData({...formData, to: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
          </div>
          <div className="flex items-center justify-end space-x-4 mt-6">
            <button onClick={() => setCurrentPage('lr-management')} className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">Cancel</button>
            <button onClick={() => alert('LR created!')} className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Create LR</button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <Camera className="w-5 h-5 mr-2 text-blue-600" />
            PDF Scanning
          </h3>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-500 cursor-pointer">
            <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
            <p className="text-sm font-medium text-gray-900 mb-1">Upload LR PDF</p>
            <p className="text-xs text-gray-500">AI will extract data</p>
          </div>
        </div>
      </div>
    </div>
  );
}
