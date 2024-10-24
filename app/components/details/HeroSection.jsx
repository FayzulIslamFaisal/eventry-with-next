import Image from "next/image";
import ActionButtons from "../ActionButtons";

const HeroSection = ({ eventIfo }) => {
  return (
    <section className="container">
      <div className="bg-gradient-to-b from-slate-200/20 to-slate-800/30">
        <Image
          src={
            eventIfo?.imageUrl
              ? eventIfo?.imageUrl
              : "/events/google-io-2023-1.png"
          }
          alt={eventIfo?.name}
          width={3000}
          height={450}
          className="h-[450px] mx-auto"
        />
      </div>

      <div className="flex items-end">
        <div className="flex-auto py-4">
          <h1 className="font-bold text-2xl">{eventIfo?.name}</h1>
          <p className="text-[#9C9C9C] text-base mt-1">{eventIfo?.location}</p>
          <div className="text-[#737373] text-sm mt-1">
            <span>{eventIfo?.interested_ids?.length} Interested</span>
            <span className="px-3">|</span>
            <span>{eventIfo?.going_ids?.length} Going</span>
          </div>
        </div>

        <ActionButtons fromsDetails={true} />
      </div>
    </section>
  );
};

export default HeroSection;
