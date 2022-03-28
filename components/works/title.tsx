import Dots from 'components/common/dots'

type Props = {
  text: string
  description: string
}

const Title = ({ text, description }: Props): JSX.Element => (
  <div className="mt-8 text-main text-left">
    <h2 className="text-3xl tracking-widest" data-testid="work-title">
      {text}
    </h2>
    <p className="mt-2 text-base font-normal">{description}</p>
    <Dots className="mt-10" count={4} />
  </div>
)

export default Title
