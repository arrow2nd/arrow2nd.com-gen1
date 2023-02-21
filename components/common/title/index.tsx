import Dots from "../dots";

type Props = {
  text: string;
};

const Title = ({ text }: Props): JSX.Element => (
  <div className="text-main" data-testid="title">
    <h1 className="block text-6xl tracking-widest">{text}</h1>
    <Dots className="mt-8" count={4} dashed />
  </div>
);

export default Title;
