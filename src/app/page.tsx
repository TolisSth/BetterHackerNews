// Author: Apostolos Chalis 2025 

export default async function HomePage() {
  const res = await fetch('http://localhost:8000', {
    cache: 'no-store',
  });
  const data: { titles: string[] } = await res.json();

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">BetterHackerNews</h1>
      <ul className="list-disc pl-5">
	{data.titles.map((title, index) => {
	  // rendering only odd indexed titles due to a problem with the API
	  if (index%2 != 0) {
	    return (
	      <li key={index}>{title}</li>
	    );
	  }
	  return null;
	})}

      </ul>
    </main>
  );
}

