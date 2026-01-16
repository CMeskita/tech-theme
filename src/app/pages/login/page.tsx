'use client';
import Behind from "@/app/components/layout/Behind";
import Buttom from "@/app/components/Buttom";
import Container from "@/app/components/layout/Container";
import ContainerLogin from "@/app/components/layout/ContainerLogin";
import Input from "@/app/components/Input";
import Label from "@/app/components/Label";
import { useRouter } from "next/navigation";


export default function Login() {
 // debugger;  
      const router = useRouter()  

      function clicando() {
        alert('Login Realizado com Sucesso!!');
        router.push('/pages/home');
      }

      const appName = process.env.NEXT_PUBLIC_APP_NAME || "Tech Theme";

  return (

<Behind classname={"p-10"} >
    <div className="h-full bg-gray-900">
        <Container>
            <div className="flex  flex-col justify-center px-6 py-12 lg:px-8 h-screen ">
          
                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">Bem vindo!! </h2>
                <h2 className="mt-10 text-center text-3xl font-bold tracking-tight text-white">{appName}</h2>
                <ContainerLogin>
                    <form  action="#" method="POST" className="space-y-6 p-2">

                        <div>
                            <Label type={"email"}>Email</Label>
                            <div className="mt-2">
                            <Input tipo="email" id="email" name="email" autoComplete="email" />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                        
                            <Label type={"password"}>Password</Label>
                            <div className="text-sm">
                                <a href="#" className="font-bold text-primary hover:text-white">Forgot password?</a>
                            </div>
                            </div>
                            <div className="mt-2">
                            <Input tipo="password" id="password" name="password" autoComplete="current-password" />
                            </div>
                        </div>

                        <div>
                        <Buttom type={"submit"} onClick={clicando} >Acessar</Buttom>
                        </div>

                    </form>

                    <p className="mt-10 text-center text-sm/6 text-gray-400">Desejara criar uma conta?
            
                            <a href="#" className="font-bold text-primary hover:text-white">Cadastrar??</a>
                            
                    </p>
                </ContainerLogin>
            </div>
        </Container>
    </div>
</Behind>

    
  );
}