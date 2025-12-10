#include "bits/stdc++.h"
#define int long long
#define fi first
#define se second
#define vi vector<int>
#define vii vector<pair<int,int>>
#define vvi vector<vector<int>>
#define vch vector<char>
#define vb vector<bool>
#define vst vector<string>
#define pi pair<int,int>
#define eb emplace_back
#define pb push_back
#define all(x) (x).begin(),(x).end()
#define allr(x) (x).rbegin(),(x).rend()
#define in(v,n) for(int i=0;i<n;i++) cin>>v[i];
#define print(v) for(auto &x:v) cout<<x<<" "; cout<<endl;
#define total(a) accumulate(all(a),0LL)
#define fo(i,n) for(decltype(n) i=0;i<n;++i)
#define re(i,n) for(decltype(n) i=n-1;i>=0;--i)
#define fo1(i,a,b) for(decltype(b) i=a;i<b;++i)
#define re1(i,a,b) for(decltype(a) i=a;i>=b;--i)
#define w(t) int t; cin>>t; while(t--)
#define debug(x) cerr << #x << " = " << x << endl
#define debugv(x) for(auto &i:x) cerr << i << " "; cerr << endl
#define mini(v) *min_element(all(v))
#define maxi(v) *max_element(all(v))
#define popcount(x) __builtin_popcountll(x)
#define bit(x) (1LL << (x))
#define lowbit(x) (x & -x)
#define checkbit(x, i) ((x >> i) & 1)
#define yesno(x) if(x) cout<<"YES"<<endl; else cout<<"NO"<<endl;
#define yes cout<<"YES"<<endl
#define no cout<<"NO"<<endl
#define MOD 1000000007
#define inf 1e9
#define endl '\n'
using namespace std;

void fastio() {
    ios::sync_with_stdio(false);
    cin.tie(NULL); cout.tie(0); cout.precision(10);
    srand(chrono::high_resolution_clock::now().time_since_epoch().count());
}

int modpow(int a, int b) {
    int res = 1;
    a %= MOD;
    while (b) {
        if (b & 1) res = res * a % MOD;
        a = a * a % MOD;
        b >>= 1;
    }
    return res;
}

void solve() {
    vector<string> v(3);
    fo(i,3)cin >> v[i];
    cout << v[0] << endl;
}

int32_t main() {
    fastio();
    w(t) solve();
    return 0;
}