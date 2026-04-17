import React from 'react';
import Banner from '../../components/homepage/Banner';
import SummaryCards from '../../components/homepage/SummaryCards';
import AllFriends from '../../components/homepage/AllFriends';

const Homepage = () => {
    return (
        <div className='bg-gray-50'>
            <Banner/>
            <SummaryCards/>
            <AllFriends/>
        </div>
    );
};

export default Homepage;