# Author Details
*   Name: Nicolò Galizia
*   Contact: nicolo.galizia@edu.itspiemonte.it

## FLEXBOX DEFENSE

### ES 1
#garden {
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
    grid-column-start: 3;
}

### ES 2
#garden {
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: 20% 20% 20% 20% 20%;
}

#poison {
    grid-column-start:5;
}

### ES 3
#garden {
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
    grid-column-start: 1;
    grid-column-end:4;
}

### ES 4
#garden {
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: 20% 20% 20% 20% 20%;
}

<!-- Non ce bisogno che il valore di end sia piu alto del valore di start -->
#water {
    grid-column-start: 5;
    grid-column-end:2;
}

### ES 5
#garden {
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
    grid-column-start: 1;
    grid-column-end:5;
}

### 6
#garden {
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: 20% 20% 20% 20% 20%;
}

#poison {
    grid-column-start:-3;
}

### 7
#garden {
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
    grid-column-start: 2;
    grid-column-end: span 2;
}

### 8
#garden {
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
    grid-column-start: 1;
    grid-column-end: span 5;
}

### 9
#garden {
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
    grid-column-start: 3;
    grid-column-end: 6;
}

### 10
#garden {
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
    grid-column: 4/span 2;
}

### 11
#garden {
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
    grid-column: 2/span 3;
}

### 12
#garden {
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
    grid-row-start: 3;
}

### 13
#garden {
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
    grid-row: 3/span 3;
}

### 14
#garden {
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: 20% 20% 20% 20% 20%;
}

#poison {
    grid-column-start: 2;
    grid-row-start: 5;
}

### 15
#garden {
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
    grid-column: 2/ span 4;
    grid-row: 1 / span 5; 
}

### 16
#garden {
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
    grid-area: 1/ 2 / 4 / span 4;
}

### 17
#garden {
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: 20% 20% 20% 20% 20%;
}

#water-1 {
    grid-area: 1 / 4 / 6 / 5;
}

#water-2 {
    grid-area: 2 / 3 / span 3 / span 3;
}

### 18
#garden { 
    display: grid; 
    grid-template-columns: 20% 20% 20% 20% 20%; 
    grid-template-rows: 20% 20% 20% 20% 20%; 
} 

.water { 
    order: 0; 
} 

#poison {
    order:1;
}

### 19 
#garden {
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: 20% 20% 20% 20% 20%;
}

.water {
    order: 0;
}

.poison {
    order:-1;
}

### 20
#garden {
    display: grid;
    grid-template-columns:50%;
    grid-template-rows: 20% 20% 20% 20% 20%;
}   

#water {
    grid-column: 1;
    grid-row: 1;
}

### 21
#garden {
  display: grid;
grid-template-columns: repeat(8, 12.5%);
  grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
  grid-column: 1;
  grid-row: 1;
}

### 22
#garden {
    display: grid;
    grid-template-columns: 100px 3em 40%;
    grid-template-rows: 20% 20% 20% 20% 20%;
}

### 23
#garden {
    display: grid;
    grid-template-columns:1fr 5fr;
    grid-template-rows: 20% 20% 20% 20% 20%;
}

<!-- FIXME: Rifare questo esercizio e andare avanti con gli altri -->
### 24 
#garden {
    display: grid;
    grid-template-columns:50px 1fr 50px;
    grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
    grid-area: 1 / 1 / 6 / 2;
}

#poison {
    grid-area: 1 / 5 / 6 / 6;
}

### 25
