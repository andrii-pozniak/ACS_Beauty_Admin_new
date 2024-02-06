import { instance } from "./instance"
import { IResponse, Review } from "src/types/Reviews"
import { GridRowId } from "@mui/x-data-grid"

export const reviewsApi = {
  // <---------- get ---------->
  getReviews({ page = 1, pageSize = 10, status = "", rating = "", lookup = "" }) {
    return instance.get<IResponse>(
      `feedback?page=${page}&pageSize=${pageSize}${status ? `&status=${status}` : ""}${
        rating ? `&rating=${rating}` : ""
      }${lookup ? `&lookup=${lookup}` : ""}`
    )
  },

  //  <---------- patch ---------->
  patchReviews(id: number, status: { status: string }) {
    return instance.patch<Review>(`feedback/${id}`, status)
  },

  // <---------- delete ---------->
  deleteReview(id: GridRowId) {
    return instance.delete(`feedback/${id}`)
  },
}
