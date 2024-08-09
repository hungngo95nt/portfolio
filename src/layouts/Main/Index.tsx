import Content from "../Content/Index";
import SideBar from "../SideBar/Index";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface Props {
  title: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Main = (_props: Props) => {
  return (
    <div className="w-full">
      <div className="lg:flex">
      <SideBar />
      <Content />
      </div>
    </div>
)
}

export default Main;