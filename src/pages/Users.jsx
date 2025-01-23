import React, { Suspense, useEffect } from 'react'
import IntroSection from '../components/IntroSection'
import User from '../components/User'
import { fetchUsers } from '../util/http'
import { Await, useLoaderData } from 'react-router-dom'
import ErrorBlock from '../components/ErrorBlock'
import { useDispatch, useSelector } from 'react-redux'
import { usersAction } from '../store/user-slice'

export default function UsersPage() {

    const users = useSelector(state => state.users);
    console.log(users);
    const dispatch = useDispatch();

    useEffect(() => {
        async function userFetch() {
            const resData = await fetchUsers();
            dispatch(usersAction.addUsers({ users: resData }))
        }
        userFetch();
    }, [])

    return (
        <>
            <IntroSection />
            <section className='users'>
                <h3>Users</h3>
                <div className='row'>
                    <Suspense fallback={<p className=''>Loading..........</p>}>
                        <Await resolve={users}>
                            {(users) => {
                                if (users?.length == 0) {
                                    return <p>Fetching users..........</p>
                                }

                                if (!users) {
                                    return <ErrorBlock message="Failed to fetch users data!" />
                                }

                                return users.map(user => <User key={user._id} user={user} />)

                            }}
                        </Await>
                    </Suspense>
                </div>
            </section>
        </>
    )
}




// export async function loader(params) {
//     return {
//         users: fetchUsers()
//     }
// }
