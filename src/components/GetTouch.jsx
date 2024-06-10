import getLeftEllipse from "../assets/images/webp/getTouch/getLeftEllipse.webp"
import getLeftEllipse2 from "../assets/images/webp/getTouch/getLeftEllipse2.webp"
import getRightEllipse from "../assets/images/webp/getTouch/getRightEllipse.webp"
import getRightEllipse2 from "../assets/images/webp/getTouch/getRightEllipse2.webp"

const GetTouch = () => {
  return (
    <div className=" lg:translate-y-[156px] overflow-hidden sm:translate-y-[166px] lg:-mt-4 sm:mt-[-74px] -mt-24 translate-y-[172px]">
      <div className="container max-w-[1140px] lg:px-3 sm:px-[60px] px-5 mx-auto">
        <div className="bg-darkYellow px-[35px] relative rounded-xl sm:py-16 py-[50px]">
          <img
            src={getLeftEllipse2}
            alt="left2"
            className="max-w-[154px] max-h-[153px] top-[-8%] sm:hidden block left-[-10%] absolute"
          />
          <img
            src={getRightEllipse2}
            alt="right2"
            className="max-w-[154px] max-h-[153px] bottom-[-8%] sm:hidden block right-[-4%] absolute"
          />
          <img
            src={getLeftEllipse}
            alt="left"
            className="absolute lg:left-[-8%] left-[-2%] lg:bottom-[-28%] bottom-[-14%] lg:max-w-[429px] sm:max-w-[290px] sm:block hidden sm:max-h-[289px] lg:max-h-[428px]"
          />
          <img
            src={getRightEllipse}
            alt="right"
            className="absolute lg:right-[-8%] right-[-2%] lg:top-[-28%] sm:block hidden top-[-14%] lg:max-w-[429px] max-w-[290px] max-h-[289px] lg:max-h-[428px]"
          />
          <h2 className="font-plusJkarta lg:pt-[2px] font-semibold text-center text-white leading-128 sm:text-4xl text-2xl">
            Get into touch
          </h2>
          <p className="text-center opacity-80 lg:max-w-[639px] max-w-[527px] mt-4 text-white mx-auto font-normal font-plusJkarta sm:text-base text-sm">
            Have questions or ready to get started? Reach out to us today. We're
            here to help you every step of the way on your journey to success.
          </p>
          <div className="flex sm:mt-[27px] lg:mb-[2px] mt-[30px] justify-center">
            <button className=" bg-[url(./assets/images/png/getBtn.png)] bg-full bg-center text-darkYellow hover:text-black duration-300 flex mx-auto bg-no-repeat font-semibold text-base font-plusJkarta leading-md p-[13.5px_44px]  border-0">
              Enquiry Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetTouch
