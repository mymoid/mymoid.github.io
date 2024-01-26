import { Button } from './button'

export default function HeroSection() {
  return (
    <div className="py-32">
      <div className="container text-center">
        <h2 className="font-bold text-6xl mb-3">Open Source</h2>
        <h3 className="mb-5 font-medium text-[--colors-text-weak] max-w-lg mx-auto">
          Explore our collection of collaborative tools, designed to enhance the
          development and scalability of your projects.
        </h3>
        <Button variant="primary" href="https://github.com/mymoid">
          Get started{' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              d="M10.125 3.375L15.75 9M15.75 9L10.125 14.625M15.75 9H2.25"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>
      </div>
    </div>
  )
}
