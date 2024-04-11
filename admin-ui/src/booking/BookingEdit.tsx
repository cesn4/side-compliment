import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const BookingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="TItle" source="tItle" />
      </SimpleForm>
    </Edit>
  );
};
