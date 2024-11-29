import auroraBoreale from "../../public/img/aurora_boreale.jpg";
import dog from "../../public/img/dog.jpg";
import mountain from "../../public/img/mountain.jpg";
import street from "../../public/img/street.jpg";

export const posts = [
  {
    id: 1,
    title: "Titolo del Post",
    image: auroraBoreale,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.",
    tags: ["html", "css"],
    published: true,
  },
  {
    id: 2,
    title: "Titolo del Post",
    image: dog,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.",
    tags: ["js", "css"],
    published: true,
  },
  {
    id: 3,
    title: "Titolo del Post",
    image: mountain,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.",
    tags: ["js", "php"],
    published: true,
  },
  {
    id: 4,
    title: "Titolo del Post",
    image: street,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.",
    tags: ["html"],
    published: false,
  },
];
