import React, { useEffect, useState } from 'react';
import FriendCard from '../ui/FriendCard';


const AllFriends = () => {
    const [friends, setFriends] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/friendsData.json")
            .then(res => res.json())
            .then(data => {
                setFriends(data);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-[40vh]">
                <span className="loading loading-spinner loading-lg text-success"></span>
            </div>
        );
    }
    

    return (
        <div className='my-10 container mx-auto'>
            <h2 className='my-5 text-xl font-bold'>Your Friends</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                {friends.map((friend) => {
                    return <FriendCard key={friend.id} friend={friend}/>
                })}
            </div>
        </div>
    );
    
};

export default AllFriends;