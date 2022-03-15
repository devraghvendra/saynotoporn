"use strict";

const parameters = new URLSearchParams(window.location.search);
const value = parameters.get('q');

let possibleKeywords = ["porn", "adult videos", "sex", "porn stars"];

var checkIfIDExists = document.getElementById("rhs");

if (!checkIfIDExists) {
  var element = document.createElement("div");
  element.id = "rhs";
  document.getElementById('center_col').after(element);
}

if (possibleKeywords.includes(value)) {
  var element = document.createElement("div");
  var imageElement = document.createElement("img");
  imageElement.setAttribute("src", "https://lh3.googleusercontent.com/-rglFhzTPOma3Fu7YOLY7t8gruQtfHwbfEQKg4xvmGHRTLfMJuchCnXSHadImKCZahMXkGoX_eZUScgxaJW1o-Ug58ARvpifQ5zgayd0-KecsF6XTI1kChZZ0LdtnGZxDKs6UfjTuW8zSbtT1tcmutdGgkbz1W0k0NGjTBeDsjj1DQnjIlcz7I-PV8q5aO7z1_QfKvVItx42LzZTe_BrHvVLXobKr2lQ7lV-o922krSQAZD1o5_kacxIMDVCogs-xA-PWy_joTumATLNWnJ6F32_-79OuIJmkCCqGmdwZbSdBr_jn4KKCtICKxhvH0L23vMZO9jGTihqR7j6WYTRm7rVtpN5qg30fVlaIHf1pPLIOs9zDig3ZdKdBAadSHJPs39U-JPCEUjJDWebfCeSH0ihsuvozdROZFyWUxGfrx4-B3pAD7365wL97HPAYm3EZQuWvMHD5_NVp9VD7MG9sZI7grrnAEk-v5lbl3--KpVNiOD1nSVxhKmmAQJEEJSX03RmrAz2BZrX7WrYLTe1IIL5jAKduxz5QYcm4Xx_iI0RjPVzFUAxrrA41e0tAhRqBHBxVfFspZT5s1U9CCKA85yGUIU37tmYBmtrJjv5eg9f80hKutuhZAlQ2lcG3qwkZk0SBO-AaW0ksMDmGXJcWKi8mqbhrtvElCcQolsjCjJ56IybM6qQbSnfjfow3DI481k8wZi6TEqDcg9BZJl8lw=w1280-h889-no?authuser=0");
  imageElement.setAttribute("height", "100%");
  imageElement.setAttribute("width", "100%");
  imageElement.setAttribute("alt", "Bhai Kya Kar Raha Hai.");
  element.appendChild(imageElement);
  document.getElementById('rhs').appendChild(element);
}