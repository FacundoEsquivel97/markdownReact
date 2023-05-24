import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { marked } from 'https://cdn.skypack.dev/marked@4.0.0';

const first =  "# This is a main header\n## This is a sub header\n\nThis project complies with [this assignment](https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-markdown-previewer) [from this nonprofit](https://www.freecodecamp.org/learn/).\n\nfreeCodeCamp taught me what an `<i>` element is used for nowadays.\n\n---\n**Some code:**\n\n```\n//this is bad JS\nconst leftArm = new Arm;\nconst rightArm = new Arm;\n\nfunction hooog (target) {\n  leftArm.wrap(target);\n  rightArm.wrap(target);\n  return target;\n}\n\nhooog('Amanda')\n```\n\n---\nSome of her favorite things:\n\n1. Cookies\n1. Luna\n1. Final Fantasy\n\n---\nOne of my favorite quotes:\n\n  > To teach is a moment's superiority;\n  > to not teach is a lifetime's.\n  > **-- Araragi Koyomi**\n\nAnd to top it all off, here's some custom art:\n\n![some custom art](https://drive.google.com/uc?id=1qDEv7V-woV9BmPnuvNuQLRdcqmISht-i)\n\nAnd, just in case it's the photo that's causing the tests to fail, here's a safer image to load:\n\n![safer image for test](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)\n\n**How's the overflow?...Meh.**"

class Markdown extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        input: first
      }
    }
    changeInput(e) {
      this.setState(()=>({
        input: e.target.value
      }))
    }
  render(){
    return(
      <div className='container'>
        <textarea id='editor'
          value={this.state.input}
          onChange={this.changeInput.bind(this)} />        
        <div id='preview'
          dangerouslySetInnerHTML={{__html: marked(this.state.input)}}>
      </div>
      </div>
    )
  }
  }

ReactDOM.createRoot(document.getElementById('root')).render(<Markdown />)