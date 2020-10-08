import React from 'react';

import Editor from '@monaco-editor/react';

function App() {
  return (
    <div className="App">
      <div style={{border:'1px solid red'}}>
        <Editor height="90vh" language="handlebars" theme={"dark"}/>
      </div>
    </div>
  );
}

export default App;
