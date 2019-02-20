# NOT REAL TESTS :P

from classes import Character

# characters can be instatiated with name and avatar

arya = Character("No-one", "maisie.png")
jon = Character("Jon Snow", "kit.png")

print(arya.name, arya.avatar)
print(jon.name, jon.avatar)

# arya's inventory length should be 2
arya.inventory.append('sword')
arya.inventory.append('mask')
print(len(arya.inventory))

# testing for methods
# arya should have a greet method, when I call it, should return "the girl is noone"
print(arya.greet())
