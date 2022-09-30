import React from "react";
import { Button, ButtonToolbar, Modal, Radio, RadioGroup } from "rsuite";
import { useState } from "react";
import "rsuite/dist/rsuite.min.css";

const styles = {
  radioGroupLabel: {
    padding: "8px 12px",
    display: "inline-block",
    verticalAlign: "middle",
  },
};

const MuiModel = () => {
  const [open, setOpen] = useState(false);
  const [backdrop, setBackdrop] = useState("static");
  const hendelOpen = () => setOpen(true);
  const hendleClose = () => setOpen(false);
  return (
    <>
      <ButtonToolbar>
        <Button onClick={hendelOpen}>OPEN</Button>
      </ButtonToolbar>

      <Modal open={open} onClose={hendleClose}>
        <Modal.Header>
          <Modal.Title>Lorem</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
            deleniti architecto saepe ipsum hic voluptatibus recusandae
            assumenda dicta voluptatem? Quas odio mollitia nesciunt optio
            consequatur. Accusantium eaque deleniti explicabo magnam.
          </p>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={hendleClose} appearance="primary">
            OK
          </Button>
          <Button onClick={hendleClose} appearance="primary">
            CANCEL
          </Button>
        </Modal.Footer>
      </Modal>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <RadioGroup
        name="radiolist"
        appearance="picker"
        inline
        value={backdrop}
        onChange={(value) => setBackdrop(value)}
      >
        <span style={styles.radioGroupLabel}>Backdrop</span>
        <Radio value="static">Static</Radio>
        <Radio value={true}>true</Radio>
        <Radio value={false}>false</Radio>
      </RadioGroup>
      <hr />
      <ButtonToolbar>
        <Button onClick={hendelOpen}>OPEN</Button>
      </ButtonToolbar>
      <Modal
        backdrop={backdrop}
        keyboard={false}
        open={open}
        onClose={hendleClose}
      >
        <Modal.Header>
          <Modal.Title>Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
          accusantium reprehenderit, nemo possimus eos earum dolores voluptatum
          suscipit eligendi velit, soluta consequatur quaerat numquam distinctio
          unde quas maiores. Nam, consectetur!
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={hendleClose} appearance="primary">
            OK
          </Button>
          <Button onClick={hendleClose} appearance="primary">
            CANCEL
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MuiModel;
