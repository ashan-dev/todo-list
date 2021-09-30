import React from "react";
import cn from "classnames";
import { Form, Row, Col } from "react-bootstrap";
import styles from "./VisibilityFilter.module.scss";
import useVisibilityFilter from "../../utils/useVisibilityFilter";

const VisibilityFilter = () => {
  const { filters, activeFilter, setFilter } = useVisibilityFilter();

  return (
    <Row className="mb-3">
      <Col xs={{ span: 10, offset: 1 }}>
        <div>
          {Object.keys(filters).map((filterKey) => {
            const curFilter = filters[filterKey];

            return (
              <span
                key={`visibility-filter-${curFilter}`}
                className={cn(
                  styles.filter,
                  curFilter === activeFilter && styles["filter-active"]
                )}
                onClick={() => {
                  setFilter(curFilter);
                }}
              >
                {curFilter}
              </span>
            );
          })}
        </div>{" "}
      </Col>
    </Row>
  );
};

export default VisibilityFilter;
