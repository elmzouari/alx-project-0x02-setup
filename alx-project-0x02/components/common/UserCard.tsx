import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, phone }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-2">
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-gray-700">{email}</p>
      <p className="text-gray-700">{phone}</p>
    </div>
  );
};

export default UserCard;