import search from '../assets/svgs/search.svg'
import { twMerge } from 'tailwind-merge'

interface Props {
  className?: string
}

export default function Header({ className }: Props) {
  return (
    <div className={twMerge('flex justify-between px-52', className)}>
      <div className="text-center">
        <p className="text-5xl font-semibold text-primary">CREATIC</p>
        <p className="text-sm">CREATIVE AGENCY</p>
      </div>

      <nav className="flex items-center gap-16">
        <ul className="flex gap-12">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="About-Us">About Us</a>
          </li>
          <li>
            <a href="Services">Services</a>
          </li>
          <li>
            <a href="Portfolio">Portfolio</a>
          </li>
          <li>
            <a href="Pages">Pages</a>
          </li>
          <li>
            <a href="Contact-Us">Contact Us</a>
          </li>
        </ul>

        <img src={search} alt="Search" />
      </nav>
    </div>
  )
}
