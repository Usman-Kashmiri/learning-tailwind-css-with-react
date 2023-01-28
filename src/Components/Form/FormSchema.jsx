import * as yup from "yup";

export const FormSchema = yup.object({
    note_title:yup.string().required("Note title is required..!"),
    note_description:yup.string().required("Description is required..!"),
    category:yup.string().required("Please specify note category...!")
});