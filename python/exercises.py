import random
secret_number = random.randint(1,10)
guess = 0
count = 0

while guess != secret_number and count < 5:
    guess = int(input("guess a number between 1 and 10!"))
    if guess == secret_number:  
        print("You got it") 
        break

    elif guess > secret_number:
        print("too high")
    elif guess < secret_number:
        print("too low")

    count += 1
    print("you have tried %d times" % count)

if count == 5:
    print("sorry, you tried too many times")