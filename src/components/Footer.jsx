import footerLogo from "../assets/images/footerLogo.svg"
import { footerLinks, footerSocialIcons } from "./common/Helper";

const Footer = () => {
  return (
    <div className=" sm:pt-60 pt-56 mt-2 lg:mt-[2px] sm:mt-1 lightSkyBlue">
      <div className="container lg:px-3 px-4 mx-auto pt-[2px] max-w-[1140px]">
        <div className="flex flex-wrap flex-row -mx-3">
          <div className="lg:w-4/12 w-full lg:pb-0 sm:pb-[43px] pb-[25px] px-3">
            <div className="flex lg:justify-start sm:justify-center justify-start ">
              <a href="#">
                <img src={footerLogo} alt="logo" />
              </a>
            </div>
            <p className="pt-3 text-offBlack opacity-70 lg:max-w-[340px] lg:text-start sm:text-center sm:max-w-[488px] max-w-[335px] lg:mx-0 sm:mx-auto sm:text-base text-sm font-normal font-plusJkarta">
              Transforming Devotion: Crafting a Divine Space that Embodies
              Spirituality, Elegance, and Contemporary Style with Grace
            </p>
          </div>
          <div className="lg:w-8/12 w-full px-3">
            <div className="flex flex-wrap flex-row -mx-3">
              <div className="sm:w-4/12 w-1/2 px-3">
                <div className="flex lg:justify-center sm:justify-center">
                  <ul>
                    <li className=" text-offBlack lg:text-start sm:text-center text-start font-plusJkarta font-medium sm:text-lg text-sm">
                      Quick links
                    </li>
                    {footerLinks.column1.map((obj, i) => (
                      <li
                        key={i}
                        className="pt-4 lg:text-start sm:text-center text-start"
                      >
                        <a
                          href=""
                          className="text-offBlack footerLinkHover sm:text-base text-sm font-normal  font-plusJkarta opacity-70"
                        >
                          {obj.link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="sm:w-4/12 w-1/2 px-3">
                <div className="flex lg:justify-end sm:justify-center">
                  <ul>
                    <li className=" text-offBlack font-plusJkarta lg:text-start sm:text-center text-start font-medium sm:text-lg text-base">
                      Legal
                    </li>
                    {footerLinks.column2.map((obj, i) => (
                      <li
                        key={i}
                        className="pt-4 lg:text-start sm:text-center text-start"
                      >
                        <a
                          href=""
                          className="text-offBlack footerLinkHover lg:text-start sm:text-center text-start sm:text-base text-sm font-normal  font-plusJkarta opacity-70"
                        >
                          {obj.link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="sm:w-4/12 w-full sm:pt-0 sm:pb-0 pb-1 pt-[30px] px-3">
                <div className="flex lg:justify-end">
                  <ul>
                    <li className=" text-offBlack pb-5 font-plusJkarta font-medium sm:text-lg text-base">
                      Join our community
                    </li>
                    <li className="flex gap-3">
                      {footerSocialIcons.map((obj, i) => (
                        <a
                          target="blank"
                          rel="noopener noreferrer"
                          key={i}
                          href={obj.path}
                          className="w-[32px] border group hover:bg-darkYellow duration-300 flex border-darkYellow  justify-center items-center h-[32px] rounded-full"
                        >
                          {obj.icon}
                        </a>
                      ))}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:mt-10 sm:mt-[43px] mt-14  h-[1px] bg-footerLineGradient"></div>
      <p className=" font-plusJkarta font-normal sm:text-sm text-xs text-offBlack py-5 opacity-80 text-center">
        Copyright © {new Date().getFullYear()} TilakStone. All Rights reserved.
      </p>
    </div>
  );
}

export default Footer
