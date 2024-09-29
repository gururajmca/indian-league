import React from 'react'
import TeamSelection from './TeamSelection'
import { useAPi } from '../hooks/useAPi';
import Spinner from '../component/Spinner';

const Game = () => {
    const { isLoading, error, data} = useAPi();
    console.log(data);
    return (
        <>
            <div className='container mx-auto py-5 sm:px-8'>
                {isLoading && <Spinner/>}
                {!isLoading && <TeamSelection players={data}/>}
            </div>
        </>
    )
}

export default Game
