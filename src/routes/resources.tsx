import { createFileRoute } from '@tanstack/react-router'
import { PageHeader } from '../components/PageHeader'

export const Route = createFileRoute('/resources')({
  component: ResourcesPage,
  head: () => ({
    meta: [{ title: 'Resources' }],
    links: [
      { rel: 'canonical', href: 'https://www.daniel-pointecker.net/resources' },
    ],
  }),
})

function ResourcesPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <PageHeader>Resources</PageHeader>
      <p className="mt-8 text-muted">coming soon</p>
    </div>
  )
}
