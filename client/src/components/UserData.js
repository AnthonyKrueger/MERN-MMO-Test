export default function UserData({userData}) {
    return (
        <div className="bg-teal-dark h-full content-center flex flex-wrap space-y-2 shadow-md rounded px-8 pt-6 pb-4 mb-2 mx-5 lg:mx-20">
            <h2 className="text-xl text-white font-semibold">Account Info</h2>
            <div className="pl-2 container space-y-3 py-3 rounded bg-teal">
                <p>Email: {userData.email}</p>
                <p>UserID: {userData._id}</p>
            </div>
        </div>
    )
}