import React from 'react';
import { Building, GraduationCap, Briefcase, Award } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About NSIIT</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Bridging the Gap Between Education & Industry</h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              With over a decade of experience in the IT industry, NSIIT has been at the forefront of transforming 
              traditional education by focusing on practical, industry-relevant skills that employers actually need.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Our mission is simple: to fill the critical gap between academic learning and real-world application. 
              We believe in hands-on training that prepares our students not just for their first job, but for a 
              successful career in technology.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600">1000+</div>
                <div className="text-gray-600">Students Trained</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-3xl font-bold text-green-600">100%</div>
                <div className="text-gray-600">Job Placement</div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-xl text-center">
              <Building className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Industry Focus</h4>
              <p className="text-gray-600 text-sm">Curriculum designed with industry partners</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-xl text-center">
              <GraduationCap className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Expert Faculty</h4>
              <p className="text-gray-600 text-sm">Learn from industry professionals</p>
            </div>
            <div className="bg-green-50 p-6 rounded-xl text-center">
              <Briefcase className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Practical Training</h4>
              <p className="text-gray-600 text-sm">Hands-on projects and real scenarios</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-xl text-center">
              <Award className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Certification</h4>
              <p className="text-gray-600 text-sm">Industry-recognized certificates</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};