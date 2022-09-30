import React from "react";
import {
  Notification,
  useToaster,
  Placeholder,
  Uploader,
  ButtonToolbar,
  SelectPicker,
  Button,
} from "rsuite";
import "rsuite/dist/rsuite.css";

const MuiNotification = () => {
  const [type, setType] = React.useState("info");
  const [placement, setPlacement] = React.useState("topStart");
  const toaster = useToaster();

  const message = (
    <Notification type={type} header={type} closable>
      <h3> With toaster </h3>
      <Placeholder.Paragraph style={{ width: 320 }} rows={3} />
      <hr />
      <Uploader action="#" />
    </Notification>
  );

  return (
    <>
      <Notification>
        <h3>Basic Notification</h3>
        <Placeholder.Paragraph style={{ width: 320 }} rows={3} />
      </Notification>
      <br />
      <Notification type="success" header="Success">
        <h3>Success Notification</h3>
        <Placeholder.Paragraph style={{ width: 320 }} rows={3} />
      </Notification>
      <br />
      <Notification type="info" header="Info">
        <h3>Info Notification</h3>
        <Placeholder.Paragraph style={{ width: 320 }} rows={3} />
      </Notification>
      <br />
      <Notification type="warning" header="Warning">
        <h3>Warning Notification</h3>
        <Placeholder.Paragraph style={{ width: 320 }} rows={3} />
      </Notification>
      <br />
      <Notification type="error" header="Error">
        <h3>Error Notification</h3>
        <Placeholder.Paragraph style={{ width: 320 }} rows={3} />
      </Notification>
      <br />
      <Notification closable type="error" header="Error">
        <h3>Closable Notification</h3>
        <Placeholder.Paragraph style={{ width: 320 }} rows={3} />
      </Notification>
      <br />
      {message}
      <hr />
      <ButtonToolbar>
        <SelectPicker
          value={type}
          data={[
            { label: "info", value: "info" },
            { label: "success", value: "success" },
            { label: "warning", value: "warning" },
            { label: "error", value: "error" },
          ]}
          onChange={setType}
          style={{ width: 200 }}
        />
        <SelectPicker
          value={placement}
          data={[
            { label: "topStart", value: "topStart" },
            { label: "topCenter", value: "topCenter" },
            { label: "topEnd", value: "topEnd" },
            { label: "bottomStart", value: "bottomStart" },
            { label: "bottomCenter", value: "bottomCenter" },
            { label: "bottomEnd", value: "bottomEnd" },
          ]}
          onChange={setPlacement}
          style={{ width: 200 }}
        />
        <Button onClick={() => toaster.push(message, { placement })}>
          Push
        </Button>
        <Button onClick={() => toaster.remove()}>Remove</Button>
        <Button onClick={() => toaster.clear()}>Clear</Button>
      </ButtonToolbar>
      );
    </>
  );
};

export default MuiNotification;
