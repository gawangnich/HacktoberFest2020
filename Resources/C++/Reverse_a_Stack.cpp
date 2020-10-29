#include<bits/stdc++.h>
using namespace std;
void reverse(char *str, int len);
int main()
{
    long long int t;
    cin>>t;
    while(t--)
    {
        char str[10000];
        cin>>str;
        long long int len=strlen(str);
        reverse(str,len);
        cout<<str;
        cout<<endl;
    }
        return 0;
}
// } Driver Code Ends


void reverse(char *str, int len)
{

    stack<char>stk;
    int i=0;
    for(int i=0;i<len;i++)
    {
        stk.push(str[i]);
    }
    i=0;
    while(!stk.empty())
    {
        str[i++]=stk.top();
        stk.pop();
        
    }
    str[i] = '\0';

}