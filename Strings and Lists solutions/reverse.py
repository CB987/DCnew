
original = "here i am"
new_text = ""

length = len(original) - 1
i = 0
while i < (length + 1):
  # print(length - i)
  new_text = new_text + original[length - i]
  i = i + 1

print(new_text)