solution = p => {
    g = []
    
    for (k in '     ')
        g[k] = [
            x = p[k *= 2],
            y = p[++k],
            x * x,
            x * y,
            y * y,
            1
        ]
    
    for (k in g) {
        l = i = k
        while (!g[i][l] && 
               ++i > 4)
            ++l
        
        x = g[i]
        g[i] = g[k]
        g[k] = x = x.map(f => f / x[l])
        
        for (y of g)
            k-- && 
                x.map((f, j) => 
                    y[j] -= z * f,
                    z = y[l]
                )
    }
    
    [d, e, a, b, c] = g.map(x => x[5])

    t = 4 * a * c - 
        b * b
    r = 
    q = t + 
        a * e * e - 
        b * d * e + 
        c * d * d
    u = Math.hypot(b, a - c)
    
    r*= u + a + c
    r*= 4 * r - 
        8 * u * q
    
    return Math.PI / t / t * r ** .5
}
