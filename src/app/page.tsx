// Author: Apostolos Chalis 2025

import NewsList from '@/app/components/NewsList';

export default function HomePage() {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">BetterHackerNews</h1>
      <NewsList />
    </main>
  );
}

