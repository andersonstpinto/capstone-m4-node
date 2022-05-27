import * as yup from "yup";

const updateOrderServiceSchema = {
  schema: {
    body: {
      yupSchema: yup.object().shape({
        status: yup.string().matches(/(Aberto|Fechado)/, "Invalid status"),
      }),
      validateOptions: {
        abortEarly: false,
      },
    },
  },
};

export default updateOrderServiceSchema;
