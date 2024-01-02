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

def test_split_file():
    input = """nine92jnhgqzctpgbcbpz
sevensddvc73three
9986fmfqhdmq8"""
    result = split_file(input)
    assert result[0] == 'nine92jnhgqzctpgbcbpz'
    assert result[-1] == '9986fmfqhdmq8'
    assert len(result) == 3

def test_sum_file():
    input = ['nine92jnhgqzctpgbcbpz','9986fmfqhdmq8']
    assert extract_number(input[0]) == 92
    assert extract_number(input[1]) == 98