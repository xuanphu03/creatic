import { useInView } from 'react-intersection-observer'
import { twMerge } from 'tailwind-merge'
import fb from '@/assets/svgs/fb.svg'
import ig from '@/assets/svgs/ig.svg'
import ft from '@/assets/svgs/ft.svg'
import pin from '@/assets/svgs/pin.svg'
import tw from '@/assets/svgs/tw.svg'
import inn from '@/assets/svgs/in.svg'

interface Props {
  className?: string
}

const iconFooters = [fb, ig, ft, pin, tw, inn]

export default function Footer({ className }: Props) {
  const { ref, inView } = useInView({
    triggerOnce: true
  })

  console.log(ref)
  return (
    <div className={twMerge('', className)} id="footer" ref={ref}>
      {inView && (
        <div className="flex flex-col justify-center items-center text-center">
          <p className="text-5xl font-[700]  text-primary">CREATIC</p>
          <p className="text-sm font-normal text-white"> We love Creating </p>
          <div className=" h-1 w-24 bg-white mt-5 " />
          <div className="grid grid-cols-6 gap-10 text-primary text-xl font-medium p-3">
            <p>Categories</p>
            <p>About</p>
            <p>Services</p>
            <p>Portfolio</p>
            <p>Pages</p>
            <p>Support</p>
          </div>
          <p className="text-xl">
            Lorem ipsum Neque porro quisquam est qui do lorem ipsum <br /> quia dolor sit amet, Neque porro elit NeDque{' '}
          </p>
          <div className="flex gap-6 mt-5 mb-46 pb-16">
            {iconFooters.map(iconFooter => (
              <img src={iconFooter} alt="" />
            ))}
          </div>
          <p className="text-sm">Copyright © 2003-2023 Creatic Agency All rights reserved.</p>
        </div>
      )}
    </div>
  )
}
