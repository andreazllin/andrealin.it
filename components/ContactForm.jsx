import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Spinner,
} from "@chakra-ui/react";
import axios from "axios";

export default function ContactForm() {
  const { register, handleSubmit, watch, errors } = useForm();

  const [buttonStyle, setButtonStyle] = useState({
    disabled: false,
    color: "teal",
    content: "Inviami un'email",
  });

  const onSubmit = (data) => {
    console.log(data);

    setButtonStyle({
      disabled: true,
      color: "blue",
      content: <Spinner />,
    });

    axios
      .post("/api/email", data)
      .then((response) => {
        console.log(response);
        setButtonStyle({
          disabled: true,
          color: "green",
          content: "Email inviata, risponderò il prima possibile!",
        });
      })
      .catch((error) => {
        console.log(error);
        setButtonStyle({
          disabled: true,
          color: "red",
          content: "C'è stato un errore, riprova più tardi.",
        });
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} id="sendmail">
        <VStack spacing={2}>
          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="Email"
              name="contactEmail"
              ref={register({ required: true })}
            />
          </FormControl>
          <FormControl id="message" isRequired>
            <FormLabel>Messaggio</FormLabel>
            <Textarea 
              rows="10"
              placeholder="Scrivimi una mail!"
              resize="vertical"
              name="emailText"
              resize="none"
              ref={register({ required: true })}
            />
          </FormControl>
          <FormControl isRequired>
            <Button
              type="submit"
              form="sendmail"
              variant="solid"
              colorScheme={buttonStyle.color}
              disabled={buttonStyle.disabled}
            >
              {buttonStyle.content}
            </Button>
          </FormControl>
        </VStack>
      </form>
    </>
  );
}
