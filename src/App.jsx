
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"
import RootLayout from "./pages/RootLayout"
import UsersPage from "./pages/Users"
import UserDetailPage, { userDetailloader } from "./pages/UserDetail"
import NewUserPage from "./pages/NewUser"
import { action } from "./components/Header"

const router = createBrowserRouter([
  // { path: "/", element: <Navigate to="/users" /> },
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <UsersPage />, action: action },
      { path: ":userId", element: <UserDetailPage />, loader: userDetailloader },
    ]
  }
])


function App() {
  return (
    <RouterProvider router={router}>
    </RouterProvider>
  )
}

export default App
