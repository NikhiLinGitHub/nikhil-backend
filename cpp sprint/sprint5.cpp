#include<iostream>

using namespace std;

int main() {
    int scores[] = {85, 90, 78, 92, 88};
    int n = sizeof(scores) / sizeof(scores[0]);
    int highest = scores[0];
    int lowest = scores[0];
    int sum = 0;
    double average;
    char grade;

    for (int i = 0; i < n; i++)
    {
        sum += scores[i];
        if (scores[i] > highest)
        {
            highest = scores[i];
        } else if (scores[i] < lowest) {
            lowest = scores[i];
        }
        average = double(sum)/n;
        
        if (average >= 90)
        {
            grade = 'A';
        } else if (average >= 80) {
            grade = 'B';
        } else if (average >= 70) {
            grade = 'C';
        } else {
            grade = 'D';
        }
    }
    cout << "Highest Score " << highest <<endl;
    cout << "Lowest Score " << lowest <<endl;
    cout << "Average Score " << average <<endl;
    cout << "Grade " << (char)tolower(grade) <<endl;
    return 0;
}