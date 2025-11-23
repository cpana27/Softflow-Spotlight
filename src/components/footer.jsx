import { Container } from './container'
import { Logo } from './logo'
import { Link } from './link'

// Option A – exakt wie das Beispiel, aber mit deinen Komponenten

const navigation = {
  main: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Datenschutz', href: 'datenschutz' },
    { name: 'Impressum', href: '#' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'X',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
          <path d="M14.82 0H1.18A1.169 1.169 0 000 1.154v13.694A1.168 1.168 0 001.18 16h13.64A1.17 1.17 0 0016 14.845V1.15A1.171 1.171 0 0014.82 0zM4.744 13.64H2.369V5.996h2.375v7.644zm-1.18-8.684a1.377 1.377 0 11.52-.106 1.377 1.377 0 01-.527.103l.007.003zm10.075 8.683h-2.375V9.921c0-.885-.015-2.025-1.234-2.025-1.218 0-1.425.966-1.425 1.968v3.775H6.233V5.997H8.51v1.05h.032c.317-.601 1.09-1.235 2.246-1.235 2.405-.005 2.851 1.578 2.851 3.63v4.197z" />
        </svg>
      ),
    },
  ],
}

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <Container>
        <div className="mx-auto max-w-7xl overflow-hidden px-6 py-8 sm:py-8 lg:px-8 text-center">
          <Logo className="h-22 mx-auto" />

          <nav
            aria-label="Footer"
            className="mt-8 flex flex-wrap justify-center gap-x-10 gap-y-3 text-sm text-gray-600"
          >
            {navigation.main.map((item) => (
              <a key={item.name} href={item.href} className="hover:text-gray-900 transition">
                {item.name}
              </a>
            ))}
          </nav>

          <div className="mt-8 flex justify-center gap-x-8">
            {navigation.social.map((item) => (
              <a key={item.name} href={item.href} className="text-gray-600 hover:text-gray-900 transition">
                <span className="sr-only">{item.name}</span>
                <item.icon aria-hidden="true" className="size-6" />
              </a>
            ))}
          </div>

          <p className="mt-8 text-sm text-gray-600">
            © {new Date().getFullYear()} Softflow. Alle Rechte vorbehalten.
          </p>
        </div>
      </Container>
    </footer>
  )
}