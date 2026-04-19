import React, { useContext } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { FriendContext } from '../../context/FriendContext';





const Stats = () => {
    const COLORS = ["#8B5CF6", "#065F46", "#22C55E"];
    const { contact } = useContext(FriendContext);

const data = [
  {
    name: "Text",
    value: contact.filter(c => c.type === "text").length
  },
  {
    name: "Call",
    value: contact.filter(c => c.type === "call").length
  },
  {
    name: "Video",
    value: contact.filter(c => c.type === "video").length
  },
];

    return (
        <div className='container mx-auto my-6'>
            <h2 className='text-2xl text-center md:text-left md:text-4xl font-bold md:mt-6 '>Friendship Analytics</h2>
            <div className='my-6 border-gray-400 border-2 rounded-2xl p-4'>
                <h2 className='text-center text-2xl font-bold text-gray-500'>Total activities recorded: {contact.length}</h2>
                <div className="flex justify-center items-center">
      <PieChart width={300} height={300}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={70}
          outerRadius={100}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>

        <Tooltip />
        <Legend />
      </PieChart>
    </div>
            </div>
        </div>
    );
};

export default Stats;