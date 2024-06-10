import getLeftEllipse from "../assets/images/webp/getTouch/getLeftEllipse.webp"
import getLeftEllipse2 from "../assets/images/webp/getTouch/getLeftEllipse2.webp"
import getRightEllipse from "../assets/images/webp/getTouch/getRightEllipse.webp"
import getRightEllipse2 from "../assets/images/webp/getTouch/getRightEllipse2.webp"

const GetTouch = () => {
  return (
    <div className=" pt-32 mt-3">
      <div className="container max-w-[1140px] px-3 mx-auto">
        <div className="bg-darkYellow px-11 relative rounded-xl py-16">
          <img
            src={getLeftEllipse2}
            alt="left2"
            className="max-w-[154px] max-h-[153px] top-[-10%] sm:hidden block left-[-4%] absolute"
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
          <h2 className="font-plusJkarta font-semibold text-center text-white leading-128 sm:text-4xl text-2xl">
            Get into touch
          </h2>
          <p className="text-center opacity-80 lg:max-w-[639px] max-w-[527px] mt-3 text-white mx-auto font-normal font-plusJkarta sm:text-base text-sm">
            Have questions or ready to get started? Reach out to us today. We're
            here to help you every step of the way on your journey to success.
          </p>
          <div className="flex justify-center">
            <button className="py-3 px-9 mt-7">Enquiry Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetTouch
