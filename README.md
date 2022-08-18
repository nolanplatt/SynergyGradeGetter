![Synergy Logo](https://play-lh.googleusercontent.com/43vg9yqJ6keUxcLmlhILmpAGVG5q1XTpKtkUDMiggTWvzD7j_vi8bdqRI23dWnEy7A)
# Synergy Grade Getter

✅SynergyGradeGetter is now updated for the 2022/2023 school year!


## A sophisticated and intuitive way of detecting grade changes. 
As a stressed high school student, I found myself constantly checking my gradebook every twenty minutes or so. It was distracting and my grades were always in the back of my mind. To fix this, I created an automated way to detect grade changes and send me an SMS text whenever something changes.


## Note
This project is specifically meant for Poway Unified School District's StudentVue, a gradebook system designed by [Edupoint](https://edupoint.com/). It can very easily be modified for any other district's StudentVue host. Feel free to reach out to me if you need help.

## Libraries
1. [Selenium Webdriver](https://www.npmjs.com/package/selenium-webdriver)
2. [Request](https://www.npmjs.com/package/request)
  - Note: Request is deprecated. I will be updating to node-fetch, an up to date http client, as soon as I have time.
 
## Text Belt
In order to provide fast, secure, and clean text messages, I utilized a paid (but cheap) SMS service: [Text Belt](https://textbelt.com/). 
If you prefer not to pay, you can easily create a work-around by utilizing your own mail server and mapping to your carrier's SMS address. More explanation can be found [here](https://www.npmjs.com/package/textbelt/v/0.0.2). I also plan to implement this at some point.

## Questions
If you have any questions or requests feel free to contact me. My contact info is available on my [website](https://nolanplatt.com).

## Legal
SynerGradeGetter utilizes selenium webdriver, an open source tool designed by Google. This project utilizes a headless version of selenium, and hence you cannot see the Google Chrome window. Its navigation, however, is similar to a human and requests to StudentVue are not made in a harmful manner. Furthermore, requests to StudentVue are spread out and hence do not cause stress on the server of Synergy/Edupoint. Any requests or questions can be directed to my email at nolanplatt1@gmail.com 
