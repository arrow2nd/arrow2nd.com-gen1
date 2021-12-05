const Section = ({
  title,
  text
}: {
  title: string
  text: string
}): JSX.Element => (
  <div className="px-4 mt-16 tracking-wide">
    <h3 className="block text-xl text-natural-black">{title}</h3>
    <div className="mt-4 text-sm md:text-base text-natural-gray">
      {text.split('\n').map((line) => (
        <p key={line}>{line}</p>
      ))}
    </div>
  </div>
)

export default Section
