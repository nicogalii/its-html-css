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

### ES 6
#garden {
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: 20% 20% 20% 20% 20%;
}

#poison {
    grid-column-start:-3;
}

### ES 7
#garden {
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
    grid-column-start: 2;
    grid-column-end: span 2;
}

### ES 8
#garden {
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
    grid-column-start: 1;
    grid-column-end: span 5;
}

### ES 9
#garden {
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
    grid-column-start: 3;
    grid-column-end: 6;
}

### ES 10
#garden {
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
    grid-column: 4/span 2;
}

### ES 11
#garden {
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
    grid-column: 2/span 3;
}

### ES 12
#garden {
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
    grid-row-start: 3;
}

### ES 13
#garden {
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
    grid-row: 3/span 3;
}

### ES 14
#garden {
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: 20% 20% 20% 20% 20%;
}

#poison {
    grid-column-start: 2;
    grid-row-start: 5;
}

### ES 15
#garden {
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
    grid-column: 2/ span 4;
    grid-row: 1 / span 5; 
}

### ES 16
#garden {
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
    grid-area: 1/ 2 / 4 / span 4;
}

### ES 17
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

### ES 18
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

### ES 19 
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

### ES 20
#garden {
    display: grid;
    grid-template-columns:50%;
    grid-template-rows: 20% 20% 20% 20% 20%;
}   

#water {
    grid-column: 1;
    grid-row: 1;
}

### ES 21
#garden {
  display: grid;
grid-template-columns: repeat(8, 12.5%);
  grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
  grid-column: 1;
  grid-row: 1;
}

### ES 22
#garden {
    display: grid;
    grid-template-columns: 100px 3em 40%;
    grid-template-rows: 20% 20% 20% 20% 20%;
}

### ES 23
#garden {
    display: grid;
    grid-template-columns:1fr 5fr;
    grid-template-rows: 20% 20% 20% 20% 20%;
}

### ES 24 
#garden {
  display: grid;
grid-template-columns: 50px 1fr 1fr 1fr 50px; 
  grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
  grid-area: 1 / 1 / 6 / 2;
}

#poison {
  grid-area: 1 / 5 / 6 / 6;
}

### ES 25
#garden {
    display: grid;
    grid-template-columns: 75px 3fr 2fr;
    grid-template-rows: 100%;
}

### ES 26
#garden {
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: 50px 0px 0px 0px 1fr;
}

#water {
    grid-column: 1 / 6;
    grid-row: 5 / 6;
}

### ES 27
#garden {
    display: grid;
    grid-template: 60% / 200px
}

#water {
    grid-column: 1;
    grid-row: 1;
}

### ES 28
#garden {
    display: grid;
    grid-template: 1fr 50px/ 20% 1fr;
}
