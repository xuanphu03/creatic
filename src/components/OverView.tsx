import award from '../assets/svgs/award.svg'
import project from '../assets/svgs/project.svg'
import customers from '../assets/svgs/customers.svg'
import team from '../assets/svgs/team.svg'

export default function OverView() {
  const OverViews = [
    {
      image: team,
      total: '50+',
      title: 'Team Members'
    },
    {
      image: project,
      total: '200+',
      title: 'Project Done'
    },
    {
      image: customers,
      total: '500+',
      title: 'Happy Customers'
    },
    {
      image: award,
      total: '75+',
      title: 'Award Winning'
    }
  ]

  return (
    <div className="overview px-72 py-20 flex items-center justify-between">
      {OverViews.map(OverView => (
        <div key={OverView.title} className="flex flex-col gap-2 justify-center items-center">
          <img src={OverView.image} alt={OverView.title} />
          <p className="text-6xl font-bold ">{OverView.total}</p>
          <p className="text-xl text-primary">{OverView.title}</p>
        </div>
      ))}
    </div>
  )
}
