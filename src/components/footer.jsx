import React from "react";
import Image from "next/image";
function Footer() {
  return (
    <div className='flex justify-between items-center w-full h-1/6 px-6 relative'>
      {/* <Image src='/sol_alt.png' alt='Logo' width={200} height={240} /> */}
      <Image src='/afiyet.png' alt='Logo' width={100} height={50} />
      <Image src='/logo.png' alt='Logo' width={100} height={50} />
    </div>
  );
}

export default Footer;

