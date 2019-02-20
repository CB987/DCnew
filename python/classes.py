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
        return "Hello, %s, I am %s. I am awesome." % (someone.name, self.name,)
