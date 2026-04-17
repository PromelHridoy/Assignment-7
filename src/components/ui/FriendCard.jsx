import React from 'react';

const FriendCard = ({ friend }) => {
  const statusColor = 
    friend.status === 'overdue' ? 'bg-red-500 text-white' :
    friend.status === 'almost due' ? 'bg-yellow-400 text-white' :
    friend.status === 'on-track' ? 'bg-green-900 text-white' : 
    '';

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 flex flex-col items-center h-full">
      
      <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-gray-50 shadow-sm">
        <img 
          src={friend.picture} 
          alt={friend.name}
          className="w-full h-full object-cover"
        />
      </div>

      <h3 className="text-lg font-bold text-slate-800">
        {friend.name}
      </h3>

      <p className="text-xs text-slate-400 mt-1 mb-3">
        {friend.days_since_contact}d ago
      </p>

      <div className="flex flex-wrap justify-center items-center gap-2 pb-4">
        {friend.tags.map((tag, ind) => (
          <div
            key={ind}
            className="text-[10px] text-green-600 bg-green-100 font-bold px-2 py-0.5 rounded-xl uppercase"
          >
            {tag}
          </div>
        ))}
      </div>

      <button className={`${statusColor}  py-2 px-4 rounded-full text-xs font-bold`}>
        {friend.status}
      </button>

    </div>
  );
};

export default FriendCard;