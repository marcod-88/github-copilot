# create a simple rock, paper and scissors game
# provide a welcome message
# get the user's choice
# get the computer's choice
# compare the choices
# declare the winner
# print the results
# ask if the user wants to play again
# if yes, restart the game
# if no, end the game
# message the game has ended displaying the winner

import random

import random

def welcome():
    print("Welcome to Rock, Paper or Scissors!")

def get_user_choice():
    user_choice = input("Enter Rock, Paper or Scissors: ")
    return user_choice

def get_computer_choice():
    choices = ["Rock", "Paper", "Scissors"]
    computer_choice = random.choice(choices)
    return computer_choice

def compare_choices(user_choice, computer_choice):
    if user_choice == computer_choice:
        return "It's a tie!"
    if user_choice == "Rock":
        if computer_choice == "Scissors":
            return "You win!"
        else:
            return "Computer wins!"
    if user_choice == "Paper":
        if computer_choice == "Rock":
            return "You win!"
        else:
            return "Computer wins!"
    if user_choice == "Scissors":
        if computer_choice == "Paper":
            return "You win!"
        else:
            return "Computer wins!"

def play_game():
    welcome()
    user_choice = get_user_choice()
    computer_choice = get_computer_choice()
    result = compare_choices(user_choice, computer_choice)
    print(f"User chose {user_choice}, Computer chose {computer_choice}. {result}")

play_game()
