import './card.css'

interface CardProps {
  title: string
  children: React.ReactNode
}

export default function Card({ title, children }: CardProps) {
  return (
    <div className="card">
      <div className="card-body">
        <div className="card-title">
          <h3 className="text-xl font-medium text-center">{title}</h3>
        </div>
        {children}
      </div>
    </div>
  )
}
