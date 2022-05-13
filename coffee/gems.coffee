solution = (n) ->
    a = b = 1
    while n--
        b += a + a=b
        b %= 1e9+7
    b
