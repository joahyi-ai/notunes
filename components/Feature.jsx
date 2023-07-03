import React from "react";
import Image from "next/image";

export default function Feature() {
  return (
    <div>
      <div
        className="mx-auto mt-16 max-w-7xl px-6 sm:mt-16 lg:px-8"
        id="features"
      >
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What's included
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <Image src="/notune.gif" width={1080} height={225} />
        </div>
      </div>
      ;
    </div>
  );
}
