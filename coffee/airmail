solution = (p) ->
  o = []
  t = (a
       b
       r
       c) ->
    if e = p[a+r]?[b+c]
      for [r, c], i in [[r
                         c]
                        [r | 1
                         `r ? !c : c`]
                        [`c ? -!r : r`
                         c || -1]]
        if (e > '*' | !i) & '.' > p[a+r][b+c]
          t(a + r
            b + c
            r
            c)
    else
      o.push [x
              y
              a
              b]
      
  for a, x in p
    for b, y in a
      w = !a[y+1]
      if b < '.' && !y | w | !x | h = !p[x+1]
        t(x
          y
          !x || -h
          !y || -w)
        
  o
