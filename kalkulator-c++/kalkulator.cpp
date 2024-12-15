#include <iostream>
using namespace std;

int main() {
    double num1, num2, result;
    char op;

    cout << "Podaj pierwszą liczbę: ";
    cin >> num1;

    cout << "Podaj operator (+, -, *, /): ";
    cin >> op;

    cout << "Podaj drugą liczbę: ";
    cin >> num2;

    switch (op) {
        case '+':
            result = num1 + num2;
            cout << "Wynik: " << result << endl;
            break;
        case '-':
            result = num1 - num2;
            cout << "Wynik: " << result << endl;
            break;
        case '*':
            result = num1 * num2;
            cout << "Wynik: " << result << endl;
            break;
        case '/':
            if (num2 != 0) {
                result = num1 / num2;
                cout << "Wynik: " << result << endl;
            } else {
                cout << "Error: Nie mozna przez zero!" << endl;
            }
            break;
        default:
            cout << "Error" << endl;
    }

    return 0;
}
