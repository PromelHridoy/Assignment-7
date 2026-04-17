import React from 'react';

const SummaryCards = () => {
    return (
        <div className=" pt-6 bg-gray-50">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 border-b pb-8 border-gray-300">
        
        <div className="bg-white py-8 px-4 rounded-xl shadow-sm border border-gray-200 flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold text-[#1e3a3a] mb-2">10</h2>
          <p className="text-gray-500 font-medium text-sm">Total Friends</p>
        </div>

        <div className="bg-white py-8 px-4 rounded-xl shadow-sm border border-gray-200 flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold text-[#1e3a3a] mb-2">3</h2>
          <p className="text-gray-500 font-medium text-sm">On Track</p>
        </div>

        <div className="bg-white py-8 px-4 rounded-xl shadow-sm border border-gray-200 flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold text-[#1e3a3a] mb-2">6</h2>
          <p className="text-gray-500 font-medium text-sm">Need Attention</p>
        </div>

        <div className="bg-white py-8 px-4 rounded-xl shadow-sm border border-gray-200 flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold text-[#1e3a3a] mb-2">12</h2>
          <p className="text-gray-500 font-medium text-sm">Interactions This Month</p>
        </div>

      </div>
    </div>
    );
};

export default SummaryCards;