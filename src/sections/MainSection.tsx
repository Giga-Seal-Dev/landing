import marcus from "../assets/marcus.png";
import Button from "../components/Button";

export default function MainSection() {
  return (
    <section className=" text-white mt-9 bg-neutral-500 px-12 flex justify-center mb-8">
      <div className="flex flex-col md:flex-row md:container min-mobile:px-10 items-center self-center justify-between md:h-screen min-mobile:py-32">
        <div className="flex flex-col w-full md:w-1/2 ">
          <h1 className="text-7xl font-bold">Знание - Сила</h1>
          <h2 className="text-3xl mb-7 italic">«Scientia potentia est»</h2>
          <p className="text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
            corrupti, ea tempore esse eligendi quos iusto delectus officia
            magnam odio saepe at, nam nobis in laudantium sed vitae natus
            adipisci?
          </p>
          <Button children="hello" type="colorful" />
        </div>
        <div className="flex flex-col gap-10 z-20 w-full justify-center items-center md:w-1/2">
          <div className="">
            <img
              src={marcus}
              alt=""
              className="h-auto max-w-full z-10 relative"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
