# NOT REAL TESTS :P

from classes import Character
from classes import Hero
from classes import Monster

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
# when i call with 'arya.greet(jon)' it should return 'Hello, Jon Snow, I am noone. I am awesome"
print(arya.greet(jon))

# I should be able to create a Hero instance
bronn = Hero('Bronn of the Blackwater', 'bronn.jpg')
# Hero should be able to greet characters and vice versa
print(bronn.greet(arya))
print(jon.greet(bronn))

# I should be able to create a monster instance
sauron = Monster()
# print(jon.greet(sauron))
# when monster greets he says "die die die die"
print(sauron.greet(jon))
