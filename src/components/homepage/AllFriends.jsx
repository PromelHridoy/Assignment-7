import React, { use } from 'react';
import FriendCard from '../ui/FriendCard';

const friendsPromise = fetch("/friendsData.json").then((res) => res.json());

const AllFriends = () => {

    const friends = use(friendsPromise);
    console.log(friends, "friends");
    

    return (
        <div className='my-10 container mx-auto'>
            <h2 className='my-5 text-xl font-bold'>Your Friends</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                {friends.map((friend, ind) => {
                    return <FriendCard key={ind} friend={friend}/>
                })}
            </div>
        </div>
    );
};

export default AllFriends;