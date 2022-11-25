import React, { useEffect } from 'react'
import {IUserContext, UserContext} from '../contexts/DEMOUserContext'
import { User } from '../models/DEMOUserModel'


const UserList = () => {
    const { users, getAll, deleteUser } = React.useContext(UserContext) as IUserContext

    useEffect(() => {
        getAll()
        
    }, [getAll])

    const removeUser = (id:number) => {
        removeUser(id)
    }

    return (
        <>
            <h3 className="display-6 mb-4">List of Users</h3>
            {
                users.map((user: User) => (<div onClick={() => removeUser(user.id)} key={user.id} className="mb-3"></div>))
            }
        </>
    )
}

export default UserList