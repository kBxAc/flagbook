---
author: adithG17
pubDatetime: 2025-10-06
modDatetime: 2025-10-06
title: picoCTF - Ph4nt0m 1ntrud3r
ogImage: picoCTF - Ph4nt0m 1ntrud3r
slug: picoctf-Ph4nt0m-1ntrud3r
featured: false
draft: false
description: Writeup for PicoCTF Ph4nt0m 1ntrud3r challenge
---
### Welcome back to the write-up series of picoCTF. Today we’ll see about the `Ph4nt0m 1ntrud3r` Challenge in Forensics Category

**Challenge Name:** Ph4nt0m 1ntrud3r

**Category:** Forensics Easy

**Description:** A digital ghost has breached my defenses, and my sensitive data has been stolen! 😱💻 Your mission is to uncover how this phantom intruder infiltrated my system and retrieve the hidden flag. To solve this challenge, you'll need to analyze the provided PCAP file and track down the attack method. The attacker has cleverly concealed his moves in well timely manner. Dive into the network traffic, apply the right filters and show off your forensic prowess and unmask the digital intruder!

First of all we’ll see the challenge

![](/assets/picoCTF/Ph4nt0m%201ntrud3r/image1.png)

We can see there is a png file is given. Also there are several hints given

> Hint 1: Filter your packets to narrow down your search.

> Hint 2: Attacks were done in timely manner.

> Hint 3: Time is essential

So first we will open the given pcap file in `wireshark`

> `Wireshark` is a free, open-source network protocol analyzer used for capturing and examining network traffic in real-time or from saved files. It allows users to inspect network data at a microscopic level to troubleshoot network problems, analyze network performance, and detect security vulnerabilities.

As the hint suggested time is important we will sort the packets by time

![](/assets/picoCTF/Ph4nt0m%201ntrud3r/image2.png)

After we sorted it by time we see a base 64 string, then after decoding the base 64 string we get

`{1t_w4s` which likes a part of a flag so we will need to find the remaining parts of the flag

`nt_th4t` , `_34sy_t` ,`bh_4r_d` , `1065384` , `}`

but still we didn't get the starting of the flag, Maybe is it in the packet before the time 0, yes it was

`picoCTF`

Upon joining all these parts together, we get the final flag

`picoCTF{1t_w4snt_th4t_34sy_tbh_4r_d1065384}`

> Flag : picoCTF{1t\_w4snt\_th4t\_34sy\_tbh\_4r\_d1065384}