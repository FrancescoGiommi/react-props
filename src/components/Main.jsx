/* Card import */
import Card from "../Cards/Card";

/* Posts import */
import { posts } from "../Posts/posts";

/* Main export */
export default function Main() {
  /* Filtro post with property true */
  const postFilter = posts.filter((post) => post.published === true);

  /* Create new array with Map */
  const postMap = postFilter.map((post) => post);

  let i = 0;

  /* Function for change color html tag */
  const tagPosts = () => {
    return postMap[0].tags.map((tag) => tag);
  };

  console.log(tagPosts());

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
