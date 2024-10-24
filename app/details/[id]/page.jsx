import EventDetails from "@/app/components/details/EventDetails";
import EventVenue from "@/app/components/details/EventVenue";
import HeroSection from "@/app/components/details/HeroSection";
import { getEventById } from "@/app/db/queries";
import Image from "next/image";

const DetailsPage = async ({ params: { id } }) => {
  const eventIfo = await getEventById(id);

  return (
    <>
      <HeroSection eventIfo={eventIfo} />
      <section className="container">
        <div className="grid grid-cols-5 gap-12 my-12">
          <EventDetails swags={eventIfo?.swags} details={eventIfo?.details} />
          <EventVenue location={eventIfo?.location} />
        </div>
      </section>
    </>
  );
};

export default DetailsPage;
