import {
    useEffect,
    useState,
} from 'react';

const useForm = (validate) => {

    const [values, setValues] = useState({
        name: '',
        price: 0,
        category: 1
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log("Submit");
        validate(values);
    }

    return {
        errors,
        handleChange,
        handleSubmit,
        values,
    }
}

export default useForm;