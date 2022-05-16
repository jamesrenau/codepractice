def solution q
    q.sum { |s, r|
        s[?=] = '=='
        s[?x] = ?* + r
        
        eval(s) ? 100.0 / q.size : 0
    }.round 3
end
