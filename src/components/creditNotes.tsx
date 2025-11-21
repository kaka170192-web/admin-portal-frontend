import React, { useState } from 'react';
import { Truck, Package, FileText, AlertCircle, Settings, Users, CreditCard, Menu, X, Upload, Download, Search, Filter, Plus, Eye, Edit, Trash2, ChevronRight, Clock, CheckCircle, XCircle, DollarSign, BarChart3, FileSpreadsheet, Camera, MapPin } from 'lucide-react';


interface CreditNotesProps {
}

const mockCreditNotes = [
  { id: 1, creditNoteId: 'CN001', lrNumber: 'GH2024001', claimId: 'CLM001', originalInvoice: 'INV001', creditAmount: 5000, reason: 'Short Delivery Claim', status: 'Applied', appliedInvoice: 'INV001' },
  { id: 2, creditNoteId: 'CN002', lrNumber: 'GH2024002', claimId: 'CLM002', originalInvoice: 'INV002', creditAmount: 12000, reason: 'Damage Claim', status: 'Approved', appliedInvoice: '' },
];

export default function CreditNotes() {
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