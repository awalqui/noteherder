import React from 'react'

const Main = () => {
    return (
        <div className="Main">
            <Sidebar />
            <NoteList />
            <NoteForm />
        </div>
    )
}

export default Main