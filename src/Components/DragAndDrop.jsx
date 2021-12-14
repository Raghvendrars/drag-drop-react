import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Draggable from "react-draggable";

const DragAndDrop = () => {
  const eventLogger = () => (e: MouseEvent, data: Object) => {
    console.log("Event: ", e);
    console.log("Data: ", data);
  };
  return (
    <>
      <div className="container">
        <Draggable
          axis="x"
          handle=".handle"
          defaultPosition={{ x: 0, y: 0 }}
          position={null}
          grid={[25, 25]}
          scale={1}
          onStart={handleStart}
          onDrag={handleDrag}
          onStop={handleStop}
        >
          <div>
            <div className="handle">Drag from here</div>
            <div>This readme is really dragging on...</div>
          </div>
        </Draggable>
      </div>
    </>
  );
};

export default DragAndDrop;
