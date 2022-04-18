import { useEffect, useState } from 'react'
import Item from './item'
import axios from 'axios'
import { usePosts } from './graph-ql-request'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from '@chakra-ui/react'

export interface GithubIssue {
  created_at: string
  number: string
  state: string
  title: string
}

const List = () => {
  async function getRepoIssues(sort: string, order: any, page: number) {
    const href = 'https://api.github.com/search/issues'
    const requestUrl = `${href}?q=repo:angular/components&sort=${sort}&order=${order}&page=${page + 1}`

    const repos = await axios.get(requestUrl)
    setRepos(repos.data.items)
  }
  const [repos, setRepos] = useState<Array<any>>([])

  useEffect(() => {
    console.log('numbers has changed', repos)
    getRepoIssues('true', 1, 1)
  }, [repos])

  const handleClick = (number: string) => console.log(number)
  const { data, isLoading, error } = usePosts('data')
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        gap: '10px',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Table variant='simple' >
    <TableCaption>Imperial to metric conversion factors</TableCaption>
        { isLoading ? (
        <div> isLoading </div>
      ) : data.map((d: any) => (
            <Thead key={d.id}>
                <Th> {d.id}</Th>
                <Th>{d.title}</Th>
            </Thead>
        ))}
  </Table>
      {repos.map((repo: GithubIssue) => (
        <div key={repo.number} onClick={() => handleClick(repo.title)}>
          <div> {repo.state} </div>
          <Item repo={repo} />
        </div>
      ))}
    </div>
  )
}

export default List
