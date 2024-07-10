1. `ul li {}`:
Specifity is (0,0,2).
`ul` is an element with specifity of (0,0,1) and `il` is an element with specifity of (0,0,1).


2. `ul > li {}`:
Specifity is (0,0,2), the element combinator `>` not change the specifity.
`ul` is an element with specifity of (0,0,1) and `il` is an element with specifity of (0,0,1).


3. `body > #main.mobile a:hover {}`:
Specifity is (1,2,2), the element combinator `>` not change the specifity.
`body` is an element with specifity of (0,0,1), `#main` is an element id with specifity (1,0,0) that is combinated whit an element class `.mobile` with specifity (0,1,0), `a` is an element with specifity (0,0,1) and, enfine, `:hover` is an element pseudo-class that has the specifity as an element class (0,1,0).


4. `div p > span {}`:
Specifity is (0,0,3), the element combinator `>` not change the specifity.
`div`, `p` and `span` are elements with specifity of (0,0,1).


5. `.users .name {}`:
Specifity is (0,0,3).
`.users` and `.name` are elements classes with specifity of (0,0,1).


6. `[href$='.pdf'] {}`:
Specifity is (0,1,0).
`href` is element attribute that has the specifity as a class (0,1,0).

7. `:hover {}`:
Specifity is (0,1,0).
`:hover` is an element pseuso-class whit specifity (0,0,1).

8. `div .name {}`:
Specifity is (0,1,1).
`div` is an element with specifity (0,0,1) and `.name` is an element class with specifity (0,1,0).

9. `a[href$='.pdf'] {}`:
Specifity is (0,1,1).
`a` is an element with specifity (0,0,1) and `href` is an element attribute with specifity (0,1,0).

10. `.pictures img:hover {}`:
Specifity is (0,2,1).
`.pictures` is an element class with specifity (0,1,0), `img` is an element with specifity (0,0,1) and `:hover` is an element pseudo-class with specifity (0,1,0).

11. `.news.breaking.featured {}`:
Specifity is (0,3,0).
`.news` is an element class with specifity (0,1,0) that is combinated with an element class `.breaking` with specifity (0,1,0) that is combinated with an element class `.featured` with specifity (0,1,0).

12. `.user #name {}`:
Specifity is (1,1,0).
`.user` is an element class with specifity of (0,1,0) and `#name` is an element class with specifity of (0,1,0).

13. `#name span {}`:
Specifity is (1,0,1).
`#name` is an element class with specifity of (1,0,0) and `span` is an element with specifity of (0,0,1).

14. `nav#nav > li:hover {}`:
Specifity is (1,1,2).
`nav` is an element with specifity of (0,0,1), `#nav` is an element id with specifity of (1,0,0), `li` is an element id with specifity of (0,0,1) and `:hover` is an element pseudo-class with specifity (0,1,0).


15. `li:nth-child(2n+1):hover {}`:
Specifity is (0,2,1).
`li` is an element with specifity of (0,0,1), `:nth-child` is an element class with specifity of (0,1,0) and `:hover` is an element pseudo-class with specifity (0,1,0).

