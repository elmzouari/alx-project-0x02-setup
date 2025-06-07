import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface PostsPageProps {
  posts: Post[];
}

export default function Posts({ posts }: PostsPageProps) {
  return (
    <>
      <Header />
      <section className="p-4 space-y-4">
        <h3 className="text-xl font-semibold">Welcome to Posts</h3>
        {posts.map((post) => (
          <PostCard
            key={post.id}
            title={post.title}
            content={post.body}
            userId={post.userId.toString()}
          />
        ))}
      </section>
    </>
  );
}

// ✅ THIS IS REQUIRED
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
  const posts: Post[] = await res.json();

  return {
    props: {
      posts,
    },
  };
}
