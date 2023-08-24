import { useInView } from 'react-intersection-observer'
import { twMerge } from 'tailwind-merge'
import Button from './ui/Button'
import OurClient1 from '../assets/images/face1.png'
import OurClient2 from '../assets/images/face2.png'
import OurClient3 from '../assets/images/face3.png'
import singleQuote from '@/assets/svgs/single-quote.svg'

interface Props {
  className?: string
}

export default function OurClient({ className }: Props) {
  const { ref, inView } = useInView({
    triggerOnce: true
  })

  console.log(ref)
  return (
    <div className={twMerge('flex ', className)} id="our-client" ref={ref}>
      {inView && <img src={OurClient1} className='className="animate-fade-right' alt="" />}
      {inView && (
        <div className="  flex flex-col items-center text-center px-24 pt-16 animate-fade-up">
          <p className="text-5xl font-bold">
            WHAT<span className="text-primary"> OUR </span>
            <br /> CLIENTS SAY?
          </p>
          <div className="bg-primary w-52 h-1 mt-1 mb-6" />
          <p className="text-white">TESTIMONIALS</p>
          <div className="bg-[#11182a] rounded-3xl mt-24 p-9">
            <p className="text-white text-left">
              Lorem ipsum Neque porro quisquam est qui do lorem ipsum quia dolor sit amet, Neque porro elit
            </p>
            <div className="flex mt-4">
              <img src={OurClient3} className="" alt="" />
              <div className="flex flex-col ml-4 justify-center items-center">
                <p className="text-white text-xl font-bold">Carol Chaves</p>
                <p className="text-primary text-sm font-light">@caroles.gmail.com</p>
              </div>
              <div className="ml-20 flex">
                <img src={singleQuote} className="" alt="" />
                <img src={singleQuote} alt="" />
              </div>
            </div>
          </div>
          <Button className="mt-11">VIEW ALL TESTIMONIALS </Button>
        </div>
      )}
      {inView && <img src={OurClient2} className="ml-auto animate-fade-left" alt="" />}
    </div>
  )
}
