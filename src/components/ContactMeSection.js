import React, { useEffect } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from "yup";
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const ContactMeSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "hireMe",
      comment: "",
    },
    onSubmit: (values) => {
      submit("https://john.com/contactme", values);
    },
  validationSchema: Yup.object({
      firstName: Yup.string().required('required!'),
      email: Yup.string().email('invalid email').required("Required!!!"),
      type: Yup.string().required('Required!!!'),
      comment: Yup.string().min("26").required('Required!!!!'),
    }),
  });

  useEffect(() => {
    if (response) {
      onOpen(response.type, response.message);
      if (response.type === "success") {
        formik.resetForm();
      }
    }
  }, [response]);

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl
                isInvalid={
                  !!formik.errors.firstName && formik.touched.firstName
                }
              >
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  placeholder="Enter your name"
                  {...formik.getFieldProps("firstName")}
                />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={!!formik.errors.email && formik.touched.email}
              >
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your Email"
                  {...formik.getFieldProps("email")}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select id="type" name="type" style={{backgroundColor: "#512DA8"}} {...formik.getFieldProps("type")}>
                  <option value="hireMe" style={{backgroundColor: "grey"}} >Freelance project proposal</option>
                  <option value="openSource" style={{backgroundColor: "grey"}}>
                    Open source consultancy session
                  </option>
                  <option value="other" style={{backgroundColor: "grey"}}>Other</option>
                </Select>
              </FormControl>
              <FormControl
                isInvalid={!!formik.errors.comment && formik.touched.comment}
              >
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  {...formik.getFieldProps("comment")}
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>
              <Button
                type="submit"
                colorScheme="purple"
                width="full"
                isLoading={isLoading}
              >
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default ContactMeSection;





// import React, {useEffect} from "react";
// import { useFormik, errors } from "formik";
// import {
//   Box,
//   Button,
//   FormControl,
//   FormErrorMessage,
//   FormLabel,
//   Heading,
//   Input,
//   Select,
//   Textarea,
//   VStack,
// } from "@chakra-ui/react";
// import * as Yup from 'yup';
// import FullScreenSection from "./FullScreenSection";
// import useSubmit from "../hooks/useSubmit";
// import {useAlertContext} from "../context/alertContext";


// const LandingSection = () => {
//   const {isLoading, response, submit} = useSubmit();
//   const { onOpen } = useAlertContext();

//   const formik = useFormik({
//     initialValues: {firstName:"", email:"", type:"", comment:""},
//     onSubmit: (values) => {
//       console.log("Line 27", values.firstName, values.email, values.type, values.comment);
//     },
//     validationSchema: Yup.object({
//       name: Yup.string().required('required!'),
//       email: Yup.string().email('invalid email').required("Required!!!"),
//       type: Yup.string().required('Required!!!'),
//       message: Yup.string().required('Required!!!!'),

//     }),
    
//   });

 
  

//   return (
//     <FullScreenSection
//       isDarkBackground
//       backgroundColor="#512DA8"
//       py={16}
//       spacing={8}
//     >
//       <VStack w="1024px" p={32} alignItems="flex-start">
//         <Heading as="h1" id="contactme-section">
//           Contact me
//         </Heading>
//         <Box p={6} rounded="md" w="100%">
//           <form>
//             <VStack spacing={4}>
//               <FormControl isInvalid={false}>
//                 <FormLabel htmlFor="firstName">Name</FormLabel>
//                 <Input
//                   id="firstName"
//                   name="firstName"
//                 />
//                 <FormErrorMessage></FormErrorMessage>
//               </FormControl>
//               <FormControl isInvalid={false}>
//                 <FormLabel htmlFor="email">Email Address</FormLabel>
//                 <Input
//                   id="email"
//                   name="email"
//                   type="email"
//                 />
//                 <FormErrorMessage></FormErrorMessage>
//               </FormControl>
//               <FormControl>
//                 <FormLabel htmlFor="type">Type of enquiry</FormLabel>
//                 <Select id="type" name="type">
//                   <option value="hireMe">Freelance project proposal</option>
//                   <option value="openSource">
//                     Open source consultancy session
//                   </option>
//                   <option value="other">Other</option>
//                 </Select>
//               </FormControl>
//               <FormControl isInvalid={false}>
//                 <FormLabel htmlFor="comment">Your message</FormLabel>
//                 <Textarea
//                   id="comment"
//                   name="comment"
//                   height={250}
//                 />
//                 <FormErrorMessage></FormErrorMessage>
//               </FormControl>
//               <Button type="submit" colorScheme="purple" width="full">
//                 Submit
//               </Button>
//             </VStack>
//           </form>
//         </Box>
//       </VStack>
//     </FullScreenSection>
//   );
// };

// export default LandingSection;
