export { IconTwitter } from './twitter'
export { IconGithub } from './github'
export { IconAbout } from './about'
export { IconJournal } from './journal'
export { IconResources } from './resources'
export { IconUses } from './uses'

import { SVGProps } from 'react'

export const IconPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 16 16" {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="none" d="M0 0h16v16H0z" />
      <path
        d="M14.644 10.21c-1.512-1.08-3.222-1.638-4.986-1.944l.09-.468c.72.036 1.476.144 2.25.342.126.018.216.036.288.036.198 0 .252-.108.252-.324 0-.594-.936-1.332-1.368-1.656-.882-.666-2.322-1.008-3.492-1.008-2.394 0-4.914 1.692-5.562 3.906L1 8.698C1.828 6.016 4.834 4 7.714 4c2.142 0 4.536 1.044 5.868 3.006.09.126.18.18.27.18.144 0 .27-.144.324-.36.162-.702.396-1.512.702-2.16l.468.126c-.396 1.224-.63 2.502-.63 3.816 0 .504.036.99.108 1.512l-.18.09zm-7.812 1.926v-1.674H4.96v-.9h1.872V7.888h.9v1.674h1.872v.9H7.732v1.674h-.9z"
        fill="currentColor"
        fillRule="nonzero"
      />
    </g>
  </svg>
)
