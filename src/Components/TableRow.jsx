import React from "react";
import { SortableHandle } from "react-sortable-hoc";
import styled from "styled-components";

const TrWrapper = styled.tr`
  background: white;
  cursor: default;

  .firstElement {
    display: flex;
    flex-direction: row;
  }

  &.helperContainerClass {
    width: auto;
    border: 1px solid #efefef;
    box-shadow: 0 5px 5px -5px rgba(0, 0, 0, 0.2);
    background-color: transparent;
    border-radius: 3px;

    &:active {
      cursor: grabbing;
    }

    & > td {
      padding: 5px;
      text-align: left;
      width: 200px;
    }
  }
`;

const Handle = styled.div`
  margin-right: 10px;
  padding: 0 5px;
  cursor: grab;
  border:1px solid black;
  background:black;
  color:black;
`;

const RowHandler = SortableHandle(() => <Handle className="handle">|</Handle>);

const TableRow = ({id, first, second, third, fourth, className }) => {
    console.log(TableRow)
    return (
        <TrWrapper className={className}>
            <td>
                <div className="firstElement">
                    <RowHandler className="grabtodrag" />
                    {id}
                </div>
            </td>
            <td>
                {first}
            </td>
            <td>{second}</td>
            <td>{third}</td>
            <td>{fourth}</td>
        </TrWrapper>
    );
};

export default TableRow;
