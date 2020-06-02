import { connect } from "react-redux";
import { pageSelector } from "./selectors";
import { createSelector } from "reselect";

const generateReducer = (
  scope,
  types,
  initialState,
  generateDispatcher,
  generateReducer
) => {
  
  const scopedTypes = (scope, types) => types.map((type) => scope + "/" + type);
  const mapDispatchToProps = generateDispatcher(scopedTypes);
  const generatedReducer = generateReducer(scopedTypes, initialState);

  const mapStateToProps = pageSelector(scope, {
    result: createSelector(
      (state) => state[scope],
      (stats) => stats
    ),
  });

  const connecter = (component) =>
    connect(mapStateToProps, mapDispatchToProps)(component);

  return {
    reducer: generatedReducer,
    connecter,
    types: scopedTypes(scope, types),
  };
};

export default generateReducer;
