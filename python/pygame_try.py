import pygame
import sys
from pygame.locals import *

pygame.init()
# always call after importing and before any other function
DISPLAYSURF = pygame.display.set_mode((400, 300))
# to return the surface object for the window. the tuple is w x h of window in pixels. must be in tuple format (int, int)
pygame.display.set_caption('Hello World!')  # sets window title text
while True:  # main game loop: handles events, updates game state, draws game state to screen

    for event in pygame.event.get():
        #checks over the list of possible events to see if any have happened
        if event.type == QUIT:
            pygame.quit()
            sys.exit()
    pygame.display.update() #draws the surface object       
