#include<iostream>
#include<string>

using namespace std;

int main() {
    string str="RecursionIsFun";
    int count = 0;
    for(int i=0; i<=str.length(); i++) {
        char ch = str[i];
        if (ch =='a' || ch =='e' || ch =='i' || ch =='o' || ch == 'u' || ch =='A' || ch =='E' || ch =='I' || ch =='O' || ch =='U')
        {
            count++;
        }
    }
    cout << "Number of vowels: " << count << endl;
    return 0;
}