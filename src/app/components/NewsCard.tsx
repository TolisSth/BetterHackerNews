// Author: Apostolos Chalis 2025
import React from 'react';
import { ExternalLink } from 'lucide-react'; // optional icon

type NewsCardProps = {
  title: string;
  link: string;
};

const NewsCard: React.FC<NewsCardProps> = ({ title, link }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-200 max-w-xl w-full p-6 hover:shadow-lg transition-all duration-300">
      <h3 className="text-2xl font-semibold text-gray-800 mb-3">{title}</h3>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium text-sm"
      >
        <ExternalLink className="w-4 h-4" />
        <span className="truncate max-w-[90%]">{link}</span>
      </a>
    </div>
  );
};

export default NewsCard;

