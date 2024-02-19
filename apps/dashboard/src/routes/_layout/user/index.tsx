import { createFileRoute } from '@tanstack/react-router';
import { Button } from "@repo/ui"
import Table from '@/components/table/table'
import { createColumnHelper } from '@tanstack/react-table'
import {
  PlusIcon,

} from '@heroicons/react/24/outline'
import { User } from '@/types/user';
import { Link } from '@tanstack/react-router'
import { ROUTES_PATH } from '@/constants/routes';
import { usersQueryOptions } from '@/utils/react-query/user';

export const Route = createFileRoute('/_layout/user/')({
  component: UserComponent,
  loader: ({ context: { queryClient } }: any) => queryClient.ensureQueryData(usersQueryOptions()),
})



const columnHelper = createColumnHelper<User>()

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
  columnHelper.accessor('email', {
    header: () => 'Email',
    cell: info => info.renderValue(),
  }),
  columnHelper.accessor('phone', {
    header: () => <span>Phone</span>,
  }),
  columnHelper.accessor('deleted', {
    header: 'Status',
  }),
  columnHelper.accessor('roleID', {
    header: 'Role',
  }),
]


function UserComponent() {
  const data = Route.useLoaderData()
  const users = data.data.data?.users || []
  console.log(users)

  return (
    <div className="p-2">
      <h3>Welcome user!</h3>
      <div className='flex justify-end mb-2'>
        <Link to={ROUTES_PATH.USER_CREATE} >
          <Button><PlusIcon className="h-4 w-4 mr-2" />Tạo mới</Button>
        </Link>
      </div>
      <Table columns={columns} data={users} />
    </div>
  )
}