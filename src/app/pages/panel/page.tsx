'use client'
import Behind from "@/app/components/Behind";
import ChartBar from "@/app/components/ChartBar";
import ChartLine from "@/app/components/ChartLine";
import Container from "@/app/components/Container";
import Header from "@/app/components/Header";
import Logo from "@/app/components/Logo";
import NavigationGrid from "@/app/components/NavigationGrid";



export default function Panel() {
  return (


  
        <Behind classname={""}>
        
        
                 <Container>
                    <div className="h-full overflow-y-auto">
                          <Header/>
                    <Logo/>

                    <NavigationGrid/>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4 mt-8 ">
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
