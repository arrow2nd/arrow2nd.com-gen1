import Accent from 'components/common/accent'

type Props = {
  text: string
  description: string
}

const Title = ({ text, description }: Props): JSX.Element => (
  <div className="mt-8 text-center">
    <h2 className="text-xl md:text-2xl text-natural-black tracking-widest">
      {text}
    </h2>
    <p className="mt-1 text-sm md:text-base text-natural-gray">{description}</p>
    <Accent className="mt-8" />
  </div>
)

export default Title
