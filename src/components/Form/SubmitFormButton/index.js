import React from "react";
import { useFormikContext } from "formik";
import PrimaryButton from "../../Buttons/PrimaryButton";

const SubmitFormButton = ({ title }) => {
  const { handleSubmit } = useFormikContext();

  return <PrimaryButton title={title} onPress={handleSubmit} />;
};

export default SubmitFormButton;
