import React, { useState } from 'react';
import { Truck, Package, FileText, AlertCircle, Settings, Users, CreditCard, Menu, X, Upload, Download, Search, Filter, Plus, Eye, Edit, Trash2, ChevronRight, Clock, CheckCircle, XCircle, DollarSign, BarChart3, FileSpreadsheet, Camera, MapPin } from 'lucide-react';


interface DebitNotesProps {
}

const mockDebitNotes = [
  { id: 1, debitNoteId: 'DN001', party: 'Amazon', lrNumber: 'GH2024001', amount: 1000, reason: 'Late delivery penalty', status: 'Issued' },
  { id: 2, debitNoteId: 'DN002', party: 'Porter', lrNumber: '', amount: 5000, reason: 'POD not submitted', status: 'Settled' },
];

export default function DebitNotes() {
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