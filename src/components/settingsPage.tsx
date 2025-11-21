import React, { useState } from 'react';
import { Truck, Package, FileText, AlertCircle, Settings, Users, CreditCard, Menu, X, Upload, Download, Search, Filter, Plus, Eye, Edit, Trash2, ChevronRight, Clock, CheckCircle, XCircle, DollarSign, BarChart3, FileSpreadsheet, Camera, MapPin } from 'lucide-react';


interface SettingsPageProps {
}

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('users');

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Settings</h1>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="border-b border-gray-200">
          <div className="flex overflow-x-auto">
            {['users', 'api', 'billing', 'general'].map((tab) => (
              <button key={tab} onClick={() => setActiveTab(tab)} className={`px-6 py-3 font-medium whitespace-nowrap ${activeTab === tab ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'}`}>
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
        <div className="p-6">
          {activeTab === 'users' && (
            <div>
              <h2 className="text-xl font-bold mb-4">User Management</h2>
              <div className="space-y-3">
                {['Admin User', 'Manager User'].map((user) => (
                  <div key={user} className="p-4 border border-gray-200 rounded-lg">
                    <p className="font-medium">{user}</p>
                    <p className="text-sm text-gray-600">{user.toLowerCase().replace(' ', '.')}@greenhaul.com</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          {activeTab === 'billing' && (
            <div>
              <h2 className="text-xl font-bold mb-4">Billing</h2>
              <div className="p-6 bg-blue-50 rounded-lg">
                <h3 className="font-bold">Professional Plan</h3>
                <p className="text-2xl font-bold mt-2">₹49,999/month</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}