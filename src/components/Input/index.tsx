type InputPrefixProps = React.ComponentProps<'div'>

export const Prefix: React.FC<InputPrefixProps> = (props) => {
  return <div {...props} />
}

type InputControlProps = React.ComponentProps<'input'>

export const Control: React.FC<InputControlProps> = (props) => {
  return (
    <input
      className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600 outline-none"
      {...props}
    />
  )
}

type InputRootProps = React.ComponentProps<'div'>

export const Root: React.FC<InputRootProps> = (props) => {
  return (
    <div
      className="mx-1 flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm"
      {...props}
    ></div>
  )
}
