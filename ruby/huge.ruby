def solution n
    "%i" % n.sort{|a,b| b+a <=> a+b }.join
end
