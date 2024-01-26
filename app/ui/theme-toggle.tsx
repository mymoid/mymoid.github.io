'use client'

import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

function ThemeToggle({ initialValue }: { initialValue: Theme }) {
  const [theme, setTheme] = useState(initialValue)

  useEffect(() => {
    if (theme) {
      document.cookie = `theme=${theme};path=/;`
      document.querySelector('html')!.setAttribute('data-theme', theme)
    } else {
      setTheme(
        window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light'
      )
    }
  }, [theme])

  const isDark = theme === 'dark'

  return (
    <button
      className="button !px-2"
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
    >
      {isDark ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
        >
          <path
            d="M9 3V4.6875M13.773 4.977L12.5798 6.17025M15.75 9.75H14.0625M13.773 14.523L12.5798 13.3298M9 14.8125V16.5M5.42025 13.3298L4.227 14.523M3.9375 9.75H2.25M5.42025 6.17025L4.227 4.977M11.8125 9.75C11.8125 10.4959 11.5162 11.2113 10.9887 11.7387C10.4613 12.2662 9.74592 12.5625 9 12.5625C8.25408 12.5625 7.53871 12.2662 7.01126 11.7387C6.48382 11.2113 6.1875 10.4959 6.1875 9.75C6.1875 9.00408 6.48382 8.28871 7.01126 7.76126C7.53871 7.23382 8.25408 6.9375 9 6.9375C9.74592 6.9375 10.4613 7.23382 10.9887 7.76126C11.5162 8.28871 11.8125 9.00408 11.8125 9.75Z"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
        >
          <path
            d="M16.314 12.0015C15.4224 12.3731 14.4659 12.5638 13.5 12.5625C9.46125 12.5625 6.1875 9.28875 6.1875 5.25C6.1875 4.2525 6.387 3.30225 6.7485 2.436C5.4161 2.99184 4.27798 3.92952 3.47747 5.13095C2.67696 6.33237 2.24988 7.74382 2.25 9.1875C2.25 13.2263 5.52375 16.5 9.5625 16.5C11.0062 16.5001 12.4176 16.073 13.6191 15.2725C14.8205 14.472 15.7582 13.3339 16.314 12.0015Z"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  )
}

export default ThemeToggle
