import { createSlice } from "@reduxjs/toolkit"

const fetchedUsers = JSON.parse(localStorage.getItem("users"));
let users = fetchedUsers;
if (!fetchedUsers) {
    users = [];
}
const initialUsersState = { users: users }

const usersSlice = createSlice({
    name: "users",
    initialState: initialUsersState,
    reducers: {
        addUsers(state, action) {
            state.users = action.payload.users
        },
        searchUsers(state, action) {
            const searchTerm = action.payload.searchTerm;
            console.log(searchTerm);
            if (searchTerm == "") {
                state.users = fetchedUsers
            }
            const searchedUsersList = state.users.filter(user => {
                const searchableText = `${user.username} ${user.name} ${user.email}  ${user.address.city} ${user.address.street}`;
                return searchableText.toLowerCase().includes(searchTerm.toLowerCase());
            })
            state.users = [...searchedUsersList]
        }
    }
});

export default usersSlice;
export const usersAction = usersSlice.actions;