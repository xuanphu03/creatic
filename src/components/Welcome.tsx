import background from '../assets/images/bg-welcome.png'
import Button from './ui/Button'

export default function Welcome() {
  return (
    <div className="relative welcome pt-44 pb-48">
      <div className="w-1/2 pl-52 flex flex-col items-start gap-10">
        <p className="text-primary font-medium uppercase">Welcome to creatic</p>
        <h1 className="text-7xl font-bold">
          WE ARE <span className="text-primary">CREATIVE</span> DESIGN AGENCY
        </h1>
        <div className="bg-primary w-36 h-1 rounded-full" />
        <p className="font-light">
          Lorem ipsumNeque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit Neque
          porro elit Neque porro quis ipsum
        </p>
        <Button className="">GET IN TOUCH</Button>
      </div>
      <div className="absolute top-20 right-0 -z-10">
        <img src={background} alt="Background" />
      </div>
    </div>
  )
}
