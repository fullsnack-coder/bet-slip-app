import { Box } from "@mui/material"
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

  if (status === "pending") return <p>Loading...</p>

  return (
    <Box p="12px">
      {hasEmptyEvents ? emptyListComponent ?? null : events.map((item) => (
        <Event key={item.id} event={item} />
      ))}
    </Box>
  )
}

export default EventsListContainer
