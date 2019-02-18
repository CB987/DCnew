# MULTIPLY VECTORS: Given two lists of numbers the same length, create a new list by mutliplying the pairs
# list1 = [2, 4, 5]
# list2 = [2, 3, 6]
# list3 = []

# for i in range (0, len(list1)):
#     list3.append(list1[i]*list2[i])
#     return list3
    
# print(list3)
    
# MATRIX ADDITION
list1 =[ [2, 2],[5, 3]]
list2 =[[4, 5],[6, 7]]
list3 = []
list4 = []
list5 = []
factor1 = 0
factor2 = 0
for i in list1:
    for j in list1[i]:
        factor1 = list1[i][j]
for k in list2:
    for l in list2[k]:
        factor2 = list2[k][l]
list3.append(factor1*factor2)
print(list3) 