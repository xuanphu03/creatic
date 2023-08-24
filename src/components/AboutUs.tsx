import robot from '../assets/images/robot.png'
import Button from './ui/Button'

export default function AboutUs() {
  return (
    <div className="bg-robot flex">
      <img className="ml-24" src={robot} alt="Robot" />
      <div className="mt-44 ml-11 mr-56 flex flex-col items-start gap-6">
        <p className="font-medium text-primary">ABOUT US</p>
        <h1 className="text-5xl font-bold">
          We Bring <span className="text-primary">Creative</span> ideas To life.
        </h1>
        <div className="w-24 h-1 bg-primary rounded-full" />
        <p>We love Creating</p>
        <p>
          Lorem ipsumNeque porro quisquam est qui do lorem ipsum quia dolor sit amet, Neque porro elit NeDque porro
          Lorem ipsum Neque porro Neque porro <br /> <br />
          Neque porro quisquam est qui do lorem ipsum quia dolor sit amet, Lorem ipsum Neque quis ipsum{' '}
        </p>
        <Button>Read more</Button>
      </div>
    </div>
  )
}
