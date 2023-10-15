// eslint-disable-next-line camelcase
import { Poppins, Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: ['700', '400', '600'] })
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['700'] })
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['500', '400', '700'],
})

export { poppins, playfair, jakarta }
