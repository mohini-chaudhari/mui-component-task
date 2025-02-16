import { useState } from "react";
import {
  SortableContext,
  rectSortingStrategy,
  useSortable,
  sortableKeyboardCoordinates,
  arrayMove,
} from "@dnd-kit/sortable";
import {
  DndContext,
  PointerSensor,
  KeyboardSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { Box, Container, Typography } from "@mui/material";

const listItems = [
  { id: 1, text: "Full Stack developer" },
  { id: 2, text: "Frontend developer" },
  { id: 3, text: "Backend developer" },
  { id: 4, text: "IoS developer" },
  { id: 5, text: "Flutter developer" },
  { id: 6, text: "UI/UX designer" },
];

const SortableItem = (props) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    border: "1px solid",
    padding: "1em",
    margin: "1em 0",
    width: " 10em",
  };
  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {props.text}
    </div>
  );
};

function DragAndDrop() {
  const [items, setItems] = useState(listItems);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = ({ active, over }) => {
    if (!over) {
      return;
    }

    if (active.id == over.id) {
      return;
    }

    setItems((items) => {
      return arrayMove(
        items,
        items.findIndex((it) => it.id == active.id),
        items.findIndex((it) => it.id == over.id)
      );
    });
  };

  return (
    <Container maxWidth="xl" sx={{ mt: 4}} >
      <Typography variant="h4" align="center" gutterBottom>
        Drag and Drop
      </Typography>

      <Box sx={{ display:'flex',flexDirection:'column',textAlign: "center",alignItems:'center' }}>
        <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
          <SortableContext items={items} strategy={rectSortingStrategy}>
            {items.map((item) => (
              <SortableItem key={item.id} id={item.id} text={item.text} />
            ))}
          </SortableContext>
        </DndContext>
      </Box>
    </Container>
  );
}

export default DragAndDrop;
