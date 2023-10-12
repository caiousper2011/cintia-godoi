import { poppins } from '@/utils/fonts'
import clsx from 'clsx'
import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  ariaLabel?: string
  text: string
  Icon?: React.ReactElement
}

const Button = ({ ariaLabel, Icon, text, ...rest }: ButtonProps) => {
  return (
    <button
      {...rest}
      className={clsx(
        rest.className,
        'hover: inline-flex justify-center  gap-2 rounded-md  bg-sky-900  px-8 py-3 text-center font-semibold text-white shadow-xl transition hover:bg-sky-700  active:bg-sky-800 active:shadow-md',
        poppins.className,
      )}
      type="button"
      aria-label={ariaLabel}
    >
      {Icon}
      <span>{text}</span>
    </button>
  )
}

export default Button
