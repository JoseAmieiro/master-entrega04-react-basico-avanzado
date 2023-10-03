export interface FormData {
  username: string;
  password: string;
}

export const createEmptyFormData = (): FormData => ({
  username: "",
  password: "",
});
