import React, { useState } from 'react'
import { PieChart } from 'react-minimal-pie-chart';
import Playerchart from '../component/Playerchart';

function TeamSelection({players} : any) {
    const [selectedPlayers, setSelectedPlayers] = useState([]);
    const [teamSize, setTeamSize] = useState(2); 
    const [teams, setTeams] = useState([]);
    const [isLoading, setLoader] = useState(false);
    const [showChart, setShowChart] = useState(false);
    const [chartData, setChartData] = useState([]);
    const [error, setError] = useState(false);

    const handleSelectPlayer = (player) => {
        setSelectedPlayers((prev) => [...prev, player]);
    };

    const colorMap: any = {
        'Team 1': '#0891b2',
        'Team 2': '#db2777'
    };

    const prepareChartData = () => {
        const buildChartData:any = [];
        teams.map((team: any, index) => {
            let teamName = 'Team ' + (index + 1);
            let teamLevel = 0;
            team.map((player: any) => {
                teamLevel += parseInt(player.level)
            });
            buildChartData.push({
                title: teamName,
                value: teamLevel,
                color: colorMap[teamName]
            });
        });
        setChartData(buildChartData);
    }
    const handleGenerateTeams = () => {
        setLoader(true);
        setError(false);
        console.log('setTeamSize ', teamSize);
        console.log('Slected ', selectedPlayers.length);
        if (selectedPlayers.length < (teamSize * 2)) {
            setError(true);
        }
        const shuffledPlayers = [...selectedPlayers].sort(() => Math.random() - 0.5);
        const team1 = shuffledPlayers.slice(0, teamSize);
        const team2 = shuffledPlayers.slice(teamSize);
        setTeams([team1, team2]);
        setLoader(false);
        prepareChartData();
        setShowChart(true);
    };
    return (
        <>
            <div className='flex flex-row'>
                <div className='flex flex-col pr-24'>
                    <div className='mb-5 text-left'>
                        <label className="mb-2 text-gray-600">Select the Team Size : </label>
                        <select value={teamSize} onChange={(e) => { setShowChart(false); setTeamSize(parseInt(e.target.value))}} className='border border-gray-300 p-2 w-[200px] rounded mb-'>
                            <option value={2}>2 Vs 2</option>
                            <option value={5}>5 Vs 5</option>
                            <option value={7}>7 Vs 7</option>
                            <option value={11}>11 vs 11</option>
                        </select>
                    </div>
                    <div className='mb-5'>
                        <table className="shadow-lg bg-white">
                            <thead>
                                <tr>
                                    <th className='bg-blue-100 border text-left px-8 py-4'>Selection</th>
                                    <th className='bg-blue-100 border text-left px-8 py-4'>Name</th>
                                    <th className='bg-blue-100 border text-left px-8 py-4'>Position</th>
                                </tr>
                            </thead>
                            <tbody>
                                {players.map((player: any) => (
                                <tr key={player.name} className='hover:bg-gray-50 focus:bg-gray-300'>
                                    <td className='border px-8 py-4'><input type="checkbox" onChange={() => handleSelectPlayer(player)}/></td>
                                    <td className='border px-8 py-4'><span className='ml-2'>{player.name}</span></td>
                                    <td className='border px-8 py-4'><span className='ml-2'>{player.position}</span></td>
                                </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className=''>
                    <div className="mb-5 flex item-col">
                        <div className=''>
                            <button className='rounded-lg px-4 py-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-blue-100 duration-300' onClick={handleGenerateTeams} disabled={isLoading}>Generate Teams</button>
                            {error && (<span className='pl-3 text-red-600'>Please select the required players to generate the teams for size {teamSize}</span>)}
                            {!error && teams.map((team: any, index) => (
                                <div key={index} className='flex item-col mt-10'>
                                    <div className='bg-green-100 rounded-md border-2 text-blue-600'>
                                        <div className='flex item-row'>
                                            <div className='p-4 align-middle'>Team {index + 1}</div>
                                            <div className='p-4 bg-sky-300'>
                                                {team.map((player: any) => (
                                                    <div key={player.name} className='text-red-600'> {player.name} ({player.level}) </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        { chartData && 
                        <div className='mt-10 p-10'>
                            <Playerchart data={chartData}/>
                        </div>
                        }
                    </div>
                </div>
            </div>
            
        </>
    )
}
export default TeamSelection;