import React, { useState } from 'react';
import { Truck, Package, FileText, AlertCircle, Settings, Users, CreditCard, Menu, X, Upload, Download, Search, Filter, Plus, Eye, Edit, Trash2, ChevronRight, Clock, CheckCircle, XCircle, DollarSign, BarChart3, FileSpreadsheet, Camera, MapPin } from 'lucide-react';
import LoginPage from './login';
import Sidebar from './sidebar';
import Header from './header';
import Dashboard from './dashboard';
import LRManagement from './lrManagement';
import CreateLR from './createLR';
import Claims from './claims';
import PincodeMapping from './pincodeMapping';
import LogisticsAllocation from './logisticsAllocation';
import BillingPage from './billingPage';
import CreditNotes from './creditNotes';
import DebitNotes from './debitNotes';
import ReportsPage from './reportsPage';
import Masters from './masters';
import SettingsPage from './settingsPage';


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

export default App;