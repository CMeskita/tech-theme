'use client';

import Behind from "@/app/components/Behind";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Apresentation() {

  const router = useRouter()  
  useEffect(()=>{
  setTimeout(function() {
    router.push('/pages/login');
}, 2000)
    
  })
  return (
     <div className="h-full bg-gray-900"> 
        <Behind classname={"animate-pulse"}>
          
        </Behind>
      </div>
  )
}