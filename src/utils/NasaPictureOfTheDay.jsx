import React, { useEffect, useState } from 'react';

const NasaPictureOfTheDay = () => {
  const [imageData, setImageData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNasaImage = async () => {
      try {
        const response = await fetch(
          'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'
        );
        if (!response.ok) {
          throw new Error('Erro ao buscar dados da API');
        }
        const data = await response.json();
        setImageData(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchNasaImage();
  }, []);

  if (error) {
    console.log(error);
    return <div className="text-center text-red-500"></div>;
  }

  if (!imageData) {
    return <div className="text-center text-white"></div>;
  }

  // Função para truncar a descrição a 75 caracteres e adicionar "..."
  const truncateText = (text, limit) => {
    if (text.length > limit) {
      return text.substring(0, limit) + '...';
    }
    return text;
  };

  return (
    <div className="flex flex-col items-center p-6 font-inter">
      <h2 className="text-sm font-bold mb-1 text-emerald-500 p-2 rounded">Astronomy Picture of the Day</h2>
      {imageData.media_type === 'image' ? (
        <img
          src={imageData.url}
          alt={imageData.title}
          className="w-full max-w-2xl rounded-md border-2 border-emerald-500  mb-1"
        />
      ) : (
        <iframe
          title="NASA Video of the Day"
          src={imageData.url}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="w-full max-w-2xl border-2 border-emerald-500 rounded-md mb-1"
          style={{ height: '500px' }}
        />
      )}
      <p className="text-xs text-emerald-500 p-3 rounded max-w-2xl">{truncateText(imageData.explanation, 75)}</p>
    </div>
  );
};

export default NasaPictureOfTheDay;
