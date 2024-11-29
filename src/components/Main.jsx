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
          {posts.map((post) => (
            <Card
              key={postMap.id}
              title={postMap.title}
              image={postMap.image}
              description={postMap.content}
              tags={postMap.tags}
              published={postMap.published}
            />
          ))}
        </div>
      </main>
    </>
  );
}
