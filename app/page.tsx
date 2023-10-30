"use client";
import Jumbotron from "@/components/blocks/Jumbotron/Jumbotron";
import Navbar from "@/components/blocks/Navbar/Navbar";
import Box from "@/components/generalComponents/Box/Box";
import Button from "@/components/generalComponents/Button/Button";
import Header from "@/components/layouts/Header";
import Main from "@/components/layouts/Main";
import { useState, useEffect } from "react";
// import img from "../public/spaceplaceholder.jpg";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
  ApolloQueryResult,
} from "@apollo/client";
import Text from "@/components/generalComponents/Text/Text";
import Card from "@/components/blocks/Card/Card";
import Image from "next/image";

interface ApolloClientData {
  description: string;
  id: string;
  name: string;
  photo: string;
  __typename: string;
}

export default function Home() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState<ApolloClientData[]>([]);

  const handleCountChange = () => {
    if (data.length && count < data.length) setCount((c) => c + 1);
  };

  const handleCountDrop = () => {
    if (data.length && count > 0) setCount((c) => c - 1);
  };

  const handleResetCount = () => {
    setCount(0);
  };

  useEffect(() => {
    const client = new ApolloClient({
      uri: "https://flyby-router-demo.herokuapp.com/",
      cache: new InMemoryCache(),
    });

    client
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
      .then((results) => {
        console.log(results.data.locations);
        setData(results.data.locations);
      });
  }, []);

  return (
    <>
      {/* <Header>
        <Navbar handleCountChange={handleCountChange} />
      </Header> */}
      <Main>
        <Jumbotron count={count} resetCount={handleResetCount} />
        <Box
          bgDark
          tag="section"
          hasMarginAuto
          width="w-3/4"
          hasFlex
          centeredMainAxes
          classNames="py-[20px] gap-[20px]"
        >
          <Button
            handleOnClick={handleCountChange}
            isRounded
            hasSimpleBorder
            bgWhite
            classNames="w-[130px]"
          >
            Add 1 slide
          </Button>
          <Button
            handleOnClick={handleCountDrop}
            isRounded
            hasSimpleBorder
            bgWhite
            classNames="w-[130px]"
          >
            Remove 1 slide
          </Button>
        </Box>
        <Box
          tag="section"
          width="w-3/4"
          hasMarginAuto
          classNames="grid grid-cols-3 gap-[20px] py-[30px]"
        >
          {data.length > 0 &&
            data?.map(
              (e, i) =>
                i < count && (
                  <Card key={e.id} hasFlex hasFlexCol classNames="gap-[20px]">
                    <Image src={e.photo} alt="alt" width={400} height={400} />
                    <Card.title isTextCenter>{e.name}</Card.title>
                    <Card.body>
                      <Text>{e.description}</Text>
                    </Card.body>
                  </Card>
                )
            )}
        </Box>
      </Main>
    </>
  );
}
