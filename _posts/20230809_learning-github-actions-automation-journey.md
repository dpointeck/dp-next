---
slug: "learning-github-actions-automation-journey"
title: "Learning Github actions"
date: 2023-08-09
metadesc: Explore the process of learning GitHub Actions for automation in this step-by-step guide. From setting up a Linux server to creating your first workflow.
---

## Successfully Ignored Automation for Quite Some Time

I've been involved in development for a few years now, and somehow, I was able to ignore automation for quite a while. This only changed at the beginning of this year when I was tasked with containerizing the development of our embedded Linux at work. A coworker introduced me to GitLab CI. Since all my personal repositories are hosted on GitHub, I wanted to explore automation within that space. In the GitHub realm, CI is known as GitHub Actions.

The reason I never felt the itch to learn automation is because I always hosted my side projects on platforms like Vercel or Netlify. They make shipping so easy, and they're awesome companies. But as I want to progress, I decided to learn how to ship my side projects to my own Linux boxes, letting the serverless and edge stuff rest for a while.

## Setting Up a Linux Server

Before diving into GitHub Actions, I had to take care of a few prerequisites. I won't go into the details here, as I want to focus on the GitHub Actions part. The first thing I did was spin up a server instance with a hosting provider I trust. I chose the Ubuntu Server edition for the OS and installed Docker, as that's how I plan to deploy the projects onto this machine. To point domain names to my projects, I'm using [Caddy](https://caddyserver.com/), a great piece of software, as a reverse proxy.

## Getting Started with GitHub Actions

The starting line for my learning journey was the [official documentation](https://docs.github.com/en/actions). Far too often, I want to go fast and just skim through the docs, but I always end up regretting not reading them properly. (Quick tip 💡: Read the f*** docs!)

After an initial introduction, it was time to get my hands dirty. I started a fresh GitHub repo and pulled it onto my notebook. I initialized a [Deno fresh](https://fresh.deno.dev/) starter app, and that's the base for my learning journey. Here's what the basic folder structure for our newly created fresh project looks like:

```bash
.
├── .editorconfig
├── .gitignore
├── README.adoc
├── components
│   └── Button.tsx
├── deno-fresh.tar
├── deno-fresh.tar.gz
├── deno.json
├── dev.ts
├── fresh.gen.ts
├── islands
│   └── Counter.tsx
├── main.ts
├── routes
│   ├── [name].tsx
│   ├── api
│   │   └── joke.ts
│   └── index.tsx
├── static
│   ├── favicon.ico
│   └── logo.svg
└── twind.config.ts
```

Since I want to deploy this to my Linux server as a Docker container, the first thing to do is create a Docker file:

```bash
touch Dockerfile
```

```Dockerfile
FROM denoland/deno:1.35.0

EXPOSE 8000

WORKDIR /app

COPY . .

CMD ["deno", "run", "-A", "main.ts"]
```

For testing purposes, let's build the container on our local machine and go for a test drive to see if it's working:

```bash
# within your project root (also the place where the Dockerfile is located) run
docker build -t deno-fresh .
```

Now you can start the container with the following command:

```bash
docker run --rm -d --name deno-fresh -p 8000:8000 deno-fresh
```

The Deno app is now available on your `localhost:8000`. Try it out in the browser. Now we are all set to start working with GitHub Actions, our actual target.

## Create the First Workflow

In the root folder, create `.github`, and within that, a `workflows` folder. Then create a new file called `deploy.yml`. This file describes our deployment workflow and is structured into jobs. Within the jobs, we define the system we want the jobs to run on (in our example, it's `ubuntu`), and we specify the `actions` needed to build and deploy our app. Here's a simple demo; normally, there should also be a test step where all automated tests are triggered:

```yml
name: 🚀 Deploy
on:
  push:
    branches:
      - main
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: 🚛 Checkout code
        uses: actions/checkout@v2

      - name: 🔐 Login to GitHub Container Registry
        uses: docker/login-action@v2
        with:
          registry: ghcr.io
          username: ${{github.actor}}
          password: ${{secrets.CR_PAT}}

      - name: 👷‍♂️ Build and push Docker image
        uses: docker/build-push-action@v3
        with:
          context: .
          push: true
          tags: ghcr.io/${{ github.actor }}/${{ env.IMAGE_NAME }}:${{ env.IMAGE_TAG }}
        env:
          IMAGE_TAG: latest
          IMAGE_NAME: actions-noob
  deploy:
    name: 🐳 Deploy
    runs-on: ubuntu-latest
    needs: [build]
    steps:
      - name: Deploy to server
        uses: appleboy/ssh-action@master
        with:
          host: ${{ secrets.SSH_HOST }}
          username: ${{ secrets.SSH_USERNAME }}
          password: ${{ secrets.SSH_PASSWORD }}
          port: ${{ secrets.SSH_PORT }}
          script: |
            docker login ghcr.io -u ${{github.actor}} --password-stdin <<< ${{secrets.CR_PAT}}
            docker stop ${{ env.CONTAINER_NAME }} 
            docker rm ${{ env.CONTAINER_NAME }}
            docker pull ghcr.io/${{ github.actor }}/${{ env.IMAGE_NAME }}:${{ env.IMAGE_TAG }}
            docker run -d --name ${{ env.CONTAINER_NAME }} -p 8000:8000 ghcr.io/${{ github.actor }}/${{ env.IMAGE_NAME }}:${{ env.IMAGE_TAG }}
        env:
          IMAGE_TAG: latest
          IMAGE_NAME: actions-noob
          CONTAINER_NAME: deno-actions-noob
```
## Conclusion

Embarking on the journey to learn GitHub Actions and automation has been an enlightening experience. By taking the time to dive into the documentation, build a real-world project, and explore the capabilities of automation within GitHub, I've gained invaluable insights that will shape my future development work.

Whether you're a seasoned developer or just starting out, I hope this walkthrough has inspired you to explore automation in your own projects. The convenience, efficiency, and power that GitHub Actions offers can take your development process to the next level. Happy coding, and don't hesitate to reach out with any questions or comments!