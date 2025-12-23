import { createFileRoute } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { PageHeader } from '../components/PageHeader'

const getUsesData = createServerFn({ method: 'GET' }).handler(async () => {
  const fs = await import('fs/promises')
  const path = await import('path')
  const yaml = await import('yaml')

  const usesFilePath = path.join(process.cwd(), 'src/data/uses.yml')
  const usesFile = await fs.readFile(usesFilePath, 'utf8')
  const usesData = yaml.parse(usesFile)

  return usesData as {
    equiptment: string[]
    software: string[]
    edc: string[]
  }
})

export const Route = createFileRoute('/uses')({
  component: UsesPage,
  loader: () => getUsesData(),
  head: () => ({
    meta: [{ title: 'Uses' }],
    links: [
      { rel: 'canonical', href: 'https://www.daniel-pointecker.net/uses' },
    ],
  }),
})

function UsesPage() {
  const usesData = Route.useLoaderData()

  return (
    <div className="pb-20">
      <PageHeader>Uses</PageHeader>
      <div className="max-w-2xl mx-auto relative z-50 mt-8">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Tech</h2>
          <ul className="list-disc list-inside space-y-2">
            {usesData.equiptment.map((item: string) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Software</h2>
          <ul className="list-disc list-inside space-y-2">
            {usesData.software.map((item: string) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">EDC</h2>
          <ul className="list-disc list-inside space-y-2">
            {usesData.edc.map((item: string) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}
