# genertate a list of numbers

import random
numbers = []
n = 0
while n < 10:
    numbers.append(random.randint(1, 100))
    n = n + 1

# alternatively, check the length of the list
# numbers = []
# while len(numbers) < 10:
#     numbers.append(random.randint(1, 100))



print("\n\n\n")
print("#### sum ####")



print(numbers)
sum = 0
index = 0
while index < len(numbers):
    n = numbers[index]
    sum = sum + n
    index = index + 1

print("sum %d" % sum)


print("\n\n\n")
print("#### largest numbers ####")


largest = 0
index = 0
while index < len(numbers):
    n = numbers[index]
    if n > largest:
        largest = n
    index = index + 1

print(largest)

print("\n\n\n")
print("#### smallest ####")


smallest = 1000
index = 0
while index < len(numbers):
    n = numbers[index]
    if n < smallest:
        smallest = n
    index = index + 1

print(smallest)


print("\n\n\n")
print("#### positive numbers ####")

numbers = []
index = 0
while len(numbers) < 10:
    numbers.append(random.randint(-100, 100))

print(numbers)

index = 0
while index < len(numbers):
    n = numbers[index]
    if n > 0:
        print(n)
    index = index + 1

print("\n\n\n")
print("#### positive numbers II ####")
positives = []
index = 0
while index < len(numbers):
    n = numbers[index]
    if n > 0:
        positives.append(n)
    index = index + 1
print(positives)

print("\n\n\n")
print("#### multiply a list ####")
numbers = []
while len(numbers) < 10:
    numbers.append(random.randint(1, 100))
print(numbers)
factor = random.randint(1, 100)
print("factor: %d" % factor)

factored_list = []
index = 0
while index < len(numbers):
    n = numbers[index]
    factored_list.append(n * factor)
    index = index + 1
print(factored_list)

print("\n\n\n")
print("#### multiply vectors ####")
LENGTH_OF_LIST = 3
list1 = []
list2 = []
while len(list1) < LENGTH_OF_LIST:
    list1.append(random.randint(1, 10))
    list2.append(random.randint(1, 10))
print("%s x %s " % (list1, list2))

products = []
index = 0
while index < len(list1):
    product = list1[index] * list2[index]
    products.append(product)
    index = index + 1
print(products)

print("\n\n\n")
print("#### matrix addition (2) ####")

NUMBER_OF_MATRICES = 4
LENGTH_OF_LIST = 4
matrices = []

while len(matrices) < NUMBER_OF_MATRICES:    
    matrix = []
    while len(matrix) < LENGTH_OF_LIST:
        matrix_element = []
        while len(matrix_element) < LENGTH_OF_LIST:
            matrix_element.append(random.randint(1, 10))
        matrix.append(matrix_element)
    matrices.append(matrix)

print("%s " % (matrices,))


# create new matrix, all zeros
new_matrix = []
while len(new_matrix) < LENGTH_OF_LIST:
    new_matrix.append([])
    while len(new_matrix[-1]) < LENGTH_OF_LIST:
        new_matrix[-1].append(0)

matrix = 0
while matrix < len(matrices):
    print("matrix")
    row = 0
    while row < len(matrices[matrix]):
        # print("row %d" % row)
        # print(matrix[row])
        col = 0
        while col < len(matrices[matrix][row]):
            # print("%d %d %d" % (matrix, row, col))
            print("%d %d: %d" % (row, col, new_matrix[row][col]))
            print("%d %d: %d" % (row, col, matrices[matrix][row][col]))
            new_matrix[row][col] = new_matrix[row][col] + matrices[matrix][row][col]
            # print("%d %d: %d" % (col, row, matrix[col][row]))
            # print(matrix[row][col])
            col = col + 1
        row = row + 1
    matrix = matrix + 1

print(new_matrix)


print("\n\n\n")
print("#### de-dup is in separate file ####")

print("\n\n\n")
print("#### matrix multiplication ####")

NUMBER_OF_MATRICES = 2
LENGTH_OF_LIST = 2
matrices = []

while len(matrices) < NUMBER_OF_MATRICES:    
    matrix = []
    while len(matrix) < LENGTH_OF_LIST:
        matrix_element = []
        while len(matrix_element) < LENGTH_OF_LIST:
            matrix_element.append(random.randint(1, 10))
        matrix.append(matrix_element)
    matrices.append(matrix)

print("%s " % (matrices,))


# create new matrix, all 1s
new_matrix = []
while len(new_matrix) < LENGTH_OF_LIST:
    new_matrix.append([])
    while len(new_matrix[-1]) < LENGTH_OF_LIST:
        new_matrix[-1].append(1)

matrix = 0
while matrix < len(matrices):
    # print("matrix")
    row = 0
    while row < len(matrices[matrix]):
        # print("row %d" % row)
        # print(matrix[row])
        col = 0
        while col < len(matrices[matrix][row]):
            # print("%d %d %d" % (matrix, row, col))
            # print("%d %d: %d" % (row, col, matrices[matrix][row][col]))
            new_matrix[row][col] = new_matrix[row][col] * matrices[matrix][col][row]
            # print("%d %d: %d" % (col, row, matrix[col][row]))
            # print(matrix[row][col])
            col = col + 1
        row = row + 1
    matrix = matrix + 1

print(new_matrix)
