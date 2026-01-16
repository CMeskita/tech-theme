
interface IContainerLogin{
  children?: any;
}
export default function ContainerLogin({ children }: IContainerLogin) {
  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      {children}
    </div>
  );
}