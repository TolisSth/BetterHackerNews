// Author: Apostolos Chalis 2025
'use client';

import { useEffect, useState } from 'react';
import NewsCard from './NewsCard';
import { Loader } from 'lucide-react';

export default function NewsList() {
  const [titles, setTitles] = useState<string[] | null>(null);
  const [links, setLinks] = useState<string[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res1 = await fetch('http://127.0.0.1:8000/titles');
        const data1 = await res1.json();

        const res2 = await fetch('http://127.0.0.1:8000/links');
        const data2 = await res2.json();

        setTitles(data1.titles);
        setLinks(data2.links);
      } catch (err) {
        setError('Failed to fetch news.');
      }
    }

    fetchData();
  }, []);

 if (error) return <p className="text-red-500">{error}</p>;
 if (!titles || !links) {
  return (
    <p className="flex items-center gap-2">
      <Loader className="animate-spin w-4 h-4" />
      Fetching your news...
    </p>
   );
 }

  return (
    <ul className="list-none pl-0 space-y-4">
      {titles.map((title, i) => (
        <li key={i}>
          <NewsCard title={title} link={links[i]} />
        </li>
      ))}
    </ul>
  );
}

