import unittest
from unittest.mock import patch
import RockPaper  # assuming your game code is in a file named RockPaper.py

class TestGame(unittest.TestCase):

    @patch('builtins.input', return_value="Rock")
    def test_user_choice_rock(self, input):
        self.assertEqual(RockPaper.get_user_choice(), "Rock")

    @patch('builtins.input', return_value="Paper")
    def test_user_choice_paper(self, input):
        self.assertEqual(RockPaper.get_user_choice(), "Paper")

    @patch('builtins.input', return_value="Scissors")
    def test_user_choice_scissors(self, input):
        self.assertEqual(RockPaper.get_user_choice(), "Scissors")

    @patch('builtins.input', return_value="")
    def test_user_choice_void(self, input):
        self.assertEqual(RockPaper.get_user_choice(), "")

    def test_computer_choice(self):
        self.assertIn(RockPaper.get_computer_choice(), ["Rock", "Paper", "Scissors"])

    def test_compare_choices(self):
        # Test all combinations when user chooses Rock
        self.assertEqual(RockPaper.compare_choices("Rock", "Rock"), "It's a tie!")
        self.assertEqual(RockPaper.compare_choices("Rock", "Scissors"), "You win!")
        self.assertEqual(RockPaper.compare_choices("Rock", "Paper"), "Computer wins!")
        
        # Test all combinations when user chooses Paper
        self.assertEqual(RockPaper.compare_choices("Paper", "Rock"), "You win!")
        self.assertEqual(RockPaper.compare_choices("Paper", "Scissors"), "Computer wins!")
        self.assertEqual(RockPaper.compare_choices("Paper", "Paper"), "It's a tie!")
        
        # Test all combinations when user chooses Scissors
        self.assertEqual(RockPaper.compare_choices("Scissors", "Paper"), "You win!")
        self.assertEqual(RockPaper.compare_choices("Scissors", "Rock"), "Computer wins!")
        self.assertEqual(RockPaper.compare_choices("Scissors", "Scissors"), "It's a tie!")

if __name__ == '__main__':
    unittest.main()