import * as React from 'react'
import { cn } from "@repo/utils"

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'

interface Props {
  columns: any
  data: any
}
export default function Table({ columns, data }: Props) {

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <table className='w-full'>
      <thead className={cn("h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]")}>
        {table.getHeaderGroups().map(headerGroup => (
          <tr key={headerGroup.id}
            className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
            {headerGroup.headers.map(header => (
              <th key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map(row => (
          <tr key={row.id} className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
            {row.getVisibleCells().map(cell => (
              <td key={cell.id} className="p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>

    </table>
  )
}


