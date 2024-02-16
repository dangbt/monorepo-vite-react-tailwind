
import { Button } from "@repo/ui"
import Table from '@/components/table/table'
import { createColumnHelper } from '@tanstack/react-table'


type Person = {
  firstName: string
  lastName: string
  age: number
  visits: number
  status: string
  progress: number
}

const defaultData: Person[] = [
  {
    firstName: 'tanner',
    lastName: 'linsley',
    age: 24,
    visits: 100,
    status: 'In Relationship',
    progress: 50,
  },
  {
    firstName: 'tandy',
    lastName: 'miller',
    age: 40,
    visits: 40,
    status: 'Single',
    progress: 80,
  },
  {
    firstName: 'joe',
    lastName: 'dirte',
    age: 45,
    visits: 20,
    status: 'Complicated',
    progress: 10,
  },
]

const columnHelper = createColumnHelper<Person>()

const columns = [
  columnHelper.accessor('firstName', {
    header: () => <span>First Name</span>,
    cell: info => info.getValue(),
  }),
  columnHelper.accessor(row => row.lastName, {
    id: 'lastName',
    cell: info => <i>{info.getValue()}</i>,
    header: () => <span>Last Name</span>,
  }),
  columnHelper.accessor('age', {
    header: () => 'Age',
    cell: info => info.renderValue(),
  }),
  columnHelper.accessor('visits', {
    header: () => <span>Visits</span>,
  }),
  columnHelper.accessor('status', {
    header: 'Status',
  }),
  columnHelper.accessor('progress', {
    header: 'Profile Progress',
  }),
]

function App() {

  return (
    <>
      <Button >Tạo mới</Button>
      <Table columns={columns} data={defaultData} />
    </>
  )
}

export default App
