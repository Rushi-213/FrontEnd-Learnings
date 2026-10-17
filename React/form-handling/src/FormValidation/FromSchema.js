import * as Yup from 'yup';

export const formSchema = Yup.object({
    name: Yup.string().required("Name is required").min(3, "Name must be at least 3 characters").max(20, "Name must be at most 20 characters"),
    email: Yup.string().email("Invalid email format").required("Email is required")
});