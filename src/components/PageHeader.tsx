import './PageHeader.css'

export function PageHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="pt-6 pb-12 flex justify-center">
      <h1 className="pageHeading font-semibold text-center text-primary tracking-tight">
        <span>{children}</span>
      </h1>
    </div>
  )
}
