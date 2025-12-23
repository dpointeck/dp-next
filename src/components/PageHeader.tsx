import './PageHeader.css'

export function PageHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="pt-4 pb-10 flex justify-center">
      <h1 className="pageHeading font-bold font-mono text-center">
        <span>{children}</span>
      </h1>
    </div>
  )
}
