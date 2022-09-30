import React from "react";
import { Button, ButtonToolbar, Modal } from "rsuite";
import { useState } from "react";
import "rsuite/dist/rsuite.min.css";

const MuiModel = () => {
  const [open, setOpen] = useState(false);
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
    </>
  );
};

export default MuiModel;
