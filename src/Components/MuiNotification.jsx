import React from "react";
import { Notification, Placeholder } from "rsuite";
import "rsuite/dist/rsuite.css";

const MuiNotification = () => {
  return (
    <>
      <h3>Basic Notification</h3>
      <Notification>
        <Placeholder.Paragraph style={{ width: 320 }} rows={3} />
      </Notification>
      <br />

      <h3>Success Notification</h3>

      <Notification type="success" header="Success">
        <Placeholder.Paragraph style={{ width: 320 }} rows={3} />
      </Notification>
      <br />

      <h3>Info Notification</h3>

      <Notification type="info" header="Info">
        <Placeholder.Paragraph style={{ width: 320 }} rows={3} />
      </Notification>
      <br />

      <h3>Warning Notification</h3>

      <Notification type="warning" header="Warning">
        <Placeholder.Paragraph style={{ width: 320 }} rows={3} />
      </Notification>
      <br />

      <h3>Error Notification</h3>

      <Notification type="error" header="Error">
        <Placeholder.Paragraph style={{ width: 320 }} rows={3} />
      </Notification>
    </>
  );
};

export default MuiNotification;
