'use client'
interface IContainer{
  children: any;
  className?: string;
}

export default function Container({ children, className = "" }: IContainer) {
  return (
 
      <div className={`relative z-10 p-5  py-8 sm:p-8 min-h-screen  ${className}`} >
        {/* relative z-10 p-5 py-8 sm:p-8 min-h-screen */}
        {children}

    </div>
  
  );

}