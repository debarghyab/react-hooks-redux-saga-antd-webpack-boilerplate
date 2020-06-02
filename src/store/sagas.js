// import { call, put, takeLatest } from "redux-saga/effects";
// import Api from "@api";

function* helloSaga() {
  yield console.log("Hello there!");
}

export function* initSaga() {
  yield helloSaga();
}
