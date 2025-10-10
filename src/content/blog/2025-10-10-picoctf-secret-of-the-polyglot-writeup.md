---
author: adithG17
pubDatetime: 2025-10-05
modDatetime: 2025-10-05
title: picoCTF - Secret of the Polyglot Writeup
ogImage: picoCTF - Secret of the Polyglot Writeup
slug: picoctf-secret-of-the-polyglot
featured: false
draft: false
tags:
  - forensics
  - picoctf
  - writeup
description: Writeup for PicoCTF Secret of the Polyglot challenge
---
# Secret of the Polyglot

### Welcome back to the write-up series of picoCTF. Today we’ll see about the `Secret of the Polyglot` Challenge in Forensics Category

**Challenge Name:** Secret of the Polyglot

**Category:** Forensics Easy

**Description:** The Network Operations Center (NOC) of your local institution picked up a suspicious file, they're getting conflicting information on what type of file it is. They've brought you in as an external expert to examine the file. Can you extract all the information from this strange file?

First of all we’ll see the challenge

![](/assets/picoCTF/Secret%20of%20the%20Polyglot/image.png)

> Hint 1: This problem can be solved by just opening the file in different ways

We will first download the pdf file given, on opening the pdf file we can see the last part of the flag

![](/assets/picoCTF/Secret%20of%20the%20Polyglot/image%201.png)

Now we have to find the remaining part of the flag

First we will run `file` command on the downloaded file

![](/assets/picoCTF/Secret%20of%20the%20Polyglot/image%202.png)

As we can see that this is a PNG file, not a pdf file file so we must open it as a PNG file to reveal the first part of the flag

For that we just simply change the extension of the file from `pdf` to `png`

After renaming and opening the png file with `eog` we get the first part of the flag

![](/assets/picoCTF/Secret%20of%20the%20Polyglot/image%203.png)

`picoCTF{f1u3n7`

Now we will merge both the parts

`picoCTF{f1u3n71n_pn9_&_pdf_249d05c0}`

That’s it you found the flag!

> Flag : `picoCTF{f1u3n71n_pn9_&_pdf_249d05c0}`

\## Takeaway

> A polyglot file is a single file that is valid in two or more different file formats or programming languages simultaneously, allowing it to be interpreted differently depending on the application that opens it