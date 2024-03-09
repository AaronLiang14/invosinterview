import { Box } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import iphone from "./iphone.png";

export default function Iphone({ height, width }) {
  return (
    <div className={`relative  w-${width} z-20`}>
      <div
        className={`absolute inset-0 mx-3 my-3 grid grid-rows-3 overflow-hidden rounded-[60px] bg-[#FFF]`}
      >
        <div className="row-span-1 mt-16 flex flex-col justify-center">
          <p className="text-center text-4xl">Upload your image here</p>
          <Icon icon="ph:arrow-down" className="m-auto h-12 w-12 " />
        </div>

        <div className="relative row-span-2">
          <Box position="relative">
            <Icon
              icon="mdi:circle-half"
              className="absolute -left-12 m-0 h-60 w-10/12 rotate-[235deg] text-[#FF6251]
            "
            ></Icon>
            {/* <div className="absolute  h-1 w-72 -rotate-[35deg] bg-[#66c02a]"></div> */}
          </Box>

          <div className="absolute bottom-3 left-3 h-24 w-24 rounded-tr-full bg-theme-secondary "></div>
          <div className="absolute bottom-1 right-2 h-52 w-12 rounded-br-full rounded-tl-full bg-[#36F]"></div>
          <div className="absolute -bottom-3 right-5 h-52 w-16 rotate-[22deg] rounded-t-lg bg-[#36F] "></div>
        </div>
      </div>
      <img src={iphone} alt="iphone" className={` relative w-${width}`} />
    </div>
  );
}
