/*
Program to convert from yelp time table to [[key, [key, vallue]]
Compile with g++ formathours.cpp -o format
Paste yelp formatted text into a .txt file, remove lines that say "closed now" or "open now"
Run the program with ./format <text file name>
The excel formatted text will appear in output.txt.
*/

#include <iostream>
#include <fstream>
#include <string>
#include <cctype>
#include <sstream>
using namespace std;

void upper(string& in) {
    for (int i = 0; i < in.length(); i++) {
        in[i] = toupper(in[i]);
    }
    return;
}

string to24(istream& in) {
    string hour_s;
    string ampm;
    string out;
    in >> hour_s;
    hour_s.erase(hour_s.find(':'), 1);
    stringstream ss(hour_s);
    int hour;
    ss >> hour;
    in >> ampm;
    if (ampm == "PM") {
        hour += 1200;
    }
    out = to_string(hour);
    while (out.length() != 4) {
        out = '0' + out;
    }
    return out;
}

string formatday(istream& in) {
    string buffer = "";
    string out = "[";
    in >> buffer;
    upper(buffer);
    out += buffer + ", [" + to24(in) + ", ";
    buffer = "";
    getline(in, buffer, '-');
    out += to24(in) + "]]";
    return out;
}

int main(int argc, char** argv) {
    ifstream ifile(argv[1]);
    if (ifile.fail()) {
        cout << "could not read file\n";
        return -1;
    }
    string out = "[";
    out += formatday(ifile);
    for (int i = 0; i < 6; i++) {
        out += ", " + formatday(ifile);
    }
    out += ']';
    ofstream ofile("output.txt");
    ofile << out; 
    
    return 0;
}