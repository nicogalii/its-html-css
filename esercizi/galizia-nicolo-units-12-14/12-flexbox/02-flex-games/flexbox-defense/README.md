# Author Details
*   Name: Nicolò Galizia
*   Contact: nicolo.galizia@edu.itspiemonte.it

## FLEXBOX DEFENSE

### ES 1
.tower-group-1 {
    display: flex;
    justify-content: center;
}
### ES 2
.tower-group-1 {
    display: flex;
    justify-content: flex-end;
}
.tower-group-2 {
    display: flex;
    justify-content: center;
}
.tower-group-3 {
    display: flex;
    justify-content: flex-end;
}

### ES 3
.tower-group-1 {
    display: flex;
    justify-content: center;
}
.tower-group-2 {
    display: flex;
    justify-content: space-between;
}

### ES 4
.tower-group-1 {
    display: flex;
    align-items: flex-end;
}
.tower-group-2 {
    display: flex;
    align-items: flex-end;
}

### ES 5
.tower-group-1 {
    display: flex;
    align-items:flex-end;
    justify-content: space-around;
}
.tower-group-2 {
    display: flex;
    justify-content: center;
}
.tower-group-3 {
    display: flex;
    justify-content:space-around;
    align-items: center;
}

### ES 6
.tower-group-1 {
    display: flex;
    justify-content: space-between;
    align-items: center;
}


### ES 7
.tower-group-1 {
    display: flex;
    flex-direction: column;
}
.tower-group-2 {
    display: flex;
    flex-direction: column;
}

### ES 8
.tower-group-1 {
    display: flex;
    flex-direction: column;
}
.tower-group-2 {
    display: flex;
    flex-direction: column;
    align-items: center;
}

### ES 9
.tower-group-1 {
    display: flex;
    justify-content: space-around;
    flex-direction: row-reverse;
}
.tower-group-2 {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row-reverse;
}

### ES 10
.tower-group-1 {
    display: flex;
    justify-content: space-around;
}
.tower-1-1 {
    order:1;
}
.tower-1-2 {
    order:3;
}
.tower-1-3 {
    order:2;
}
.tower-group-2 {
    display: flex;
    justify-content: space-around;
}
.tower-2-1 {
    order:3;
}
.tower-2-2 {
    order:1;
}
.tower-2-3 {
    order:2;
}

### ES 11
.tower-group-1 {
    display: flex;
    justify-content: space-between;
}
.tower-1-1 {
    align-self: flex-end;
}
.tower-1-2 {
    align-self: flex-start;
}
.tower-1-3 {
    align-self: flex-end;
}
.tower-1-4 {
    align-self: flex-start;
}

### ES 12
.tower-group-1 {
    display: flex;
    justify-content: space-between;
}
.tower-1-1 {
    order:1;
}
.tower-1-2 {
    order:2;
    align-self:center;
}
.tower-1-3 {
    order:4;
    align-self:center;
}
.tower-1-4 {
    order:3;
    align-self: center;
}
.tower-1-5 {
    align-self: flex-end;
    order:5;
}  