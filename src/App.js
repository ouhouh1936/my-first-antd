import React from "react";
import { Switch, Button, Modal, Carousel } from "antd";

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
class App extends React.Component {
  state = {
    scv: false,
    modalOpen: false,
  };
  _checkHandler = (checked) => {
    this.setState((precv) => {
      return {
        scv: checked,
      };
    });
  };

  _modalToggle = () => {
    this.setState((prev) => {
      return {
        modalOpen: !prev.modalOpen,
      };
    });
  };

  _imageChangeHandler = (a, b, c) => {
    console.log(a, b, c);
  };
  render() {
    return (
      <section>
        <h3>Switch {this.state.scv ? "체크가 되어었어요" : "체크가 안됨"}</h3>
        <Switch
          defaultChecked={false}
          checked={this.state.scv}
          onChange={this._checkHandler}
        />
        <h3>Button</h3>
        <Button type="primary" size="small">
          확인
        </Button>
        <Button type="danger" size="large">
          취소
        </Button>
        <Button type="link">링크</Button>
        <Button type="primary" loading={true}>
          로딩
        </Button>
        <h3>모달</h3>
        <Button type="primary" onClick={() => this._modalToggle()}>
          MODAL OPEN
        </Button>
        <Modal
          title="My First Modal"
          width="600px"
          visible={this.state.modalOpen}
          onCancel={() => this._modalToggle()}
          onOK={() => alert("OK ARLERT")}
        >
          <h1>sddsdsdsdsd</h1>
        </Modal>
        <h3>image slider</h3>

        <Carousel
          afterChange={this._imageChangeHandler}
          autoplay={true}
          dotPosition="bottom"
          effect="fade"
        >
          <div>
            <h3 style={contentStyle}>1</h3>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>
      </section>
    );
  }
}

export default App;
