//  Intersaction type

type Draggable = {
    drag: () => void;
}
type Resizable = {
    resize: () => void;
}

// use multiple type using intersection
type UIWedget = Draggable & Resizable;

let textBox: UIWedget = {
    drag: () => {},
    resize: () => {}
}