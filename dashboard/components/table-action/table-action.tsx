'use client'

import { Ellipsis, View } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'

interface TableActionProps {
  formId?: string
}
const TableAction = ({ formId }: TableActionProps) => {
  const router = useRouter() // Use the client-side router

  const handleSubmit = () => {
    router.push(`/manage-forms/edit/${formId}`)
  }

  return (
    <div className="w-full flex justify-center">
      <DropdownMenu>
        <DropdownMenuTrigger className="outline-none">
          <Ellipsis className="w-4 h-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="absolute right-0">
          <DropdownMenuLabel>Hoạt động</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <Button
            onClick={handleSubmit}
            className="w-full flex px-2 justify-start items-center gap-3 font-normal outline-none bg-transparent shadow-none text-black"
          >
            <View className="w-5 h-5" />
            Xem chi tiết
          </Button>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default TableAction
