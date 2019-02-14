# coins = 0
# print("You have 0 coins.")
# response = (input("Do you want another? ")).lower
# if response == "yes":
#     coins += 1
#     print("You have %d coins." % coins)
# elif response == "no":
#     print("Bye")    
# else:
#     print("Good luck with that.")

coins = 0
# print( "You have 0 coins." )
# response = input("Would you like another? ").lower()
response = "yes"

while response == "yes":
    print("You have %d coins." % coins )
    coins += 1
    response = input("Would you like another? ").lower() 
else:
    print("Bye then")
