#include <iostream>
using namespace std;

int tukar(int *a, int *b){
    int temp=*b;
    *b=*a;
    *a=temp;
}
int main()
{
    int a[]={5,12,58,9,6,8,2},indeks,maks;
    int asize=sizeof(a)/sizeof(a[0]);
    for(int i=0;i<asize;i++){
        indeks=i;
        for(int j=i;j<asize;j++){
            if(a[indeks]<a[j]){
                indeks=i;
            }
            tukar(&a[i],&a[indeks]);
        }
    }
    for(int i=0;i<asize;i++){
        cout<<a[i]<<" ";
    }
}
