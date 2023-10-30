"use client";
import { FC, useState, useEffect } from "react";
import Box from "@/components/generalComponents/Box/Box";
import Text from "@/components/generalComponents/Text/Text";
import DropdownMenu from "@/components/blocks/DropdownMenu/DropdownMenu";
import ListItems from "@/components/generalComponents/ListItems/ListItems";
import ListElement from "@/components/generalComponents/ListElement/ListElement";
import Carousel from "@/components/blocks/Carousel/Carousel";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
  ApolloQueryResult,
} from "@apollo/client";
import { SwiperSlide } from "swiper/react";
import Card from "@/components/blocks/Card/Card";
import Image from "next/image";

interface ApolloClientData {
  description: string;
  id: string;
  name: string;
  photo: string;
  __typename: string;
}

// async function getData() {
//   const { data } = await new ApolloClient({
//     uri: "https://flyby-router-demo.herokuapp.com/",
//     cache: new InMemoryCache(),
//   }).query({
//     query: gql`
//       query GetLocations {
//         locations {
//           id
//           name
//           description
//           photo
//         }
//       }
//     `,
//   });

//   return data.locations;
// }

const Page2: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<ApolloClientData[]>([]);
  const handleIsOpen = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  useEffect(() => {
    new ApolloClient({
      uri: "https://flyby-router-demo.herokuapp.com/",
      cache: new InMemoryCache(),
    })
      .query({
        query: gql`
          query GetLocations {
            locations {
              id
              name
              description
              photo
            }
          }
        `,
      })
      .then((results) => setData(results.data.locations));
  }, []);

  return (
    <Box
      tag="main"
      hasFlex
      hasFlexCol
      centeredCrossAxes
      classNames="gap-[20px] py-[200px] relative"
    >
      <Box onClick={handleIsOpen}>
        <Text tag="h1" classNames="text-center cursor-pointer">
          Click Me
        </Text>
      </Box>
      <DropdownMenu
        isOpen={isOpen}
        width="w-3/4"
        bgDark
        classNames="text-center top-[0]"
      >
        <ListItems hasFlex classNames="flex-col gap-[20px]">
          <ListElement classNames="border-b pb-3">Ciao</ListElement>
          <ListElement classNames="border-b pb-3">Ciao</ListElement>
          <ListElement classNames="border-b pb-3">Ciao</ListElement>
        </ListItems>
      </DropdownMenu>

      {/* <Carousel data={data} numSlidesShown={1} /> */}
      <Carousel numSlidesShown={2.2} isCentered>
        {data.length > 0 &&
          data?.map((data) => {
            return (
              <SwiperSlide key={"carousel" + data.id}>
                <Card width="w-[400px]" classNames="mb-[50px]">
                  <Image src={data.photo} alt="img" width={400} height={400} />
                  <Card.title isTextCenter>{data.name}</Card.title>
                  <Card.body>
                    <Text>{data.description}</Text>
                  </Card.body>
                </Card>
              </SwiperSlide>
            );
          })}
      </Carousel>
    </Box>
  );
};

export default Page2;
