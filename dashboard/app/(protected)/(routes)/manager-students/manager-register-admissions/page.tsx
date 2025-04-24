'use client'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { FolderOpen, Plus, Search, SlidersHorizontal } from 'lucide-react'

import { Checkbox } from '@/components/ui/checkbox'
import { useEffect, useState } from 'react'
import PaginationComponent from '@/components/pagination/pagination-component'
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { IAdmissions, IStudent } from '@/constants/interface'
import { CalendarIcon } from '@radix-ui/react-icons'
import { format } from 'date-fns'
import { vi } from 'date-fns/locale' // Nhập locale cho tiếng Việt
import { cn } from '@/lib/utils'

import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

import React from 'react'
import FormPopUp from '@/components/form-pop-up/form-pop-up'
import TableAction from '@/components/table-action/table-action'

const forms: IAdmissions[] = [
  {
    no: '1',
    student: [
      {
        no: '1',
        name: 'Nguyen Van A',
        email: 'nguyenvana@gmail.com',
        phoneNumber: '0912345678',
        CCCD: '123456789',
        gender: 'Male',
        graduationYear: 2022,
        highSchoolProvince: 'Hanoi',
        highSchoolName: 'High School A',
        registrationId: 'REG123456',
      },
    ],
    major1: 'Computer Science',
    major2: 'Information Technology',
    status: 'Đang chờ',
    dateApplied: '01-10-2024',
  },
  {
    no: '2',
    student: [
      {
        no: '2',
        name: 'Tuấn  B',
        email: 'nguyenvana@gmail.com',
        phoneNumber: '0912345678',
        CCCD: '123456789',
        gender: 'Male',
        graduationYear: 2022,
        highSchoolProvince: 'Hanoi',
        highSchoolName: 'High School A',
        registrationId: 'REG123457',
      },
    ],
    major1: 'Computer Science',
    major2: 'Information Technology',
    status: 'Chấp thuận',
    dateApplied: '02-10-2024',
  },
  {
    no: '3',
    student: [
      {
        no: '3',
        name: 'Tuấn  C',
        email: 'nguyenvana@gmail.com',
        phoneNumber: '0912345678',
        CCCD: '123456789',
        gender: 'Male',
        graduationYear: 2022,
        highSchoolProvince: 'Hanoi',
        highSchoolName: 'High School A',
        registrationId: 'REG123459',
      },
    ],
    major1: 'Computer Science',
    major2: 'Information Technology',
    status: 'Từ chối',
    dateApplied: '03-10-2024',
  },
  {
    no: '4',
    student: [
      {
        no: '4',
        name: 'Nguyen Van K',
        email: 'nguyenvana@gmail.com',
        phoneNumber: '0912345678',
        CCCD: '123456789',
        gender: 'Male',
        graduationYear: 2022,
        highSchoolProvince: 'Hanoi',
        highSchoolName: 'High School A',
        registrationId: 'REG123456',
      },
    ],
    major1: 'Computer Science',
    major2: 'Information Technology',
    status: 'Đang chờ',
    dateApplied: '01-10-2024',
  },
]

const formsPerPage = 10
const fields: {
  name: keyof IAdmissions
  label: string
  placeholder: string
  type: string
}[] = [
  { name: 'student', label: 'Học sinh', placeholder: 'học sinh', type: 'text' },
  {
    name: 'major1',
    label: 'Ngành 1',
    placeholder: 'Nhập ngành 1',
    type: 'text',
  },
  {
    name: 'major2',
    label: 'Ngành 2',
    placeholder: 'Nhập ngành 2',
    type: 'text',
  },
  {
    name: 'status',
    label: 'Trạng thái',
    placeholder: 'Chọn trạng thái',
    type: 'text',
  },
  {
    name: 'dateApplied',
    label: 'Ngày nộp đơn',
    placeholder: 'Nhập ngày nộp đơn',
    type: 'date',
  },
]

// Lấy danh sách status và type duy nhất từ forms
const uniqueMajor1 = Array.from(new Set(forms.map((form) => form.major1)))
const uniqueMajor2 = Array.from(new Set(forms.map((form) => form.major2)))
const uniqueStatuses = Array.from(new Set(forms.map((form) => form.status)))

