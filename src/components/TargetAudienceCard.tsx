import React from 'react';
import { LucideIcon } from 'lucide-react';

interface TargetAudienceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  bgColor: string;
  iconColor: string;
}

export const TargetAudienceCard: React.FC<TargetAudienceCardProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  bgColor, 
  iconColor 
}) => {
  return (
    <div className="text-center">
      <div className={`${bgColor} p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center`}>
        <Icon className={`h-8 w-8 ${iconColor}`} />
      </div>
      <h4 className="font-semibold text-gray-900 mb-2">{title}</h4>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};