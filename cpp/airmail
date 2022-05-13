vector<vector<int>> r, solution(auto p) {
    int n = p.size()-1, m=p[0].size()-1,g,h,i,j,s,t,d;
    for(;g<=n; g++)
        for(h=0;h<=m; h++) 
            if(p[g][h]-46 && (!(g%n) + !(h%m))) {
                i=g;
                j=h;
                d=i?i-n?j?6:2:0:4;
                do
                    for(int x:{0,1,6}) 
                        if(p[s=i+"  	222	 "[d=(d+x)%8]%8-1][t=j+"	222	   "[d]%8-1]==42) {
                            i=s;
                            j=t;
                            break;
                        }
                while (i%n && j%m);                
                r.push_back({g,h,i,j});
            }

    return r;
}
