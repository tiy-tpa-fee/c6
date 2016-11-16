# A Portfolio

For your first weekend project, we're going to be starting work on a portfolio website that you can improve over the rest of your time here at The Iron Yard.

![Mockup](https://raw.githubusercontent.com/tiy-tpa-fee/fee-c6/master/assignments/portfolio/mockup.png)

You can find assets you'll need here:

> https://github.com/tiy-tpa-fee/fee-c6/tree/master/assignments/portfolio/assets

The font used is [Roboto](https://fonts.google.com/specimen/Roboto).

## Objectives

- Build on your knowledge of HTML & CSS
- Implement, from scratch, a given design
- Use flexbox techniques layout pages.

## Requirements

- Initially, you should implement the design as close as possible to the mockup. Later, you might choose to fit your own personality/style.

- **Note**: You should complete at least the tasks given for _explorer_ mode as listed below before turning in the assignment, as well as before attempting _adventure_ or _epic_ modes.

### Setup

- First, ensure you have the [`app-app` generator](https://github.com/tiy-tpa-fee/generator-app-app) installed. We will have done this in class.

- Open your Terminal and create and change into the project's directory:

  ```sh
  mkdir -p ~/tiy/portfolio
  cd ~/tiy/portfolio
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

- Recreate the page as closely as you possibly can. Use the same fonts, sizes, and colors.

### Adventure Mode

- Take the time to personalize the site.
- Keep it professional, but make it your own.

## Turning In

These steps will be followed for almost every assignment going forward. Once you've completed at least _explorer_ mode and you're satisfied with your work, let's get it published. First let's get it up on GitHub.

- First, let's add all our work to git, and ask it to commit it:

  ```sh
  git add .
  git commit -m "Portfolio"
  ```

  Feel free to replace _"Portfolio"_ with a more meaningful message.

- In your browser, go to [GitHub](https://github.com) and create a new repository, I suggest using the title of the assignment (`portfolio`) for your repository name.

  ![Creating a new repository on GitHub](https://raw.githubusercontent.com/tiy-tpa-fee/fee-c6/master/assignments/hello-world/hello-world/assets/new-repo.gif)

- Add the empty repository you created on GitHub as a _remote_ to your local repo:

  ```sh
  git remote add origin git@github.com:USERNAME/portfolio.git
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

  > `https://github.com/USERNAME/portfolio`

## Additional Resources

- [Google Fonts](http://google.com/fonts)
- [What the Flexbox?!](http://flexbox.io)
