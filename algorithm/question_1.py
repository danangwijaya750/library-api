def reverse_alphabet(input_str):
    letters = ''.join(filter(str.isalpha, input_str))
    numbers = ''.join(filter(str.isdigit, input_str))
    reversed_letters = letters[::-1]
    return reversed_letters + numbers

print(reverse_alphabet("NEGIE1")) 