import React from 'react';
import { Code, Monitor, Smartphone, TrendingUp, Building, GraduationCap, Users, Award, Briefcase } from 'lucide-react';
import { CourseCard } from './CourseCard';
import { TargetAudienceCard } from './TargetAudienceCard';

export const CoursesSection: React.FC = () => {
  const courses = [
    {
      icon: Code,
      title: "Programming Languages",
      features: ["C Programming", "C++ Programming", "Java Development", "Python Programming"],
      bgColor: "bg-blue-100",
      buttonColor: "bg-blue-600",
      iconColor: "text-blue-600"
    },
    {
      icon: Monitor,
      title: "Web Development",
      features: ["HTML, CSS, JavaScript", "WordPress Development", "React.js", "Angular Framework"],
      bgColor: "bg-green-100",
      buttonColor: "bg-green-600",
      iconColor: "text-green-600"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      features: ["Native iOS Development", "Native Android Development", "React Native", "Flutter Development"],
      bgColor: "bg-purple-100",
      buttonColor: "bg-purple-600",
      iconColor: "text-purple-600"
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing with AI",
      features: ["SEO & SEM", "Social Media Marketing", "AI-Powered Analytics", "Content Strategy"],
      bgColor: "bg-orange-100",
      buttonColor: "bg-orange-600",
      iconColor: "text-orange-600"
    },
    {
      icon: Building,
      title: "Industrial Training",
      features: ["6 Months Training", "Live Projects", "Industry Mentorship", "Placement Assistance"],
      bgColor: "bg-red-100",
      buttonColor: "bg-red-600",
      iconColor: "text-red-600"
    }
  ];

  const targetAudience = [
    {
      icon: GraduationCap,
      title: "School Students",
      description: "Get ahead with early tech skills",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: Users,
      title: "Undergraduates",
      description: "Enhance your degree with practical skills",
      bgColor: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      icon: Award,
      title: "Graduates",
      description: "Bridge the gap to employment",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      icon: Briefcase,
      title: "Job Seekers",
      description: "Upgrade skills for better opportunities",
      bgColor: "bg-orange-100",
      iconColor: "text-orange-600"
    }
  ];

  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Courses</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Industry-designed curriculum with hands-on training and 100% job placement assistance
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className={index === 4 ? "md:col-span-2 lg:col-span-1" : ""}>
              <CourseCard {...course} />
            </div>
          ))}
        </div>

        {/* Target Audience */}
        <div className="mt-16 bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Perfect For</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {targetAudience.map((audience, index) => (
              <TargetAudienceCard key={index} {...audience} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};