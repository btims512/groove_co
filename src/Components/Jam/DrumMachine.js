class KeyDisplay extends React.Component {
  constructor(props) {
    super(props);
   
  }
    
    render() {
    return (
    <div id="display">
      {this.props.text ? this.props.text : "Drum Away" }
    </div>
  );
}
} // end KeyDisplay class



class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    clickedButtonId : -1,
    clickedButtonText: ""
  }
    this.displayButtonInfo = this.displayButtonInfo.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }


    handleKeyDown(e){
    let buttonToPress = e.key.toUpperCase();
    let elem = document.getElementById(buttonToPress);
    elem.parentNode.classList.add("highlighted");
    setTimeout(function() {
      elem.parentNode.classList.remove("highlighted");
    }, 200);
    this.displayButtonInfo(elem.parentNode.id, buttonToPress);
  }
  
  displayButtonInfo(text, id) {
   this.setState((state, props) => ({
     clickedButtonId: id,
     clickedButtonText: text
  }));
   let audioElement = document.getElementById(id);
   audioElement.play();
  }

  componentDidMount(){
      document.addEventListener("keydown", this.handleKeyDown);
  }


    
    render() {
      return(
        qqqqqwess<head>
  <link href="https://fonts.googleapis.com/css?family=Coiny" rel="stylesheet">
</head>

<header>
			Drum Machine - React
		</header>
		<noscript>
      		You need to enable JavaScript to run this app.
    	</noscript>

<div id="root">

</div>
      <div id="drum-container">
        <div className="btns">
          <a id="Heater1" className="drum-pad" onClick={(e) => this.displayButtonInfo('Heater 1','Q')}>
            <audio id="Q" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></audio>Q</a>
        <a id="Heater2" className="drum-pad" onClick={(e) => this.displayButtonInfo('Heater 2','W')}>
            <audio id="W" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"></audio>W</a>
        <a id="Heater3" className="drum-pad" onClick={(e) => this.displayButtonInfo('Heater 3','E')}>
            <audio id="E" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"></audio>E</a>
        </div>

        <div className="btns">
          <a id="Heater4" className="drum-pad" onClick={(e) => this.displayButtonInfo('Heater 4','A')}>
            <audio id="A" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"></audio>A</a>
        <a id="Clap" className="drum-pad" onClick={(e) => this.displayButtonInfo('Clap','S')}>
            <audio id="S" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"></audio>S</a>
        <a id="OpenHH" className="drum-pad" onClick={(e) => this.displayButtonInfo('Open HH','D')}>
            <audio id="D" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"></audio>D</a>
        </div>

        <div className="btns">
          <a id="KickNHat" className="drum-pad" onClick={(e) => this.displayButtonInfo('Kick n\' Hat','Z')}>
            <audio id="Z" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"></audio>Z</a>
        <a id="Kick" className="drum-pad" onClick={(e) => this.displayButtonInfo('Kick','X')}>
            <audio id="X" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"></audio>X</a>
        <a id="ClosedHH" className="drum-pad" onClick={(e) => this.displayButtonInfo('Closed HH','C')}>
            <audio id="C" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"></audio>C</a>
        </div>

        <KeyDisplay text={this.state.clickedButtonText} />

       </div>
        );
    }
} //end class Drum Machine



ReactDOM.render(<DrumMachine />,
document.getElementById('root'));