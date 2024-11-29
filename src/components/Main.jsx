/* Card import */
import Card from "../Cards/Card";

/* Posts import */
import { posts } from "../Posts/posts";

/* Main export */
export default function Main() {
  /* Filtro post with property true */
  const postFilter = posts.filter((post) => post.published === true);

  /* Crete new array with Map */
  const postMap = postFilter.map((post) => post);
  console.log(postMap[0].tags);

  /* Function for change color html tag */
  function htmlTagColor(color) {
    {
    }
  }
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
