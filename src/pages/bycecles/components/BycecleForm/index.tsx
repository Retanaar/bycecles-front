import { Form, Field } from "react-final-form";
import {
  ButtonsRow,
  Footer,
  FormRow,
  TextareaWrapper,
  Wrapper,
} from "./styled";
import { IBycecle } from "../../interfaces/Bycecles";

type Props = {
  addNewBycecle: (data: Omit<IBycecle, "status">) => void;
};

function BycecleForm({ addNewBycecle }: Props) {
  const required = (value: string) => (value ? undefined : "Required");
  const mustBeNumber = (value: any) =>
    isNaN(value) ? "Must be a number" : undefined;
  const minLength = (min: number) => (value: string) =>
    value.length >= min
      ? undefined
      : `Length should be greater than ${min - 1}`;
  const composeValidators =
    (...validators: any[]) =>
    (value: string) =>
      validators.reduce(
        (error, validator) => error || validator(value),
        undefined
      );

  return (
    <Form<Omit<IBycecle, "status">>
      onSubmit={async (data) => {
        const result = await addNewBycecle(data);
        return result;
      }}
      render={({ handleSubmit, form, submitting, pristine }) => (
        <form onSubmit={handleSubmit} noValidate>
          <Wrapper>
            <FormRow>
              <Field
                name="name"
                validate={composeValidators(required, minLength(5))}
              >
                {({ input, meta }) => (
                  <div>
                    <input type="text" placeholder="Name" {...input} />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field
                name="type"
                validate={composeValidators(required, minLength(5))}
              >
                {({ input, meta }) => (
                  <div>
                    <input type="text" placeholder="Type" {...input} />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
            </FormRow>
            <FormRow>
              <Field
                name="color"
                validate={composeValidators(required, minLength(5))}
              >
                {({ input, meta }) => (
                  <div>
                    <input type="text" placeholder="Color" {...input} />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field
                name="wheel_size"
                validate={composeValidators(required, mustBeNumber)}
              >
                {({ input, meta }) => (
                  <div>
                    <input type="text" placeholder="Wheel size" {...input} />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
            </FormRow>
            <FormRow>
              <Field
                name="price"
                validate={composeValidators(required, mustBeNumber)}
              >
                {({ input, meta }) => (
                  <div>
                    <input type="text" placeholder="Price" {...input} />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field
                name="slug"
                validate={composeValidators(required, minLength(5))}
              >
                {({ input, meta }) => (
                  <div>
                    <input type="text" placeholder="ID (slug)" {...input} />
                    {(meta.error && meta.touched) ||
                      (meta.submitError && meta.touched && (
                        <span>{meta.error || meta.submitError}</span>
                      ))}
                  </div>
                )}
              </Field>
            </FormRow>
            <FormRow>
              <Field
                name="description"
                validate={composeValidators(required, minLength(5))}
              >
                {({ input, meta }) => (
                  <TextareaWrapper>
                    <textarea
                      type="text"
                      placeholder="Description"
                      {...input}
                    />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </TextareaWrapper>
                )}
              </Field>
            </FormRow>
            <ButtonsRow>
              <button type="submit" disabled={submitting}>
                SAVE
              </button>
              <button onClick={form.reset} disabled={submitting || pristine}>
                CLEAR
              </button>
            </ButtonsRow>
          </Wrapper>
          <Footer />
        </form>
      )}
    />
  );
}

export default BycecleForm;
