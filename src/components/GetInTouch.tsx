import { useInView } from 'react-intersection-observer'
import { twMerge } from 'tailwind-merge'
import Button from './ui/Button'
import address from '@/assets/svgs/address.svg'
import phone from '@/assets/svgs/phone.svg'
import email from '@/assets/svgs/email.svg'

const contacts = [
  { icon: address, title1: 'Office Address', title2: '98, Arca St, PR City, 33414 , Indonesia' },
  { icon: phone, title1: 'Call Us', title2: '(+BK) 123 456 7891' },
  { icon: email, title1: 'Mail Us', title2: 'info@creaticagency.com' }
]

interface Props {
  className?: string
}

export default function Contact({ className }: Props) {
  const { ref, inView } = useInView({
    triggerOnce: true
  })

  console.log(ref)
  return (
    <div className={twMerge('grid grid-cols-2 ', className)} id="contact" ref={ref}>
      {inView && (
        <div className="flex gap-6 flex-col w-1/2 animate-fade-left mt-44 mb-52 ml-72 mr-28">
          <p className="text-5xl font-[700]">
            GET IN <span className="text-primary ">TOUCH </span>
          </p>
          <div className="block h-1 w-24 bg-white" />
          <p className="text-white">
            Lorem ipsum Neque porro quisquam est qui do lorem ipsum quia dolor sit amet, Neque porro elit NeDque porro
          </p>
          <div className="grid grid-flow-row gap-10">
            {contacts.map(cont => (
              <div className="flex">
                <img src={cont.icon} className="" alt="" />
                <div className="flex flex-col ml-8 ">
                  <p className="text-white text-xl font-bold">{cont.title1}</p>
                  <p className="text-primary text-sm font-light">{cont.title2}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {inView && (
        <div className="p-9  rounded-3xl bg-coner">
          <form
            action=""
            className="grid grid-flow-row bg-[#11182a] gap-5 w-auto h-auto p-9 ml-9 my-32 mr-80 rounded-3xl animate-fade-up"
          >
            <label htmlFor="" className="font-normal font-pop text-base">
              YOUR NAME
            </label>
            <input type="text" className="bg-gray-100 text-black  border border-gray-300 rounded-md w-96 h-12" />
            <label htmlFor="" className="font-normal font-pop text-base">
              YOUR EMAIL
            </label>
            <input type="text" className="bg-gray-100 text-black  border border-gray-300 rounded-md w-96 h-12" />
            <label htmlFor="" className="font-normal font-pop text-base">
              YOUR MESSAGE
            </label>
            <input type="textarea" className="bg-gray-100 text-black  border border-gray-300 rounded-md w-96 h-44" />
            <Button className="w-fit">SENT MESSAGE</Button>
          </form>
        </div>
      )}
    </div>
  )
}
