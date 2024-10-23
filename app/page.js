import Image from "next/image";
import Header from "./components/home/Header";
import EventList from "./components/home/EventList";

export default function Home() {
  return (
    <section className="container">
      <Header />
      <EventList/>
    </section>
  );
}
