
#include<iostream>
#include<string>

using namespace std;

int main() {
    string str = "HelloWorld";
    char reversed[str.length()];
    for(int i = 0; i < str.length(); i++){
        reversed[i] = str[str.length() - i - 1];
    }
    reversed[str.length()] = '\0';
    string reversedStr(reversed);
    cout<< "Reversed String: "<< reversedStr << endl;
    return 0;
}

