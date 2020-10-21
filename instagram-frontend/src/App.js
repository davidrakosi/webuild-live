import React from 'react';
import './App.css';
import Header from './components/Header';
import ImageUpload from './components/ImageUpload';

function App() {
  return (
    <div className="App">
      <Header />

      {/* posts ==>> individual post */}
      <ImageUpload />
    </div>
  );
}

export default App;
