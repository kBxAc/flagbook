---
author: adithG17
pubDatetime: 2025-10-08
modDatetime: 2025-10-08
title: picoCTF - DISKO 2 Writeup
ogImage: picoCTF - DISKO 2 Writeup
slug: picoctf-disko-2
featured: false
draft: false
description: Writeup for PicoCTF DISKO 2 challenge
---
# DISKO 2

### Welcome back to the write-up series of picoCTF. Today we’ll see about the `DISKO 2` Challenge in Forensics Category

Challenge Name: DISKO 2

Category: Forensics Medium

Description: Can you find the flag in this disk image? The right one is Linux! One wrong step and its all gone!

This is a 2nd challenge of the disk series there is also write-up for the first part

First of all we’ll see the challenge

![](/assets/picoCTF/DISKO%202/image.png)

We can see there is a disk image (.dd) file given. Also there is a hint given

> Hint : How can you extract/isolate a partition?

So we’ll mount the .dd file in `Autopsy Tool` . If you are wondering what is Autopsy you can find it here \[[https://www.kali.org/tools/autopsy/\](https://www.kali.org/tools/autopsy/)](https://www.kali.org/tools/autopsy/]\(https://www.kali.org/tools/autopsy/\)).

Create a new case and mount the image

![](/assets/picoCTF/DISKO%202/image%201.png)

After adding the image we see that it has 2 partitions, We will add both the partitions to our case

![](/assets/picoCTF/DISKO%202/image%202.png)

First we will analyze the 1 partition

![](/assets/picoCTF/DISKO%202/image%203.png)

Click `ANALYZE → KEYWORD SEARCH → PicoCTF`

![](/assets/picoCTF/DISKO%202/image%204.png)

BOOM! We found the flag

![](/assets/picoCTF/DISKO%202/image%205.png)

> Flag : picoCTF{4\_P4Rt\_1t\_i5\_90a3f3d1}