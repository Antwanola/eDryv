import { Avatar, AvatarGroup } from '../../components/ui/avatar';
import { AvatarItem } from '../../Utils/types';


const items:Array<AvatarItem> = [
    {
        itemName: "first",
        itemSrc: "/the source"
    },
    {
        itemName: "first",
        itemSrc: "/the source"
    },
    {
        itemName: "first",
        itemSrc: "/the source"
    },
    {
        itemName: "first",
        itemSrc: "/the source"
    },
]
const AvatarComp: React.FC = ({}) => {
  return (
       <AvatarGroup size="lg" stacking="last-on-top">
        {items.map((item) => (
          <Avatar key={item.itemName} src={item.itemSrc} name={item.itemName} />
        ))}
        <Avatar fallback="+3" />
      </AvatarGroup>
  )
}


export default AvatarComp