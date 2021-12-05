type Props = {
  className?: string
}

const Accent = ({ className = '' }: Props): JSX.Element => (
  <div
    className={`w-16 h-1 mx-auto block bg-arrow2nd rounded-full ${className}`}
  />
)

export default Accent
