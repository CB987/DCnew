# We will give our characters these attributes:
# Name
# avatar (profile pcitre)
# inventory

# def do_stuff():
#     pass


class Character():
    # "dunder init"
    def __init__(self, new_name, new_avatar):
        # 'self' is the customary was yo refer to the instance being built.
        # in other languages, same as 'this'
        self.name = new_name
        self.avatar = new_avatar
        self.inventory = []
    # 'someone =None' provides a default argument

    def greet(self, someone=None):
        # When we assume that 'someone' argument has a '.name' property
        # this is an Object-Oriented Programming principle called
        # polymorphism
        # in python, it's called "duck typing"
        if someone:
            return "Hello, %s, I am %s. I am awesome." % (someone.name, self.name,)
        else:
            return "Hello, I am %s. I am awesome." % (self.name,)

# one class can be a more specific version of another class by passing in that class
# Hero is a subclass of character, which inherits from Character
# Character is the super class of Hero


class Monster(Character):
    # def __init__(self):
    #     self.name = "bad dude"
    #     pass

    def greet(self, someone=None):
        return "die die die die"


class Hero(Character):
    def attack(self, other):
        return "%s attacks %s" % (self.name, other.name,)

    def greet(self, someone=None):
        if type(someone) == Monster:
            return "ermagherd a monster"
        else:
            return super().greet(someone)


class MinorHero(Hero):
    def greet(self, someone=None):
        return "I'm just an extra"
        # if super().greet refers to the class above, can leapfrog by doing Character().greet
