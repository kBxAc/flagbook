---
author: adithG17
pubDatetime: 2025-10-07
modDatetime: 2025-10-07
title: picoCTF - RED Writeup
ogImage: picoCTF - RED Writeup
slug: picoctf-RED
featured: false
draft: false
tags:
  - writeup
  - Forensics
  - picoCTF
description: Writeup for PicoCTF RED challenge
---
### Welcome back to the write-up series of picoCTF. Today we’ll see about the `RED` Challenge in Forensics Category

Challenge Name: RED

Category: Forensics Easy

Description: RED, RED, RED, RED

First of all we’ll see the challenge

![](/assets/picoCTF/RED/image.png)

We can see there is a png file is given. Also there are several hints given

> Hint 1: The picture seems pure, but is it though?

> Hint 2: Red?Ged?Bed?Aed?

> Hint 3: Check whatever Facebook is called now.

So first we will check if there is something visible in the image, but no there is nothing other than a red image

Now we’ll proceed to check the png using `zsteg`

> `zsteg` is a tool used for stenography detection in PNG and BMP images. And since we are dealing with a .PNG file, this would be a better idea to start with `zsteg` analyzes images to detect hidden data (stenography). And is able to extract hidden information from LSB (Least Significant Bit) and other stenographic techniques.

![](/assets/picoCTF/RED/Screenshot%20From%202025-10-09%2018-04-02.png)

As we suspected earlier there is a base 64 like data in the b1, LSB

Now we will decode this base 64, i personally use [https://gchq.github.io/CyberChef/](https://gchq.github.io/CyberChef/) to decode encodings

That’s it we got the flag ;)

> Flag : picoCTF{r3d\_1s\_th3\_ult1m4t3\_cur3\_f0r\_54dn355\_}