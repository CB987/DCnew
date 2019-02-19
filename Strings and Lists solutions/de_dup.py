
# Just generating the sequence of letters/numbers
seq = []
jumble = "123abcdabcd123xyz987"
index = 0
while index < len(jumble):
  letter = jumble[index]
  index = index + 1
  seq.append(letter)

# Create a variable for a new sequence
new_seq = []

# Iterate through our sequence
index = 0
while index < len(seq):
  current_letter = seq[index]
  index = index + 1
  # If the current letter is not in the sequence,
  # add it.
  if current_letter not in new_seq:
    new_seq.append(current_letter)
print(new_seq)