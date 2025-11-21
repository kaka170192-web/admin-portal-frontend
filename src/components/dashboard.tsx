import React, { useState } from 'react';
import { Truck, Package, FileText, AlertCircle, Settings, Users, CreditCard, Menu, X, Upload, Download, Search, Filter, Plus, Eye, Edit, Trash2, ChevronRight, Clock, CheckCircle, XCircle, DollarSign, BarChart3, FileSpreadsheet, Camera, MapPin } from 'lucide-react';


interface DashboardProps {
}

const mockLRs = [
  { id: 'LR001', lrNo: 'GH2024001', date: '2024-11-10', platform: 'Porter', client: 'Amazon', consignee: 'Raj Enterprises', from: 'Delhi', to: 'Mumbai', weight: '500 kg', freight: 15000, status: 'In Transit', podStatus: 'Pending' },
  { id: 'LR002', lrNo: 'GH2024002', date: '2024-11-12', platform: 'Rivigo', client: 'Flipkart', consignee: 'Singh Trading', from: 'Mumbai', to: 'Bangalore', weight: '750 kg', freight: 22000, status: 'Delivered', podStatus: 'Received' },
  { id: 'LR003', lrNo: 'GH2024003', date: '2024-11-14', platform: 'Delhivery', client: 'Meesho', consignee: 'Kumar Store', from: 'Bangalore', to: 'Hyderabad', weight: '300 kg', freight: 8500, status: 'In Transit', podStatus: 'Pending' },
];

export default function Dashboard() {
  const kpis = [
    { label: 'Total LRs', value: '1,247', icon: FileText, color: 'blue', trend: '+12%' },
    { label: 'In Transit', value: '423', icon: Truck, color: 'yellow', trend: '+5%' },
    { label: 'Delivered', value: '789', icon: CheckCircle, color: 'green', trend: '+18%' },
    { label: 'Active Claims', value: '35', icon: AlertCircle, color: 'red', trend: '-3%' },
    { label: 'Total Freight', value: '₹45.2L', icon: DollarSign, color: 'purple', trend: '+22%' },
    { label: 'POD Pending', value: '156', icon: Clock, color: 'orange', trend: '+8%' },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {kpis.map((kpi, index) => {
          const Icon = kpi.icon;
          const bgColor = kpi.color === 'blue' ? 'bg-blue-100' : kpi.color === 'yellow' ? 'bg-yellow-100' : kpi.color === 'green' ? 'bg-green-100' : kpi.color === 'red' ? 'bg-red-100' : kpi.color === 'purple' ? 'bg-purple-100' : 'bg-orange-100';
          const textColor = kpi.color === 'blue' ? 'text-blue-600' : kpi.color === 'yellow' ? 'text-yellow-600' : kpi.color === 'green' ? 'text-green-600' : kpi.color === 'red' ? 'text-red-600' : kpi.color === 'purple' ? 'text-purple-600' : 'text-orange-600';
          
          return (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg ${bgColor}`}>
                  <Icon className={`w-6 h-6 ${textColor}`} />
                </div>
                <span className="text-sm font-medium text-green-600">{kpi.trend}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{kpi.value}</h3>
              <p className="text-sm text-gray-600">{kpi.label}</p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Recent LRs</h2>
          <div className="space-y-3">
            {mockLRs.slice(0, 3).map((lr) => (
              <div key={lr.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{lr.lrNo}</p>
                  <p className="text-sm text-gray-600">{lr.from} → {lr.to}</p>
                </div>
                <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                  lr.status === 'Delivered' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {lr.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Platform Performance</h2>
          <div className="space-y-3">
            {['Porter', 'Rivigo', 'Delhivery'].map((platform, index) => (
              <div key={platform} className="flex items-center justify-between">
                <span className="text-gray-700">{platform}</span>
                <div className="flex items-center space-x-3">
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full" 
                      style={{ width: `${85 - index * 10}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-gray-900">{85 - index * 10}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}