import Head from "next/head";
import Image from "next/image";

import bizunoImage from "../../public/assets/bizuno.jpg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Página principal</title>
        <meta name="keywords" content="Roupas, Calcados"></meta>
        <meta
          name="description"
          content="Encontre a melhor roupa para voce"
        ></meta>
      </Head>
      <main>
        <Image
          src={bizunoImage}
          alt="Bizuno"
          style={{
            width: "100%",
            height: "100%",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </main>
    </>
  );
}
