AUTOLOAD {
	*q = pop;
    .001 * int .5+1e5/@q*grep {($_,$x)=@$_; eval s/x/"*$x"/er =~ s/=/==/r} @q
}
