from code import *

def Day_1a():
    """
    I need to recover specific values from a list.
    The value for each line is the combo of the first and last digit, like so:

    1abc2       -> 12
    pqr3stu8vwx -> 38
    a1b2c3d4e5f -> 15
    treb7uchet  -> 77

    Find the sum of all calibration values
    """
    print(f"The sum of all calibration values is: {process_file('input.txt')}")

if __name__ == "__main__":
    Day_1a()