# Author Details
*   Name: Nicolò Galizia
*   Contact: nicolo.galizia@edu.itspiemonte.it

## ALIEN FROGS

### Description
-   On an alien planet you find alien frogs
    -   Two types: green and orange
    -   And two sizes: big and small
    -   Small frogs have dark eyes
    -   Big frogs have bright eyes
    -   When frogs are touched their eyes become black
- See next page for technical details
- See frogs.gif animation for behaviors
-   Create a page full of all possible combinations of alien frogs
-   Frogs should fill the page from left to right
-   Frogs should wrap if there isn't enough space
-   All frogs should change their eye color to black when touched
-   The HTML should be valid and complete


## Approach to Solution

### Styles for 'frog':
- Adds a solid black border and rounds the corners
- View element as inline-block and set relative position
- Set font size to 2 rem
- Adds margins of 60 pixels on the top and bottom and 120 pixels on the sides
- Vertically align and center text within element
- Width of 300 pixels, height of 150 pixels

### Dimensions for 'small':
- .small: 200 pixels wide and 100 pixels tall.

### Color Styles 'type1' and 'type2':
- type1: bright orange background.
- type2: green background.

### Frog Eyes:
- use ::before and ::after pseudo-elements to create eyes with "O" content.
- Eyes with black borders, circular shape, centered text and various background colors.
- Eye placement and size vary to frogs.

### Eye Colors:
- type1: eyes with light red background and black text.
- type2: eyes with light green background and black text.
- type1.small: dark red eyes.
- type2.small: green eyes.


### Hover Effects:
- Change eye color to black with white text on hover.
- The cursor changes to a pointer when hovering over frogs, indicating interactivity.

## files
* index.html
* style.css
* reset.css