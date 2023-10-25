import Box from "@/components/generalComponents/Box/Box";
import Text from "@/components/generalComponents/Text/Text";
import { FC } from "react";

const Page2: FC = () => {
  return (
    <Box tag="main">
      <Box
        tag="article"
        hasMarginAuto
        width="w-3/4"
        hasFlex
        hasFlexCol
        centeredCrossAxes
        classNames="gap-7 py-[70px]"
      >
        <Text tag="h1">Titolo articolo</Text>
        <Text tag="h2" styledAs="h3">
          Sottotitolo
        </Text>
        <Box width="w-3/4">
          <Text tag="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore iste
            tempore, nisi ducimus obcaecati animi ullam sapiente quo. Aspernatur
            sed aut aliquam aliquid sapiente quae nemo cupiditate voluptate
            cumque ex? Ducimus incidunt ad quas maiores, deleniti tempora? Alias
            nobis in, aliquid, eaque at non voluptatibus autem error ipsam
            itaque ratione vitae dolore vel eligendi natus fuga quisquam
            suscipit explicabo doloribus. Consectetur maiores cupiditate et
            fugit est a illum aliquam, atque debitis tempore voluptas rerum
            libero doloremque? Eveniet dolorem aut molestias aperiam eum,
            tempore, neque exercitationem tempora in, facere possimus
            laudantium? Adipisci ipsum soluta sunt alias, quidem est voluptatem
            velit aliquid earum aspernatur nostrum porro quo facere accusantium
            rem dicta fuga sit, voluptatum sed ipsa quis. Non veniam eaque
            nostrum mollitia!
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Page2;
