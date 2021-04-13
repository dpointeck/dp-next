---
slug: 'review-macos-webdev-alternatives'
title: 'I tested Linux and Windows 10 as macOs alternatives'
date: 2021-04-13
metadesc: The last 2 months I've tested Linux and Windows 10 as platform for my dev work.
---

As I mentioned in my previous post I built a PC to check out other platforms for webdevelopment which promised me a better price-performance ratio than new apple system. So I spent about €600,- for hardware which includes:

- AMD Ryzen 5 3600 CPU
- 32GB RAM
- 1TB NVME SSD
- Geforce GTX 1070 (second hand)

This hardware is more than enough for my daily usecase. I decided to install Windows 10 and Linux in a dual boot setup.

## Windows 10

### Setting things up

The first thing I did was installing Windows 10 and WSL2 (Windows Subsystem Linux). This lets you run a Linux distro side by side in your Windows environment. In my case this was Ubuntu. The next thing was that I installed some dependencies I need for webdev tasks like git, node, go, ... on the Linux distro and setup a new website - nmp init, cd project, npm i vite ... npm run dev. Immediately after starting the dev server and hitting save for livereload to see my changes I noticed that the lag between saving and reload was aweful.

### WSL2 imperfections

It took a bit of research for me to find out that by default Windows and WSL2 share the user folder on the windows side and this was responsible for the bad performace I experienced before. What I did was that I setup the Linux distro to start the session in the Linux user directory and tested the hotreload of my project again and it worked well for me.

Also a bit annoying is that when you use the Docker based WSL2 backend you need to use the docker ip instead localhost, e.g. 172.245.23.45:3000 instead localhost:3000. Clear this is not really a big thing but a bit distracting because I had to lookup the ip while on a unix system I just start working.

### Windows WSL summary (for now)

All in all I'm able to do everything I use to do on a normal workday when using Windows a my workhorse but after 2 months it still not as convenient as working on a mac.

## Linux

The first distro I gave a shot was elementary os a ubuntu based distro with their own desktop environment called pantheon. I used elementary os for at least 2 weeks and everything was working well but than I read a post about Fedora 34 with the gnome 40 desktop and installed it the same day.

Also 2 weeks later I do not regret switching to this os - desktop combo. All dev related topic for me work butter smooth and without any problems. I really like the look of the new gnome desktop and the devs did a really good job by improving the usability of the system.

### Things I needed to figure out on Linux

The first task I needed some time for research was that I had to manually install the nvidia graphic drivers. Which was not a big deal but as a former mac user I expected it tu just work 😅.

As input devices I user a Logitech MX keys keyboard and MX2 mouse, both connected via a unifying dongle to the PC. The connection just works but when I openend for example firefox or chrome scrolling was unacceptable slow. So after 30min. of googling around I installed a tool called solaar. This is a free software developed by a logitech employee in his free-time which helps you managing and tweaking yor unifying devices (like logi options on mac/windows). With this installed I'm also happy with the scroll behaviour now.

One fact that should improved on Linux desktops is that the display settings should support fractional scaling. Right now in gnome you can choose within 100% steps which is quite not enough for me. 100% on a 4k display is to small and 200% is to big. I would prefer something around 130%. I found a workaround to increase the font size but this makes the spaceing between UI elements make look a bit weird.

## The Verdict

Contrary to my expectations that I'm using Windows as my main system and Linux as complementary system I must say at the moment it's just the other way around. Although Fedora 34 is still in beta and gnome 40 ist brandnew I did not experience problems or glitches until now. I just keep learning everyday and have to get used to that on Linux you may not expect that things work out of the box. All in all I'm really happy with the decision to try something new.
