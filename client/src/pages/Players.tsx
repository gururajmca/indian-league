import React, { useState } from 'react'
import { useAPi } from '../hooks/useAPi'
import PlayerList from '../component/PlayerList'
import DeletePlayer from '../component/DeletePlayer'
import EditPlayer from '../component/EditPlayer'
import AddPlayer from '../component/AddPlayer'
import Spinner from '../component/Spinner'

const Players = () => {
    const { isLoading, error, data, removeData, addData, editData } = useAPi();

    const [currentPlayer, setCurrentPlayer] = useState(null);
    const [showEditPlayer, setShowEditPlayer] = useState(false);
    const [showAddPlayer, setShowAddPlayer] = useState(false);
    const [showDeletePlayer, setShowDeletePlayer] = useState(false);
    const [playerToDelete, setPlayerToDelete] = useState(null);

    const handleDelete = (id) => {
        setPlayerToDelete(id);
        setShowDeletePlayer(true);
    };

    const deletePlayer = (id) => {
        removeData(id);
        setShowDeletePlayer(false);
    };

    const handleCancelDelete = () => {
        setShowDeletePlayer(false);
    };

    const handleEdit = (id) => {
        const player = data.find((player) => player.id === id);
        setCurrentPlayer(player);
        setShowEditPlayer(true);
    };

    const editPlayer = (updatedPlayer) => {
        editData(updatedPlayer);
        setCurrentPlayer(null);
        setShowEditPlayer(false);
    };

    const handleCancelEdit = () => {
        setCurrentPlayer(null);
        setShowEditPlayer(false);
    };

    const handleAddPlayer = () => {
        setShowAddPlayer(true);
    };

    const addPlayer = (player) => {
        addData(player);
        setShowAddPlayer(false);
    };

    const handleCancelAdd = () => {
        setShowAddPlayer(false);
    };
    return (
        <>
        {isLoading ? (<Spinner/>) : showDeletePlayer ? (
            <DeletePlayer
            player={data.find((player) => player.id === playerToDelete)}
            deletePlayer={deletePlayer}
            onCancel={handleCancelDelete}
            />
        ) : showEditPlayer ? (
            <EditPlayer
            player={currentPlayer}
            editPlayer={editPlayer}
            onCancel={handleCancelEdit}
            />
        ) : showAddPlayer ? (
            <AddPlayer addPlayer={addPlayer} onCancel={handleCancelAdd} />
        ) : (
            <PlayerList
            players={data}
            onDelete={handleDelete}
            onEdit={handleEdit}
            onAdd={handleAddPlayer}
            />
        )}
        </>
    )
}
export default Players
