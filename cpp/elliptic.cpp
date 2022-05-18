int n = points.size()/2;
    
    vector<vector<int>> M;
    for (int i = 0; i < n; ++i) {
        int x = points[2*i];
        int y = points[2*i+1];
        M.push_back({x*y,y*y,x,y,1});
    }
    double detM = det(M);
    vector<vector<vector<int> > > coefs(n,M);
    for (int c = 0; c < n; ++c)
        for (int i = 0; i < n; ++i) {
            int x = points[2*i];
            coefs[c][i][c] = -x*x;
        }
    double c_xx = 1;
    double c_xy = det(coefs[0])/detM;
    double c_yy = det(coefs[1])/detM;
    double c_x = det(coefs[2])/detM;
    double c_y = det(coefs[3])/detM;
    double c_1 = det(coefs[4])/detM;
    double scaleFactor = 1;

    if (c_xy) {
        double j = c_xy;
        double k = c_yy;
        double l = c_x;
        double m = c_y;
        double n = c_1;
        // need to transform coordinates
        double a = ((k-1)+hypot(k-1,j))/j;
        c_xx = k*a*a+j*a+1;
        c_xy = 0;
        c_yy = a*a-j*a+k;
        c_x = l+m*a;
        c_y = l*a-m;
        c_1 = n;
        scaleFactor = 1 + a*a;
    }

    // c_xx x^2 + c_x x + c_x^2/(4c_xx) is const*square
    double C = c_x*c_x/4/c_xx + c_y*c_y/4/c_yy - c_1;

    // axes:
    // sqrt(C/c_xx)
    // sqrt(C/c_yy)

    return M_PI*C/sqrt(c_xx*c_yy)*scaleFactor;
}
