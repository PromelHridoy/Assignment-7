import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import call from '../../assets/call.png';
import text from "../../assets/text.png";
import video from '../../assets/video.png'

const FriendDetails = () => {
    const {id: friendId} = useParams();

    const friends = useLoaderData();

    const expectedFriend = friends.find((friend) => friend.id === Number(friendId));

    const {
        name,
        picture,
        email,
        days_since_contact,
        status,
        tags,
        bio,
        goal,
        next_due_date,
    } = expectedFriend;

    const statusColor = 
    status === 'overdue' ? 'bg-red-500 text-white' :
    status === 'almost due' ? 'bg-yellow-400 text-white' :
    status === 'on-track' ? 'bg-green-900 text-white' : 
    '';

       return (
    <div className="bg-gray-50  p-4 md:p-10">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        <div className="lg:col-span-1 space-y-6">

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <img 
              src={picture} 
              alt={name}
              className="w-24 h-24 rounded-full mb-4 border-2 border-gray-100"
            />
            <h2 className="text-2xl font-bold text-slate-800">{name}</h2>
            <div className="gap-2 mt-2">
              <div className="flex flex-wrap justify-center items-center gap-2 pb-4">
        {tags.map((tag, ind) => (
          <div
            key={ind}
            className="text-[10px] text-green-600 bg-green-100 font-bold px-2 py-0.5 rounded-xl uppercase"
          >
            {tag}
          </div>
        ))}
      </div>

      <button className={`${statusColor}  py-2 px-4 rounded-full text-xs font-bold`}>
        {status}
      </button>
            </div>
            <p className="italic text-slate-500 mt-4 text-sm">{bio}</p>
            <p className="text-xs text-slate-400 mt-1">Preferred: {email}</p>
          </div>

          <div className="space-y-3">
            <button className="w-full py-3 px-4 bg-white border border-gray-200 rounded-lg flex items-center justify-center gap-2 font-bold text-slate-700">
               Snooze 2 Weeks
            </button>
            <button className="w-full py-3 px-4 bg-white border border-gray-200 rounded-lg flex items-center justify-center gap-2 font-bold text-slate-700 ">
               Archive
            </button>
            <button className="w-full py-3 px-4 bg-white border border-gray-200 rounded-lg flex items-center justify-center gap-2 font-bold text-red-500 ">
               Delete
            </button>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-30 text-center">
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
              <h4 className="text-3xl font-bold text-slate-800">{days_since_contact}</h4>
              <p className="text-xs text-slate-400 mt-1 uppercase font-semibold">Days Since Contact</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
              <h4 className="text-3xl font-bold text-slate-800">{goal}</h4>
              <p className="text-xs text-slate-400 mt-1 uppercase font-semibold">Goal (Days)</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
              <h4 className="text-2xl font-bold text-[#1e3a3a]">{next_due_date}</h4>
              <p className="text-xs text-slate-400 mt-1 uppercase font-semibold">Next Due</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex justify-between items-start">
            <div>
              <h3 className="font-bold text-slate-800 mb-2">Relationship Goal</h3>
              <p className="text-slate-600">Connect every <span className="font-bold text-slate-800">30 days</span></p>
            </div>
            <button className="text-xs bg-gray-50 px-3 py-1 rounded border border-gray-200 font-bold hover:bg-gray-100">Edit</button>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-6">Quick Check-In</h3>
            <div className="grid grid-cols-3 gap-4">
              <button className="flex flex-col items-center gap-2 p-4 rounded-xl border border-gray-100 bg-gray-50 hover:bg-gray-100 transition-all">
                <img src={call} alt="" />
                <span className="text-sm font-medium text-slate-600">Call</span>
              </button>
              <button className="flex flex-col items-center gap-2 p-4 rounded-xl border border-gray-100 bg-gray-50 hover:bg-gray-100 transition-all">
                <img src={text} alt="" />
                <span className="text-sm font-medium text-slate-600">Text</span>
              </button>
              <button className="flex flex-col items-center gap-2 p-4 rounded-xl border border-gray-100 bg-gray-50 hover:bg-gray-100 transition-all">
               <img src={video} alt="" />
                <span className="text-sm font-medium text-slate-600">Video</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FriendDetails;