import UserCard from "@/components/common/UserCard";
import Header from "@/components/layout/Header";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

interface UsersPageProps {
  users: User[];
}

export default function Users({ users }: UsersPageProps) {
  return (
    <>
      <Header />
      <div className="p-4 space-y-4">
        {users.map((user) => (
          <UserCard
            key={user.id}
            name={user.name}
            email={user.email}
            phone={user.phone}
          />
        ))}
      </div>
    </>
  );
}

// ✅ REQUIRED FOR THE TASK
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();

  return {
    props: {
      users,
    },
  };
}
