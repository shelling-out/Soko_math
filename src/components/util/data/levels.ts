let levels = [
  [
    [".", "#", "#", "#", "."],
    ["#", "#", "=", "#", "#"],
    ["#", "1$", "$", "1$", "#"],
    ["#", "#", "#", "#", "#"],
    [".", ".", ".", ".", "."],
  ],
  [
    [".", ".", ".", ".", ".", "."],
    ["#", "#", "#", "#", "#", "#", "#"],
    ["#", "4", "$", "$", "$", "4", "#"],
    ["#", "#", "#", "=", "#", "#", "#"],
    [".", ".", "#", "#", "#", ".", "."],
    [".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", "."],
  ],
  [
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    ["#", "#", "#", "#", "#", "#", "#", "#"],
    ["#", "$", "$", "1$&", "$", "$", "3", "#"],
    ["#", "2", "+", "#", "=", "#", "#", "#"],
    ["#", "#", "#", "#", "#", "#", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
  ],
  [
    [".", "#", "#", "#", "."],
    ["#", "#", "1$", "#", "#"],
    ["#", "2$", "2$", "1$", "#"],
    ["#", "#", "=$", ".", "#"],
    [".", "#", "#", "#", "#"],
  ],
  [
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    ["#", "#", "#", "#", "#", "#", "#", "#", "#"],
    ["#", "+$", "$", "$", "$", "=$", "2", "1", "#"],
    ["#", "3", "#", "#", ".", "#", "#", "#", "#"],
    ["#", "#", "#", "#", "#", "#", "#", "#", "#"],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
  ],
  [
    ["#", "#", "#", ".", ".", "."],
    ["#", "=", "#", "#", "#", "."],
    ["#", "3", ".", ".", "#", "."],
    ["#", "3", "#", ".", "#", "."],
    ["#", "$", "$", "$", "#", "."],
    ["#", "#", "#", "#", "#", "."],
  ],
  [
    [".", ".", ".", ".", ".",".",".","."],
    ["#", "#", "#", "#", "#", "#", "#", "#"],
    ["#", "2$", ".", ".", "$", "$", "2$&", "#"],
    ["#", "1$", "#", ".", "#", "#", "=", "#"],
    ["#", "=$", "#", ".", ".", ".", "1", "#"],
    ["#", "#", "#", "#", "#", "#", "#", "#"],
    [".", ".", ".", ".", ".",".",".","."],
    [".", ".", ".", ".", ".",".",".","."],
  ],
  [
    [".", "#", "#", "#", "#", "#", "."],
    ["#", "#", ".", ".", ".", "#", "#"],
    ["#", "-$", "1$", "$", "$", "3$&", "#"],
    ["#", "#", "4", ".", "#", "#", "#"],
    [".", "#", "=", "#", "#", ".", "."],
    [".", "#", "#", "#", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", "."],
  ],
  [
    [".", ".", ".", ".", ".", ".", "."],
    ["#", "#", "#", "#", "#", "#", "#"],
    ["#", "8$&", "3$", "+$", "=$", "5$", "#"],
    ["#", "#", "=", "$", "3$&", "3$&", "#"],
    [".", "#", "#", "#", "#", "#", "#"],
    [".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", "."],
  ],
  [
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    ["#", "#", "#", "#", "#", "#", "#", "#", "#"],
    ["#", "1", ">", "2$", ">$", "3$", "$", "$", "#"],
    ["#", "#", "#", ".", ".", "#", "#", "#", "#"],
    [".", ".", "#", "#", "#", "#", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
  ]
];
export default levels;
/*
    . : empty
    # : block
    $ : final destination
    & : locked in place

    [1..9]$ : number in final destination
    [1..9]& : number locked in place
    [1..9]$& : number locked and it is a final destination 
*/
