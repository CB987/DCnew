user_name = input('name?')
user_subj = input('subj?')

# print('your name is %s and your favorite subject is %s' % (user_name, user_subj))

def make_madlib(person, subject):
    return 'your name is %s and your favorite subject is %s' % (person, subject)

print(make_madlib(user_name, user_subj))