solution = (a) ->
    s = 0
    for d in a % 10 + "" + a
        if e == d
            s += +d
        e = d
    s
