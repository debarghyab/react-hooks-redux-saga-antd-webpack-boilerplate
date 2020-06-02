import generateReducer from "./generateReducer";
import generateSampleDispatcher from "./dispatchers/sample";
import { generateSampleReducer } from "./reducers/sample";
import { sample } from "./initialStates/sample";

export default generateReducer(
  "sample",
  ["SAMPLE_ACTION"],
  sample,
  generateSampleDispatcher,
  generateSampleReducer
);
