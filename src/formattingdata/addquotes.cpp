/*
Program to add quotation marks around each element of a string array
i.e. [Matcha Latte, Hazelnut Iced Coffee, Honey Latte] -> ["Matcha Latte", "Hazelnut Iced Coffee", "Honey Latte"]
Using an input .txt file and outputting the formatted array into "output.txt"
*/

#include <iostream>
#include <fstream>
#include <string>
#include <cctype>
#include <sstream>
using namespace std;

int main(int argc, char** argv) {
    ifstream ifile(argv[1]);
    if (ifile.fail()) {
        return -1;
    }
    string out;
    ofstream ofile("output.txt");
    int j;

    for (int i = 0; i < 43; i++) {
        j = 0;
        getline(ifile, out);
        while(j < out.length()){
            if(out[j] == ','){
                out.insert(j, "\"");
                out.insert(j+3, "\"");
                j+=3;

            }
            else if(out[j] == '['){
                out.insert(j+1, "\"");
                j+=2;
            }
            else if(out[j] == ']'){
                out.insert(j, "\"");
                j+=2;
            }
            else{
                j++;
            }
        }        
        
        ofile << out << endl; 
        out = "";
    }
    
    
    
    return 0;
}