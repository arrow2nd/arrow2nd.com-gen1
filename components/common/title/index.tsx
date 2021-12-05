import Accent from 'components/common/accent'

type Props = {
  text: string
}

const Title = ({ text }: Props): JSX.Element => (
  <div className="text-center">
    <h1 className="block text-natural-black text-5xl tracking-widest">
      {text}
    </h1>
    <Accent className="mt-4" />
  </div>
)

export default Title
