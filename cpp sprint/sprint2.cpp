#include<iostream>

using namespace std;

int main() {
    int arr[] = {10, 20, 30, 40, 50};
    int max = 0, min = INT16_MAX;
    for(int i=0; i<5; i++) {
        if(arr[i] > max){
            max = arr[i];
        }
        if(arr[i] < min) {
            min = arr[i];
        }
    }
    cout << "MAX:" << max << " & " << "MIN: " << min << endl;
    return 0;
}