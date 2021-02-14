import {
  Button,
  Classes,
  Dialog,
  IDialogProps,
  Intent,
} from "@blueprintjs/core";
import React, { FC } from "react";

type GenericAddEditDialogProps = {
  type: "add" | "edit";
  what: string; // type of object to be added or editted
  disabled: boolean;
  action: () => void;
} & IDialogProps;

const AddEditDialog: FC<GenericAddEditDialogProps> = ({
  type,
  what,
  disabled,
  action,
  ...dialogProps
}) => (
  <Dialog
    icon={type}
    title={`${type.charAt(0).toUpperCase() + type.slice(1)} ${what}`}
    canOutsideClickClose={false}
    {...dialogProps}
  >
    <div className={Classes.DIALOG_BODY}>{dialogProps.children}</div>
    <div className={Classes.DIALOG_FOOTER}>
      <div className={Classes.DIALOG_FOOTER_ACTIONS}>
        <Button onClick={dialogProps.onClose}>Close</Button>
        <Button
          text={`${type.charAt(0).toUpperCase() + type.slice(1)} ${what}`}
          intent={Intent.PRIMARY}
          onClick={(event: any) => {
            action();
            dialogProps.onClose!(event);
          }}
          disabled={disabled}
        />
      </div>
    </div>
  </Dialog>
);

export default AddEditDialog;
