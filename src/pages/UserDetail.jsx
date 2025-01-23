import { Await, useLoaderData } from "react-router-dom";
import { fetchUserById } from "../util/http"
import { Suspense } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility";
import ErrorBlock from "../components/ErrorBlock";


export default function UserDetailPage() {
  const { user } = useLoaderData();

  const position = [51.505, -0.09]
  let imgSrc = `https://api.dicebear.com/9.x/micah/svg?seed=${user.username}&backgroundColor=fafafa`;

  return (
    <div className="user-deatils padding">
      <h2>User Details</h2>
      <Suspense fallback={<p>Loading.........</p>}>
        <Await resolve={user}>
          {(user) => {
            if (user.message) {
              return <ErrorBlock message={user.message} />
            }

            return <>
              <div className="card mt-5 mx-auto">
                <div className="row ">
                  <div className="col-lg-4">
                    <img src={imgSrc} className="card-img-top" alt={user.username} />
                  </div>
                  <div className="col-lg-8">
                    <div className="card-body">
                      <h3 className="card-title mb-2">{user.name}</h3>
                      <p className="card-text">✉️:- {user.email}</p>
                      <p className="card-text">📞:- {user.phone}</p>
                      <p className="card-text">🏠:- {user.address.city},{user.address.street}</p>
                      <p className="card-text">
                        🏭:- {user.company.name}<br />
                        {user.company.bs}<br />
                        {user.company.catchPhrase}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 mt-5 mx-auto">
                <MapContainer center={position} zoom={10} scrollWheelZoom={true}>
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={position}>
                    <Popup>
                      {user.name}<br /> {user.address.city}.
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
            </>
          }}
        </Await>
      </Suspense>
    </div>
  )
}


export async function userDetailloader({ params }) {
  const { userId } = params;
  console.log(userId);
  return {
    user: fetchUserById(userId)
  }
} 