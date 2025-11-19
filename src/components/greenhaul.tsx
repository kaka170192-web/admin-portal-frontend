import React, { useState } from 'react';
import { Truck, Package, FileText, AlertCircle, Settings, Users, CreditCard, Menu, X, Upload, Download, Search, Filter, Plus, Eye, Edit, Trash2, ChevronRight, Clock, CheckCircle, XCircle, DollarSign, BarChart3, FileSpreadsheet, Camera, MapPin } from 'lucide-react';

const mockLRs = [
  { id: 'LR001', lrNo: 'GH2024001', date: '2024-11-10', platform: 'Porter', client: 'Amazon', consignee: 'Raj Enterprises', from: 'Delhi', to: 'Mumbai', weight: '500 kg', freight: 15000, status: 'In Transit', podStatus: 'Pending' },
  { id: 'LR002', lrNo: 'GH2024002', date: '2024-11-12', platform: 'Rivigo', client: 'Flipkart', consignee: 'Singh Trading', from: 'Mumbai', to: 'Bangalore', weight: '750 kg', freight: 22000, status: 'Delivered', podStatus: 'Received' },
  { id: 'LR003', lrNo: 'GH2024003', date: '2024-11-14', platform: 'Delhivery', client: 'Meesho', consignee: 'Kumar Store', from: 'Bangalore', to: 'Hyderabad', weight: '300 kg', freight: 8500, status: 'In Transit', podStatus: 'Pending' },
];

const mockClaims = [
  { id: 'CLM001', lrNo: 'GH2024001', claimType: 'Short Delivery', amount: 5000, status: 'Open', date: '2024-11-15', description: 'Partial goods missing' },
  { id: 'CLM002', lrNo: 'GH2024002', claimType: 'Damage', amount: 12000, status: 'In Progress', date: '2024-11-13', description: 'Damaged during transit' },
  { id: 'CLM003', lrNo: 'GH2023150', claimType: 'Delay', amount: 3000, status: 'Closed', date: '2024-10-20', description: 'Late delivery penalty' },
];

const mockMasters = {
  platforms: ['Porter', 'Rivigo', 'Delhivery', 'Shadowfax', 'Ecom Express'],
  clients: ['Amazon', 'Flipkart', 'Meesho', 'Myntra', 'Snapdeal'],
  consignees: ['Raj Enterprises', 'Singh Trading', 'Kumar Store', 'Sharma Logistics', 'Patel Warehouse'],
};

const mockPincodeMappings = [
  { id: 1, pincode: '110001', city: 'Delhi', state: 'Delhi', zone: 'Origin', serviceability: 'Serviceable', preferredCourier: 'Delhivery', allowedCouriers: 'Delhivery, Porter, Rivigo', specialCharges: '0', greenhaulEligible: 'Yes' },
  { id: 2, pincode: '400001', city: 'Mumbai', state: 'Maharashtra', zone: 'Destination', serviceability: 'ODA', preferredCourier: 'Porter', allowedCouriers: 'Porter, Shadowfax', specialCharges: '50', greenhaulEligible: 'Yes' },
  { id: 3, pincode: '560001', city: 'Bangalore', state: 'Karnataka', zone: 'Destination', serviceability: 'Serviceable', preferredCourier: 'Rivigo', allowedCouriers: 'Rivigo, Delhivery, Ecom Express', specialCharges: '0', greenhaulEligible: 'Yes' },
];

const mockAllocations = [
  { id: 1, bookingId: 'BK001', originPin: '110001', destPin: '400001', chargeableWeight: 500, volumetricWeight: 480, billableWeight: 500, selectedCourier: 'Porter', ratePerKg: 30, estimatedFreight: 15000, lrNumber: 'GH2024001', status: 'Allocated', reason: 'Lowest rate' },
  { id: 2, bookingId: 'BK002', originPin: '400001', destPin: '560001', chargeableWeight: 750, volumetricWeight: 720, billableWeight: 750, selectedCourier: 'Rivigo', ratePerKg: 28, estimatedFreight: 21000, lrNumber: 'GH2024002', status: 'Allocated', reason: 'Best service' },
];

const mockBillings = [
  { id: 1, lrNumber: 'GH2024001', bookingId: 'BK001', originZone: 'Origin', destZone: 'Destination', billableWeight: 500, ratePerKg: 30, freightValue: 15000, fov: 200, docket: 50, fsc: 2, oda: 50, mathadi: 0, demurrage: 0, appointment: 100, handling: 150, gst: 18, gstValue: 2826, totalFreight: 18526, status: 'Generated' },
  { id: 2, lrNumber: 'GH2024002', bookingId: 'BK002', originZone: 'Origin', destZone: 'Destination', billableWeight: 750, ratePerKg: 28, freightValue: 21000, fov: 300, docket: 50, fsc: 2, oda: 0, mathadi: 100, demurrage: 0, appointment: 0, handling: 200, gst: 18, gstValue: 3959, totalFreight: 25959, status: 'Generated' },
];

