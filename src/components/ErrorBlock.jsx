

export default function ErrorBlock({ message }) {
    return (
        <div className="alert alert-danger" role="alert">
            <p className="">{message}</p>
        </div>

    )
}