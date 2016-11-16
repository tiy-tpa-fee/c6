# Octodex

GitHub has a great mascot called OctoCat. OctoCat even has it's own gallery of variations, created by GitHub itself and fans, called [Octodex](https://octodex.github.com).

Unfortunately, the Octodex is not responsive*! Today, your task is to recreate the layout of The Octodex as closely as possible, but make it responsive. You can use all the tools you have at your disposal to get the job done. Use your browser's Developer Tools to inspect their site to find the exact font sizes and padding amounts.

![Octodex](https://tiy-learn-content.s3.amazonaws.com/ec8b2d13-octodex.png)

\* Well, _actually_ it uses javascript set the number of columns on page load, but we want to see interactive responsiveness when we resize our window!

## Objectives

- Build on your knowledge of HTML & CSS
- Implement a responsive design with media queries
- Implement, from scratch, a given design
- Understand HTML/CSS Layout
- Be able to place elements on a page where you want them.
- Use flexbox techniques layout pages.

## Requirements

- You should strive to implement the design as close as possible, though, especially if you've never touch HTML or CSS before, this can be extraordinarily difficult, and will take a lot of practice and mileage.

- **Note**: You should complete at least the tasks given for _explorer_ mode as listed below before turning in the assignment, as well as before attempting _adventure_ or _epic_ modes.

### Setup

- First, ensure you have the [`app-app` generator](https://github.com/tiy-tpa-fee/generator-app-app) installed. We will have done this in class.

- Open your Terminal and create and change into the project's directory:

  ```sh
  mkdir -p ~/tiy/week-1/day-3/octodex
  cd ~/tiy/week-1/day-3/octodex
  ```

- Run the generator to create a boilerplate project:

  ```sh
  yo app-app alpha
  ```

  This might take a minute to run, the generator is installing a handy development server and a tool to easily deploy our page to the web.

- Let's create our `git` repository now, and start tracking changes right away:

  ```sh
  git init
  git add .
  git commit -m "Hello, App App"
  ```

  You can change the commit message to be anything you want.

- Open the project folder in Atom:

  ```sh
  atom .
  ```

  Remember `.` is an alias for the current directory.
- Tab back to your Terminal and start the development server:

  ```sh
  npm start
  ```

  This should automatically happen, but if it doesn't; navigate to [http://localhost:3000](http://localhost:3000) in your browser. As you make changes to your code, the development server will automatically refresh this page in real-time.

  While the development browser is running, it will control your Terminal, to exit it, press `Control-C`. You can always start it up again with `npm start`.

- Using the file browser in your editor, open the files `public/index.html` and `public/screen.css` and mark up and style your document (remember all content goes _inside_ the `<body>` tags). Don't worry about the other files in the directory for now, we'll talk about those later, right now, we're mostly concerned with the two files in `public`; `index.html` and `screen.css`.

### Explorer Mode

Recreate the page as closely as you possibly can. Use the same fonts, sizes, and colors. Download some of your favorite Octocat images to use in your page (12-16 or so). Your layout should be flexible, but doesn't need to _perfectly_ responsive. Use flexbox styles to layout the header and the Octocats (hint: checkout the `flex-wrap` property).

## Adventure Mode

If you're feeling adventurous, use CSS _media queries_ to resize the Octocat containers to look great as a single full-width column on small screens, and a nice grid on bigger screens.

## Turning In

These steps will be followed for almost every assignment going forward. Once you've completed at least _explorer_ mode and you're satisfied with your work, let's get it published. First let's get it up on GitHub.

- First, let's add all our work to git, and ask it to commit it:

  ```sh
  git add .
  git commit -m "Octodex"
  ```

  Feel free to replace _"Octodex"_ with a more meaningful message.

- In your browser, go to [GitHub](http://github.com) and create a new repository, I suggest using the title of the assignment (`octodex`) for your repository name.

  ![Creating a new repository on GitHub](https://raw.githubusercontent.com/tiy-tpa-fee/fee-c6/master/assignments/hello-world/hello-world/assets/new-repo.gif)

- Add the empty repository you created on GitHub as a _remote_ to your local repo:

  ```sh
  git remote add origin git@github.com:USERNAME/octodex.git
  ```

  Conveniently, you can copy this line from GitHub after creating a new repo.

- Push our local commits to GitHub:

  ```sh
  git push -u origin master
  ```

  The `-u` option tells git we want to making pushing the `master` branch to `origin` the default, so next time, we can just type `git push`.

- Now that our source code is up on GitHub, let's publish our page to [Surge](https://surge.sh). The command to do this has already been setup for you:

  ```sh
  npm run deploy
  ```

  This first time you do this, you'll be prompted to create an account. By default, surge will assign you a random subdomain name, we'll talk about customizing this another time. For now, set the "website" field of your GitHub repo's info to be that URL:
    ![Deploying your site](https://raw.githubusercontent.com/tiy-tpa-fee/fee-c6/master/assignments/hello-world/assets/deploy.gif)

- Turn in the URL to your repository on GitHub in newline. It should look like:

  > `https://github.com/USERNAME/octodex`

## Additional Resources

- [Google Fonts](http://google.com/fonts)
- [What the Flexbox?!](http://flexbox.io)
- [Learn CSS Layout](http://learnlayout.com/)
- [CSS Triangle Generator](http://apps.eky.hk/css-triangle-generator/)
- [Responsive Web Design](http://alistapart.com/article/responsive-web-design/)
