type Props = {
  title: string
  text: string
}

const Section = ({ title, text }: Props): JSX.Element => {
  const lines = text.split('\n').map((line) => <p key={line}>{line}</p>)

  return (
    <div className="px-4 mt-16 tracking-wide">
      <h3 className="block text-xl text-natural-black">{title}</h3>
      <div className="mt-4 text-sm md:text-base text-natural-gray">{lines}</div>
    </div>
  )
}

export default Section
