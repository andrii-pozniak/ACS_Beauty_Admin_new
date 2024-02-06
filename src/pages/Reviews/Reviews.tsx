import React, { useState, useEffect } from "react"
import s from "./Reviews.module.scss"
import SearchInput from "src/components/ToolsPanel/SearchInput/SearchInput"
import ExportList from "src/components/Reviews/ExportList/ExportList"
import AdminLayout from "src/layouts/AdminLayout"
import FilterProperties from "../../components/Reviews/FilterProperties/FilterProperties"
import { getReviews } from "src/redux/reviews/operations"
import { useAppDispatch } from "src/redux/store"
import ReviewsTable from "src/components/Reviews/ReviewsItems/ReviewsTable"

const ReviewsList: React.FC = () => {
  const [page, setPage] = useState(0)
  const [pageSize, setPageSize] = useState(10)
  const [searchName, setSearchName] = useState("")
  const [status, setStatus] = useState("")
  const [rating, setRating] = useState("")

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(
      getReviews({
        lookup: searchName,
        pageSize,
        page: page + 1,
        status,
        rating,
      })
    )
  }, [dispatch, searchName, pageSize, page, status, rating])

  return (
    <AdminLayout>
      <div className={s.container}>
        <section className={s.reviews_section}>
          <h2 className={s.text_title}>Відгуки</h2>
          <SearchInput onChange={setSearchName} />

          <div className={s.menu_list}>
            <FilterProperties setStatus={setStatus} setRating={setRating} />
            <ExportList />
          </div>

          <ReviewsTable
            page={page}
            pageSize={pageSize}
            setPage={setPage}
            setPageSize={setPageSize}
          />
        </section>
      </div>
    </AdminLayout>
  )
}

export default ReviewsList
