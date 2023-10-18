interface Props {
  date: string;
  className?: string;
}

function Date({ date, className = "" }: Props) {
  return <p className={`text-black text-lg ${className}`}>{date}</p>;
}

export default Date;
