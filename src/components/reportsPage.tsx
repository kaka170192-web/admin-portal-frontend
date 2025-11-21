import React, { useState } from 'react';
import { Truck, Package, FileText, AlertCircle, Settings, Users, CreditCard, Menu, X, Upload, Download, Search, Filter, Plus, Eye, Edit, Trash2, ChevronRight, Clock, CheckCircle, XCircle, DollarSign, BarChart3, FileSpreadsheet, Camera, MapPin } from 'lucide-react';


interface ReportsPageProps {
}

const mockReports = [
  { id: 1, reportId: 'RPT001', reportName: 'LR Allocation Report', filters: 'Date: Nov 2024', generatedAt: '2024-11-16 10:30 AM' },
  { id: 2, reportId: 'RPT002', reportName: 'Billing Summary', filters: 'Date: Nov 2024, Client: All', generatedAt: '2024-11-16 11:00 AM' },
  { id: 3, reportId: 'RPT003', reportName: 'Courier KPI Report', filters: 'Month: November 2024', generatedAt: '2024-11-16 12:00 PM' },
];

export default function ReportsPage() {
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