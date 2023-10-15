import { playfair } from '@/utils/fonts'
import clsx from 'clsx'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description: string
}

const CardDescription = ({ title, description, ...rest }: CardProps) => {
  return (
    <div
      {...rest}
      className={clsx(
        rest.className,
        'w-full space-y-2 rounded-lg bg-white p-6 shadow-lg sm:min-h-[224px]',
      )}
    >
      <h5 className={clsx('text-2xl text-neutral-600', playfair.className)}>
        {title}
      </h5>
      <p className="text-sm text-neutral-500">{description}</p>
    </div>
  )
}

export default CardDescription
