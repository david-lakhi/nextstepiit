import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export const ContactInfo: React.FC = () => {
  return (
    <div>
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Visit Our Centers</h3>
      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <MapPin className="h-6 w-6 text-blue-600 mt-1" />
          <div>
            <h4 className="font-semibold text-gray-900">Our Locations</h4>
            <p className="text-gray-600">Chandigarh, Mohali, Panchkula</p>
          </div>
        </div>
        
        <div className="flex items-start space-x-4">
          <Phone className="h-6 w-6 text-blue-600 mt-1" />
          <div>
            <h4 className="font-semibold text-gray-900">Phone</h4>
            <p className="text-gray-600">+91 8847024002</p>
          </div>
        </div>
        
        <div className="flex items-start space-x-4">
          <Mail className="h-6 w-6 text-blue-600 mt-1" />
          <div>
            <h4 className="font-semibold text-gray-900">Email</h4>
            <p className="text-gray-600">info.nextstepiit@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};