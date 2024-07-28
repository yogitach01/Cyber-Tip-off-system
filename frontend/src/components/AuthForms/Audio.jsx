import React from "react";
import { Row, Col,Button } from "react-bootstrap";
import MicRecorder from "mic-recorder-to-mp3";
import { AiFillAudio } from "react-icons/ai";
import { AiOutlineStop } from "react-icons/ai";
const Mp3Recorder = new MicRecorder({ bitRate: 128 });

class Audio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRecording: false,
      blobURL: "",
      isBlocked: false,
    };
  }

  start = () => {
    if (this.state.isBlocked) {
      console.log("Permission Denied");
    } else {
      Mp3Recorder.start()
        .then(() => {
          this.setState({ isRecording: true });
        })
        .catch((e) => console.error(e));
    }
  };

  stop = () => {
    Mp3Recorder.stop()
      .getMp3()
      .then(([buffer, blob]) => {
        const blobURL = URL.createObjectURL(blob);
        this.setState({ blobURL, isRecording: false });
        console.log(blobURL);
      })
      
      .catch((e) => console.log(e));
  };

  componentDidMount() {
    navigator.getUserMedia(
      { audio: true },
      () => {
        console.log("Permission Granted");
        this.setState({ isBlocked: false });
      },
      () => {
        console.log("Permission Denied");
        this.setState({ isBlocked: true });
      }
    );
  }

  render() {
    return (
      <div className="audio">
        <header>
          <Row>
         
            <Col md={6}>
              <Button onClick={this.start} disabled={this.state.isRecording}>
                <AiFillAudio />Record
              </Button>
            </Col>
            <Col md={6}>
              <Button onClick={this.stop} disabled={!this.state.isRecording}>
                <AiOutlineStop /> Stop
              </Button>
            </Col>
          <br></br>
            <div>
            <audio
              src={this.state.blobURL}
              controls="controls"
              style={{ width: "100%" }}
            />
            </div>
          </Row>
        </header>
      </div>
    );
  }
}

export default Audio;
