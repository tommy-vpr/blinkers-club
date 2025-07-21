import Image from "next/image";
import React from "react";
import ProductHero from "./ProductHero";
import { IconMicroscope } from "@tabler/icons-react";
import { ProductSlider } from "./ProductSlider";

const Hero = () => {
  return (
    <div className="w-full absolute z-30">
      <div className="max-w-[1100px] h-[400px] bg-gray-200 rounded-xl m-auto mt-8 relative overflow-hidden">
        <Image
          src="/images/hero-wp.webp"
          alt="hero"
          fill
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="max-w-[1100px] m-auto py-12 flex items-center gap-8  justify-center">
        <div className="text-gray-200 flex flex-col gap-4 items-center justify-center p-6 rounded-xl bg-black/30 backdrop-blur-md border border-white/10 shadow-lg">
          <IconMicroscope size={36} />
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, sunt
            debitis sint illo rerum architecto libero eos
          </p>
        </div>
        <div className="text-gray-200 flex flex-col gap-4 items-center justify-center p-6 rounded-xl bg-black/30 backdrop-blur-md border border-white/10 shadow-lg">
          <IconMicroscope size={36} />
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, sunt
            debitis sint illo rerum architecto libero eos
          </p>
        </div>
        <div className="text-gray-200 flex flex-col gap-4 items-center justify-center p-6 rounded-xl bg-black/30 backdrop-blur-md border border-white/10 shadow-lg">
          <IconMicroscope size={36} />
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, sunt
            debitis sint illo rerum architecto libero eos
          </p>
        </div>
      </div>

      {/* <div className="max-w-[1100px] py-24 m-auto flex gap-4 items-center">
        <div className="text-gray-200 w-1/2">
          <h3>Header</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            dicta modi suscipit beatae quae iusto, delectus, nulla odit at quam
            repellat facilis consequuntur dolore? Doloribus quasi quidem in
            minus explicabo!
          </p>
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <Image
            src="/images/product-1.webp"
            width={600}
            height={500}
            alt="product main"
          />
        </div>
      </div> */}
      <div className="max-w-[1100px] m-auto py-24">
        <ProductHero />
      </div>

      <ProductSlider />
    </div>
  );
};

export default Hero;
