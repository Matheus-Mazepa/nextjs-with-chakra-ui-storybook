'use client';

import React, {ReactNode} from "react";
import {Box, Grid, GridItem} from "@chakra-ui/react";

interface TemplateAuthenticationProps {
  children: ReactNode;
}

const TemplateAuthenticationLeft = () => {
  return null;
}

const TemplateAuthenticationRight = () => {
  return null;
}

const TemplateAuthentication: React.FC<TemplateAuthenticationProps> & {
  Left?: React.FC
} =
  ({ children }) => {
  const left = React.Children.toArray(children).find(child => child.type === TemplateAuthenticationLeft);
  const right = React.Children.toArray(children).find(child => child.type === TemplateAuthenticationRight);

  return (
    <Grid templateColumns={'1fr 1fr'}>
      <GridItem colSpan={1}>
        {left ? left.props.children : null}
      </GridItem>
      <GridItem colSpan={1}>
        <Box>
          {right ? right.props.children : null}
        </Box>
      </GridItem>
    </Grid>
  )
}

export { TemplateAuthenticationLeft, TemplateAuthenticationRight}

export default TemplateAuthentication
