import React, { useContext, useState } from 'react';
import { FriendContext } from '../../context/FriendContext';
import { FaVideo, FaComment, FaPhoneAlt, FaSearch } from 'react-icons/fa';

const Timeline = () => {
    const { contact } = useContext(FriendContext);

    console.log(contact, "contact");
    
    

    const [selectedType, setSelectedType] = useState('all');
    // const [search, setSearch] = useState('');


    const filteredContacts = contact.filter(item => {
    const matchType =
        selectedType === 'all' ||
        item.type.toLowerCase() === selectedType.toLowerCase();

    // const matchSearch =
    //     item.name.toLowerCase().includes(search.toLowerCase());

    // return matchType && matchSearch;
    return matchType;
});

console.log(filteredContacts);


    return (
        <div className='container mx-auto my-10 px-4 max-w-5xl'>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <h1 className="text-3xl font-bold text-gray-800">Timeline </h1>
                
                <div className="flex flex-col items-end w-full md:w-auto">
                    <div className="flex items-center gap-2 mb-2 text-indigo-900 font-semibold text-sm">
                        <FaSearch className="text-blue-500" />
                        <span>Search by name</span>
                    </div>
                    <input 
                        type="text" 
                        placeholder="Type a name..." 
                        // value={search}
                        // onChange={(e) => setSearch(e.target.value)}
                        className="border border-gray-300 rounded-lg p-2 w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
                    />
                </div>
            </div>


           <div className="dropdown dropdown-start">
           <div tabIndex={0} role="button" className="btn m-1">Filter timeline: {filteredContacts.length || 0} ({selectedType}) ⬇️</div>
            <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
             <li onClick={() => setSelectedType("all")}><a>All</a></li>
            <li onClick={() => setSelectedType("call")}><a>Call</a></li>
            <li onClick={() => setSelectedType("video")}><a>video</a></li>
            <li onClick={() => setSelectedType("text")}><a>Text</a></li>
            </ul>
          </div>

            <div className="flex flex-col gap-4">
                {filteredContacts.length > 0 ? (
                    filteredContacts.map((item, ind) => (
                        
                        
                        <div 
                            key={ind} 
                            className="flex items-center p-5 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md "
                        >
                            {/* Icon Logic based on type */}
                            <div className={`w-12 h-12 flex items-center justify-center rounded-xl mr-5 shrink-0 ${
                                item.type === 'video' ? 'bg-yellow-100 text-yellow-600' :
                                item.type === 'chat' ? 'bg-yellow-50 text-yellow-500' : 'bg-rose-50 text-rose-400'
                            }`}>
                                {item.type === 'video' && <FaVideo size={20} />}
                                {item.type === 'text' && <FaComment size={20} />}
                                {item.type === 'call' && <FaPhoneAlt size={18} />}
                            </div>

                            <div className="flex-row">
                                <h3 className="text-gray-800 font-bold text-lg">
                                    {item.type} with <span className="text-gray-500 font-medium ml-1">{item.name}</span>
                                </h3>
                                <p className="text-gray-400 text-sm font-medium mt-0.5">
                                    {item.time}
                                </p>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="flex items-center justify-center h-[25vh] py-10 bg-gray-50 rounded-xl border-2 border-dashed">
                        <h2 className='text-3xl font-bold text-gray-600'>No timeline data found.</h2>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Timeline;