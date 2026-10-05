function VerifyPage() {
  return (
    <div className="max-w-2xl mx-auto p-8 text-center">
      <div className="bg-white rounded-2xl shadow-xl p-10">
        <h2 className="text-3xl font-bold mb-6">Verify Degree Certificate</h2>
        <p className="text-gray-600 mb-8">Enter Transaction Hash or Token ID to verify</p>
        
        <input 
          type="text" 
          placeholder="0x1234... or Token ID" 
          className="w-full p-4 border rounded-xl text-lg mb-6"
        />
        
        <button className="bg-green-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-green-700">
          Verify on Blockchain
        </button>
      </div>
    </div>
  );
}

export default VerifyPage;