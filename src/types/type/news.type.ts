import type { News, Pagination } from "../interface/news.interface";

export type NewsActionType =
  | { type: "FETCH_START" }
  | { type: "FETCH_SUCCESS"; payload: { data: News[]; pagination: Pagination } }
  | { type: "FETCH_ERROR"; payload: string }
  | { type: "PREV_PAGE" }
  | { type: "NEXT_PAGE" }
  | { type: "SET_LIMIT"; payload: number }
  | { type: "ADD_NEWS"; payload: News }
  | { type: "OPEN_ADD_DIALOG" }
  | { type: "CLOSE_ADD_DIALOG" }
  | { type: "SET_IMAGE_PREVIEW"; payload: string | null }
  | { type: "SET_NEWS"; payload: News }
  | { type: "ADD_START" }
  | { type: "ADD_SUCCESS" }
  | { type: "ADD_ERROR"; payload: string };
