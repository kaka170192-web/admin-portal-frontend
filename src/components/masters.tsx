import React, { useState } from 'react';
import { Truck, Package, FileText, AlertCircle, Settings, Users, CreditCard, Menu, X, Upload, Download, Search, Filter, Plus, Eye, Edit, Trash2, ChevronRight, Clock, CheckCircle, XCircle, DollarSign, BarChart3, FileSpreadsheet, Camera, MapPin } from 'lucide-react';


interface MastersProps {
}

const mockMasters = {
  platforms: ['Porter', 'Rivigo', 'Delhivery', 'Shadowfax', 'Ecom Express'],
  clients: ['Amazon', 'Flipkart', 'Meesho', 'Myntra', 'Snapdeal'],
  consignees: ['Raj Enterprises', 'Singh Trading', 'Kumar Store', 'Sharma Logistics', 'Patel Warehouse'],
};

export default function Masters() {
  const [activeTab, setActiveTab] = useState('platform');

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Master Data</h1>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="border-b border-gray-200">
          <div className="flex">
            {['platform', 'client', 'consignee'].map((tab) => (
              <button key={tab} onClick={() => setActiveTab(tab)} className={`px-6 py-3 font-medium ${activeTab === tab ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'}`}>
                {tab.charAt(0).toUpperCase() + tab.slice(1)} Master
              </button>
            ))}
          </div>
        </div>
        <div className="p-6">
          <div className="space-y-3">
            {activeTab === 'platform' && mockMasters.platforms.map((item) => (
              <div key={item} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <span className="font-medium">{item}</span>
                <button className="text-gray-600 hover:text-gray-900"><Edit className="w-4 h-4" /></button>
              </div>
            ))}
            {activeTab === 'client' && mockMasters.clients.map((item) => (
              <div key={item} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <span className="font-medium">{item}</span>
                <button className="text-gray-600 hover:text-gray-900"><Edit className="w-4 h-4" /></button>
              </div>
            ))}
            {activeTab === 'consignee' && mockMasters.consignees.map((item) => (
              <div key={item} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <span className="font-medium">{item}</span>
                <button className="text-gray-600 hover:text-gray-900"><Edit className="w-4 h-4" /></button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}