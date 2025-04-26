
# import matplotlib.pyplot as plt
# import numpy as np

# # Data for the year-wise student suicides
# years = np.array([2017, 2018, 2019, 2020, 2021])
# suicides = np.array([9905, 10159, 10335, 12526, 13089])

# # Data for the regional distribution in 2021
# states = ['Maharashtra', 'Madhya Pradesh', 'Tamil Nadu', 'Karnataka', 'Others']
# state_suicides = [1834, 1308, 1246, 855, 9846]  # Remaining states combined

# # Create a figure with two subplots
# fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(14, 7))

# # Area Chart: Year-wise student suicides
# ax1.fill_between(years, suicides, color="skyblue", alpha=0.4)
# ax1.plot(years, suicides, color="Slateblue", alpha=0.6, linewidth=2)
# ax1.set_title('Year-wise Student Suicides in India (2017-2021)')
# ax1.set_xlabel('Year')
# ax1.set_ylabel('Number of Suicides')
# ax1.grid(True)

# # Pie Chart: Regional distribution of student suicides in 2021
# ax2.pie(state_suicides, labels=states, autopct='%1.1f%%', startangle=90, colors=plt.cm.Paired.colors)
# ax2.set_title('Regional Distribution of Student Suicides in 2021')

# # Adjust layout
# plt.tight_layout()
# plt.show()


# import matplotlib.pyplot as plt

# # Data for mental health problems and challenges
# labels = ['Stress', 'Anxiety', 'Depression', 'Sleep Disorders', 'Social Isolation', 'Stigma']
# sizes = [30, 25, 20, 10, 5, 10]
# colors = ['#f28e8e', '#87CEEB', '#a0e7a0', '#ffd699', '#d1c4e9', '#f7a7c0']
# explode = (0.05, 0.05, 0.05, 0, 0, 0)  # Slightly separate the major slices

# # Set font and style
# plt.rcParams.update({'font.size': 12, 'font.family': 'serif'})

# # Create pie chart
# fig, ax = plt.subplots(figsize=(8, 8))
# wedges, texts, autotexts = ax.pie(
#     sizes,
#     labels=labels,
#     autopct='%1.1f%%',
#     startangle=140,
#     colors=colors,
#     explode=explode,
#     shadow=True,
#     wedgeprops={'edgecolor': 'black', 'linewidth': 1}
# )

# # Improve readability
# for text in texts:
#     text.set_fontsize(11)
#     text.set_color('black')
# for autotext in autotexts:
#     autotext.set_fontsize(11)
#     autotext.set_color('black')
#     autotext.set_weight('bold')

# # Title and layout
# plt.title('🧠 Mental Health Challenges in the Modern Age', fontsize=16, weight='bold', color='darkblue')
# ax.axis('equal')  # Equal aspect ratio for a circular pie

# # Show chart
# plt.tight_layout()
# plt.show()


import matplotlib.pyplot as plt
import numpy as np

# Data: Year-wise student suicides
years = np.array([2016, 2017, 2018, 2019, 2020, 2021, 2022])
suicides = np.array([9478, 9905, 10159, 10335, 12526, 13089, 13000])  # Approximate value for 2022

# Data: Causes of student suicides in 2022 (approximate percentages)
causes = ['Exam Failure', 'Family Problems', 'Mental Illness', 'Love Affairs', 'Other']
percentages = [20, 30, 15, 10, 25]  # Hypothetical distribution

# Colors for the pie chart
colors = ['#ff9999','#66b3ff','#99ff99','#ffcc99','#c2c2f0']

# Create subplots
fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(14, 6))

# Area Chart: Year-wise student suicides
ax1.fill_between(years, suicides, color="skyblue", alpha=0.5)
ax1.plot(years, suicides, color="Slateblue", alpha=0.7, linewidth=2)
ax1.set_title('Year-wise Student Suicides in India (2016-2022)', fontsize=14)
ax1.set_xlabel('Year')
ax1.set_ylabel('Number of Suicides')
ax1.grid(True)

# Pie Chart: Causes of student suicides in 2022
ax2.pie(percentages, labels=causes, autopct='%1.1f%%', startangle=140, colors=colors, wedgeprops={'edgecolor': 'black'})
ax2.set_title('Causes of Student Suicides in 2022', fontsize=14)

# Adjust layout and display
plt.tight_layout()
plt.show()
