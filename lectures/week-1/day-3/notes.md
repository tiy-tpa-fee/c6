# Housekeeping

- Circles of comfort
- Watch slack. *VERY* important stuff shows up there. Including "hints" and "oopsies" and resources for homework.
- Cloning the notes repos. If you haven't done this, _come see me_

# Knoweldge nuggets and things to watch for
- .git folder
  - Leave this alone, this is where git keeps track of things
  - Folders and files that start with a "dot" are special items, configuration files, etc.
- Avoid *absolute paths* in HTML/CSS
- Please, please, lower case directories and file names!
- If you are having trouble managing your folders, come see me.

# Covered today
- Start by taking the visual design and break it down into big components
 - Identify the big parts, header, main, footer
 - Break those down into smaller logical pieces
 - Build those as your HTML tags, nested similar to how they are logically represented in the design
 - Fill in content
   - Text (lorem ipsum when you don't have exact copy, but *DO* know how much space the text may take)
   - Image assets provided
   - Filler images (when you don't have exact assets but have a sample of the style of images)
 - Start to layout from the top of the page, working on margins, spacing, and vertical/horizontal layout

- Flexbox
  - To set the *children* of an element to be a `flex` layout:
    - `display: flex;`
  - Direction of flexible flow
    - Default is in a row, don't need to specify, but it would be:
      `flex-direction: row`
    - Want them to flow vertically?
      `flex-direction: column`
  - What about setting how much space there is between items?
    - `justify-content` determines this
    - Options:
      - `justify-content: flex-start`
      - `justify-content: flex-end`
      - `justify-content: center`
      - `justify-content: space-between`
      - `justify-content: space-around`
      - [Example](https://css-tricks.com/wp-content/uploads/2013/04/justify-content.svg)
  - What about how they are aligned to the surrounding container?
    - `align-items` does this
    - Options:
      - `align-items: flex-start`
      - `align-items: flex-end`
      - `align-items: center`
      - `align-items: stretch`
      - `align-items: baseline`
      - [Example](https://css-tricks.com/wp-content/uploads/2014/05/align-items.svg)

# Resources
- Review flexbox options [here](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- Video series of flexbox, and it is *free*: [http://flexbox.io](http://flexbox.io)

# Bonus items / Bonus lecture
- Plugins for atom
 - emmet
 - color picker
 - live reload
