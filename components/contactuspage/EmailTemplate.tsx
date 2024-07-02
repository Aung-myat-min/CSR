import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface EmailTemProps {
  userFirstname: string;
}

export const EmailtemplateV2 = ({ userFirstname }: EmailTemProps) => (
  <Html>
    <Head />
    <Preview>Welcome to GUSTO-CSR, {userFirstname}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`https://96quhetnznzbwqlu.public.blob.vercel-storage.com/blue_csr_logo-ubJCdFcnrjWhESEXTQVwadrzYCcNME.png`}
          width="70"
          height="70"
          alt="GUSTO-CSR"
          style={logo}
        />
        <Text style={paragraph}>Hi {userFirstname},</Text>
        <Text style={paragraph}>
          Welcome to GUSTO-CSR, one of the most innovative, non-profit
          organizations running by university students. This messages informs
          you that we have received your message and will get back to you as
          soon as possible. Again, thank you for contacing us.
        </Text>
        <Text style={paragraph}>
          Best Regerds,
          <br />
          GUSTO-CSR org,
        </Text>
        <Hr style={hr} />
        <Text style={footer}>© 2024 GUSTO-CSR. All rights reserved.</Text>
      </Container>
    </Body>
  </Html>
);

export default EmailtemplateV2;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center" as const,
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};
