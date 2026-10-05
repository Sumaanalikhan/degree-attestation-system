import { useState } from 'react';
import UploadPage from './components/UploadPage';
import VerifyPage from './components/VerifyPage';

function App() {
  const [currentPage, setCurrentPage] = useState('upload');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-blue-700 text-white py-5 shadow-lg">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold">🎓 Degree Attestation System</h1>
          
          <div className="flex gap-6 text-lg">
            <button 
              onClick={() => setCurrentPage('upload')}
              className={`hover:underline ${currentPage === 'upload' ? 'font-bold underline' : ''}`}
            >
              Upload Documents
            </button>
            <button 
              onClick={() => setCurrentPage('verify')}
              className={`hover:underline ${currentPage === 'verify' ? 'font-bold underline' : ''}`}
            >
              Verify Certificate
            </button>
          </div>
        </div>
      </nav>

      <main>
        {currentPage === 'upload' && <UploadPage />}
        {currentPage === 'verify' && <VerifyPage />}
      </main>
    </div>
  );
}

export default App;