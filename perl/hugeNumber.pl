AUTOLOAD {
    join("", sort {$b.$a cmp $a.$b} @{+pop}) =~ s/^00//r
}
