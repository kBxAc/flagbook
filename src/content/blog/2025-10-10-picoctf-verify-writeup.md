---
author: adithG17
pubDatetime: 2025-10-04
modDatetime: 2025-10-04
title: " picoCTF - Verify Writeup"
ogImage: " picoCTF - Verify Writeup"
slug: " picoctf- Verify-Writeup"
featured: false
draft: false
description: Writeup for PicoCTF Verify challenge
---
### Welcome back to the write-up series of picoCTF. Today we’ll see about the `Verify` Challenge in Forensics Category

**Challenge Name:** Verify

**Category:** Forensics Easy

**Description:** People keep trying to trick my players with imitation flags. I want to make sure they get the real thing! I'm going to provide the SHA-256 hash and a decrypt script to help you know that my flags are legitimate.

First of all we’ll see the challenge

![](/assets/picoCTF/Verify/image1.png)

In order to see solve the challenge further we will launch the instance

> Hint 1: Checksums let you tell if a file is complete and from the original distributor. If the hash doesn't match, it's a different file.

> Hint 2: You can create a SHA checksum of a file with `sha256sum <file>` or all files in a directory with `sha256sum <directory>/*`.

> Hint 3: Remember you can pipe the output of one command to another with `|`. Try practicing with the 'First Grep' challenge if you're stuck!

So after launching the instance we get some more additional information

> `ssh -p 60990 ctf-player@rhea.picoctf.net`

> Using the password `6dd28e9b`. Accept the fingerprint with yes, and `ls` once connected to begin. Remember, in a shell, passwords are hidden!

> Checksum: `03b52eabed517324828b9e09cbbf8a7b0911f348f76cf989ba6d51acede6d5d8`

> To decrypt the file once you've verified the hash, run `./decrypt.sh files/<file>`.

* * *

After connecting to the remote server and following the instructions we get

![](/assets/picoCTF/Verify/image2.png)

we can see there are 2 files `checksum.txt, decrypt.sh` and one directory `files`

First we will open the checksum.txt as it may contain the SHA256 hash

![](/assets/picoCTF/Verify/image3.png)

Yes we got the SHA256 hash `03b52eabed517324828b9e09cbbf8a7b0911f348f76cf989ba6d51acede6d5d8`

Next we will try to run the [decrypt.sh](http://decrypt.sh)

![](/assets/picoCTF/Verify/image4.png)

On running we are expected to pass the correct file name in order tp run this script so our next step is to find the correct file

Now we will list the files in the `files` directory

![](/assets/picoCTF/Verify/image5.png)

we can see that there are multiple files so we must match the has we got with the has of the file in this directory

`sha256sum * | grep 03b52eabed517324828b9e09cbbf8a7b0911f348f76cf989ba6d51acede6d5d8`

Using this command we found that the file `00011a60` is the file we need to run the script

![](/assets/picoCTF/Verify/image6.png)

Now we will run the script with this file

![](/assets/picoCTF/Verify/image7.png)

Yeah we got the flag ;)

> Flag : picoCTF{trust\_but\_verify\_00011a60}