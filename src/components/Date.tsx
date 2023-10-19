interface Props {
  className?: string;
  children: string;
}

function Date({ children, className = "" }: Props) {
  return <p className={`text-black text-lg ${className}`}>{children}</p>;
}

export default Date;
