'use client';

import OganismoLoginForm from "@/components/Oganismo/Login/Form";
import TemplateAuthentication, {TemplateAuthenticationLeft, TemplateAuthenticationRight} from "@/template/authentication";
import AtomImage from "@/components/Atoms/Image";
import {Center} from "@chakra-ui/react";

export default function Login() {
  return (
    <TemplateAuthentication>
      <TemplateAuthenticationLeft>
        <AtomImage height={100} width={100} src={'/left-image.png'}/>
      </TemplateAuthenticationLeft>
      <TemplateAuthenticationRight>
        <Center>
        <AtomImage height={48} width={48} src={'/logo.png'}/>
      </Center>
        <OganismoLoginForm onSubmit={() => {}} />
      </TemplateAuthenticationRight>
    </TemplateAuthentication>
  )
}
