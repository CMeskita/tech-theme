'use client'
interface IContainer{
  children: any;
  className?: string;
}

export default function Container({ children, className = "" }: IContainer) {
  return (

      <section className="relative z-10 p-5  py-8 sm:p-8 h-screen">
   
        {children}
  
          
      </section>
    
  
  );

}