#include<iostream>

using namespace std;

int main() {
    int arr[] = {3, 5, 2, 1, 4};
    int smallest = arr[0];
    for(int i = 0; i < 5; i++){
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    cout << "Smallest Element: " << smallest << endl;
    return 0;
}