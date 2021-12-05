type Props = {
  title: string
  text: string
}

const Section = ({ title, text }: Props): JSX.Element => (
  <div className="px-4 mt-16 tracking-wide">
    <h3 className="block text-xl text-natural-black">{title}</h3>
    <span className="block mt-4 text-sm md:text-base text-natural-gray">
      {text.replaceAll('\n', '<br />')}
    </span>
  </div>
)

export default Section
