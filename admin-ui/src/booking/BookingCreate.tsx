import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const BookingCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="TItle" source="tItle" />
      </SimpleForm>
    </Create>
  );
};
