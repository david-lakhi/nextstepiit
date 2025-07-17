import React from 'react';
import { Award, Building } from 'lucide-react';

export const CertificationsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Certifications & Partnerships</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-blue-50 p-8 rounded-xl">
              <div className="flex items-center space-x-4 mb-6">
                <Award className="h-12 w-12 text-blue-600" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">ISO 9001 Certified</h3>
                  <p className="text-gray-600">Quality Management System</p>
                </div>
              </div>
              <p className="text-gray-600">
                Our ISO 9001 certification ensures that we maintain the highest standards in 
                educational delivery, continuous improvement, and student satisfaction.
              </p>
            </div>
          </div>
          
          <div>
            <div className="bg-green-50 p-8 rounded-xl">
              <div className="flex items-center space-x-4 mb-6">
                <Building className="h-12 w-12 text-green-600" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Industry Partnerships</h3>
                  <p className="text-gray-600">Strategic IT Company Tie-ups</p>
                </div>
              </div>
              <p className="text-gray-600">
                We have established partnerships with leading IT companies to ensure our curriculum 
                stays current and our students get direct access to job opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};