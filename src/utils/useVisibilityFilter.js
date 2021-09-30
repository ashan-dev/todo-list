import { useDispatch, useSelector } from "react-redux";
import { getFilter } from "../redux/selectors/todoFilter-selectors";
import { setFilterAction } from "../redux/actions/todoFilter-action";
import { VISIBILITY_FILTER } from "../redux/actions/todoFilter-action";

export default () => {
  const dispatch = useDispatch();

  const activeFilter = useSelector(getFilter);

  const filters = VISIBILITY_FILTER; 

  const setFilter = (filter) => {
    if (filter) {
      dispatch(setFilterAction(filter));
    }
  };

  return { filters, activeFilter, setFilter };
};
