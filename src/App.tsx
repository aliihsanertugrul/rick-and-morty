import React, { useEffect, useState } from 'react';
import './App.css';
import { getAllCharacters } from './services/characterService';
import AllCharacters from './components/AllCharacters';
import { Character } from './types/types';
import Header from './components/Header';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import CharacterDetail from './components/CharacterDetail';

function App() {
  const [charactersData, setCharactersData] = useState<Character[] >([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllCharacters(); 
        setCharactersData(data.results);
      } catch (error) {
        console.error('Veri çekme hatası:', error);
      }
    };

    fetchData(); 
  }, []);


  const Router = createBrowserRouter([
    {
      path: '/',
      element: <Outlet />,
      children: [
        {
          index: true,
          element: <AllCharacters charactersData ={charactersData} />,
        },
      
        { path: '/:id', element: <CharacterDetail /> },
      ],
    },
  ]);
  return (
    <>
    <Header/>
    <RouterProvider router={Router} />
    
    </>
  );
}

export default App;