const ManageRegisterAdmissions = () => {
  const [checkedItems, setCheckedItems] = useState<boolean[]>(
    new Array(forms.length).fill(false),
  );
  const [isTableHeadChecked, setIsTableHeadChecked] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [, setSelectedForm] = useState<(typeof forms)[0] | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); // State cho ô tìm kiếm
  const [typeFilter, setTypeFilter] = useState(""); // Lưu bộ lọc danh mục
  const [statusFilter, setStatusFilter] = useState(""); // Lưu bộ lọc trạng thái
  const [filteredForms, setFilteredForms] = useState(forms); // State cho dữ liệu sau khi lọc
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [date, setDate] = React.useState<Date | undefined>(undefined);
  const [dateApplied, setDateApplied] = useState(""); // Lưu bộ lọc trạng thái

  const indexOfLastForm = currentPage * formsPerPage
  const indexOfFirstForm = indexOfLastForm - formsPerPage
  const currentForms = filteredForms.slice(indexOfFirstForm, indexOfLastForm) // Sử dụng filteredForms
  const totalPages = Math.ceil(filteredForms.length / formsPerPage) // Dựa trên kết quả tìm kiếm

  useEffect(() => {
    const atLeastOneChecked = checkedItems.some((item) => item)
    const allUnchecked = checkedItems.every((item) => !item)
    setIsTableHeadChecked(atLeastOneChecked && !allUnchecked)
  }, [checkedItems])

  const handleDateSelect = (selectedDate: Date | undefined) => {
    const dateString = selectedDate ? format(selectedDate, 'dd-MM-yyyy') : ''

    setDate(selectedDate)
    console.log('Ngay ne : ' + dateString)
    setDateApplied(dateString) // Cập nhật filter với ngày đã chọn
  }
  const handleCheckItem = (globalIndex: number) => {
    const updatedCheckedItems = [...checkedItems]
    updatedCheckedItems[globalIndex] = !updatedCheckedItems[globalIndex]
    setCheckedItems(updatedCheckedItems)
  }

  const handleCheckAll = () => {
    setIsTableHeadChecked((prev) => {
      const newCheckedState = !prev
      setCheckedItems(new Array(forms.length).fill(newCheckedState))
      return newCheckedState
    })
  }

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  const handleSubmit = () => {
    setIsOpen(false)
  }

  // Hàm xử lý tìm kiếm và lọc dữ liệu
  const handleSearch = () => {
    const results = forms.filter((form) => {
      // Giả sử mỗi form có một mảng student, lấy tên sinh viên đầu tiên
      const studentNames = form.student.map((student) =>
        student.name.toLowerCase(),
      );

      const matchesStudent = studentNames.some((name) =>
        name.includes(searchTerm.toLowerCase()),
      );
      const matchesdateapplied = form.dateApplied
        .toLowerCase()
        .includes(dateApplied.toLowerCase())

      const matchesmajor1 = !typeFilter || form.major1 === typeFilter
      const matchesmajor2 = !typeFilter || form.major2 === typeFilter
      const matchesStatus = !statusFilter || form.status === statusFilter
      return (
        matchesdateapplied &&
        matchesmajor1 &&
        matchesmajor2 &&
        matchesStatus &&
        matchesStudent
      )
    })

    setFilteredForms(results)
    setCurrentPage(1) // Đặt lại trang về 1 sau khi tìm kiếm/lọc
    setIsFilterOpen(false)
  }

  // Clear filters
  const handleClearFilters = () => {
    setSearchTerm('') // Clear search term
    setDateApplied('')
    setTypeFilter('') // Reset type filter
    setStatusFilter('') // Reset status filter
    setFilteredForms(forms) // Reset filtered forms to original
    setCurrentPage(1) // Reset to first page
    setIsFilterOpen(false)
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <Search className="w-5 h-5 text-muted-foreground" />
            </span>
            <Input
              className="w-80 rounded-sm pl-8"
              placeholder="Tìm kiếm theo tên học sinh"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} // Cập nhật giá trị input
            />
          </div>
          <Button className="bg-sky-600 text-white" onClick={handleSearch}>
            Tìm kiếm
          </Button>
        </div>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button className="flex gap-1 bg-green-600 text-white">
              <Plus className="w-4 h-4" />
              Thêm
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[700px] ">
            <FormPopUp
              label="xét tuyển"
              fields={fields}
              onSubmit={handleSubmit}
            />
          </DialogContent>
        </Dialog>
      </div>
      <div className="border rounded-lg">
        <Table>
          <TableCaption>
            <div className="flex items-center gap-3">
              <span className="font-bold">Danh sách đăng ký xét tuyển</span>
              <span>(Hiện có {filteredForms.length} người xét tuyển)</span>
            </div>
            <Dialog open={isFilterOpen} onOpenChange={setIsFilterOpen}>
              <DialogTrigger asChild>
                <Button className="w-8 h-8 p-0 bg-transparent border border-gray-500 dark:border-white">
                  <SlidersHorizontal className="w-5 h-5 text-gray-500 dark:text-white" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[700px]">
                <DialogHeader>
                  <DialogTitle>Lọc danh sách xét tuyển</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col gap-5 my-4">
                  <div className="flex items-center w-full">
                    <Label className="w-1/4">Ngày:</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={'outline'}
                          className={cn(
                            "w-3/4 justify-start text-left font-normal pr-4",
                            !date && "text-muted-foreground",
                          )}
                        >
                          <CalendarIcon className="mr-3" />
                          {/* Hiển thị ngày theo định dạng ngày tháng năm */}
                          {date ? (
                            format(date, 'dd/MM/yyyy')
                          ) : (
                            <span className="ml-3">
                              {date ? format(date, 'dd/MM/yyyy') : 'Chọn Ngày'}
                            </span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={handleDateSelect}
                          locale={vi}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div className="flex items-center w-full">
                    <Label className="w-1/4">Ngành nghề 1:</Label>
                    <Select onValueChange={setStatusFilter}>
                      <SelectTrigger className="w-3/4">
                        <SelectValue placeholder="Chọn ngành nghề 1" />
                      </SelectTrigger>
                      <SelectContent>
                        {uniqueMajor1.map((major1) => (
                          <SelectItem key={major1} value={major1}>
                            {major1}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center w-full">
                    <Label className="w-1/4">Ngành nghề 2:</Label>
                    <Select onValueChange={setStatusFilter}>
                      <SelectTrigger className="w-3/4">
                        <SelectValue placeholder="Chọn ngành nghề 2" />
                      </SelectTrigger>
                      <SelectContent>
                        {uniqueMajor2.map((major2) => (
                          <SelectItem key={major2} value={major2}>
                            {major2}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center w-full">
                    <Label className="w-1/4">Trạng thái xét tuyển:</Label>
                    <Select onValueChange={setStatusFilter}>
                      <SelectTrigger className="w-3/4">
                        <SelectValue placeholder="Chọn trạng thái xét tuyển" />
                      </SelectTrigger>
                      <SelectContent>
                        {uniqueStatuses.map((status) => (
                          <SelectItem key={status} value={status}>
                            {status}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <DialogFooter>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleClearFilters}
                  >
                    Bỏ lọc
                  </Button>
                  <Button type="button" onClick={handleSearch}>
                    Lọc
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </TableCaption>
        </Table>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="pr-0">
                <Checkbox
                  checked={isTableHeadChecked}
                  onCheckedChange={handleCheckAll}
                  isTableHead
                />
              </TableHead>
              <TableHead className="px-0"></TableHead>
              {fields.map((field) => (
                <TableHead key={field.name}>{field.label}</TableHead>
              ))}
              <TableHead className="text-right bg-white dark:bg-[hsl(0,0%,3.9%)] box-border sticky right-0"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentForms.map((form, index) => {
              const globalIndex = indexOfFirstForm + index
              return (
                <TableRow key={form.major1}>
                  <TableCell>
                    <Checkbox
                      checked={checkedItems[globalIndex]}
                      onCheckedChange={() => handleCheckItem(globalIndex)}
                    />
                  </TableCell>
                  <TableCell className="px-0">{form.no}</TableCell>
                  {fields.map((field) => (
                    <TableCell key={field.name} className="min-w-[200px]">
                      {field.name === 'status' ? (
                        <span
                          className={`py-2 px-4 text-white rounded-lg ${
                            form.status === 'Đang chờ'
                              ? 'bg-[#FFA500]'
                              : form.status === 'Chấp thuận'
                                ? 'bg-green-600'
                                : form.status === 'Từ chối'
                                  ? 'bg-red-600'
                                  : 'bg-gray-500'
                          }`}
                        >
                          {form.status || 'Không có trạng thái'}
                        </span>
                      ) : field.name === 'student' ? (
                        form.student.map((student) => (
                          <div key={student.registrationId}>
                            <p>{student.name}</p>
                          </div>
                        ))
                      ) : (
                        form[field.name]
                      )}
                    </TableCell>
                  ))}
                  <TableCell className="text-center bg-white dark:bg-[hsl(0,0%,3.9%)] sticky right-0">
                    <div className="border-l-2"></div>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
        <Table>
          <TableCaption className="caption-bottom">
            <div className="w-full flex items-center justify-between">
              <div className="w-fit">
                <span>Tổng {totalPages} trang</span>
              </div>
              <PaginationComponent
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
              <div className="text-left">
                <span>
                  Từ dòng {indexOfFirstForm + 1} đến{' '}
                  {Math.min(indexOfLastForm, forms.length)}
                </span>
              </div>
            </div>
          </TableCaption>
        </Table>
      </div>
    </div>
  )
}

export default ManageRegisterAdmissions
