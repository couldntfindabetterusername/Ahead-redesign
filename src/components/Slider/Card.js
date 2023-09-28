import Image from "next/image";
import UI_Image from "../UI_Image/UI_Image";

const Card = (props) => {
  return (
    <div
      className={`flex flex-col p-6 bg-[${props.bg}] md:w-[340px] w-56 hover:bg-[#6441EF] hover:-rotate-[6deg] hover:text-white duration-300 rounded-xl gap-4 mr-8 flex-shrink-0`}
    >
      <div className="flex text-xl">
        <UI_Image src={props.emoji} width={35} height={35} alt="emoji" />{" "}
      </div>{" "}
      <div className="flex flex-col gap-2">
        <h1 className="text-xl text-[#151515] text-inherit font-semibold">
          {" "}
          {props.heading}{" "}
        </h1>{" "}
        <p className="text-sm text-[#646363] text-inherit font-medium">
          {" "}
          {props.info}{" "}
        </p>{" "}
      </div>{" "}
    </div>
  );
};

export default Card;
