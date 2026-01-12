import Image from "next/image";

interface IBehind {
  children?: any;
  classname: string;
}


export default function Behind({ children , classname}: IBehind) {
  return (
       
     <div className="overflow-hidden w-full h-screen">       
                    <Image  aria-hidden className={`opacity-10 absolute inset-0 w-screen h-screen object-cover z-0 ${classname}`}
                          src="/back.png"
                          alt="File icon"
                          width={500}
                          height={500}
                            />

                     {children}
    </div >
  )
}