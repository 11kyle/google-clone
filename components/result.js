import { useState } from 'react';

export const Result = () => {
  const [html, setHtml] = useState("https://reactjs.org");
  const [title, setTitle] = useState("React - A JavaScript library for building user interfaces");
  const [description, setDescription] = useState("React · Declarative. React makes it painless to create interactive UIs. · Component-Based. Build encapsulated components that manage their own state, then compose ...");

  return (
    <>
      <div className="my-5">
        <p className="text-sm">{html}</p>
        <a className="block my-1 text-xl text-blue-700 hover:underline" href={html}>{title}</a>
        <p className="text-sm">{description}</p>
      </div>
      <div className="my-5">
        <p className="text-sm">https://github.com/facebook/react</p>
        <a className="block my-1 text-xl text-blue-700 hover:underline" href="https://github.com/facebook/react">React is a JavaScript library for building user interfaces. - GitHub</a>
        <p className="text-sm">A declarative, efficient, and flexible JavaScript library for building user interfaces. - GitHub - facebook/react: A declarative, efficient, and flexible ...</p>
      </div>
      <div className="my-5">
        <p className="text-sm">https://www.w3schools.com/whatis/whatis_react</p>
        <a className="block my-1 text-xl text-blue-700 hover:underline" href="https://www.w3schools.com/whatis/whatis_react">What is React - W3Schools</a>
        <p className="text-sm">React is a JavaScript library created by Facebook. React is a User Interface (UI) library. React is a tool for building UI components ...</p>
      </div>

      <div className="my-5">
        <p className="text-sm">{html}</p>
        <a className="block my-1 text-xl text-blue-700 hover:underline" href={html}>{title}</a>
        <p className="text-sm">{description}</p>
      </div>
      <div className="my-5">
        <p className="text-sm">https://github.com/facebook/react</p>
        <a className="block my-1 text-xl text-blue-700 hover:underline" href="https://github.com/facebook/react">React is a JavaScript library for building user interfaces. - GitHub</a>
        <p className="text-sm">A declarative, efficient, and flexible JavaScript library for building user interfaces. - GitHub - facebook/react: A declarative, efficient, and flexible ...</p>
      </div>
      <div className="my-5">
        <p className="text-sm">https://www.w3schools.com/whatis/whatis_react</p>
        <a className="block my-1 text-xl text-blue-700 hover:underline" href="https://www.w3schools.com/whatis/whatis_react">What is React - W3Schools</a>
        <p className="text-sm">React is a JavaScript library created by Facebook. React is a User Interface (UI) library. React is a tool for building UI components ...</p>
      </div>

      <div className="my-5">
        <p className="text-sm">{html}</p>
        <a className="block my-1 text-xl text-blue-700 hover:underline" href={html}>{title}</a>
        <p className="text-sm">{description}</p>
      </div>
      <div className="my-5">
        <p className="text-sm">https://github.com/facebook/react</p>
        <a className="block my-1 text-xl text-blue-700 hover:underline" href="https://github.com/facebook/react">React is a JavaScript library for building user interfaces. - GitHub</a>
        <p className="text-sm">A declarative, efficient, and flexible JavaScript library for building user interfaces. - GitHub - facebook/react: A declarative, efficient, and flexible ...</p>
      </div>
      <div className="my-5">
        <p className="text-sm">https://www.w3schools.com/whatis/whatis_react</p>
        <a className="block my-1 text-xl text-blue-700 hover:underline" href="https://www.w3schools.com/whatis/whatis_react">What is React - W3Schools</a>
        <p className="text-sm">React is a JavaScript library created by Facebook. React is a User Interface (UI) library. React is a tool for building UI components ...</p>
      </div>

      <div className="my-5">
        <p className="text-sm">{html}</p>
        <a className="block my-1 text-xl text-blue-700 hover:underline" href={html}>{title}</a>
        <p className="text-sm">{description}</p>
      </div>
      <div className="my-5">
        <p className="text-sm">https://github.com/facebook/react</p>
        <a className="block my-1 text-xl text-blue-700 hover:underline" href="https://github.com/facebook/react">React is a JavaScript library for building user interfaces. - GitHub</a>
        <p className="text-sm">A declarative, efficient, and flexible JavaScript library for building user interfaces. - GitHub - facebook/react: A declarative, efficient, and flexible ...</p>
      </div>
      <div className="my-5">
        <p className="text-sm">https://www.w3schools.com/whatis/whatis_react</p>
        <a className="block my-1 text-xl text-blue-700 hover:underline" href="https://www.w3schools.com/whatis/whatis_react">What is React - W3Schools</a>
        <p className="text-sm">React is a JavaScript library created by Facebook. React is a User Interface (UI) library. React is a tool for building UI components ...</p>
      </div>
    </>
  );
};