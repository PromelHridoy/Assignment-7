import React, { useContext, useEffect, useState } from 'react';
import { FriendContext } from '../../context/FriendContext';

const SummaryCards = () => {

    const [friends, setFriends] = useState([]);
    const { contact } = useContext(FriendContext);

    useEffect(() => {
        fetch("/friendsData.json")
            .then(res => res.json())
            .then(data => setFriends(data));
    }, []);

    const totalFriends = friends.length;

    const onTrack = friends.filter(
        friend => friend.status === "on-track"
    ).length;

    const needAttention = friends.filter(
        friend =>
            friend.status === "overdue" ||
            friend.status === "almost due"
    ).length;

    const totalInteractions = contact.length;

    return (
        <div className="pt-6 bg-gray-50">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 border-b pb-8 border-gray-300">

                <div className="bg-white py-8 px-4 rounded-xl shadow-sm border border-gray-200 flex flex-col items-center justify-center">
                    <h2 className="text-4xl font-bold text-[#1e3a3a] mb-2">
                        {totalFriends}
                    </h2>
                    <p className="text-gray-500 font-medium text-sm">
                        Total Friends
                    </p>
                </div>

                <div className="bg-white py-8 px-4 rounded-xl shadow-sm border border-gray-200 flex flex-col items-center justify-center">
                    <h2 className="text-4xl font-bold text-[#1e3a3a] mb-2">
                        {onTrack}
                    </h2>
                    <p className="text-gray-500 font-medium text-sm">
                        On Track
                    </p>
                </div>

                <div className="bg-white py-8 px-4 rounded-xl shadow-sm border border-gray-200 flex flex-col items-center justify-center">
                    <h2 className="text-4xl font-bold text-[#1e3a3a] mb-2">
                        {needAttention}
                    </h2>
                    <p className="text-gray-500 font-medium text-sm">
                        Need Attention
                    </p>
                </div>

                <div className="bg-white py-8 px-4 rounded-xl shadow-sm border border-gray-200 flex flex-col items-center justify-center">
                    <h2 className="text-4xl font-bold text-[#1e3a3a] mb-2">
                        {totalInteractions}
                    </h2>
                    <p className="text-gray-500 font-medium text-sm">
                        Interactions This Month
                    </p>
                </div>

            </div>
        </div>
    );
};

export default SummaryCards;