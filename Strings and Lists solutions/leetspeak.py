# text = "hello world"
text = input("Please enter a phrase: ")
letters_to_convert = ['A', 'E', 'G', 'I', 'O', 'S', 'T']
numbers            = [ 4,   3,   6,   1,   0,   5,   7]

translation = ""

uppercased_text = text.upper()

i = 0
while i < len(uppercased_text):
  letter = uppercased_text[i]
  i = i + 1
  # print("the letter is ", letter)
  # print("the index is ", letters_to_convert.index(letter))
  counter = 0
  letter_to_add_to_translation = ""
  j = 0
  while j < len(letters_to_convert):
    letter_to_convert = letters_to_convert[j]
    j = j + 1
    # print("looking at ", letter_to_convert)
    if letter == letter_to_convert:
      # print("\n********** found it! %s \n\n" % letter)
      # print("want to replace with %s" % numbers[counter])
      # translation = translation + str(numbers[counter])
      letter_to_add_to_translation = str(numbers[counter])
      break # dear self, break out of loop after finding good replacement
      # otherwise, you overwrite with the original letter
    else:
      # print("just use", letter)
      # translation = translation + letter
      letter_to_add_to_translation = letter

    counter = counter + 1
  translation = translation + letter_to_add_to_translation
print(translation)
