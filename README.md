# Discussion Questions: Components

Get together in groups and clone down this repository. Your goal for this
discussion question is to recreate the app in this demo image:

![demo](https://raw.githubusercontent.com/learn-co-curriculum/react-hooks-dq-components/master/demo.png)

The components are already provided for you in the `src/components` folder. It's
your job to put them all together!

Start by discussing the image of the demo app and decide what components belong
where. For example, here's how you might break up a site like Yelp into
components:

![yelp components](https://raw.githubusercontent.com/learn-co-curriculum/react-hooks-dq-components/master/yelp-components.png)

Once you've decided on your component hierarchy, it's time to start coding!

First, run the application in the browser:

```console
$ npm install
$ npm start
```

Starting from the `App` component, add all the necessary components based on
your component hierarchy. For example, if you decided to put the `TopMenu` and
`SideMenu` in the `App` component, here's how it would look:

```js
import React from "react";
import TopMenu from "./TopMenu";
import SideMenu from "./SideMenu";

function App() {
  return (
    <div className="app-container">
      <TopMenu />
      <SideMenu />
    </div>
  );
}

export default App;
```

Make sure to check your progress in the browser as you start adding components
and work on getting your app to match the demo image.

## Bonus

If you finish early, have a look at the `AlbumList` component. You'll notice
there is an array of album data being imported in this file:

```js
import { albums } from "../data/albums";
```

See if you can use this array to dynamically generate the `Album` components
instead of hard-coding them.

Check out the React docs on
[Lists and Keys](https://reactjs.org/docs/lists-and-keys.html) for a hint!.
