import React from 'react';
import { Header } from './components/Header';
import { Stories } from './components/Stories';
import { Feed } from './components/Feed';
import { Auth } from './components/Auth';
import { useAuthStore } from './store/authStore';

function App() {
  const user = useAuthStore((state) => state.user);

  if (!user) {
    return <Auth />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-14 max-w-screen-md mx-auto px-4">
        <div className="py-4">
          <Stories />
        </div>
        <Feed />
      </main>
    </div>
  );
}

export default App;