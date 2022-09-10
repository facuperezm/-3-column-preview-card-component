import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import suvs from "../public/icon-suvs.svg";
import luxury from "../public/icon-luxury.svg";
import sedans from "../public/icon-sedans.svg";

export default function Home() {
  return (
    <div className="total">
      <Head>
        <title>Frontend Mentor | 3-column preview card component</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="main-container">
        <section className="column first">
          <div className="icon">
            <Image className="icon" alt="a" src={sedans} />
          </div>
          <h1 className="container__title">Sedans</h1>
          <p className="container__p">
            Choose a sedan for its affordability and excellent fuel economy.
            Ideal for cruising in the city or on your next road trip.
          </p>
          <button className="btn">Learn More</button>
        </section>
        <section className="column second">
          <div className="icon">
            <Image className="icon" alt="b" src={suvs} />
          </div>

          <h1 className="container__title">SUVs</h1>
          <p className="container__p">
            Take an SUV for its spacious interior, power, and versatility.
            Perfect for your next family vacation and off-road adventures.
          </p>
          <button className="btn">Learn More</button>
        </section>
        <section className="column third">
          <div className="icon">
            <Image className="icon" alt="c" src={luxury} />
          </div>
          <h1 className="container__title">Luxury</h1>
          <p className="container__p">
            Cruise in the best car brands without the bloated prices. Enjoy the
            enhanced comfort of a luxury rental and arrive in style.
          </p>
          <button className="btn">Learn More</button>
        </section>
      </div>
    </div>
  );
}
