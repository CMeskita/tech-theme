interface IButtomTh {
children?: any;
type: string;
clasname?: string;
onClick?: () => void
}

export default function Buttom({ children, clasname,onClick}: IButtomTh) {
  return (
     <button type={"submit"} 
        className={`flex w-full justify-center 
            rounded-md bg-primary px-3 py-1.5 text-2xl 
            font-semibold text-white hover:text-black hover:bg-white 
            focus-visible:outline-2 focus-visible:outline-offset-2 
            focus-visible:outline-indigo-500 
            ${clasname}`
        } onClick={onClick}>
        {children}
    </button>
  );
}