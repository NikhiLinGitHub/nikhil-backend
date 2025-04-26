
import matplotlib.pyplot as plt

# Questions you're asking
questions = [
    "Exposure to Sunlight",
    "Walk",
    "Morning Mood",
    "Overall Day",
    "Conversations"
]

# Sample data: Replace with your actual input later (values between 0-10 for 7 days)
data = {
    "Exposure to Sunlight": [7, 8, 6, 9, 7, 6, 8],
    "Walk": [5, 6, 7, 6, 5, 7, 6],
    "Morning Mood": [8, 7, 9, 6, 7, 8, 9],
    "Overall Day": [6, 7, 5, 8, 6, 7, 8],
    "Conversations": [7, 6, 8, 5, 6, 7, 6]
}

days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

# Plotting all questions
plt.figure(figsize=(12, 8))
for question in questions:
    plt.plot(days, data[question], marker='o', label=question)

plt.title("Weekly Ratings for Mental Health Tracking")
plt.xlabel("Day of the Week")
plt.ylabel("Rating (0 to 10)")
plt.ylim(0, 10)
plt.grid(True)
plt.legend()
plt.tight_layout()
plt.show()
