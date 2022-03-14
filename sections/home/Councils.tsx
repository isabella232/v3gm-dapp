import React from 'react'
import Council from './Council'
import { Grid } from '@chakra-ui/react'

type CouncilsProps = {}

const Councils: React.FC<CouncilsProps> = ({}) => {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={6}>
      <Council />
      <Council />
      <Council />
    </Grid>
  )
}
export default Councils
