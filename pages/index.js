import Hero from "@/components/Hero";
import Location from "@/components/Location";
import Menu from "@/components/Menu";
import Topbar from "@/components/Topbar";
import { createClient } from "contentful";
import Head from "next/head";

export default function Home({ response, items }) {
  return (
    <>
      <Head>
        <title>Cafe Mishkak K2</title>
      </Head>
      <Topbar />

      <main className="h-screen scroll-smooth w-screen snap-mandatory no-scrollbar snap-y overflow-x-hidden">
        <Hero response={response} />
        <Menu response={response} items={items} />
        <Location response={response} />
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const client = createClient({
    space: "j5ufy0b94fci",
    accessToken: "PWYJrn_p_B29Z59zwno700K1kxgcQCix78lSCCjXdmc",
  });

  const response = await (
    await client.getEntry("32QUBMpO0sshrElX0oTX7K")
  ).fields;

  const { items } = await client.getEntries({
    content_type: "recipe",
    order: "sys.createdAt",
  });

  return {
    props: {
      response,
      items,
    }, // will be passed to the page component as props
  };
}
