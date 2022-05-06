import BetsSlipContainer from "./components/containers/BetsSlipContainer"
import EventsListContainer from "./components/containers/EventsListContainer"
import DrawerLayout from "./components/layouts/Drawer"
import StatusHeading from './components/StatusHeading'

function App() {
  return (
    <DrawerLayout drawerContent={<BetsSlipContainer emptyListComponent={<StatusHeading statusText="Your bet slip it's empty" />} />}>
      <EventsListContainer />
    </DrawerLayout>
  )
}

export default App
