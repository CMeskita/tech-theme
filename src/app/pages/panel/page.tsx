'use client'
import Behind from "@/app/components/layout/Behind";
import ChartLine from "@/app/components/panel/ChartLine";
import Container from "@/app/components/layout/Container";
import Header from "@/app/components/layout/Header";
import Logo from "@/app/components/layout/Logo";
import GridPanel from "@/app/components/panel/GridPanel";
import ChartBar from "@/app/components/panel/ChartBar";



export default function Panel() {
      // 2. Estado para verificar se já montou no cliente

return (  
<Behind classname={""}>

         
             <Container className="h-full overflow-y-auto">
                 <div className='max-w-screen-lg mx-auto min-h-screen flex flex-col'>
                 <Header/>
                 <Logo/>
                    <GridPanel/>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4 mt-8 mb-4 ">
                      <div className="shadow-lg p-6 rounded-lg bg-white">
                          <ChartBar/>
                        </div>
                      <div className="shadow-lg p-6 rounded-lg bg-white">
                           <ChartLine/>
                      </div>
                    </div>
        </div>
             </Container>

 </Behind>

  );
}
