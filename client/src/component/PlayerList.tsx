import React from "react";

const PlayerList = ({ players, onDelete, onEdit, onAdd }: any) => {
    const renderHeader = () => {
        let headerElement = ['id', 'name', 'email', 'phone', 'postion', 'level', 'actions']
    
        return headerElement.map((key, index) => {
          return <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider' key={index}>{key.toUpperCase()}</th>
        })
    }
    
    // Color codes for the skills
    const getColorMap =  (strength) => {
        if (strength > 3 && strength <= 6) {
            return '#facc15';
        } else if (strength > 6) {
            return '#4ade80';
        }
        return '#f87171';
    }
    const renderBody = (data) => {
        return (
            data &&
            data.map(({ id, name, email, phone, position, level }) => {
            return (
                <tr key={id}>
                    <td className='px-3 py-2 border-b border-gray-200 bg-white text-sm'>{id}</td>
                    <td className='px-3 py-2 border-b border-gray-200 bg-white text-sm' style={{ color: getColorMap(level) }}>{name}</td>
                    <td className='px-3 py-2 border-b border-gray-200 bg-white text-sm'>{email}</td>
                    <td className='px-3 py-2 border-b border-gray-200 bg-white text-sm'>{phone}</td>
                    <td className='px-3 py-2 border-b border-gray-200 bg-white text-sm'>{position}</td>
                    <td className='px-3 py-2 border-b border-gray-200 bg-white text-sm'>{level}</td>
                    <td className="px-3 py-2 border-b border-gray-200 bg-white text-sm">
                        <button className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={() => onDelete(id)}>
                        Delete
                        </button>
                        <button className="text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={() => onEdit(id)}>
                        Edit
                        </button>
                    </td>
                </tr>
            )
            })
        )
    }
  return (
    <div>
      <div className='container mx-auto py-5 sm:px-8'>
        <div className="flex">
            <div className="flex-col">Player List</div>
            <div className="mx-10"><button className='text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 rounded-lg text-sm px-5 py-2 text-center' onClick={onAdd}>Add New Player</button></div>
        </div>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
                <table id="players-table" className='min-w-full leading-normal'>
                    <thead>
                    <tr>{renderHeader()}</tr>
                    </thead>
                    <tbody>{renderBody(players)}</tbody>
                    {players.length === 0 && (
                        <tr><td colSpan={7} className="text-red-400">Please add player information</td></tr>
                    )}
                </table>
            </div>
        </div>
      </div>
      
    </div>
  );
};

export default PlayerList;