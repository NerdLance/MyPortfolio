<!-- PROJECT LOGO -->
<br />
<p align="center">
  <h1 align="center">Developer's Portfolio ✨</h1>

  <p align="center">
    It is a personal static website/portfolio template hosted with GitHub Pages, built to showcase my recent projects. Site URL / Demo: 
    <a href="https://hashirshoaeb.github.io/home">hashirshoaeb.github.io/home</a>
    <br />
    <br />
    <a href="https://hashirshoaeb.github.io">About Me</a>
  </p>
</p>

![GitHub contributors](https://img.shields.io/github/contributors/hashirshoaeb/home?color=ffcc66&style=for-the-badge)
![GitHub stars](https://img.shields.io/github/stars/hashirshoaeb/home?color=ffcc66&style=for-the-badge)
[![GitHub forks](https://img.shields.io/github/forks/hashirshoaeb/home?style=for-the-badge)](https://github.com/hashirshoaeb/star_book/network)
[![GitHub issues](https://img.shields.io/github/issues/hashirshoaeb/home?color=ffcc66&style=for-the-badge)](https://github.com/hashirshoaeb/star_book/issues)
[![GitHub license](https://img.shields.io/github/license/hashirshoaeb/home?style=for-the-badge)](https://github.com/hashirshoaeb/home/blob/master/LICENSE)
[![Twitter Follow](https://img.shields.io/twitter/follow/hashirshoaeb?color=ffcc66&logo=twitter&logoColor=ffffff&style=for-the-badge)](https://twitter.com/hashirshoaeb)
[![Node Version](https://img.shields.io/static/v1?label=Node&message=v16.16.0&color=026e00&style=for-the-badge)](https://nodejs.org)
[![npm Version](https://img.shields.io/static/v1?label=npm&message=8.11.0&color=cb0000&style=for-the-badge)](https://nodejs.org)

[![Site preview](/public/social-image.png)](https://hashirshoaeb.github.io/home)

## Table of Contents

- [Technology Stack 🛠️](#technology-stack-)
- [Structure ⚓](#structure-)
- [Sharing 💗](#sharing-)
- [Prerequisites 🍪](#prerequisites-)
- [Setup And Deployment 🔧](#setup-and-deployment-)
- [Contributing 🙌](#contributing-)
- [Issues](#issues)
- [Upcoming Features / Improvements 🔗](#upcoming-features-/-improvements-)
- [Showcase 🚀](#showcase-)
- [Versão em Português :brazil:](#versao-em-portugues-)

## Technology Stack 🛠️

Dependencies defined in package.json:

[Reactjs](https://reactjs.org/)
| [Bootstrap](https://getbootstrap.com/)
| [Typist](https://github.com/jstejada/react-typist)
| [GitHub API](https://developer.github.com/v3/repos/)
| [Instagram API](https://www.instagram.com/developer/embedding/)

## Structure ⚓

- Navigation bar (optional)
- Body
  - Name | Profession
  - Contact / Follow / Find me / Facebook / LinkedIn / GitHub / Instagram / Email / CodePen
  - Resume | About me
- About Me
  - Display picture (optional)
  - About myself, my Interests, Goals and Hobbies
  - Things I'm good at (Skills)
  - Resume button
- Recent Projects (using GitHub API) (optional)
- Leadership (optional)
  - Paragraph
  - Carousel images
- Skills (optional)
  - Technical Skills
  - Soft Skills
- Footer
  - Footer Note (optional)
  - Copyrights - open source
  - Acknowledgements(

## Sharing 💗

Project is open source. Feel free to make your own version. All you need to do is to fork this repository, edit [src/editable-stuff/config.js](./src/editable-stuff/config.js) and add resume. Mark star ⭐ if you like the project.

## Prerequisites 🍪

You should have [Node.js](https://nodejs.org/en/) and [Git](https://git-scm.com/) installed on your PC. You should also own a GitHub account.

## Setup And Deployment 🔧

1. To Get Started, Fork this repository to your GitHub account:
2. Clone the forked repo from your account using:

   ```bash
     git clone https://github.com/<your-username>/home.git
   ```

3. Open in editor and edit [src/editable-stuff/config.js](./src/editable-stuff/config.js) file.

4. Add your resume as <resume.pdf> in place of [src/editable-stuff/resume.pdf](./src/editable-stuff/)

5. Edit [title](./public/index.html#L34) and meta [description](./public/index.html#L13) in [public/index.html](./public/index.html).

6. After editing run the following bash commands:

   ```bash
   npm install
   npm start
   ```

7. Production deployment is handled by the repository's CI/CD flow from the
   main branch. There is intentionally no local deploy script.

8. Congrats your site is up and running.

9. To change the thumbnail image:

    - Navigate to the "public" folder.  
    - There you will see "social-image.png".  
    - Delete it.   
    - Take a screenshot of your version and rename it "social-image.png" and place it there.  
    
   Next time if you make changes, repeat from step 8.

Facing issues? Feel free to contact at hashirshoaeb@gmail.com.

## Homepage promotion and rollback

The approved `NextLandingPage` is the production root page. The previous
`HomePage` and its dependencies are intentionally retained for a short-term
rollback.

### Required AWS Amplify rule

The repository does not contain an Amplify redirect configuration file, so add
this rule in **Amplify Hosting → Rewrites and redirects** before deploying:

| Order | Source | Target | Type |
| --- | --- | --- | --- |
| 1 | `/next` | `/` | `301 (Permanent redirect)` |
| 2 | `/<*>` | `/index.html` | `404 (Rewrite)` |
| 3 | `</^[^.]+$|\.(?!(css|gif|ico|jpg|js|png|txt|svg|woff|ttf|map|json)$)([^.]+$)/>` | `/index.html` | `200 (Rewrite)` |

The `/next` redirect must precede both SPA rewrites so Amplify returns a real
301 instead of serving `index.html` with a 200 or 404 status. Leave the
redirect's query fields empty so Amplify forwards incoming query strings. Also
verify that Amplify custom headers do not apply `X-Robots-Tag: noindex` to `/`;
no such header is configured in this repository.

### Rollback

Prefer rolling back to the previous Amplify deployment or reverting the focused
promotion commit. To restore the behavior manually:

1. In `src/App.js`, import `HomePage`, render it at `/`, and restore
   `NextLandingPage` at `/next`.
2. In `src/editable-stuff/nextConfig.js`, restore the `/next` canonical URL and
   `noindex,follow`.
3. Restore the pre-promotion metadata in `public/index.html`.
4. Rename `homepage_*` analytics events back to `next_*` only if the preview
   dashboard also needs to be restored.
5. Remove `public/sitemap.xml` and the sitemap line in `public/robots.txt`
   (there was no previous sitemap).
6. Remove the Amplify `/next` 301 rule, then rebuild and redeploy.

## Showcase 🚀

Have you changed something in the code to create your own version? Feel free to share with me, I will list them in this space.

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/justiceserv/justiceserv.github.io">
        <img src="READMEdocs/justiceserv-github-io-home.gif" width="300px" alt="" />
        <br />
        <sub><b>Guhyun Chung</b></sub>
      </a>
      <br />
    </td>
    <td align="center">
      <a href="https://github.com/hamzasohail0/home/">
        <img src="READMEdocs/hamzasohail0-github-io-home.gif" width="300px" alt="" />
        <br />
        <sub><b>Hamza Sohail</b></sub>
      </a>
      <br />
    </td>
    <td align="center">
      <a href="https://github.com/AymunTariq/home/">
        <img src="READMEdocs/aymuntariq-github-io-home.gif" width="300px" alt="" />
        <br />
        <sub><b>Aymun Tariq</b></sub>
      </a>
      <br />
    </td>
  </tr>
  <tr>
    <td align="center">
      <a href="https://github.com/anaashrafi/home/">
        <img src="READMEdocs/anaashrafi-github-io-home.gif" width="300px" alt="" />
        <br />
        <sub><b>Ana Ashrafi</b></sub>
      </a>
      <br />
    </td>
    <td align="center">
      <a href="https://github.com/jefferyjohn/home/">
        <img src="READMEdocs/jefferyjohn-github-io-home.gif" width="300px" alt="" />
        <br />
        <sub><b>Jeffery John</b></sub>
      </a>
      <br />
    </td>
    <td align="center">
      <a href="https://github.com/remimestdagh/home/">
        <img src="READMEdocs/remimestdagh-github-io-home.gif" width="300px" alt="" />
        <br />
        <sub><b>Remi Mestdagh</b></sub>
      </a>
      <br />
    </td>
  </tr>
    <tr>
    <td align="center">
      <a href="https://github.com/xunxdd/portfolio/tree/master">
        <br />
        <sub><b>Xun Ding</b></sub>
      </a>
      <br />
    </td>    
    <td align="center">
      <a href="https://github.com/S-Philp/Shannel.philp">
        <br />
        <sub><b>Shannel Philp</b></sub>
      </a>
      <br />
    </td>    
    <td align="center">
      <a href="https://github.com/bibinvargheset/home">
        <br />
        <sub><b>Bibin Varghese</b></sub>
      </a>
      <br />
    </td>
  </tr>
</table>

## Versão em Português :brazil:

Esse projeto foi traduzido para português! Se você gostou dele e quer criar a sua própria versão, confira o repositório do [@tashima42](https://github.com/tashima42) em [https://github.com/Tashima42/home](https://github.com/Tashima42/home).
Novas contribuições e revisões na tradução são muito bem vindas!

## Notice:

This project has been archived. Means that it is no longer actively maintained by developer. Free free to fork, use and maintain your own version. You can check my new portfolio template [here](https://github.com/hashirshoaeb/portfolio)

## Stargazers over time

[![Stargazers over time](https://starchart.cc/hashirshoaeb/home.svg)](https://starchart.cc/hashirshoaeb/home)
