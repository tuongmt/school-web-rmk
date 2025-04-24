'use client'
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { handleForm } from '@/services/servicesadmin'
import { formColumns } from '../../../../components/data-table/columns/form-columns'
import { DataTable } from '../../../../components/data-table/data-table'

const ManageForms = () => {
  const [currentPage, setCurrentPage] = React.useState(1)

  const endpoint = 'form/forms'
  const {
    isPending,
    error,
    data: queryRes,
  } = useQuery({
    queryKey: ['form', currentPage], // Thêm searchTerm vào queryKey
    queryFn: async () => {
      try {
        const response = await handleForm(endpoint, currentPage)

        console.log(response.data)
        if (response.status >= 200) return response.data
      } catch (error) {
        return error
      }
    },
  })

  // Đang lấy dữ liệu
  if (isPending) return <span>Fetching...</span>
  // Nếu có lỗi
  if (error) return <span>{queryRes}</span>

  return (
    <div>
      <DataTable
        columns={formColumns}
        data={queryRes.data}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={queryRes.totalPages}
        itemsCount={queryRes.itemsCount}
      />
    </div>
  )
}
export default ManageForms
