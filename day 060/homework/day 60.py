def increment_string(strng):
    num = strng.rstrip("0123456789")
    digit = strng[len(num):]
    if digit == "":
        return num + "1"
    digit = str(int(digit) + 1).zfill(len(digit))
    return num + digit