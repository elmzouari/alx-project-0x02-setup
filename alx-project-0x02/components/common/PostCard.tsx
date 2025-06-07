import { PostcardProps } from "../../interfaces";

const PostCard: React.FC<PostcardProps> = ({ title, content, userId }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-2">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-700">{content}</p>
    </div>
  );
};

export default PostCard;