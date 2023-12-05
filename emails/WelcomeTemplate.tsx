import React, { CSSProperties } from "react";
import {
  Html,
  Body,
  Container,
  Tailwind,
  Text,
  Link,
  Preview,
} from "@react-email/components";

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome abroad!</Preview>
      <Tailwind>
        <Body className="bg-white">
          <Container>
            <Text className="font-bold text-3xl">Hello {name}</Text>
            <Link href="https://www.winteriscoming.com">
              www.winteriscoming.com
            </Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};


export default WelcomeTemplate;

/*
   вылетает ошибка Failed to complile 
   ./node_modules/@react-email/render/dist/index.mjs
Attempted import error: 'renderToReadableStream' is not exported from 'react-dom/server' (imported as 'renderToReadableStream').
 на stock-overflow пишут что она возникла между react-email и Next 14 и лучшее решение это использовать другую библиотеку вместо react-email
*/
