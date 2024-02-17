import { createFileRoute } from '@tanstack/react-router';
import { Button } from "@repo/ui"
import {
  PlusIcon,

} from '@heroicons/react/24/outline'

export const Route = createFileRoute('/_layout/user/create')({
  component: UserCreateComponent,
})




function UserCreateComponent() {

  return (
    <div className="p-2">
      <div className='mb-2'>
        <Button><PlusIcon className="h-4 w-4" /></Button>
      </div>
    </div>
  )
}