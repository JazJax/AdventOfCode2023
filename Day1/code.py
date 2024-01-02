import re

def extract_number(string):
    result = re.split(r'[a-z]+', string, flags=re.IGNORECASE)
    first = result[0] if len(result[0]) == 1 else result[0][0]
    last = result[-1] if len(result[-1]) == 1 else result[-1][-1]
    return int(first + last)

def load_file(filepath):
    file = open(filepath, "r")
    data = file.read()
    return data

def split_file(input):
    return input.split('\n')