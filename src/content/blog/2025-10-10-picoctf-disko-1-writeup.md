---
author: AdithG17
pubDatetime: 2025-10-09
modDatetime: 2025-10-09
title: picoCTF - DISKO 1 Writeup
ogImage: picoCTF - DISKO 1 Writeup
slug: picoctf-disko-1
featured: false
draft: false
tags:
  - Writeup
  - Forensics
  - picoCTF
  - DISKO 1
---
\# DISKO 1

\### Welcome back to the write-up series of picoCTF. Today we’ll see about the `DISKO 1` Challenge in Forensics Category

Challenge Name: DISKO 1

Category: Forensics Easy

Description: Can you find the flag in this disk image? Download the disk image

First of all we’ll see the challenge

![](/assets/image.png)

We can see there is a disk image (.dd) file given. Also there is a hint given

\> Hint : Maybe Strings could help? If only there was a way to do that?

\>

So we will try to run `strings` command on the `disko-1.dd` file any try to search if there is something that is in format of the flag using `grep` command

![](/assets/image.psd.jpg)

And yeah we got the flag ;)

\> Flag: picoCTF{1t5\_ju5t\_4\_5tr1n9\_e3408eef}