import Head from "next/head";
import Image from "next/image";
import Banner from "../comps/Banner";
import Header from "../comps/Header";
import LocCard from "../comps/LocCard";
import LivCard from "../comps/LivCard";
import LargeCard from "../comps/LargeCard";
import Footer  from "../comps/Footer";

import styles from "../styles/Home.module.css";

export default function Home({ items, cards }) {
  return (
    <div>
      <Head>
        <title>Room</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* header */}
      <Header />
     
      {/* banner */}
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16 bg-white xl:bg-neutral-50 pb-14 pt-8 rounded-lg ">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore More</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {items?.map((item) => (
              <LocCard
                key={item.index}
                img={item.img}
                loc={item.location}
                dist={item.distance}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold pb-5">Live Anywhere</h2>
          <div className="flex space-x-4 overflow-scroll scrollbar-hide p-3 ">
            {cards?.map((card) => (
              <LivCard key={card.index} img={card.img} title={card.title} />
            ))}
          </div>
        </section>
        <LargeCard
            img="https://links.papareact.com/4cj"
            title="Things to do on your trip"
            buttonText="Experiences"
          />
      </main>
      <Footer />
    </div>
  );
}
export async function getStaticProps() {
  const items = await fetch("https://links.papareact.com/pyp").then((res) =>
    res.json()
  );
  const cards = await fetch("https://links.papareact.com/zp1").then((res) =>
    res.json()
  );
  return {
    props: {
      items: items,
      cards: cards,
    },
  };
}
