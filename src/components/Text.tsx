interface Props {
  children: string;
  className?: string;
}

function Text({ children, className }: Props) {
  return (
    <p className={`text-black text-lg break-word ${className}`}>{children}</p>
  );
}

export default Text;
