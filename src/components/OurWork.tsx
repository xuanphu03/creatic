import { twMerge } from 'tailwind-merge'
import image1 from '../assets/images/img1.jpg'
import image2 from '../assets/images/img2.jpg'
import image3 from '../assets/images/img3.jpg'

interface Props {
  className?: string
}

export default function OurWork({ className }: Props) {
  const images = [image2, image1, image3]

  return (
    <div className={twMerge('grid grid-cols-1 gap-12', className)}>
      <h1 className="text-5xl font-bold text-center">
        ENJOY OUR{' '}
        <span className="text-primary">
          LATEST <br />
        </span>{' '}
        PROJECT
      </h1>
      <div className="flex justify-center items-center gap-3 text-primary">
        <div className="h-1 w-24 bg-white rounded-full" />
        <p>OUR WORK</p>
        <div className="h-1 w-24 bg-white rounded-full" />
      </div>

      <div className="flex justify-around">
        {images.map(image => (
          <img className="w-[30%]" src={image} alt="Image" />
        ))}
      </div>
    </div>
  )
}
