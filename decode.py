code = str(input("Enter your plain text code: "))

cipher = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o',
    'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
]

change = int(input("What is the step: "))


def encode(code: str, change: int) -> str:
    for char in code:
        idx = cipher.index(char)
        code = code.replace(char, cipher[idx + change])

    return code


def decode(code: str, change: int) -> str:
    for char in code:
        idx = cipher.index(char)
        code = code.replace(char, cipher[idx - change])

    return code


code = encode(code, change)
print(code)
code = decode(code, change)
print(code)
