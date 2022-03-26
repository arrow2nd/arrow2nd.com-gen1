type Props = {
  className?: string
  count: number
  dashed?: boolean
}

const Dots = ({
  className = '',
  count,
  dashed = false
}: Props): JSX.Element => {
  const dots = []

  for (let i = 0; i < count; i++) {
    dots.push(
      <span
        key={`dot-${i}`}
        className={`inline-block ${
          i == 0 && dashed ? 'w-12' : 'w-2'
        } h-2 bg-sea rounded-full`}
      />
    )
  }

  return <div className={`space-x-2 ${className}`}>{dots}</div>
}

export default Dots
