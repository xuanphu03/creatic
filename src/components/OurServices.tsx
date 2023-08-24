import Button from './ui/Button'
import graphic from '../assets/svgs/graphic.svg'
import video from '../assets/svgs/video.svg'
import ux from '../assets/svgs/ux.svg'
import web from '../assets/svgs/web.svg'

export default function OurServices() {
  const services = [
    {
      image: video,
      title: 'VIDEO MARKETING',
      decr: 'Lorem ipsum Neque do porro quisquam est qui do quam '
    },
    {
      image: graphic,
      title: 'GRAPHIC DESIGN',
      decr: 'Lorem ipsum Neque do porro quisquam est qui do quam '
    },
    {
      image: ux,
      title: 'UI/UX DESIGN',
      decr: 'Lorem ipsum Neque do porro quisquam est qui do quam '
    },
    {
      image: web,
      title: 'WEBSITE DESIGN',
      decr: 'Lorem ipsum Neque do porro quisquam est qui do quam '
    }
  ]

  return (
    <div className="flex pb-36">
      <div className="w-1/2 mt-44 ml-80 mr-20 flex flex-col items-start gap-6">
        <p className="font-medium text-primary">our services</p>
        <h1 className="text-4xl font-bold">
          Experience the power <br /> Of <span className="text-primary">innovation</span>.
        </h1>
        <div className="w-24 h-1 bg-primary rounded-full" />
        <p>
          Lorem ipsum Neque porro quisquam est qui do lorem ipsum quia dolor sit amet, Neque porro elit NeDque porro
          Neque porro quisquam est qui do lorem ipsum quia dolor sit amets ipsum
        </p>
        <Button>VIEW ALL</Button>
      </div>
      <div className="mt-32 mr-60 grid grid-cols-2 text-center">
        {services.map((service, index) => {
          const id = 'a' + index
          console.log(service)
          return (
            <div key={service.title} className="pt-10 p-7 flex flex-col justify-center items-center" id={id}>
              <img src={service.image} alt={service.title} />
              <h3>{service.title}</h3>
              <p>{service.decr}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
