
function User({ name, handle }) {
    return (
        <div className="user">
            <span className="user">
                <span className="name">{name}</span>
                <span className="handle">{handle}</span>
            </span>
        </div>
    )
}

export default User

