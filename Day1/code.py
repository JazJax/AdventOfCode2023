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

def find_next_numberstring(string):
    digits = {
        'one': 1, 'two': 2, 'three': 3,
        'four': 4, 'five': 5, 'six': 6,
        'seven': 7, 'eight': 8, 'nine': 9
    }
    first_letters = ['o','t','f','s','e','n']
    input_length = len(string)

    for i, character in enumerate(string):
        substr_len = 1
        if character not in first_letters:
            continue
        while i + substr_len <= input_length:
            substr = string[i:i+substr_len]
            if substr in digits:
                return digits.get(substr)
            substr_len += 1

    return '##'