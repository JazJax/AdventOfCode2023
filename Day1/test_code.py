from Day1.code import *

def test_extract_number():
    string = '7a6'
    assert extract_number('7a6') == 76
    assert extract_number('77a6') == 76
    assert extract_number('75a56') == 76
    assert extract_number('077s64993jjfwjwfa6666666') == 6

def test_load_file():
    filepath = 'test_input.txt'
    result = load_file(filepath)
    print(result)
    assert result == """nine92jnhgqzctpgbcbpz
sevensddvc73three
9986fmfqhdmq8"""

def test_split_inputs():
    input = """nine92jnhgqzctpgbcbpz
sevensddvc73three
9986fmfqhdmq8"""
    result = split_inputs(input)
    assert result[0] == 'nine92jnhgqzctpgbcbpz'
    assert result[-1] == '9986fmfqhdmq8'
    assert len(result) == 3

def test_sum_inputs():
    input = ['nine92jnhgqzctpgbcbpz','9986fmfqhdmq8']
    assert extract_number(input[0]) == 92
    assert extract_number(input[1]) == 98
    assert sum_inputs(input) == 190

def test_process_file():
    filepath  = 'test_input.txt'
    assert process_file(filepath) == 263

def test_find_next_numberstring():
    # string = 'xtwone3four'
    # assert parse_numbers(string) == 'x2ne34'

    test_cases = {
        'two':2, 'three':3, 'xtwo':2, 'xtwox':2,
        '8jdeqw89joneone':1, 'oneight':1, 'sixteen':6
    }

    for key, value in test_cases.items():
        print(f'Testing {key} returns {value}')
        assert find_next_numberstring(key) == value