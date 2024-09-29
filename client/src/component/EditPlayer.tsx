import React, { useState } from "react";

const EditPlayer = ({ player, editPlayer, onCancel }: any) => {
  const [name, setName] = useState(player.name);
  const [email, setEmail] = useState(player.email);
  const [phone, setPhone] = useState(player.phone);
  const [position, setPosition] = useState(player.position);
  const [level, setLevel] = useState(player.level);
  const [errorMessage, setErrorMessage] = useState('');

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePhoneChange = (e) => setPhone(e.target.value);
  const handlePositionChange = (e) => setPosition(e.target.value);
  
  const handleLevelChange = (e) => {
    const value = e.target.value;
    setLevel(value);
    if (value < 1 || value > 10) {
        setErrorMessage('Skill level must be between 1 and 10.');
    } else {
        setErrorMessage('');
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedPlayer = {
      id: player.id,
      name,
      email,
      phone,
      position,
      level
    };
    console.log('updatedPlayer ', updatedPlayer);
    editPlayer(updatedPlayer);
  };

  return (
    <>
    <div className="bg-blue-200 min-h-screen flex items-center py-5">
        <div className="w-full">
            <h2 className="text-center text-blue-400 font-bold text-2xl uppercase mb-10">Edit Player Details</h2>
            <div className="bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
                <form onSubmit={handleSubmit}>
                    <div className="mb-5">
                        <label className="block mb-2 font-bold text-gray-600">Name</label>
                        <input type="text" value={name} onChange={handleNameChange} placeholder="Enter the player name" className="border border-red-300 shadow p-3 w-full rounded mb-" />
                        <p className="text-sm text-red-400 mt-2">Player name is required</p>
                    </div>
                    <div className="mb-5">
                        <label className="block mb-2 font-bold text-gray-600">Email</label>
                        <input type="text" value={email} onChange={handleEmailChange} placeholder="Email id" className="border border-grey-300 shadow p-3 w-full rounded mb-" />
                    </div>
                    <div className="mb-5">
                        <label className="block mb-2 font-bold text-gray-600">Phone</label>
                        <input type="number" value={phone} onChange={handlePhoneChange} placeholder="Phone number" className="border border-grey-300 shadow p-3 w-full rounded mb-" />
                    </div>
                    <div className="mb-5">
                        <label className="block mb-2 font-bold text-gray-600">Position</label>
                        <select value={position} 
                                onChange={handlePositionChange} className="border border-gray-300 shadow p-3 w-full rounded mb-">
                            <option value="ATTACK">ATTACK</option>
                            <option value="MID">MID</option>
                            <option value="DEF">DEF</option>
                            <option value="GK">GK</option>
                        </select>
                    </div>
                    <div className="mb-5">
                        <label className="block mb-2 font-bold text-gray-600">Level</label>
                        <input type="number" value={level} onChange={handleLevelChange} placeholder="Skill Level" className="border border-grey-300 shadow p-3 w-full rounded mb-" />
                        {errorMessage && <p className="text-red-400">{errorMessage}</p>}
                    </div>
                    <div className="flex space-x-2 space-y-2 flex-wrap justify-center items-baseline">
                        <button className='rounded-lg px-4 py-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-blue-100 duration-300' type="submit">Save</button>
                        <button className='rounded-lg px-4 py-2 border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-yellow-100 duration-300' onClick={onCancel}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </>
  );
};

export default EditPlayer;