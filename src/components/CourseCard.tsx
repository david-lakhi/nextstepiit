import React from 'react';
import { CheckCircle, LucideIcon } from 'lucide-react';

interface CourseCardProps {
  icon: LucideIcon;
  title: string;
  features: string[];
  bgColor: string;
  buttonColor: string;
  iconColor: string;
}

export const CourseCard: React.FC<CourseCardProps> = ({ 
  icon: Icon, 
  title, 
  features, 
  bgColor, 
  buttonColor, 
  iconColor 
}) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <div className={`${bgColor} p-3 rounded-lg w-fit mb-6`}>
        <Icon className={`h-8 w-8 ${iconColor}`} />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2 text-gray-600 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-2">
            <CheckCircle className="h-4 w-4 text-green-500" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button className={`w-full ${buttonColor} text-white py-3 rounded-lg hover:opacity-90 transition-colors`}>
        Learn More
      </button>
    </div>
  );
};