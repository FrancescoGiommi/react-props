import Card from "../Cards/Card";
import { posts } from "../Posts/posts";

/* Main export */
export default function Main() {
  const postFilter = posts.filter((post) => post.published === true);
  const postMap = postFilter.map((post) => post);
  return (
    <>
      <main>
        <div className="container d-flex gap-3 flex-wrap justify-content-center ">
          {postMap.map((post) => (
            <Card
              key={post.id}
              title={post.title}
              image={post.image}
              description={post.content}
              tags={post.tags}
              published={post.published}
            />
          ))}
        </div>
      </main>
    </>
  );
}
