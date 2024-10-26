"use client";

import Layout from '../components/Layout';
import { useEffect, useState } from 'react';
import axios from 'axios';

const CuteCats = () => {
  const [cats, setCats] = useState([]);

  const fetchCats = async () => {
    const response = await axios.get('https://api.thecatapi.com/v1/images/search?limit=8');
    setCats(response.data);
  };

  useEffect(() => {
    fetchCats();
  }, []);

  return (
    <Layout>
      <h1 className="text-3xl font-bold text-center">Cute Cats</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {cats.map((cat) => (
          <div key={cat.id} className="rounded overflow-hidden shadow-lg">
            <img src={cat.url} alt="Cute cat" className="w-full h-48 object-cover" />
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default CuteCats;
