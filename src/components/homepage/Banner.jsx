import React from 'react';
import { FaPlus } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className=" py-16 md:py-24">
            <div className="container mx-auto px-4 text-center">
                <div className="max-w-3xl mx-auto">
                    
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1d2d3d] mb-6">
                        Friends to keep close in your life
                    </h1>

                    <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-10 max-w-2xl mx-auto">
                        Your personal shelf of meaningful connections. Browse, tend, and nurture the 
                        relationships that matter most.
                    </p>

                    <button className="btn bg-[#244d3f] text-white border-none px-8 rounded-md normal-case text-base font-medium">
                        <FaPlus className="text-sm mr-2" />
                        Add a Friend
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;