// Author: Apostolos Chalis 2025
import React from 'react';

type NewsCardProps = {
  title: string;
  link: string;
};

const NewsCard: React.FC<TeamCardProps> = ({ title, link }) => {
  return (
    <div className="border rounded p-4 shadow">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600">{link}</p>
    </div>
  );
};

export default NewsCard;

