import { LogOut } from 'lucide-react'

/* eslint-disable @next/next/no-img-element */
interface ProfileProps {}

const Profile: React.FC<ProfileProps> = () => {
  return (
    <div className="grid-cols-profile grid items-center gap-3">
      <img
        src="https://github.com/caiousper2011.png"
        alt="Profile image"
        className="h-10 w-10 rounded-full"
      />
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Caio Barbosa
        </span>
        <span className="truncate text-sm text-zinc-500">
          caiousper2011@hotmail.com
        </span>
      </div>
      <button type="button" className="ml-auto rounded-md p-2 hover:bg-zinc-50">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </button>
    </div>
  )
}

export default Profile
