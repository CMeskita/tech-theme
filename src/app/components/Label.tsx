

interface ILabelTh {
  children?: any;
  type: string;
}

export default function Label({ children, type }: ILabelTh) {

  return (
     <label htmlFor={type} className="block text-sm/6 font-medium text-gray-100">{children}</label>
  )

}