import { clsx } from 'clsx'

export function Gradient({ className, ...props }) {
  return (
    <div
      {...props}
      className={clsx(
        className,
        'bg-linear-115 from-[#d4f4dd] from-28% via-[#34d399] via-70% to-[#059669] sm:bg-linear-145',
      )}
    />
  )
}

export function GradientBackground() {
  return (
    <div className="relative mx-auto max-w-7xl">
      <div
        className={clsx(
          'absolute -top-44 -right-60 h-60 w-xl transform-gpu md:right-0',
          'bg-linear-115 from-[#d4f4dd] from-28% via-[#34d399] via-70% to-[#059669]',
          'rotate-[-10deg] rounded-full blur-3xl',
        )}
      />
    </div>
  )
}