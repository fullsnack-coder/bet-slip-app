import { Box, Typography } from "@mui/material"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useAppSelector } from "../../../store"
import { getEventsAction } from "../../../store/modules/events"
import Event from "../../Event"

type Props = {
  emptyListComponent?: React.ReactElement
}

const EventsListContainer: React.FC<Props> = ({ emptyListComponent }) => {
  const { events, status } = useAppSelector((state) => state.eventsModule)
  const appDispatch = useDispatch()
  const hasEmptyEvents = events.length === 0

  useEffect(() => {
    appDispatch(getEventsAction() as any)
  }, [appDispatch])

  if (status === "pending") return <Typography sx={{ py: '22px' }} textAlign="center">Loading...</Typography>

  return (
    <Box p="12px" maxWidth="450px" mx="auto">
      {hasEmptyEvents ? emptyListComponent ?? null : events.map((item) => (
        <Event key={item.id} event={item} />
      ))}
    </Box>
  )
}

export default EventsListContainer
