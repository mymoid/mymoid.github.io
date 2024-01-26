import './button.css'

type Variant = 'primary' | 'link'

interface ButtonProps {
  children: React.ReactNode
  variant?: Variant
  className?: string
  href?: string
}

export default function Button({
  children,
  className,
  href,
  variant
}: ButtonProps) {
  const ElementName = href ? 'a' : 'button'
  return (
    <ElementName
      className={['button', variant ? `button-${variant}` : '', className].join(
        ' '
      )}
      {...(href && { href, target: '_blank' })}
    >
      {children}
    </ElementName>
  )
}
