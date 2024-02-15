export default function profilepage({ params }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>profile</h1>
      <hr />
      <p className="text-4xl">profile page</p>
      <span className="p-2 rounded ml-2 bg-orange-500 text-black">
        {params.id}
      </span>
    </div>
  );
}
