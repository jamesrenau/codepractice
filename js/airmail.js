o = []
solution = p => (
  t = (a, b, r, c) => {
    if (e = p[a+r] && p[a+r][b+c]) {
      z = [[r,c], [r|1, r ? !c : c], [c ? -!r : r, c || -1]]
      for (i in z) {
        r = z[i][0]
        c = z[i][1]
        if (e > '*' | !+i && '.' > p[a+r][b+c])
          t(a+r, b+c, r, c)
      }
    } else o.push([x, y, a, b])
  }, 
  p.map((a,r) => 
    a.map((b, c) => {
      w = !a[c + 1]
      h = !p[r + 1]
      if (b < '.' && !r | w | !c | h)
        t(x = r, y = c, !r || -h, !c || -w)
    })
  ) && o)
