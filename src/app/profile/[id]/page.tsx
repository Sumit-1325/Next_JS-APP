export default async function UserProfile({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
   // use() unwraps the promise directly in the render logic 
  const { id } = await params;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      {/* 2. Use the unwrapped 'id' */}
      <h1 className="text-4xl font-bold mb-4">User Profile {id}</h1>
      <hr />
      <p className="text-lg mt-4">Welcome to your profile page!</p>
    </div>
  );
}