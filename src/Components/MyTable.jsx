import React, { useState, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style.css";
import TableRow from "./TableRow";
import styled from "styled-components";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import { ITEMS } from "./data";
import arrayMove from "./arrayMove";

const MyTableWrapper = styled.div`
  padding: 10px;

  .fixed_header {
    width: 800px;
    table-layout: fixed;
    border-collapse: collapse;

    & > tbody {
      display: block;
      width: 807px;
      overflow: auto;
      height: 400px;
      cursor: grabbing;
      background: white;
    }

    & > thead {
      background: black;
      color: white;

      & > tr {
        display: block;
        //width: 793px;
      }
    }

    & > thead th,
    & > tbody td {
      padding: 5px;
      text-align: left;
      width: 200px;
      border: 1px solid #010101;
    }
  }
`;

const SortableCont = SortableContainer(({ children }) => {
  return <tbody>{children}</tbody>;
});

const SortableItem = SortableElement((props) => <TableRow {...props} />);

const MyTable = () => {
  const [items, setItems] = useState(ITEMS);

  const onSortEnd = useCallback(({ oldIndex, newIndex }) => {
    setItems((oldItems) => arrayMove(oldItems, oldIndex, newIndex));
  }, []);
  return (
    <div className="container">
      <div className="mt-5 mb-5">
        <h2>Drag and Drop Row</h2>
      </div>
      <MyTableWrapper>
        <table className="table table-light dragDropTable">
          <thead>
            <tr className="text-dark">
              <th>Id</th>
              <th>First</th>
              <th>Second</th>
              <th>Third</th>
              <th>Forth</th>
            </tr>

          </thead>
          <SortableCont
            onSortEnd={onSortEnd}
            axis="y"
            lockAxis="y"
            lockToContainerEdges={true}
            lockOffset={["30%", "50%"]}
            helperClass="helperContainerClass"
            useDragHandle={true}
          >
            {items.map((value, index) => (
              <SortableItem
                key={`item-${index}`}
                index={index}
                id={value.id}
                first={value.first}
                second={value.second}
                third={value.third}
                fourth={value.fourth}
              />
            ))}
          </SortableCont>
        </table>
      </MyTableWrapper>
    </div>
  );
};

export default MyTable;
