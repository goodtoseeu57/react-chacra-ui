import React, { PropsWithChildren } from 'react'
import { Button, ButtonGroup } from '@chakra-ui/react'

export interface GithubIssue {
  repo: {
    created_at: string
    number: string
    state: string
    title: string
  }
}

const Item: React.FC<GithubIssue> = ({ repo }: GithubIssue) => {
  return (
    <div style={repo.title === 'feat(material/schematics): add dialog styles migrator and tests' ? { opacity: 0.3 } : {}} key={repo.number}>
      {repo.title}
      <Button colorScheme='teal' variant='solid'>
        Button
      </Button>
    </div>
  )
}

export default Item
