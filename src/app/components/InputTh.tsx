
interface IInputTh {
  tipo: string;
  id?: string;
  name?: string;
  autoComplete?: string;

}
export default function Input({ tipo, id, name, autoComplete }: IInputTh) {
  return(
  <input 
  id={id} 
  type={tipo} 
  name={name} 
  required autoComplete={autoComplete}
  className={`block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white 
  outline-1 -outline-offset-1 outline-white/10 
  placeholder:text-gray focus:outline-2 
  focus:-outline-offset-2 
  focus:outline-primary sm:text-sm/6`} />
);
}   