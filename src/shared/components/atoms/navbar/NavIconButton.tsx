import Button from "../Button";
interface Props {
  onClick: () => void;
  children: React.ReactNode;
}

export default function NavIconButton({ onClick, children }: Props) {
  return <Button onClick={onClick}>{children}</Button>;
}
