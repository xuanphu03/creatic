import Button from './ui/Button'
import tick from '../assets/svgs/tick.svg'
import { twMerge } from 'tailwind-merge'

interface Props {
  className?: string
}

export default function WhyUs({ className }: Props) {
  return (
    <div className={twMerge('flex justify-between gap-16', className)}>
      <div className="text-xl uppercase">
        <p className="border-b-2 border-primary leading-snug inline">Why us?</p>
        <h1 className="text-5xl font-bold mt-6">
          25 years of <span className="text-primary">experience</span> as a creative agency
        </h1>
        <Button className="mt-11">Read more</Button>
      </div>

      <div className="">
        <p className="font-light">
          Lorem ipsum Neque porro quisquam est qui do lorem ipsum quia dolor sit amet, Neque porro elit NeDque porro
          Lorem ipsum
        </p>
        <ul className="mt-8">
          <li className="flex gap-2 mt-4">
            <img src={tick} alt="tick" />
            Happy Customer
          </li>
          <li className="flex gap-2 mt-4">
            <img src={tick} alt="tick" />
            Experienced Team
          </li>
          <li className="flex gap-2 mt-4">
            <img src={tick} alt="tick" />
            Modern Technology
          </li>
        </ul>
      </div>
    </div>
  )
}
