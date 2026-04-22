import React, { useContext } from 'react';
import { useLoaderData, useNavigation, useParams } from 'react-router';
import callImg from '../../assets/call.png';
import textImg from "../../assets/text.png";
import videoImg from '../../assets/video.png';
import { FriendContext } from '../../context/FriendContext';
import toast from 'react-hot-toast';

const FriendDetails = () => {
    const navigation = useNavigation();
    console.log(navigation.state);
    
    const { id: friendId } = useParams();
    const friends = useLoaderData();
    const { contact, setContact } = useContext(FriendContext);

    if(navigation.state === "loading"){
        console.log("Loading friend details...");
        return (
            <div className="flex justify-center items-center h-screen">
                <span className="loading loading-spinner text-info"></span>
            </div>
        )
    }

    const expectedFriend = friends.find((friend) => friend.id === Number(friendId));


    const { name, picture, email, days_since_contact, status, tags, bio, goal, next_due_date } = expectedFriend;

    const handleCheckIn = (type) => {
        if (!contact) {
            console.log("Contact context is missing!");
            return;
        }

        const newEntry = {
            ...expectedFriend, 
            type: type,      
            time: new Date().toLocaleString(), 
        };

        setContact([newEntry, ...contact]);
        
        const message = type === 'text' ? 'Messaging' : type === 'video' ? 'Video calling' : 'Calling';
        toast.success(`${message} ${name}`);
    };

    const statusColor = 
        status === 'overdue' ? 'bg-red-500 text-white' :
        status === 'almost due' ? 'bg-yellow-400 text-white' :
        status === 'on-track' ? 'bg-green-900 text-white' : 'bg-gray-200';

    return (
        <div className="bg-gray-50 p-4 md:p-10">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                <div className="lg:col-span-1 space-y-6">
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                        <img src={picture} alt={name} className="w-24 h-24 rounded-full mb-4 border-2 border-gray-100 object-cover" />
                        <h2 className="text-2xl font-bold text-slate-800">{name}</h2>
                        <div className="flex flex-wrap justify-center gap-2 mt-2 pb-4">
                            {tags.map((tag, ind) => (
                                <span key={ind} className="text-[10px] text-green-600 bg-green-100 font-bold px-2 py-0.5 rounded-xl uppercase">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <button className={`${statusColor} py-2 px-4 rounded-full text-xs font-bold uppercase`}>
                            {status}
                        </button>
                        <p className="italic text-slate-500 mt-4 text-sm">{bio}</p>
                        <p className="text-xs text-slate-400 mt-1">Preferred: {email}</p>
                    </div>

                    <div className="space-y-3">
                        <button className="w-full py-3 bg-white border border-gray-200 rounded-lg font-bold text-slate-700 hover:bg-gray-50">Snooze 2 Weeks</button>
                        <button className="w-full py-3 bg-white border border-gray-200 rounded-lg font-bold text-slate-700 hover:bg-gray-50">Archive</button>
                        <button className="w-full py-3 bg-white border border-gray-200 rounded-lg font-bold text-red-500 hover:bg-red-50">Delete</button>
                    </div>
                </div>

                <div className="lg:col-span-2 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                        <div className='flex justify-between'>
                            <h2 className='text-xl font-semibold'>Relationship Goal</h2>
                            <button className='btn'>Edit</button>
                        </div>
                        <p>Connect every <span className='font-semibold'>30 days</span></p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                        <h3 className="font-bold text-slate-800 mb-6">Quick Check-In</h3>
                        <div className="grid grid-cols-3 gap-4">
                            <button onClick={() => handleCheckIn('call')} className="flex flex-col items-center gap-2 p-4 rounded-xl border border-gray-100 bg-gray-50 hover:bg-gray-100 transition-all">
                                <img src={callImg} alt="Call" className="w-10 h-10" />
                                <span className="text-sm font-medium text-slate-600">Call</span>
                            </button>
                            <button onClick={() => handleCheckIn('text')} className="flex flex-col items-center gap-2 p-4 rounded-xl border border-gray-100 bg-gray-50 hover:bg-gray-100 transition-all">
                                <img src={textImg} alt="Text" className="w-10 h-10" />
                                <span className="text-sm font-medium text-slate-600">Text</span>
                            </button>
                            <button onClick={() => handleCheckIn('video')} className="flex flex-col items-center gap-2 p-4 rounded-xl border border-gray-100 bg-gray-50 hover:bg-gray-100 transition-all">
                                <img src={videoImg} alt="Video" className="w-10 h-10" />
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