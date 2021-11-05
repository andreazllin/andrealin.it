import { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { CgSpinner } from 'react-icons/cg'

export default function ContactForm() {
    const { register, handleSubmit } = useForm();

    const [buttonStyle, setButtonStyle] = useState({
        css:"text-white bg-gray-900 px-5 py-2 w-max",
        disabled: false,
        content: "Inviami un'email",
    });

    const onSubmit = (data) => {
        console.log(data);

        setButtonStyle({
            css: 'text-white bg-gray-900/50 px-5 py-2 w-max',
            disabled: true,
            content: <CgSpinner className="animate-spin text-2xl" />,
        });

        axios
            .post('/api/email', data)
            .then((response) => {
                console.log(response);
                setButtonStyle({
                    css: 'text-white bg-gray-900/50 px-5 py-2 w-max',
                    disabled: true,
                    content: 'Email inviata, risponderò il prima possibile!',
                });
            })
            .catch((error) => {
                console.log(error);
                setButtonStyle({
                    disabled: true,
                    color: 'red',
                    content: "C'è stato un errore, riprova più tardi.",
                });
            });
    };

    return (
        <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)} id="sendmail">
            <div className="flex flex-col gap-2">
                <label className="font-regular" htmlFor="email">
                    Email <span className="text-red-600">*</span>
                </label>
                <input className="w-full border border-gray-200 px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-gray-300" type="email" name="contactEmail" placeholder="email@example.com" ref={register({ required: true })} />
            </div>
            <div className="flex flex-col gap-2">
                <label className="font-regular" htmlFor="emailText">
                    Messaggio <span className="text-red-600">*</span>
                </label>
                <textarea
                    className="w-full border border-gray-200 px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-gray-300"
                    name="emailText"
                    cols="30"
                    rows="10"
                    placeholder="Scrivimi una mail!"
                    resize="vertical"
                    ref={register({ required: true })}
                />
            </div>

            <button className={buttonStyle.css} type="submit" form="sendmail" disabled={buttonStyle.disabled}>
                {buttonStyle.content}
            </button>
        </form>
    );
}
