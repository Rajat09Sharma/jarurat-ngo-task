const URL = import.meta.env.VITE_BASE_URL;

export async function fetchUsers() {

    const users = JSON.parse(localStorage.getItem("users"))
    if (users) {
        return users;
    }
    const response = await fetch(`${URL}/users`);
    if (!response.ok) {
        // return new Error("Failed to fetch users data!");
        return null;
    }
    const result = await response.json();
    localStorage.setItem("users", JSON.stringify([...result]));
    return result;
}

export async function fetchUserById(id) {
    const response = await fetch(`${URL}/users/${id}`);
    if (!response.ok) {
        return new Error("Failed to fetch users deatils!");
    }
    const result = await response.json();
    // console.log(result.user);
    const user = result.user;
    return user;
}