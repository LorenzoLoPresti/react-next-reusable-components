import Box from "@/components/generalComponents/Box/Box";
import { FC, PropsWithChildren } from "react";
import Card from "../Card/Card";
import Image from "next/image";
import Text from "@/components/generalComponents/Text/Text";

const BlogArticle: FC<PropsWithChildren> = () => {
  return (
    <Box
      tag="article"
      hasMarginAuto
      hasFlex
      width="w-3/4"
      hasFlexCol
      centeredCrossAxes
      classNames="gap-7 py-[70px]"
    >
      <Text tag="h1">Titolo articolo</Text>
      <Text tag="h2" styledAs="h3">
        Sottotitolo
      </Text>
      <Text>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente nulla
        consequuntur, accusantium facilis possimus, hic impedit consequatur,
        doloremque est voluptatibus tempora? Ipsa debitis tempora vero facere,
        dolorum fugiat itaque obcaecati? Sed, aliquam facere distinctio, aperiam
        cumque exercitationem in ab nesciunt enim maxime repellat molestias?
        Quod minus eius voluptatem veniam a, illum dicta consectetur earum quo
        nulla iste culpa reiciendis quisquam. Delectus illo sapiente, incidunt
        necessitatibus optio aliquid odit sunt rem assumenda pariatur deleniti,
        atque excepturi! Eaque necessitatibus est illo officiis vero blanditiis
        nisi natus distinctio aliquid sunt aspernatur, excepturi sequi. Quae,
        commodi distinctio? Architecto temporibus, nulla sit aut cum voluptates
        alias aperiam ratione tenetur labore neque ipsa earum atque sequi quod
        sapiente, illum officia quam. Iste, voluptates? At, laudantium. A.
      </Text>
    </Box>
  );
};

export default BlogArticle;
