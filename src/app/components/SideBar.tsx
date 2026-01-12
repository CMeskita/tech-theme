import { ChevronDown, TextAlignJustify } from "lucide-react";

export default  function SideBar(){
    return(
        <>
        

<div  className={`
         fixed-1 w-14 h-14 top-5 left-5  
         text-primary  flex items-center 
         justify-center text-2xl 
         transform hover:scale-100 transition duration-300`}>                 
                <TextAlignJustify className="text-black" />
                <ChevronDown className="text-black" />

</div>


        </>
    );

}