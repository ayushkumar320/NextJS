export default function UserProfile({params}: any) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Profile</h1>
      <hr />
      <p className="text-3xl">Profile Page</p>
      <span className="p-2 rounded bg-orange-600 ml-2"> {params.id}</span>
    </div>
  );
}
