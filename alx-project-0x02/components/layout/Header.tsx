import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white py-4 px-8 flex justify-between items-center">
        <Link href="/" className="text-white"><h1 className="text-2xl font-bold">Alx Listing App</h1> </Link>
      <nav className="flex gap-4">
        <Link href="/home" className="text-white">Home</Link>
        <Link href="/about" className="text-white">About</Link>
        <Link href="/posts" className="text-white">Posts</Link>
        <Link href="/users" className="text-white">Users</Link>
      </nav>
    </header>
  );
};

export default Header;