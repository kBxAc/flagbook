---
title: Binary Instrumentation 1 & 2
date: 2025-03-20 00:00:00 +0530
categories: [picoCTF2025, rev]
tags: [writeup, picoctf2025, rev, binary-instrumentation]
author: ayushch
---


Here we're given windows executables and in windows portable executables its quite possible that they might contain embedded resources inside them.

### 1. Checking for the sections inside the given binary
```sh
$ rabin2 -S bininst1.exe
[Sections]

nth paddr         size vaddr         vsize perm type name
―――――――――――――――――――――――――――――――――――――――――――――――――――――――――
0   0x00000400  0x4800 0x140001000  0x5000 -r-x ---- .text
1   0x00004c00   0xa00 0x140006000  0x1000 -r-- ---- .rdata
2   0x00005600   0x200 0x140007000  0x1000 -rw- ---- .data
3   0x00005800   0x400 0x140008000  0x1000 -r-- ---- .pdata
4   0x00005c00   0x200 0x140009000  0x1000 -r-- ---- .rsrc
5   0x00005e00   0x200 0x14000a000  0x1000 -r-- ---- .reloc
6   0x00006000  0x1600 0x14000b000  0x2000 -r-- ---- .ATOM
```

Here, we can see that there are 7 sections in the provided executable and one of them (`.ATOM`) is suspicious which we typically don't see in windows portable executables

This might be hint that the executable is probably packed by some unknown packer.
To tackle this, we can try unpacking this by very basic method of using `binwalk` here.

### 2. Using `binwalk` to get the unpacked executable
```sh
$ binwalk bininst1.exe -e

DECIMAL       HEXADECIMAL     DESCRIPTION
--------------------------------------------------------------------------------
0             0x0             Microsoft executable, portable (PE)
23648         0x5C60          XML document, version: "1.0"
24576         0x6000          LZMA compressed data, properties: 0x5D, dictionary size: 1048576 bytes, uncompressed size: 14336 bytes

```

Now here, we can see some compressed data at `0x6000` which is same address as of `.ATOM` section.

### 3. Extracting and analyzing the data inside `.ATOM` section
After extracting the contents by using `binwalk` we can identify them using `file` command
```sh
$ file *
6000:    PE32+ executable (console) x86-64, for MS Windows, 6 sections
6000.7z: LZMA compressed data, non-streamed, size 14336
```

Here, `6000` is the executable that was inside the `.ATOM` section of the given executable.
And it contains typical 6 sections so we can assume that it's safe to proceed thinking its unpacked.

Now, to see the contents for the first glance without going into much analysis we can use our favorite `strings`.

```sh
$ strings 6000
!This program cannot be run in DOS mode.
MRich
.text
`.rdata
.
.
.
.
t$@H
A^_]
Hi, I have the flag for you just right here!
I'll just take a quick nap before I print it out for you, should only take me a decade or so!
zzzzzzzz....
Ok, I'm Up! The flag is: cGljb0NURnt3NGtlX20zX3VwX3cxdGhfZnIxZGFfZjI3YWNjMzh9
RSDS
C:\Users\kiran\source\repos\BinaryInstrumentation2\x64\Release\BinaryInstrumentation2.pdb
GCTL
.
.
.
  </trustInfo>
</assembly>
```

Here, we can see a some sort of string stating `The flag is: cGljb0NURnt3NGtlX20zX3VwX3cxdGhfZnIxZGFfZjI3YWNjMzh9`
which does seem to contain encrypted flag and just by a look onto the encrypted flag we can tell its `base64` encoding.

### 4. The FLAG
Use any online `base64` decoder or just be a cool guy like me
```sh
$ echo "cGljb0NURnt3NGtlX20zX3VwX3cxdGhfZnIxZGFfZjI3YWNjMzh9" | base64 -d
picoCTF{w4ke_m3_up_w1th_fr1da_f27acc38}
```

No packer is stronger than me :)