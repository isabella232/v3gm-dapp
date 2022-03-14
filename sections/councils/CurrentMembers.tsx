import React from 'react'
import Member from './Member'
import { Grid } from '@chakra-ui/react'

type CurrentMembersProps = {}

const CurrentMembers: React.FC<CurrentMembersProps> = ({}) => {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={6}>
      <Member />
      <Member />
      <Member />
    </Grid>
  )
}
export default CurrentMembers