const mockCreditNotes = [
  { id: 1, creditNoteId: 'CN001', lrNumber: 'GH2024001', claimId: 'CLM001', originalInvoice: 'INV001', creditAmount: 5000, reason: 'Short Delivery Claim', status: 'Applied', appliedInvoice: 'INV001' },
  { id: 2, creditNoteId: 'CN002', lrNumber: 'GH2024002', claimId: 'CLM002', originalInvoice: 'INV002', creditAmount: 12000, reason: 'Damage Claim', status: 'Approved', appliedInvoice: '' },
];

const mockDebitNotes = [
  { id: 1, debitNoteId: 'DN001', party: 'Amazon', lrNumber: 'GH2024001', amount: 1000, reason: 'Late delivery penalty', status: 'Issued' },
  { id: 2, debitNoteId: 'DN002', party: 'Porter', lrNumber: '', amount: 5000, reason: 'POD not submitted', status: 'Settled' },
];

const mockReports = [
  { id: 1, reportId: 'RPT001', reportName: 'LR Allocation Report', filters: 'Date: Nov 2024', generatedAt: '2024-11-16 10:30 AM' },
  { id: 2, reportId: 'RPT002', reportName: 'Billing Summary', filters: 'Date: Nov 2024, Client: All', generatedAt: '2024-11-16 11:00 AM' },
  { id: 3, reportId: 'RPT003', reportName: 'Courier KPI Report', filters: 'Month: November 2024', generatedAt: '2024-11-16 12:00 PM' },
];

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return <LoginPage onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar 
        sidebarOpen={sidebarOpen} 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header 
          sidebarOpen={sidebarOpen} 
          setSidebarOpen={setSidebarOpen}
          onLogout={() => setIsLoggedIn(false)}
        />
        <main className="flex-1 overflow-y-auto p-6">
          {currentPage === 'dashboard' && <Dashboard />}
          {currentPage === 'lr-management' && <LRManagement />}
          {currentPage === 'create-lr' && <CreateLR setCurrentPage={setCurrentPage} />}
          {currentPage === 'claims' && <Claims />}
          {currentPage === 'pincode-mapping' && <PincodeMapping />}
          {currentPage === 'allocations' && <LogisticsAllocation />}
          {currentPage === 'billing' && <BillingPage />}
          {currentPage === 'credit-notes' && <CreditNotes />}
          {currentPage === 'debit-notes' && <DebitNotes />}
          {currentPage === 'reports' && <ReportsPage />}
          {currentPage === 'masters' && <Masters />}
          {currentPage === 'settings' && <SettingsPage />}
        </main>
      </div>
    </div>
  );
}

function LoginPage({ onLogin }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-700">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-96">
        <div className="flex items-center justify-center mb-6">
          <Truck className="w-12 h-12 text-blue-600 mr-2" />
          <h1 className="text-3xl font-bold text-gray-800">Greenhaul</h1>
        </div>
        <h2 className="text-xl text-center text-gray-600 mb-6">Logistics Portal</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="admin@greenhaul.com"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
            />
          </div>
          <button
            onClick={onLogin}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

function Sidebar({ sidebarOpen, currentPage, setCurrentPage }) {
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

function Header({ sidebarOpen, setSidebarOpen, onLogout }) {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="flex items-center justify-between px-6 py-4">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="text-gray-600 hover:text-gray-900"
        >
          {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        <div className="flex items-center space-x-4">
          <div className="text-right">
            <p className="text-sm font-medium text-gray-900">Admin User</p>
            <p className="text-xs text-gray-500">admin@greenhaul.com</p>
          </div>
          <button
            onClick={onLogout}
            className="px-4 py-2 text-sm bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}

function Dashboard() {
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

function LRManagement() {
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

function CreateLR({ setCurrentPage }) {
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

function Claims() {
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

function PincodeMapping() {
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

function LogisticsAllocation() {
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

function BillingPage() {
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

function CreditNotes() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Credit Notes</h1>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6">
          <div className="space-y-4">
            {mockCreditNotes.map((c) => (
              <div key={c.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <span className="font-bold">{c.creditNoteId}</span>
                  <span className="text-red-600 font-bold">- ₹{c.creditAmount.toLocaleString()}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function DebitNotes() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Debit Notes</h1>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6">
          <div className="space-y-4">
            {mockDebitNotes.map((d) => (
              <div key={d.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <span className="font-bold">{d.debitNoteId}</span>
                  <span className="text-green-600 font-bold">+ ₹{d.amount.toLocaleString()}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ReportsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Reports</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {['LR Allocation', 'Billing Summary', 'Courier KPIs', 'POD Status', 'Outstanding Invoices', 'RTO Report'].map((report) => (
          <button key={report} className="p-6 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md text-left">
            <h3 className="text-lg font-bold text-gray-900 mb-2">{report}</h3>
            <p className="text-sm text-gray-600">View report</p>
          </button>
        ))}
      </div>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4">Generated Reports</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Report ID</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Name</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Generated At</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {mockReports.map((r) => (
                  <tr key={r.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm font-medium">{r.reportId}</td>
                    <td className="px-4 py-3 text-sm">{r.reportName}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{r.generatedAt}</td>
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

function Masters() {
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

function SettingsPage() {
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

export default App;