import { Link, useNavigation } from "react-router-dom";

export default function User({ user }) {
    // console.log(user);

    let imgSrc = `https://api.dicebear.com/9.x/micah/svg?seed=${user.username}&backgroundColor=fafafa`

    return (
        <div className='col-lg-4 p-3'>
            <div className="card">
                <img src={imgSrc} className="card-img-top" alt={user.username} />

                <div className="card-body">
                    <h3 className="card-title mb-2">{user.name}</h3>
                    <p className="card-text">✉️:- {user.email}</p>
                    <p className="card-text">📞:- {user.phone}</p>
                    <p className="card-text">🏠:- {user.address.city},{user.address.street}</p>
                    <div className='text-center'>
                        <Link className="btn btn-color" to={`/users/${user._id}`}>View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
