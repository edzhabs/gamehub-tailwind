interface Props {
  children: React.ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return <div className="card card-animation relative">{children}</div>;
};

export default GameCardContainer;
