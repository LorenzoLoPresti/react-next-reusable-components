"use client";
import Jumbotron from "@/components/blocks/Jumbotron/Jumbotron";
import Navbar from "@/components/blocks/Navbar/Navbar";
import Header from "@/components/layouts/Header";
import Main from "@/components/layouts/Main";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  const handleCountChange = () => {
    setCount((c) => c + 1);
  };

  const handleResetCount = () => {
    setCount(0);
  };

  return (
    <>
      <Header>
        <Navbar handleCountChange={handleCountChange} />
      </Header>
      <Main>
        <Jumbotron count={count} resetCount={handleResetCount} />
      </Main>
    </>
  );
}
