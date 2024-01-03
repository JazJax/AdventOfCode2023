import re

def extract_number(string):
    numbers_only = re.split(r'[a-z]+', string, flags=re.IGNORECASE)
    characters = list(''.join(numbers_only))
    return int(characters[0] + characters[-1])

def load_file(filepath):
    file = open(filepath, "r")
    data = file.read()
    return data

def split_inputs(input):
    return input.split('\n')

def sum_inputs(input_array):
    result = 0
    for input in input_array:
        result += extract_number(input)
    return result

def process_file(filepath):
    file = load_file(filepath)
    input_array = split_inputs(file)
    return sum_inputs(input_array)